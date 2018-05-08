webpackJsonp([1],{

/***/ 109:
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

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(searchProduct, 'searchProduct', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(productSelectedTable, 'productSelectedTable', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/actions.js');
}();

;

/***/ }),

/***/ 110:
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

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/actions.js');
}();

;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(5);
var normalizeHeaderName = __webpack_require__(38);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(20);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(20);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(5);
var settle = __webpack_require__(39);
var buildURL = __webpack_require__(41);
var parseHeaders = __webpack_require__(42);
var isURLSameOrigin = __webpack_require__(43);
var createError = __webpack_require__(21);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(44);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(45);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(40);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 290:
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

  __REACT_HOT_LOADER__.register(clientSelected, 'clientSelected', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(userSelected, 'userSelected', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/actions.js');
}();

;

/***/ }),

/***/ 291:
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

  __REACT_HOT_LOADER__.register(updateStoreCashAmount, 'updateStoreCashAmount', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardAuth, 'updateStoreCardAuth', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardDigits, 'updateStoreCardDigits', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/actions.js');
}();

;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var bind = __webpack_require__(19);
var Axios = __webpack_require__(37);
var defaults = __webpack_require__(14);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(23);
axios.CancelToken = __webpack_require__(51);
axios.isCancel = __webpack_require__(22);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(52);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(14);
var utils = __webpack_require__(5);
var InterceptorManager = __webpack_require__(46);
var dispatchRequest = __webpack_require__(47);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(21);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 4:
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

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(13);

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

  __REACT_HOT_LOADER__.register(getItemDispatch, 'getItemDispatch', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemDoubleDispatch, 'getItemDoubleDispatch', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemReturn, 'getItemReturn', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setItem, 'setItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(updateItem, 'updateItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItem, 'patchItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItems, 'patchItems', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(deleteItem, 'deleteItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(loadGlobalConfig, 'loadGlobalConfig', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveLog, 'saveLog', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getNextNumericCode, 'getNextNumericCode', 'G:/Z_M/fac_sys/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setNextPrevItem, 'setNextPrevItem', 'G:/Z_M/fac_sys/frontend/utils/api.js');
}();

;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var transformData = __webpack_require__(48);
var isCancel = __webpack_require__(22);
var defaults = __webpack_require__(14);
var isAbsoluteURL = __webpack_require__(49);
var combineURLs = __webpack_require__(50);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(19);
var isBuffer = __webpack_require__(36);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(23);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULFILLED", function() { return FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECTED", function() { return REJECTED; });
/* harmony export (immutable) */ __webpack_exports__["default"] = promiseMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPromise_js__ = __webpack_require__(56);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Note to contributors: Please also remember to check and make sure
 * that `index.d.ts` is also up to date with the implementation when
 * you add new features or modify existing ones.
 */

// The default async action types
var PENDING = 'PENDING';
var FULFILLED = 'FULFILLED';
var REJECTED = 'REJECTED';
var defaultTypes = [PENDING, FULFILLED, REJECTED];

/**
 * Function: promiseMiddleware
 * Description: The main promiseMiddleware accepts a configuration
 * object and returns the middleware.
 */
function promiseMiddleware() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var PROMISE_TYPE_SUFFIXES = config.promiseTypeSuffixes || defaultTypes;
  var PROMISE_TYPE_DELIMITER = config.promiseTypeDelimiter || '_';

  return function (ref) {
    var dispatch = ref.dispatch;


    return function (next) {
      return function (action) {

        /**
         * Instantiate variables to hold:
         * (1) the promise
         * (2) the data for optimistic updates
         */
        var promise = void 0;
        var data = void 0;

        /**
         * There are multiple ways to dispatch a promise. The first step is to
         * determine if the promise is defined:
         * (a) explicitly (action.payload.promise is the promise)
         * (b) implicitly (action.payload is the promise)
         * (c) as an async function (returns a promise when called)
         *
         * If the promise is not defined in one of these three ways, we don't do
         * anything and move on to the next middleware in the middleware chain.
         */

        // Step 1a: Is there a payload?
        if (action.payload) {
          var PAYLOAD = action.payload;

          // Step 1.1: Is the promise implicitly defined?
          if (Object(__WEBPACK_IMPORTED_MODULE_0__isPromise_js__["a" /* default */])(PAYLOAD)) {
            promise = PAYLOAD;
          }

          // Step 1.2: Is the promise explicitly defined?
          else if (Object(__WEBPACK_IMPORTED_MODULE_0__isPromise_js__["a" /* default */])(PAYLOAD.promise)) {
              promise = PAYLOAD.promise;
              data = PAYLOAD.data;
            }

            // Step 1.3: Is the promise returned by an async function?
            else if (typeof PAYLOAD === 'function' || typeof PAYLOAD.promise === 'function') {
                promise = PAYLOAD.promise ? PAYLOAD.promise() : PAYLOAD();
                data = PAYLOAD.promise ? PAYLOAD.data : undefined;

                // Step 1.3.1: Is the return of action.payload a promise?
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPromise_js__["a" /* default */])(promise)) {

                  // If not, move on to the next middleware.
                  return next(_extends({}, action, {
                    payload: promise
                  }));
                }
              }

              // Step 1.4: If there's no promise, move on to the next middleware.
              else {
                  return next(action);
                }

          // Step 1b: If there's no payload, move on to the next middleware.
        } else {
          return next(action);
        }

        /**
         * Instantiate and define constants for:
         * (1) the action type
         * (2) the action meta
         */
        var TYPE = action.type;
        var META = action.meta;

        /**
         * Instantiate and define constants for the action type suffixes.
         * These are appended to the end of the action type.
         */

        var _PROMISE_TYPE_SUFFIXE = _slicedToArray(PROMISE_TYPE_SUFFIXES, 3),
            _PENDING = _PROMISE_TYPE_SUFFIXE[0],
            _FULFILLED = _PROMISE_TYPE_SUFFIXE[1],
            _REJECTED = _PROMISE_TYPE_SUFFIXE[2];

        /**
         * Function: getAction
         * Description: This function constructs and returns a rejected
         * or fulfilled action object. The action object is based off the Flux
         * Standard Action (FSA).
         *
         * Given an original action with the type FOO:
         *
         * The rejected object model will be:
         * {
         *   error: true,
         *   type: 'FOO_REJECTED',
         *   payload: ...,
         *   meta: ... (optional)
         * }
         *
         * The fulfilled object model will be:
         * {
         *   type: 'FOO_FULFILLED',
         *   payload: ...,
         *   meta: ... (optional)
         * }
         */


        var getAction = function getAction(newPayload, isRejected) {
          return _extends({
            // Concatentate the type string property.
            type: [TYPE, isRejected ? _REJECTED : _FULFILLED].join(PROMISE_TYPE_DELIMITER)

          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
            payload: newPayload
          }, META !== undefined ? { meta: META } : {}, isRejected ? {
            error: true
          } : {});
        };

        /**
         * Function: handleReject
         * Calls: getAction to construct the rejected action
         * Description: This function dispatches the rejected action and returns
         * the original Error object. Please note the developer is responsible
         * for constructing and throwing an Error object. The middleware does not
         * construct any Errors.
         */
        var handleReject = function handleReject(reason) {
          var rejectedAction = getAction(reason, true);
          dispatch(rejectedAction);

          throw reason;
        };

        /**
         * Function: handleFulfill
         * Calls: getAction to construct the fullfilled action
         * Description: This function dispatches the fulfilled action and
         * returns the success object. The success object should
         * contain the value and the dispatched action.
         */
        var handleFulfill = function handleFulfill() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var resolvedAction = getAction(value, false);
          dispatch(resolvedAction);

          return { value: value, action: resolvedAction };
        };

        /**
         * First, dispatch the pending action:
         * This object describes the pending state of a promise and will include
         * any data (for optimistic updates) and/or meta from the original action.
         */
        next(_extends({
          // Concatentate the type string.
          type: [TYPE, _PENDING].join(PROMISE_TYPE_DELIMITER)

        }, data !== undefined ? { payload: data } : {}, META !== undefined ? { meta: META } : {}));

        /**
         * Second, dispatch a rejected or fulfilled action and move on to the
         * next middleware.
         */
        return promise.then(handleFulfill, handleReject);
      };
    };
  };
}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPromise;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPromise(value) {
  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
}

/***/ }),

/***/ 59:
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

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(63);

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

var _reactRouterDom = __webpack_require__(3);

var _actions = __webpack_require__(611);

var _routes = __webpack_require__(612);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(656);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(658);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(64);

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

  __REACT_HOT_LOADER__.register(Main, 'Main', 'G:/Z_M/fac_sys/frontend/apps/sales/main/main.jsx');
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

var _axios = __webpack_require__(13);

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

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', 'G:/Z_M/fac_sys/frontend/apps/sales/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', 'G:/Z_M/fac_sys/frontend/apps/sales/main/actions.js');
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

var _reactRouterDom = __webpack_require__(3);

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

  __REACT_HOT_LOADER__.register(routes, 'routes', 'G:/Z_M/fac_sys/frontend/apps/sales/main/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'G:/Z_M/fac_sys/frontend/apps/sales/main/routes.js');
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

  __REACT_HOT_LOADER__.register(Home, 'Home', 'G:/Z_M/fac_sys/frontend/apps/sales/home/home.jsx');
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

  __REACT_HOT_LOADER__.register(Sale, 'Sale', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/main.jsx');
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

  __REACT_HOT_LOADER__.register(Main, 'Main', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/content/content.jsx');
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

var _api = __webpack_require__(4);

var _actions = __webpack_require__(84);

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

  __REACT_HOT_LOADER__.register(Product, 'Product', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/product.jsx');
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

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(Cart, 'Cart', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/cart.jsx');
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

var _actions2 = __webpack_require__(84);

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(CartItems, 'CartItems', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/cartItems.jsx');
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

  __REACT_HOT_LOADER__.register(updateTotals, 'updateTotals', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/actions.js');

  __REACT_HOT_LOADER__.register(removeFromCart, 'removeFromCart', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/actions.js');
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

  __REACT_HOT_LOADER__.register(Aside, 'Aside', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/aside/aside.jsx');
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

var _actions = __webpack_require__(290);

var _api = __webpack_require__(4);

var _getClientDebt = __webpack_require__(625);

var _actions2 = __webpack_require__(84);

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

  __REACT_HOT_LOADER__.register(Clients, 'Clients', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/clients.jsx');
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

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(13);

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

  __REACT_HOT_LOADER__.register(getClientDebt, 'getClientDebt', 'G:/Z_M/fac_sys/frontend/utils/getClientDebt.js');
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

var _actions = __webpack_require__(84);

var _alertifyjs = __webpack_require__(6);

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

  __REACT_HOT_LOADER__.register(Totals, 'Totals', 'G:/Z_M/fac_sys/frontend/apps/sales/general/totals/totals.jsx');
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

  __REACT_HOT_LOADER__.register(Buttons, 'Buttons', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/buttons/buttons.jsx');
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

var _actions = __webpack_require__(109);

var _searchForm = __webpack_require__(629);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(630);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(searchProducts, 'searchProducts', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/searchPanel.jsx');
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

var _actions = __webpack_require__(109);

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

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/searchForm.jsx');
}();

;

/***/ }),

/***/ 63:
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

    __REACT_HOT_LOADER__.register(_default, "default", "G:/Z_M/fac_sys/frontend/utils/formatMoney.js");
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

var _actions = __webpack_require__(109);

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

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/resultsTable.jsx');
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

var _actions = __webpack_require__(110);

var _searchForm = __webpack_require__(632);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(633);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(searchClients, 'searchClients', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/searchPanel.jsx');
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

var _actions = __webpack_require__(110);

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

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/searchForm.jsx');
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

var _actions = __webpack_require__(290);

var _actions2 = __webpack_require__(110);

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

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/resultsTable.jsx');
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

  __REACT_HOT_LOADER__.register(PayPanel, 'PayPanel', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/payPanel.jsx');
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

  __REACT_HOT_LOADER__.register(PayMethod, 'PayMethod', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/payMethod.jsx');
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

var _actions = __webpack_require__(291);

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

  __REACT_HOT_LOADER__.register(PayCash, 'PayCash', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/payCahs.jsx');
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

var _actions = __webpack_require__(291);

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

  __REACT_HOT_LOADER__.register(PayCard, 'PayCard', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/payCard.jsx');
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

  __REACT_HOT_LOADER__.register(PayCredit, 'PayCredit', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/payCredit.jsx');
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

  __REACT_HOT_LOADER__.register(PayOther, 'PayOther', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/payOther.jsx');
}();

;

/***/ }),

/***/ 64:
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

  __REACT_HOT_LOADER__.register(Fetching, 'Fetching', 'G:/Z_M/fac_sys/frontend/general/fetching/fetching.jsx');
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

var _api = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _save = __webpack_require__(641);

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(PaySideBar, 'PaySideBar', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/components/paySideBar.jsx');
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

var Mousetrap = __webpack_require__(59);

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

  __REACT_HOT_LOADER__.register(SaveBtn, 'SaveBtn', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/save/save.jsx');
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

var _alertifyjs = __webpack_require__(6);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

var _api = __webpack_require__(4);

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

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/save/actions.js');

  __REACT_HOT_LOADER__.register(saveCreditMovement, 'saveCreditMovement', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/save/actions.js');
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

var _api = __webpack_require__(4);

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

  __REACT_HOT_LOADER__.register(InvoicePanel, 'InvoicePanel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/invoicePanel/invoicePanel.jsx');
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

  __REACT_HOT_LOADER__.register(FullInvoice, 'FullInvoice', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/fullInvoice.jsx');
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

  __REACT_HOT_LOADER__.register(Header, 'Header', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/components/header.jsx');
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

  __REACT_HOT_LOADER__.register(Data, 'Data', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/components/data.jsx');
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

  __REACT_HOT_LOADER__.register(Table, 'Table', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/components/table.jsx');
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

  __REACT_HOT_LOADER__.register(Totals, 'Totals', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/components/totals.jsx');
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

  __REACT_HOT_LOADER__.register(Notes, 'Notes', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/fullInvoice/components/notes.jsx');
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

  __REACT_HOT_LOADER__.register(CompactInvoice, 'CompactInvoice', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/compactInvoice.jsx');
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

  __REACT_HOT_LOADER__.register(Header, 'Header', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/components/header.jsx');
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

  __REACT_HOT_LOADER__.register(Table, 'Table', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/components/table.jsx');
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

  __REACT_HOT_LOADER__.register(Data, 'Data', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/components/data.jsx');
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

  __REACT_HOT_LOADER__.register(Totals, 'Totals', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/components/totals.jsx');
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

  __REACT_HOT_LOADER__.register(Notes, 'Notes', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/compactInvoice/components/notes.jsx');
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

var _alertifyjs = __webpack_require__(6);

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

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/topBar/topBar.jsx');
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

  __REACT_HOT_LOADER__.register(toggleLayout, 'toggleLayout', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/topBar/actions.js');

  __REACT_HOT_LOADER__.register(toggleConfigBar, 'toggleConfigBar', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/topBar/actions.js');
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

var _reactRouterDom = __webpack_require__(3);

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

  __REACT_HOT_LOADER__.register(SideMenu, 'SideMenu', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/sideMenu/sideMenu.jsx');
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

  __REACT_HOT_LOADER__.register(Search, 'Search', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/sideMenu/components/search/search.jsx');
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

  __REACT_HOT_LOADER__.register(User, 'User', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/sideMenu/components/user/user.jsx');
}();

;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _reduxLogger = __webpack_require__(53);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(54);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(55);

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

  __REACT_HOT_LOADER__.register(middleware, 'middleware', 'G:/Z_M/fac_sys/frontend/apps/sales/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'G:/Z_M/fac_sys/frontend/apps/sales/store.js');
}();

;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _reducer = __webpack_require__(70);

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

  __REACT_HOT_LOADER__.register(_default, 'default', 'G:/Z_M/fac_sys/frontend/apps/sales/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/layout/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/user/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/cart/reducer.js');
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

  __REACT_HOT_LOADER__.register(clientSelectedModel, 'clientSelectedModel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(userSelectedModel, 'userSelectedModel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/clients/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/reducer.js');
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

var _alertifyjs = __webpack_require__(6);

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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/messages/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/messages/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/clients/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/search/products/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/sale/pay/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/invoice/reducer.js');
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

  __REACT_HOT_LOADER__.register(saleActiveModel, 'saleActiveModel', 'G:/Z_M/fac_sys/frontend/apps/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/general/sales/reducer.js');
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/apps/sales/config/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/apps/sales/config/reducer.js');
}();

;

/***/ }),

/***/ 70:
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', 'G:/Z_M/fac_sys/frontend/general/fetching/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', 'G:/Z_M/fac_sys/frontend/general/fetching/reducer.js');
}();

;

/***/ }),

/***/ 84:
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

  __REACT_HOT_LOADER__.register(recalcCart, 'recalcCart', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemDiscount, 'updateItemDiscount', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemLote, 'updateItemLote', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(productSelected, 'productSelected', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQty, 'updateQty', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQtyCode, 'updateQtyCode', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(addSubOne, 'addSubOne', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(checkIfInCart, 'checkIfInCart', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(caclSubtotal, 'caclSubtotal', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updatedCartItem, 'updatedCartItem', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(priceToUse, 'priceToUse', 'G:/Z_M/fac_sys/frontend/apps/sales/general/product/actions.js');
}();

;

/***/ })

},[609]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWxvZ2dlci9kaXN0L3JlZHV4LWxvZ2dlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvaG9tZS9ob21lLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydEl0ZW1zLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi91dGlscy9nZXRDbGllbnREZWJ0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXRNb25leS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2Focy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJoaWRlUGFuZWwiLCJzZWFyY2hQcm9kdWN0IiwicHJvZHVjdFNlbGVjdGVkVGFibGUiLCJ0eXBlIiwicGF5bG9hZCIsInZhbCIsInByb2R1Y3RzIiwidGV4dCIsInNwbGl0IiwibWF0Y2hzIiwiZm9yRWFjaCIsImNvbnRyb2wiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3QiLCJ0b1N0cmluZyIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwid29yZCIsInB1c2giLCJyZXMiLCJsZW5ndGgiLCJjb2RlIiwic2VhcmNoQ2xpZW50IiwiY2xpZW50cyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY2xpZW50IiwibGFzdF9uYW1lIiwiY2xpZW50U2VsZWN0ZWQiLCJ1c2VyU2VsZWN0ZWQiLCJmaW5kSW5kZXgiLCJfaWQiLCJ1c2VycyIsInVzZXIiLCJ1cGRhdGVTdG9yZUNhc2hBbW91bnQiLCJ1cGRhdGVTdG9yZUNhcmRBdXRoIiwidXBkYXRlU3RvcmVDYXJkRGlnaXRzIiwiYW1vdW50IiwicGFyc2VGbG9hdCIsIm51bWJlciIsImdldEl0ZW1EaXNwYXRjaCIsImdldEl0ZW1Eb3VibGVEaXNwYXRjaCIsImdldEl0ZW1SZXR1cm4iLCJzZXRJdGVtIiwic2F2ZUl0ZW0iLCJ1cGRhdGVJdGVtIiwicGF0Y2hJdGVtIiwicGF0Y2hJdGVtcyIsImRlbGV0ZUl0ZW0iLCJsb2FkR2xvYmFsQ29uZmlnIiwic2F2ZUxvZyIsImdldE5leHROdW1lcmljQ29kZSIsInNldE5leHRQcmV2SXRlbSIsImRlZmF1bHRzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsImt3YXJncyIsInVybCIsInN1Y2Nlc3NUeXBlIiwiZXJyb3JUeXBlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1cyIsImFsZXJ0Iiwic3VjY2Vzc1R5cGUyIiwibG9va1VwVmFsdWUiLCJsb29rVXBGaWVsZCIsImhpc3RvcnkiLCJyZWRpcmVjdFVybCIsIm1vZGVsTmFtZSIsImxvb2tVcE5hbWUiLCJkaXNwYXRjaFR5cGUiLCJkaXNwYXRjaFR5cGUyIiwiZGlzcGF0Y2hFcnJvclR5cGUiLCJpdGVtIiwibG9nQ29kZSIsIml0ZW1PbGQiLCJsb2dNb2RlbCIsImxvZ0Rlc2NyaXB0aW9uIiwiaXNTYWxlIiwibWV0aG9kIiwic3VjZXNzTWVzc2FnZSIsInNldCIsImVyciIsImVycm9yTWVzc2FnZSIsImt3YXJnczIiLCJpdGVtMiIsInVybDIiLCJsb2dDb2RlMiIsIml0ZW1PbGQyIiwibG9nTW9kZWwyIiwibG9nRGVzY3JpcHRpb24yIiwibW9kZWwiLCJzZWN0aW9uIiwic3VjY2VzcyIsImZhaWwiLCJjb25maWciLCJmaWx0ZXIiLCJ2YWx1ZSIsIm9sZE9iamVjdCIsIm9iamVjdCIsInByZXZPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwidXNlcjIiLCJwcmV2X29iamVjdCIsIm5ld19vYmplY3QiLCJlbGVtZW50cyIsImZpZWxkIiwia2V5cyIsIm1hcCIsImVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtYXgiLCJwb3AiLCJuZXh0IiwicGFyc2VJbnQiLCJpdGVtcyIsImNvZGVGaWVsZCIsInByZXZpb3VzIiwibmV4dENvZGUiLCJwcmV2Q29kZSIsIndpbmRvdyIsImFsZXJ0aWZ5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1haW4iLCJzdG9yZSIsImZldGNoaW5nIiwic2lkZU1lbnVWaXNpYmxlIiwibGF5b3V0IiwicHJvcHMiLCJtYWluQ29udGFpbmVyQ2xhc3MiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZmVjdGhQcm9maWxlIiwiZmVjdGhJc0FkbWluTG9ja2VkIiwiZmllbGRzIiwicHJvZmlsZSIsInJvdXRlcyIsIkhvbWUiLCJTYWxlIiwiZnVsbFdpZHRoIiwic2FsZSIsInRvdGFsIiwiY2FydCIsImNhcnRUb3RhbCIsImNvbnRlbnRDbGFzcyIsImNhcnRDbGFzcyIsInRvdGFsQ2xhc3MiLCJmb3JtYXRNb25leSIsInRvZ2dsZVdpZHRoIiwiYmluZCIsIlByb2R1Y3QiLCJpdGVtc0luQ2FydCIsImNhcnRJdGVtcyIsImlucHV0VmFsIiwiZ2xvYmFsRGlzY291bnQiLCJjb2RlSW5wdXQiLCJmb2N1cyIsInByb2R1Y3RLd2FyZ3MiLCJldiIsImtleSIsInRhcmdldCIsInF0eSIsImlzTmFOIiwiZGVmYXVsdENvbmZpZyIsInVzZXJDb25maWciLCJkaXNhYmxlZCIsImlucHV0S2V5UHJlc3MiLCJpbnB1dCIsInNlYXJjaFByb2R1Y3RDbGljayIsIk1vdXNldHJhcCIsInJlcXVpcmUiLCJDYXJ0IiwiX3RoaXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInVuYmluZCIsIkNhcnRJdGVtcyIsImluQ2FydCIsImNhcnRJdGVtQWN0aXZlIiwicHJldlByb3BzIiwiZWxlbSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIl9fdGhpcyIsInByb21wdCIsImV2dCIsIm9rIiwiY2FuY2VsIiwiZGlzY291bnQiLCJsb3RlIiwic2VsZWN0IiwiaXRlbXMyIiwiYWN0aXZlQ2xhc3MiLCJiYXJjb2RlIiwicmVtb3ZlSWNvbkNsYXNzIiwidGF4ZXMxIiwidXNlX3RheGVzIiwidGF4ZXMiLCJxdHlGaWVsZCIsInF0eUlucHV0Q2hhbmdlIiwidXVpZCIsImZpZWxkRm9jdXMiLCJxdHlJbnB1dEtleVByZXNzIiwiZGlzY291bnRGaWVsZCIsInNhbGVMb2FkZWQiLCJkaXNjb3VudElucHV0S2V5UHJlc3MiLCJkaXNjb3VudElucHV0T25CbHVyIiwic2V0Q2FydEl0ZW1BY3RpdmUiLCJwcmljZVRvVXNlIiwidG90YWxXaXRoSXYiLCJyZW1vdmVJdGVtIiwidXBkYXRlVG90YWxzIiwicmVtb3ZlRnJvbUNhcnQiLCJzdWJ0b3RhbCIsInN1YlRvdGFsTm9EaXNjb3VudCIsImRpc2NvdW50VG90YWwiLCJ0YXhlc0NhbGMiLCJ0YXhlc0NhbGMyIiwidXNlX3RheGVzMiIsInRheGVzMiIsInRheGVzQ2FsYzMiLCJ1c2VfdGF4ZXMzIiwidGF4ZXMzIiwiZGlzY291bnRDdXJyZW5jeSIsImluZGV4SW5DYXJ0IiwiQXNpZGUiLCJhc2lkZUNsYXNzIiwiYXNpZGVDb250YWluZXJDbGFzcyIsIkNsaWVudHMiLCJkZWJ0IiwiY2xpZW50U2VsZWN0ZWREZWJ0IiwibmV4dFByb3BzIiwiY2xpZW50X2lkIiwiaWQiLCJkZWZhdWx0RGlzY291bnQiLCJjbGllbnRLd2FyZ3MiLCJjbGllbnRUb1Nob3ciLCJzZWFyY2hDbGllbnRDbGljayIsImdldENsaWVudERlYnQiLCJwb3N0IiwiVG90YWxzIiwiY2FydFRheGVzIiwiY2FydFN1YnRvdGFsTm9EaXNjb3VudCIsInN0YXRlIiwiZGlzY291bnRWYWwiLCJtYXhEaXNjb3VudCIsImlucHV0T25CbHVyIiwiQnV0dG9ucyIsInNhbGVzIiwiY29tcGxldGVkIiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9ucyIsInNob3dJbm9pY2VQYW5lbCIsIm5ld1NhbGUiLCJzaG93UGF5UGFuZWwiLCJzaG93U2FsZVBhbmVsIiwic2hvd1ByZXNhbGVzUGFuZWwiLCJzZWFyY2hQcm9kdWN0cyIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZpc2libGVPck5vdCIsInBhbmVsQ2xpY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hWYWwiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiYyIsImQiLCJ0IiwibiIsIk1hdGgiLCJhYnMiLCJ1bmRlZmluZWQiLCJzIiwiaSIsIlN0cmluZyIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwicmVwbGFjZSIsInNsaWNlIiwicmVzdWx0c1RhYmxlIiwibWF0Y2hlcyIsInByb2R1Y3RzTWF0Y2hlZCIsInNlbGVjdFByb2R1Y3QiLCJzZWxscHJpY2UiLCJzZWFyY2hDbGllbnRzIiwic2VhcmNoQ2xpZW50QWN0aW9uIiwiY2xpZW50c01hdGNoZWQiLCJoYXNDcmVkaXQiLCJoYXNfY3JlZGl0Iiwic2VsZWN0Q2xpZW50IiwiUGF5UGFuZWwiLCJwYW5lbFZpc2libGUiLCJwYXkiLCJpc1Zpc2libGUiLCJwYXlNZXRob2QiLCJQYXlNZXRob2QiLCJjbGlja0NoYW5nZVBheU1ldGhvZCIsIlBheUNhc2giLCJjYXNoQW1vdW50IiwicGF5QW1vdW50Q2hhbmdlZCIsIlBheUNhcmQiLCJjYXJkQXV0aCIsImNhcmREaWdpdHMiLCJwYXlDYXJkRGlnaXRzQ2hhbmdlZCIsInBheUNhcmRBdXRoQ2hhbmdlZCIsIlBheUNyZWRpdCIsImF2YWlsYWJsZSIsImNyZWRpdF9saW1pdCIsImNsaWVudExpbWl0IiwiY2xpZW50QXZhaWxhYmxlIiwiUGF5T3RoZXIiLCJGZXRjaGluZyIsIlBheVNpZGVCYXIiLCJwYXllZCIsInJlc2V0IiwiY2hhbmdlIiwicGF5QnV0dG9uQ2xhc3MiLCJjYXNoIiwiYXV0aCIsImRpZ2l0cyIsIlNhdmVCdG4iLCJwYXlfdHlwZSIsImNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnRfdHlwZSIsInVwZGF0ZVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNhdmVCdG4iLCJiaWxsX2lkIiwiYmlsbF9udW1iZXIiLCJzYXZlQ3JlZGl0TW92ZW1lbnQiLCJtb3ZlbWVudCIsIkludm9pY2VQYW5lbCIsImludm9pY2UiLCJpc0Z1bGwiLCJwcmludERpdiIsImlzRnVsbENsYXNzIiwiY29tcG9uZW50VG9Nb3VudCIsInRvZ2dsZVBhbmVsIiwicHJpbnRQYW5lbCIsIkZ1bGxJbnZvaWNlIiwiSGVhZGVyIiwic2FsZUFjdGl2ZSIsImNvbXBhbnkiLCJoZWFkZXJ0ZXh0IiwibG9nbyIsImxvZ29XaWR0aCIsImxvZ29VcmwiLCJoZWFkZXJOYW1lIiwiY29tZXJjaWFsX25hbWUiLCJoZWFkZXJOYW1lMiIsImxlZ2FsX25hbWUiLCJ0ZWxzIiwidGVsZXBob25lcyIsInRlbHNUZXh0IiwiaWRUeXBlIiwiaWRUZXh0IiwidG9VcHBlckNhc2UiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY291bnRyeSIsImVtYWlsIiwiRGF0YSIsImRhdGUiLCJjcmVhdGVkIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJjbGllbnRBZHJlc3MiLCJhZHJlc3MiLCJUYWJsZSIsInRheGVzVGV4dCIsImdsb2JhbERpc2NvdW50Um93IiwiTm90ZXMiLCJDb21wYWN0SW52b2ljZSIsImNvbWVyY2lhbE5hbWUiLCJsZWdhbE5hbWUiLCJ1c2VUYXhlcyIsIlRvcEJhciIsInRvcEJhclRvZ2dsZVZpc2libGUiLCJjb25maXJtIiwiYnV0dG9uQ2xhc3MiLCJtZW51Q2xpY2siLCJob21lQ2xpY2siLCJsb2dPdXRDbGljayIsInRvZ2dsZUxheW91dCIsInRvZ2dsZUNvbmZpZ0JhciIsIm1haW5Db250YWluZXIiLCJzaWRlTWVudSIsInJlbW92ZSIsImFkZCIsImNvbmZpZ0JhciIsIlNpZGVNZW51Iiwic2lkZU1lbnVDbGFzcyIsIlNlYXJjaCIsIlVzZXIiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwidXNlcm5hbWUiLCJsYXN0TmFtZSIsImZ1bGxOYW1lIiwic3Vic3RyaW5nIiwibWlkZGxld2FyZSIsIm1lc3NhZ2VzIiwicmVkdWNlciIsInN0YXRlQ29uc3QiLCJhY3Rpb24iLCJlZGl0YWJsZSIsInVwZGF0ZWQiLCJpc051bGwiLCJjYXJ0SGFzSXRlbXMiLCJjYXJ0U3VidG90YWwiLCJuZXdDYXJ0Iiwic3BsaWNlIiwiaXRlbXNMZWZ0SW5DYXJ0IiwiY2xpZW50U2VsZWN0ZWRNb2RlbCIsImNsaWVudFR5cGUiLCJjcmVkaXRfZGF5cyIsImRvY1R5cGUiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiZGVmYXVsdERlc2luZyIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwic2FsZUFjdGl2ZUlkIiwiaXNTYWxlc1BhbmVsVmlzaWJsZSIsImlzUHJlc2FsZXNQYW5lbFZpc2libGUiLCJwYXJzZSIsIkRhdGUiLCJyZWNhbGNDYXJ0IiwidXBkYXRlSXRlbURpc2NvdW50IiwidXBkYXRlSXRlbUxvdGUiLCJwcm9kdWN0U2VsZWN0ZWQiLCJ1cGRhdGVRdHkiLCJ1cGRhdGVRdHlDb2RlIiwiYWRkU3ViT25lIiwidXVpZHYxIiwibmV3SXRlbSIsImNhY2xTdWJ0b3RhbCIsInVwZGF0ZWRDYXJ0SXRlbSIsImxvdGVOdW0iLCJwZXJMaW5lIiwiY2hlY2tJZkluQ2FydCIsInF0eU51bSIsInN1Yk9yQWRkIiwiZGF0YU5ld1Byb2QiLCJwcm9kdWN0RGlzY291bnQiLCJwcmljZSIsInN1YlRvdGFsIiwiaXYxIiwiaXYyIiwiaXYzIiwiZGlzY291bnRDdXJyZW5jeUluTGluZSIsImRpc2NvdW50Q3VycmVuY3lHbG9iYWwiLCJuZXdRdHkiLCJ1c2VQcmljZTIiLCJwcmljZTIiLCJ1c2VQcmljZTMiLCJwcmljZTMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQWdCQSxTLEdBQUFBLFM7UUFLQUMsYSxHQUFBQSxhO1FBcUNBQyxvQixHQUFBQSxvQjtBQTFDVCxTQUFTRixTQUFULEdBQXFCOztBQUUxQixTQUFPLEVBQUNHLE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0gsYUFBVCxDQUF1QkksR0FBdkIsRUFBNEJDLFFBQTVCLEVBQXNDOztBQUUzQyxNQUFNQyxPQUFPRixJQUFJRyxLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0EsTUFBTUMsU0FBUyxFQUFmOztBQUVBSCxXQUFTSSxPQUFULENBQWlCLG1CQUFXO0FBQzFCLFFBQUlDLFVBQVUsSUFBZDtBQUNBLFFBQU1DLGNBQWNDLFFBQVFELFdBQVIsQ0FBb0JFLFFBQXBCLEVBQXBCOztBQUVBUCxTQUFLRyxPQUFMLENBQWEsZ0JBQVE7QUFDbkIsVUFBTUssUUFBUUgsWUFBWUksV0FBWixHQUEwQkMsT0FBMUIsQ0FBa0NDLEtBQUtGLFdBQUwsRUFBbEMsQ0FBZDs7QUFFQSxVQUFJRCxTQUFTLENBQUMsQ0FBZCxFQUFpQjtBQUNmSixrQkFBVSxL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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7QUNuTEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIs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QUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFROztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsYUFBYTtBQUNoQyxtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsUUFBUTtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLFNBQVM7QUFDNUIsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsa0JBQWtCOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsU0FBUztBQUM1QixtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsU0FBUztBQUN4QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQUE7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDbmhDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUdBOztBQUVBOzs7O0FBR0E7Ozs7OztBQUpBO0FBTUE4RSxPQUFPQyxRQUFQOztBQUhBOzs7QUFMQTs7QUFTQTs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLHNCQUFWO0FBQ0U7QUFERixDQURGLEVBR2VDLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FIZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDakJBOzs7OztBQVNBOztBQU5BOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQVFxQkMsSSxXQU5wQix5QkFBUSxVQUFDQyxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMQyxjQUFVRCxNQUFNQyxRQUFOLENBQWVBLFFBRHBCO0FBRUxDLHFCQUFpQkYsTUFBTUcsTUFBTixDQUFhRDtBQUZ6QixHQUFQO0FBSUQsQ0FMQSxDOzs7Ozs7Ozs7Ozt5Q0FRc0I7QUFDbkIsV0FBS0UsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiw0QkFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDUzs7QUFFUCxVQUFNNkUsV0FBVyxLQUFLRyxLQUFMLENBQVdILFFBQVgsR0FBc0IsdURBQXRCLEdBQXFDLEVBQXREO0FBQ0EsVUFBTUkscUJBQXFCLEtBQUtELEtBQUwsQ0FBV0YsZUFBWCxHQUE2QixlQUE3QixHQUErQywwQkFBMUU7QUFDQSxVQUFNSSxVQUFVO0FBQUE7QUFBQTtBQUNkO0FBQUE7QUFBQTtBQUNFLGlFQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVdELGtCQUFuQztBQUNFLGlFQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsdUJBQWY7QUFBQTtBQUVHSjtBQUZIO0FBRkY7QUFGRjtBQURjLE9BQWhCOztBQWFBLGFBQU87QUFBQTtBQUFBO0FBQ0pLO0FBREksT0FBUDtBQUdEOzs7O0VBM0IrQixnQkFBTUMsUztrQkFBbkJSLEk7Ozs7Ozs7O2dDQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7O1FDckJMUyxZLEdBQUFBLFk7UUFZQUMsa0IsR0FBQUEsa0I7O0FBZGhCOzs7Ozs7QUFFTyxTQUFTRCxZQUFULEdBQXdCOztBQUU3QixTQUFPLFVBQVNwRixRQUFULEVBQW1CO0FBQ3hCLG9CQUFNQyxHQUFOLENBQVUsV0FBVixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBU0MsUUFBVCxFQUFtQjtBQUM3Q0gsZUFBUyxFQUFDM0QsTUFBTSx5QkFBUCxFQUFrQ0MsU0FBUyxFQUFDK0IsTUFBTThCLFNBQVNDLElBQVQsQ0FBYyxDQUFkLEVBQWlCa0YsTUFBeEIsRUFBZ0NDLFNBQVNwRixTQUFTQyxJQUFULENBQWMsQ0FBZCxFQUFpQmtGLE1BQTFELEVBQTNDLEVBQVQ7QUFDQXRGLGVBQVMsRUFBQzNELE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFUO0FBQ0QsS0FIRCxFQUdHK0QsS0FISCxDQUdTLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdkJOLGVBQVMsRUFBQzNELE1BQU0sd0JBQVAsRUFBaUNDLFNBQVNnRSxLQUExQyxFQUFUO0FBQ0QsS0FMRDtBQU1ELEdBUEQ7QUFRRDs7QUFFTSxTQUFTK0Usa0JBQVQsR0FBOEI7O0FBRW5DLFNBQU8sVUFBU3JGLFFBQVQsRUFBbUI7QUFDeEIsb0JBQU1DLEdBQU4sQ0FBVSx3Q0FBVixFQUFvREMsSUFBcEQsQ0FBeUQsVUFBU0MsUUFBVCxFQUFtQjtBQUMxRUgsZUFBUyxFQUFDM0QsTUFBTSxpQ0FBUCxFQUEwQ0MsU0FBUzZELFNBQVNDLElBQVQsQ0FBY3VDLEtBQWpFLEVBQVQ7QUFDQTNDLGVBQVMsRUFBQzNELE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFUO0FBQ0QsS0FIRCxFQUdHK0QsS0FISCxDQUdTLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdkJOLGVBQVMsRUFBQzNELE1BQU0sZ0NBQVAsRUFBeUNDLFNBQVNnRSxLQUFsRCxFQUFUO0FBQ0QsS0FMRDtBQU1ELEdBUEQ7QUFRRDs7Ozs7Ozs7Z0NBdEJlOEUsWTs7Z0NBWUFDLGtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RoQjs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7OztBQUhBOztBQUtBLElBQU1HLFNBQVM7QUFBQTtBQUFBLElBQUssV0FBVSxVQUFmO0FBRWIseURBQU8sV0FBUCxFQUFhLE1BQUssUUFBbEIsRUFBMkIseUJBQTNCLEdBRmE7QUFHYix5REFBTyxNQUFLLGFBQVosRUFBMEIseUJBQTFCO0FBSGEsQ0FBZjs7ZUFPZUEsTTs7Ozs7Ozs7O2dDQVBUQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ1JOOzs7O0FBSUE7QUFDQTs7O0FBRkE7Ozs7QUFHQTs7Ozs7Ozs7OztJQU1xQkMsSSxXQUpwQix5QkFBUSxVQUFDYixLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFQO0FBRUQsQ0FIQSxDOzs7Ozs7Ozs7Ozt5Q0FNc0I7O0FBRW5CLFdBQUtJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsRUFBdEMsRUFBcEI7QUFFRDtBQUNEOztBQUVBOzs7OzZCQUNTOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQUE7QUFBQSxPQUFQO0FBSUQ7Ozs7RUFoQitCLGdCQUFNNkksUztrQkFBbkJNLEk7Ozs7Ozs7O2dDQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNackI7Ozs7QUFJQTtBQUNBOzs7QUFGQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBTXFCQyxJLFdBSnBCLHlCQUFRLFVBQUNkLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQVA7QUFFRCxDQUhBLEM7Ozs7Ozs7Ozs7O3lDQU1zQjs7QUFFbkIsV0FBS0ksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxvQkFBUCxFQUE2QkMsU0FBUyxFQUF0QyxFQUFwQjtBQUVEO0FBQ0Q7O0FBRUE7Ozs7NkJBQ1M7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDTCw4REFESztBQUVMLDREQUZLO0FBSUwsa0VBSks7QUFLTCxrRUFMSztBQU1MLCtEQU5LO0FBT0w7QUFQSyxPQUFQO0FBV0Q7Ozs7RUF2QitCLGdCQUFNNkksUztrQkFBbkJPLEk7Ozs7Ozs7O2dDQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNuQnJCOzs7OztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBUXFCZixJLFdBTnBCLHlCQUFRLFVBQUNDLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xlLGVBQVdmLE1BQU1nQixJQUFOLENBQVdELFNBRGpCO0FBRUxFLFdBQU9qQixNQUFNa0IsSUFBTixDQUFXQztBQUZiLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7O2tDQVFnQjtBQUNiLFdBQUtmLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sbUJBQVAsRUFBNEJDLFNBQVMsRUFBckMsRUFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDUztBQUNQLFVBQU0wSixlQUFlLEtBQUtoQixLQUFMLENBQVdXLFNBQVgsR0FBdUIsd0JBQXZCLEdBQWtELGNBQXZFO0FBQ0EsVUFBTU0sWUFBWSxLQUFLakIsS0FBTCxDQUFXVyxTQUFYLEdBQXVCLG1CQUF2QixHQUE2Qyw4QkFBL0Q7QUFDQSxVQUFNTyxhQUFhLEtBQUtsQixLQUFMLENBQVdXLFNBQVgsR0FBdUIsb0JBQXZCLEdBQThDLDhCQUFqRTs7QUFFQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVdLLFlBQWhCO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxzQkFBZjtBQUNFO0FBREYsU0FESztBQUlMO0FBQUE7QUFBQSxZQUFLLFdBQVdDLFNBQWhCO0FBQ0U7QUFERixTQUpLO0FBT0w7QUFBQTtBQUFBLFlBQUssV0FBV0MsVUFBaEI7QUFBQTtBQUNLLGVBQUtsQixLQUFMLENBQVdhLEtBQVgsQ0FBaUJNLFdBQWpCLEVBREw7QUFFRSwrQ0FBRyxXQUFVLG9CQUFiLEVBQWtDLFNBQVMsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBM0M7QUFGRjtBQVBLLE9BQVA7QUFhRDs7OztFQXpCK0IsZ0JBQU1sQixTO2tCQUFuQlIsSTs7Ozs7Ozs7Z0NBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2ZyQjs7Ozs7QUFHQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBY3FCMkIsTyxXQVpwQix5QkFBUSxVQUFDMUIsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTHBJLGNBQVVvSSxNQUFNcEksUUFBTixDQUFlQSxRQURwQjtBQUVMc0IsWUFBUThHLE1BQU1sSCxPQUFOLENBQWNNLGNBRmpCO0FBR0x1SSxpQkFBYTNCLE1BQU1rQixJQUFOLENBQVdVLFNBSG5CO0FBSUxDLGNBQVU3QixNQUFNcEksUUFBTixDQUFlaUssUUFKcEI7QUFLTEMsb0JBQWdCOUIsTUFBTWtCLElBQU4sQ0FBV1k7QUFDM0I7QUFDQTtBQUNBO0FBUkssR0FBUDtBQVVELENBWEEsQzs7Ozs7Ozs7Ozs7d0NBY3FCO0FBQ2xCLFdBQUtDLFNBQUwsQ0FBZUMsS0FBZjtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0Q7Ozt5Q0FFb0I7O0FBRW5CLFdBQUs1QixLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLEVBQXBDLEVBQXBCO0FBQ0EsV0FBSzBJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sZ0JBQVAsRUFBeUJDLFNBQVMsRUFBbEMsRUFBcEI7O0FBRUEsVUFBTXVLLGdCQUFnQjtBQUNwQmhILGFBQUssZUFEZTtBQUVwQkMscUJBQWEsMEJBRk87QUFHcEJDLG1CQUFXO0FBSFMsT0FBdEI7O0FBTUEsV0FBS2lGLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsMEJBQWdCNkcsYUFBaEIsQ0FBcEI7QUFFRDs7O3lDQUVvQjs7QUFFbkIsV0FBSzdCLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFwQjtBQUVEOzs7a0NBRWF3SyxFLEVBQUk7QUFDaEI7QUFDQSxVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1QjtBQUNyQixZQUFJRCxHQUFHRSxNQUFILENBQVVyRSxLQUFkLEVBQXFCO0FBQ25CLGNBQU1uRixPQUFPc0osR0FBR0UsTUFBSCxDQUFVckUsS0FBVixDQUFnQmpHLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQWIsQ0FEbUIsQ0FDd0I7QUFDM0MsY0FBSXVLLE1BQU1ILEdBQUdFLE1BQUgsQ0FBVXJFLEtBQVYsQ0FBZ0JqRyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixDQUFWO0FBQ0F1SyxnQkFBT0MsTUFBTUQsR0FBTixDQUFELEdBQ0YsQ0FERSxHQUVGdkksV0FBV3VJLEdBQVgsQ0FGSixDQUhtQixDQUtDOztBQUVwQixlQUFLakMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiw4QkFBZ0J4QyxJQUFoQixFQUFzQnlKLEdBQXRCLEVBQTJCLEtBQUtqQyxLQUFMLENBQVd4SSxRQUF0QyxFQUFnRCxLQUFLd0ksS0FBTCxDQUFXdUIsV0FBM0QsRUFDbEIsS0FBS3ZCLEtBQUwsQ0FBVzBCLGNBRE8sRUFDUyxLQUFLMUIsS0FBTCxDQUFXbEgsTUFEcEIsRUFDNEIsS0FBS2tILEtBQUwsQ0FBV21DLGFBRHZDLEVBQ3NELEtBQUtuQyxLQUFMLENBQVdvQyxVQURqRSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSxlQUFLcEMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSwyQkFBUCxFQUFvQ0MsU0FBUyxDQUE3QyxFQUFwQjtBQUNBLGVBQUswSSxLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLDRCQUFQLEVBQXFDQyxTQUFTa0IsSUFBOUMsRUFBcEI7QUFDRDtBQUNGLE9BZkQsTUFlTztBQUNMLGFBQUt3SCxLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLHlCQUFQLEVBQWtDQyxTQUFTd0ssR0FBR0UsTUFBSCxDQUFVckUsS0FBckQsRUFBcEI7QUFDRDtBQUVGOztBQUVEOzs7OzZCQUNTO0FBQUE7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxxQkFBZjtBQUNFLGlEQUFHLFdBQVUsZUFBYixHQURGO0FBRUUscURBQU8sSUFBRyx1QkFBVixFQUFrQyxVQUFVLEtBQUtxQyxLQUFMLENBQVdxQyxRQUF2RDtBQUNFLHlCQUFXLEtBQUtDLGFBQUwsQ0FBbUJqQixJQUFuQixDQUF3QixJQUF4QixDQURiO0FBRUUscUJBQU8sS0FBS3JCLEtBQUwsQ0FBV3lCLFFBRnBCO0FBR0Usd0JBQVUsS0FBS2EsYUFBTCxDQUFtQmpCLElBQW5CLENBQXdCLElBQXhCLENBSFo7QUFJRSxtQkFBSyxhQUFDa0IsS0FBRCxFQUFXO0FBQ2QsdUJBQUtaLFNBQUwsR0FBaUJZLEtBQWpCO0FBQ0QsZUFOSDtBQU9FLG9CQUFLLE1BUFAsRUFPYyxhQUFZLG1DQVAxQjtBQVFFLHlCQUFVLDJEQVJaO0FBRkYsV0FERjtBQWFFO0FBQUE7QUFBQSxjQUFRLFVBQVUsS0FBS3ZDLEtBQUwsQ0FBV3FDLFFBQTdCLEVBQXVDLFNBQVMsS0FBS0csa0JBQUwsQ0FBd0JuQixJQUF4QixDQUE2QixJQUE3QixDQUFoRDtBQUNFLHlCQUFVLHVCQURaO0FBRUU7QUFBQTtBQUFBO0FBQ0UsbURBQUcsV0FBVSxjQUFiO0FBREY7QUFGRjtBQWJGO0FBTkssT0FBUDtBQThCRDs7OztFQXZGa0MsZ0JBQU1sQixTO2tCQUF0Qm1CLE87Ozs7Ozs7O2dDQUFBQSxPOzs7Ozs7Ozs7O0FDcEJyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RCQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNbUIsWUFBWSxtQkFBQUMsQ0FBUSxFQUFSLENBQWxCOztJQVNxQkMsSSxXQVBwQix5QkFBUSxVQUFDL0MsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTDtBQUNBO0FBQ0E7QUFISyxHQUFQO0FBS0QsQ0FOQSxDOzs7Ozs7Ozs7Ozt5Q0FTc0I7O0FBRW5CLFVBQU1nRCxRQUFRLElBQWQ7QUFDQUgsZ0JBQVVwQixJQUFWLENBQWUsT0FBZixFQUF3QixVQUFTd0IsQ0FBVCxFQUFZOztBQUVsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEOztBQUVESCxjQUFNNUMsS0FBTixDQUFZaEYsUUFBWixDQUFxQixFQUFDM0QsTUFBTSw2QkFBUCxFQUFzQ0MsU0FBUyxDQUFDLENBQWhELEVBQXJCO0FBQ0FtSSxpQkFBU0MsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0RrQyxLQUFoRDtBQUNBbkMsaUJBQVNDLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEL0IsS0FBaEQsR0FBd0QsRUFBeEQ7O0FBRUE4RSxrQkFBVXBCLElBQVYsQ0FBZSxLQUFmLEVBQXNCLFlBQVc7QUFDL0J1QixnQkFBTTVDLEtBQU4sQ0FBWWhGLFFBQVosQ0FBcUIsRUFBQzNELE1BQU0sNkJBQVAsRUFBc0NDLFNBQVMsQ0FBQyxDQUFoRCxFQUFyQjtBQUNBbUksbUJBQVNDLGNBQVQsQ0FBd0IsdUJBQXhCLEVBQWlEa0MsS0FBakQ7QUFDQW5DLG1CQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRC9CLEtBQWpELEdBQXlELEVBQXpEO0FBQ0E4RSxvQkFBVU8sTUFBVixDQUFpQixLQUFqQjtBQUNELFNBTEQ7QUFNRCxPQW5CRDs7QUFxQkFQLGdCQUFVcEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBU3dCLENBQVQsRUFBWTs7QUFFbEMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFREgsY0FBTTVDLEtBQU4sQ0FBWWhGLFFBQVosQ0FBcUIsRUFBQzNELE1BQU0sNEJBQVAsRUFBcUNDLFNBQVMsQ0FBQyxDQUEvQyxFQUFyQjtBQUNBbUksaUJBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDa0MsS0FBL0M7QUFDQW5DLGlCQUFTQyxjQUFULENBQXdCLHFCQUF4QixFQUErQy9CLEtBQS9DLEdBQXVELEVBQXZEOztBQUVBOEUsa0JBQVVwQixJQUFWLENBQWUsS0FBZixFQUFzQixZQUFXO0FBQy9CdUIsZ0JBQU01QyxLQUFOLENBQVloRixRQUFaLENBQXFCLEVBQUMzRCxNQUFNLDRCQUFQLEVBQXFDQyxTQUFTLENBQUMsQ0FBL0MsRUFBckI7QUFDQW1JLG1CQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRGtDLEtBQWpEO0FBQ0FuQyxtQkFBU0MsY0FBVCxDQUF3Qix1QkFBeEIsRUFBaUQvQixLQUFqRCxHQUF5RCxFQUF6RDtBQUNBOEUsb0JBQVVPLE1BQVYsQ0FBaUIsS0FBakI7QUFDRCxTQUxEO0FBTUQsT0FuQkQ7QUFvQkQ7O0FBRUQ7Ozs7NkJBQ1M7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUpGO0FBT0U7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQVBGO0FBVUU7QUFBQTtBQUFBLGNBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQVZGO0FBYUU7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQWJGO0FBZ0JFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FoQkY7QUFtQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQW5CRixTQURLO0FBeUJMO0FBekJLLE9BQVA7QUE2QkQ7Ozs7RUF2RitCLGdCQUFNN0MsUztrQkFBbkJ3QyxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDZnJCOzs7OztBQUdBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1GLFlBQVksbUJBQUFDLENBQVEsRUFBUixDQUFsQjs7SUFhcUJPLFMsV0FYcEIseUJBQVEsVUFBQ3JELEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xzRCxZQUFRdEQsTUFBTWtCLElBQU4sQ0FBV1UsU0FEZDtBQUVMMUksWUFBUThHLE1BQU1sSCxPQUFOLENBQWNNLGNBRmpCO0FBR0wwSSxvQkFBZ0I5QixNQUFNa0IsSUFBTixDQUFXWSxjQUh0QjtBQUlMO0FBQ0F5QixvQkFBZ0J2RCxNQUFNa0IsSUFBTixDQUFXcUM7QUFDM0I7QUFDQTtBQVBLLEdBQVA7QUFTRCxDQVZBLEM7Ozs7Ozs7Ozs7Ozs7QUFhQzt1Q0FDbUJDLFMsRUFBVzs7QUFFNUIsV0FBS3BELEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsMkJBQWEsS0FBS2dGLEtBQUwsQ0FBV2tELE1BQXhCLENBQXBCOztBQUVBO0FBQ0EsVUFBTUcsT0FBTzVELFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBMkQsV0FBS0MsU0FBTCxHQUFpQkQsS0FBS0UsWUFBdEI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O3lDQUVxQjs7QUFFbkIsVUFBTVgsUUFBUSxJQUFkO0FBQ0FILGdCQUFVcEIsSUFBVixDQUFlLFVBQWYsRUFBMkIsVUFBU3dCLENBQVQsRUFBWTs7QUFFckMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFREgsY0FBTTVDLEtBQU4sQ0FBWWhGLFFBQVosQ0FBcUIseUJBQVU0SCxNQUFNNUMsS0FBTixDQUFZbUQsY0FBdEIsRUFBc0MsSUFBdEMsRUFBNENQLE1BQU01QyxLQUFOLENBQVlrRCxNQUF4RCxFQUFnRU4sTUFBTTVDLEtBQU4sQ0FBWTBCLGNBQTVFLEVBQ25Ca0IsTUFBTTVDLEtBQU4sQ0FBWWxILE1BRE8sQ0FBckI7QUFFRCxPQVhEOztBQWFBMkosZ0JBQVVwQixJQUFWLENBQWUsT0FBZixFQUF3QixVQUFTd0IsQ0FBVCxFQUFZOztBQUVsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEOztBQUVEdEQsaUJBQVNDLGNBQVQsU0FBOEJrRCxNQUFNNUMsS0FBTixDQUFZbUQsY0FBMUMsRUFBNER2QixLQUE1RDtBQUNELE9BVkQ7O0FBWUFhLGdCQUFVcEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBU3dCLENBQVQsRUFBWTtBQUNsQyxZQUFJQSxFQUFFQyxjQUFOLEVBQXNCO0FBQ3BCRCxZQUFFQyxjQUFGO0FBQ0QsU0FGRCxNQUVPO0FBQ1A7QUFDRUQsWUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNEO0FBQ0RILGNBQU01QyxLQUFOLENBQVloRixRQUFaLENBQXFCLHlCQUFVNEgsTUFBTTVDLEtBQU4sQ0FBWW1ELGNBQXRCLEVBQXNDLEtBQXRDLEVBQTZDUCxNQUFNNUMsS0FBTixDQUFZa0QsTUFBekQsRUFBaUVOLE1BQU01QyxLQUFOLENBQVkwQixjQUE3RSxFQUNuQmtCLE1BQU01QyxLQUFOLENBQVlsSCxNQURPLENBQXJCO0FBRUQsT0FURDs7QUFXQTJKLGdCQUFVcEIsSUFBVixDQUFlLE9BQWYsRUFBd0IsVUFBU3dCLENBQVQsRUFBWTs7QUFFbEMsWUFBSUEsRUFBRUMsY0FBTixFQUFzQjtBQUNwQkQsWUFBRUMsY0FBRjtBQUNELFNBRkQsTUFFTztBQUNQO0FBQ0VELFlBQUVFLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFRCxZQUFNUyxTQUFTWixLQUFmO0FBQ0EsNkJBQVNhLE1BQVQsaURBQWdFLHlEQUFoRSxFQUEySCxFQUEzSCxFQUNJLFVBQVNDLEdBQVQsRUFBYy9GLEtBQWQsRUFBcUI7QUFDckI2RixpQkFBT3hELEtBQVAsQ0FBYWhGLFFBQWIsQ0FBc0IsNkJBQWN3SSxPQUFPeEQsS0FBUCxDQUFhbUQsY0FBM0IsRUFBMkN4RixLQUEzQyxFQUFrRDZGLE9BQU94RCxLQUFQLENBQWFrRCxNQUEvRCxFQUNwQk0sT0FBT3hELEtBQVAsQ0FBYTBCLGNBRE8sRUFDUzhCLE9BQU94RCxLQUFQLENBQWFsSCxNQUR0QixDQUF0QjtBQUVELFNBSkgsRUFLSSxZQUFXLENBQUUsQ0FMakIsRUFNRzZELEdBTkgsQ0FNTyxRQU5QLEVBTWlCLEVBQUNnSCxJQUFJLElBQUwsRUFBV0MsUUFBUSxVQUFuQixFQU5qQjtBQU9ELE9BakJEO0FBa0JEOzs7MENBRXFCcEwsSSxFQUFNc0osRSxFQUFJOztBQUU5QixVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1QjtBQUNyQkQsV0FBR2dCLGNBQUg7QUFDQSxZQUFNZSxXQUFZL0IsR0FBR0UsTUFBSCxDQUFVckUsS0FBWCxHQUNibUUsR0FBR0UsTUFBSCxDQUFVckUsS0FERyxHQUViLENBRko7QUFHQSxhQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixrQ0FBbUIsS0FBS2dGLEtBQUwsQ0FBV2tELE1BQTlCLEVBQXNDMUssSUFBdEMsRUFBNENxTCxRQUE1QyxFQUFzRCxLQUFLN0QsS0FBTCxDQUFXMEIsY0FBakUsRUFDbEIsS0FBSzFCLEtBQUwsQ0FBV2xILE1BRE8sQ0FBcEI7QUFHRDtBQUVGOzs7d0NBRW1CTixJLEVBQU1zSixFLEVBQUk7O0FBRTVCLFVBQU0rQixXQUFZL0IsR0FBR0UsTUFBSCxDQUFVckUsS0FBWCxHQUNibUUsR0FBR0UsTUFBSCxDQUFVckUsS0FERyxHQUViLENBRko7QUFHQSxXQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixrQ0FBbUIsS0FBS2dGLEtBQUwsQ0FBV2tELE1BQTlCLEVBQXNDMUssSUFBdEMsRUFBNENxTCxRQUE1QyxFQUFzRCxLQUFLN0QsS0FBTCxDQUFXMEIsY0FBakUsRUFDbEIsS0FBSzFCLEtBQUwsQ0FBV2xILE1BRE8sQ0FBcEI7QUFHRDs7O21DQUVjTixJLEVBQU1zSixFLEVBQUk7O0FBRXZCLFVBQU1HLE1BQU12SSxXQUFZb0ksR0FBR0UsTUFBSCxDQUFVckUsS0FBdEIsSUFDUm1FLEdBQUdFLE1BQUgsQ0FBVXJFLEtBREYsR0FFUixDQUZKO0FBR0EsV0FBS3FDLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IseUJBQVV4QyxJQUFWLEVBQWdCeUosR0FBaEIsRUFBcUIsS0FBS2pDLEtBQUwsQ0FBV2tELE1BQWhDLEVBQXdDLEtBQUtsRCxLQUFMLENBQVcwQixjQUFuRCxFQUFtRSxLQUFLMUIsS0FBTCxDQUFXbEgsTUFBOUUsQ0FBcEI7QUFFRDs7O3FDQUVnQmdKLEUsRUFBSTtBQUNuQkEsU0FBR2dCLGNBQUg7QUFDQW5LLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsVUFBSWtKLEdBQUdDLEdBQUgsSUFBVSxPQUFkLEVBQXVCO0FBQ3JCcEosZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCa0osR0FBR0MsR0FBM0I7QUFDQXRDLGlCQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRGtDLEtBQWpEO0FBQ0Q7QUFDRjs7O3NDQUVpQnBKLEksRUFBTXNKLEUsRUFBSTs7QUFFMUIsVUFBSUEsR0FBR0MsR0FBSCxJQUFVLE9BQWQsRUFBdUI7QUFDckJELFdBQUdnQixjQUFIO0FBQ0EsWUFBTWdCLE9BQVFoQyxHQUFHRSxNQUFILENBQVVyRSxLQUFYLEdBQ1RtRSxHQUFHRSxNQUFILENBQVVyRSxLQURELEdBRVQsQ0FGSjtBQUdBLGFBQUtxQyxLQUFMLENBQVdoRixRQUFYLENBQW9CLDhCQUFlLEtBQUtnRixLQUFMLENBQVdrRCxNQUExQixFQUFrQzFLLElBQWxDLEVBQXdDc0wsSUFBeEMsQ0FBcEI7QUFFRDtBQUVGOzs7b0NBRWV0TCxJLEVBQU1zSixFLEVBQUk7O0FBRXhCLFVBQU1nQyxPQUFRaEMsR0FBR0UsTUFBSCxDQUFVckUsS0FBWCxHQUNUbUUsR0FBR0UsTUFBSCxDQUFVckUsS0FERCxHQUVULENBRko7QUFHQSxXQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiw4QkFBZSxLQUFLZ0YsS0FBTCxDQUFXa0QsTUFBMUIsRUFBa0MxSyxJQUFsQyxFQUF3Q3NMLElBQXhDLENBQXBCO0FBRUQ7OztzQ0FFaUJ0TCxJLEVBQU1zSixFLEVBQUk7O0FBRTFCLFdBQUs5QixLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLDRCQUFQLEVBQXFDQyxTQUFTa0IsSUFBOUMsRUFBcEI7QUFFRDs7OytCQUVVQSxJLEVBQU1zSixFLEVBQUk7O0FBRW5CLFdBQUs5QixLQUFMLENBQVdoRixRQUFYLENBQW9CLDZCQUFlLEtBQUtnRixLQUFMLENBQVdrRCxNQUExQixFQUFrQzFLLElBQWxDLENBQXBCO0FBRUQ7OzsrQkFFVXNKLEUsRUFBSTtBQUNiQSxTQUFHRSxNQUFILENBQVUrQixNQUFWO0FBQ0Q7O0FBRUQ7Ozs7NkJBRVM7QUFBQTs7QUFFUCxVQUFNdkMsWUFBWSxLQUFLeEIsS0FBTCxDQUFXa0QsTUFBN0I7QUFDQSxVQUFNYyxTQUFTeEMsVUFBVWhELEdBQVYsQ0FBYyxVQUFDckMsSUFBRCxFQUFPbEUsS0FBUCxFQUFpQjs7QUFFNUMsWUFBTWdNLGNBQWU5SCxLQUFLcEUsT0FBTCxDQUFhUyxJQUFiLElBQXFCLE9BQUt3SCxLQUFMLENBQVdtRCxjQUFoQyxJQUFrRGhILEtBQUtwRSxPQUFMLENBQWFtTSxPQUFiLElBQXdCLE9BQUtsRSxLQUFMLENBQVdtRCxjQUF0RixHQUNoQiwrQkFEZ0IsR0FFaEIsZ0JBRko7O0FBSUEsWUFBTWdCLGtCQUFrQixPQUFLbkUsS0FBTCxDQUFXcUMsUUFBWCxHQUFzQix5QkFBdEIsR0FBa0QsZ0JBQTFFOztBQUVBLFlBQU0rQixTQUFVakksS0FBS3BFLE9BQUwsQ0FBYXNNLFNBQWQsR0FDWGxJLEtBQUtwRSxPQUFMLENBQWF1TSxLQURGLEdBRVgsQ0FGSjs7QUFJQSxZQUFNQyxXQUFXO0FBQ2Ysc0JBQVVwSSxLQUFLcEUsT0FBTCxDQUFhUyxJQURSO0FBRWYsb0JBQVUsT0FBS3dILEtBQUwsQ0FBV3FDLFFBRk47QUFHZixvQkFBVSxPQUFLbUMsY0FBTCxDQUFvQm5ELElBQXBCLFNBQStCbEYsS0FBS3NJLElBQXBDLENBSEs7QUFJZixtQkFBUyxPQUFLQyxVQUFMLENBQWdCckQsSUFBaEIsUUFKTTtBQUtmLG1CQUFTLE9BQUtzRCxnQkFBTCxDQUFzQnRELElBQXRCLFFBTE07QUFNZixnQkFBSyxRQU5VO0FBT2YscUJBQVUsY0FQSztBQVFmLGlCQUFPbEYsS0FBSzhGO0FBUkcsVUFBakI7O0FBV0EsWUFBTTJDLGdCQUFnQixPQUFLNUUsS0FBTCxDQUFXbEgsTUFBWCxDQUFrQitMLFVBQWxCLEdBQ2xCO0FBQ0Esb0JBQVUsT0FBSzdFLEtBQUwsQ0FBV3FDLFFBRHJCO0FBRUEsc0JBQVksT0FBS3lDLHFCQUFMLENBQTJCekQsSUFBM0IsU0FBc0NsRixLQUFLc0ksSUFBM0MsQ0FGWjtBQUdBLGtCQUFRLE9BQUtNLG1CQUFMLENBQXlCMUQsSUFBekIsU0FBb0NsRixLQUFLc0ksSUFBekMsQ0FIUjtBQUlBLG1CQUFTLE9BQUtDLFVBQUwsQ0FBZ0JyRCxJQUFoQixRQUpUO0FBS0EsZ0JBQUssUUFMTCxFQUtjLFdBQVUsY0FMeEI7QUFNQSx3QkFBYzNILFdBQVd5QyxLQUFLMEgsUUFBaEI7QUFOZCxVQURrQixHQVNsQjtBQUNBLG9CQUFVLE9BQUs3RCxLQUFMLENBQVdxQyxRQURyQjtBQUVBLHNCQUFZLE9BQUt5QyxxQkFBTCxDQUEyQnpELElBQTNCLFNBQXNDbEYsS0FBS3NJLElBQTNDLENBRlo7QUFHQSxrQkFBUSxPQUFLTSxtQkFBTCxDQUF5QjFELElBQXpCLFNBQW9DbEYsS0FBS3NJLElBQXpDLENBSFI7QUFJQSxtQkFBUyxPQUFLQyxVQUFMLENBQWdCckQsSUFBaEIsUUFKVDtBQUtBLGdCQUFLLFFBTEwsRUFLYyxXQUFVO0FBTHhCLFVBVEo7O0FBaUJBLGVBQU87QUFBQTtBQUFBLFlBQUssV0FBVzRDLFdBQWhCO0FBQ0wsaUJBQUs5SCxLQUFLc0ksSUFETDtBQUVMLHFCQUFTLE9BQUtPLGlCQUFMLENBQXVCM0QsSUFBdkIsU0FBa0NsRixLQUFLcEUsT0FBTCxDQUFhUyxJQUEvQyxDQUZKO0FBSUw7QUFBQTtBQUFBLGNBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVHMkQsaUJBQUtwRSxPQUFMLENBQWFTO0FBRmhCLFdBSks7QUFRTDtBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUcyRCxpQkFBS3BFLE9BQUwsQ0FBYUQ7QUFGaEIsV0FSSztBQVlMO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFR3lNO0FBRkgsV0FaSztBQWdCTDtBQUFBO0FBQUEsY0FBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFFSzdLLHVCQUFXeUMsS0FBSzhJLFVBQWhCLEVBQTRCOUQsV0FBNUIsQ0FBd0MsQ0FBeEMsRUFBMkMsR0FBM0MsRUFBZ0QsR0FBaEQ7QUFGTCxXQWhCSztBQW9CTDtBQUFBO0FBQUEsY0FBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUd5RDtBQUZILFdBcEJLO0FBd0JMO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFR1I7QUFGSCxXQXhCSztBQTRCTDtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFFT2pJLGlCQUFLK0ksV0FBTCxDQUFpQi9ELFdBQWpCLENBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBRlAsV0E1Qks7QUFpQ0w7QUFBQTtBQUFBLGNBQU0sV0FBV2dELGVBQWpCO0FBQ0UsaURBQUcsU0FBUyxPQUFLZ0IsVUFBTCxDQUFnQjlELElBQWhCLFNBQTJCbEYsS0FBS3NJLElBQWhDLENBQVosRUFBbUQsV0FBVSxvQkFBN0Q7QUFERjtBQWpDSyxTQUFQO0FBc0NELE9BOUVjLENBQWY7O0FBZ0ZBO0FBQ0E7QUFDQTs7QUFFQSxhQUFPO0FBQUE7QUFBQSxVQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFdBQTlCO0FBQ0pUO0FBREksT0FBUDtBQUlEOzs7O0VBM1BvQyxnQkFBTTdELFM7a0JBQXhCOEMsUzs7Ozs7Ozs7Z0NBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7UUNoQkxtQyxZLEdBQUFBLFk7UUFpREFDLGMsR0FBQUEsYztBQXREaEI7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU0QsWUFBVCxDQUFzQmxDLE1BQXRCLEVBQThCOztBQUVuQyxNQUFJb0MsV0FBVyxDQUFmO0FBQ0EsTUFBSUMscUJBQXFCLENBQXpCO0FBQ0EsTUFBSWpCLFFBQVEsQ0FBWjtBQUNBLE1BQUl6RCxRQUFRLENBQVo7QUFDQSxNQUFJMkUsZ0JBQWdCLENBQXBCOztBQUVBO0FBQ0F0QyxTQUFPdEwsT0FBUCxDQUFlLFVBQUN1RSxJQUFELEVBQVU7O0FBRXZCb0oseUJBQXFCQSxxQkFBcUJwSixLQUFLb0osa0JBQS9DOztBQUVBRCxlQUFXQSxXQUFXbkosS0FBS21KLFFBQTNCOztBQUVBLFFBQU1HLFlBQWF0SixLQUFLcEUsT0FBTCxDQUFhc00sU0FBZCxHQUNkbEksS0FBS21KLFFBQUwsSUFBaUJuSixLQUFLcEUsT0FBTCxDQUFhdU0sS0FBYixHQUFxQixHQUF0QyxDQURjLEdBRWQsQ0FGSjs7QUFJQSxRQUFNb0IsYUFBY3ZKLEtBQUtwRSxPQUFMLENBQWE0TixVQUFkLEdBQ2Z4SixLQUFLbUosUUFBTCxJQUFpQm5KLEtBQUtwRSxPQUFMLENBQWE2TixNQUFiLEdBQXNCLEdBQXZDLENBRGUsR0FFZixDQUZKOztBQUlBLFFBQU1DLGFBQWMxSixLQUFLcEUsT0FBTCxDQUFhK04sVUFBZCxHQUNmM0osS0FBS21KLFFBQUwsSUFBaUJuSixLQUFLcEUsT0FBTCxDQUFhZ08sTUFBYixHQUFzQixHQUF2QyxDQURlLEdBRWYsQ0FGSjs7QUFJQXpCLFlBQVFBLFFBQVFtQixTQUFSLEdBQW9CQyxVQUFwQixHQUFpQ0csVUFBekM7O0FBRUFMLG9CQUFnQkEsZ0JBQWdCckosS0FBSzZKLGdCQUFyQyxDQXBCdUIsQ0FvQitCO0FBRXZELEdBdEJEO0FBdUJBO0FBQ0E7QUFDQW5GLFVBQVF5RSxXQUFXaEIsS0FBbkI7QUFDQTtBQUNBLFNBQU87QUFDTGpOLFVBQU0sb0JBREQ7QUFFTEMsYUFBUztBQUNQZ08sZ0JBQVVBLFFBREg7QUFFUGhCLGFBQU9BLEtBRkE7QUFHUHpELGFBQU9BLEtBSEE7QUFJUDJFLHFCQUFlQSxhQUpSO0FBS1BELDBCQUFvQkE7QUFMYjtBQUZKLEdBQVA7QUFVRDs7QUFFRDtBQUNPLFNBQVNGLGNBQVQsQ0FBd0I5RCxXQUF4QixFQUFxQy9JLElBQXJDLEVBQTJDOztBQUVoRCxNQUFNeU4sY0FBYzFFLFlBQVlySSxTQUFaLENBQXNCO0FBQUEsV0FBUWlELEtBQUtzSSxJQUFMLElBQWFqTSxJQUFyQjtBQUFBLEdBQXRCLENBQXBCLENBRmdELENBRXFCOztBQUVyRSxNQUFNRixNQUFPMk4sZUFBZSxDQUFDLENBQWpCLEdBQW9CO0FBQzVCO0FBQ0E1TyxVQUFNLDJCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGtCQUROO0FBRUFDLGFBQVMyTztBQUZULEdBTEo7O0FBVUEsU0FBTzNOLEdBQVA7QUFDRDs7Ozs7Ozs7Z0NBaEVlOE0sWTs7Z0NBaURBQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkN0RGhCOzs7OztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFRcUJhLEssV0FOcEIseUJBQVEsVUFBQ3RHLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xlLGVBQVdmLE1BQU1nQixJQUFOLENBQVdELFNBRGpCO0FBRUxFLFdBQU9qQixNQUFNa0IsSUFBTixDQUFXQztBQUZiLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7O2tDQVFnQjtBQUNiLFdBQUtmLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sbUJBQVAsRUFBNEJDLFNBQVMsRUFBckMsRUFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLFVBQU02TyxhQUFhLEtBQUtuRyxLQUFMLENBQVdXLFNBQVgsR0FBdUIsc0JBQXZCLEdBQWdELFlBQW5FO0FBQ0EsVUFBTXlGLHNCQUFzQixLQUFLcEcsS0FBTCxDQUFXVyxTQUFYLEdBQXVCLDhCQUF2QixHQUF3RCxvQkFBcEY7QUFDQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVd3RixVQUFoQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVdDLG1CQUFoQjtBQU1FLGdFQU5GO0FBT0UsK0RBUEY7QUFRRTtBQVJGLFNBREs7QUFZTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQUE7QUFDSyxlQUFLcEcsS0FBTCxDQUFXYSxLQUFYLENBQWlCTSxXQUFqQixFQURMO0FBRUUsK0NBQUcsV0FBVSxxQkFBYixFQUFtQyxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTVDO0FBRkY7QUFaSyxPQUFQO0FBaUJEOzs7O0VBM0JnQyxnQkFBTWxCLFM7a0JBQXBCK0YsSzs7Ozs7Ozs7Z0NBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2hCckI7Ozs7O0FBR0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQWdCcUJHLE8sV0FkcEIseUJBQVEsVUFBQ3pHLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xsSCxhQUFTa0gsTUFBTWxILE9BQU4sQ0FBY0EsT0FEbEI7QUFFTE0sb0JBQWdCNEcsTUFBTWxILE9BQU4sQ0FBY00sY0FGekI7QUFHTDhILFVBQU1sQixNQUFNa0IsSUFBTixDQUFXVSxTQUhaO0FBSUxFLG9CQUFnQjlCLE1BQU1rQixJQUFOLENBQVdZLGNBSnRCO0FBS0w1SSxZQUFROEcsTUFBTWxILE9BQU4sQ0FBY00sY0FMakI7QUFNTEksV0FBT3dHLE1BQU1sSCxPQUFOLENBQWNVLEtBTmhCO0FBT0xDLFVBQU11RyxNQUFNbEgsT0FBTixDQUFjTyxZQVBmO0FBUUw7QUFDQXFOLFVBQU0xRyxNQUFNbEgsT0FBTixDQUFjNk47QUFDcEI7QUFWSyxHQUFQO0FBWUQsQ0FiQSxDOzs7Ozs7Ozs7Ozs4Q0FnQjJCQyxTLEVBQVc7QUFDbkMsVUFBSUEsVUFBVXhOLGNBQVYsSUFBNEIsS0FBS2dILEtBQUwsQ0FBV2hILGNBQTNDLEVBQTJEO0FBQ3pEOztBQUVBLFlBQUksQ0FBQ3dOLFVBQVV4TixjQUFWLENBQXlCNkwsVUFBOUIsRUFBMEM7O0FBRXhDLGNBQU1qSyxTQUFTO0FBQ2I2TCx1QkFBV0QsVUFBVXhOLGNBQVYsQ0FBeUIwTixFQUR2QjtBQUVibkoscUJBQVMsaUJBRkk7QUFHYkMsa0JBQU07QUFITyxXQUFmOztBQU1BLGNBQU1xRyxXQUFXMkMsVUFBVTFOLE1BQVYsQ0FBaUI2TixlQUFqQixHQUFtQ0gsVUFBVTFOLE1BQVYsQ0FBaUI2TixlQUFwRCxHQUFzRSxDQUF2Rjs7QUFFQSxlQUFLM0csS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiwwQkFBV3dMLFVBQVUxRixJQUFyQixFQUEyQitDLFFBQTNCLEVBQXFDMkMsVUFBVTFOLE1BQS9DLENBQXBCO0FBQ0EsZUFBS2tILEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0scUJBQVAsRUFBOEJDLFNBQVN1TSxRQUF2QyxFQUFwQjs7QUFFQSxlQUFLN0QsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixrQ0FBY0osTUFBZCxDQUFwQjs7QUFFQTtBQUNBLGNBQUk0TCxVQUFVMU4sTUFBVixDQUFpQjZOLGVBQXJCLEVBQXNDO0FBQ3BDbEgscUJBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMvQixLQUF6QyxHQUFpRGtHLFFBQWpEO0FBQ0FwRSxxQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5QzJDLFFBQXpDLEdBQW9ELElBQXBEO0FBQ0QsV0FIRCxNQUdPO0FBQ0w1QyxxQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Qy9CLEtBQXpDLEdBQWlELEVBQWpEO0FBQ0E4QixxQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5QzJDLFFBQXpDLEdBQW9ELEtBQXBEO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozt5Q0FFb0I7O0FBRW5CLFdBQUtyQyxLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLGtCQUFQLEVBQTJCQyxTQUFTLEVBQXBDLEVBQXBCO0FBQ0EsV0FBSzBJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFwQjs7QUFFQSxVQUFNc1AsZUFBZTtBQUNuQi9MLGFBQUssY0FEYztBQUVuQkMscUJBQWEseUJBRk07QUFHbkJDLG1CQUFXO0FBSFEsT0FBckI7O0FBTUEsV0FBS2lGLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsMEJBQWdCNEwsWUFBaEIsQ0FBcEI7QUFFRDs7O2tDQUVhOUUsRSxFQUFJO0FBQ2hCO0FBQ0EsVUFBSUEsR0FBR0MsR0FBSCxJQUFVLE9BQWQsRUFBdUI7O0FBRXJCLFlBQU12SixPQUFPc0osR0FBR0UsTUFBSCxDQUFVckUsS0FBdkIsQ0FGcUIsQ0FFUTtBQUM3QixhQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiw2QkFBZXhDLElBQWYsRUFBcUIsS0FBS3dILEtBQUwsQ0FBV3RILE9BQWhDLENBQXBCLEVBSHFCLENBR3lDO0FBQy9EO0FBRUY7OzsrQkFFVW9KLEUsRUFBSTtBQUNiLFVBQU0zSSxNQUFNMkksR0FBR0UsTUFBSCxDQUFVckUsS0FBdEI7QUFDQSxXQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiwyQkFBYTdCLEdBQWIsRUFBa0IsS0FBSzZHLEtBQUwsQ0FBVzVHLEtBQTdCLENBQXBCLEVBRmEsQ0FFNEM7QUFDMUQ7OztpQ0FFWTBJLEUsRUFBSTtBQUNmLFdBQUs5QixLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLFlBQVAsRUFBcUJDLFNBQVMsRUFBOUIsRUFBcEIsRUFEZSxDQUN3QztBQUN4RDs7O3dDQUVtQjs7QUFFbEIsV0FBSzBJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsNEJBQXBCO0FBRUQ7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVA7QUFDQTtBQUNBOztBQUVBLFVBQU02TCxlQUFnQixLQUFLN0csS0FBTCxDQUFXaEgsY0FBWixHQUNkLEtBQUtnSCxLQUFMLENBQVdoSCxjQUFYLENBQTBCSCxJQURaLFNBQ29CLEtBQUttSCxLQUFMLENBQVdoSCxjQUFYLENBQTBCRCxTQUQ5QyxHQUVqQixpQkFGSjs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSxpREFBSyxVQUFVLEtBQUtpSCxLQUFMLENBQVdxQyxRQUExQixFQUFvQyxTQUFTLEtBQUt5RSxpQkFBTCxDQUF1QnpGLElBQXZCLENBQTRCLElBQTVCLENBQTdDO0FBQ0UsaUJBQUk7QUFETjtBQURGLFNBRks7QUFRTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUUscURBQU8sVUFBVSxLQUFLckIsS0FBTCxDQUFXcUMsUUFBNUIsRUFBc0MsV0FBVyxLQUFLQyxhQUFMLENBQW1CakIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBakQ7QUFDRSxvQkFBSztBQURQO0FBRkYsV0FGRjtBQVNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBT3dGO0FBQVA7QUFGRjtBQVRGO0FBUkssT0FBUDtBQTBCRDs7OztFQWxIa0MsZ0JBQU0xRyxTO2tCQUF0QmtHLE87Ozs7Ozs7O2dDQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7O1FDVkxVLGEsR0FBQUEsYTs7QUFaaEI7Ozs7QUFFQTs7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBS0EsZ0JBQU10TSxRQUFOLENBQWVDLGNBQWYsR0FBZ0MsV0FBaEM7QUFDQSxnQkFBTUQsUUFBTixDQUFlRSxjQUFmLEdBQWdDLGFBQWhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNvTSxhQUFULENBQXVCbk0sTUFBdkIsRUFBK0I7QUFDcEMsU0FBTyxVQUFTSSxRQUFULEVBQW1CO0FBQ3hCLFFBQU1JLE9BQU8yQyxLQUFLQyxTQUFMLENBQWUsRUFBQ3lJLFdBQVc3TCxPQUFPNkwsU0FBbkIsRUFBZixDQUFiO0FBQ0E7QUFDQSxvQkFBTU8sSUFBTixDQUFXLHFCQUFYLEVBQWtDNUwsSUFBbEMsRUFDR0YsSUFESCxDQUNRLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkJ4QyxjQUFRQyxHQUFSLENBQVl1QyxRQUFaO0FBQ0FILGVBQVMsRUFBQzNELE1BQU0sZUFBUCxFQUF3QkMsU0FBUyxFQUFqQyxFQUFUO0FBQ0EwRCxlQUFTLEVBQUMzRCxNQUFNdUQsT0FBTzJDLE9BQWQsRUFBdUJqRyxTQUFTNkQsU0FBU0MsSUFBekMsRUFBVDtBQUNELEtBTEgsRUFNR0MsS0FOSCxDQU1TLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckIsMkJBQVNFLEtBQVQsQ0FBZSxPQUFmLG9LQUNtREYsS0FEbkQ7QUFFQU4sZUFBUyxFQUFDM0QsTUFBTXVELE9BQU80QyxJQUFkLEVBQW9CbEcsU0FBUyxFQUE3QixFQUFUO0FBQ0QsS0FWSDtBQVdELEdBZEQ7QUFlRDs7Ozs7Ozs7Z0NBaEJleVAsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDZmhCOzs7OztBQUdBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQWNxQkUsTSxXQVpwQix5QkFBUSxVQUFDckgsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGlCLFdBQU9qQixNQUFNa0IsSUFBTixDQUFXQyxTQURiO0FBRUxqSSxZQUFROEcsTUFBTWxILE9BQU4sQ0FBY00sY0FGakI7QUFHTHNMLFdBQU8xRSxNQUFNa0IsSUFBTixDQUFXb0csU0FIYjtBQUlMMUIsbUJBQWU1RixNQUFNa0IsSUFBTixDQUFXMEUsYUFKckI7QUFLTEQsd0JBQW9CM0YsTUFBTWtCLElBQU4sQ0FBV3FHLHNCQUwxQjtBQU1MNUYsaUJBQWEzQixNQUFNa0IsSUFBTixDQUFXVSxTQU5uQjtBQU9MRSxvQkFBZ0I5QixNQUFNa0IsSUFBTixDQUFXWTtBQUMzQjtBQVJLLEdBQVA7QUFVRCxDQVhBLEM7OztBQWNDLGtCQUFZMUIsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLb0gsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhO0FBREYsS0FBYjtBQUZpQjtBQUtsQjs7Ozt1Q0FFa0I7QUFDakIsV0FBS3JILEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFwQjtBQUNEOzs7a0NBRWF3SyxFLEVBQUk7QUFDaEI7QUFDQSxVQUFJQSxHQUFHQyxHQUFILElBQVUsT0FBZCxFQUF1Qjs7QUFFckIsWUFBTThCLFdBQVkvQixHQUFHRSxNQUFILENBQVVyRSxLQUFYLEdBQ2JtRSxHQUFHRSxNQUFILENBQVVyRSxLQURHLEdBRWIsQ0FGSjtBQUdBO0FBQ0EsWUFBTTJKLGNBQWMsS0FBS3RILEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0J3TyxXQUFsQixHQUFnQyxLQUFLdEgsS0FBTCxDQUFXbEgsTUFBWCxDQUFrQndPLFdBQWxELEdBQWdFLEdBQXBGO0FBQ0EsWUFBSXpELFlBQVl5RCxXQUFoQixFQUE2QjtBQUMzQixlQUFLdEgsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxxQkFBUCxFQUE4QkMsU0FBU3VNLFFBQXZDLEVBQXBCO0FBQ0EsZUFBSzdELEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IseUJBQVcsS0FBS2dGLEtBQUwsQ0FBV3VCLFdBQXRCLEVBQW1DLEtBQUs2RixLQUFMLENBQVdDLFdBQTlDLEVBQTJELEtBQUtySCxLQUFMLENBQVdsSCxNQUF0RSxDQUFwQjtBQUNELFNBSEQsTUFHTztBQUNMLCtCQUFTMEMsS0FBVCxDQUFlLE9BQWYsdUVBQTJGOEwsV0FBM0Y7QUFDQTdILG1CQUFTQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDL0IsS0FBekMsR0FBaURqRSxXQUFXLEtBQUtzRyxLQUFMLENBQVcwQixjQUF0QixDQUFqRDtBQUNEO0FBQ0YsT0FkRCxNQWNPO0FBQ0wsYUFBSzBGLEtBQUwsQ0FBV0MsV0FBWCxHQUEwQnZGLEdBQUdFLE1BQUgsQ0FBVXJFLEtBQVgsR0FDckJqRSxXQUFXb0ksR0FBR0UsTUFBSCxDQUFVckUsS0FBckIsQ0FEcUIsR0FFckIsQ0FGSjtBQUdEO0FBRUY7OztnQ0FFV21FLEUsRUFBSTtBQUNkOztBQUVBLFVBQU0rQixXQUFZL0IsR0FBR0UsTUFBSCxDQUFVckUsS0FBWCxHQUNibUUsR0FBR0UsTUFBSCxDQUFVckUsS0FERyxHQUViLENBRko7QUFHQTtBQUNBLFVBQU0ySixjQUFjLEtBQUt0SCxLQUFMLENBQVdsSCxNQUFYLENBQWtCd08sV0FBbEIsR0FBZ0MsS0FBS3RILEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0J3TyxXQUFsRCxHQUFnRSxHQUFwRjtBQUNBLFVBQUl6RCxZQUFZeUQsV0FBaEIsRUFBNkI7QUFDM0IsYUFBS3RILEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0scUJBQVAsRUFBOEJDLFNBQVN1TSxRQUF2QyxFQUFwQjtBQUNBLGFBQUs3RCxLQUFMLENBQVdoRixRQUFYLENBQW9CLHlCQUFXLEtBQUtnRixLQUFMLENBQVd1QixXQUF0QixFQUFtQyxLQUFLNkYsS0FBTCxDQUFXQyxXQUE5QyxFQUEyRCxLQUFLckgsS0FBTCxDQUFXbEgsTUFBdEUsQ0FBcEI7QUFDRCxPQUhELE1BR087QUFDTCw2QkFBUzBDLEtBQVQsQ0FBZSxPQUFmLHVFQUEyRjhMLFdBQTNGO0FBQ0E3SCxpQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Qy9CLEtBQXpDLEdBQWlEakUsV0FBVyxLQUFLc0csS0FBTCxDQUFXMEIsY0FBdEIsQ0FBakQ7QUFDRDtBQUVGOztBQUVEOzs7OzZCQUNTOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0w7QUFBQTtBQUFBLFlBQUssT0FBTztBQUNWLDRCQUFjLEdBREo7QUFFViwyQkFBYTtBQUZILGFBQVosRUFHRyxXQUFVLHFCQUhiO0FBT0U7QUFBQTtBQUFBLGNBQU8sV0FBVSxvQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFJLFdBQVUsT0FBZDtBQUFBO0FBQXlCLHVCQUFLMUIsS0FBTCxDQUFXdUYsa0JBQVgsQ0FBOEJwRSxXQUE5QixDQUEwQyxDQUExQyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRDtBQUF6QjtBQUZGLGVBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsb0JBQUksT0FBTztBQUNULCtCQUFTO0FBREEscUJBQVg7QUFBQTtBQUFBLGlCQURGO0FBSUU7QUFBQTtBQUFBLG9CQUFJLE9BQU87QUFDVCxpQ0FBVztBQURGLHFCQUFYO0FBR0U7QUFDRSx3QkFBRyxlQURMO0FBRUUsOEJBQVUsS0FBS25CLEtBQUwsQ0FBV3FDLFFBRnZCO0FBR0UsZ0NBQVksS0FBS0MsYUFBTCxDQUFtQmpCLElBQW5CLENBQXdCLElBQXhCLENBSGQ7QUFJRSw4QkFBVSxLQUFLaUIsYUFBTCxDQUFtQmpCLElBQW5CLENBQXdCLElBQXhCLENBSlo7QUFLRSw0QkFBUSxLQUFLa0csV0FBTCxDQUFpQmxHLElBQWpCLENBQXNCLElBQXRCLENBTFY7QUFNRSwwQkFBSyxRQU5QO0FBT0UsMkJBQU87QUFDTCwrQkFBUyxNQURKO0FBRUwsZ0NBQVUsTUFGTDtBQUdMLGlDQUFXLFlBSE47QUFJTCxrQ0FBWSxNQUpQO0FBS0wsZ0NBQVUsR0FMTDtBQU1MLGtDQUFZLFVBTlA7QUFPTCxpQ0FBVztBQVBOLHFCQVBUO0FBZ0JFLCtCQUFVLHlDQWhCWjtBQUhGO0FBSkYsZUFORjtBQWlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFJLFdBQVUsT0FBZDtBQUFBO0FBQXlCLHVCQUFLckIsS0FBTCxDQUFXd0YsYUFBWCxDQUF5QnJFLFdBQXpCLENBQXFDLENBQXJDLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDO0FBQXpCO0FBRkYsZUFqQ0Y7QUF1Q0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLE9BQWQ7QUFBQTtBQUF5Qix1QkFBS25CLEtBQUwsQ0FBV3NFLEtBQVgsQ0FBaUJuRCxXQUFqQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQztBQUF6QjtBQUZGLGVBdkNGO0FBMkNFO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFHRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxPQUFkO0FBQUE7QUFBeUIsdUJBQUtuQixLQUFMLENBQVdhLEtBQVgsQ0FBaUJNLFdBQWpCLENBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQXpCO0FBSEY7QUEzQ0Y7QUFERjtBQVBGO0FBREssT0FBUDtBQStERDs7OztFQXpIaUMsZ0JBQU1oQixTO2tCQUFyQjhHLE07Ozs7Ozs7O2dDQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNyQnJCOzs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFLcUJPLE8sV0FIcEIseUJBQVEsVUFBQzVILEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUN5QyxVQUFVekMsTUFBTTZILEtBQU4sQ0FBWUMsU0FBdkIsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7bUNBS2dCO0FBQ2IsV0FBSzFILEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sZ0JBQVAsRUFBeUJDLFNBQVMsQ0FBQyxDQUFuQyxFQUFwQjtBQUNEOzs7c0NBQ2lCO0FBQ2hCLFdBQUswSSxLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLG9CQUFQLEVBQTZCQyxTQUFTLENBQUMsQ0FBdkMsRUFBcEI7QUFDRDs7O29DQUNlO0FBQ2QsV0FBSzBJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sa0JBQVAsRUFBMkJDLFNBQVMsQ0FBQyxDQUFyQyxFQUFwQjtBQUNEOzs7d0NBQ21CO0FBQ2xCLFdBQUswSSxLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLHFCQUFQLEVBQThCQyxTQUFTLENBQUMsQ0FBeEMsRUFBcEI7QUFDRDs7OzhCQUNTO0FBQ1I7QUFDQWdJLGFBQU9xSSxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixhQUF2QjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7O0FBRVAsVUFBTUMsVUFBVSxLQUFLN0gsS0FBTCxDQUFXcUMsUUFBWCxHQUNaO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNFLHFCQUFTLEtBQUt5RixlQUFMLENBQXFCekcsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEWDtBQUVFLG1CQUFPO0FBQ0wsd0JBQVUsTUFETDtBQUVMLHVCQUFTLEtBRko7QUFHTCwyQkFBYTtBQUhSLGFBRlQ7QUFPRSx1QkFBVSxtQ0FQWjtBQUFBO0FBU0U7QUFBQTtBQUFBO0FBQ0UsaURBQUcsV0FBVSxhQUFiO0FBREY7QUFURixTQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0UscUJBQVMsS0FBSzBHLE9BQUwsQ0FBYTFHLElBQWIsQ0FBa0IsSUFBbEIsQ0FEWDtBQUVFLG1CQUFPO0FBQ0wsd0JBQVUsTUFETDtBQUVMLHVCQUFTLEtBRko7QUFHTCwyQkFBYTtBQUhSLGFBRlQ7QUFPRSx1QkFBVSxtQ0FQWjtBQUFBO0FBU0U7QUFBQTtBQUFBO0FBQ0UsaURBQUcsV0FBVSxlQUFiO0FBREY7QUFURjtBQWRBLE9BRFksR0E2QlosRUE3Qko7O0FBK0JBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQU1MO0FBQUE7QUFBQTtBQUNFLHNCQUFVLEtBQUtyQixLQUFMLENBQVdxQyxRQUR2QjtBQUVFLHFCQUFTLEtBQUsyRixZQUFMLENBQWtCM0csSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGWDtBQUdFLG1CQUFPO0FBQ0wsd0JBQVUsTUFETDtBQUVMLHVCQUFTLEtBRko7QUFHTCwyQkFBYTtBQUhSLGFBSFQ7QUFRRSx1QkFBVSxtQ0FSWjtBQUFBO0FBVUU7QUFBQTtBQUFBO0FBQ0UsaURBQUcsV0FBVSxtQkFBYjtBQURGO0FBVkYsU0FOSztBQXFCTDtBQUFBO0FBQUE7QUFDRSxzQkFBVSxLQUFLckIsS0FBTCxDQUFXcUMsUUFEdkI7QUFFRSxxQkFBUyxLQUFLNEYsYUFBTCxDQUFtQjVHLElBQW5CLENBQXdCLElBQXhCLENBRlg7QUFHRSxtQkFBTztBQUNMLHdCQUFVLE1BREw7QUFFTCx1QkFBUyxLQUZKO0FBR0wsMkJBQWE7QUFIUixhQUhUO0FBUUUsdUJBQVUsbUNBUlo7QUFBQTtBQVVFO0FBQUE7QUFBQTtBQUNFLGlEQUFHLFdBQVUsWUFBYjtBQURGO0FBVkYsU0FyQks7QUFvQ0w7QUFBQTtBQUFBO0FBQ0Usc0JBQVUsS0FBS3JCLEtBQUwsQ0FBV3FDLFFBRHZCO0FBRUUscUJBQVMsS0FBSzZGLGlCQUFMLENBQXVCN0csSUFBdkIsQ0FBNEIsSUFBNUIsQ0FGWDtBQUdFLG1CQUFPO0FBQ0wsd0JBQVUsTUFETDtBQUVMLHVCQUFTLEtBRko7QUFHTCwyQkFBYTtBQUhSLGFBSFQ7QUFRRSx1QkFBVSxtQ0FSWjtBQUFBO0FBVUU7QUFBQTtBQUFBO0FBQ0UsaURBQUcsV0FBVSxZQUFiO0FBREY7QUFWRixTQXBDSztBQW1ESndHO0FBbkRJLE9BQVA7QUF1REQ7Ozs7RUE3R2tDLGdCQUFNMUgsUztrQkFBdEJxSCxPOzs7Ozs7OztnQ0FBQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDVHJCOzs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU0vRSxZQUFZLG1CQUFBQyxDQUFRLEVBQVIsQ0FBbEI7O0lBTXFCeUYsYyxXQUpwQix5QkFBUSxVQUFDdkksS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ3dJLFNBQVN4SSxNQUFNdUksY0FBTixDQUFxQkMsT0FBL0IsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7K0JBTVl0RyxFLEVBQUk7O0FBRWIsVUFBSUEsR0FBR0UsTUFBSCxDQUFVcUcsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUM1QyxhQUFLdEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQix5QkFBcEI7QUFDQXlFLGlCQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRGtDLEtBQWpEO0FBQ0FhLGtCQUFVTyxNQUFWLENBQWlCLEtBQWpCO0FBQ0Q7QUFFRjtBQUNEOzs7OzZCQUNTOztBQUVQLFVBQU11RixlQUFnQixLQUFLdkksS0FBTCxDQUFXb0ksT0FBWixHQUNqQix1REFEaUIsR0FFakIsNENBRko7O0FBSUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFXRyxZQUFoQixFQUE4QixTQUFTLEtBQUtDLFVBQUwsQ0FBZ0JuSCxJQUFoQixDQUFxQixJQUFyQixDQUF2QztBQUVMO0FBQUE7QUFBQSxZQUFRLFdBQVUsaUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBRks7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFFRSx1RUFGRjtBQUdFO0FBSEY7QUFERjtBQURGO0FBTkssT0FBUDtBQWlCRDs7OztFQW5DeUMsZ0JBQU1sQixTO2tCQUE3QmdJLGM7Ozs7Ozs7O2dDQUFBQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFRcUJNLFUsV0FOcEIseUJBQVEsVUFBQzdJLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xwSSxjQUFVb0ksTUFBTXBJLFFBQU4sQ0FBZUEsUUFEcEI7QUFFTGtSLGlCQUFhOUksTUFBTXVJLGNBQU4sQ0FBcUJPO0FBRjdCLEdBQVA7QUFJRCxDQUxBLEM7OztBQVFDLHNCQUFZMUksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLb0gsS0FBTCxHQUFhO0FBQ1h1QixpQkFBVztBQURBLEtBQWI7QUFGaUI7QUFLbEI7Ozs7a0NBRWE3RyxFLEVBQUk7O0FBRWhCLFVBQUlBLEdBQUdDLEdBQUgsSUFBVSxPQUFkLEVBQXVCOztBQUVyQkQsV0FBR2dCLGNBQUg7QUFDQSxhQUFLOEYsbUJBQUw7QUFFRCxPQUxELE1BS087QUFDTCxhQUFLNUksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxnQ0FBUCxFQUF5Q0MsU0FBU3dLLEdBQUdFLE1BQUgsQ0FBVXJFLEtBQTVELEVBQXBCO0FBQ0Q7QUFFRjs7OzBDQUVxQjtBQUNwQixXQUFLcUMsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiw0QkFBYyxLQUFLZ0YsS0FBTCxDQUFXMEksV0FBekIsRUFBc0MsS0FBSzFJLEtBQUwsQ0FBV3hJLFFBQWpELENBQXBCO0FBQ0Q7Ozs2QkFFUTs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFNLFFBQU8sRUFBYixFQUFnQixXQUFVLDJCQUExQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLHNCQUFmO0FBQUE7QUFBQTtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxtQkFBZjtBQUNFLHVEQUFPLFdBQVcsS0FBSzhLLGFBQUwsQ0FBbUJqQixJQUFuQixDQUF3QixJQUF4QixDQUFsQixFQUFpRCxVQUFVLEtBQUtpQixhQUFMLENBQW1CakIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBM0QsRUFBMEYsT0FBTyxLQUFLckIsS0FBTCxDQUFXMEksV0FBNUcsRUFBeUgsTUFBSyxNQUE5SCxFQUFxSSxPQUFPO0FBQzFJLDJCQUFTO0FBRGlJLGlCQUE1SSxFQUVHLElBQUcsc0JBRk4sRUFFNkIsV0FBVSxpQ0FGdkM7QUFERixhQURGO0FBTUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxTQUFTLEtBQUtFLG1CQUFMLENBQXlCdkgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBakIsRUFBc0QsTUFBSyxRQUEzRCxFQUFvRSxJQUFHLG9CQUF2RSxFQUE0RixPQUFPO0FBQ2pHLDhCQUFVLE1BRHVGO0FBRWpHLDZCQUFTO0FBRndGLG1CQUFuRyxFQUdHLFdBQVUsNENBSGI7QUFJRSx3REFBTSxXQUFVLGNBQWhCO0FBSkY7QUFERjtBQU5GO0FBSkY7QUFESyxPQUFQO0FBdUJEOzs7O0VBbkRxQyxnQkFBTWxCLFM7a0JBQXpCc0ksVTs7Ozs7Ozs7Z0NBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDVk4sb0JBQVU7O0FBRXJCSSxXQUFPQyxTQUFQLENBQWlCM0gsV0FBakIsR0FBK0IsVUFBUzRILENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWlCO0FBQ2hELFlBQUlDLElBQUksSUFBUjtBQUFBLFlBQ0lILElBQUk3RyxNQUFNNkcsSUFBSUksS0FBS0MsR0FBTCxDQUFTTCxDQUFULENBQVYsSUFBeUIsQ0FBekIsR0FBNkJBLENBRHJDO0FBQUEsWUFFSUMsSUFBSUEsS0FBS0ssU0FBTCxHQUFpQixHQUFqQixHQUF1QkwsQ0FGL0I7QUFBQSxZQUdJQyxJQUFJQSxLQUFLSSxTQUFMLEdBQWlCLEdBQWpCLEdBQXVCSixDQUgvQjtBQUFBLFlBSUlLLElBQUlKLElBQUksQ0FBSixHQUFRLEdBQVIsR0FBYyxFQUp0QjtBQUFBLFlBS0lLLElBQUlDLE9BQU94SyxTQUFTa0ssSUFBSUMsS0FBS0MsR0FBTCxDQUFTUCxPQUFPSyxDQUFQLEtBQWEsQ0FBdEIsRUFBeUJPLE9BQXpCLENBQWlDVixDQUFqQyxDQUFiLENBQVAsQ0FMUjtBQUFBLFlBTUlXLElBQUksQ0FBQ0EsSUFBSUgsRUFBRWhSLE1BQVAsSUFBaUIsQ0FBakIsR0FBcUJtUixJQUFJLENBQXpCLEdBQTZCLENBTnJDO0FBT0csZUFBT0osS0FBS0ksSUFBSUgsRUFBRUksTUFBRixDQUFTLENBQVQsRUFBWUQsQ0FBWixJQUFpQlQsQ0FBckIsR0FBeUIsRUFBOUIsSUFBb0NNLEVBQUVJLE1BQUYsQ0FBU0QsQ0FBVCxFQUFZRSxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxPQUFPWCxDQUE3QyxDQUFwQyxJQUF1RkYsSUFBSUMsSUFBSUcsS0FBS0MsR0FBTCxDQUFTRixJQUFJSyxDQUFiLEVBQWdCRSxPQUFoQixDQUF3QlYsQ0FBeEIsRUFBMkJjLEtBQTNCLENBQWlDLENBQWpDLENBQVIsR0FBOEMsRUFBckksQ0FBUDtBQUNELEtBVEY7QUFXSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFLcUJDLFksV0FIcEIseUJBQVEsVUFBQ2xLLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUNtSyxTQUFTbkssTUFBTXVJLGNBQU4sQ0FBcUI2QixlQUEvQixFQUFnRHhTLFVBQVVvSSxNQUFNcEksUUFBTixDQUFlQSxRQUF6RSxFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7OztrQ0FLZWdCLEksRUFBTXNKLEUsRUFBSTtBQUN0QixXQUFLOUIsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixtQ0FBcUJ4QyxJQUFyQixDQUFwQixFQURzQixDQUMwQjtBQUNoRCxXQUFLd0gsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQix5QkFBcEI7QUFDQXlFLGVBQVNDLGNBQVQsQ0FBd0IsdUJBQXhCLEVBQWlEa0MsS0FBakQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBRVAsVUFBTXBLLFdBQVcsS0FBS3dJLEtBQUwsQ0FBVytKLE9BQVgsQ0FBbUJ2TCxHQUFuQixDQUF1QixVQUFDckMsSUFBRCxFQUFVOztBQUVoRCxlQUFPO0FBQUE7QUFBQSxZQUFJLGVBQWUsT0FBSzhOLGFBQUwsQ0FBbUI1SSxJQUFuQixTQUE4QmxGLEtBQUszRCxJQUFuQyxDQUFuQixFQUE2RCxLQUFLMkQsS0FBSzNELElBQXZFO0FBQ0w7QUFBQTtBQUFBO0FBQ0cyRCxpQkFBSzNEO0FBRFIsV0FESztBQUlMO0FBQUE7QUFBQTtBQUNHMkQsaUJBQUtyRTtBQURSLFdBSks7QUFNTDtBQUFBO0FBQUE7QUFDR3FFLGlCQUFLK047QUFEUjtBQU5LLFNBQVA7QUFXRCxPQWJnQixDQUFqQjs7QUFlQSxhQUFPO0FBQUE7QUFBQSxVQUFNLFFBQU8sRUFBYixFQUFnQixXQUFVLDJCQUExQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxJQUFHLHVCQUFWLEVBQWtDLFdBQVUsa0NBQTVDO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFERixlQURGO0FBU0U7QUFBQTtBQUFBLGtCQUFPLFdBQVUsMkJBQWpCO0FBQ0cxUztBQURIO0FBVEY7QUFERjtBQURGO0FBREssT0FBUDtBQW9CRDs7OztFQTdDdUMsZ0JBQU0ySSxTO2tCQUEzQjJKLFk7Ozs7Ozs7O2dDQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNSckI7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTXJILFlBQVksbUJBQUFDLENBQVEsRUFBUixDQUFsQjs7SUFNcUJ5SCxhLFdBSnBCLHlCQUFRLFVBQUN2SyxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDd0ksU0FBU3hJLE1BQU11SyxhQUFOLENBQW9CL0IsT0FBOUIsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7K0JBTVl0RyxFLEVBQUk7O0FBRWIsVUFBSUEsR0FBR0UsTUFBSCxDQUFVcUcsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUM1QyxhQUFLdEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQix5QkFBcEI7QUFDQXlFLGlCQUFTQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRGtDLEtBQWpEO0FBQ0FhLGtCQUFVTyxNQUFWLENBQWlCLEtBQWpCO0FBQ0Q7QUFFRjtBQUNEOzs7OzZCQUNTOztBQUVQLFVBQU11RixlQUFnQixLQUFLdkksS0FBTCxDQUFXb0ksT0FBWixHQUNqQix1REFEaUIsR0FFakIsNENBRko7O0FBSUEsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFXRyxZQUFoQixFQUE4QixTQUFTLEtBQUtDLFVBQUwsQ0FBZ0JuSCxJQUFoQixDQUFxQixJQUFyQixDQUF2QztBQUVMO0FBQUE7QUFBQSxZQUFRLFdBQVUsaUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBRks7QUFNTDtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFFRSx1RUFGRjtBQUdFO0FBSEY7QUFERjtBQURGO0FBTkssT0FBUDtBQWlCRDs7OztFQW5Dd0MsZ0JBQU1sQixTO2tCQUE1QmdLLGE7Ozs7Ozs7O2dDQUFBQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFLcUIxQixVLFdBSHBCLHlCQUFRLFVBQUM3SSxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDbEgsU0FBU2tILE1BQU1sSCxPQUFOLENBQWNBLE9BQXhCLEVBQVA7QUFDRCxDQUZBLEM7OztBQUtDLHNCQUFZc0gsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLb0gsS0FBTCxHQUFhO0FBQ1h1QixpQkFBVztBQURBLEtBQWI7QUFGaUI7QUFLbEI7Ozs7a0NBRWE3RyxFLEVBQUk7O0FBRWhCLFVBQUlBLEdBQUdDLEdBQUgsSUFBVSxPQUFkLEVBQXVCO0FBQ3JCRCxXQUFHZ0IsY0FBSDtBQUNBLGFBQUtzSCxrQkFBTDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtoRCxLQUFMLENBQVd1QixTQUFYLEdBQXVCN0csR0FBR0UsTUFBSCxDQUFVckUsS0FBakM7QUFDRDtBQUVGOzs7eUNBRW9CO0FBQ25CLFVBQU1wRyxNQUFNLEtBQUs2UCxLQUFMLENBQVd1QixTQUF2QjtBQUNBLFdBQUszSSxLQUFMLENBQVdoRixRQUFYLENBQW9CLDJCQUFhekQsR0FBYixFQUFrQixLQUFLeUksS0FBTCxDQUFXdEgsT0FBN0IsQ0FBcEI7QUFDRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQU0sUUFBTyxFQUFiLEVBQWdCLFdBQVUsMkJBQTFCO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEscUJBQWY7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLG1CQUFmO0FBQ0UsdURBQU8sWUFBWSxLQUFLNEosYUFBTCxDQUFtQmpCLElBQW5CLENBQXdCLElBQXhCLENBQW5CLEVBQWtELFVBQVUsS0FBS2lCLGFBQUwsQ0FBbUJqQixJQUFuQixDQUF3QixJQUF4QixDQUE1RCxFQUEyRixNQUFLLE1BQWhHLEVBQXVHLE9BQU87QUFDNUcsMkJBQVM7QUFEbUcsaUJBQTlHLEVBRUcsSUFBRyxxQkFGTixFQUU0QixXQUFVLGlDQUZ0QztBQURGLGFBREY7QUFNRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLFNBQVMsS0FBSytJLGtCQUFMLENBQXdCL0ksSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBakIsRUFBcUQsTUFBSyxRQUExRCxFQUFtRSxJQUFHLG1CQUF0RSxFQUEwRixPQUFPO0FBQy9GLDhCQUFVLE1BRHFGO0FBRS9GLDZCQUFTO0FBRnNGLG1CQUFqRyxFQUdHLFdBQVUsNENBSGI7QUFJRSx3REFBTSxXQUFVLGNBQWhCO0FBSkY7QUFERjtBQU5GO0FBSkY7QUFESyxPQUFQO0FBdUJEOzs7O0VBbERxQyxnQkFBTWxCLFM7a0JBQXpCc0ksVTs7Ozs7Ozs7Z0NBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUtxQnFCLFksV0FIcEIseUJBQVEsVUFBQ2xLLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUNtSyxTQUFTbkssTUFBTXVLLGFBQU4sQ0FBb0JFLGNBQTlCLEVBQThDM1IsU0FBU2tILE1BQU1sSCxPQUFOLENBQWNBLE9BQXJFLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O2lDQUtjRixJLEVBQU1zSixFLEVBQUk7QUFDckIsV0FBSzlCLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsNkJBQWV4QyxJQUFmLEVBQXFCLEtBQUt3SCxLQUFMLENBQVd0SCxPQUFoQyxDQUFwQixFQURxQixDQUN5QztBQUM5RCxXQUFLc0gsS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiwwQkFBcEI7QUFDQXlFLGVBQVNDLGNBQVQsQ0FBd0IsdUJBQXhCLEVBQWlEa0MsS0FBakQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBRVAsVUFBTWxKLFVBQVUsS0FBS3NILEtBQUwsQ0FBVytKLE9BQVgsQ0FBbUJ2TCxHQUFuQixDQUF1QixVQUFDckMsSUFBRCxFQUFVOztBQUUvQyxZQUFNbU8sWUFBYW5PLEtBQUtvTyxVQUFOLEdBQ2QsSUFEYyxHQUVkLElBRko7O0FBSUEsZUFBTztBQUFBO0FBQUEsWUFBSSxlQUFlLE9BQUtDLFlBQUwsQ0FBa0JuSixJQUFsQixTQUE2QmxGLEtBQUszRCxJQUFsQyxDQUFuQixFQUE0RCxLQUFLMkQsS0FBSzNELElBQXRFO0FBQ0w7QUFBQTtBQUFBO0FBQ0cyRCxpQkFBSzNEO0FBRFIsV0FESztBQUlMO0FBQUE7QUFBQTtBQUNNMkQsaUJBQUt0RCxJQURYLFNBQ21Cc0QsS0FBS3BEO0FBRHhCLFdBSks7QUFPTDtBQUFBO0FBQUE7QUFDR3VSO0FBREgsV0FQSztBQVVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSyxTQUFQO0FBZUQsT0FyQmUsQ0FBaEI7O0FBdUJBLGFBQU87QUFBQTtBQUFBLFVBQU0sUUFBTyxFQUFiLEVBQWdCLFdBQVUsMkJBQTFCO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLElBQUcsc0JBQVYsRUFBaUMsV0FBVSxrQ0FBM0M7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFERixlQURGO0FBVUU7QUFBQTtBQUFBLGtCQUFPLFdBQVUsMEJBQWpCO0FBQ0c1UjtBQURIO0FBVkY7QUFERjtBQURGO0FBREssT0FBUDtBQXFCRDs7OztFQXREdUMsZ0JBQU15SCxTO2tCQUEzQjJKLFk7Ozs7Ozs7O2dDQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFLcUJXLFEsV0FIcEIseUJBQVEsVUFBQzdLLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUM4SyxjQUFjOUssTUFBTStLLEdBQU4sQ0FBVUMsU0FBekIsRUFBb0NDLFdBQVdqTCxNQUFNK0ssR0FBTixDQUFVRSxTQUF6RCxFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7OztnQ0FLYTs7QUFFVixXQUFLN0ssS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxnQkFBUCxFQUF5QkMsU0FBUyxDQUFDLENBQW5DLEVBQXBCO0FBQ0Q7Ozs2QkFFUTs7QUFFUCxVQUFNc1QsWUFBYSxLQUFLNUssS0FBTCxDQUFXMEssWUFBWixHQUNkLHNCQURjLEdBRWQsV0FGSjs7QUFJQSxVQUFJRyxZQUFZLEVBQWhCO0FBQ0EsY0FBUSxLQUFLN0ssS0FBTCxDQUFXNkssU0FBbkI7O0FBRUUsYUFBSyxNQUFMO0FBQ0E7QUFDRUEsd0JBQVksc0RBQVo7QUFDQTtBQUNELFdBTkgsQ0FNSTs7QUFFRixhQUFLLE1BQUw7QUFDQTtBQUNFQSx3QkFBWSxzREFBWjtBQUNBO0FBQ0QsV0FaSCxDQVlJOztBQUVGLGFBQUssTUFBTDtBQUNBO0FBQ0VBLHdCQUFZLHdEQUFaO0FBQ0E7QUFDRCxXQWxCSCxDQWtCSTs7QUFFRixhQUFLLE1BQUw7QUFDQTtBQUNFQSx3QkFBWSx1REFBWjtBQUNBO0FBQ0QsV0F4QkgsQ0F3Qkk7O0FBeEJKLE9BUE8sQ0FpQ0w7O0FBRUYsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFXRCxTQUFoQjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQUE7QUFFRSxpREFBRyxTQUFTLEtBQUsxVCxTQUFMLENBQWVtSyxJQUFmLENBQW9CLElBQXBCLENBQVosRUFBdUMsV0FBVSxhQUFqRCxFQUErRCxlQUFZLE1BQTNFO0FBRkYsV0FERjtBQU1FLGtFQU5GO0FBUUU7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUVHd0oscUJBRkg7QUFJRTtBQUpGO0FBUkY7QUFGSyxPQUFQO0FBc0JEOzs7O0VBaEVtQyxnQkFBTTFLLFM7a0JBQXZCc0ssUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQkssUyxXQUhwQix5QkFBUSxVQUFDbEwsS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ2lMLFdBQVdqTCxNQUFNK0ssR0FBTixDQUFVRSxTQUF0QixFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7Ozt5Q0FLc0JwTyxNLEVBQVFxRixFLEVBQUk7O0FBRS9CLFdBQUs5QixLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLG1CQUFQLEVBQTRCQyxTQUFTbUYsTUFBckMsRUFBcEI7QUFFRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFNBQVMsS0FBS3NPLG9CQUFMLENBQTBCMUosSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUMsTUFBckMsQ0FBZCxFQUE0RCxXQUFZLEtBQUtyQixLQUFMLENBQVc2SyxTQUFYLElBQXdCLE1BQXhCLEdBQ3BFLGlDQURvRSxHQUVwRSx3QkFGSjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FKRjtBQVFFLCtDQUFHLFdBQVUsYUFBYixFQUEyQixlQUFZLE1BQXZDO0FBUkYsU0FGSztBQWNMO0FBQUE7QUFBQSxZQUFLLFNBQVMsS0FBS0Usb0JBQUwsQ0FBMEIxSixJQUExQixDQUErQixJQUEvQixFQUFxQyxNQUFyQyxDQUFkLEVBQTRELFdBQVksS0FBS3JCLEtBQUwsQ0FBVzZLLFNBQVgsSUFBd0IsTUFBeEIsR0FDcEUsaUNBRG9FLEdBRXBFLHdCQUZKO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSwrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUpGO0FBUUUsK0NBQUcsV0FBVSxtQkFBYixFQUFpQyxlQUFZLE1BQTdDO0FBUkYsU0FkSztBQTJCTDtBQUFBO0FBQUEsWUFBSyxTQUFTLEtBQUtFLG9CQUFMLENBQTBCMUosSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUMsTUFBckMsQ0FBZCxFQUE0RCxXQUFZLEtBQUtyQixLQUFMLENBQVc2SyxTQUFYLElBQXdCLE1BQXhCLEdBQ3BFLGlDQURvRSxHQUVwRSx3QkFGSjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FKRjtBQVFFLCtDQUFHLFdBQVUsYUFBYixFQUEyQixlQUFZLE1BQXZDO0FBUkYsU0EzQks7QUF3Q0w7QUFBQTtBQUFBLFlBQUssV0FBWSxLQUFLN0ssS0FBTCxDQUFXNkssU0FBWCxJQUF3QixNQUF4QixHQUNiLGlDQURhLEdBRWIsd0JBRko7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLCtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBSkY7QUFRRSwrQ0FBRyxXQUFVLGFBQWIsRUFBMkIsZUFBWSxNQUF2QztBQVJGO0FBeENLLE9BQVA7QUFzREQ7Ozs7RUFoRW9DLGdCQUFNMUssUztrQkFBeEIySyxTOzs7Ozs7OztnQ0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBS3FCRSxPLFdBSHBCLHlCQUFRLFVBQUNwTCxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDcUwsWUFBWXJMLE1BQU0rSyxHQUFOLENBQVVNLFVBQXZCLEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3FDQUtrQm5KLEUsRUFBSTs7QUFFbkIsV0FBSzlCLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0Isb0NBQXNCOEcsR0FBR0UsTUFBSCxDQUFVckUsS0FBaEMsQ0FBcEI7QUFDRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRSxtREFBTyxPQUFPLEtBQUtxQyxLQUFMLENBQVdpTCxVQUF6QixFQUFxQyxVQUFVLEtBQUtDLGdCQUFMLENBQXNCN0osSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBL0MsRUFBaUYsTUFBSyxRQUF0RixFQUErRixXQUFVLGNBQXpHLEdBSEY7QUFLRSxtREFMRjtBQU1FO0FBTkY7QUFOSyxPQUFQO0FBa0JEOzs7O0VBM0JrQyxnQkFBTWxCLFM7a0JBQXRCNkssTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUtxQkcsTyxXQUhwQix5QkFBUSxVQUFDdkwsS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ3dMLFVBQVV4TCxNQUFNK0ssR0FBTixDQUFVUyxRQUFyQixFQUErQkMsWUFBWXpMLE1BQU0rSyxHQUFOLENBQVVVLFVBQXJELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3VDQUtvQnZKLEUsRUFBSTs7QUFFckIsV0FBSzlCLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0Isa0NBQW9COEcsR0FBR0UsTUFBSCxDQUFVckUsS0FBOUIsQ0FBcEI7QUFDRDs7O3lDQUVvQm1FLEUsRUFBSTs7QUFFdkIsV0FBSzlCLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0Isb0NBQXNCOEcsR0FBR0UsTUFBSCxDQUFVckUsS0FBaEMsQ0FBcEI7QUFDRDs7OzZCQUVROztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRSxtREFBTyxPQUFPLEtBQUtxQyxLQUFMLENBQVdxTCxVQUF6QixFQUFxQyxVQUFVLEtBQUtDLG9CQUFMLENBQTBCakssSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBL0MsRUFBcUYsTUFBSyxRQUExRixFQUFtRyxXQUFVLGNBQTdHLEdBSEY7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBTEY7QUFNRSxtREFBTyxPQUFPLEtBQUtyQixLQUFMLENBQVdvTCxRQUF6QixFQUFtQyxVQUFVLEtBQUtHLGtCQUFMLENBQXdCbEssSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBN0MsRUFBaUYsTUFBSyxRQUF0RixFQUErRixXQUFVLGNBQXpHLEdBTkY7QUFRRSxtREFSRjtBQVNFO0FBVEY7QUFOSyxPQUFQO0FBcUJEOzs7O0VBbkNrQyxnQkFBTWxCLFM7a0JBQXRCZ0wsTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQUtxQkssUyxXQUhwQix5QkFBUSxVQUFDNUwsS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQzlHLFFBQVE4RyxNQUFNbEgsT0FBTixDQUFjTSxjQUF2QixFQUF1Q3NOLE1BQU0xRyxNQUFNbEgsT0FBTixDQUFjNk4sa0JBQTNELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7OzZCQUtVO0FBQ1AsVUFBTWtGLFlBQVkvUixXQUFXLEtBQUtzRyxLQUFMLENBQVdsSCxNQUFYLENBQWtCNFMsWUFBN0IsSUFBNkNoUyxXQUFXLEtBQUtzRyxLQUFMLENBQVdzRyxJQUF0QixDQUEvRDtBQUNBLFVBQU1xRixjQUFjLEtBQUszTCxLQUFMLENBQVdsSCxNQUFYLENBQWtCeVIsVUFBbEIsZUFDWDdRLFdBQVcsS0FBS3NHLEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0I0UyxZQUE3QixFQUEyQ3ZLLFdBQTNDLENBQXVELENBQXZELEVBQTBELEdBQTFELEVBQStELEdBQS9ELENBRFcsR0FFaEIsYUFGSjtBQUdBLFVBQU15SyxrQkFBa0IsS0FBSzVMLEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0J5UixVQUFsQixlQUNma0IsVUFBVXRLLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FEZSxHQUVwQixhQUZKOztBQUlBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDR3dLO0FBREgsV0FIRjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsV0FQRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNHQztBQURILFdBUkY7QUFXRSxtREFYRjtBQVlFO0FBWkY7QUFOSyxPQUFQO0FBd0JEOzs7O0VBbkNvQyxnQkFBTXpMLFM7a0JBQXhCcUwsUzs7Ozs7Ozs7Z0NBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQU1xQkssUSxXQUpwQix5QkFBUSxVQUFDak0sS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBUDtBQUVELENBSEEsQzs7Ozs7Ozs7Ozs7NkJBTVU7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFFTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QztBQUFBO0FBQUEsU0FGSztBQUdMO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSxtREFERjtBQUVFO0FBRkY7QUFISyxPQUFQO0FBU0Q7Ozs7RUFabUMsZ0JBQU1PLFM7a0JBQXZCMEwsUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUtxQkMsUTs7Ozs7Ozs7Ozs7OztBQUVuQjs2QkFDUzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFDTCwrQ0FBSyxLQUFLLG9DQUFWLEdBREs7QUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkssT0FBUDtBQUtEOzs7O0VBVm1DLGdCQUFNM0wsUzs7a0JBQXZCMkwsUTs7Ozs7Ozs7Z0NBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7O0FBREE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTXJKLFlBQVksbUJBQUFDLENBQVEsRUFBUixDQUFsQjs7SUFnQnFCcUosVSxXQWRwQix5QkFBUSxVQUFDbk0sS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGtCLFVBQU1sQixNQUFNa0IsSUFEUDtBQUVMK0osZUFBV2pMLE1BQU0rSyxHQUFOLENBQVVFLFNBRmhCO0FBR0xGLFNBQUsvSyxNQUFNK0ssR0FITjtBQUlMN1IsWUFBUThHLE1BQU1sSCxPQUFOLENBQWNNLGNBSmpCO0FBS0xLLFVBQU11RyxNQUFNbEgsT0FBTixDQUFjTyxZQUxmO0FBTUxxTixVQUFNMUcsTUFBTWxILE9BQU4sQ0FBYzZOO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBVkssR0FBUDtBQVlELENBYkEsQzs7Ozs7Ozs7Ozs7OEJBZ0JXO0FBQ1I7QUFDQSxVQUFNbE4sT0FBTyxLQUFLMkcsS0FBTCxDQUFXM0csSUFBeEI7QUFDQSxVQUFNdUgsT0FBTztBQUNYRSxjQUFNL0MsS0FBS0MsU0FBTCxDQUFlLEtBQUtnQyxLQUFMLENBQVdjLElBQTFCLENBREs7QUFFWGhJLGdCQUFRaUYsS0FBS0MsU0FBTCxDQUFlLEtBQUtnQyxLQUFMLENBQVdsSCxNQUExQixDQUZHO0FBR1hPLGNBQU0wRSxLQUFLQyxTQUFMLENBQWUsS0FBS2dDLEtBQUwsQ0FBVzNHLElBQTFCLENBSEs7QUFJWHNSLGFBQUs1TSxLQUFLQyxTQUFMLENBQWUsS0FBS2dDLEtBQUwsQ0FBVzJLLEdBQTFCO0FBSk0sT0FBYjs7QUFPQSxVQUFJLEtBQUszSyxLQUFMLENBQVcySyxHQUFYLENBQWVFLFNBQWYsSUFBNEIsUUFBaEMsRUFBMEM7QUFDeENqSyxhQUFLK0osR0FBTCxDQUFTckUsSUFBVCxHQUFnQixLQUFLdEcsS0FBTCxDQUFXYyxJQUFYLENBQWdCQyxTQUFoQztBQUNBSCxhQUFLK0osR0FBTCxDQUFTcUIsS0FBVCxHQUFpQixLQUFqQjtBQUNEOztBQUVELFVBQU1wUixTQUFTO0FBQ2JDLGFBQUssYUFEUTtBQUVic0IsY0FBTXlFLElBRk87QUFHYnhFLGlCQUFTLGFBSEk7QUFJYkcsd0JBQWdCLHlCQUpIO0FBS2JELGtCQUFVLE1BTEc7QUFNYmpELGNBQU1BLElBTk87QUFPYmdELGlCQUFTLEVBUEk7QUFRYkssdUJBQWUsNkJBUkY7QUFTYkcsc0JBQWMsb0RBVEQ7QUFVYmIsc0JBQWMsWUFWRDtBQVdiUSxnQkFBUTtBQVhLLE9BQWY7O0FBY0EsV0FBS3dELEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sa0JBQVAsRUFBMkJDLFNBQVMsRUFBcEMsRUFBcEI7QUFDQSxXQUFLMEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixtQkFBU0osTUFBVCxDQUFwQjtBQUNBLFdBQUtvRixLQUFMLENBQVdoRixRQUFYLENBQW9CLEVBQUMzRCxNQUFNLGdCQUFQLEVBQXlCQyxTQUFTLEVBQWxDLEVBQXBCOztBQUVBbUwsZ0JBQVV3SixLQUFWO0FBRUQ7Ozs2QkFFUTs7QUFFUCxVQUFJQyxTQUFTLENBQWI7QUFDQSxVQUFJQyxpQkFBaUIsb0JBQXJCO0FBQ0EsVUFBTXRMLFFBQVFuSCxXQUFXLEtBQUtzRyxLQUFMLENBQVdjLElBQVgsQ0FBZ0JDLFNBQTNCLENBQWQ7QUFDQSxVQUFNcUwsT0FBTzFTLFdBQVcsS0FBS3NHLEtBQUwsQ0FBVzJLLEdBQVgsQ0FBZU0sVUFBMUIsQ0FBYjs7QUFFQSxjQUFRLEtBQUtqTCxLQUFMLENBQVc2SyxTQUFuQjs7QUFFRSxhQUFLLE1BQUw7QUFDQTtBQUNFcUIscUJBQVNFLE9BQU92TCxLQUFoQjtBQUNBc0wsNkJBQWtCdEwsUUFBUSxDQUFSLElBQWFxTCxVQUFVLENBQXhCLEdBQ2IsMkJBRGEsR0FFYixvQkFGSjtBQUdBO0FBQ0Q7O0FBRUQsYUFBSyxNQUFMO0FBQ0E7QUFDRSxnQkFBTUcsT0FBTyxLQUFLck0sS0FBTCxDQUFXMkssR0FBWCxDQUFlUyxRQUE1QjtBQUNBLGdCQUFNa0IsU0FBUyxLQUFLdE0sS0FBTCxDQUFXMkssR0FBWCxDQUFlVSxVQUE5QjtBQUNBYSxxQkFBU3hTLFdBQVcsS0FBS3NHLEtBQUwsQ0FBVzJLLEdBQVgsQ0FBZU0sVUFBMUIsSUFBd0N2UixXQUFXLEtBQUtzRyxLQUFMLENBQVdhLEtBQXRCLENBQWpEO0FBQ0FzTCw2QkFBa0J0TCxRQUFRLENBQVIsSUFBYXdMLElBQWIsSUFBcUJDLE1BQXRCLEdBQ2IsMkJBRGEsR0FFYixvQkFGSjtBQUdBO0FBQ0Q7QUFDRCxhQUFLLE1BQUw7QUFDQTtBQUNFLGdCQUFNYixZQUFZL1IsV0FBVyxLQUFLc0csS0FBTCxDQUFXbEgsTUFBWCxDQUFrQjRTLFlBQTdCLElBQTZDaFMsV0FBVyxLQUFLc0csS0FBTCxDQUFXc0csSUFBdEIsQ0FBL0Q7QUFDQTZGLDZCQUFrQnRMLFFBQVEsQ0FBUixJQUFhQSxTQUFTNEssU0FBdEIsSUFBbUMsS0FBS3pMLEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0J5UixVQUF0RCxHQUNiLDJCQURhLEdBRWIsb0JBRko7QUFHQTtBQUNEOztBQTVCSDs7QUFnQ0EsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBREs7QUFLTDtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxjQUFmO0FBQUE7QUFBQSxXQUZGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQUE7QUFDSyxpQkFBS3ZLLEtBQUwsQ0FBV2MsSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMEJJLFdBQTFCLENBQXNDLENBQXRDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDO0FBREwsV0FKRjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsV0FQRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUFBO0FBQ0srSyxtQkFBTy9LLFdBQVAsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0I7QUFETCxXQVJGO0FBV0UsbURBWEY7QUFhRSwwREFBUyxnQkFBZ0JnTCxjQUF6QjtBQWJGO0FBTEssT0FBUDtBQXdCRDs7OztFQXRHcUMsZ0JBQU1oTSxTO2tCQUF6QjRMLFU7Ozs7Ozs7O2dDQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnJCOzs7QUFEQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTXRKLFlBQVksbUJBQUFDLENBQVEsRUFBUixDQUFsQjs7SUFnQnFCNkosTyxXQWRwQix5QkFBUSxVQUFDM00sS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGtCLFVBQU1sQixNQUFNa0IsSUFEUDtBQUVMK0osZUFBV2pMLE1BQU0rSyxHQUFOLENBQVVFLFNBRmhCO0FBR0xGLFNBQUsvSyxNQUFNK0ssR0FITjtBQUlMN1IsWUFBUThHLE1BQU1sSCxPQUFOLENBQWNNLGNBSmpCO0FBS0xLLFVBQU11RyxNQUFNbEgsT0FBTixDQUFjTyxZQUxmO0FBTUxxTixVQUFNMUcsTUFBTWxILE9BQU4sQ0FBYzZOO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBVkssR0FBUDtBQVlELENBYkEsQzs7Ozs7Ozs7Ozs7OEJBZ0JXO0FBQUE7O0FBQ1I7QUFDQSxVQUFNbE4sT0FBTyxLQUFLMkcsS0FBTCxDQUFXM0csSUFBeEI7QUFDQSxVQUFNMlMsUUFBUSxFQUFFLEtBQUtoTSxLQUFMLENBQVcySyxHQUFYLENBQWVFLFNBQWYsSUFBNEIsTUFBOUIsQ0FBZDs7QUFFQSxVQUFNakssT0FBTztBQUNYRSxjQUFNL0MsS0FBS0MsU0FBTCxDQUFlLEtBQUtnQyxLQUFMLENBQVdjLElBQTFCLENBREs7QUFFWGhJLGdCQUFRaUYsS0FBS0MsU0FBTCxDQUFlLEtBQUtnQyxLQUFMLENBQVdsSCxNQUExQixDQUZHO0FBR1hPLGNBQU0wRSxLQUFLQyxTQUFMLENBQWUsS0FBS2dDLEtBQUwsQ0FBVzNHLElBQTFCLENBSEs7QUFJWHNSLGFBQUs1TSxLQUFLQyxTQUFMLENBQWUsS0FBS2dDLEtBQUwsQ0FBVzJLLEdBQTFCLENBSk07QUFLWDZCLGtCQUFVLEtBQUt4TSxLQUFMLENBQVcySyxHQUFYLENBQWVFLFNBTGQ7QUFNWG1CLGVBQU9BLEtBTkk7QUFPWHZGLG1CQUFXLEtBQUt6RyxLQUFMLENBQVdsSCxNQUFYLENBQWtCNE47QUFQbEIsT0FBYjs7QUFVQSxVQUFNK0YsaUJBQWlCO0FBQ3JCaEcsbUJBQVcsS0FBS3pHLEtBQUwsQ0FBV2xILE1BQVgsQ0FBa0I0TixFQURSO0FBRXJCZ0csdUJBQWUsTUFGTTtBQUdyQmpULGdCQUFRLEtBQUt1RyxLQUFMLENBQVdjLElBQVgsQ0FBZ0JDO0FBSEgsT0FBdkI7O0FBTUEsVUFBTW5HLFNBQVM7QUFDYkMsYUFBSyxhQURRO0FBRWJzQixjQUFNeUUsSUFGTztBQUdieEUsaUJBQVMsYUFISTtBQUliRyx3QkFBZ0IseUJBSkg7QUFLYkQsa0JBQVUsTUFMRztBQU1iakQsY0FBTUEsSUFOTztBQU9iZ0QsaUJBQVMsRUFQSTtBQVFiSyx1QkFBZSw2QkFSRjtBQVNiRyxzQkFBYyxvREFURDtBQVViNFAsd0JBQWdCQTtBQVZILE9BQWY7O0FBYUEsVUFBTTdKLFFBQVEsSUFBZDs7QUFFQSxVQUFNK0osZ0JBQWdCLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDckRsSyxjQUFNNUMsS0FBTixDQUFZaEYsUUFBWixDQUFxQixFQUFDM0QsTUFBTSxrQkFBUCxFQUEyQkMsU0FBUyxFQUFwQyxFQUFyQjtBQUNBc0wsY0FBTTVDLEtBQU4sQ0FBWWhGLFFBQVosQ0FBcUIsdUJBQVNKLE1BQVQsRUFBaUJpUyxPQUFqQixFQUEwQkMsTUFBMUIsQ0FBckI7QUFDRCxPQUhxQixDQUF0Qjs7QUFLQUgsb0JBQWN6UixJQUFkLENBQW1CLFlBQU07QUFDdkIsZUFBSzhFLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sZ0JBQVAsRUFBeUJDLFNBQVMsRUFBbEMsRUFBcEI7QUFDQSxlQUFLMEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxlQUFQLEVBQXdCQyxTQUFTLEVBQWpDLEVBQXBCO0FBQ0EsZUFBSzBJLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsRUFBdEMsRUFBcEI7QUFDQW1MLGtCQUFVd0osS0FBVjtBQUNELE9BTEQsRUFLRzVRLEtBTEgsQ0FLUyxVQUFDdUIsR0FBRCxFQUFTO0FBQ2hCakUsZ0JBQVFDLEdBQVIsQ0FBWWdFLEdBQVo7QUFDRCxPQVBEO0FBU0Q7Ozs2QkFFUTs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFNBQVMsS0FBS21RLE9BQUwsQ0FBYTFMLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZCxFQUF1QyxXQUFXLEtBQUtyQixLQUFMLENBQVdtTSxjQUE3RDtBQUFBO0FBRUwsNkNBQUcsV0FBVSxtQkFBYixFQUFpQyxlQUFZLE1BQTdDO0FBRkssT0FBUDtBQUtEOzs7O0VBN0RrQyxnQkFBTWhNLFM7a0JBQXRCb00sTzs7Ozs7Ozs7Z0NBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7UUNUTHZTLFEsR0FBQUEsUTs7QUFSaEI7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsUUFBVCxDQUFrQlksTUFBbEIsRUFBMEJpUyxPQUExQixFQUFtQ0MsTUFBbkMsRUFBMkM7QUFDaEQsTUFBTTNRLE9BQU92QixPQUFPdUIsSUFBcEI7QUFDQSxTQUFPQSxLQUFLLElBQUwsQ0FBUDtBQUNBLE1BQU10QixNQUFNRCxPQUFPQyxHQUFuQjtBQUNBLE1BQU11QixVQUFVeEIsT0FBT3dCLE9BQXZCO0FBQ0EsTUFBTUMsVUFBVXpCLE9BQU95QixPQUF2QjtBQUNBLE1BQU1DLFdBQVcxQixPQUFPMEIsUUFBeEI7QUFDQSxNQUFNQyxpQkFBaUIzQixPQUFPMkIsY0FBOUI7QUFDQSxNQUFNbEQsT0FBT3VCLE9BQU92QixJQUFwQjs7QUFFQSxTQUFPLFVBQVMyQixRQUFULEVBQW1COztBQUV4Qix5QkFBTTtBQUNKeUIsY0FBUSxNQURKO0FBRUo1QixXQUFLQSxHQUZEO0FBR0pPLFlBQU1lO0FBSEYsS0FBTixFQUtHakIsSUFMSCxDQUtRLFVBQUNDLFFBQUQsRUFBYzs7QUFFbEIsd0JBQVFpQixPQUFSLEVBQWlCRSxRQUFqQixFQUEyQkQsT0FBM0IsRUFBb0NGLElBQXBDLEVBQTBDSSxjQUExQyxFQUEwRGxELElBQTFEOztBQUVBO0FBQ0EsVUFBSThCLFNBQVNDLElBQVQsQ0FBY29SLFFBQWQsSUFBMEIsTUFBOUIsRUFBc0M7QUFDcEMsWUFBTUMsaUJBQWlCN1IsT0FBTzZSLGNBQTlCO0FBQ0FBLHVCQUFlTyxPQUFmLEdBQXlCN1IsU0FBU0MsSUFBVCxDQUFjc0wsRUFBdkM7QUFDQStGLHVCQUFlM1UsV0FBZiw2QkFBa0RxRCxTQUFTQyxJQUFULENBQWM2UixXQUFoRTtBQUNBQywyQkFBbUJULGNBQW5CLEVBQW1DdFIsU0FBU0MsSUFBNUMsRUFBa0RSLE1BQWxELEVBQTBESSxRQUExRCxFQUFvRTZSLE9BQXBFLEVBQTZFQyxNQUE3RTs7QUFFRjtBQUNDLE9BUEQsTUFPTztBQUNMOVIsaUJBQVMsRUFBQzNELE1BQU0sWUFBUCxFQUFxQkMsU0FBUyxFQUE5QixFQUFUO0FBQ0EwRCxpQkFBUyxFQUFDM0QsTUFBTSxVQUFQLEVBQW1CQyxTQUFTNkQsU0FBU0MsSUFBckMsRUFBVDtBQUNBLDZCQUFTSSxLQUFULENBQWUsWUFBZixFQUE2QlosT0FBTzhCLGFBQXBDO0FBQ0FtUTtBQUNEO0FBRUYsS0F4QkgsRUF3Qkt4UixLQXhCTCxDQXdCVyxVQUFDdUIsR0FBRCxFQUFTO0FBQ2hCakUsY0FBUUMsR0FBUixDQUFZZ0UsR0FBWjtBQUNBa1E7QUFDQSxVQUFJbFEsSUFBSXpCLFFBQVIsRUFBa0I7QUFDaEJ4QyxnQkFBUUMsR0FBUixDQUFZZ0UsSUFBSXpCLFFBQUosQ0FBYUMsSUFBekI7QUFDRDtBQUNELDJCQUFTSSxLQUFULENBQWUsT0FBZixFQUEyQlosT0FBT2lDLFlBQWxDLGdCQUF5REQsR0FBekQ7QUFDRCxLQS9CSDtBQWlDRCxHQW5DRDtBQW9DRCxDLENBekREO0FBQ0E7QUFDQTs7O0FBeURBLFNBQVNzUSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0N2TSxJQUF0QyxFQUE0Q2hHLE1BQTVDLEVBQW9ESSxRQUFwRCxFQUE4RDZSLE9BQTlELEVBQXVFQyxNQUF2RSxFQUErRTtBQUM3RSx1QkFBTTtBQUNKclEsWUFBUSxNQURKO0FBRUo1QixTQUFLLHVCQUZEO0FBR0pPLFVBQU0rUjtBQUhGLEdBQU4sRUFLR2pTLElBTEgsQ0FLUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJILGFBQVMsRUFBQzNELE1BQU0sWUFBUCxFQUFxQkMsU0FBUyxFQUE5QixFQUFUO0FBQ0EwRCxhQUFTLEVBQUMzRCxNQUFNLFVBQVAsRUFBbUJDLFNBQVNzSixJQUE1QixFQUFUO0FBQ0EseUJBQVNwRixLQUFULENBQWUsWUFBZixFQUE2QlosT0FBTzhCLGFBQXBDO0FBQ0FtUTtBQUNELEdBVkgsRUFXR3hSLEtBWEgsQ0FXUyxlQUFPO0FBQ1oxQyxZQUFRQyxHQUFSLENBQVlnRSxJQUFJekIsUUFBSixDQUFhQyxJQUF6QjtBQUNBLHlCQUFTSSxLQUFULENBQWUsT0FBZixFQUEyQlosT0FBT2lDLFlBQWxDLGdCQUF5REQsR0FBekQ7QUFDQWtRO0FBQ0QsR0FmSDtBQWdCRDs7Ozs7Ozs7Z0NBakVlOVMsUTs7Z0NBZ0RQa1Qsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFQ7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFLcUJFLFksV0FIcEIseUJBQVEsVUFBQ3hOLEtBQUQsRUFBVztBQUNsQixTQUFPLEVBQUM4SyxjQUFjOUssTUFBTXlOLE9BQU4sQ0FBY3pDLFNBQTdCLEVBQXdDMEMsUUFBUTFOLE1BQU15TixPQUFOLENBQWNDLE1BQTlELEVBQVA7QUFDRCxDQUZBLEM7Ozs7Ozs7Ozs7O3lDQUt1QjtBQUNwQixXQUFLdE4sS0FBTCxDQUFXaEYsUUFBWCxDQUFvQiwyQkFBaUIsU0FBakIsRUFBNEIsS0FBNUIsRUFBbUMsd0JBQW5DLEVBQTZELHVCQUE3RCxDQUFwQjtBQUNEOzs7Z0NBRVc7O0FBRVYsV0FBS2dGLEtBQUwsQ0FBV2hGLFFBQVgsQ0FBb0IsRUFBQzNELE1BQU0sb0JBQVAsRUFBNkJDLFNBQVMsQ0FBQyxDQUF2QyxFQUFwQjtBQUNBO0FBQ0Q7OztrQ0FFYTs7QUFFWixXQUFLMEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSxzQkFBUCxFQUErQkMsU0FBUyxDQUFDLENBQXpDLEVBQXBCO0FBRUQ7OztvQ0FFZTs7QUFFZCxXQUFLMEksS0FBTCxDQUFXaEYsUUFBWCxDQUFvQixFQUFDM0QsTUFBTSx1QkFBUCxFQUFnQ0MsU0FBUyxDQUFDLENBQTFDLEVBQXBCO0FBRUQ7OztpQ0FFWTtBQUNYZ0ksYUFBT2lPLFFBQVAsQ0FBZ0IsZUFBaEI7QUFDRDs7OzZCQUVROztBQUVQLFVBQU0zQyxZQUFhLEtBQUs1SyxLQUFMLENBQVcwSyxZQUFaLEdBQ2QsMEJBRGMsR0FFZCxlQUZKO0FBR0EsVUFBTThDLGNBQWUsS0FBS3hOLEtBQUwsQ0FBV3NOLE1BQVosR0FDaEIsRUFEZ0IsR0FFaEIscUJBRko7O0FBSUEsVUFBTUcsbUJBQW9CLEtBQUt6TixLQUFMLENBQVdzTixNQUFaLEdBQ3JCLDBEQURxQixHQUVyQiw2REFGSjs7QUFJQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVcxQyxTQUFoQjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVcsdUJBQXVCNEMsV0FBdkM7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsbURBQUcsU0FBUyxLQUFLdFcsU0FBTCxDQUFlbUssSUFBZixDQUFvQixJQUFwQixDQUFaLEVBQXVDLFdBQVUsYUFBakQsRUFBK0QsZUFBWSxNQUEzRSxHQURGO0FBRUUsbURBQUcsU0FBUyxLQUFLcU0sV0FBTCxDQUFpQnJNLElBQWpCLENBQXNCLElBQXRCLENBQVosRUFBeUMsV0FBVSxtQkFBbkQsRUFBdUUsZUFBWSxNQUFuRixHQUZGO0FBR0UsbURBQUcsU0FBUyxLQUFLc00sVUFBTCxDQUFnQnRNLElBQWhCLENBQXFCLElBQXJCLENBQVosRUFBd0MsV0FBVSxhQUFsRCxFQUFnRSxlQUFZLE1BQTVFO0FBSEY7QUFKRixXQURGO0FBYUU7QUFBQTtBQUFBLGNBQUssSUFBRyxlQUFSLEVBQXdCLFdBQVcsNEJBQTRCbU0sV0FBL0Q7QUFFR0M7QUFGSDtBQWJGO0FBRkssT0FBUDtBQXlCRDs7OztFQWxFdUMsZ0JBQU10TixTO2tCQUEzQmlOLFk7Ozs7Ozs7O2dDQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQlEsVzs7Ozs7Ozs7Ozs7NkJBRVY7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFFTCw2REFGSztBQUdMLDJEQUhLO0FBSUwsNERBSks7QUFLTCw2REFMSztBQU1MO0FBTkssT0FBUDtBQVVEOzs7O0VBZHNDLGdCQUFNek4sUzs7a0JBQTFCeU4sVzs7Ozs7Ozs7Z0NBQUFBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQVFxQkMsTSxXQU5wQix5QkFBUSxVQUFDak8sS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTGdCLFVBQU1oQixNQUFNNkgsS0FBTixDQUFZcUcsVUFEYjtBQUVMQyxhQUFTbk8sTUFBTW5DLE1BQU4sQ0FBYXNRO0FBRmpCLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7OzZCQVFVO0FBQ1A7QUFDQSxVQUFNQyxhQUFhLEtBQUtoTyxLQUFMLENBQVdZLElBQVgsQ0FBZ0IrSixHQUFoQixDQUFvQkUsU0FBcEIsSUFBaUMsUUFBakMsR0FBNEMsb0JBQTVDLEdBQW1FLG9CQUF0RjtBQUNBO0FBQ0EsVUFBTW9ELE9BQU8sS0FBS2pPLEtBQUwsQ0FBVytOLE9BQVgsQ0FBbUJFLElBQW5CLElBQTJCLEVBQXhDO0FBQ0EsVUFBTUMsWUFBWSxLQUFLbE8sS0FBTCxDQUFXK04sT0FBWCxDQUFtQkcsU0FBbkIsSUFBZ0MsT0FBbEQ7QUFDQSxVQUFNQyw0QkFBMEJGLElBQWhDOztBQUVBO0FBQ0EsVUFBTUcsYUFBYSxLQUFLcE8sS0FBTCxDQUFXK04sT0FBWCxDQUFtQk0sY0FBbkIsSUFBcUMsRUFBeEQ7QUFDQSxVQUFNQyxjQUFjLEtBQUt0TyxLQUFMLENBQVcrTixPQUFYLENBQW1CUSxVQUFuQixJQUFpQyxFQUFyRDs7QUFFQSxVQUFNQyxPQUFPLEtBQUt4TyxLQUFMLENBQVcrTixPQUFYLENBQW1CVSxVQUFuQixJQUFpQyxFQUE5QztBQUNBLFVBQU1DLFdBQVdGLEtBQUs5VyxLQUFMLENBQVcsR0FBWCxFQUFnQmEsTUFBaEIsR0FBeUIsQ0FBekIsY0FBc0NpVyxJQUF0QyxhQUF1REEsSUFBeEU7O0FBRUEsVUFBTUcsU0FBUyxLQUFLM08sS0FBTCxDQUFXK04sT0FBWCxDQUFtQlksTUFBbkIsSUFBNkIsUUFBNUM7QUFDQSxVQUFNakksS0FBSyxLQUFLMUcsS0FBTCxDQUFXK04sT0FBWCxDQUFtQnJILEVBQW5CLElBQXlCLEVBQXBDO0FBQ0EsVUFBTWtJLFNBQVNELFVBQVUsUUFBVix3QkFBcUNqSSxFQUFyQyxrQkFBc0RBLEVBQXJFOztBQUVBLGFBQU87QUFBQTtBQUFBO0FBRUw7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsMEJBQWY7QUFDRSxtREFBSyxPQUFPLEVBQUMsY0FBWXdILFNBQWIsRUFBWixFQUF1QyxLQUFLQyxPQUE1QztBQURGLFdBRkY7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtDLHlCQUFXUyxXQUFYO0FBQUwsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLUDtBQUFMLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS007QUFBTCxhQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUssbUJBQUs1TyxLQUFMLENBQVcrTixPQUFYLENBQW1CZSxRQUFuQixJQUErQjtBQUFwQyxhQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUssbUJBQUs5TyxLQUFMLENBQVcrTixPQUFYLENBQW1CZ0IsUUFBbkIsSUFBK0I7QUFBcEMsYUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFLLG1CQUFLL08sS0FBTCxDQUFXK04sT0FBWCxDQUFtQmlCLE9BQW5CLElBQThCO0FBQW5DLGFBTkY7QUFPRTtBQUFBO0FBQUE7QUFBS047QUFBTCxhQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUssbUJBQUsxTyxLQUFMLENBQVcrTixPQUFYLENBQW1Ca0IsS0FBbkIsSUFBNEI7QUFBakM7QUFSRjtBQUxGLFNBRks7QUFvQkw7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFLHFEQURGO0FBR0U7QUFBQTtBQUFBO0FBQUtqQjtBQUFMLFdBSEY7QUFJRTtBQUpGO0FBcEJLLE9BQVA7QUE0QkQ7Ozs7RUFqRGlDLGdCQUFNN04sUztrQkFBckIwTixNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCcUIsSSxXQUhwQix5QkFBUSxVQUFDdFAsS0FBRCxFQUFXO0FBQ2xCLFNBQU8sRUFBQ2dCLE1BQU1oQixNQUFNNkgsS0FBTixDQUFZcUcsVUFBbkIsRUFBUDtBQUNELENBRkEsQzs7Ozs7Ozs7Ozs7NkJBS1U7O0FBRVAsVUFBTWxOLE9BQU8sS0FBS1osS0FBTCxDQUFXWSxJQUF4QjtBQUNBLFVBQU11TyxPQUFPdk8sS0FBS3dPLE9BQUwsR0FDTixDQUFDLE1BQU14TyxLQUFLd08sT0FBTCxDQUFhQyxPQUFiLEVBQVAsRUFBK0J4RixLQUEvQixDQUFxQyxDQUFDLENBQXRDLENBRE0saUJBRVQsQ0FBQyxPQUFPakosS0FBS3dPLE9BQUwsQ0FBYUUsUUFBYixLQUEwQixDQUFqQyxDQUFELEVBQXNDekYsS0FBdEMsQ0FBNEMsQ0FBQyxDQUE3QyxDQUZTLGlCQUdUakosS0FBS3dPLE9BQUwsQ0FBYUcsV0FBYixFQUhTLEdBSVQsWUFKSjtBQUtBLFVBQU16VyxTQUFTOEgsS0FBSzlILE1BQUwsR0FBaUI4SCxLQUFLOUgsTUFBTCxDQUFZTixJQUE3QixXQUF1Q29JLEtBQUs5SCxNQUFMLENBQVlELElBQW5ELFNBQTJEK0gsS0FBSzlILE1BQUwsQ0FBWUMsU0FBdkUsR0FBcUYseUJBQXBHO0FBQ0EsVUFBTXlXLGVBQWU1TyxLQUFLOUgsTUFBTCxDQUFZMlcsTUFBWixHQUNqQjtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsWUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUF5QzdPLGVBQUs5SCxNQUFMLENBQVkyVztBQUFyRDtBQURBLE9BRGlCLEdBSWpCLHlDQUpKO0FBS0EsVUFBTS9JLEtBQUs5RixLQUFLcU0sV0FBTCxHQUFtQnJNLEtBQUtxTSxXQUF4QixHQUFzQyxPQUFqRDs7QUFFQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFFTDtBQUFBO0FBQUEsWUFBTyxXQUFVLGNBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLblU7QUFBTDtBQURGLGFBREY7QUFJRzBXO0FBSkg7QUFORixTQUZLO0FBZ0JMO0FBQUE7QUFBQSxZQUFPLFdBQVUsZUFBakI7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxpQkFBQyxVQUFVOUksRUFBWCxFQUFlbUQsS0FBZixDQUFxQixDQUFDLENBQXRCO0FBQUw7QUFGRixhQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtzRjtBQUFMO0FBRkY7QUFORjtBQUZGO0FBaEJLLE9BQVA7QUFrQ0Q7Ozs7RUFwRCtCLGdCQUFNaFAsUztrQkFBbkIrTyxJOzs7Ozs7OztnQ0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCUSxLLFdBSHBCLHlCQUFRLFVBQUM5UCxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDc0QsUUFBUXRELE1BQU1rQixJQUFOLENBQVdVLFNBQXBCLEVBQStCRSxnQkFBZ0I5QixNQUFNa0IsSUFBTixDQUFXWSxjQUExRCxFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7Ozs7O0FBS0M7NkJBQ1M7O0FBRVAsVUFBTUYsWUFBWSxLQUFLeEIsS0FBTCxDQUFXa0QsTUFBN0I7QUFDQSxVQUFNeEIsaUJBQWtCLEtBQUsxQixLQUFMLENBQVcwQixjQUFaLEdBQ25CO0FBQUE7QUFBQSxVQUFJLFdBQVUsZ0JBQWQ7QUFBZ0MsYUFBSzFCLEtBQUwsQ0FBVzBCO0FBQTNDLE9BRG1CLEdBRW5CO0FBQUE7QUFBQSxVQUFJLE9BQU8sRUFBQyxXQUFXLE1BQVosRUFBWDtBQUFBO0FBQUEsT0FGSjtBQUdBLFVBQU16QyxRQUFRdUMsVUFBVWpKLE1BQVYsR0FDVmlKLFVBQVVoRCxHQUFWLENBQWMsVUFBQ3JDLElBQUQsRUFBVTtBQUN4QixZQUFNd1QsWUFBYXhULEtBQUtwRSxPQUFMLENBQWFzTSxTQUFkLFlBQWxCOztBQUlBLGVBQU87QUFBQTtBQUFBLFlBQUksS0FBS2xJLEtBQUtzSSxJQUFkO0FBQ0w7QUFBQTtBQUFBO0FBQ0d0SSxpQkFBS3BFLE9BQUwsQ0FBYVM7QUFEaEIsV0FESztBQUlMO0FBQUE7QUFBQTtBQUNHMkQsaUJBQUtwRSxPQUFMLENBQWFEO0FBRGhCLFdBSks7QUFPTDtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0dxRSxpQkFBSzhGO0FBRFIsV0FQSztBQVVMO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUNLdkksdUJBQVd5QyxLQUFLOEksVUFBaEIsRUFBNEI5RCxXQUE1QixDQUF3QyxDQUF4QyxFQUEyQyxHQUEzQyxFQUFnRCxHQUFoRDtBQURMLFdBVks7QUFhTDtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0doRixpQkFBSzBIO0FBRFIsV0FiSztBQWdCSm5DLHdCQWhCSTtBQWlCTDtBQUFBO0FBQUEsY0FBSSxXQUFVLGdCQUFkO0FBQ0dpTztBQURILFdBakJLO0FBb0JMO0FBQUE7QUFBQSxjQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUNLeFQsaUJBQUtvSixrQkFBTCxDQUF3QnBFLFdBQXhCLENBQW9DLENBQXBDLEVBQXVDLEdBQXZDLEVBQTRDLEdBQTVDO0FBREw7QUFwQkssU0FBUDtBQXdCRCxPQTdCQyxDQURVLEdBK0JWO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FOQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQSxPQS9CSjs7QUF5Q0EsVUFBTXlPLG9CQUFvQixLQUFLNVAsS0FBTCxDQUFXMEIsY0FBWCxHQUE0QjtBQUFBO0FBQUEsVUFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxPQUE1QixHQUN0QjtBQUFBO0FBQUEsVUFBSSxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQVg7QUFBQTtBQUFBLE9BREo7O0FBR0EsYUFBTztBQUFBO0FBQUEsVUFBTyxXQUFVLDBCQUFqQjtBQUNMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGlCQUFkO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxnQkFBZDtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxhQUxGO0FBTUdrTyw2QkFOSDtBQU9FO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxhQVBGO0FBUUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBO0FBUkY7QUFERixTQURLO0FBYUw7QUFBQTtBQUFBO0FBQVEzUTtBQUFSO0FBYkssT0FBUDtBQWdCRDs7OztFQXJFZ0MsZ0JBQU1rQixTO2tCQUFwQnVQLEs7Ozs7Ozs7O2dDQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFZcUJ6SSxNLFdBVnBCLHlCQUFRLFVBQUNySCxLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMaUIsV0FBT2pCLE1BQU1rQixJQUFOLENBQVdDLFNBRGI7QUFFTHVELFdBQU8xRSxNQUFNa0IsSUFBTixDQUFXb0csU0FGYjtBQUdMMUIsbUJBQWU1RixNQUFNa0IsSUFBTixDQUFXMEUsYUFIckI7QUFJTEQsd0JBQW9CM0YsTUFBTWtCLElBQU4sQ0FBV3FHLHNCQUoxQjtBQUtMNUYsaUJBQWEzQixNQUFNa0IsSUFBTixDQUFXVSxTQUxuQjtBQU1MRSxvQkFBZ0I5QixNQUFNa0IsSUFBTixDQUFXWTtBQU50QixHQUFQO0FBUUQsQ0FUQSxDOzs7Ozs7Ozs7Ozs2QkFZVTs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFFTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFPLHFCQUFLMUIsS0FBTCxDQUFXdUYsa0JBQVgsQ0FBOEJwRSxXQUE5QixDQUEwQyxDQUExQyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRDtBQUFQO0FBRkYsYUFERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUtuQixLQUFMLENBQVd3RixhQUFYLENBQXlCckUsV0FBekIsQ0FBcUMsQ0FBckMsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0M7QUFBUDtBQUZGLGFBTkY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFPLHFCQUFLbkIsS0FBTCxDQUFXc0UsS0FBWCxDQUFpQm5ELFdBQWpCLENBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQVA7QUFGRixhQVZGO0FBY0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsV0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUtuQixLQUFMLENBQVdhLEtBQVgsQ0FBaUJNLFdBQWpCLENBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQVA7QUFGRjtBQWRGO0FBREY7QUFGSyxPQUFQO0FBMEJEOzs7O0VBOUJpQyxnQkFBTWhCLFM7a0JBQXJCOEcsTTs7Ozs7Ozs7Z0NBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7Ozs7Ozs7Ozs7SUFFcUI0SSxLOzs7Ozs7Ozs7Ozs2QkFFVjs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREs7QUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEssT0FBUDtBQU9EOzs7O0VBWGdDLGdCQUFNMVAsUzs7a0JBQXBCMFAsSzs7Ozs7Ozs7Z0NBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxjOzs7Ozs7Ozs7Ozs2QkFFVjs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFFTCw2REFGSztBQUdMLDJEQUhLO0FBSUwsNERBSks7QUFLTCw2REFMSztBQU1MO0FBTkssT0FBUDtBQVVEOzs7O0VBZHlDLGdCQUFNM1AsUzs7a0JBQTdCMlAsYzs7Ozs7Ozs7Z0NBQUFBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQVFxQmpDLE0sV0FOcEIseUJBQVEsVUFBQ2pPLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xnQixVQUFNaEIsTUFBTTZILEtBQU4sQ0FBWXFHLFVBRGI7QUFFTEMsYUFBU25PLE1BQU1uQyxNQUFOLENBQWFzUTtBQUZqQixHQUFQO0FBSUQsQ0FMQSxDOzs7Ozs7Ozs7Ozs2QkFRVTs7QUFFUCxVQUFNQyxhQUFhLEtBQUtoTyxLQUFMLENBQVdZLElBQVgsQ0FBZ0IrSixHQUFoQixDQUFvQkUsU0FBcEIsSUFBaUMsUUFBakMsR0FBNEMsb0JBQTVDLEdBQW1FLG9CQUF0Rjs7QUFFQTtBQUNBLFVBQU11RCxhQUFhLEtBQUtwTyxLQUFMLENBQVcrTixPQUFYLENBQW1CZ0MsYUFBbkIsSUFBb0MsRUFBdkQ7O0FBRUEsVUFBTXpCLGNBQWMsS0FBS3RPLEtBQUwsQ0FBVytOLE9BQVgsQ0FBbUJpQyxTQUFuQixJQUFnQyxFQUFwRDs7QUFFQSxVQUFNeEIsT0FBTyxLQUFLeE8sS0FBTCxDQUFXK04sT0FBWCxDQUFtQlUsVUFBbkIsSUFBaUMsRUFBOUM7QUFDQSxVQUFNQyxXQUFXRixLQUFLOVcsS0FBTCxDQUFXLEdBQVgsRUFBZ0JhLE1BQWhCLEdBQXlCLENBQXpCLGNBQXNDaVcsSUFBdEMsYUFBdURBLElBQXhFOztBQUVBLFVBQU1HLFNBQVMsS0FBSzNPLEtBQUwsQ0FBVytOLE9BQVgsQ0FBbUJZLE1BQW5CLElBQTZCLEVBQTVDO0FBQ0EsVUFBTWpJLEtBQUssS0FBSzFHLEtBQUwsQ0FBVytOLE9BQVgsQ0FBbUJySCxFQUFuQixJQUF5QixRQUFwQztBQUNBLFVBQU1rSSxTQUFTRCxVQUFVLFFBQVYsd0JBQXFDakksRUFBckMsa0JBQXNEQSxFQUFyRTs7QUFFQSxhQUFPO0FBQUE7QUFBQTtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUswSDtBQUFMLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0U7QUFBTCxhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtNO0FBQUwsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLG1CQUFLNU8sS0FBTCxDQUFXK04sT0FBWCxDQUFtQmUsUUFBbkIsSUFBK0I7QUFBcEMsYUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFLLG1CQUFLOU8sS0FBTCxDQUFXK04sT0FBWCxDQUFtQmdCLFFBQW5CLElBQStCO0FBQXBDLGFBTEY7QUFNRTtBQUFBO0FBQUE7QUFBSyxtQkFBSy9PLEtBQUwsQ0FBVytOLE9BQVgsQ0FBbUJpQixPQUFuQixJQUE4QjtBQUFuQyxhQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUtOO0FBQUw7QUFQRjtBQUZGLFNBRks7QUFnQkw7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFLHFEQURGO0FBR0U7QUFBQTtBQUFBO0FBQUtWO0FBQUwsV0FIRjtBQUtFO0FBTEY7QUFoQkssT0FBUDtBQXlCRDs7OztFQTNDaUMsZ0JBQU03TixTO2tCQUFyQjBOLE07Ozs7Ozs7O2dDQUFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFLcUI2QixLLFdBSHBCLHlCQUFRLFVBQUM5UCxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDc0QsUUFBUXRELE1BQU1rQixJQUFOLENBQVdVLFNBQXBCLEVBQStCRSxnQkFBZ0I5QixNQUFNa0IsSUFBTixDQUFXWSxjQUExRCxFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7Ozs7O0FBS0M7NkJBQ1M7O0FBRVAsVUFBTUYsWUFBWSxLQUFLeEIsS0FBTCxDQUFXa0QsTUFBN0I7QUFDQSxVQUFNakUsUUFBUXVDLFVBQVVoRCxHQUFWLENBQWMsVUFBQ3JDLElBQUQsRUFBVTs7QUFFcEMsWUFBTXdULFlBQWF4VCxLQUFLcEUsT0FBTCxDQUFha1ksUUFBZCxZQUFsQjs7QUFJQSxlQUFPO0FBQUE7QUFBQSxZQUFJLEtBQUs5VCxLQUFLc0ksSUFBZDtBQUNMO0FBQUE7QUFBQTtBQUNHdEksaUJBQUs4RjtBQURSLFdBREs7QUFJTDtBQUFBO0FBQUE7QUFDRzlGLGlCQUFLcEUsT0FBTCxDQUFhRDtBQURoQixXQUpLO0FBT0w7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNHNlg7QUFESCxXQVBLO0FBVUw7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUFBO0FBQ0t4VCxpQkFBS29KLGtCQUFMLENBQXdCcEUsV0FBeEIsQ0FBb0MsQ0FBcEMsRUFBdUMsR0FBdkMsRUFBNEMsR0FBNUM7QUFETDtBQVZLLFNBQVA7QUFjRCxPQXBCYSxDQUFkOztBQXNCQSxhQUFPO0FBQUE7QUFBQSxVQUFPLFdBQVUsNkJBQWpCO0FBQ0w7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsaUJBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxnQkFBZDtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQTtBQUpGO0FBREYsU0FESztBQVNMO0FBQUE7QUFBQSxZQUFPLFdBQVUsRUFBakI7QUFDR2xDO0FBREg7QUFUSyxPQUFQO0FBZUQ7Ozs7RUEzQ2dDLGdCQUFNa0IsUztrQkFBcEJ1UCxLOzs7Ozs7OztnQ0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCUixJLFdBSHBCLHlCQUFRLFVBQUN0UCxLQUFELEVBQVc7QUFDbEIsU0FBTyxFQUFDZ0IsTUFBTWhCLE1BQU02SCxLQUFOLENBQVlxRyxVQUFuQixFQUFQO0FBQ0QsQ0FGQSxDOzs7Ozs7Ozs7Ozs2QkFLVTtBQUNQLFVBQU1sTixPQUFPLEtBQUtaLEtBQUwsQ0FBV1ksSUFBeEI7QUFDQSxVQUFNdU8sT0FBT3ZPLEtBQUt3TyxPQUFMLEdBQ04sQ0FBQyxNQUFNeE8sS0FBS3dPLE9BQUwsQ0FBYUMsT0FBYixFQUFQLEVBQStCeEYsS0FBL0IsQ0FBcUMsQ0FBQyxDQUF0QyxDQURNLGlCQUVULENBQUMsT0FBT2pKLEtBQUt3TyxPQUFMLENBQWFFLFFBQWIsS0FBMEIsQ0FBakMsQ0FBRCxFQUFzQ3pGLEtBQXRDLENBQTRDLENBQUMsQ0FBN0MsQ0FGUyxpQkFHVGpKLEtBQUt3TyxPQUFMLENBQWFHLFdBQWIsRUFIUyxHQUlULFlBSko7QUFLQSxVQUFNelcsU0FBUzhILEtBQUs5SCxNQUFMLEdBQWlCOEgsS0FBSzlILE1BQUwsQ0FBWU4sSUFBN0IsV0FBdUNvSSxLQUFLOUgsTUFBTCxDQUFZRCxJQUFuRCxTQUEyRCtILEtBQUs5SCxNQUFMLENBQVlDLFNBQXZFLEdBQXFGLHlCQUFwRztBQUNBLFVBQU0yTixLQUFLOUYsS0FBS3FNLFdBQUwsR0FBbUJyTSxLQUFLcU0sV0FBeEIsR0FBc0MsTUFBakQ7QUFDQSxVQUFNdUMsZUFBZTVPLEtBQUs5SCxNQUFMLENBQVkyVyxNQUFaLEdBQ2pCO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFLN08sZUFBSzlILE1BQUwsQ0FBWTJXO0FBQWpCO0FBRkEsT0FEaUIsR0FLakIseUNBTEo7O0FBT0EsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLHNCQUFmO0FBRUw7QUFBQTtBQUFBLFlBQU8sV0FBVSxlQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLTjtBQUFMO0FBRkYsYUFERjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLLGlCQUFDLFVBQVV6SSxFQUFYLEVBQWVtRCxLQUFmLENBQXFCLENBQUMsQ0FBdEI7QUFBTDtBQUZGLGFBTEY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSy9RO0FBQUw7QUFGRixhQVZGO0FBZUcwVztBQWZIO0FBREY7QUFGSyxPQUFQO0FBMEJEOzs7O0VBNUMrQixnQkFBTXJQLFM7a0JBQW5CK08sSTs7Ozs7Ozs7Z0NBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7OztJQVlxQmpJLE0sV0FWcEIseUJBQVEsVUFBQ3JILEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xpQixXQUFPakIsTUFBTWtCLElBQU4sQ0FBV0MsU0FEYjtBQUVMdUQsV0FBTzFFLE1BQU1rQixJQUFOLENBQVdvRyxTQUZiO0FBR0wxQixtQkFBZTVGLE1BQU1rQixJQUFOLENBQVcwRSxhQUhyQjtBQUlMRCx3QkFBb0IzRixNQUFNa0IsSUFBTixDQUFXcUcsc0JBSjFCO0FBS0w1RixpQkFBYTNCLE1BQU1rQixJQUFOLENBQVdVLFNBTG5CO0FBTUxFLG9CQUFnQjlCLE1BQU1rQixJQUFOLENBQVdZO0FBTnRCLEdBQVA7QUFRRCxDQVRBLEM7Ozs7Ozs7Ozs7OzZCQVlVOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUsxQixLQUFMLENBQVd1RixrQkFBWCxDQUE4QnBFLFdBQTlCLENBQTBDLENBQTFDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxEO0FBQVA7QUFGRixhQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBS25CLEtBQUwsQ0FBV3dGLGFBQVgsQ0FBeUJyRSxXQUF6QixDQUFxQyxDQUFyQyxFQUF3QyxHQUF4QyxFQUE2QyxHQUE3QztBQUFQO0FBRkYsYUFORjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8scUJBQUtuQixLQUFMLENBQVdzRSxLQUFYLENBQWlCbkQsV0FBakIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFBUDtBQUZGLGFBVkY7QUFjRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxXQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBTyxxQkFBS25CLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQk0sV0FBakIsQ0FBNkIsQ0FBN0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFBUDtBQUZGO0FBZEY7QUFERjtBQUZLLE9BQVA7QUEwQkQ7Ozs7RUE5QmlDLGdCQUFNaEIsUztrQkFBckI4RyxNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7Ozs7Ozs7OztJQUVxQjRJLEs7Ozs7Ozs7Ozs7OzZCQUVWOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGSyxPQUFQO0FBUUQ7Ozs7RUFaZ0MsZ0JBQU0xUCxTOztrQkFBcEIwUCxLOzs7Ozs7OztnQ0FBQUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRnJCOzs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQU9xQkssTSxXQUxwQix5QkFBUSxVQUFDdFEsS0FBRCxFQUFXO0FBQ2xCLFNBQU87QUFDTHVRLHlCQUFxQnZRLE1BQU1HLE1BQU4sQ0FBYW9RO0FBRDdCLEdBQVA7QUFHRCxDQUpBLEM7Ozs7Ozs7Ozs7OzhCQU9Xck8sRSxFQUFJOztBQUVaO0FBRUQ7OztrQ0FFYTs7QUFFWjtBQUNBLDJCQUFTc08sT0FBVCxDQUFpQixlQUFqQixrREFBNEUsWUFBVztBQUNyRjlRLGVBQU9xSSxRQUFQLENBQWdCaUMsT0FBaEIsQ0FBd0IsU0FBeEI7QUFDRCxPQUZELEVBRUcsWUFBVztBQUNaLGVBQU8sSUFBUDtBQUNELE9BSkQsRUFJR2pOLEdBSkgsQ0FJTyxRQUpQLEVBSWlCO0FBQ2ZnSCxZQUFJLFFBRFc7QUFFZkMsZ0JBQVE7QUFGTyxPQUpqQjtBQVFEOzs7Z0NBRVc7QUFDVjtBQUNBLDJCQUFTd00sT0FBVCxDQUFpQixzQkFBakIsd0NBQXlFLFlBQVc7QUFDbEY5USxlQUFPcUksUUFBUCxDQUFnQmlDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0QsT0FGRCxFQUVHLFlBQVc7QUFDWixlQUFPLElBQVA7QUFDRCxPQUpELEVBSUdqTixHQUpILENBSU8sUUFKUCxFQUlpQjtBQUNmZ0gsWUFBSSxJQURXO0FBRWZDLGdCQUFRO0FBRk8sT0FKakI7QUFRRDs7QUFFRDs7Ozs2QkFDUztBQUNQLFVBQU15TSxjQUFjLEtBQUtyUSxLQUFMLENBQVdtUSxtQkFBWCxHQUNoQiw4Q0FEZ0IsR0FDaUMsc0NBRHJEOztBQUdBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0w7QUFBQTtBQUFBLFlBQUssU0FBUyxLQUFLRyxTQUFMLENBQWVqUCxJQUFmLENBQW9CLElBQXBCLENBQWQsRUFBeUMsV0FBV2dQLFdBQXBEO0FBQ0Usa0RBQU0sV0FBVSxZQUFoQjtBQURGLFNBREs7QUFJTDtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxTQUFTLEtBQUtFLFNBQUwsQ0FBZWxQLElBQWYsQ0FBb0IsSUFBcEIsQ0FBZCxFQUF5QyxXQUFVLGdDQUFuRDtBQUNFLG9EQUFNLFdBQVUsWUFBaEI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssU0FBUyxLQUFLbVAsV0FBTCxDQUFpQm5QLElBQWpCLENBQXNCLElBQXRCLENBQWQsRUFBMkMsV0FBVSxvQ0FBckQ7QUFDRSxvREFBTSxXQUFVLGlCQUFoQjtBQURGO0FBSkY7QUFKSyxPQUFQO0FBY0Q7Ozs7RUFwRGlDLGdCQUFNbEIsUztrQkFBckIrUCxNOzs7Ozs7OztnQ0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7OztRQ1pMTyxZLEdBQUFBLFk7UUFpQkFDLGUsR0FBQUEsZTtBQWpCVCxTQUFTRCxZQUFULEdBQXdCOztBQUU3QixNQUFNRSxnQkFBZ0JsUixTQUFTQyxjQUFULENBQXdCLGVBQXhCLENBQXRCO0FBQ0EsTUFBTWtSLFdBQVduUixTQUFTQyxjQUFULENBQXdCLFVBQXhCLENBQWpCOztBQUVBLE1BQUlpUixjQUFjdEksU0FBZCxDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakMsQ0FBSixFQUFnRDs7QUFFOUNxSSxrQkFBY3RJLFNBQWQsQ0FBd0J3SSxNQUF4QixDQUErQixRQUEvQjtBQUNBRCxhQUFTdkksU0FBVCxDQUFtQndJLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURGLGdCQUFjdEksU0FBZCxDQUF3QnlJLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FGLFdBQVN2SSxTQUFULENBQW1CeUksR0FBbkIsQ0FBdUIsUUFBdkI7QUFFRDs7QUFFTSxTQUFTSixlQUFULEdBQTJCOztBQUVoQyxNQUFNSyxZQUFZdFIsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFsQjs7QUFFQSxNQUFJcVIsVUFBVTFJLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLGFBQTdCLENBQUosRUFBaUQ7O0FBRS9DeUksY0FBVTFJLFNBQVYsQ0FBb0J3SSxNQUFwQixDQUEyQixhQUEzQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVERSxZQUFVMUksU0FBVixDQUFvQnlJLEdBQXBCLENBQXdCLGFBQXhCO0FBRUQ7Ozs7Ozs7O2dDQTdCZUwsWTs7Z0NBaUJBQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNsQmhCOzs7O0FBTUE7OztBQUhBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBT3FCTSxRLFdBTHBCLHlCQUFRLFVBQUNwUixLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMRSxxQkFBaUJGLE1BQU1HLE1BQU4sQ0FBYUQ7QUFEekIsR0FBUDtBQUdELENBSkEsQzs7Ozs7Ozs7Ozs7d0NBT3FCO0FBQ2xCTCxlQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDMkksU0FBbEMsQ0FBNEN3SSxNQUE1QyxDQUFtRCxRQUFuRDtBQUNEOztBQUVEOzs7OzZCQUNTOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQU1JLGdCQUFnQixLQUFLalIsS0FBTCxDQUFXRixlQUFYLEdBQTZCLFVBQTdCLEdBQTBDLHNCQUFoRTtBQUNBLGFBQU87QUFBQTtBQUFBLFVBQUssSUFBRyxVQUFSLEVBQW1CLFdBQVdtUixhQUE5QjtBQUdMLDJEQUhLO0FBS0wsNkRBTEs7QUFPTDtBQUFBO0FBQUEsWUFBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBTSxJQUFHLFFBQVQ7QUFDRSx3REFBTSxXQUFVLGtCQUFoQixHQURGO0FBQUE7QUFBQTtBQURGLGFBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQU0sSUFBRyxhQUFUO0FBQ0Usd0RBQU0sV0FBVSxrQkFBaEIsR0FERjtBQUFBO0FBQUE7QUFERixhQU5GO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFNLElBQUcsaUJBQVQ7QUFDRSx3REFBTSxXQUFVLFlBQWhCLEdBREY7QUFBQTtBQUFBO0FBREYsYUFYRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQU0sSUFBRyxnQkFBVDtBQUNFLHdEQUFNLFdBQVUsWUFBaEIsR0FERjtBQUFBO0FBQUE7QUFERjtBQWhCRjtBQURGO0FBUEssT0FBUDtBQW1DRDs7OztFQTlEbUMsZ0JBQU05USxTO2tCQUF2QjZRLFE7Ozs7Ozs7O2dDQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RyQjs7Ozs7Ozs7OzsrZUFEQTs7O0lBR3FCRSxNOzs7Ozs7Ozs7Ozs7O0FBRW5COzZCQUNTOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSwyQkFBZjtBQUVMLGlEQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFdBQS9CO0FBRkssT0FBUDtBQU1EOzs7O0VBWGlDLGdCQUFNL1EsUzs7a0JBQXJCK1EsTTs7Ozs7Ozs7Z0NBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0hyQjs7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7O0lBUXFCQyxJLFdBTnBCLHlCQUFRLFVBQUN2UixLQUFELEVBQVc7QUFDbEIsU0FBTztBQUNMdkcsVUFBTXVHLE1BQU12RyxJQUFOLENBQVdBLElBRFo7QUFFTGtILGFBQVNYLE1BQU12RyxJQUFOLENBQVdrSDtBQUZmLEdBQVA7QUFJRCxDQUxBLEM7Ozs7Ozs7Ozs7Ozs7QUFRQzs2QkFDUzs7QUFFUCxVQUFNNlEsU0FBUyxLQUFLcFIsS0FBTCxDQUFXTyxPQUFYLENBQW1CNlEsTUFBbkIsZUFBc0MsS0FBS3BSLEtBQUwsQ0FBV08sT0FBWCxDQUFtQjZRLE1BQXpELEdBQW9FLDRCQUFuRjs7QUFFQSxVQUFNdlksT0FBTyxLQUFLbUgsS0FBTCxDQUFXM0csSUFBWCxDQUFnQmdZLFVBQWhCLEdBQ1QsS0FBS3JSLEtBQUwsQ0FBVzNHLElBQVgsQ0FBZ0JnWSxVQURQLEdBRVIsS0FBS3JSLEtBQUwsQ0FBVzNHLElBQVgsQ0FBZ0JpWSxRQUFoQixHQUNDLEtBQUt0UixLQUFMLENBQVczRyxJQUFYLENBQWdCaVksUUFEakIsR0FDNEIsRUFIakM7O0FBS0EsVUFBTUMsV0FBVyxLQUFLdlIsS0FBTCxDQUFXM0csSUFBWCxDQUFnQk4sU0FBaEIsR0FBNEIsS0FBS2lILEtBQUwsQ0FBVzNHLElBQVgsQ0FBZ0JOLFNBQTVDLEdBQXdELEVBQXpFOztBQUVBLFVBQUl5WSxXQUFjM1ksSUFBZCxTQUFzQjBZLFFBQTFCO0FBQ0EsVUFBSUMsU0FBU2paLE1BQVQsR0FBa0IsRUFBdEIsRUFBMEJpWixXQUFXQSxTQUFTQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLEVBQXRCLENBQVg7O0FBRTFCLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSwwQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRSxpREFBSyxLQUFLTCxNQUFWO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBT0k7QUFBUCxXQURGO0FBRUU7QUFGRjtBQU5LLE9BQVA7QUFZRDs7OztFQTdCK0IsZ0JBQU1yUixTO2tCQUFuQmdSLEk7Ozs7Ozs7O2dDQUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTU8sYUFBYSw0QkFBZ0IsdUNBQWhCLDhDQUFuQjs7QUFFQTs7ZUFFZSwyQ0FBcUJBLFVBQXJCLEM7Ozs7Ozs7Ozs7Z0NBSlRBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7ZUFFZSw0QkFBZ0I7QUFDN0I3Uiw2QkFENkI7QUFFN0JFLDJCQUY2QjtBQUc3QjFHLHlCQUg2QjtBQUk3QnlILHlCQUo2QjtBQUs3QnBJLDZCQUw2QjtBQU03QmxCLDhCQU42QjtBQU83Qm9KLDBCQVA2QjtBQVE3QitRLDhCQVI2QjtBQVM3QnhILG1DQVQ2QjtBQVU3QmhDLG9DQVY2QjtBQVc3QndDLHlCQVg2QjtBQVk3QjBDLDZCQVo2QjtBQWE3QjVGLDJCQWI2QjtBQWM3QmhLO0FBZDZCLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ1pTbVUsTztBQUx4QixJQUFNQyxhQUFhO0FBQ2pCMUIsdUJBQXFCLEtBREo7QUFFakJyUSxtQkFBaUI7QUFGQSxDQUFuQjs7QUFLZSxTQUFTOFIsT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0srUCxLQURMO0FBRUUrSSwrQkFBcUIsSUFGdkI7QUFHRXJRLDJCQUFpQjtBQUhuQjtBQUtELE9BVEgsQ0FTSTs7QUFFRixTQUFLLG9CQUFMO0FBQ0E7QUFDRSw0QkFDS3NILEtBREw7QUFFRStJLCtCQUFxQixLQUZ2QjtBQUdFclEsMkJBQWlCO0FBSG5CO0FBS0QsT0FsQkgsQ0FrQkk7O0FBbEJKLEdBRjBELENBc0J4RDs7QUFFRixTQUFPc0gsS0FBUCxDQXhCMEQsQ0F3QjdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBL0JJeUssVTs7Z0NBS2tCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0FBQSxPO0FBTHhCLElBQU1DLGFBQWE7QUFDakJ4WSxRQUFNLEVBRFc7QUFFakJrSCxXQUFTO0FBRlEsQ0FBbkI7O0FBS2UsU0FBU3FSLE9BQVQsR0FBNkM7QUFBQSxNQUE1QnhLLEtBQTRCLHVFQUFwQnlLLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96YSxJQUFmOztBQUVFLFNBQUsseUJBQUw7QUFDQTtBQUNFLDRCQUNLK1AsS0FETDtBQUVFL04sZ0JBQU15WSxPQUFPeGEsT0FBUCxDQUFlK0IsSUFGdkI7QUFHRWtILG1CQUFTdVIsT0FBT3hhLE9BQVAsQ0FBZWlKO0FBSDFCO0FBTUQsT0FWSCxDQVVJOztBQUVGLFNBQUssd0JBQUw7QUFDQTtBQUNFLDRCQUNLNkcsS0FETDtBQUVFL04sZ0JBQU0sRUFGUjtBQUdFa0gsbUJBQVM7QUFIWDtBQU1ELE9BcEJILENBb0JJOztBQXBCSixHQUYwRCxDQXdCeEQ7O0FBRUYsU0FBTzZHLEtBQVAsQ0ExQjBELENBMEI3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWpDSXlLLFU7O2dDQUtrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNXQUEsTzs7OztBQWhCeEIsSUFBTUMsYUFBYTtBQUNqQkUsWUFBVSxJQURPO0FBRWpCM0MsV0FBUyxFQUZRO0FBR2pCNEMsV0FBUyxFQUhRO0FBSWpCQyxVQUFRLEtBSlM7QUFLakJDLGdCQUFjLEtBTEcsRUFLSTtBQUNyQjFRLGFBQVcsRUFOTSxFQU1GO0FBQ2YyRiwwQkFBd0IsQ0FQUCxFQU9VO0FBQzNCZ0wsZ0JBQWMsQ0FSRyxFQVFBO0FBQ2pCakwsYUFBVyxDQVRNLEVBU0g7QUFDZG5HLGFBQVcsQ0FWTSxFQVVIO0FBQ2RXLGtCQUFnQixDQVhDLEVBV0U7QUFDbkI4RCxpQkFBZSxDQVpFLEVBWUM7QUFDbEJyQyxrQkFBZ0I7QUFiQyxDQUFuQjs7QUFnQmUsU0FBU3lPLE9BQVQsR0FBNkM7QUFBQSxNQUE1QnhLLEtBQTRCLHVFQUFwQnlLLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96YSxJQUFmOztBQUVFLFNBQUssV0FBTDtBQUNBO0FBQ0UsNEJBQ0srUCxLQURMO0FBRUUySyxvQkFBVSxJQUZaO0FBR0UzQyxtQkFBUyxFQUhYO0FBSUU0QyxtQkFBUyxFQUpYO0FBS0VDLGtCQUFRLEtBTFY7QUFNRUMsd0JBQWMsS0FOaEIsRUFNdUI7QUFDckIxUSxxQkFBVyxFQVBiLEVBT2lCO0FBQ2YyRixrQ0FBd0IsQ0FSMUIsRUFRNkI7QUFDM0JnTCx3QkFBYyxDQVRoQixFQVNtQjtBQUNqQmpMLHFCQUFXLENBVmIsRUFVZ0I7QUFDZG5HLHFCQUFXLENBWGIsRUFXZ0I7QUFDZFcsMEJBQWdCLENBWmxCLEVBWXFCO0FBQ25COEQseUJBQWUsQ0FiakIsRUFhb0I7QUFDbEJyQywwQkFBZ0I7QUFkbEI7QUFnQkQ7O0FBRUQsU0FBSyxhQUFMO0FBQ0E7O0FBRUUsNEJBQ0tpRSxLQURMO0FBRUU4Syx3QkFBYyxJQUZoQjtBQUdFMVEsa0RBRUs0RixNQUFNNUYsU0FGWCxJQUdFc1EsT0FBT3hhLE9BSFQ7QUFIRjtBQVNELE9BbENILENBa0NJOztBQUVGLFNBQUssa0JBQUw7QUFDQTs7QUFFRSxZQUFNOGEsdUNBQWNoTCxNQUFNNUYsU0FBcEIsRUFBTjs7QUFFQTRRLGdCQUFRQyxNQUFSLENBQWVQLE9BQU94YSxPQUF0QixFQUErQixDQUEvQjs7QUFFQSxZQUFNZ2Isa0JBQW1CRixRQUFRN1osTUFBUixHQUFpQixDQUExQztBQUNBO0FBQ0E7O0FBRUEsNEJBQ0s2TyxLQURMO0FBRUU4Syx3QkFBY0ksZUFGaEI7QUFHRTlRLHFCQUFXNFE7QUFIYjtBQUtELE9BcERILENBb0RJOztBQUVGLFNBQUssYUFBTDtBQUNBOztBQUVFLFlBQU1BLHdDQUFjaEwsTUFBTTVGLFNBQXBCLEVBQU47QUFDQTRRLGlCQUFRTixPQUFPeGEsT0FBUCxDQUFlVyxLQUF2QixJQUFnQzZaLE9BQU94YSxPQUFQLENBQWU2RSxJQUEvQzs7QUFFQSw0QkFDS2lMLEtBREw7QUFFRTVGLHFCQUFXNFE7QUFGYjtBQUlELE9BaEVILENBZ0VJOztBQUVGLFNBQUssdUJBQUw7QUFDQTs7QUFFRSxZQUFNQSx5Q0FBY2hMLE1BQU01RixTQUFwQixFQUFOO0FBQ0E0USxrQkFBUU4sT0FBT3hhLE9BQVAsQ0FBZVcsS0FBdkIsRUFBOEIsTUFBOUIsSUFBd0M2WixPQUFPeGEsT0FBUCxDQUFld00sSUFBdkQ7O0FBRUEsNEJBQ0tzRCxLQURMO0FBRUU1RixxQkFBVzRRO0FBRmI7QUFJRCxPQTVFSCxDQTRFSTs7QUFFRixTQUFLLG9CQUFMO0FBQ0E7O0FBRUUsNEJBQ0toTCxLQURMO0FBRUUrSyx3QkFBY0wsT0FBT3hhLE9BQVAsQ0FBZWdPLFFBRi9CO0FBR0U0QixxQkFBVzRLLE9BQU94YSxPQUFQLENBQWVnTixLQUg1QjtBQUlFdkQscUJBQVcrUSxPQUFPeGEsT0FBUCxDQUFldUosS0FKNUI7QUFLRTJFLHlCQUFlc00sT0FBT3hhLE9BQVAsQ0FBZWtPLGFBTGhDO0FBTUUyQixrQ0FBd0IySyxPQUFPeGEsT0FBUCxDQUFlaU87QUFOekM7QUFRRCxPQXpGSCxDQXlGSTs7QUFFRixTQUFLLHFCQUFMO0FBQ0E7O0FBRUUsNEJBQ0s2QixLQURMO0FBRUUxRiwwQkFBZ0JvUSxPQUFPeGE7QUFGekI7QUFJRCxPQWxHSCxDQWtHSTs7QUFFRixTQUFLLGNBQUw7QUFDQTtBQUNFLDRCQUNLOFAsS0FETDtBQUVFNUYscUJBQVdzUSxPQUFPeGE7QUFGcEI7QUFJRDs7QUFFRCxTQUFLLHNCQUFMO0FBQ0E7QUFDRSxZQUFNOGEseUNBQWNoTCxNQUFNNUYsU0FBcEIsRUFBTjtBQUNBNFEsa0JBQVFOLE9BQU94YSxPQUFQLENBQWVXLEtBQXZCLEVBQThCNEwsUUFBOUIsR0FBeUNpTyxPQUFPeGEsT0FBUCxDQUFlcUcsS0FBeEQ7O0FBRUEsNEJBQ0t5SixLQURMO0FBRUU1RixxQkFBVzRRO0FBRmI7QUFJRDs7QUFFRCxTQUFLLFVBQUw7QUFDQTtBQUNFaEwsZ0JBQVF5SyxVQUFSO0FBQ0EsNEJBQ0t6SyxLQURMLElBQ1l5SztBQURaO0FBR0QsT0E3SEgsQ0E2SEk7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDS3pLLEtBREw7QUFFRWdJLG1CQUFTMEMsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JzTyxPQUYvQjtBQUdFNkMsa0JBQVFILE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CbVIsTUFIOUI7QUFJRUMsd0JBQWNKLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9Cb1IsWUFKcEMsRUFJa0Q7QUFDaEQxUSxxQkFBV3NRLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CVSxTQUxqQyxFQUs0QztBQUMxQzJGLGtDQUF3QjJLLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CcUcsc0JBTjlDLEVBTXNFO0FBQ3BFZ0wsd0JBQWNMLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CcVIsWUFQcEMsRUFPa0Q7QUFDaERqTCxxQkFBVzRLLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9Cb0csU0FSakMsRUFRNEM7QUFDMUNuRyxxQkFBVytRLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CQyxTQVRqQyxFQVM0QztBQUMxQ1csMEJBQWdCb1EsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JZLGNBVnRDLEVBVXNEO0FBQ3BEOEQseUJBQWVzTSxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQjBFLGFBWHJDLENBV21EO0FBWG5EO0FBYUQ7O0FBRUQsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0s0QixLQURMO0FBRUVnSSxtQkFBUzBDLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9Cc08sT0FGL0I7QUFHRTZDLGtCQUFRSCxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQm1SLE1BSDlCO0FBSUVDLHdCQUFjSixPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQm9SLFlBSnBDLEVBSWtEO0FBQ2hEMVEscUJBQVdzUSxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQlUsU0FMakMsRUFLNEM7QUFDMUMyRixrQ0FBd0IySyxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQnFHLHNCQU45QyxFQU1zRTtBQUNwRWdMLHdCQUFjTCxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQnFSLFlBUHBDLEVBT2tEO0FBQ2hEakwscUJBQVc0SyxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQm9HLFNBUmpDLEVBUTRDO0FBQzFDbkcscUJBQVcrUSxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQkMsU0FUakMsRUFTNEM7QUFDMUNXLDBCQUFnQm9RLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CWSxjQVZ0QyxFQVVzRDtBQUNwRDhELHlCQUFlc00sT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0IwRSxhQVhyQyxDQVdtRDtBQVhuRDtBQWFEOztBQUVELFNBQUssZ0JBQUw7QUFDQTtBQUNFLDRCQUNLNEIsS0FETDtBQUVFZ0ksbUJBQVMwQyxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQnNPLE9BRi9CO0FBR0U2QyxrQkFBUUgsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JtUixNQUg5QjtBQUlFQyx3QkFBY0osT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JvUixZQUpwQyxFQUlrRDtBQUNoRDFRLHFCQUFXc1EsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JVLFNBTGpDLEVBSzRDO0FBQzFDMkYsa0NBQXdCMkssT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JxRyxzQkFOOUMsRUFNc0U7QUFDcEVnTCx3QkFBY0wsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JxUixZQVBwQyxFQU9rRDtBQUNoRGpMLHFCQUFXNEssT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JvRyxTQVJqQyxFQVE0QztBQUMxQ25HLHFCQUFXK1EsT0FBT3hhLE9BQVAsQ0FBZXdKLElBQWYsQ0FBb0JDLFNBVGpDLEVBUzRDO0FBQzFDVywwQkFBZ0JvUSxPQUFPeGEsT0FBUCxDQUFld0osSUFBZixDQUFvQlksY0FWdEMsRUFVc0Q7QUFDcEQ4RCx5QkFBZXNNLE9BQU94YSxPQUFQLENBQWV3SixJQUFmLENBQW9CMEUsYUFYckMsQ0FXbUQ7QUFYbkQ7QUFhRDs7QUFFRCxTQUFLLDRCQUFMO0FBQ0E7QUFDRSw0QkFDSzRCLEtBREw7QUFFRWpFLDBCQUFnQjJPLE9BQU94YTtBQUZ6QjtBQUlELE9BeExILENBd0xJOztBQXhMSixHQUYwRCxDQTRMeEQ7O0FBRUYsU0FBTzhQLEtBQVAsQ0E5TDBELENBOEw3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWhOSXlLLFU7O2dDQWdCa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDbUJBQSxPO0FBbkN4QixJQUFNVyxzQkFBc0I7QUFDMUIvWixRQUFNLE1BRG9CO0FBRTFCZ2EsY0FBWSxTQUZjO0FBRzFCcEQsV0FBUyxFQUhpQjtBQUkxQnFELGVBQWEsQ0FKYTtBQUsxQi9HLGdCQUFjLENBTFk7QUFNMUJnSCxXQUFTLFFBTmlCO0FBTzFCbkksY0FBWSxLQVBjO0FBUTFCN0QsTUFBSSxXQVJzQjtBQVMxQjNOLGFBQVcsU0FUZTtBQVUxQkYsUUFBTSxTQVZvQjtBQVcxQm1aLFdBQVMsRUFYaUI7QUFZMUJuTixjQUFZLEtBWmM7QUFhMUIxTCxPQUFLO0FBYnFCLENBQTVCOztBQWdCQSxJQUFNd1osb0JBQW9CO0FBQ3hCdFosUUFBTSxNQURrQjtBQUV4QlIsUUFBTSxFQUZrQjtBQUd4QkUsYUFBVyxFQUhhO0FBSXhCMk4sTUFBSSxNQUpvQjtBQUt4QnZOLE9BQUs7QUFMbUIsQ0FBMUI7O0FBUUEsSUFBTTBZLGFBQWE7QUFDakJlLG1CQUFpQixLQURBO0FBRWpCQyxpQkFBZSxLQUZFO0FBR2pCQyxxQkFBbUIsRUFIRjtBQUlqQnBhLFdBQVMsRUFKUTtBQUtqQlUsU0FBTyxFQUxVO0FBTWpCSixrQkFBZ0J1WixtQkFOQztBQU9qQnRaLGdCQUFjMFosaUJBUEc7QUFRakJwTSxzQkFBb0I7QUFSSCxDQUFuQjs7QUFXZSxTQUFTcUwsT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyxXQUFMO0FBQ0E7QUFDRSw0QkFDSytQLEtBREw7QUFFRXBPLDBCQUFnQnVaLG1CQUZsQjtBQUdFdFosd0JBQWMwWjtBQUhoQjtBQUtEOztBQUVELFNBQUssZUFBTDtBQUNBO0FBQ0UsNEJBQ0t2TCxLQURMO0FBRUV3TCwyQkFBaUI7QUFGbkI7QUFJRCxPQWpCSCxDQWlCSTs7QUFFRixTQUFLLHdCQUFMO0FBQ0E7QUFDRSw0QkFDS3hMLEtBREw7QUFFRXdMLDJCQUFpQixLQUZuQjtBQUdFRSw2QkFBbUJoQixPQUFPeGE7QUFINUI7QUFLRCxPQTFCSCxDQTBCSTs7QUFFRixTQUFLLHlCQUFMO0FBQ0E7QUFDRSw0QkFDSzhQLEtBREw7QUFFRXdMLDJCQUFpQixLQUZuQjtBQUdFQyx5QkFBZSxJQUhqQjtBQUlFbmEsbUJBQVNvWixPQUFPeGE7QUFKbEI7QUFNRCxPQXBDSCxDQW9DSTs7QUFFRixTQUFLLGlCQUFMO0FBQ0E7QUFDRSw0QkFDSzhQLEtBREw7QUFFRXBPLDBCQUFnQjhZLE9BQU94YSxPQUFQLENBQWV3QjtBQUZqQztBQUlELE9BNUNILENBNENJOztBQUVGO0FBQ0EsU0FBSyxzQkFBTDtBQUNBO0FBQ0UsNEJBQ0tzTyxLQURMO0FBRUVuTyx3QkFBYzBaO0FBRmhCO0FBSUQsT0FyREgsQ0FxREk7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0t2TCxLQURMO0FBRUVoTyxpQkFBTzBZLE9BQU94YTtBQUZoQjtBQUlELE9BN0RILENBNkRJOztBQUVGLFNBQUssZUFBTDtBQUNBO0FBQ0UsNEJBQ0s4UCxLQURMO0FBRUVuTyx3QkFBYzZZLE9BQU94YSxPQUFQLENBQWUrQjtBQUYvQjtBQUlELE9BckVILENBcUVJOztBQUVGLFNBQUssWUFBTDtBQUNBO0FBQ0UsNEJBQ0srTixLQURMO0FBRUVuTyx3QkFBYzBaO0FBRmhCO0FBSUQsT0E3RUgsQ0E2RUk7O0FBRUY7O0FBRUEsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0t2TCxLQURMO0FBRUViLDhCQUFvQjdNLFdBQVdvWSxPQUFPeGEsT0FBUCxDQUFlZ1AsSUFBMUI7QUFGdEI7QUFJRDs7QUFFRCxTQUFLLFVBQUw7QUFDQTtBQUNFLFlBQU01TixVQUFVME8sTUFBTTFPLE9BQXRCO0FBQ0EwTyxnQkFBUXlLLFVBQVI7QUFDQSw0QkFDS3pLLEtBREwsSUFDWTFPLFNBQVNBO0FBRHJCO0FBR0QsT0FoR0gsQ0FnR0k7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDSzBPLEtBREw7QUFFRXBPLDBCQUFnQjhZLE9BQU94YSxPQUFQLENBQWV3QixNQUZqQztBQUdFRyx3QkFBYzZZLE9BQU94YSxPQUFQLENBQWUrQjtBQUgvQjtBQUtEOztBQUVELFNBQUssZ0JBQUw7QUFDQTtBQUNFLDRCQUNLK04sS0FETDtBQUVFcE8sMEJBQWdCOFksT0FBT3hhLE9BQVAsQ0FBZXdCO0FBRmpDO0FBSUQ7O0FBRUQsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0tzTyxLQURMO0FBRUVwTywwQkFBZ0I4WSxPQUFPeGEsT0FBUCxDQUFld0I7QUFGakM7QUFJRDs7QUFFRCxTQUFLLGFBQUw7QUFDQTtBQUNFLFlBQU1BLFNBQVNzTyxNQUFNcE8sY0FBckI7QUFDQUYsZUFBTytMLFVBQVAsR0FBb0IsSUFBcEI7QUFDQSw0QkFDS3VDLEtBREw7QUFFRXBPLDBCQUFnQkY7QUFGbEI7QUFJRDs7QUFFRCxTQUFLLGNBQUw7QUFDQTtBQUNFLFlBQU1BLFVBQVNzTyxNQUFNcE8sY0FBckI7QUFDQUYsZ0JBQU8rTCxVQUFQLEdBQW9CLEtBQXBCO0FBQ0EsNEJBQ0t1QyxLQURMO0FBRUVwTywwQkFBZ0JGO0FBRmxCO0FBSUQ7O0FBN0lILEdBRjBELENBaUp4RDs7QUFFRixTQUFPc08sS0FBUCxDQW5KMEQsQ0FtSjdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBeExJbUwsbUI7O2dDQWdCQUksaUI7O2dDQVFBZCxVOztnQ0FXa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDOUJBQSxPO0FBTHhCLElBQU1DLGFBQWE7QUFDakJyYSxZQUFVLEVBRE87QUFFakJpSyxZQUFVO0FBRk8sQ0FBbkI7O0FBS2UsU0FBU21RLE9BQVQsR0FBNkM7QUFBQSxNQUE1QnhLLEtBQTRCLHVFQUFwQnlLLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96YSxJQUFmOztBQUVFLFNBQUsseUJBQUw7QUFDQTtBQUNFLDRCQUNLK1AsS0FETDtBQUVFNVAsb0JBQVU7QUFGWjtBQUlELE9BUkgsQ0FRSTs7QUFFRixTQUFLLDBCQUFMO0FBQ0E7QUFDRSw0QkFDSzRQLEtBREw7QUFFRTVQLG9CQUFVc2EsT0FBT3hhO0FBRm5CO0FBSUQsT0FoQkgsQ0FnQkk7O0FBRUYsU0FBSyx5QkFBTDtBQUNBO0FBQ0UsNEJBQ0s4UCxLQURMO0FBRUUzRixvQkFBVXFRLE9BQU94YTtBQUZuQjtBQUlELE9BeEJILENBd0JJOztBQUVGLFNBQUssMkJBQUw7QUFDQTtBQUNFLDRCQUNLOFAsS0FETDtBQUVFM0Ysb0JBQVU7QUFGWjtBQUlELE9BaENILENBZ0NJOztBQUVGLFNBQUssVUFBTDtBQUNBO0FBQ0UsWUFBTWpLLFdBQVc0UCxNQUFNNVAsUUFBdkI7QUFDQTRQLGdCQUFReUssVUFBUjtBQUNBLDRCQUNLekssS0FETCxJQUNZNVAsVUFBVUE7QUFEdEI7QUFHRCxPQXpDSCxDQXlDSTs7QUF6Q0osR0FGMEQsQ0E2Q3hEOztBQUVGLFNBQU80UCxLQUFQLENBL0MwRCxDQStDN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0F0REl5SyxVOztnQ0FLa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDREFBLE87QUFKeEIsSUFBTUMsYUFBYTtBQUNqQmxSLGFBQVc7QUFETSxDQUFuQjs7QUFJZSxTQUFTaVIsT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsWUFBTTBiLFFBQVEsQ0FBQzNMLE1BQU16RyxTQUFyQjtBQUNBLDRCQUNLeUcsS0FETDtBQUVFekcscUJBQVdvUztBQUZiO0FBSUQsT0FUSCxDQVNJOztBQVRKLEdBRjBELENBYXhEOztBQUVGLFNBQU8zTCxLQUFQLENBZjBELENBZTdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBckJJeUssVTs7Z0NBSWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0VBQSxPOztBQU54Qjs7Ozs7O0FBRUEsSUFBTUMsYUFBYTtBQUNqQkYsWUFBVTtBQURPLENBQW5COztBQUllLFNBQVNDLE9BQVQsR0FBNkM7QUFBQSxNQUE1QnhLLEtBQTRCLHVFQUFwQnlLLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96YSxJQUFmOztBQUVFLFNBQUssbUJBQUw7QUFDQTtBQUNFLDZCQUFTbUUsS0FBVCxDQUFlLDRCQUFmLEVBQTZDLHVFQUE3QztBQUNBLDRCQUNLNEwsS0FETDtBQUVFdUssb0JBQVU7QUFGWjtBQUlELE9BVEgsQ0FTSTs7QUFFRixTQUFLLGdCQUFMO0FBQ0E7QUFDRSw2QkFBU25XLEtBQVQsQ0FBZSw0QkFBZixpQkFBMERzVyxPQUFPeGEsT0FBakU7QUFDQSw0QkFDSzhQLEtBREw7QUFFRXVLLG9CQUFVO0FBRlo7QUFJRCxPQWxCSCxDQWtCSTs7QUFFRixTQUFLLDJCQUFMO0FBQ0E7QUFDRSw2QkFBU25XLEtBQVQsQ0FBZSxRQUFmLEVBQXlCLDZKQUF6QjtBQUNBLDRCQUNLNEwsS0FETDtBQUVFdUssb0JBQVU7QUFGWjtBQUlELE9BM0JILENBMkJJOztBQUVGLFNBQUsseUJBQUw7QUFDQTtBQUNFLDZCQUFTblcsS0FBVCxDQUFlLGdDQUFmLG1NQUU2QnNXLE9BQU94YSxPQUZwQzs7QUFJQSw0QkFDSzhQLEtBREw7QUFFRXVLLG9CQUFVO0FBRlo7QUFJRCxPQXZDSCxDQXVDSTs7QUFFRixTQUFLLGtCQUFMO0FBQ0E7QUFDRSw2QkFBU25XLEtBQVQsQ0FBZSwyQkFBZixFQUE0QyxzRkFBNUM7QUFDQSw0QkFDSzRMLEtBREw7QUFFRXVLLG9CQUFVO0FBRlo7QUFJRCxPQWhESCxDQWdESTs7QUFFRixTQUFLLHdCQUFMO0FBQ0E7QUFDRSw2QkFBU25XLEtBQVQsQ0FBZSwrQkFBZixrTUFFNkJzVyxPQUFPeGEsT0FGcEM7O0FBSUEsNEJBQ0s4UCxLQURMO0FBRUV1SyxvQkFBVTtBQUZaO0FBSUQsT0E1REgsQ0E0REk7O0FBRUYsU0FBSyxVQUFMO0FBQ0E7QUFDRXZLLGdCQUFReUssVUFBUjtBQUNBLDRCQUNLekssS0FETDtBQUVFeUs7QUFGRjtBQUlELE9BckVILENBcUVJOztBQXJFSixHQUYwRCxDQXlFeEQ7O0FBRUYsU0FBT3pLLEtBQVAsQ0EzRTBELENBMkU3QztBQUVkLEMsQ0FBQzs7Ozs7Ozs7O2dDQWpGSXlLLFU7O2dDQUlrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNEQUEsTztBQUx4QixJQUFNQyxhQUFhO0FBQ2pCekosV0FBUyxLQURRO0FBRWpCaUMsa0JBQWdCO0FBRkMsQ0FBbkI7O0FBS2UsU0FBU3VILE9BQVQsR0FBNkM7QUFBQSxNQUE1QnhLLEtBQTRCLHVFQUFwQnlLLFVBQW9CO0FBQUEsTUFBUkMsTUFBUTs7O0FBRTFELFVBQVFBLE9BQU96YSxJQUFmOztBQUVFLFNBQUssNEJBQUw7QUFDQTtBQUNFLFlBQU0rUSxVQUFVLENBQUNoQixNQUFNZ0IsT0FBdkI7QUFDQSw0QkFDS2hCLEtBREw7QUFFRWdCLG1CQUFTQTtBQUZYO0FBSUQsT0FUSCxDQVNJOztBQUVGLFNBQUssbUJBQUw7QUFDQTtBQUNFLDRCQUNLaEIsS0FETDtBQUVFZ0IsbUJBQVM7QUFGWDtBQUlELE9BakJILENBaUJJO0FBQ0YsU0FBSyxtQkFBTDtBQUNBO0FBQ0UsNEJBQ0toQixLQURMO0FBRUVnQixtQkFBUztBQUZYO0FBSUQsT0F4QkgsQ0F3Qkk7QUFDRixTQUFLLHVCQUFMO0FBQ0E7QUFDRSw0QkFDS2hCLEtBREw7QUFFRWlELDBCQUFnQnlILE9BQU94YTtBQUZ6QjtBQUlELE9BL0JILENBK0JJO0FBQ0YsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0s4UCxLQURMO0FBRUVpRCwwQkFBZ0I7QUFGbEI7QUFJRCxPQXRDSCxDQXNDSTtBQUNGLFNBQUssVUFBTDtBQUNBO0FBQ0VqRCxnQkFBUXlLLFVBQVI7QUFDQSw0QkFDS3pLLEtBREw7QUFFRXlLO0FBRkY7QUFJRCxPQTlDSCxDQThDSTs7QUE5Q0osR0FGMEQsQ0FrRHhEOztBQUVGLFNBQU96SyxLQUFQLENBcEQwRCxDQW9EN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0EzREl5SyxVOztnQ0FLa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQ0FBLE87QUFOeEIsSUFBTUMsYUFBYTtBQUNqQnpKLFdBQVMsS0FEUTtBQUVqQjRCLG1CQUFpQixFQUZBO0FBR2pCdEIsZUFBYTtBQUhJLENBQW5COztBQU1lLFNBQVNrSixPQUFULEdBQTZDO0FBQUEsTUFBNUJ4SyxLQUE0Qix1RUFBcEJ5SyxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPemEsSUFBZjs7QUFFRSxTQUFLLGdDQUFMO0FBQ0E7QUFDRSw0QkFDSytQLEtBREw7QUFFRXNCLHVCQUFhb0osT0FBT3hhO0FBRnRCO0FBSUQsT0FSSCxDQVFJOztBQUVGLFNBQUssa0NBQUw7QUFDQTtBQUNFLDRCQUNLOFAsS0FETDtBQUVFc0IsdUJBQWE7QUFGZjtBQUlELE9BaEJILENBZ0JJOztBQUVGLFNBQUssNkJBQUw7QUFDQTtBQUNFLFlBQU1OLFVBQVUsQ0FBQ2hCLE1BQU1nQixPQUF2QjtBQUNBLDRCQUNLaEIsS0FETDtBQUVFZ0IsbUJBQVNBLE9BRlg7QUFHRU0sdUJBQWE7QUFIZjtBQUtELE9BMUJILENBMEJJOztBQUVGLFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLdEIsS0FETDtBQUVFZ0IsbUJBQVM7QUFGWDtBQUlELE9BbENILENBa0NJO0FBQ0YsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0toQixLQURMO0FBRUVnQixtQkFBUztBQUZYO0FBSUQsT0F6Q0gsQ0F5Q0k7QUFDRixTQUFLLHdCQUFMO0FBQ0E7QUFDRSw0QkFDS2hCLEtBREw7QUFFRTRDLDJCQUFpQjhILE9BQU94YTtBQUYxQjtBQUlELE9BaERILENBZ0RJO0FBQ0YsU0FBSyxxQkFBTDtBQUNBO0FBQ0UsNEJBQ0s4UCxLQURMO0FBRUU0QywyQkFBaUI7QUFGbkI7QUFJRCxPQXZESCxDQXVESTs7QUFFRixTQUFLLFVBQUw7QUFDQTtBQUNFNUMsZ0JBQVF5SyxVQUFSO0FBQ0EsNEJBQ0t6SyxLQURMO0FBRUV5SztBQUZGO0FBSUQsT0FoRUgsQ0FnRUk7O0FBaEVKLEdBRjBELENBb0V4RDs7QUFFRixTQUFPekssS0FBUCxDQXRFMEQsQ0FzRTdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBOUVJeUssVTs7Z0NBTWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0VBQSxPO0FBUnhCLElBQU1DLGFBQWE7QUFDakJqSCxhQUFXLEtBRE07QUFFakJDLGFBQVcsTUFGTTtBQUdqQkksY0FBWSxDQUhLO0FBSWpCSSxjQUFZLEVBSks7QUFLakJELFlBQVU7QUFMTyxDQUFuQjs7QUFRZSxTQUFTd0csT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyxnQkFBTDtBQUNBO0FBQ0UsNEJBQ0srUCxLQURMO0FBRUV3RCxxQkFBVztBQUZiO0FBSUQsT0FSSCxDQVFJOztBQUVGLFNBQUssZ0JBQUw7QUFDQTtBQUNFLDRCQUNLeEQsS0FETDtBQUVFd0QscUJBQVc7QUFGYjtBQUlELE9BaEJILENBZ0JJOztBQUVGLFNBQUssbUJBQUw7QUFDQTtBQUNFLDRCQUNLeEQsS0FETDtBQUVFeUQscUJBQVdpSCxPQUFPeGE7QUFGcEI7QUFJRCxPQXhCSCxDQXdCSTs7QUFFRixTQUFLLG9CQUFMO0FBQ0E7QUFDRSw0QkFDSzhQLEtBREw7QUFFRTZELHNCQUFZNkcsT0FBT3hhO0FBRnJCO0FBSUQ7O0FBRUQsU0FBSyxrQkFBTDtBQUNBO0FBQ0UsNEJBQ0s4UCxLQURMO0FBRUVnRSxvQkFBVTBHLE9BQU94YTtBQUZuQjtBQUlEOztBQUVELFNBQUssb0JBQUw7QUFDQTtBQUNFLDRCQUNLOFAsS0FETDtBQUVFaUUsc0JBQVl5RyxPQUFPeGE7QUFGckI7QUFJRDs7QUFFRCxTQUFLLFVBQUw7QUFDQTtBQUNFOFAsZ0JBQVF5SyxVQUFSO0FBQ0EsNEJBQ0t6SyxLQURMLElBQ1l5SztBQURaO0FBR0QsT0F4REgsQ0F3REk7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDS3pLLEtBREw7QUFFRXlELHFCQUFXaUgsT0FBT3hhLE9BQVAsQ0FBZXFULEdBQWYsQ0FBbUJFLFNBRmhDO0FBR0VJLHNCQUFZNkcsT0FBT3hhLE9BQVAsQ0FBZXFULEdBQWYsQ0FBbUJNLFVBSGpDO0FBSUVJLHNCQUFZeUcsT0FBT3hhLE9BQVAsQ0FBZXFULEdBQWYsQ0FBbUJVLFVBSmpDO0FBS0VELG9CQUFVMEcsT0FBT3hhLE9BQVAsQ0FBZXFULEdBQWYsQ0FBbUJTO0FBTC9CO0FBT0Q7O0FBbkVILEdBRjBELENBdUV4RDs7QUFFRixTQUFPaEUsS0FBUCxDQXpFMEQsQ0F5RTdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBbkZJeUssVTs7Z0NBUWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0ZBQSxPO0FBTnhCLElBQU1DLGFBQWE7QUFDakJqSCxhQUFXLEtBRE07QUFFakIwQyxVQUFRLElBRlM7QUFHakIwRixpQkFBZTtBQUhFLENBQW5COztBQU1lLFNBQVNwQixPQUFULEdBQTZDO0FBQUEsTUFBNUJ4SyxLQUE0Qix1RUFBcEJ5SyxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPemEsSUFBZjs7QUFFRSxTQUFLLG9CQUFMO0FBQ0E7QUFDRSw0QkFDSytQLEtBREw7QUFFRXdELHFCQUFXO0FBRmI7QUFJRCxPQVJILENBUUk7O0FBRUYsU0FBSyxvQkFBTDtBQUNBO0FBQ0UsNEJBQ0t4RCxLQURMO0FBRUV3RCxxQkFBVztBQUZiO0FBSUQsT0FoQkgsQ0FnQkk7O0FBRUYsU0FBSyxzQkFBTDtBQUNBO0FBQ0UsWUFBTXFJLFlBQVk3TCxNQUFNa0csTUFBeEI7QUFDQSw0QkFDS2xHLEtBREw7QUFFRWtHLGtCQUFRLENBQUMyRjtBQUZYO0FBSUQsT0F6QkgsQ0F5Qkk7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsWUFBTUMsY0FBYzlMLE1BQU00TCxhQUExQjtBQUNBLDRCQUNLNUwsS0FETDtBQUVFNEwseUJBQWUsQ0FBQ0U7QUFGbEI7QUFJRCxPQWxDSCxDQWtDSTs7QUFFRixTQUFLLFVBQUw7QUFDQTtBQUNFOUwsZ0JBQVF5SyxVQUFSO0FBQ0EsNEJBQ0t6SyxLQURMLElBQ1l5SztBQURaO0FBR0QsT0ExQ0gsQ0EwQ0k7O0FBMUNKLEdBRjBELENBOEN4RDs7QUFFRixTQUFPekssS0FBUCxDQWhEMEQsQ0FnRDdDO0FBRWQsQyxDQUFDOzs7Ozs7Ozs7Z0NBeERJeUssVTs7Z0NBTWtCRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2lCQUEsTztBQXZCeEIsSUFBTXVCLGtCQUFrQjtBQUN0QnpNLE1BQUksQ0FEa0I7QUFFdEJ1RyxlQUFhLEVBRlM7QUFHdEJuTSxRQUFNLEVBSGdCO0FBSXRCaEksVUFBUSxFQUpjO0FBS3RCTyxRQUFNLEVBTGdCO0FBTXRCb04sYUFBVyxFQU5XO0FBT3RCa0UsT0FBSyxFQVBpQjtBQVF0QnFCLFNBQU8sS0FSZTtBQVN0QlEsWUFBVTs7QUFUWSxDQUF4Qjs7QUFhQSxJQUFNcUYsYUFBYTtBQUNqQnBLLFNBQU8sRUFEVTtBQUVqQnFHLGNBQVlxRixlQUZLO0FBR2pCekwsYUFBVyxLQUhNO0FBSWpCMEwsZ0JBQWMsQ0FKRztBQUtqQkMsdUJBQXFCLEtBTEo7QUFNakJDLDBCQUF3Qjs7QUFOUCxDQUFuQjs7QUFVZSxTQUFTMUIsT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyxXQUFMO0FBQ0E7QUFDRSw0QkFDSytQLEtBREw7QUFFRTBHLHNCQUFZcUYsZUFGZDtBQUdFekwscUJBQVcsS0FIYjtBQUlFMEwsd0JBQWMsQ0FKaEI7QUFLRUMsK0JBQXFCLEtBTHZCO0FBTUVDLGtDQUF3QjtBQU4xQjtBQVFELE9BWkgsQ0FZSTs7QUFFRixTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDS2xNLEtBREw7QUFFRWlNLCtCQUFxQjtBQUZ2QjtBQUlELE9BcEJILENBb0JJOztBQUVGLFNBQUsscUJBQUw7QUFDQTtBQUNFLDRCQUNLak0sS0FETDtBQUVFa00sa0NBQXdCO0FBRjFCO0FBSUQsT0E1QkgsQ0E0Qkk7O0FBRUYsU0FBSyxrQkFBTDtBQUNBO0FBQ0UsNEJBQ0tsTSxLQURMO0FBRUVpTSwrQkFBcUI7QUFGdkI7QUFJRCxPQXBDSCxDQW9DSTs7QUFFRixTQUFLLHFCQUFMO0FBQ0E7QUFDRSw0QkFDS2pNLEtBREw7QUFFRWtNLGtDQUF3QjtBQUYxQjtBQUlELE9BNUNILENBNENJOztBQUVGLFNBQUssc0JBQUw7QUFDQTtBQUNFLDRCQUNLbE0sS0FETDtBQUVFSyxpQkFBTztBQUZUO0FBSUQsT0FwREgsQ0FvREk7O0FBRUYsU0FBSyx1QkFBTDtBQUNBO0FBQ0UsNEJBQ0tMLEtBREw7QUFFRUssaUJBQU9xSyxPQUFPeGE7QUFGaEI7QUFJRCxPQTVESCxDQTRESTs7QUFFRixTQUFLLFVBQUw7QUFDQTtBQUNFLFlBQU13SixPQUFPL0MsS0FBS3dWLEtBQUwsQ0FBV3pCLE9BQU94YSxPQUFQLENBQWV3SixJQUExQixDQUFiO0FBQ0EsWUFBTWhJLFNBQVNpRixLQUFLd1YsS0FBTCxDQUFXekIsT0FBT3hhLE9BQVAsQ0FBZXdCLE1BQTFCLENBQWY7QUFDQSxZQUFNTyxPQUFPMEUsS0FBS3dWLEtBQUwsQ0FBV3pCLE9BQU94YSxPQUFQLENBQWUrQixJQUExQixDQUFiO0FBQ0EsWUFBTXNSLE1BQU01TSxLQUFLd1YsS0FBTCxDQUFXekIsT0FBT3hhLE9BQVAsQ0FBZXFULEdBQTFCLENBQVo7O0FBRUEsWUFBTS9KLE9BQU87QUFDWDhGLGNBQUlvTCxPQUFPeGEsT0FBUCxDQUFlb1AsRUFEUjtBQUVYdUcsdUJBQWE2RSxPQUFPeGEsT0FBUCxDQUFlMlYsV0FGakI7QUFHWG5NLGdCQUFNQSxJQUhLO0FBSVhoSSxrQkFBUUEsTUFKRztBQUtYTyxnQkFBTUEsSUFMSztBQU1Yc1IsZUFBS0EsR0FOTTtBQU9YcUIsaUJBQU84RixPQUFPeGEsT0FBUCxDQUFlMFUsS0FQWDtBQVFYUSxvQkFBVXNGLE9BQU94YSxPQUFQLENBQWVrVixRQVJkO0FBU1g0QyxtQkFBUyxJQUFJb0UsSUFBSixDQUFTMUIsT0FBT3hhLE9BQVAsQ0FBZThYLE9BQXhCLENBVEU7QUFVWDRDLG1CQUFTLElBQUl3QixJQUFKLENBQVMxQixPQUFPeGEsT0FBUCxDQUFlMGEsT0FBeEI7QUFWRSxTQUFiO0FBWUEsNEJBQ0s1SyxLQURMO0FBRUUwRyxzQkFBWWxOLElBRmQ7QUFHRThHLHFCQUFXO0FBSGI7QUFLRCxPQXRGSCxDQXNGSTs7QUFFRixTQUFLLGFBQUw7QUFDQTtBQUNFLDRCQUNLTixLQURMO0FBRUVNLHFCQUFXO0FBRmI7QUFJRCxPQTlGSCxDQThGSTs7QUFFRixTQUFLLGdCQUFMO0FBQ0E7QUFDRSw0QkFDS04sS0FETDtBQUVFTSxxQkFBVztBQUZiO0FBSUQsT0F0R0gsQ0FzR0k7O0FBRUYsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsNEJBQ0tOLEtBREw7QUFFRU0scUJBQVc7QUFGYjtBQUlELE9BOUdILENBOEdJOztBQUVGLFNBQUssVUFBTDtBQUNBO0FBQ0UsWUFBTUQsUUFBUUwsTUFBTUssS0FBcEI7QUFDQUwsZ0JBQVF5SyxVQUFSO0FBQ0EsNEJBQ0t6SyxLQURMLElBQ1lLLE9BQU9BO0FBRG5CO0FBR0QsT0F2SEgsQ0F1SEk7O0FBRUYsU0FBSyxhQUFMO0FBQ0E7QUFDRSw0QkFDS0wsS0FETDtBQUVFMEcsc0JBQVlnRSxPQUFPeGEsT0FGckI7QUFHRThiLHdCQUFjdEIsT0FBT3hhLE9BQVAsQ0FBZW9QO0FBSC9CO0FBS0Q7O0FBRUQsU0FBSyxnQkFBTDtBQUNBO0FBQ0UsWUFBTTlGLFFBQU91UyxlQUFiO0FBQ0F2UyxjQUFLRSxJQUFMLEdBQVlnUixPQUFPeGEsT0FBUCxDQUFld0osSUFBM0I7QUFDQUYsY0FBSzlILE1BQUwsR0FBY2daLE9BQU94YSxPQUFQLENBQWV3QixNQUE3QjtBQUNBLDRCQUNLc08sS0FETDtBQUVFMEcsc0JBQVlsTjtBQUZkO0FBSUQ7O0FBRUQsU0FBSyxpQkFBTDtBQUNBO0FBQ0UsWUFBTUEsU0FBT3VTLGVBQWI7QUFDQXZTLGVBQUtFLElBQUwsR0FBWWdSLE9BQU94YSxPQUFQLENBQWV3SixJQUEzQjtBQUNBRixlQUFLOUgsTUFBTCxHQUFjZ1osT0FBT3hhLE9BQVAsQ0FBZXdCLE1BQTdCO0FBQ0EsNEJBQ0tzTyxLQURMO0FBRUUwRyxzQkFBWWxOO0FBRmQ7QUFJRDs7QUF0SkgsR0FGMEQsQ0EwSnhEOztBQUVGLFNBQU93RyxLQUFQLENBNUowRCxDQTRKN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0FyTEkrTCxlOztnQ0FhQXRCLFU7O2dDQVVrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNuQkFBLE87Ozs7QUFKeEIsSUFBTUMsYUFBYTtBQUNqQjlELFdBQVM7QUFEUSxDQUFuQjs7QUFJZSxTQUFTNkQsT0FBVCxHQUE2QztBQUFBLE1BQTVCeEssS0FBNEIsdUVBQXBCeUssVUFBb0I7QUFBQSxNQUFSQyxNQUFROzs7QUFFMUQsVUFBUUEsT0FBT3phLElBQWY7O0FBRUUsU0FBSyx3QkFBTDtBQUNBO0FBQ0UsNEJBQ0srUCxLQURMLHNCQUVHMEssT0FBT3hhLE9BQVAsQ0FBZWdHLE9BRmxCLEVBRTRCd1UsT0FBT3hhLE9BQVAsQ0FBZThELElBRjNDO0FBS0QsT0FUSCxDQVNJOztBQUVGLFNBQUssdUJBQUw7QUFDQTtBQUNFLDRCQUNLZ00sS0FETCxzQkFFRzBLLE9BQU94YSxPQUFQLENBQWVnRyxPQUZsQixFQUU0QixFQUY1QjtBQUtELE9BbEJILENBa0JJOztBQUVGLFNBQUssWUFBTDtBQUNBO0FBQ0UsNEJBQ0s4SixLQURMLHNCQUVHMEssT0FBT3hhLE9BQVAsQ0FBZWdHLE9BRmxCLEVBRTRCd1UsT0FBT3hhLE9BQVAsQ0FBZThELElBRjNDO0FBS0QsT0EzQkgsQ0EyQkk7O0FBM0JKOztBQStCQSxTQUFPZ00sS0FBUCxDQWpDMEQsQ0FpQzdDO0FBQ2Q7Ozs7Ozs7O2dDQXRDS3lLLFU7O2dDQUlrQkQsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNBQUEsTztBQUp4QixJQUFNQyxhQUFhO0FBQ2pCaFMsWUFBVTtBQURPLENBQW5COztBQUllLFNBQVMrUixPQUFULEdBQTZDO0FBQUEsTUFBNUJ4SyxLQUE0Qix1RUFBcEJ5SyxVQUFvQjtBQUFBLE1BQVJDLE1BQVE7OztBQUUxRCxVQUFRQSxPQUFPemEsSUFBZjs7QUFFRSxTQUFLLGtCQUFMO0FBQ0E7QUFDRSw0QkFDSytQLEtBREw7QUFFRXZILG9CQUFVO0FBRlo7QUFLRCxPQVRILENBU0k7O0FBRUYsU0FBSyxlQUFMO0FBQ0E7QUFDRSw0QkFDS3VILEtBREw7QUFFRXZILG9CQUFVO0FBRlo7QUFLRCxPQWxCSCxDQWtCSTs7QUFsQkosR0FGMEQsQ0FzQnhEOztBQUVGLFNBQU91SCxLQUFQLENBeEIwRCxDQXdCN0M7QUFFZCxDLENBQUM7Ozs7Ozs7OztnQ0E5Qkl5SyxVOztnQ0FJa0JELE87Ozs7Ozs7Ozs7Ozs7Ozs7UUNLUjZCLFUsR0FBQUEsVTtRQXVCQUMsa0IsR0FBQUEsa0I7UUF1QkFDLGMsR0FBQUEsYztRQXNCQUMsZSxHQUFBQSxlO1FBcUJBQyxTLEdBQUFBLFM7UUFlQUMsYSxHQUFBQSxhO1FBaUJBQyxTLEdBQUFBLFM7QUFsSWhCO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFNBQVMsbUJBQUF0UixDQUFRLEdBQVIsQ0FBZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVMrUSxVQUFULENBQW9CbFMsV0FBcEIsRUFBaUNHLGNBQWpDLEVBQWlENUksTUFBakQsRUFBeUQ7O0FBRTlELE1BQU1zWixVQUFVN1EsWUFBWS9DLEdBQVosQ0FBZ0IsZ0JBQVE7O0FBRXRDLFFBQU15VixVQUFVOVgsSUFBaEI7O0FBRUEsUUFBTWYsT0FBTzhZLGFBQWEvWCxLQUFLcEUsT0FBbEIsRUFBMkJvRSxLQUFLOEYsR0FBaEMsRUFBcUM5RixLQUFLMEgsUUFBMUMsRUFBb0RuQyxjQUFwRCxFQUFvRTVJLE1BQXBFLENBQWI7O0FBRUFtYixZQUFRM08sUUFBUixHQUFtQmxLLEtBQUtrSyxRQUF4QjtBQUNBMk8sWUFBUS9PLFdBQVIsR0FBc0I5SixLQUFLOEosV0FBM0I7QUFDQStPLFlBQVFqTyxnQkFBUixHQUEyQjVLLEtBQUs0SyxnQkFBaEM7QUFDQWlPLFlBQVExTyxrQkFBUixHQUE2Qm5LLEtBQUttSyxrQkFBbEM7QUFDQTBPLFlBQVFoUCxVQUFSLEdBQXFCN0osS0FBSzZKLFVBQTFCOztBQUVBLFdBQU9nUCxPQUFQO0FBRUQsR0FkZSxDQUFoQjs7QUFnQkEsU0FBTyxFQUFDNWMsTUFBTSxjQUFQLEVBQXVCQyxTQUFTOGEsT0FBaEMsRUFBUDtBQUVEOztBQUVEO0FBQ08sU0FBU3NCLGtCQUFULENBQTRCblMsV0FBNUIsRUFBeUMvSSxJQUF6QyxFQUErQ3FMLFFBQS9DLEVBQXlEbkMsY0FBekQsRUFBeUU1SSxNQUF6RSxFQUFpRjs7QUFFdEYsTUFBTW1OLGNBQWMxRSxZQUFZckksU0FBWixDQUFzQjtBQUFBLFdBQVFpRCxLQUFLc0ksSUFBTCxJQUFhak0sSUFBckI7QUFBQSxHQUF0QixDQUFwQixDQUZzRixDQUVqQjs7QUFFckUsTUFBTUYsTUFBTzJOLGVBQWUsQ0FBQyxDQUFqQixHQUFvQjtBQUM1QjtBQUNBNU8sVUFBTSwyQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQURRLEdBS1I7QUFDQUQsVUFBTSxhQUROO0FBRUFDLGFBQVM7QUFDUDZFLFlBQU1nWSxnQkFBZ0I1UyxXQUFoQixFQUE2QjBFLFdBQTdCLEVBQTBDMUUsWUFBWTBFLFdBQVosRUFBeUJoRSxHQUFuRSxFQUF3RTRCLFFBQXhFLEVBQWtGbkMsY0FBbEYsRUFBa0c1SSxNQUFsRyxFQUNKeUksWUFBWTBFLFdBQVosRUFBeUJ4QixJQURyQixDQURDO0FBR1B4TSxhQUFPZ087QUFIQTtBQUZULEdBTEo7O0FBY0EsU0FBTzNOLEdBQVA7QUFFRDs7QUFFRDtBQUNPLFNBQVNxYixjQUFULENBQXdCcFMsV0FBeEIsRUFBcUMvSSxJQUFyQyxFQUEyQ3NMLElBQTNDLEVBQWlEO0FBQ3RELE1BQU1zUSxVQUFVLENBQUN0USxJQUFELEdBQVEsR0FBUixHQUFjQSxJQUE5QjtBQUNBLE1BQU1tQyxjQUFjMUUsWUFBWXJJLFNBQVosQ0FBc0I7QUFBQSxXQUFRaUQsS0FBS3NJLElBQUwsSUFBYWpNLElBQXJCO0FBQUEsR0FBdEIsQ0FBcEIsQ0FGc0QsQ0FFZTs7QUFFckUsTUFBTUYsTUFBTzJOLGVBQWUsQ0FBQyxDQUFqQixHQUFvQjtBQUM1QjtBQUNBNU8sVUFBTSwyQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQURRLEdBS1I7QUFDQUQsVUFBTSx1QkFETjtBQUVBQyxhQUFTO0FBQ1B3TSxZQUFNc1EsT0FEQztBQUVQbmMsYUFBT2dPO0FBRkE7QUFGVCxHQUxKOztBQWFBLFNBQU8zTixHQUFQO0FBRUQ7O0FBRUQ7QUFDTyxTQUFTc2IsZUFBVCxDQUF5QnBiLElBQXpCLEVBQStCeUosR0FBL0IsRUFBb0N6SyxRQUFwQyxFQUE4QytKLFdBQTlDLEVBQTJERyxjQUEzRCxFQUEyRTVJLE1BQTNFLEVBQW1GcUosYUFBbkYsRUFBa0dDLFVBQWxHLEVBQThHOztBQUVuSCxNQUFNaVMsVUFBVSxLQUFoQjs7QUFFQSxNQUFNVCxrQkFBa0JwYyxTQUFTMEIsU0FBVCxDQUFtQixtQkFBVztBQUNwRCxXQUFPbkIsUUFBUVMsSUFBUixJQUFnQkEsSUFBaEIsSUFBd0JULFFBQVFtTSxPQUFSLElBQW1CMUwsSUFBbEQ7QUFDRCxHQUZ1QixDQUF4QixDQUptSCxDQU1oSDs7QUFFSCxNQUFNRixNQUFPc2IsbUJBQW1CLENBQUMsQ0FBckIsR0FBd0I7QUFDaEM7QUFDQXZjLFVBQU0sbUJBRE47QUFFQUMsYUFBUyxDQUFDO0FBRlYsR0FEUSxHQUtSZ2QsY0FBYzliLElBQWQsRUFBb0J5SixHQUFwQixFQUF5QnpLLFFBQXpCLEVBQW1DK0osV0FBbkMsRUFBZ0RHLGNBQWhELEVBQWdFa1MsZUFBaEUsRUFBaUY5YSxNQUFqRixFQUF5RnViLE9BQXpGLENBTEo7O0FBT0EsU0FBTy9iLEdBQVA7QUFFRDs7QUFFRDs7QUFFTyxTQUFTdWIsU0FBVCxDQUFvQnJiLElBQXBCLEVBQTBCeUosR0FBMUIsRUFBK0JWLFdBQS9CLEVBQTRDRyxjQUE1QyxFQUE0RDVJLE1BQTVELEVBQW9FOztBQUV6RSxNQUFNbU4sY0FBYzFFLFlBQVlySSxTQUFaLENBQXNCO0FBQUEsV0FBUWlELEtBQUtzSSxJQUFMLElBQWFqTSxJQUFyQjtBQUFBLEdBQXRCLENBQXBCO0FBQ0EsTUFBTStiLFNBQVM3YSxXQUFXdUksR0FBWCxDQUFmO0FBQ0EsTUFBTTNKLE1BQU07QUFDVmpCLFVBQU0sYUFESTtBQUVWQyxhQUFTO0FBQ1A2RSxZQUFNZ1ksZ0JBQWdCNVMsV0FBaEIsRUFBNkIwRSxXQUE3QixFQUEwQ3NPLE1BQTFDLEVBQWtEaFQsWUFBWTBFLFdBQVosRUFBeUJwQyxRQUEzRSxFQUFxRm5DLGNBQXJGLEVBQXFHNUksTUFBckcsRUFDSnlJLFlBQVkwRSxXQUFaLEVBQXlCeEIsSUFEckIsQ0FEQztBQUdQeE0sYUFBT2dPO0FBSEE7QUFGQyxHQUFaO0FBUUEsU0FBTzNOLEdBQVA7QUFDRDs7QUFFTSxTQUFTd2IsYUFBVCxDQUF3QnRiLElBQXhCLEVBQThCeUosR0FBOUIsRUFBbUNWLFdBQW5DLEVBQWdERyxjQUFoRCxFQUFnRTVJLE1BQWhFLEVBQXdFOztBQUU3RSxNQUFNbU4sY0FBYzFFLFlBQVlySSxTQUFaLENBQXNCO0FBQUEsV0FBUWlELEtBQUtwRSxPQUFMLENBQWFTLElBQWIsSUFBcUJBLElBQXJCLElBQTZCMkQsS0FBS3BFLE9BQUwsQ0FBYW1NLE9BQWIsSUFBd0IxTCxJQUE3RDtBQUFBLEdBQXRCLENBQXBCO0FBQ0EsTUFBTStiLFNBQVM3YSxXQUFXdUksR0FBWCxDQUFmO0FBQ0EsTUFBTTNKLE1BQU07QUFDVmpCLFVBQU0sYUFESTtBQUVWQyxhQUFTO0FBQ1A2RSxZQUFNZ1ksZ0JBQWdCNVMsV0FBaEIsRUFBNkIwRSxXQUE3QixFQUEwQ3NPLE1BQTFDLEVBQWtEaFQsWUFBWTBFLFdBQVosRUFBeUJwQyxRQUEzRSxFQUFxRm5DLGNBQXJGLEVBQXFHNUksTUFBckcsRUFDSnlJLFlBQVkwRSxXQUFaLEVBQXlCeEIsSUFEckIsQ0FEQztBQUdQeE0sYUFBT2dPO0FBSEE7QUFGQyxHQUFaO0FBUUEsU0FBTzNOLEdBQVA7QUFDRDs7QUFFRDs7QUFFTyxTQUFTeWIsU0FBVCxDQUFvQnZiLElBQXBCLEVBQTBCZ2MsUUFBMUIsRUFBb0NqVCxXQUFwQyxFQUFpREcsY0FBakQsRUFBaUU1SSxNQUFqRSxFQUF5RTs7QUFFOUUsTUFBTW1OLGNBQWMxRSxZQUFZckksU0FBWixDQUFzQjtBQUFBLFdBQVFpRCxLQUFLcEUsT0FBTCxDQUFhUyxJQUFiLElBQXFCQSxJQUE3QjtBQUFBLEdBQXRCLENBQXBCO0FBQ0EsTUFBTStiLFNBQVNDLFdBQVc5YSxXQUFXNkgsWUFBWTBFLFdBQVosRUFBeUJoRSxHQUF6QixHQUErQixDQUExQyxDQUFYLEdBQTBEdkksV0FBVzZILFlBQVkwRSxXQUFaLEVBQXlCaEUsR0FBekIsR0FBK0IsQ0FBMUMsQ0FBekU7QUFDQSxNQUFNM0osTUFBTTtBQUNWakIsVUFBTSxhQURJO0FBRVZDLGFBQVM7QUFDUDZFLFlBQU1nWSxnQkFBZ0I1UyxXQUFoQixFQUE2QjBFLFdBQTdCLEVBQTBDc08sTUFBMUMsRUFBa0RoVCxZQUFZMEUsV0FBWixFQUF5QnBDLFFBQTNFLEVBQXFGbkMsY0FBckYsRUFBcUc1SSxNQUFyRyxFQUNKeUksWUFBWTBFLFdBQVosRUFBeUJ4QixJQURyQixDQURDO0FBR1B4TSxhQUFPZ087QUFIQTtBQUZDLEdBQVo7QUFRQSxTQUFPM04sR0FBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNnYyxhQUFULENBQXVCOWIsSUFBdkIsRUFBNkJ5SixHQUE3QixFQUFrQ3pLLFFBQWxDLEVBQTRDK0osV0FBNUMsRUFBeURHLGNBQXpELEVBQXlFa1MsZUFBekUsRUFBMEY5YSxNQUExRixFQUFrR3ViLE9BQWxHLEVBQTJHOztBQUV6RztBQUNBLE1BQU1wTyxjQUFjMUUsWUFBWXJJLFNBQVosQ0FBc0I7QUFBQSxXQUFRNEgsS0FBSy9JLE9BQUwsQ0FBYVMsSUFBYixJQUFxQkEsSUFBckIsSUFBNkJzSSxLQUFLL0ksT0FBTCxDQUFhbU0sT0FBYixJQUF3QjFMLElBQTdEO0FBQUEsR0FBdEIsQ0FBcEI7O0FBRUEsTUFBTWljLGNBQWNQLGFBQWExYyxTQUFTb2MsZUFBVCxDQUFiLEVBQXdDM1IsR0FBeEMsRUFBNkMsQ0FBN0MsRUFBZ0RQLGNBQWhELEVBQWdFNUksTUFBaEUsQ0FBcEI7O0FBRUE7QUFDQSxNQUFJdWIsT0FBSixFQUFhO0FBQ1gsUUFBTTVQLE9BQU91UCxRQUFiO0FBQ0EsUUFBTTFiLE1BQU8yTixlQUFlLENBQUMsQ0FBakIsR0FBb0I7QUFDNUI7QUFDQTVPLFlBQU0sYUFETjtBQUVBQyxlQUFTO0FBQ1BtTixjQUFNQSxJQURDO0FBRVAxTSxpQkFBU1AsU0FBU29jLGVBQVQsQ0FGRjtBQUdQM1IsYUFBS0EsR0FIRTtBQUlQNEIsa0JBQVUsQ0FKSDtBQUtQbUMsMEJBQWtCeU8sWUFBWXpPLGdCQUx2QjtBQU1QVCw0QkFBb0JrUCxZQUFZbFAsa0JBTnpCO0FBT1BELGtCQUFVbVAsWUFBWW5QLFFBUGY7QUFRUEoscUJBQWF1UCxZQUFZdlAsV0FSbEI7QUFTUHBCLGNBQU0sR0FUQztBQVVQbUIsb0JBQVl3UCxZQUFZeFA7QUFWakI7QUFGVCxLQURRLEdBaUJSO0FBQ0E1TixZQUFNLGFBRE47QUFFQUMsZUFBUztBQUNQNkUsY0FBTWdZLGdCQUFnQjVTLFdBQWhCLEVBQTZCMEUsV0FBN0IsRUFBMEMxRSxZQUFZMEUsV0FBWixFQUF5QmhFLEdBQXpCLEdBQStCQSxHQUF6RSxFQUNKVixZQUFZMEUsV0FBWixFQUF5QnBDLFFBRHJCLEVBQytCbkMsY0FEL0IsRUFDK0M1SSxNQUQvQyxFQUN1RHlJLFlBQVkwRSxXQUFaLEVBQXlCeEIsSUFEaEYsQ0FEQztBQUdQeE0sZUFBT2dPO0FBSEE7QUFGVCxLQWpCSjtBQXlCQSxXQUFPM04sR0FBUDs7QUFFRjtBQUNDLEdBOUJELE1BOEJPO0FBQ0wsUUFBTW1NLFFBQU91UCxRQUFiO0FBQ0EsUUFBTTFiLE9BQU07QUFDVmpCLFlBQU0sYUFESTtBQUVWQyxlQUFTO0FBQ1BtTixjQUFNQSxLQURDO0FBRVAxTSxpQkFBU1AsU0FBU29jLGVBQVQsQ0FGRjtBQUdQM1IsYUFBS0EsR0FIRTtBQUlQNEIsa0JBQVUsQ0FKSDtBQUtQbUMsMEJBQWtCeU8sWUFBWXpPLGdCQUx2QjtBQU1QVCw0QkFBb0JrUCxZQUFZbFAsa0JBTnpCO0FBT1BELGtCQUFVbVAsWUFBWW5QLFFBUGY7QUFRUEoscUJBQWF1UCxZQUFZdlAsV0FSbEI7QUFTUHBCLGNBQU0sR0FUQztBQVVQbUIsb0JBQVl3UCxZQUFZeFA7QUFWakI7QUFGQyxLQUFaO0FBZUEsV0FBTzNNLElBQVA7QUFDRDtBQUVGOztBQUVEO0FBQ0EsU0FBUzRiLFlBQVQsQ0FBc0JuYyxPQUF0QixFQUErQmtLLEdBQS9CLEVBQW9DeVMsZUFBcEMsRUFBcURoVCxjQUFyRCxFQUFxRTVJLE1BQXJFLEVBQTZFOztBQUUzRSxNQUFNNmIsUUFBUTFQLFdBQVdsTixPQUFYLEVBQW9CZSxNQUFwQixDQUFkOztBQUVBLE1BQU15TSxxQkFBcUJvUCxRQUFRMVMsR0FBbkM7O0FBRUEsTUFBTTJTLFdBQVdELFFBQVExUyxHQUFSLElBQWUsSUFBS3lTLGtCQUFrQixHQUF0QyxLQUErQyxJQUFLaFQsaUJBQWlCLEdBQXJFLENBQWpCOztBQUVBLE1BQU1tVCxNQUFPOWMsUUFBUXNNLFNBQVQsR0FDUnVRLFlBQVk3YyxRQUFRdU0sS0FBUixHQUFnQixHQUE1QixDQURRLEdBRVIsQ0FGSjs7QUFJQSxNQUFNd1EsTUFBTy9jLFFBQVE0TixVQUFULEdBQ1JpUCxZQUFZN2MsUUFBUTZOLE1BQVIsR0FBaUIsR0FBN0IsQ0FEUSxHQUVSLENBRko7O0FBSUEsTUFBTW1QLE1BQU9oZCxRQUFRK04sVUFBVCxHQUNSOE8sWUFBWTdjLFFBQVFnTyxNQUFSLEdBQWlCLEdBQTdCLENBRFEsR0FFUixDQUZKOztBQUlBLE1BQU1iLGNBQWMwUCxXQUFXQyxHQUFYLEdBQWlCQyxHQUFqQixHQUF1QkMsR0FBM0M7O0FBRUEsTUFBTUMseUJBQXlCTCxRQUFRMVMsR0FBUixJQUFleVMsa0JBQWtCLEdBQWpDLENBQS9CO0FBQ0EsTUFBTU8seUJBQXlCLENBQUVOLFFBQVExUyxHQUFULEdBQWdCK1Msc0JBQWpCLEtBQTRDdFQsaUJBQWlCLEdBQTdELENBQS9COztBQUVBLE1BQU1zRSxtQkFBbUJnUCx5QkFBeUJDLHNCQUFsRDs7QUFFQSxTQUFPO0FBQ0wzUCxjQUFVc1AsUUFETDtBQUVMMVAsaUJBQWFBLFdBRlI7QUFHTGMsc0JBQWtCQSxnQkFIYjtBQUlMVCx3QkFBb0JBLGtCQUpmO0FBS0xOLGdCQUFZMFA7QUFMUCxHQUFQO0FBUUQ7O0FBRUQ7QUFDQSxTQUFTUixlQUFULENBQXlCNVMsV0FBekIsRUFBc0N0SixLQUF0QyxFQUE2Q2lkLE1BQTdDLEVBQXFEUixlQUFyRCxFQUFzRWhULGNBQXRFLEVBQXNGNUksTUFBdEYsRUFBOEYyTCxJQUE5RixFQUFvRzs7QUFFbEcsTUFBTXJKLE9BQU84WSxhQUFhM1MsWUFBWXRKLEtBQVosRUFBbUJGLE9BQWhDLEVBQXlDbWQsTUFBekMsRUFBaURSLGVBQWpELEVBQWtFaFQsY0FBbEUsRUFBa0Y1SSxNQUFsRixDQUFiOztBQUVBLFNBQU87QUFDTDJMLFVBQU1BLElBREQ7QUFFTDFNLGFBQVN3SixZQUFZdEosS0FBWixFQUFtQkYsT0FGdkI7QUFHTGlPLHNCQUFrQjVLLEtBQUs0SyxnQkFIbEI7QUFJTC9ELFNBQUtpVCxNQUpBO0FBS0xyUixjQUFVNlEsZUFMTDtBQU1MblAsd0JBQW9CbkssS0FBS21LLGtCQU5wQjtBQU9MRCxjQUFVbEssS0FBS2tLLFFBUFY7QUFRTEosaUJBQWE5SixLQUFLOEosV0FSYjtBQVNMcEIsVUFBTXZDLFlBQVl0SixLQUFaLEVBQW1CNkwsSUFUcEI7QUFVTG1CLGdCQUFZN0osS0FBSzZKO0FBVlosR0FBUDtBQVlEOztBQUVEO0FBQ0EsU0FBU0EsVUFBVCxDQUFvQmxOLE9BQXBCLEVBQTZCZSxNQUE3QixFQUFxQzs7QUFFbkMsTUFBSUEsT0FBTzBaLFVBQVAsSUFBcUIsU0FBekIsRUFBb0MsT0FBT3phLFFBQVE0YyxLQUFmOztBQUVwQyxNQUFJN2IsT0FBTzBaLFVBQVAsSUFBcUIsU0FBckIsSUFBa0N6YSxRQUFRb2QsU0FBOUMsRUFBeUQsT0FBT3BkLFFBQVFxZCxNQUFmO0FBQ3pELE1BQUl0YyxPQUFPMFosVUFBUCxJQUFxQixTQUF6QixFQUFvQyxPQUFPemEsUUFBUTRjLEtBQWY7O0FBRXBDLE1BQUk3YixPQUFPMFosVUFBUCxJQUFxQixTQUFyQixJQUFrQ3phLFFBQVFzZCxTQUE5QyxFQUF5RCxPQUFPdGQsUUFBUXVkLE1BQWY7QUFDekQsTUFBSXhjLE9BQU8wWixVQUFQLElBQXFCLFNBQXJCLElBQWtDemEsUUFBUW9kLFNBQTlDLEVBQXlELE9BQU9wZCxRQUFRcWQsTUFBZjtBQUN6RCxNQUFJdGMsT0FBTzBaLFVBQVAsSUFBcUIsU0FBekIsRUFBb0MsT0FBT3phLFFBQVE0YyxLQUFmOztBQUVwQyxTQUFPNWMsUUFBUTRjLEtBQWY7QUFFRDs7Ozs7Ozs7Z0NBaFJlbEIsVTs7Z0NBdUJBQyxrQjs7Z0NBdUJBQyxjOztnQ0FzQkFDLGU7O2dDQXFCQUMsUzs7Z0NBZUFDLGE7O2dDQWlCQUMsUzs7Z0NBb0JQTyxhOztnQ0E2REFKLFk7O2dDQXNDQUMsZTs7Z0NBbUJBbFAsVSIsImZpbGUiOiJzYWxlcy01YWJiYWFhNmM0NDU0OWJkYTc5ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XHJcblxyXG4gIHJldHVybiB7dHlwZTogJ1BST0RVQ1RfSElERV9QQU5FTCcsIHBheWxvYWQ6IC0xfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdCh2YWwsIHByb2R1Y3RzKSB7XHJcblxyXG4gIGNvbnN0IHRleHQgPSB2YWwuc3BsaXQoJyUnKVxyXG4gIGNvbnN0IG1hdGNocyA9IFtdXHJcblxyXG4gIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRydWVcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvZHVjdC5kZXNjcmlwdGlvbi50b1N0cmluZygpXHJcblxyXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXHJcblxyXG4gICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICBjb250cm9sID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICBtYXRjaHMucHVzaChwcm9kdWN0KVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9TRUFSQ0hfU1VDQ0VTUycsXHJcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9GQUlMJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkge1xyXG5cclxuICByZXR1cm4ge3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGNvZGV9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9hY3Rpb25zLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYW5lbCgpIHtcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXHJcbiAgY29uc3QgbWF0Y2hzID0gW11cclxuXHJcbiAgY29uc29sZS5sb2coY2xpZW50cylcclxuXHJcbiAgY2xpZW50cy5mb3JFYWNoKGNsaWVudCA9PiB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRydWVcclxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXHJcblxyXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcclxuXHJcbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUycsXHJcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX0ZBSUwnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnRTZWxlY3RlZChjb2RlLCBjbGllbnRzKSB7XHJcblxyXG4gIGNvbnN0IGNsaWVudFNlbGVjdGVkID0gY2xpZW50cy5maW5kSW5kZXgoY2xpZW50ID0+IGNsaWVudC5jb2RlID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAoY2xpZW50U2VsZWN0ZWQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ0NMSUVOVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VMRUNURUQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgY2xpZW50OiBjbGllbnRzW2NsaWVudFNlbGVjdGVkXVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyU2VsZWN0ZWQoX2lkLCB1c2Vycykge1xyXG5cclxuICBjb25zdCB1c2VyU2VsZWN0ZWQgPSB1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLl9pZCA9PSBfaWQpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAodXNlclNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdVU0VSX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1VTRVJfU0VMRUNURUQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdXNlcjogdXNlcnNbdXNlclNlbGVjdGVkXVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDbGllbnQoKSB7XHJcblxyXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXNoQW1vdW50KGFtb3VudCkge1xyXG5cclxuICBjb25zdCByZXMgPSAoYW1vdW50KSAvLyBpZiBpdHMgYSB2YWx1ZVxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxyXG4gICAgICBwYXlsb2FkOiBwYXJzZUZsb2F0KGFtb3VudClcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcclxuICAgICAgcGF5bG9hZDogMFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmRBdXRoKG51bWJlcikge1xyXG5cclxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcclxuICAgICAgcGF5bG9hZDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0FVVEgnLFxyXG4gICAgICBwYXlsb2FkOiAnJ1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmREaWdpdHMobnVtYmVyKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXHJcbiAgICAgIHBheWxvYWQ6IG51bWJlclxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxyXG4gICAgICBwYXlsb2FkOiAnJ1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkU2FsZShpZCwgc2FsZXMpIHtcclxuLy8gICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gc2FsZXMuZmlsdGVyKHNhbGUgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHNhbGUuaWQgPT0gaWRcclxuLy8gICB9KVxyXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4vLyAgICAgaWYgKGZpbHRlcmVkU2FsZXMubGVuZ3RoKSB7XHJcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSA9IG5ldyBEYXRlKGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSlcclxuLy8gICAgICAgLy8gZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSlcclxuLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnY2FydCddWydnbG9iYWxEaXNjb3VudCddKVxyXG4vLyAgICAgICBkb2N1bWVudC50aXRsZSA9IGBWZW50YSAjJHtpZH1gXHJcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NsaWVudCddWydzYWxlTG9hZGVkJ10gPSB0cnVlXHJcblxyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcclxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF0uX2lkfSlcclxuXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVF9GT1VORF9TQUxFJywgcGF5bG9hZDogaWR9KVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xyXG5cclxuLy8gICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuLy8gICBjb25zdCBtb3ZlbWVudHMgPSBrd2FyZ3MubW92ZW1lbnRzXHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbi8vICAgICBjb25zdCBkYiA9IG5ldyBQb3VjaERCKGt3YXJncy5kYilcclxuXHJcbi8vICAgICBkYi5wb3N0KGl0ZW0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogaXRlbX0pXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiByZXNwb25zZS5pZH0pXHJcblxyXG4vLyAgICAgICBpZiAoaXRlbS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7IC8vIElGIENSRURJVCBDUkVBVEUgQ1JFRElUIE1PVkVNRU5UXHJcbi8vICAgICAgICAgY29uc3QgZGIyID0gbmV3IFBvdWNoREIoJ2dlbmVyYWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCByZXNwb25zZS5pZCwgaXRlbSlcclxuXHJcbi8vICAgICAgICAgZGIyLnBvc3QobW92ZW1lbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4vLyAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7IC8vIElGIEVSUk9SIFNIT1cgTUVTU0FHRVxyXG4vLyAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIG1vdmltaWVudG8gZGUgY3LDqWRpdG8sIHBvciBmYXZvciBhbnVsZSBsYSBmYWN0dXJhIHkgY3JlZWxhXHJcbi8vICAgICAgICAgICBkZSBudWV2byBFUlJPUjogJHtlcnJ9LmApXHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgIH0gZWxzZSB7IC8vIElGIE5PVCBDUkVESVQgU0hPVyBQQU5FTFNcclxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCBzYWxlSWQsIHNhbGUpIHtcclxuXHJcbi8vICAgY29uc3Qgc29ydGVkTW92ZW1lbnRzID0gbW92ZW1lbnRzLmxlbmd0aCA+IDEgPyBtb3ZlbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPCBiLmRvY3VtZW50KSB7XHJcbi8vICAgICAgIHJldHVybiAxXHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoYS5kb2N1bWVudCA+IGIuZG9jdW1lbnQpIHtcclxuLy8gICAgICAgcmV0dXJuIC0xXHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gMFxyXG4vLyAgIH0pIDogbW92ZW1lbnRzXHJcblxyXG4vLyAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZE1vdmVtZW50cy5sZW5ndGggPiAwID8gc29ydGVkTW92ZW1lbnRzWzBdLmRvY3VtZW50ICsgMSA6IDFcclxuXHJcbi8vICAgY29uc3QgbW92ZW1lbnQgPSB7XHJcbi8vICAgICAnZG9jdW1lbnQnOiBuZXh0SWQsXHJcbi8vICAgICAnZG9jVHlwZSc6ICdDTElFTlRfTU9WRU1FTlQnLFxyXG4vLyAgICAgJ2NsaWVudElkJzogc2FsZS5jbGllbnQuX2lkLFxyXG4vLyAgICAgJ3R5cGUnOiAnQ1JFRElUJyxcclxuLy8gICAgICdhbW91bnQnOiBwYXJzZUZsb2F0KHNhbGUuY2FydC5jYXJ0VG90YWwpLFxyXG4vLyAgICAgJ2RhdGUnOiBuZXcgRGF0ZSgpLFxyXG4vLyAgICAgJ3NhbGVfaWQnOiBzYWxlSWQsXHJcbi8vICAgICAnc2FsZUlkJzogc2FsZS5pZCxcclxuLy8gICAgICdkZXNjcmlwdGlvbic6IGBWZW50YSBhIGNyw6lkaXRvIGNvbiBmYWN0dXJhICMke3NhbGUuaWR9YFxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIG1vdmVtZW50XHJcblxyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ09ORklHIERFRkFVTFQgQVhJT1NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXHJcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEVYUE9SVCBGVU5DVElPTlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR0VUIEZVTkNUSU9OUyAoUkVUUklFVkUgQUxMKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1EaXNwYXRjaChrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXHJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAvLyBJRiBUSEUgRVJST1IgSVMgVU5BVVRPUklaRUQgUEFHRSBXSUxMIFNIT1cgVEhFIE1FU1NBR0VcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURvdWJsZURpc3BhdGNoKGt3YXJncykge1xyXG5cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcclxuICBjb25zdCBzdWNjZXNzVHlwZTIgPSBrd2FyZ3Muc3VjY2Vzc1R5cGUyXHJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlMiwgcGF5bG9hZDogJyd9KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXHJcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SZXR1cm4oa3dhcmdzKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuXHJcbiAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXHJcbiAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTRVQgRlVOQ1RJT04gKFJFVFJJRVZFIElORElWSURVQUwpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgbG9va1VwVmFsdWUgPSBrd2FyZ3MubG9va1VwVmFsdWVcclxuICBjb25zdCBsb29rVXBGaWVsZCA9IGt3YXJncy5sb29rVXBGaWVsZFxyXG4gIGNvbnN0IGhpc3RvcnkgPSBrd2FyZ3MuaGlzdG9yeVxyXG4gIGNvbnN0IHJlZGlyZWN0VXJsID0ga3dhcmdzLnJlZGlyZWN0VXJsXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGNvbnNvbGUubG9nKGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKVxyXG4gICAgYXhpb3MuZ2V0KGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gSUYgVEhFUkUgSVMgTU9SRSBUSEFOIE9ORSBFTEVNRU5UIEZJTFRFUkVEXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0FURU5DScOTTicsIGBFeGlzdGUgbWFzIGRlIHVuICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsICR7a3dhcmdzLmxvb2tVcE5hbWV9OlxyXG4gICAgICAgICAgJHtrd2FyZ3MubG9va1VwVmFsdWV9LCBzZSB1dGlsaXphcsOhIGVsIHByaW1lcm8gZW4gbGlzdGEsIHBvciBsbyBxdWUgcHVlZGUgbm8gc2VyIGVsIG1pc21vIHF1ZSB1ZCBkZXNlYVxyXG4gICAgICAgICAgYWN0dWFsaXphciwgZXN0byBwdWVkZSBkZWJlcnNlIGEgdW4gZXJyb3IsIHBvciBmYXZvciByZXZpc2UgbG9zXHJcbiAgICAgICAgICBkYXRvcyBvIGNvbnRhY3RlIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hLmApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUyLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hFcnJvclR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgTm8gaGF5ICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsIHZhbG9yIGRlICR7a3dhcmdzLmxvb2tVcE5hbWV9OiAke2t3YXJncy5sb29rVXBWYWx1ZX1gLFxyXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IGhpc3RvcnkucHVzaChyZWRpcmVjdFVybCkgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIGVsIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxyXG4gICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xyXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxyXG4gIGRlbGV0ZSBpdGVtWydpZCddXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuICBjb25zdCBpc1NhbGUgPSBrd2FyZ3MuaXNTYWxlXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IGl0ZW1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBpZiAoaXNTYWxlKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVVBEQVRFIEZVTkNUSU9OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oa3dhcmdzKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIH0pXHJcblxyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW0oa3dhcmdzKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoa3dhcmdzLnN1Y2Vzc01lc3NhZ2UpIHtcclxuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRE9VQkxFIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW1zKGt3YXJncywga3dhcmdzMikge1xyXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcclxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxyXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXHJcbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXHJcblxyXG4gIGNvbnN0IGl0ZW0yID0ga3dhcmdzMi5pdGVtXHJcbiAgY29uc3QgdXJsMiA9IGt3YXJnczIudXJsXHJcbiAgY29uc3QgbG9nQ29kZTIgPSBrd2FyZ3MyLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkMiA9IGt3YXJnczIuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsMiA9IGt3YXJnczIubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbjIgPSBrd2FyZ3MyLmxvZ0Rlc2NyaXB0aW9uXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLy8gRklSU1QgUEFUQ0ggVEhFTlxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuXHJcbiAgICAgICAgLy8gU0VDT05EIFBBVENIXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICAgICAgdXJsOiB1cmwyLFxyXG4gICAgICAgICAgZGF0YTogaXRlbTJcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIFRIRU5cclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa3dhcmdzMi5zdWNlc3NNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChrd2FyZ3MyLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga3dhcmdzMi5oaXN0b3J5LnB1c2goa3dhcmdzMi5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzMi5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICAgICAgc2F2ZUxvZyhsb2dDb2RlMiwgbG9nTW9kZWwyLCBpdGVtT2xkMiwgaXRlbTIsIGxvZ0Rlc2NyaXB0aW9uMiwgdXNlcilcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBDQVRDSFxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MyLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEZJUlNUIFBBVENIIENBVENIXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gREVMRVRFIEZVTkNUSU9OIChERUxFVEUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IG1vZGVsID0ga3dhcmdzLm1vZGVsTmFtZVxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICB1cmw6IHVybFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywgJ0VsZW1lbnRvIGVsaW1pbmFkbyBzYXRpZmFjdG9yaWFtZW50ZScpXHJcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEh1Ym8gdW4gZXJyb3IgYWwgZWxpbWluYXIgZWwgJHttb2RlbH0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIExPQUQgQ09ORklHIEZVTkNUSU9OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdsb2JhbENvbmZpZyhzZWN0aW9uLCBuYW1lLCBzdWNjZXNzLCBmYWlsKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBpZiAobmFtZSkge1xyXG5cclxuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbGNvbmYvJHtzZWN0aW9ufV9fJHtuYW1lfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIFNpbmdsZSBjb25maWcgZmV0Y2hcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxwcmVmc2ApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUaGUgcHJvcGVydHkgdG8gbW9kaWZ5IGluIHJlZHVjZXJcclxuICAgICAgICBjb25zdCBjb25maWcgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICA/IHJlc3BvbnNlLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uID09IHNlY3Rpb25cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IHt9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgICAgICAgY29uZmlnLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3MsIHBheWxvYWQ6IHtkYXRhOiBkYXRhLCBzZWN0aW9uOiBzZWN0aW9ufX0pXHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTQVZFIExPRyBGVU5DVElPTiAoQ1JFQVRFIExPRylcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9nIChjb2RlLCBtb2RlbCwgb2xkT2JqZWN0LCBvYmplY3QsIGRlc2NyaXB0aW9uLCB1c2VyKSB7XHJcblxyXG4gIGNvbnN0IHByZXZPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QpXHJcbiAgY29uc3QgbmV3T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxyXG4gIGNvbnN0IHVzZXIyID0gSlNPTi5zdHJpbmdpZnkodXNlcilcclxuXHJcbiAgY29uc3QgaXRlbSA9IHtcclxuICAgIGNvZGU6IGNvZGUsXHJcbiAgICBtb2RlbDogbW9kZWwsXHJcbiAgICBwcmV2X29iamVjdDogcHJldk9iamVjdCxcclxuICAgIG5ld19vYmplY3Q6IG5ld09iamVjdCxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIHVzZXI6IHVzZXIyXHJcbiAgfVxyXG5cclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIHVybDogJy9hcGkvbG9ncy8nLFxyXG4gICAgZGF0YTogaXRlbVxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBMb2cgZGVsIG1vdmltaWVudG8sIEVSUk9SOiAke2Vycn0uYClcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBVVggRlVOQ1RJT05TXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTkVYVCBOVU1FUklDIENPREVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHROdW1lcmljQ29kZShlbGVtZW50cywgZmllbGQpIHtcclxuXHJcbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xyXG5cclxuICAgIGxldCBrZXlzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudFtmaWVsZF0pXHJcblxyXG4gICAga2V5cyA9IGtleXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICBjb25zdCBtYXggPSBrZXlzLnBvcCgpXHJcbiAgICBjb25zdCBuZXh0ID0gcGFyc2VJbnQobWF4KSArIDFcclxuICAgIHJldHVybiBuZXh0LnRvU3RyaW5nKClcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gMVxyXG5cclxufVxyXG5cclxuLy8gTkVYVCBQUkVWSU9VUyBJVEVNU1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV4dFByZXZJdGVtKGt3YXJncykge1xyXG5cclxuICBjb25zdCBjb2RlID0ga3dhcmdzLmNvZGVcclxuICBjb25zdCBpdGVtcyA9IGt3YXJncy5pdGVtc1xyXG4gIGNvbnN0IGNvZGVGaWVsZCA9IGt3YXJncy5jb2RlRmllbGRcclxuICBsZXQgcHJldmlvdXMgPSAwXHJcbiAgbGV0IG5leHQgPSAwXHJcblxyXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhW2NvZGVGaWVsZF0gLSBiW2NvZGVGaWVsZF1cclxuICB9KVxyXG5cclxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1bY29kZUZpZWxkXSA9PSBjb2RlKSB7XHJcbiAgICAgIG5leHQgPSBpbmRleCArIDFcclxuICAgICAgcHJldmlvdXMgPSBpbmRleCAtIDFcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBuZXh0Q29kZSA9IGl0ZW1zW25leHRdID8gaXRlbXNbbmV4dF1bY29kZUZpZWxkXSA6IGl0ZW1zWzBdW2NvZGVGaWVsZF1cclxuICBjb25zdCBwcmV2Q29kZSA9IGl0ZW1zW3ByZXZpb3VzXSA/IGl0ZW1zW3ByZXZpb3VzXVtjb2RlRmllbGRdIDogaXRlbXMucG9wKClbY29kZUZpZWxkXVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiB7bmV4dDogbmV4dENvZGUsIHByZXZpb3VzOiBwcmV2Q29kZX19KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9hcGkuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dChlLnJlZHV4TG9nZ2VyPWUucmVkdXhMb2dnZXJ8fHt9KX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsdCl7ZS5zdXBlcl89dCxlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KX1mdW5jdGlvbiByKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJraW5kXCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pLHQmJnQubGVuZ3RoJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhdGhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gbihlLHQscil7bi5zdXBlcl8uY2FsbCh0aGlzLFwiRVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG8oZSx0KXtvLnN1cGVyXy5jYWxsKHRoaXMsXCJOXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gaShlLHQpe2kuc3VwZXJfLmNhbGwodGhpcyxcIkRcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBhKGUsdCxyKXthLnN1cGVyXy5jYWxsKHRoaXMsXCJBXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpbmRleFwiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIml0ZW1cIix7dmFsdWU6cixlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gZihlLHQscil7dmFyIG49ZS5zbGljZSgocnx8dCkrMXx8ZS5sZW5ndGgpO3JldHVybiBlLmxlbmd0aD10PDA/ZS5sZW5ndGgrdDp0LGUucHVzaC5hcHBseShlLG4pLGV9ZnVuY3Rpb24gdShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSk7cmV0dXJuXCJvYmplY3RcIiE9PXQ/dDplPT09TWF0aD9cIm1hdGhcIjpudWxsPT09ZT9cIm51bGxcIjpBcnJheS5pc0FycmF5KGUpP1wiYXJyYXlcIjpcIltvYmplY3QgRGF0ZV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImRhdGVcIjpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRvU3RyaW5nJiYvXlxcLy4qXFwvLy50ZXN0KGUudG9TdHJpbmcoKSk/XCJyZWdleHBcIjpcIm9iamVjdFwifWZ1bmN0aW9uIGwoZSx0LHIsYyxzLGQscCl7cz1zfHxbXSxwPXB8fFtdO3ZhciBnPXMuc2xpY2UoMCk7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGQpe2lmKGMpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJmMoZyxkKSlyZXR1cm47aWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgYz9cInVuZGVmaW5lZFwiOk4oYykpKXtpZihjLnByZWZpbHRlciYmYy5wcmVmaWx0ZXIoZyxkKSlyZXR1cm47aWYoYy5ub3JtYWxpemUpe3ZhciBoPWMubm9ybWFsaXplKGcsZCxlLHQpO2gmJihlPWhbMF0sdD1oWzFdKX19fWcucHVzaChkKX1cInJlZ2V4cFwiPT09dShlKSYmXCJyZWdleHBcIj09PXUodCkmJihlPWUudG9TdHJpbmcoKSx0PXQudG9TdHJpbmcoKSk7dmFyIHk9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpLHY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpOKHQpLGI9XCJ1bmRlZmluZWRcIiE9PXl8fHAmJnBbcC5sZW5ndGgtMV0ubGhzJiZwW3AubGVuZ3RoLTFdLmxocy5oYXNPd25Qcm9wZXJ0eShkKSxtPVwidW5kZWZpbmVkXCIhPT12fHxwJiZwW3AubGVuZ3RoLTFdLnJocyYmcFtwLmxlbmd0aC0xXS5yaHMuaGFzT3duUHJvcGVydHkoZCk7aWYoIWImJm0pcihuZXcgbyhnLHQpKTtlbHNlIGlmKCFtJiZiKXIobmV3IGkoZyxlKSk7ZWxzZSBpZih1KGUpIT09dSh0KSlyKG5ldyBuKGcsZSx0KSk7ZWxzZSBpZihcImRhdGVcIj09PXUoZSkmJmUtdCE9PTApcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJvYmplY3RcIj09PXkmJm51bGwhPT1lJiZudWxsIT09dClpZihwLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5saHM9PT1lfSkubGVuZ3RoKWUhPT10JiZyKG5ldyBuKGcsZSx0KSk7ZWxzZXtpZihwLnB1c2goe2xoczplLHJoczp0fSksQXJyYXkuaXNBcnJheShlKSl7dmFyIHc7ZS5sZW5ndGg7Zm9yKHc9MDt3PGUubGVuZ3RoO3crKyl3Pj10Lmxlbmd0aD9yKG5ldyBhKGcsdyxuZXcgaSh2b2lkIDAsZVt3XSkpKTpsKGVbd10sdFt3XSxyLGMsZyx3LHApO2Zvcig7dzx0Lmxlbmd0aDspcihuZXcgYShnLHcsbmV3IG8odm9pZCAwLHRbdysrXSkpKX1lbHNle3ZhciB4PU9iamVjdC5rZXlzKGUpLFM9T2JqZWN0LmtleXModCk7eC5mb3JFYWNoKGZ1bmN0aW9uKG4sbyl7dmFyIGk9Uy5pbmRleE9mKG4pO2k+PTA/KGwoZVtuXSx0W25dLHIsYyxnLG4scCksUz1mKFMsaSkpOmwoZVtuXSx2b2lkIDAscixjLGcsbixwKX0pLFMuZm9yRWFjaChmdW5jdGlvbihlKXtsKHZvaWQgMCx0W2VdLHIsYyxnLGUscCl9KX1wLmxlbmd0aD1wLmxlbmd0aC0xfWVsc2UgZSE9PXQmJihcIm51bWJlclwiPT09eSYmaXNOYU4oZSkmJmlzTmFOKHQpfHxyKG5ldyBuKGcsZSx0KSkpfWZ1bmN0aW9uIGMoZSx0LHIsbil7cmV0dXJuIG49bnx8W10sbChlLHQsZnVuY3Rpb24oZSl7ZSYmbi5wdXNoKGUpfSxyKSxuLmxlbmd0aD9uOnZvaWQgMH1mdW5jdGlvbiBzKGUsdCxyKXtpZihyLnBhdGgmJnIucGF0aC5sZW5ndGgpe3ZhciBuLG89ZVt0XSxpPXIucGF0aC5sZW5ndGgtMTtmb3Iobj0wO248aTtuKyspbz1vW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMob1tyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG9bci5wYXRoW25dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm9bci5wYXRoW25dXT1yLnJoc319ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZT1mKGUsdCk7YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjplW3RdPXIucmhzfXJldHVybiBlfWZ1bmN0aW9uIGQoZSx0LHIpe2lmKGUmJnQmJnImJnIua2luZCl7Zm9yKHZhciBuPWUsbz0tMSxpPXIucGF0aD9yLnBhdGgubGVuZ3RoLTE6MDsrK288aTspXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5bci5wYXRoW29dXSYmKG5bci5wYXRoW29dXT1cIm51bWJlclwiPT10eXBlb2Ygci5wYXRoW29dP1tdOnt9KSxuPW5bci5wYXRoW29dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhyLnBhdGg/bltyLnBhdGhbb11dOm4sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpkZWxldGUgbltyLnBhdGhbb11dO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6bltyLnBhdGhbb11dPXIucmhzfX19ZnVuY3Rpb24gcChlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJFXCI6b1tyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjpkZWxldGUgb1tyLnBhdGhbbl1dfX1lbHNlIHN3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKGVbdF0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjplPWYoZSx0KX1yZXR1cm4gZX1mdW5jdGlvbiBnKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe3ZhciBuLG8saT1lO2ZvcihvPXIucGF0aC5sZW5ndGgtMSxuPTA7bjxvO24rKylcInVuZGVmaW5lZFwiPT10eXBlb2YgaVtyLnBhdGhbbl1dJiYoaVtyLnBhdGhbbl1dPXt9KSxpPWlbci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChpW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOmlbci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIGlbci5wYXRoW25dXX19fWZ1bmN0aW9uIGgoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWZ1bmN0aW9uKG4pe3ImJiFyKGUsdCxuKXx8ZChlLHQsbil9O2woZSx0LG4pfX1mdW5jdGlvbiB5KGUpe3JldHVyblwiY29sb3I6IFwiK0ZbZV0uY29sb3IrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCJ9ZnVuY3Rpb24gdihlKXt2YXIgdD1lLmtpbmQscj1lLnBhdGgsbj1lLmxocyxvPWUucmhzLGk9ZS5pbmRleCxhPWUuaXRlbTtzd2l0Y2godCl7Y2FzZVwiRVwiOnJldHVybltyLmpvaW4oXCIuXCIpLG4sXCLihpJcIixvXTtjYXNlXCJOXCI6cmV0dXJuW3Iuam9pbihcIi5cIiksb107Y2FzZVwiRFwiOnJldHVybltyLmpvaW4oXCIuXCIpXTtjYXNlXCJBXCI6cmV0dXJuW3Iuam9pbihcIi5cIikrXCJbXCIraStcIl1cIixhXTtkZWZhdWx0OnJldHVybltdfX1mdW5jdGlvbiBiKGUsdCxyLG4pe3ZhciBvPWMoZSx0KTt0cnl7bj9yLmdyb3VwQ29sbGFwc2VkKFwiZGlmZlwiKTpyLmdyb3VwKFwiZGlmZlwiKX1jYXRjaChlKXtyLmxvZyhcImRpZmZcIil9bz9vLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZS5raW5kLG49dihlKTtyLmxvZy5hcHBseShyLFtcIiVjIFwiK0ZbdF0udGV4dCx5KHQpXS5jb25jYXQoUChuKSkpfSk6ci5sb2coXCLigJTigJQgbm8gZGlmZiDigJTigJRcIik7dHJ5e3IuZ3JvdXBFbmQoKX1jYXRjaChlKXtyLmxvZyhcIuKAlOKAlCBkaWZmIGVuZCDigJTigJQgXCIpfX1mdW5jdGlvbiBtKGUsdCxyLG4pe3N3aXRjaChcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSkpe2Nhc2VcIm9iamVjdFwiOnJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGVbbl0/ZVtuXS5hcHBseShlLFAocikpOmVbbl07Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gZSh0KTtkZWZhdWx0OnJldHVybiBlfX1mdW5jdGlvbiB3KGUpe3ZhciB0PWUudGltZXN0YW1wLHI9ZS5kdXJhdGlvbjtyZXR1cm4gZnVuY3Rpb24oZSxuLG8pe3ZhciBpPVtcImFjdGlvblwiXTtyZXR1cm4gaS5wdXNoKFwiJWNcIitTdHJpbmcoZS50eXBlKSksdCYmaS5wdXNoKFwiJWNAIFwiK24pLHImJmkucHVzaChcIiVjKGluIFwiK28udG9GaXhlZCgyKStcIiBtcylcIiksaS5qb2luKFwiIFwiKX19ZnVuY3Rpb24geChlLHQpe3ZhciByPXQubG9nZ2VyLG49dC5hY3Rpb25UcmFuc2Zvcm1lcixvPXQudGl0bGVGb3JtYXR0ZXIsaT12b2lkIDA9PT1vP3codCk6byxhPXQuY29sbGFwc2VkLGY9dC5jb2xvcnMsdT10LmxldmVsLGw9dC5kaWZmLGM9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQudGl0bGVGb3JtYXR0ZXI7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8scyl7dmFyIGQ9by5zdGFydGVkLHA9by5zdGFydGVkVGltZSxnPW8uYWN0aW9uLGg9by5wcmV2U3RhdGUseT1vLmVycm9yLHY9by50b29rLHc9by5uZXh0U3RhdGUseD1lW3MrMV07eCYmKHc9eC5wcmV2U3RhdGUsdj14LnN0YXJ0ZWQtZCk7dmFyIFM9bihnKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShmdW5jdGlvbigpe3JldHVybiB3fSxnLG8pOmEsaj1EKHApLEU9Zi50aXRsZT9cImNvbG9yOiBcIitmLnRpdGxlKFMpK1wiO1wiOlwiXCIsQT1bXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCJdO0EucHVzaChFKSx0LnRpbWVzdGFtcCYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKSx0LmR1cmF0aW9uJiZBLnB1c2goXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCIpO3ZhciBPPWkoUyxqLHYpO3RyeXtrP2YudGl0bGUmJmM/ci5ncm91cENvbGxhcHNlZC5hcHBseShyLFtcIiVjIFwiK09dLmNvbmNhdChBKSk6ci5ncm91cENvbGxhcHNlZChPKTpmLnRpdGxlJiZjP3IuZ3JvdXAuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXAoTyl9Y2F0Y2goZSl7ci5sb2coTyl9dmFyIE49bSh1LFMsW2hdLFwicHJldlN0YXRlXCIpLFA9bSh1LFMsW1NdLFwiYWN0aW9uXCIpLEM9bSh1LFMsW3ksaF0sXCJlcnJvclwiKSxGPW0odSxTLFt3XSxcIm5leHRTdGF0ZVwiKTtpZihOKWlmKGYucHJldlN0YXRlKXt2YXIgTD1cImNvbG9yOiBcIitmLnByZXZTdGF0ZShoKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW05dKFwiJWMgcHJldiBzdGF0ZVwiLEwsaCl9ZWxzZSByW05dKFwicHJldiBzdGF0ZVwiLGgpO2lmKFApaWYoZi5hY3Rpb24pe3ZhciBUPVwiY29sb3I6IFwiK2YuYWN0aW9uKFMpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbUF0oXCIlYyBhY3Rpb24gICAgXCIsVCxTKX1lbHNlIHJbUF0oXCJhY3Rpb24gICAgXCIsUyk7aWYoeSYmQylpZihmLmVycm9yKXt2YXIgTT1cImNvbG9yOiBcIitmLmVycm9yKHksaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO3JbQ10oXCIlYyBlcnJvciAgICAgXCIsTSx5KX1lbHNlIHJbQ10oXCJlcnJvciAgICAgXCIseSk7aWYoRilpZihmLm5leHRTdGF0ZSl7dmFyIF89XCJjb2xvcjogXCIrZi5uZXh0U3RhdGUodykrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltGXShcIiVjIG5leHQgc3RhdGVcIixfLHcpfWVsc2UgcltGXShcIm5leHQgc3RhdGVcIix3KTtsJiZiKGgsdyxyLGspO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgbG9nIGVuZCDigJTigJRcIil9fSl9ZnVuY3Rpb24gUygpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PU9iamVjdC5hc3NpZ24oe30sTCxlKSxyPXQubG9nZ2VyLG49dC5zdGF0ZVRyYW5zZm9ybWVyLG89dC5lcnJvclRyYW5zZm9ybWVyLGk9dC5wcmVkaWNhdGUsYT10LmxvZ0Vycm9ycyxmPXQuZGlmZlByZWRpY2F0ZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgcilyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O2lmKGUuZ2V0U3RhdGUmJmUuZGlzcGF0Y2gpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJbcmVkdXgtbG9nZ2VyXSByZWR1eC1sb2dnZXIgbm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIHBhc3MgbG9nZ2VyIGluc3RhbmNlIGFzIG1pZGRsZXdhcmU6XFxuLy8gTG9nZ2VyIHdpdGggZGVmYXVsdCBvcHRpb25zXFxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuLy8gT3IgeW91IGNhbiBjcmVhdGUgeW91ciBvd24gbG9nZ2VyIHdpdGggY3VzdG9tIG9wdGlvbnMgaHR0cDovL2JpdC5seS9yZWR1eC1sb2dnZXItb3B0aW9uc1xcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XFxuICAvLyAuLi5vcHRpb25zXFxufSk7XFxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcXG4gIHJlZHVjZXIsXFxuICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxcbilcXG5cIiksZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O3ZhciB1PVtdO3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1lLmdldFN0YXRlO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmIWkocixsKSlyZXR1cm4gZShsKTt2YXIgYz17fTt1LnB1c2goYyksYy5zdGFydGVkPU8ubm93KCksYy5zdGFydGVkVGltZT1uZXcgRGF0ZSxjLnByZXZTdGF0ZT1uKHIoKSksYy5hY3Rpb249bDt2YXIgcz12b2lkIDA7aWYoYSl0cnl7cz1lKGwpfWNhdGNoKGUpe2MuZXJyb3I9byhlKX1lbHNlIHM9ZShsKTtjLnRvb2s9Ty5ub3coKS1jLnN0YXJ0ZWQsYy5uZXh0U3RhdGU9bihyKCkpO3ZhciBkPXQuZGlmZiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mKHIsbCk6dC5kaWZmO2lmKHgodSxPYmplY3QuYXNzaWduKHt9LHQse2RpZmY6ZH0pKSx1Lmxlbmd0aD0wLGMuZXJyb3IpdGhyb3cgYy5lcnJvcjtyZXR1cm4gc319fX12YXIgayxqLEU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IEFycmF5KHQrMSkuam9pbihlKX0sQT1mdW5jdGlvbihlLHQpe3JldHVybiBFKFwiMFwiLHQtZS50b1N0cmluZygpLmxlbmd0aCkrZX0sRD1mdW5jdGlvbihlKXtyZXR1cm4gQShlLmdldEhvdXJzKCksMikrXCI6XCIrQShlLmdldE1pbnV0ZXMoKSwyKStcIjpcIitBKGUuZ2V0U2Vjb25kcygpLDIpK1wiLlwiK0EoZS5nZXRNaWxsaXNlY29uZHMoKSwzKX0sTz1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlOkRhdGUsTj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxQPWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLHI9QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKXJbdF09ZVt0XTtyZXR1cm4gcn1yZXR1cm4gQXJyYXkuZnJvbShlKX0sQz1bXTtrPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGdsb2JhbD9cInVuZGVmaW5lZFwiOk4oZ2xvYmFsKSkmJmdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30saj1rLkRlZXBEaWZmLGomJkMucHVzaChmdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBqJiZrLkRlZXBEaWZmPT09YyYmKGsuRGVlcERpZmY9aixqPXZvaWQgMCl9KSx0KG4sciksdChvLHIpLHQoaSxyKSx0KGEsciksT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYyx7ZGlmZjp7dmFsdWU6YyxlbnVtZXJhYmxlOiEwfSxvYnNlcnZhYmxlRGlmZjp7dmFsdWU6bCxlbnVtZXJhYmxlOiEwfSxhcHBseURpZmY6e3ZhbHVlOmgsZW51bWVyYWJsZTohMH0sYXBwbHlDaGFuZ2U6e3ZhbHVlOmQsZW51bWVyYWJsZTohMH0scmV2ZXJ0Q2hhbmdlOnt2YWx1ZTpnLGVudW1lcmFibGU6ITB9LGlzQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGp9LGVudW1lcmFibGU6ITB9LG5vQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIEMmJihDLmZvckVhY2goZnVuY3Rpb24oZSl7ZSgpfSksQz1udWxsKSxjfSxlbnVtZXJhYmxlOiEwfX0pO3ZhciBGPXtFOntjb2xvcjpcIiMyMTk2RjNcIix0ZXh0OlwiQ0hBTkdFRDpcIn0sTjp7Y29sb3I6XCIjNENBRjUwXCIsdGV4dDpcIkFEREVEOlwifSxEOntjb2xvcjpcIiNGNDQzMzZcIix0ZXh0OlwiREVMRVRFRDpcIn0sQTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkFSUkFZOlwifX0sTD17bGV2ZWw6XCJsb2dcIixsb2dnZXI6Y29uc29sZSxsb2dFcnJvcnM6ITAsY29sbGFwc2VkOnZvaWQgMCxwcmVkaWNhdGU6dm9pZCAwLGR1cmF0aW9uOiExLHRpbWVzdGFtcDohMCxzdGF0ZVRyYW5zZm9ybWVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxhY3Rpb25UcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sZXJyb3JUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY29sb3JzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiaW5oZXJpdFwifSxwcmV2U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM5RTlFOUVcIn0sYWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuXCIjMDNBOUY0XCJ9LG5leHRTdGF0ZTpmdW5jdGlvbigpe3JldHVyblwiIzRDQUY1MFwifSxlcnJvcjpmdW5jdGlvbigpe3JldHVyblwiI0YyMDQwNFwifX0sZGlmZjohMSxkaWZmUHJlZGljYXRlOnZvaWQgMCx0cmFuc2Zvcm1lcjp2b2lkIDB9LFQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1lLmRpc3BhdGNoLHI9ZS5nZXRTdGF0ZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByP1MoKSh7ZGlzcGF0Y2g6dCxnZXRTdGF0ZTpyfSk6dm9pZCBjb25zb2xlLmVycm9yKFwiXFxuW3JlZHV4LWxvZ2dlciB2M10gQlJFQUtJTkcgQ0hBTkdFXFxuW3JlZHV4LWxvZ2dlciB2M10gU2luY2UgMy4wLjAgcmVkdXgtbG9nZ2VyIGV4cG9ydHMgYnkgZGVmYXVsdCBsb2dnZXIgd2l0aCBkZWZhdWx0IHNldHRpbmdzLlxcbltyZWR1eC1sb2dnZXIgdjNdIENoYW5nZVxcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbltyZWR1eC1sb2dnZXIgdjNdIHRvXFxuW3JlZHV4LWxvZ2dlciB2M10gaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcblwiKX07ZS5kZWZhdWx0cz1MLGUuY3JlYXRlTG9nZ2VyPVMsZS5sb2dnZXI9VCxlLmRlZmF1bHQ9VCxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1sb2dnZXIvZGlzdC9yZWR1eC1sb2dnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIiwidmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgaXNQcm9taXNlIGZyb20gJy4vaXNQcm9taXNlLmpzJztcblxuLyoqXG4gKiBOb3RlIHRvIGNvbnRyaWJ1dG9yczogUGxlYXNlIGFsc28gcmVtZW1iZXIgdG8gY2hlY2sgYW5kIG1ha2Ugc3VyZVxuICogdGhhdCBgaW5kZXguZC50c2AgaXMgYWxzbyB1cCB0byBkYXRlIHdpdGggdGhlIGltcGxlbWVudGF0aW9uIHdoZW5cbiAqIHlvdSBhZGQgbmV3IGZlYXR1cmVzIG9yIG1vZGlmeSBleGlzdGluZyBvbmVzLlxuICovXG5cbi8vIFRoZSBkZWZhdWx0IGFzeW5jIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHZhciBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuZXhwb3J0IHZhciBGVUxGSUxMRUQgPSAnRlVMRklMTEVEJztcbmV4cG9ydCB2YXIgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xudmFyIGRlZmF1bHRUeXBlcyA9IFtQRU5ESU5HLCBGVUxGSUxMRUQsIFJFSkVDVEVEXTtcblxuLyoqXG4gKiBGdW5jdGlvbjogcHJvbWlzZU1pZGRsZXdhcmVcbiAqIERlc2NyaXB0aW9uOiBUaGUgbWFpbiBwcm9taXNlTWlkZGxld2FyZSBhY2NlcHRzIGEgY29uZmlndXJhdGlvblxuICogb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9taXNlTWlkZGxld2FyZSgpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIFBST01JU0VfVFlQRV9TVUZGSVhFUyA9IGNvbmZpZy5wcm9taXNlVHlwZVN1ZmZpeGVzIHx8IGRlZmF1bHRUeXBlcztcbiAgdmFyIFBST01JU0VfVFlQRV9ERUxJTUlURVIgPSBjb25maWcucHJvbWlzZVR5cGVEZWxpbWl0ZXIgfHwgJ18nO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc3RhbnRpYXRlIHZhcmlhYmxlcyB0byBob2xkOlxuICAgICAgICAgKiAoMSkgdGhlIHByb21pc2VcbiAgICAgICAgICogKDIpIHRoZSBkYXRhIGZvciBvcHRpbWlzdGljIHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBwcm9taXNlID0gdm9pZCAwO1xuICAgICAgICB2YXIgZGF0YSA9IHZvaWQgMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlcmUgYXJlIG11bHRpcGxlIHdheXMgdG8gZGlzcGF0Y2ggYSBwcm9taXNlLiBUaGUgZmlyc3Qgc3RlcCBpcyB0b1xuICAgICAgICAgKiBkZXRlcm1pbmUgaWYgdGhlIHByb21pc2UgaXMgZGVmaW5lZDpcbiAgICAgICAgICogKGEpIGV4cGxpY2l0bHkgKGFjdGlvbi5wYXlsb2FkLnByb21pc2UgaXMgdGhlIHByb21pc2UpXG4gICAgICAgICAqIChiKSBpbXBsaWNpdGx5IChhY3Rpb24ucGF5bG9hZCBpcyB0aGUgcHJvbWlzZSlcbiAgICAgICAgICogKGMpIGFzIGFuIGFzeW5jIGZ1bmN0aW9uIChyZXR1cm5zIGEgcHJvbWlzZSB3aGVuIGNhbGxlZClcbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIHByb21pc2UgaXMgbm90IGRlZmluZWQgaW4gb25lIG9mIHRoZXNlIHRocmVlIHdheXMsIHdlIGRvbid0IGRvXG4gICAgICAgICAqIGFueXRoaW5nIGFuZCBtb3ZlIG9uIHRvIHRoZSBuZXh0IG1pZGRsZXdhcmUgaW4gdGhlIG1pZGRsZXdhcmUgY2hhaW4uXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIFN0ZXAgMWE6IElzIHRoZXJlIGEgcGF5bG9hZD9cbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgICAgdmFyIFBBWUxPQUQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgICAgIC8vIFN0ZXAgMS4xOiBJcyB0aGUgcHJvbWlzZSBpbXBsaWNpdGx5IGRlZmluZWQ/XG4gICAgICAgICAgaWYgKGlzUHJvbWlzZShQQVlMT0FEKSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IFBBWUxPQUQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RlcCAxLjI6IElzIHRoZSBwcm9taXNlIGV4cGxpY2l0bHkgZGVmaW5lZD9cbiAgICAgICAgICBlbHNlIGlmIChpc1Byb21pc2UoUEFZTE9BRC5wcm9taXNlKSkge1xuICAgICAgICAgICAgICBwcm9taXNlID0gUEFZTE9BRC5wcm9taXNlO1xuICAgICAgICAgICAgICBkYXRhID0gUEFZTE9BRC5kYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIDEuMzogSXMgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgYW4gYXN5bmMgZnVuY3Rpb24/XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgUEFZTE9BRCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgUEFZTE9BRC5wcm9taXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IFBBWUxPQUQucHJvbWlzZSA/IFBBWUxPQUQucHJvbWlzZSgpIDogUEFZTE9BRCgpO1xuICAgICAgICAgICAgICAgIGRhdGEgPSBQQVlMT0FELnByb21pc2UgPyBQQVlMT0FELmRhdGEgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdGVwIDEuMy4xOiBJcyB0aGUgcmV0dXJuIG9mIGFjdGlvbi5wYXlsb2FkIGEgcHJvbWlzZT9cbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShwcm9taXNlKSkge1xuXG4gICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIG1vdmUgb24gdG8gdGhlIG5leHQgbWlkZGxld2FyZS5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KF9leHRlbmRzKHt9LCBhY3Rpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFN0ZXAgMS40OiBJZiB0aGVyZSdzIG5vIHByb21pc2UsIG1vdmUgb24gdG8gdGhlIG5leHQgbWlkZGxld2FyZS5cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0ZXAgMWI6IElmIHRoZXJlJ3Mgbm8gcGF5bG9hZCwgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zdGFudGlhdGUgYW5kIGRlZmluZSBjb25zdGFudHMgZm9yOlxuICAgICAgICAgKiAoMSkgdGhlIGFjdGlvbiB0eXBlXG4gICAgICAgICAqICgyKSB0aGUgYWN0aW9uIG1ldGFcbiAgICAgICAgICovXG4gICAgICAgIHZhciBUWVBFID0gYWN0aW9uLnR5cGU7XG4gICAgICAgIHZhciBNRVRBID0gYWN0aW9uLm1ldGE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc3RhbnRpYXRlIGFuZCBkZWZpbmUgY29uc3RhbnRzIGZvciB0aGUgYWN0aW9uIHR5cGUgc3VmZml4ZXMuXG4gICAgICAgICAqIFRoZXNlIGFyZSBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBhY3Rpb24gdHlwZS5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF9QUk9NSVNFX1RZUEVfU1VGRklYRSA9IF9zbGljZWRUb0FycmF5KFBST01JU0VfVFlQRV9TVUZGSVhFUywgMyksXG4gICAgICAgICAgICBfUEVORElORyA9IF9QUk9NSVNFX1RZUEVfU1VGRklYRVswXSxcbiAgICAgICAgICAgIF9GVUxGSUxMRUQgPSBfUFJPTUlTRV9UWVBFX1NVRkZJWEVbMV0sXG4gICAgICAgICAgICBfUkVKRUNURUQgPSBfUFJPTUlTRV9UWVBFX1NVRkZJWEVbMl07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uOiBnZXRBY3Rpb25cbiAgICAgICAgICogRGVzY3JpcHRpb246IFRoaXMgZnVuY3Rpb24gY29uc3RydWN0cyBhbmQgcmV0dXJucyBhIHJlamVjdGVkXG4gICAgICAgICAqIG9yIGZ1bGZpbGxlZCBhY3Rpb24gb2JqZWN0LiBUaGUgYWN0aW9uIG9iamVjdCBpcyBiYXNlZCBvZmYgdGhlIEZsdXhcbiAgICAgICAgICogU3RhbmRhcmQgQWN0aW9uIChGU0EpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBHaXZlbiBhbiBvcmlnaW5hbCBhY3Rpb24gd2l0aCB0aGUgdHlwZSBGT086XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSByZWplY3RlZCBvYmplY3QgbW9kZWwgd2lsbCBiZTpcbiAgICAgICAgICoge1xuICAgICAgICAgKiAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgKiAgIHR5cGU6ICdGT09fUkVKRUNURUQnLFxuICAgICAgICAgKiAgIHBheWxvYWQ6IC4uLixcbiAgICAgICAgICogICBtZXRhOiAuLi4gKG9wdGlvbmFsKVxuICAgICAgICAgKiB9XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBmdWxmaWxsZWQgb2JqZWN0IG1vZGVsIHdpbGwgYmU6XG4gICAgICAgICAqIHtcbiAgICAgICAgICogICB0eXBlOiAnRk9PX0ZVTEZJTExFRCcsXG4gICAgICAgICAqICAgcGF5bG9hZDogLi4uLFxuICAgICAgICAgKiAgIG1ldGE6IC4uLiAob3B0aW9uYWwpXG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG5cblxuICAgICAgICB2YXIgZ2V0QWN0aW9uID0gZnVuY3Rpb24gZ2V0QWN0aW9uKG5ld1BheWxvYWQsIGlzUmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgICAgLy8gQ29uY2F0ZW50YXRlIHRoZSB0eXBlIHN0cmluZyBwcm9wZXJ0eS5cbiAgICAgICAgICAgIHR5cGU6IFtUWVBFLCBpc1JlamVjdGVkID8gX1JFSkVDVEVEIDogX0ZVTEZJTExFRF0uam9pbihQUk9NSVNFX1RZUEVfREVMSU1JVEVSKVxuXG4gICAgICAgICAgfSwgbmV3UGF5bG9hZCA9PT0gbnVsbCB8fCB0eXBlb2YgbmV3UGF5bG9hZCA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IG5ld1BheWxvYWRcbiAgICAgICAgICB9LCBNRVRBICE9PSB1bmRlZmluZWQgPyB7IG1ldGE6IE1FVEEgfSA6IHt9LCBpc1JlamVjdGVkID8ge1xuICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICB9IDoge30pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbjogaGFuZGxlUmVqZWN0XG4gICAgICAgICAqIENhbGxzOiBnZXRBY3Rpb24gdG8gY29uc3RydWN0IHRoZSByZWplY3RlZCBhY3Rpb25cbiAgICAgICAgICogRGVzY3JpcHRpb246IFRoaXMgZnVuY3Rpb24gZGlzcGF0Y2hlcyB0aGUgcmVqZWN0ZWQgYWN0aW9uIGFuZCByZXR1cm5zXG4gICAgICAgICAqIHRoZSBvcmlnaW5hbCBFcnJvciBvYmplY3QuIFBsZWFzZSBub3RlIHRoZSBkZXZlbG9wZXIgaXMgcmVzcG9uc2libGVcbiAgICAgICAgICogZm9yIGNvbnN0cnVjdGluZyBhbmQgdGhyb3dpbmcgYW4gRXJyb3Igb2JqZWN0LiBUaGUgbWlkZGxld2FyZSBkb2VzIG5vdFxuICAgICAgICAgKiBjb25zdHJ1Y3QgYW55IEVycm9ycy5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBoYW5kbGVSZWplY3QgPSBmdW5jdGlvbiBoYW5kbGVSZWplY3QocmVhc29uKSB7XG4gICAgICAgICAgdmFyIHJlamVjdGVkQWN0aW9uID0gZ2V0QWN0aW9uKHJlYXNvbiwgdHJ1ZSk7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0ZWRBY3Rpb24pO1xuXG4gICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbjogaGFuZGxlRnVsZmlsbFxuICAgICAgICAgKiBDYWxsczogZ2V0QWN0aW9uIHRvIGNvbnN0cnVjdCB0aGUgZnVsbGZpbGxlZCBhY3Rpb25cbiAgICAgICAgICogRGVzY3JpcHRpb246IFRoaXMgZnVuY3Rpb24gZGlzcGF0Y2hlcyB0aGUgZnVsZmlsbGVkIGFjdGlvbiBhbmRcbiAgICAgICAgICogcmV0dXJucyB0aGUgc3VjY2VzcyBvYmplY3QuIFRoZSBzdWNjZXNzIG9iamVjdCBzaG91bGRcbiAgICAgICAgICogY29udGFpbiB0aGUgdmFsdWUgYW5kIHRoZSBkaXNwYXRjaGVkIGFjdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBoYW5kbGVGdWxmaWxsID0gZnVuY3Rpb24gaGFuZGxlRnVsZmlsbCgpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICAgICAgICB2YXIgcmVzb2x2ZWRBY3Rpb24gPSBnZXRBY3Rpb24odmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICBkaXNwYXRjaChyZXNvbHZlZEFjdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGFjdGlvbjogcmVzb2x2ZWRBY3Rpb24gfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmlyc3QsIGRpc3BhdGNoIHRoZSBwZW5kaW5nIGFjdGlvbjpcbiAgICAgICAgICogVGhpcyBvYmplY3QgZGVzY3JpYmVzIHRoZSBwZW5kaW5nIHN0YXRlIG9mIGEgcHJvbWlzZSBhbmQgd2lsbCBpbmNsdWRlXG4gICAgICAgICAqIGFueSBkYXRhIChmb3Igb3B0aW1pc3RpYyB1cGRhdGVzKSBhbmQvb3IgbWV0YSBmcm9tIHRoZSBvcmlnaW5hbCBhY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0KF9leHRlbmRzKHtcbiAgICAgICAgICAvLyBDb25jYXRlbnRhdGUgdGhlIHR5cGUgc3RyaW5nLlxuICAgICAgICAgIHR5cGU6IFtUWVBFLCBfUEVORElOR10uam9pbihQUk9NSVNFX1RZUEVfREVMSU1JVEVSKVxuXG4gICAgICAgIH0sIGRhdGEgIT09IHVuZGVmaW5lZCA/IHsgcGF5bG9hZDogZGF0YSB9IDoge30sIE1FVEEgIT09IHVuZGVmaW5lZCA/IHsgbWV0YTogTUVUQSB9IDoge30pKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2Vjb25kLCBkaXNwYXRjaCBhIHJlamVjdGVkIG9yIGZ1bGZpbGxlZCBhY3Rpb24gYW5kIG1vdmUgb24gdG8gdGhlXG4gICAgICAgICAqIG5leHQgbWlkZGxld2FyZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oaGFuZGxlRnVsZmlsbCwgaGFuZGxlUmVqZWN0KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaW5kZXguanMiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaXNQcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pc1Byb21pc2UuanMiLCIvKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4xXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXRNb25leS5qcydcclxuXHJcbi8vIFJFRFVYIFBST1ZJREVSXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBDT01QT05FTlRTXHJcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluLmpzeCdcclxuXHJcbi8vIFNUT1JFXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJ1xyXG5cclxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcclxuZm9ybWF0TW9uZXkoKVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPE1haW4gLz5cclxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9hcHAuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvYXBwLmpzIiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQge2ZlY3RoUHJvZmlsZX0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuLy8gQ09NUE9ORU5UU1xyXG5cclxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xyXG5pbXBvcnQgRmV0Y2hpbmcgZnJvbSAnLi4vLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3gnXHJcblxyXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoaW5nOiBzdG9yZS5mZXRjaGluZy5mZXRjaGluZyxcclxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMucHJvcHMuZmV0Y2hpbmcgPyA8RmV0Y2hpbmcgLz4gOiAnJ1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnbWFpbkNvbnRhaW5lcicgOiAnbWFpbkNvbnRhaW5lciBzaWRlSGlkZGVuJ1xyXG4gICAgY29uc3QgY29udGVudCA9IDxSb3V0ZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNpZGVNZW51IC8+XHJcbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250YWluZXItY29udGVudCc+XHJcbiAgICAgICAgICAgIHtyb3V0ZXN9XHJcbiAgICAgICAgICAgIHtmZXRjaGluZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm91dGVyPlxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhQcm9maWxlKCkge1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCgnL3Byb2ZpbGUvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoSXNBZG1pbkxvY2tlZCgpIHtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnByZWZzL2FkbWluX19pc19hZG1pbl9sb2NrZWQvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcclxuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcclxuXHJcbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XHJcblxyXG4gIDxSb3V0ZSBleGFjdCBwYXRoPScvc2FsZXMnIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cclxuXHJcbjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcclxuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hPTUVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgfVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdNYWluIGhlaWdoMTAwJz5cclxuICAgICAgSE9NRVxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3giLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcclxuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQvY29udGVudC5qc3gnXHJcbmltcG9ydCBBc2lkZSBmcm9tICcuL2FzaWRlL2FzaWRlLmpzeCdcclxuaW1wb3J0IFNlYXJjaFByb2R1Y3QgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4J1xyXG5pbXBvcnQgU2VhcmNoQ2xpZW50IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4J1xyXG5pbXBvcnQgUGF5UGFuZWwgZnJvbSAnLi9wYXkvcGF5UGFuZWwuanN4J1xyXG5pbXBvcnQgSW52b2ljZVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCdcclxuXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0FMRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICB9XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NhbGUnPlxyXG4gICAgICA8Q29udGVudCAvPlxyXG4gICAgICA8QXNpZGUgLz5cclxuXHJcbiAgICAgIDxTZWFyY2hQcm9kdWN0IC8+XHJcbiAgICAgIDxTZWFyY2hDbGllbnQgLz5cclxuICAgICAgPFBheVBhbmVsIC8+XHJcbiAgICAgIDxJbnZvaWNlUGFuZWwgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvbWFpbi5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCdcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jYXJ0L2NhcnQuanN4J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICB0b2dnbGVXaWR0aCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudCBmdWxsV2lkdGgnIDogJ3NhbGUtY29udGVudCdcclxuICAgIGNvbnN0IGNhcnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC1jYXJ0JyA6ICdzYWxlLWNvbnRlbnQtY2FydCBmdWxsSGVpZ2h0J1xyXG4gICAgY29uc3QgdG90YWxDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC10b3RhbCcgOiAnc2FsZS1jb250ZW50LXRvdGFsIGNvbGxhcHNlZCdcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWNvbnRlbnQtcHJvZHVjdCcgPlxyXG4gICAgICAgIDxQcm9kdWN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FydENsYXNzfSA+XHJcbiAgICAgICAgPENhcnQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b3RhbENsYXNzfSA+XHJcbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLWxlZnQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMuanMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgaW5wdXRWYWw6IHN0b3JlLnByb2R1Y3RzLmlucHV0VmFsLFxyXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcclxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXHJcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxyXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy8gdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RTJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RLd2FyZ3MgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX1BST0RVQ1RTX0ZVTEZJTExFRCcsXHJcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0SXRlbURpc3BhdGNoKHByb2R1Y3RLd2FyZ3MpKVxyXG5cclxuICB9XHJcblxyXG4gIHNlYXJjaFByb2R1Y3RDbGljaygpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnUFJPRFVDVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVswXSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxyXG4gICAgICAgIGxldCBxdHkgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVsxXVxyXG4gICAgICAgIHF0eSA9IChpc05hTihxdHkpKVxyXG4gICAgICAgICAgPyAxXHJcbiAgICAgICAgICA6IHBhcnNlRmxvYXQocXR5KSAvLyBpZiBubyBxdHkgc2V0cyB0byAxXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcclxuICAgICAgICAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxyXG4gICAgICAgIC8vICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IDB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgcHJvZHVjdFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGI+UHJvZHVjdG86PC9iPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlJz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFyY29kZScgLz5cclxuICAgICAgICAgIDxpbnB1dCBpZD0ncHJvZHVjdENvZGVJbnB1dEZpZWxkJyBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvZGVJbnB1dCA9IGlucHV0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIGVsIEPDs2RpZ28gZGVsIFByb2R1Y3RvJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUtaW5wdXQgbW91c2V0cmFwIGZvcm0tY29udHJvbCBpbnB1dC1sZycgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaFByb2R1Y3RDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1zZWFyY2gnPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4IiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDYxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL2NhcnRJdGVtcy5qc3gnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcclxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXMsXHJcbiAgICAvLyBwcm9kdWN0U2VhcmNocGFuZWxWaXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtiJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xyXG5cclxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcclxuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2MnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXHJcblxyXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXHJcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGNvbnN0IHVzZUxvdGUgPSB0aGlzLnByb3BzLmRlZmF1bHRDb25maWdcclxuICAgIC8vICAgPyB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcuY2FydEl0ZW1Vc2VMb3RlXHJcbiAgICAvLyAgIDogZmFsc2VcclxuXHJcbiAgICAvLyBjb25zdCBsb3RlRmllbGQgPSB1c2VMb3RlXHJcbiAgICAvLyAgID8gPHRoPkxvdGU8L3RoPlxyXG4gICAgLy8gICA6IDx0aCAvPlxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FydCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWNvZGUnPlxyXG4gICAgICAgICAgPGg1PkPDs2Q8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDU+QXJ0PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItcXR5Jz5cclxuICAgICAgICAgIDxoNT5DYW50PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdW5pdFByaWNlJz5cclxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kaXNjb3VudCc+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWl2YSc+XHJcbiAgICAgICAgICA8aDU+SVY8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci10b3RhbCc+XHJcbiAgICAgICAgICA8aDU+VG90YWwgSVZJPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Q2FydEl0ZW1zIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VwZGF0ZVRvdGFscywgcmVtb3ZlRnJvbUNhcnR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxyXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcclxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXHJcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBPbiBjb21wb25lbnQgdXBkYXRlIChUaGUgY2FydCBoYXMgYmVlbiBtb2RpZmllZCkgY2FsbHMgdGhlIHVwZGF0ZSB0b3RhbHMgbWV0aG9kIGluIGFjdGlvbnMgZmlsZS5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVUb3RhbHModGhpcy5wcm9wcy5pbkNhcnQpKVxyXG5cclxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1ib2R5JylcclxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcclxuXHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgLy8gICBpZiAodGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSAhPSBuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmUpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICB9KVxyXG5cclxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrZicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlfWApLmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCstJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcclxuICAgICAgYWxlcnRpZnkucHJvbXB0KGBOdWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkb2AsICdJbmdyZXNlIGxhIG51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvJywgJydcclxuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcclxuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXHJcbiAgICAgICAgICAgIF9fdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgX190aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcclxuICAgICAgICAuc2V0KCdsYWJlbHMnLCB7b2s6ICdPaycsIGNhbmNlbDogJ0NhbmNlbGFyJ30pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcclxuICAgICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGRpc2NvdW50SW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgIDogMFxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gIH1cclxuXHJcbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBxdHkgPSBwYXJzZUZsb2F0KChldi50YXJnZXQudmFsdWUpKVxyXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICA6IDBcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5KGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5pbkNhcnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50KSlcclxuXHJcbiAgfVxyXG5cclxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xyXG5cclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcclxuICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgOiAwXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBmaWVsZEZvY3VzKGV2KSB7XHJcbiAgICBldi50YXJnZXQuc2VsZWN0KClcclxuICB9XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgaXRlbXMgaW4gY2FydCB1c2luZyB0YWJsZSByb3dzXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxyXG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcclxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcclxuICAgICAgICA6ICdjYXJ0LWJvZHktaXRlbSdcclxuXHJcbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xyXG5cclxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcclxuICAgICAgICA6IDBcclxuXHJcbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XHJcbiAgICAgICAgaWQ9e2BxdHkke2l0ZW0ucHJvZHVjdC5jb2RlfWB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxyXG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxyXG4gICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cclxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxyXG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxyXG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1xdHknPlxyXG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cclxuICAgICAgICAgIHtxdHlGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cclxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxyXG4gICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0taXZhJz5cclxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxyXG4gICAgICAgICAge3RheGVzMX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxyXG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cclxuICAgICAgICAgICAg4oKhIHtpdGVtLnRvdGFsV2l0aEl2LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZW1vdmVJY29uQ2xhc3N9PlxyXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cclxuICAgIC8vICAge2l0ZW1zfVxyXG4gICAgLy8gPC90Ym9keT5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XHJcbiAgICAgIHtpdGVtczJ9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRvdGFscyB0aGUgY2FydCBzdG9yZSBpdGVtLCBnZW5lcmF0ZXMgbmV3IHZhbHVlcyBhY2NvcmRpbmcgY2FydCBpdGVtIG9iamVjdHMsIHRoZW4gcHVzaCB0aGUgdG8gc3RvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFscyhpbkNhcnQpIHtcclxuXHJcbiAgbGV0IHN1YnRvdGFsID0gMFxyXG4gIGxldCBzdWJUb3RhbE5vRGlzY291bnQgPSAwXHJcbiAgbGV0IHRheGVzID0gMFxyXG4gIGxldCB0b3RhbCA9IDBcclxuICBsZXQgZGlzY291bnRUb3RhbCA9IDBcclxuXHJcbiAgLy8gZm9yIEVhY2ggZWxlbWVudCBhZGRzIHRoZSB2YWx1ZXMgdG8gZ2V0IHRvdGFsc1xyXG4gIGluQ2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50ID0gc3ViVG90YWxOb0Rpc2NvdW50ICsgaXRlbS5zdWJUb3RhbE5vRGlzY291bnRcclxuXHJcbiAgICBzdWJ0b3RhbCA9IHN1YnRvdGFsICsgaXRlbS5zdWJ0b3RhbFxyXG5cclxuICAgIGNvbnN0IHRheGVzQ2FsYyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzIC8gMTAwKVxyXG4gICAgICA6IDBcclxuXHJcbiAgICBjb25zdCB0YXhlc0NhbGMyID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMyKVxyXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMiAvIDEwMClcclxuICAgICAgOiAwXHJcblxyXG4gICAgY29uc3QgdGF4ZXNDYWxjMyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzMylcclxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczMgLyAxMDApXHJcbiAgICAgIDogMFxyXG5cclxuICAgIHRheGVzID0gdGF4ZXMgKyB0YXhlc0NhbGMgKyB0YXhlc0NhbGMyICsgdGF4ZXNDYWxjM1xyXG5cclxuICAgIGRpc2NvdW50VG90YWwgPSBkaXNjb3VudFRvdGFsICsgaXRlbS5kaXNjb3VudEN1cnJlbmN5IC8vIHRoaXMgaXMgdGhlIHZhbHVlIGluIGN1cnJlbmN5XHJcblxyXG4gIH0pXHJcbiAgLy8gVE9ETyBDb25maWcgZm9yIHJvdW5kIG9yIG5vdFxyXG4gIC8vIHRvdGFsID0gTWF0aC5yb3VuZChzdWJ0b3RhbCArIHRheGVzKVxyXG4gIHRvdGFsID0gc3VidG90YWwgKyB0YXhlc1xyXG4gIC8vIHJldHVycyBhIGRpc3BhdGNoIHdpdGggYSBwYXlsb2FkIG9mIHRoZSBvYnRhaW5lZCB2YWx1ZXNcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUX1RPVEFMUycsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIHN1YnRvdGFsOiBzdWJ0b3RhbCxcclxuICAgICAgdGF4ZXM6IHRheGVzLFxyXG4gICAgICB0b3RhbDogdG90YWwsXHJcbiAgICAgIGRpc2NvdW50VG90YWw6IGRpc2NvdW50VG90YWwsXHJcbiAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaXRlbXNJbkNhcnQsIGNvZGUpIHtcclxuXHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXHJcblxyXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1JFTU9WRV9GUk9NX0NBUlQnLFxyXG4gICAgICBwYXlsb2FkOiBpbmRleEluQ2FydFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4J1xyXG5pbXBvcnQgVG90YWxzIGZyb20gJy4uLy4uL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3gnXHJcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9ucy5qc3gnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcclxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICB0b2dnbGVXaWR0aCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBhc2lkZUNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZSBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUnXHJcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZS1jb250ZW50IGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZS1jb250ZW50J1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNsYXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FzaWRlQ29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdy1jb250YWluZXInIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8Q2xpZW50IC8+XHJcbiAgICAgICAgPFRvdGFscyAvPlxyXG4gICAgICAgIDxCdXR0b25zIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbnMgLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLXRvdGFsJyA+XHJcbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZCwgc2VhcmNoQ2xpZW50LCB1c2VyU2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRDbGllbnREZWJ0J1xyXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50cyxcclxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgY2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIHVzZXJzOiBzdG9yZS5jbGllbnRzLnVzZXJzLFxyXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXHJcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxyXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAobmV4dFByb3BzLmNsaWVudFNlbGVjdGVkICE9IHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpIHtcclxuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXHJcblxyXG4gICAgICBpZiAoIW5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5zYWxlTG9hZGVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgICAgIGNsaWVudF9pZDogbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgc3VjY2VzczogJ1NFVF9DTElFTlRfREVCVCcsXHJcbiAgICAgICAgICBmYWlsOiAnU0VUX0NMSUVOVF9ERUJUX0ZBSUxFRCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KG5leHRQcm9wcy5jYXJ0LCBkaXNjb3VudCwgbmV4dFByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0Q2xpZW50RGVidChrd2FyZ3MpKVxyXG5cclxuICAgICAgICAvLyBTRVRTIFZBTFVFIE9GIERFRkFVTFQgRElTQ09VTlQgVE8gRklFTEQgT1IgMFxyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX0NMSUVOVFMnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2NsaWVudHMnLFxyXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJyxcclxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcclxuXHJcbiAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUgLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB1c2VyU2VsZWN0KGV2KSB7XHJcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXNlclNlbGVjdGVkKF9pZCwgdGhpcy5wcm9wcy51c2VycykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgdXNlclVuU2VsZWN0KGV2KSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVNFUl9DTEVBUicsIHBheWxvYWQ6ICcnfSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBzZWFyY2hDbGllbnRDbGljaygpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCgpKVxyXG5cclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyBTRUxFQ1QyIERBVEFcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXHJcbiAgICAgID8gYCR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5uYW1lfSAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubGFzdF9uYW1lfWBcclxuICAgICAgOiAnQ2xpZW50ZSBDb250YWRvJ1xyXG5cclxuICAgIC8vIGNvbnN0IGNyZWRpdEljb24gPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCAmJiB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmhhc19jcmVkaXQpXHJcbiAgICAvLyAgID8gJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcclxuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtaW1nJz5cclxuICAgICAgICA8aW1nIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudENsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XHJcbiAgICAgICAgICA8aDM+Q2xpZW50ZSA6PC9oMz5cclxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxyXG4gICAgICAgICAgPGgzPk5vbWJyZSA6PC9oMz5cclxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcclxuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIENIRUNLIEZPUiBDTElFTlQgREVCVCBBTkQgRElTUEFUQ0hcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudERlYnQoa3dhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe2NsaWVudF9pZDoga3dhcmdzLmNsaWVudF9pZH0pXHJcbiAgICAvLyBjYWxscyB0aGUgZnVuY3Rpb24gaW4gYmFja2VuZCB0byBjaGVjayBwZXJtaXNzaW9uc1xyXG4gICAgYXhpb3MucG9zdCgnL2FwaS9nZXRjbGllbnRkZWJ0LycsIGRhdGEpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3Muc3VjY2VzcywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBpbnRlbnRhciBvYnRlbmVyIGxhIGRldWRhIGRlbCB1c3VhcmlvLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZmFpbCwgcGF5bG9hZDogJyd9KVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9nZXRDbGllbnREZWJ0LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi91dGlscy9nZXRDbGllbnREZWJ0LmpzIiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcydcclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxyXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXHJcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxyXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGlzY291bnRWYWw6IDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dJbnZvaWNlUGFuZWwoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuXHJcbiAgaW5wdXRLZXlQcmVzcyhldikge1xyXG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG5cclxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXHJcbiAgICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxyXG4gICAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpc2NvdW50VmFsID0gKGV2LnRhcmdldC52YWx1ZSlcclxuICAgICAgICA/IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIDogMFxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0T25CbHVyKGV2KSB7XHJcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxyXG5cclxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcclxuICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgOiAwXHJcbiAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxyXG4gICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXHJcbiAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3RhbHMnPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgJ3BhZGRpbmdUb3AnOiAnMCcsXHJcbiAgICAgICAgJ21hcmdpblRvcCc6ICcwJ1xyXG4gICAgICB9fSBjbGFzc05hbWU9J2JnLXdoaXRlIHJpZ2h0LWl0ZW0nPlxyXG4gICAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICAgIDxiPlRvdGFsZXM6PC9iPlxyXG4gICAgICAgIDwvc3Bhbj48YnIgLz4gKi99XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdG90YWxzLXRhYmxlJz5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5TdWItVG90YWw6PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICczNyUnXHJcbiAgICAgICAgICAgICAgfX0+RGVzY3VlbnRvICU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD0nZGlzY291bnRGaWVsZCdcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5pbnB1dE9uQmx1ci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMzdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAwIDAgMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnRTaXplJzogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3JkZXInOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2FsZV9nbG9iYWxfZGlzY291bnRfaW5wdXQgZm9ybS1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzo8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPklWOjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHsvKiA8dGggb25DbGljaz17dGhpcy5zaG93SW52b2ljZVBhbmVsLmJpbmQodGhpcyl9PlRvdGFsOjwvdGg+ICovfVxyXG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDo8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2hvd1BheVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUEFZX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93SW5vaWNlUGFuZWwoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93U2FsZVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUFJFU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIG5ld1NhbGUoKSB7XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xyXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ05FV19TQUxFJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgPyA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0lub2ljZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICAgIEZhY3R1cmFcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3U2FsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgICBOdWV2YSBWZW50YVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCcgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDogJydcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBidXR0b25zJz5cclxuXHJcbiAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICA8Yj5QYWdvOjxiciAvPjwvYj5cclxuICAgICAgPC9zcGFuPiAqL31cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQYXlQYW5lbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgQ29icmFyXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93U2FsZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXHJcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICBWZW50YXMgZGVsIGTDrWFcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXNhbGVzUGFuZWwuYmluZCh0aGlzKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxyXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxyXG4gICAgICAgIFByZS1WZW50YXNcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge2J1dHRvbnN9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xyXG5pbXBvcnQgUmVzdWx0c1RhYmxlIGZyb20gJy4vcmVzdWx0c1RhYmxlLmpzeCdcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZX1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcGFuZWxDbGljayhldikge1xyXG5cclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxyXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQgaXMtdmlzaWJsZSdcclxuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0J1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cclxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIFByb2R1Y3RvPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblxyXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgICAgICA8UmVzdWx0c1RhYmxlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge3NlYXJjaFByb2R1Y3R9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWFyY2hWYWw6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcblxyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbigpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2VhcmNoUHJvZHVjdEFjdGlvbigpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoUHJvZHVjdCh0aGlzLnByb3BzLnNlYXJjaFZhbHVlLCB0aGlzLnByb3BzLnByb2R1Y3RzKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBEZXNjcmlwY2nDs246PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcclxuICAgICAgICAgICAgfX0gaWQ9J3Byb2R1Y3Qtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J3Byb2R1Y3Qtc2VhcmNoLWJ0bicgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xyXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBOdW1iZXIucHJvdG90eXBlLmZvcm1hdE1vbmV5ID0gZnVuY3Rpb24oYywgZCwgdCl7XHJcbiAgICB2YXIgbiA9IHRoaXMsXHJcbiAgICAgICAgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcclxuICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXHJcbiAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxyXG4gICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcclxuICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxyXG4gICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XHJcbiAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xyXG4gICAgIH07XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2Zvcm1hdE1vbmV5LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXRNb25leS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkVGFibGUsIGhpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5wcm9kdWN0c01hdGNoZWQsIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0c31cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2VsZWN0UHJvZHVjdChjb2RlLCBldikge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RQcm9kdWN0LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLmNvZGV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLnNlbGxwcmljZX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XHJcbiAgICAgICAgICA8dGFibGUgaWQ9J3Byb2R1Y3RlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdwcm9kdWN0LXNlYXJjaC10YWJsZS1ib2R5Jz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHN9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcclxuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXHJcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge3Zpc2libGU6IHN0b3JlLnNlYXJjaENsaWVudHMudmlzaWJsZX1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaENsaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBwYW5lbENsaWNrKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXHJcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxyXG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgQ2xpZW50ZTwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7c2VhcmNoQ2xpZW50fSBmcm9tICcuL2FjdGlvbnMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2NsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlYXJjaFZhbDogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcclxuXHJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnNlYXJjaENsaWVudEFjdGlvbigpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbCA9IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHNlYXJjaENsaWVudEFjdGlvbigpIHtcclxuICAgIGNvbnN0IHZhbCA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCh2YWwsIHRoaXMucHJvcHMuY2xpZW50cykpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2xpZW50LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBOb21icmU6PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcclxuICAgICAgICAgICAgfX0gaWQ9J2NsaWVudC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0yJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdjbGllbnQtc2VhcmNoLWJ0bicgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xyXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hGb3JtLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZH0gZnJvbSAnLi4vLi4vY2xpZW50cy9hY3Rpb25zLmpzJ1xyXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hDbGllbnRzLmNsaWVudHNNYXRjaGVkLCBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHNlbGVjdENsaWVudChjb2RlLCBldikge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBoYXNDcmVkaXQgPSAoaXRlbS5oYXNfY3JlZGl0KVxyXG4gICAgICAgID8gJ1NJJ1xyXG4gICAgICAgIDogJ05PJ1xyXG5cclxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdENsaWVudC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5jb2RlfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2Ake2l0ZW0ubmFtZX0gJHtpdGVtLmxhc3RfbmFtZX1gfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2hhc0NyZWRpdH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDBcclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XHJcbiAgICAgICAgICA8dGFibGUgaWQ9J2NsaWVudGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNyw6lkaXRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TYWxkbzwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J2NsaWVudC1zZWFyY2gtdGFibGUtYm9keSc+XHJcbiAgICAgICAgICAgICAge2NsaWVudHN9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgUGF5TWV0aG9kIGZyb20gJy4vY29tcG9uZW50cy9wYXlNZXRob2QuanN4J1xyXG5pbXBvcnQgUGF5Q2FzaCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2Focy5qc3gnXHJcbmltcG9ydCBQYXlDYXJkIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYXJkLmpzeCdcclxuaW1wb3J0IFBheUNyZWRpdCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCdcclxuaW1wb3J0IFBheU90aGVyIGZyb20gJy4vY29tcG9uZW50cy9wYXlPdGhlci5qc3gnXHJcbmltcG9ydCBQYXlTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5wYXkuaXNWaXNpYmxlLCBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgaGlkZVBhbmVsKCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXHJcbiAgICAgID8gJ3BheS1wYW5lbCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdwYXktcGFuZWwnXHJcblxyXG4gICAgbGV0IHBheU1ldGhvZCA9ICcnXHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XHJcblxyXG4gICAgICBjYXNlICdDQVNIJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXNoIC8+XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSAvLyBjYXNlXHJcblxyXG4gICAgICBjYXNlICdDQVJEJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXJkIC8+XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSAvLyBjYXNlXHJcblxyXG4gICAgICBjYXNlICdDUkVEJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDcmVkaXQgLz5cclxuICAgICAgICBicmVha1xyXG4gICAgICB9IC8vICBjYXNlXHJcblxyXG4gICAgICBjYXNlICdPVEhFJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlPdGhlciAvPlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIH0gLy8gc3dpdGNoXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1wYW5lbC1tYWluJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLWhlYWRlcic+XHJcbiAgICAgICAgICBSZWdpc3RyYXIgUGFnb1xyXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYXlNZXRob2QgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1hcmVhLWNvbnRhaW5lcic+XHJcblxyXG4gICAgICAgICAge3BheU1ldGhvZH1cclxuXHJcbiAgICAgICAgICA8UGF5U2lkZUJhciAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjbGlja0NoYW5nZVBheU1ldGhvZChtZXRob2QsIGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NIQU5HRV9QQVlfTUVUSE9EJywgcGF5bG9hZDogbWV0aG9kfSlcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdCc+XHJcblxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcclxuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xyXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XHJcbiAgICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXJzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ09USEUnXHJcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcclxuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxyXG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXNoQW1vdW50fSBmcm9tICcuLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtjYXNoQW1vdW50OiBzdG9yZS5wYXkuY2FzaEFtb3VudH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q2FzaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FzaEFtb3VudChldi50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cclxuICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FzaEFtb3VudH0gb25DaGFuZ2U9e3RoaXMucGF5QW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VwZGF0ZVN0b3JlQ2FyZEF1dGgsIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0c30gZnJvbSAnLi4vYWN0aW9ucydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7Y2FyZEF1dGg6IHN0b3JlLnBheS5jYXJkQXV0aCwgY2FyZERpZ2l0czogc3RvcmUucGF5LmNhcmREaWdpdHN9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBwYXlDYXJkQXV0aENoYW5nZWQoZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZEF1dGgoZXYudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIHBheUNhcmREaWdpdHNDaGFuZ2VkKGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmREaWdpdHMoZXYudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XHJcbiAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz40IERJR0lUT1M6PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmREaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmREaWdpdHNDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkFVVE9SSVpBQ0nDk046PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmRBdXRofSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkQXV0aENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7Y2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLCBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q3JlZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXHJcbiAgICBjb25zdCBjbGllbnRMaW1pdCA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcclxuICAgICAgPyBg4oKhICR7cGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1gXHJcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcclxuICAgIGNvbnN0IGNsaWVudEF2YWlsYWJsZSA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcclxuICAgICAgPyBg4oKhICR7YXZhaWxhYmxlLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1gXHJcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XHJcbiAgICAgICAgPHNwYW4+Q3LDqWRpdG88L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+TMONTUlURTo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XHJcbiAgICAgICAgICB7Y2xpZW50TGltaXR9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkRJU1BPTklCTEU6PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxyXG4gICAgICAgICAge2NsaWVudEF2YWlsYWJsZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlPdGhlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz4gPHNwYW4+T3Rybzwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2ZldGNpbmctY29udGFpbmVyJz5cclxuICAgICAgPGltZyBzcmM9eycvc3RhdGljL3ZlbmRvci9sb2FkZXJzL0VjbGlwc2UuZ2lmJ30gLz5cclxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFNhdmVCdG4gZnJvbSAnLi4vLi4vc2F2ZS9zYXZlLmpzeCdcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxyXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxyXG4gICAgcGF5OiBzdG9yZS5wYXksXHJcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXHJcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcclxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XHJcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXHJcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcclxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzYXZlQnRuKCkge1xyXG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXHJcbiAgICBjb25zdCBzYWxlID0ge1xyXG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxyXG4gICAgICBjbGllbnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSxcclxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcclxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7XHJcbiAgICAgIHNhbGUucGF5LmRlYnQgPSB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXHJcbiAgICAgIHNhbGUucGF5LnBheWVkID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrd2FyZ3MgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvc2FsZXMvJyxcclxuICAgICAgaXRlbTogc2FsZSxcclxuICAgICAgbG9nQ29kZTogJ1NBTEVfQ1JFQVRFJyxcclxuICAgICAgbG9nRGVzY3JpcHRpb246ICdDcmVhY2nDs24gZGUgbnVldmEgVmVudGEnLFxyXG4gICAgICBsb2dNb2RlbDogJ1NBTEUnLFxyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBpdGVtT2xkOiAnJyxcclxuICAgICAgc3VjZXNzTWVzc2FnZTogJ1ZlbnRhIGNyZWFkYSBDb3JyZWN0YW1lbnRlLicsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgVmVudGEsIGludGVudGUgZGUgbnVldm8uJyxcclxuICAgICAgZGlzcGF0Y2hUeXBlOiAnQ0xFQVJfU0FMRScsXHJcbiAgICAgIGlzU2FsZTogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzYXZlSXRlbShrd2FyZ3MpKVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICAgIE1vdXNldHJhcC5yZXNldCgpXHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGxldCBjaGFuZ2UgPSAwXHJcbiAgICBsZXQgcGF5QnV0dG9uQ2xhc3MgPSAncGF5LXRhZyB0YWctYnV0dG9uJ1xyXG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwpXHJcbiAgICBjb25zdCBjYXNoID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcclxuXHJcbiAgICAgIGNhc2UgJ0NBU0gnOlxyXG4gICAgICB7XHJcbiAgICAgICAgY2hhbmdlID0gY2FzaCAtIHRvdGFsXHJcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGNoYW5nZSA+PSAwKVxyXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcclxuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlICdDQVJEJzpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnByb3BzLnBheS5jYXJkQXV0aFxyXG4gICAgICAgIGNvbnN0IGRpZ2l0cyA9IHRoaXMucHJvcHMucGF5LmNhcmREaWdpdHNcclxuICAgICAgICBjaGFuZ2UgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnRvdGFsKVxyXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBhdXRoICYmIGRpZ2l0cylcclxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXHJcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdDUkVEJzpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5kZWJ0KVxyXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiB0b3RhbCA8PSBhdmFpbGFibGUgJiYgdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdClcclxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXHJcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1zaWRlLWJhcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cclxuICAgICAgICA8c3Bhbj5QYWdvPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlxyXG4gICAgICAgICAgVE9UQUwgOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cclxuICAgICAgICAgIOKCoSB7dGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlZVRUxUTyA6PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxyXG4gICAgICAgICAg4oKhIHtjaGFuZ2UuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPFNhdmVCdG4gcGF5QnV0dG9uQ2xhc3M9e3BheUJ1dHRvbkNsYXNzfSAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxyXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxyXG4gICAgcGF5OiBzdG9yZS5wYXksXHJcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXHJcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcclxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XHJcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXHJcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcclxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVCdG4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzYXZlQnRuKCkge1xyXG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXHJcbiAgICBjb25zdCBwYXllZCA9ICEodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVEJylcclxuXHJcbiAgICBjb25zdCBzYWxlID0ge1xyXG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxyXG4gICAgICBjbGllbnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSxcclxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcclxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSksXHJcbiAgICAgIHBheV90eXBlOiB0aGlzLnByb3BzLnBheS5wYXlNZXRob2QsXHJcbiAgICAgIHBheWVkOiBwYXllZCxcclxuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ge1xyXG4gICAgICBjbGllbnRfaWQ6IHRoaXMucHJvcHMuY2xpZW50LmlkLFxyXG4gICAgICBtb3ZlbWVudF90eXBlOiAnQ1JFRCcsXHJcbiAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgdXJsOiAnL2FwaS9zYWxlcy8nLFxyXG4gICAgICBpdGVtOiBzYWxlLFxyXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxyXG4gICAgICBsb2dEZXNjcmlwdGlvbjogJ0NyZWFjacOzbiBkZSBudWV2YSBWZW50YScsXHJcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGl0ZW1PbGQ6ICcnLFxyXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxyXG4gICAgICBjcmVkaXRNb3ZlbWVudDogY3JlZGl0TW92ZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSlcclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgTW91c2V0cmFwLnJlc2V0KClcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17dGhpcy5zYXZlQnRuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXlCdXR0b25DbGFzc30+XHJcbiAgICAgIFJlZ2lzdHJhclxyXG4gICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9zYXZlLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHNhdmVMb2cgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGknXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXHJcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxyXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxyXG5cclxuICAgICAgICAvLyBJRiBUSEUgU0FMRSBJUyBBIENSRURJVCBPTkUgU0FWRSBDUkVESVQgTU9WRU1FTlRcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5wYXlfdHlwZSA9PSAnQ1JFRCcpIHtcclxuICAgICAgICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ga3dhcmdzLmNyZWRpdE1vdmVtZW50XHJcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5iaWxsX2lkID0gcmVzcG9uc2UuZGF0YS5pZFxyXG4gICAgICAgICAgY3JlZGl0TW92ZW1lbnQuZGVzY3JpcHRpb24gPSBgVmVudGEgZGUgY3LDqWRpdG8gIyR7cmVzcG9uc2UuZGF0YS5iaWxsX251bWJlcn1gXHJcbiAgICAgICAgICBzYXZlQ3JlZGl0TW92ZW1lbnQoY3JlZGl0TW92ZW1lbnQsIHJlc3BvbnNlLmRhdGEsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdClcclxuXHJcbiAgICAgICAgLy8gSUYgSVMgQ0FTSCBUSEVOIEpVU1QgUkVTT0xWRVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIH0pXHJcblxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUNyZWRpdE1vdmVtZW50KG1vdmVtZW50LCBzYWxlLCBrd2FyZ3MsIGRpc3BhdGNoLCByZXNvbHZlLCByZWplY3QpIHtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIHVybDogJy9hcGkvY3JlZGl0bW92ZW1lbnRzLycsXHJcbiAgICBkYXRhOiBtb3ZlbWVudFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9TQUxFJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogc2FsZX0pXHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICByZWplY3QoKVxyXG4gICAgfSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2xvYWRHbG9iYWxDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2FwaS5qcydcclxuaW1wb3J0IEZ1bGxJbnZvaWNlIGZyb20gJy4uL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCdcclxuaW1wb3J0IENvbXBhY3RJbnZvaWNlIGZyb20gJy4uL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5pbnZvaWNlLmlzVmlzaWJsZSwgaXNGdWxsOiBzdG9yZS5pbnZvaWNlLmlzRnVsbH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9hZEdsb2JhbENvbmZpZygnY29tcGFueScsIGZhbHNlLCAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCcsICdGRVRDSF9DT05GSUdfUkVKRUNURUQnKSlcclxuICB9XHJcblxyXG4gIGhpZGVQYW5lbCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgLy8gcHJpbnREaXYoJ2Z1bGwtaW52b2ljZS1wcmludCcpXHJcbiAgfVxyXG5cclxuICB0b2dnbGVQYW5lbCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcblxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW52b2ljZSgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJywgcGF5bG9hZDogLTF9KVxyXG5cclxuICB9XHJcblxyXG4gIHByaW50UGFuZWwoKSB7XHJcbiAgICB3aW5kb3cucHJpbnREaXYoJ2ludm9pY2UtcHJpbnQnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcclxuICAgICAgPyAnaW52b2ljZS1wYW5lbCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdpbnZvaWNlLXBhbmVsJ1xyXG4gICAgY29uc3QgaXNGdWxsQ2xhc3MgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXHJcbiAgICAgID8gJydcclxuICAgICAgOiAnIGNvbXBhY3QtaW52b2ljZS1vbidcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRUb01vdW50ID0gKHRoaXMucHJvcHMuaXNGdWxsKVxyXG4gICAgICA/IDxGdWxsSW52b2ljZSAvPlxyXG4gICAgICA6IDxDb21wYWN0SW52b2ljZSAvPlxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1tYWluJyArIGlzRnVsbENsYXNzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZS1wYW5lbC1oZWFkZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgRmFjdHVyYSBkZSBWZW50YVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5wcmludFBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtcHJpbnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgICAgICAgICB7LyogPGkgb25DbGljaz17dGhpcy50b2dnbGVJbnZvaWNlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtY29mZmVlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD0naW52b2ljZS1wcmludCcgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1jb250YWluZXInICsgaXNGdWxsQ2xhc3N9PlxyXG5cclxuICAgICAgICAgIHtjb21wb25lbnRUb01vdW50fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qc3gnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXHJcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFscy5qc3gnXHJcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEludm9pY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UnPlxyXG5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGF0YSAvPlxyXG4gICAgICA8VGFibGUgLz5cclxuICAgICAgPFRvdGFscyAvPlxyXG4gICAgICA8Tm90ZXMgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxyXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIENyZWRpdCBvciBjYXNoXHJcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xyXG4gICAgLy8gTE9HT1xyXG4gICAgY29uc3QgbG9nbyA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvIHx8ICcnXHJcbiAgICBjb25zdCBsb2dvV2lkdGggPSB0aGlzLnByb3BzLmNvbXBhbnkubG9nb1dpZHRoIHx8ICcxMzBweCdcclxuICAgIGNvbnN0IGxvZ29VcmwgPSBgL21lZGlhL2xvZ29zLyR7bG9nb31gXHJcblxyXG4gICAgLy8gQklMTCBEQVRBXHJcbiAgICBjb25zdCBoZWFkZXJOYW1lID0gdGhpcy5wcm9wcy5jb21wYW55LmNvbWVyY2lhbF9uYW1lIHx8ICcnXHJcbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbF9uYW1lIHx8ICcnXHJcblxyXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMuY29tcGFueS50ZWxlcGhvbmVzIHx8ICcnXHJcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcclxuXHJcbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWRUeXBlIHx8ICdQRVJTT04nXHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnJ1xyXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWxvZ28nPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT17eyd3aWR0aCc6IGAke2xvZ29XaWR0aH1gfX0gc3JjPXtsb2dvVXJsfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWluZm8nPlxyXG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cclxuICAgICAgICAgIDxoMz57aWRUZXh0fTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMSB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmNvdW50cnkgfHwgJyd9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGVsc1RleHR9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmVtYWlsIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2Utc2VwYXJhdG9yJz5cclxuICAgICAgICA8c3BhbiAvPlxyXG5cclxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cclxuICAgICAgICA8c3BhbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcclxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcclxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXHJcbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xyXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcclxuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xyXG4gICAgICA/IDx0cj5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdjbGllbnRBZHJlc3MnPkRJUkVDQ0nDk046IHtzYWxlLmNsaWVudC5hZHJlc3N9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgOiA8dHIgLz5cclxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMDEnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdjbGllbnQtdGFibGUnPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkNMSUVOVEU6PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAge2NsaWVudEFkcmVzc31cclxuICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XHJcblxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPk4uIGRlIGZhY3R1cmE6PC90aD5cclxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cclxuXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cclxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XHJcbiAgICBjb25zdCBnbG9iYWxEaXNjb3VudCA9ICh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxyXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxyXG4gICAgICA6IDx0ZCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RkPlxyXG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubGVuZ3RoXHJcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgICAgICAgPyBgR2BcclxuICAgICAgICAgIDogYEVgXHJcblxyXG4gICAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAge2l0ZW0ucXR5fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAge2l0ZW0uZGlzY291bnR9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICB7dGF4ZXNUZXh0fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIH0pXHJcbiAgICAgIDogPHRyPlxyXG4gICAgICAgIDx0ZD4tLTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcblxyXG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnRSb3cgPSB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50ID8gPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlczIgJTwvdGg+XHJcbiAgICAgIDogPHRoIHN0eWxlPXt7J2Rpc3BsYXknOiAnbm9uZSd9fSA+LTwvdGg+XHJcblxyXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10YWJsZSB0YWJsZSc+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkRlc2NyaXBjacOzbjwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlAuVTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+RGVzJTwvdGg+XHJcbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlByZWNpbzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PntpdGVtc308L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxyXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxyXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXHJcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRvdGFscyc+XHJcblxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cclxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cclxuICAgICAgPGgxPk5vdGFzOjwvaDE+XHJcblxyXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qc3gnXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXHJcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFscy5qc3gnXHJcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFjdEludm9pY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxyXG5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGF0YSAvPlxyXG4gICAgICA8VGFibGUgLz5cclxuICAgICAgPFRvdGFscyAvPlxyXG4gICAgICA8Tm90ZXMgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxyXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xyXG5cclxuICAgIC8vIEJJTEwgREFUQVxyXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxOYW1lIHx8ICcnXHJcblxyXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLmNvbXBhbnkubGVnYWxOYW1lIHx8ICcnXHJcblxyXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMuY29tcGFueS50ZWxlcGhvbmVzIHx8ICcnXHJcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcclxuXHJcbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWRUeXBlIHx8ICcnXHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnUEVSU09OJ1xyXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyLWluZm8nPlxyXG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MyIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cclxuICAgICAgICA8c3BhbiAvPlxyXG5cclxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cclxuXHJcbiAgICAgICAgPHNwYW4gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcclxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgdGF4ZXNUZXh0ID0gKGl0ZW0ucHJvZHVjdC51c2VUYXhlcylcclxuICAgICAgICA/IGBHYFxyXG4gICAgICAgIDogYEVgXHJcblxyXG4gICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5xdHl9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAge3RheGVzVGV4dH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgIOKCoSB7aXRlbS5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdGFibGUgdGFibGUnPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPkNhbnQ8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24tcm93Jz5BcnRpY3VsbzwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlRvdGFsPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHkgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgIHtpdGVtc31cclxuICAgICAgPC90Ym9keT5cclxuXHJcbiAgICA8L3RhYmxlPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcclxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcclxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXHJcbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xyXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcclxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMSdcclxuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xyXG4gICAgICA/IDx0cj5cclxuICAgICAgICA8dGg+RGlyZWM6PC90aD5cclxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA6IDx0ciAvPlxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWRhdGEnPlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cclxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmFjdHVyYTo8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+eygnMDAwMDAnICsgaWQpLnNsaWNlKC01KX08L3RkPlxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XHJcblxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxyXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxyXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXHJcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRvdGFscyc+XHJcblxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cclxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzJz5cclxuICAgICAgPGgxPk5vdGFzOjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMtY29udGVudCc+XHJcbiAgICAgICAgPGRpdj5GYWN0dXJhIGF1dG9yaXphZGEgbWVkaWFudGUgbGEgcmVzb2x1Y2lvbiBOMTE5NyBkZWwgMTIvMDgvMTk5NyBkZWwgREdEVC48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuaW1wb3J0IHt0b2dnbGVMYXlvdXR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBzdG9yZS5sYXlvdXQudG9wQmFyVG9nZ2xlVmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgbWVudUNsaWNrKGV2KSB7XHJcblxyXG4gICAgdG9nZ2xlTGF5b3V0KClcclxuXHJcbiAgfVxyXG5cclxuICBsb2dPdXRDbGljaygpIHtcclxuXHJcbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXHJcbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XHJcbiAgICAgIG9rOiAnQ2VycmFyJyxcclxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBob21lQ2xpY2soKSB7XHJcbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXHJcbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJylcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XHJcbiAgICAgIG9rOiAnSXInLFxyXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcclxuICAgICAgPyAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIHZpc2libGUnIDogJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSdcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYmFycycgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BCYXItcmlnaHQnPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5ob21lQ2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItaXRlbSB0b3BCYXItaXRlbS1jb25maWcnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5sb2dPdXRDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1sb2dvdXQnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXlvdXQoKSB7XHJcblxyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpXHJcbiAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxyXG5cclxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3B1bGxlZCcpKSB7XHJcblxyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxyXG4gICAgc2lkZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3B1bGxlZCcpXHJcbiAgc2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25maWdCYXIoKSB7XHJcblxyXG4gIGNvbnN0IGNvbmZpZ0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdCYXInKVxyXG5cclxuICBpZiAoY29uZmlnQmFyLmNsYXNzTGlzdC5jb250YWlucygnbm90LXZpc2libGUnKSkge1xyXG5cclxuICAgIGNvbmZpZ0Jhci5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmlzaWJsZScpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uZmlnQmFyLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci5qc3gnXHJcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHRleHQ6ICdQcm9kdWN0b3MnLFxyXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXHJcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0cydcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXHJcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1saXN0JyxcclxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RkZXBhcnRtZW50cydcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHRleHQ6ICdTdWItRmFtaWxpYXMnLFxyXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtb3V0ZGVudCcsXHJcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIF1cclxuXHJcbiAgICAvLyBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgJ0FQUCdcclxuICAgIGNvbnN0IHNpZGVNZW51Q2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdzaWRlTWVudScgOiAnc2lkZU1lbnUgaGlkZGVuQnlBcHAnXHJcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XHJcblxyXG4gICAgICB7LyogPGgzIGNsYXNzTmFtZT0nc2lkZU1lbnUtaGVhZGVyJz57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPiAqL31cclxuICAgICAgPFVzZXIgLz5cclxuXHJcbiAgICAgIDxTZWFyY2ggLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS13cmFwcGVyIGNvbC14cy0xMic+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZU1lbnUtaXRlbXMnPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XHJcbiAgICAgICAgICAgICAgSW5pY2lvPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9zYWxlJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XHJcbiAgICAgICAgICAgICAgTnVldmEgVmVudGE8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3Byb2Zvcm1hJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XHJcbiAgICAgICAgICAgICAgTnVldmEgQ290aXphY2nDs248L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3ByZXNhbGUnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cclxuICAgICAgICAgICAgICBOdWV2YSBQcmV2ZW50YTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdCdXNjYXIuLi4nIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBzdG9yZS51c2VyLnVzZXIsXHJcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBhdmF0YXIgPSB0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyID8gYC9tZWRpYS8ke3RoaXMucHJvcHMucHJvZmlsZS5hdmF0YXJ9YCA6ICcvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcclxuXHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy51c2VyLmZpcnN0X25hbWVcclxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxyXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcclxuICAgICAgICA/IHRoaXMucHJvcHMudXNlci51c2VybmFtZSA6ICcnKVxyXG5cclxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xyXG5cclxuICAgIGxldCBmdWxsTmFtZSA9IGAke25hbWV9ICR7bGFzdE5hbWV9YFxyXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXIgY29sLXhzLTEyICc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1hdmF0YXInPlxyXG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItbmFtZSc+XHJcbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxyXG5cclxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zdG9yZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcclxuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIvcmVkdWNlci5qcydcclxuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcclxuaW1wb3J0IGNsaWVudHMgZnJvbSAnLi9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMnXHJcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgc2VhcmNoQ2xpZW50cyBmcm9tICcuL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHBheSBmcm9tICcuL3NhbGUvcGF5L3JlZHVjZXIuanMnXHJcbmltcG9ydCBpbnZvaWNlIGZyb20gJy4vZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMnXHJcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9yZWR1Y2VyLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBmZXRjaGluZyxcclxuICBsYXlvdXQsXHJcbiAgdXNlcixcclxuICBjYXJ0LFxyXG4gIGNsaWVudHMsXHJcbiAgcHJvZHVjdHMsXHJcbiAgc2FsZSxcclxuICBtZXNzYWdlcyxcclxuICBzZWFyY2hDbGllbnRzLFxyXG4gIHNlYXJjaFByb2R1Y3RzLFxyXG4gIHBheSxcclxuICBpbnZvaWNlLFxyXG4gIHNhbGVzLFxyXG4gIGNvbmZpZ1xyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXHJcbiAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NBTEVfUEFORUxfTU9VTlRFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBzaWRlTWVudVZpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0hPTUVfUEFORUxfTU9VTlRFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICB1c2VyOiB7fSxcclxuICBwcm9maWxlOiB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcclxuICAgICAgICBwcm9maWxlOiBhY3Rpb24ucGF5bG9hZC5wcm9maWxlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7fSxcclxuICAgICAgICBwcm9maWxlOiB7fVxyXG4gICAgICB9XHJcblxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvdXNlci9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZWRpdGFibGU6IHRydWUsXHJcbiAgY3JlYXRlZDogJycsXHJcbiAgdXBkYXRlZDogJycsXHJcbiAgaXNOdWxsOiBmYWxzZSxcclxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICBjYXJ0SXRlbXM6IFtdLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICBjYXJ0VGF4ZXM6IDAsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XHJcbiAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXHJcbiAgZGlzY291bnRUb3RhbDogMCwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICBjcmVhdGVkOiAnJyxcclxuICAgICAgICB1cGRhdGVkOiAnJyxcclxuICAgICAgICBpc051bGw6IGZhbHNlLFxyXG4gICAgICAgIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xyXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcclxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xyXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnQUREX1RPX0NBUlQnOlxyXG4gICAge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IHRydWUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBbXHJcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnRJdGVtcyxcclxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdSRU1PVkVfRlJPTV9DQVJUJzpcclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxyXG5cclxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXHJcblxyXG4gICAgICBjb25zdCBpdGVtc0xlZnRJbkNhcnQgPSAobmV3Q2FydC5sZW5ndGggPiAwKVxyXG4gICAgICAvLyA/IHRydWVcclxuICAgICAgLy8gOiBmYWxzZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGl0ZW1zTGVmdEluQ2FydCxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlQnOlxyXG4gICAge1xyXG5cclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdID0gYWN0aW9uLnBheWxvYWQuaXRlbVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJzpcclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxyXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XVsnbG90ZSddID0gYWN0aW9uLnBheWxvYWQubG90ZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfVE9UQUxTJzpcclxuICAgIHtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLnRheGVzLFxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQudG90YWwsXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcclxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5zdWJUb3RhbE5vRGlzY291bnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX0dMT0JBTF9ESVNDT1VOVCc6XHJcbiAgICB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdSRVBMQUNFX0NBUlQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9MSU5FX0RJU0NPVU5UJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdLmRpc2NvdW50ID0gYWN0aW9uLnBheWxvYWQudmFsdWVcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBuZXdDYXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXHJcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxyXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXHJcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXHJcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXHJcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxyXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXHJcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXHJcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXHJcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcclxuICBjb2RlOiAnMDAwMCcsXHJcbiAgY2xpZW50VHlwZTogJ0dFTkVSQUwnLFxyXG4gIGNyZWF0ZWQ6ICcnLFxyXG4gIGNyZWRpdF9kYXlzOiAwLFxyXG4gIGNyZWRpdF9saW1pdDogMCxcclxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcclxuICBoYXNfY3JlZGl0OiBmYWxzZSxcclxuICBpZDogJzAwMDAwMDAwMCcsXHJcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXHJcbiAgbmFtZTogJ0NsaWVudGUnLFxyXG4gIHVwZGF0ZWQ6ICcnLFxyXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxyXG4gIF9pZDogMFxyXG59XHJcblxyXG5jb25zdCB1c2VyU2VsZWN0ZWRNb2RlbCA9IHtcclxuICB1c2VyOiAnMDAwMCcsXHJcbiAgbmFtZTogJycsXHJcbiAgbGFzdF9uYW1lOiAnJyxcclxuICBpZDogJzAwMDAnLFxyXG4gIF9pZDogMFxyXG59XHJcblxyXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXHJcbiAgY2xpZW50c0ZlY3RlZDogZmFsc2UsXHJcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxyXG4gIGNsaWVudHM6IFtdLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcclxuICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsLFxyXG4gIGNsaWVudFNlbGVjdGVkRGVidDogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNsaWVudHNGZXRjaEVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBjbGllbnRzRmVjdGVkOiB0cnVlLFxyXG4gICAgICAgIGNsaWVudHM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxyXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVNFUl9TRUxFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgLy8gKioqKioqKiogVVNFUlMgKioqKioqKipcclxuXHJcbiAgICBjYXNlICdTRVRfQ0xJRU5UX0RFQlQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkRGVidDogcGFyc2VGbG9hdChhY3Rpb24ucGF5bG9hZC5kZWJ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBjbGllbnRzID0gc3RhdGUuY2xpZW50c1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgY2xpZW50czogY2xpZW50c1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdMT0FERURfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudCxcclxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9UUlVFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcclxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSB0cnVlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTE9BREVEX0ZBTFNFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcclxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBwcm9kdWN0czoge30sXHJcbiAgaW5wdXRWYWw6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge31cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbnB1dFZhbDogJydcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdHNcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGZ1bGxXaWR0aDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnVE9HR0xFX0ZVTExfV0lEVEgnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCB3aWR0aCA9ICFzdGF0ZS5mdWxsV2lkdGhcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmdWxsV2lkdGg6IHdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgbWVzc2FnZXM6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1BST0RVQ1RfTk9UX0ZPVU5EJzpcclxuICAgIHtcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgUFJPRFVDVE8hJywgJ0VsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTk9UX0ZPVU5EX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBMQSBWRU5UQSEnLCBgTGEgdmVudGEgIyR7YWN0aW9uLnBheWxvYWR9IG5vIGV4aXN0ZSwgbyBoYXkgdW4gcHJvYmxlbWEgcGFyYSBjYXJnYXJsYSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8uYClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJzpcclxuICAgIHtcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIScsICdIdWJvIHVuIGVycm9yIGFsIGVuY29udHJhciBlbCBwcm9kdWN0byBlbiBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgYWdyZWdhZG9zLHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uJylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIFBST0RVQ1RPUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIHByb2R1Y3RvcywgcG9yIGZhdm9yIGludGVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAke2FjdGlvbi5wYXlsb2FkfWApXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0NMSUVOVF9OT1RfRk9VTkQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBDTElFTlRFIScsICdFbCBjbGllbnRlIGNvbiBlbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBDTElFTlRFUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIGNsaWVudGVzLCBwb3IgZmF2b3IgaW50ZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgY2xpZW50c01hdGNoZWQ6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9ISURFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogW11cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgcHJvZHVjdHNNYXRjaGVkOiBbXSxcclxuICBzZWFyY2hWYWx1ZTogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdQUk9EVUNUX1NIT1dfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdQUk9EVUNUX0hJREVfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfU1VDQ0VTUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogW11cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgaXNWaXNpYmxlOiBmYWxzZSxcclxuICBwYXlNZXRob2Q6ICdDQVNIJyxcclxuICBjYXNoQW1vdW50OiAwLFxyXG4gIGNhcmREaWdpdHM6ICcnLFxyXG4gIGNhcmRBdXRoOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdTSE9XX1BBWV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0hJREVfUEFZX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0NIQU5HRV9QQVlfTUVUSE9EJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9DQVNIX0FNT1VOVCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0FVVEgnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfRElHSVRTJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdMT0FERURfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5wYXkucGF5TWV0aG9kLFxyXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXNoQW1vdW50LFxyXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkRGlnaXRzLFxyXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZEF1dGhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgaXNWaXNpYmxlOiBmYWxzZSxcclxuICBpc0Z1bGw6IHRydWUsXHJcbiAgZGVmYXVsdERlc2luZzogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdTSE9XX0lOVk9JQ0VfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdISURFX0lOVk9JQ0VfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBmdWxsT3JOb3QgPSBzdGF0ZS5pc0Z1bGxcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0Z1bGw6ICFmdWxsT3JOb3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgZGVzaW5nT3JOb3QgPSBzdGF0ZS5kZWZhdWx0RGVzaW5nXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZGVmYXVsdERlc2luZzogIWRlc2luZ09yTm90XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMiLCJjb25zdCBzYWxlQWN0aXZlTW9kZWwgPSB7XHJcbiAgaWQ6IDAsXHJcbiAgYmlsbF9udW1iZXI6ICcnLFxyXG4gIGNhcnQ6IHt9LFxyXG4gIGNsaWVudDogJycsXHJcbiAgdXNlcjogJycsXHJcbiAgY2xpZW50X2lkOiAnJyxcclxuICBwYXk6IHt9LFxyXG4gIHBheWVkOiBmYWxzZSxcclxuICBwYXlfdHlwZTogJ0NBU0gnXHJcblxyXG59XHJcblxyXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIHNhbGVzOiBbXSxcclxuICBzYWxlQWN0aXZlOiBzYWxlQWN0aXZlTW9kZWwsXHJcbiAgY29tcGxldGVkOiBmYWxzZSxcclxuICBzYWxlQWN0aXZlSWQ6IDAsXHJcbiAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2UsXHJcbiAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0NMRUFSX0FMTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgc2FsZUFjdGl2ZUlkOiAwLFxyXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NIT1dfU0FMRVNfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0hPV19QUkVTQUxFU19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdISURFX1NBTEVTX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdISURFX1BSRVNBTEVTX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9TQUxFU19SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZXM6IFtdXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9TQUxFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2FydCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2FydClcclxuICAgICAgY29uc3QgY2xpZW50ID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC5jbGllbnQpXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnVzZXIpXHJcbiAgICAgIGNvbnN0IHBheSA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQucGF5KVxyXG5cclxuICAgICAgY29uc3Qgc2FsZSA9IHtcclxuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWQsXHJcbiAgICAgICAgYmlsbF9udW1iZXI6IGFjdGlvbi5wYXlsb2FkLmJpbGxfbnVtYmVyLFxyXG4gICAgICAgIGNhcnQ6IGNhcnQsXHJcbiAgICAgICAgY2xpZW50OiBjbGllbnQsXHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICBwYXk6IHBheSxcclxuICAgICAgICBwYXllZDogYWN0aW9uLnBheWxvYWQucGF5ZWQsXHJcbiAgICAgICAgcGF5X3R5cGU6IGFjdGlvbi5wYXlsb2FkLnBheV90eXBlLFxyXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLmNyZWF0ZWQpLFxyXG4gICAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLnVwZGF0ZWQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfU0FMRV9JRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9QUkVTQUxFX0lEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0ZPUk1BX0lEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBzYWxlcyA9IHN0YXRlLnNhbGVzXHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBzYWxlczogc2FsZXNcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIHNhbGVBY3RpdmVJZDogYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcclxuICAgIHtcclxuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxyXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XHJcbiAgICAgIHNhbGUuY2xpZW50ID0gYWN0aW9uLnBheWxvYWQuY2xpZW50XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcclxuICAgIHtcclxuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxyXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XHJcbiAgICAgIHNhbGUuY2xpZW50ID0gYWN0aW9uLnBheWxvYWQuY2xpZW50XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgY29tcGFueToge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiBhY3Rpb24ucGF5bG9hZC5kYXRhXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DT05GSUdfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXToge31cclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9DT05GSUcnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxyXG4gICAgICB9XHJcblxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9jb25maWcvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9jb25maWcvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZmV0Y2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmZXRjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgdXVpZHYxID0gcmVxdWlyZSgndXVpZC92MScpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZ2xvYmE7IGRpc2NvdW50IG9mIGNvbXBsZXRlIHN0b3JhZ2Ugb2YgaXRlbXMsIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlLCB0aGVuIHVwZGF0aW5nIERPTUVcclxuZXhwb3J0IGZ1bmN0aW9uIHJlY2FsY0NhcnQoaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcclxuXHJcbiAgY29uc3QgbmV3Q2FydCA9IGl0ZW1zSW5DYXJ0Lm1hcChpdGVtID0+IHtcclxuXHJcbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbS5wcm9kdWN0LCBpdGVtLnF0eSwgaXRlbS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcclxuXHJcbiAgICBuZXdJdGVtLnN1YnRvdGFsID0gZGF0YS5zdWJ0b3RhbFxyXG4gICAgbmV3SXRlbS50b3RhbFdpdGhJdiA9IGRhdGEudG90YWxXaXRoSXZcclxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxyXG4gICAgbmV3SXRlbS5zdWJUb3RhbE5vRGlzY291bnQgPSBkYXRhLnN1YlRvdGFsTm9EaXNjb3VudFxyXG4gICAgbmV3SXRlbS5wcmljZVRvVXNlID0gZGF0YS5wcmljZVRvVXNlXHJcblxyXG4gICAgcmV0dXJuIG5ld0l0ZW1cclxuXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnUkVQTEFDRV9DQVJUJywgcGF5bG9hZDogbmV3Q2FydH1cclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtRGlzY291bnQoaXRlbXNJbkNhcnQsIGNvZGUsIGRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5LCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcclxuICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcclxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcclxuICBjb25zdCBsb3RlTnVtID0gIWxvdGUgPyAnLScgOiBsb3RlXHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXHJcblxyXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJUX0lURU1fTE9URScsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBsb3RlOiBsb3RlTnVtLFxyXG4gICAgICAgIGluZGV4OiBpbmRleEluQ2FydFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxuXHJcbn1cclxuXHJcbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsIGRlZmF1bHRDb25maWcsIHVzZXJDb25maWcpIHtcclxuXHJcbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IHByb2R1Y3RTZWxlY3RlZCA9IHByb2R1Y3RzLmZpbmRJbmRleChwcm9kdWN0ID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxyXG4gIH0pIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSlcclxuXHJcbiAgcmV0dXJuIHJlc1xyXG5cclxufVxyXG5cclxuLy8gVXBkYXRlcyBBbW91bnQgYmFzZWQgb24gcXR5IGlucHV0IGZpZWxkXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXR5IChjb2RlLCBxdHksIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXHJcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXHJcbiAgY29uc3QgcmVzID0ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXR5Q29kZSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcclxuICBjb25zdCBxdHlOdW0gPSBwYXJzZUZsb2F0KHF0eSlcclxuICBjb25zdCByZXMgPSB7XHJcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcclxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXHJcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbi8vIFVwZGF0ZXMgQW1vdW50IGJhc2VkIG9uIHF0eSBpbnB1dCBmaWVsZFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wcm9kdWN0LmNvZGUgPT0gY29kZSlcclxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcclxuICBjb25zdCByZXMgPSB7XHJcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcclxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXHJcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBMT0NBTCBBVVggRlVOQ1RJT05TXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gY2hlY2tzIGluIGNhcnQgaWYgaXRlbSBhbHJlYWR5IGV4aXN0c1xyXG5mdW5jdGlvbiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpIHtcclxuXHJcbiAgLy8gY2hlY2sgaWYgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoY2FydCA9PiBjYXJ0LnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGNhcnQucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXHJcblxyXG4gIGNvbnN0IGRhdGFOZXdQcm9kID0gY2FjbFN1YnRvdGFsKHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sIHF0eSwgMCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcclxuXHJcbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcclxuICBpZiAocGVyTGluZSkge1xyXG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXHJcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxyXG4gICAgICA/IHtcclxuICAgICAgICB0eXBlOiAnQUREX1RPX0NBUlQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHV1aWQ6IHV1aWQsXHJcbiAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLFxyXG4gICAgICAgICAgcXR5OiBxdHksXHJcbiAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGFOZXdQcm9kLmRpc2NvdW50Q3VycmVuY3ksXHJcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcclxuICAgICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcclxuICAgICAgICAgIHRvdGFsV2l0aEl2OiBkYXRhTmV3UHJvZC50b3RhbFdpdGhJdixcclxuICAgICAgICAgIGxvdGU6ICctJyxcclxuICAgICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDoge1xyXG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIHF0eSxcclxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXHJcbiAgICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiByZXNcclxuXHJcbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxyXG4gICAgY29uc3QgcmVzID0ge1xyXG4gICAgICB0eXBlOiAnQUREX1RPX0NBUlQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdXVpZDogdXVpZCxcclxuICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLFxyXG4gICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGFOZXdQcm9kLmRpc2NvdW50Q3VycmVuY3ksXHJcbiAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxyXG4gICAgICAgIHRvdGFsV2l0aEl2OiBkYXRhTmV3UHJvZC50b3RhbFdpdGhJdixcclxuICAgICAgICBsb3RlOiAnLScsXHJcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gY2FsY3VsYXRlcyB0aGUgc3VidG90YWwgYnkgbGluZSwgYWxzbyB0aGUgdG90YWwgd2l0aCBpdiBpbmNsdWRlZCwgdGhlIGRpc2NvdW50IGluIGN1cnJlbmN5IGZvcm1hdFxyXG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcclxuXHJcbiAgY29uc3QgcHJpY2UgPSBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudClcclxuXHJcbiAgY29uc3Qgc3ViVG90YWxOb0Rpc2NvdW50ID0gcHJpY2UgKiBxdHlcclxuXHJcbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxyXG5cclxuICBjb25zdCBpdjEgPSAocHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXHJcbiAgICA6IDBcclxuXHJcbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcclxuICAgID8gc3ViVG90YWwgKiAocHJvZHVjdC50YXhlczIgLyAxMDApXHJcbiAgICA6IDBcclxuXHJcbiAgY29uc3QgaXYzID0gKHByb2R1Y3QudXNlX3RheGVzMylcclxuICAgID8gc3ViVG90YWwgKiAocHJvZHVjdC50YXhlczMgLyAxMDApXHJcbiAgICA6IDBcclxuXHJcbiAgY29uc3QgdG90YWxXaXRoSXYgPSBzdWJUb3RhbCArIGl2MSArIGl2MiArIGl2M1xyXG5cclxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxyXG4gIGNvbnN0IGRpc2NvdW50Q3VycmVuY3lHbG9iYWwgPSAoKHByaWNlICogcXR5KSAtIGRpc2NvdW50Q3VycmVuY3lJbkxpbmUpICogKGdsb2JhbERpc2NvdW50IC8gMTAwKVxyXG5cclxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcclxuICAgIHRvdGFsV2l0aEl2OiB0b3RhbFdpdGhJdixcclxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRpc2NvdW50Q3VycmVuY3ksXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcclxuICAgIHByaWNlVG9Vc2U6IHByaWNlXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXHJcbmZ1bmN0aW9uIHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXgsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCB1dWlkKSB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIHByb2R1Y3Q6IGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LFxyXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGF0YS5kaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgcXR5OiBuZXdRdHksXHJcbiAgICBkaXNjb3VudDogcHJvZHVjdERpc2NvdW50LFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhLnN1YlRvdGFsTm9EaXNjb3VudCxcclxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxyXG4gICAgdG90YWxXaXRoSXY6IGRhdGEudG90YWxXaXRoSXYsXHJcbiAgICBsb3RlOiBpdGVtc0luQ2FydFtpbmRleF0ubG90ZSxcclxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZGV0ZXJtaW4gcHJpY2UgdG8gdXNlIGluIGNhbGN1bGF0aW9uXHJcbmZ1bmN0aW9uIHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KSB7XHJcblxyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnR0VORVJBTCcpIHJldHVybiBwcm9kdWN0LnByaWNlXHJcblxyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicpIHJldHVybiBwcm9kdWN0LnByaWNlXHJcblxyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScpIHJldHVybiBwcm9kdWN0LnByaWNlXHJcblxyXG4gIHJldHVybiBwcm9kdWN0LnByaWNlXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9