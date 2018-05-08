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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1sb2dnZXIvZGlzdC9yZWR1eC1sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2VzL2lzUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvYXBwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21haW4vcm91dGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0Q2xpZW50RGVidC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYnV0dG9ucy9idXR0b25zLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9zYXZlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3N0b3JlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiaGlkZVBhbmVsIiwic2VhcmNoUHJvZHVjdCIsInByb2R1Y3RTZWxlY3RlZFRhYmxlIiwidHlwZSIsInBheWxvYWQiLCJ2YWwiLCJwcm9kdWN0cyIsInRleHQiLCJzcGxpdCIsIm1hdGNocyIsImZvckVhY2giLCJjb250cm9sIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0IiwidG9TdHJpbmciLCJpbmRleCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIndvcmQiLCJwdXNoIiwicmVzIiwibGVuZ3RoIiwiY29kZSIsInNlYXJjaENsaWVudCIsImNsaWVudHMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNsaWVudCIsImxhc3RfbmFtZSIsImNsaWVudFNlbGVjdGVkIiwidXNlclNlbGVjdGVkIiwiZmluZEluZGV4IiwiX2lkIiwidXNlcnMiLCJ1c2VyIiwidXBkYXRlU3RvcmVDYXNoQW1vdW50IiwidXBkYXRlU3RvcmVDYXJkQXV0aCIsInVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyIsImFtb3VudCIsInBhcnNlRmxvYXQiLCJudW1iZXIiLCJnZXRJdGVtRGlzcGF0Y2giLCJnZXRJdGVtRG91YmxlRGlzcGF0Y2giLCJnZXRJdGVtUmV0dXJuIiwic2V0SXRlbSIsInNhdmVJdGVtIiwidXBkYXRlSXRlbSIsInBhdGNoSXRlbSIsInBhdGNoSXRlbXMiLCJkZWxldGVJdGVtIiwibG9hZEdsb2JhbENvbmZpZyIsInNhdmVMb2ciLCJnZXROZXh0TnVtZXJpY0NvZGUiLCJzZXROZXh0UHJldkl0ZW0iLCJkZWZhdWx0cyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJrd2FyZ3MiLCJ1cmwiLCJzdWNjZXNzVHlwZSIsImVycm9yVHlwZSIsImRpc3BhdGNoIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJzdGF0dXMiLCJhbGVydCIsInN1Y2Nlc3NUeXBlMiIsImxvb2tVcFZhbHVlIiwibG9va1VwRmllbGQiLCJoaXN0b3J5IiwicmVkaXJlY3RVcmwiLCJtb2RlbE5hbWUiLCJsb29rVXBOYW1lIiwiZGlzcGF0Y2hUeXBlIiwiZGlzcGF0Y2hUeXBlMiIsImRpc3BhdGNoRXJyb3JUeXBlIiwiaXRlbSIsImxvZ0NvZGUiLCJpdGVtT2xkIiwibG9nTW9kZWwiLCJsb2dEZXNjcmlwdGlvbiIsImlzU2FsZSIsIm1ldGhvZCIsInN1Y2Vzc01lc3NhZ2UiLCJzZXQiLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJrd2FyZ3MyIiwiaXRlbTIiLCJ1cmwyIiwibG9nQ29kZTIiLCJpdGVtT2xkMiIsImxvZ01vZGVsMiIsImxvZ0Rlc2NyaXB0aW9uMiIsIm1vZGVsIiwic2VjdGlvbiIsInN1Y2Nlc3MiLCJmYWlsIiwiY29uZmlnIiwiZmlsdGVyIiwidmFsdWUiLCJvbGRPYmplY3QiLCJvYmplY3QiLCJwcmV2T2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld09iamVjdCIsInVzZXIyIiwicHJldl9vYmplY3QiLCJuZXdfb2JqZWN0IiwiZWxlbWVudHMiLCJmaWVsZCIsImtleXMiLCJtYXAiLCJlbGVtZW50Iiwic29ydCIsImEiLCJiIiwibWF4IiwicG9wIiwibmV4dCIsInBhcnNlSW50IiwiaXRlbXMiLCJjb2RlRmllbGQiLCJwcmV2aW91cyIsIm5leHRDb2RlIiwicHJldkNvZGUiLCJ3aW5kb3ciLCJhbGVydGlmeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwic3RvcmUiLCJmZXRjaGluZyIsInNpZGVNZW51VmlzaWJsZSIsImxheW91dCIsInByb3BzIiwibWFpbkNvbnRhaW5lckNsYXNzIiwiY29udGVudCIsIkNvbXBvbmVudCIsImZlY3RoUHJvZmlsZSIsImZlY3RoSXNBZG1pbkxvY2tlZCIsImZpZWxkcyIsInByb2ZpbGUiLCJyb3V0ZXMiLCJIb21lIiwiU2FsZSIsImZ1bGxXaWR0aCIsInNhbGUiLCJ0b3RhbCIsImNhcnQiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwiZm9ybWF0TW9uZXkiLCJ0b2dnbGVXaWR0aCIsImJpbmQiLCJQcm9kdWN0IiwiaXRlbXNJbkNhcnQiLCJjYXJ0SXRlbXMiLCJpbnB1dFZhbCIsImdsb2JhbERpc2NvdW50IiwiY29kZUlucHV0IiwiZm9jdXMiLCJwcm9kdWN0S3dhcmdzIiwiZXYiLCJrZXkiLCJ0YXJnZXQiLCJxdHkiLCJpc05hTiIsImRlZmF1bHRDb25maWciLCJ1c2VyQ29uZmlnIiwiZGlzYWJsZWQiLCJpbnB1dEtleVByZXNzIiwiaW5wdXQiLCJzZWFyY2hQcm9kdWN0Q2xpY2siLCJNb3VzZXRyYXAiLCJyZXF1aXJlIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsImRpc2NvdW50IiwibG90ZSIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwiYmFyY29kZSIsInJlbW92ZUljb25DbGFzcyIsInRheGVzMSIsInVzZV90YXhlcyIsInRheGVzIiwicXR5RmllbGQiLCJxdHlJbnB1dENoYW5nZSIsInV1aWQiLCJmaWVsZEZvY3VzIiwicXR5SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50RmllbGQiLCJzYWxlTG9hZGVkIiwiZGlzY291bnRJbnB1dEtleVByZXNzIiwiZGlzY291bnRJbnB1dE9uQmx1ciIsInNldENhcnRJdGVtQWN0aXZlIiwicHJpY2VUb1VzZSIsInRvdGFsV2l0aEl2IiwicmVtb3ZlSXRlbSIsInVwZGF0ZVRvdGFscyIsInJlbW92ZUZyb21DYXJ0Iiwic3VidG90YWwiLCJzdWJUb3RhbE5vRGlzY291bnQiLCJkaXNjb3VudFRvdGFsIiwidGF4ZXNDYWxjIiwidGF4ZXNDYWxjMiIsInVzZV90YXhlczIiLCJ0YXhlczIiLCJ0YXhlc0NhbGMzIiwidXNlX3RheGVzMyIsInRheGVzMyIsImRpc2NvdW50Q3VycmVuY3kiLCJpbmRleEluQ2FydCIsIkFzaWRlIiwiYXNpZGVDbGFzcyIsImFzaWRlQ29udGFpbmVyQ2xhc3MiLCJDbGllbnRzIiwiZGVidCIsImNsaWVudFNlbGVjdGVkRGVidCIsIm5leHRQcm9wcyIsImNsaWVudF9pZCIsImlkIiwiZGVmYXVsdERpc2NvdW50IiwiY2xpZW50S3dhcmdzIiwiY2xpZW50VG9TaG93Iiwic2VhcmNoQ2xpZW50Q2xpY2siLCJnZXRDbGllbnREZWJ0IiwicG9zdCIsIlRvdGFscyIsImNhcnRUYXhlcyIsImNhcnRTdWJ0b3RhbE5vRGlzY291bnQiLCJzdGF0ZSIsImRpc2NvdW50VmFsIiwibWF4RGlzY291bnQiLCJpbnB1dE9uQmx1ciIsIkJ1dHRvbnMiLCJzYWxlcyIsImNvbXBsZXRlZCIsImxvY2F0aW9uIiwiaHJlZiIsImJ1dHRvbnMiLCJzaG93SW5vaWNlUGFuZWwiLCJuZXdTYWxlIiwic2hvd1BheVBhbmVsIiwic2hvd1NhbGVQYW5lbCIsInNob3dQcmVzYWxlc1BhbmVsIiwic2VhcmNoUHJvZHVjdHMiLCJ2aXNpYmxlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ2aXNpYmxlT3JOb3QiLCJwYW5lbENsaWNrIiwic2VhcmNoRm9ybSIsInNlYXJjaFZhbHVlIiwic2VhcmNoVmFsIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsIk51bWJlciIsInByb3RvdHlwZSIsImMiLCJkIiwidCIsIm4iLCJNYXRoIiwiYWJzIiwidW5kZWZpbmVkIiwicyIsImkiLCJTdHJpbmciLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsInJlcGxhY2UiLCJzbGljZSIsInJlc3VsdHNUYWJsZSIsIm1hdGNoZXMiLCJwcm9kdWN0c01hdGNoZWQiLCJzZWxlY3RQcm9kdWN0Iiwic2VsbHByaWNlIiwic2VhcmNoQ2xpZW50cyIsInNlYXJjaENsaWVudEFjdGlvbiIsImNsaWVudHNNYXRjaGVkIiwiaGFzQ3JlZGl0IiwiaGFzX2NyZWRpdCIsInNlbGVjdENsaWVudCIsIlBheVBhbmVsIiwicGFuZWxWaXNpYmxlIiwicGF5IiwiaXNWaXNpYmxlIiwicGF5TWV0aG9kIiwiUGF5TWV0aG9kIiwiY2xpY2tDaGFuZ2VQYXlNZXRob2QiLCJQYXlDYXNoIiwiY2FzaEFtb3VudCIsInBheUFtb3VudENoYW5nZWQiLCJQYXlDYXJkIiwiY2FyZEF1dGgiLCJjYXJkRGlnaXRzIiwicGF5Q2FyZERpZ2l0c0NoYW5nZWQiLCJwYXlDYXJkQXV0aENoYW5nZWQiLCJQYXlDcmVkaXQiLCJhdmFpbGFibGUiLCJjcmVkaXRfbGltaXQiLCJjbGllbnRMaW1pdCIsImNsaWVudEF2YWlsYWJsZSIsIlBheU90aGVyIiwiRmV0Y2hpbmciLCJQYXlTaWRlQmFyIiwicGF5ZWQiLCJyZXNldCIsImNoYW5nZSIsInBheUJ1dHRvbkNsYXNzIiwiY2FzaCIsImF1dGgiLCJkaWdpdHMiLCJTYXZlQnRuIiwicGF5X3R5cGUiLCJjcmVkaXRNb3ZlbWVudCIsIm1vdmVtZW50X3R5cGUiLCJ1cGRhdGVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlQnRuIiwiYmlsbF9pZCIsImJpbGxfbnVtYmVyIiwic2F2ZUNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnQiLCJJbnZvaWNlUGFuZWwiLCJpbnZvaWNlIiwiaXNGdWxsIiwicHJpbnREaXYiLCJpc0Z1bGxDbGFzcyIsImNvbXBvbmVudFRvTW91bnQiLCJ0b2dnbGVQYW5lbCIsInByaW50UGFuZWwiLCJGdWxsSW52b2ljZSIsIkhlYWRlciIsInNhbGVBY3RpdmUiLCJjb21wYW55IiwiaGVhZGVydGV4dCIsImxvZ28iLCJsb2dvV2lkdGgiLCJsb2dvVXJsIiwiaGVhZGVyTmFtZSIsImNvbWVyY2lhbF9uYW1lIiwiaGVhZGVyTmFtZTIiLCJsZWdhbF9uYW1lIiwidGVscyIsInRlbGVwaG9uZXMiLCJ0ZWxzVGV4dCIsImlkVHlwZSIsImlkVGV4dCIsInRvVXBwZXJDYXNlIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNvdW50cnkiLCJlbWFpbCIsIkRhdGEiLCJkYXRlIiwiY3JlYXRlZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2xpZW50QWRyZXNzIiwiYWRyZXNzIiwiVGFibGUiLCJ0YXhlc1RleHQiLCJnbG9iYWxEaXNjb3VudFJvdyIsIk5vdGVzIiwiQ29tcGFjdEludm9pY2UiLCJjb21lcmNpYWxOYW1lIiwibGVnYWxOYW1lIiwidXNlVGF4ZXMiLCJUb3BCYXIiLCJ0b3BCYXJUb2dnbGVWaXNpYmxlIiwiY29uZmlybSIsImJ1dHRvbkNsYXNzIiwibWVudUNsaWNrIiwiaG9tZUNsaWNrIiwibG9nT3V0Q2xpY2siLCJ0b2dnbGVMYXlvdXQiLCJ0b2dnbGVDb25maWdCYXIiLCJtYWluQ29udGFpbmVyIiwic2lkZU1lbnUiLCJyZW1vdmUiLCJhZGQiLCJjb25maWdCYXIiLCJTaWRlTWVudSIsInNpZGVNZW51Q2xhc3MiLCJTZWFyY2giLCJVc2VyIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsInVzZXJuYW1lIiwibGFzdE5hbWUiLCJmdWxsTmFtZSIsInN1YnN0cmluZyIsIm1pZGRsZXdhcmUiLCJtZXNzYWdlcyIsInJlZHVjZXIiLCJzdGF0ZUNvbnN0IiwiYWN0aW9uIiwiZWRpdGFibGUiLCJ1cGRhdGVkIiwiaXNOdWxsIiwiY2FydEhhc0l0ZW1zIiwiY2FydFN1YnRvdGFsIiwibmV3Q2FydCIsInNwbGljZSIsIml0ZW1zTGVmdEluQ2FydCIsImNsaWVudFNlbGVjdGVkTW9kZWwiLCJjbGllbnRUeXBlIiwiY3JlZGl0X2RheXMiLCJkb2NUeXBlIiwidXNlclNlbGVjdGVkTW9kZWwiLCJjbGllbnRzRmV0Y2hpbmciLCJjbGllbnRzRmVjdGVkIiwiY2xpZW50c0ZldGNoRXJyb3IiLCJ3aWR0aCIsImRlZmF1bHREZXNpbmciLCJmdWxsT3JOb3QiLCJkZXNpbmdPck5vdCIsInNhbGVBY3RpdmVNb2RlbCIsInNhbGVBY3RpdmVJZCIsImlzU2FsZXNQYW5lbFZpc2libGUiLCJpc1ByZXNhbGVzUGFuZWxWaXNpYmxlIiwicGFyc2UiLCJEYXRlIiwicmVjYWxjQ2FydCIsInVwZGF0ZUl0ZW1EaXNjb3VudCIsInVwZGF0ZUl0ZW1Mb3RlIiwicHJvZHVjdFNlbGVjdGVkIiwidXBkYXRlUXR5IiwidXBkYXRlUXR5Q29kZSIsImFkZFN1Yk9uZSIsInV1aWR2MSIsIm5ld0l0ZW0iLCJjYWNsU3VidG90YWwiLCJ1cGRhdGVkQ2FydEl0ZW0iLCJsb3RlTnVtIiwicGVyTGluZSIsImNoZWNrSWZJbkNhcnQiLCJxdHlOdW0iLCJzdWJPckFkZCIsImRhdGFOZXdQcm9kIiwicHJvZHVjdERpc2NvdW50IiwicHJpY2UiLCJzdWJUb3RhbCIsIml2MSIsIml2MiIsIml2MyIsImRpc2NvdW50Q3VycmVuY3lJbkxpbmUiLCJkaXNjb3VudEN1cnJlbmN5R2xvYmFsIiwibmV3UXR5IiwidXNlUHJpY2UyIiwicHJpY2UyIiwidXNlUHJpY2UzIiwicHJpY2UzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFnQkEsUyxHQUFBQSxTO1FBS0FDLGEsR0FBQUEsYTtRQXFDQUMsb0IsR0FBQUEsb0I7QUExQ1QsU0FBU0YsU0FBVCxHQUFxQjs7QUFFMUIsU0FBTyxFQUFDRyxNQUFNLG9CQUFQLEVBQTZCQyxTQUFTLENBQUMsQ0FBdkMsRUFBUDtBQUNEOztBQUVNLFNBQVNILGFBQVQsQ0FBdUJJLEdBQXZCLEVBQTRCQyxRQUE1QixFQUFzQzs7QUFFM0MsTUFBTUMsT0FBT0YsSUFBSUcsS0FBSixDQUFV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R0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OzsrQ0NWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFP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SzhKLFdBUmI7QUFTTHBCLFVBQU12QyxZQUFZdEosS0FBWixFQUFtQjZMLElBVHBCO0FBVUxtQixnQkFBWTdKLEtBQUs2SjtBQVZaLEdBQVA7QUFZRDs7QUFFRDtBQUNBLFNBQVNBLFVBQVQsQ0FBb0JsTixPQUFwQixFQUE2QmUsTUFBN0IsRUFBcUM7O0FBRW5DLE1BQUlBLE9BQU8wWixVQUFQLElBQXFCLFNBQXpCLEVBQW9DLE9BQU96YSxRQUFRNGMsS0FBZjs7QUFFcEMsTUFBSTdiLE9BQU8wWixVQUFQLElBQXFCLFNBQXJCLElBQWtDemEsUUFBUW9kLFNBQTlDLEVBQXlELE9BQU9wZCxRQUFRcWQsTUFBZjtBQUN6RCxNQUFJdGMsT0FBTzBaLFVBQVAsSUFBcUIsU0FBekIsRUFBb0MsT0FBT3phLFFBQVE0YyxLQUFmOztBQUVwQyxNQUFJN2IsT0FBTzBaLFVBQVAsSUFBcUIsU0FBckIsSUFBa0N6YSxRQUFRc2QsU0FBOUMsRUFBeUQsT0FBT3RkLFFBQVF1ZCxNQUFmO0FBQ3pELE1BQUl4YyxPQUFPMFosVUFBUCxJQUFxQixTQUFyQixJQUFrQ3phLFFBQVFvZCxTQUE5QyxFQUF5RCxPQUFPcGQsUUFBUXFkLE1BQWY7QUFDekQsTUFBSXRjLE9BQU8wWixVQUFQLElBQXFCLFNBQXpCLEVBQW9DLE9BQU96YSxRQUFRNGMsS0FBZjs7QUFFcEMsU0FBTzVjLFFBQVE0YyxLQUFmO0FBRUQ7Ozs7Ozs7O2dDQWhSZWxCLFU7O2dDQXVCQUMsa0I7O2dDQXVCQUMsYzs7Z0NBc0JBQyxlOztnQ0FxQkFDLFM7O2dDQWVBQyxhOztnQ0FpQkFDLFM7O2dDQW9CUE8sYTs7Z0NBNkRBSixZOztnQ0FzQ0FDLGU7O2dDQW1CQWxQLFUiLCJmaWxlIjoic2FsZXMtOGVlYTIxNTI3N2I1ODU4ZDNhNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xyXG5cclxuICByZXR1cm4ge3R5cGU6ICdQUk9EVUNUX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QodmFsLCBwcm9kdWN0cykge1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcclxuICBjb25zdCBtYXRjaHMgPSBbXVxyXG5cclxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgbGV0IGNvbnRyb2wgPSB0cnVlXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2R1Y3QuZGVzY3JpcHRpb24udG9TdHJpbmcoKVxyXG5cclxuICAgIHRleHQuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKVxyXG5cclxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgY29udHJvbCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgbWF0Y2hzLnB1c2gocHJvZHVjdClcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnLFxyXG4gICAgICBwYXlsb2FkOiBtYXRjaHNcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9TRUFSQ0hfRkFJTCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpIHtcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBjb2RlfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xyXG5cclxuICByZXR1cm4ge3R5cGU6ICdDTElFTlRfSElERV9QQU5FTCcsIHBheWxvYWQ6IC0xfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KHZhbCwgY2xpZW50cykge1xyXG5cclxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcclxuICBjb25zdCBtYXRjaHMgPSBbXVxyXG5cclxuICBjb25zb2xlLmxvZyhjbGllbnRzKVxyXG5cclxuICBjbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcclxuICAgIGxldCBjb250cm9sID0gdHJ1ZVxyXG4gICAgY29uc3QgbmFtZSA9IGNsaWVudC5uYW1lLnRvU3RyaW5nKCkgKyAnICcgKyBjbGllbnQubGFzdF9uYW1lLnRvU3RyaW5nKClcclxuXHJcbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKVxyXG5cclxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgY29udHJvbCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgbWF0Y2hzLnB1c2goY2xpZW50KVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJyxcclxuICAgICAgcGF5bG9hZDogbWF0Y2hzXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfRkFJTCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY2xpZW50U2VsZWN0ZWQoY29kZSwgY2xpZW50cykge1xyXG5cclxuICBjb25zdCBjbGllbnRTZWxlY3RlZCA9IGNsaWVudHMuZmluZEluZGV4KGNsaWVudCA9PiBjbGllbnQuY29kZSA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKGNsaWVudFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdDTElFTlRfTk9UX0ZPVU5EJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFTEVDVEVEJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGNsaWVudDogY2xpZW50c1tjbGllbnRTZWxlY3RlZF1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclNlbGVjdGVkKF9pZCwgdXNlcnMpIHtcclxuXHJcbiAgY29uc3QgdXNlclNlbGVjdGVkID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5faWQgPT0gX2lkKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKHVzZXJTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnVVNFUl9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVU0VSX1NFTEVDVEVEJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHVzZXI6IHVzZXJzW3VzZXJTZWxlY3RlZF1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KCkge1xyXG5cclxuICByZXR1cm4ge3R5cGU6ICdDTElFTlRfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXNoQW1vdW50KGFtb3VudCkge1xyXG5cclxuICBjb25zdCByZXMgPSAoYW1vdW50KSAvLyBpZiBpdHMgYSB2YWx1ZVxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxyXG4gICAgICBwYXlsb2FkOiBwYXJzZUZsb2F0KGFtb3VudClcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcclxuICAgICAgcGF5bG9hZDogMFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmRBdXRoKG51bWJlcikge1xyXG5cclxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcclxuICAgICAgcGF5bG9hZDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0FVVEgnLFxyXG4gICAgICBwYXlsb2FkOiAnJ1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmREaWdpdHMobnVtYmVyKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXHJcbiAgICAgIHBheWxvYWQ6IG51bWJlclxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxyXG4gICAgICBwYXlsb2FkOiAnJ1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkU2FsZShpZCwgc2FsZXMpIHtcclxuLy8gICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gc2FsZXMuZmlsdGVyKHNhbGUgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHNhbGUuaWQgPT0gaWRcclxuLy8gICB9KVxyXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4vLyAgICAgaWYgKGZpbHRlcmVkU2FsZXMubGVuZ3RoKSB7XHJcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSA9IG5ldyBEYXRlKGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSlcclxuLy8gICAgICAgLy8gZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSlcclxuLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnY2FydCddWydnbG9iYWxEaXNjb3VudCddKVxyXG4vLyAgICAgICBkb2N1bWVudC50aXRsZSA9IGBWZW50YSAjJHtpZH1gXHJcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NsaWVudCddWydzYWxlTG9hZGVkJ10gPSB0cnVlXHJcblxyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcclxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF0uX2lkfSlcclxuXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVF9GT1VORF9TQUxFJywgcGF5bG9hZDogaWR9KVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xyXG5cclxuLy8gICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuLy8gICBjb25zdCBtb3ZlbWVudHMgPSBrd2FyZ3MubW92ZW1lbnRzXHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbi8vICAgICBjb25zdCBkYiA9IG5ldyBQb3VjaERCKGt3YXJncy5kYilcclxuXHJcbi8vICAgICBkYi5wb3N0KGl0ZW0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogaXRlbX0pXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiByZXNwb25zZS5pZH0pXHJcblxyXG4vLyAgICAgICBpZiAoaXRlbS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7IC8vIElGIENSRURJVCBDUkVBVEUgQ1JFRElUIE1PVkVNRU5UXHJcbi8vICAgICAgICAgY29uc3QgZGIyID0gbmV3IFBvdWNoREIoJ2dlbmVyYWwnKVxyXG4vLyAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCByZXNwb25zZS5pZCwgaXRlbSlcclxuXHJcbi8vICAgICAgICAgZGIyLnBvc3QobW92ZW1lbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4vLyAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7IC8vIElGIEVSUk9SIFNIT1cgTUVTU0FHRVxyXG4vLyAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIG1vdmltaWVudG8gZGUgY3LDqWRpdG8sIHBvciBmYXZvciBhbnVsZSBsYSBmYWN0dXJhIHkgY3JlZWxhXHJcbi8vICAgICAgICAgICBkZSBudWV2byBFUlJPUjogJHtlcnJ9LmApXHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgIH0gZWxzZSB7IC8vIElGIE5PVCBDUkVESVQgU0hPVyBQQU5FTFNcclxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCBzYWxlSWQsIHNhbGUpIHtcclxuXHJcbi8vICAgY29uc3Qgc29ydGVkTW92ZW1lbnRzID0gbW92ZW1lbnRzLmxlbmd0aCA+IDEgPyBtb3ZlbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPCBiLmRvY3VtZW50KSB7XHJcbi8vICAgICAgIHJldHVybiAxXHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoYS5kb2N1bWVudCA+IGIuZG9jdW1lbnQpIHtcclxuLy8gICAgICAgcmV0dXJuIC0xXHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gMFxyXG4vLyAgIH0pIDogbW92ZW1lbnRzXHJcblxyXG4vLyAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZE1vdmVtZW50cy5sZW5ndGggPiAwID8gc29ydGVkTW92ZW1lbnRzWzBdLmRvY3VtZW50ICsgMSA6IDFcclxuXHJcbi8vICAgY29uc3QgbW92ZW1lbnQgPSB7XHJcbi8vICAgICAnZG9jdW1lbnQnOiBuZXh0SWQsXHJcbi8vICAgICAnZG9jVHlwZSc6ICdDTElFTlRfTU9WRU1FTlQnLFxyXG4vLyAgICAgJ2NsaWVudElkJzogc2FsZS5jbGllbnQuX2lkLFxyXG4vLyAgICAgJ3R5cGUnOiAnQ1JFRElUJyxcclxuLy8gICAgICdhbW91bnQnOiBwYXJzZUZsb2F0KHNhbGUuY2FydC5jYXJ0VG90YWwpLFxyXG4vLyAgICAgJ2RhdGUnOiBuZXcgRGF0ZSgpLFxyXG4vLyAgICAgJ3NhbGVfaWQnOiBzYWxlSWQsXHJcbi8vICAgICAnc2FsZUlkJzogc2FsZS5pZCxcclxuLy8gICAgICdkZXNjcmlwdGlvbic6IGBWZW50YSBhIGNyw6lkaXRvIGNvbiBmYWN0dXJhICMke3NhbGUuaWR9YFxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIG1vdmVtZW50XHJcblxyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBDT05GSUcgREVGQVVMVCBBWElPU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcclxuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBHRVQgRlVOQ1RJT05TIChSRVRSSUVWRSBBTEwpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURpc3BhdGNoKGt3YXJncykge1xyXG5cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcclxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgIC8vIElGIFRIRSBFUlJPUiBJUyBVTkFVVE9SSVpFRCBQQUdFIFdJTEwgU0hPVyBUSEUgTUVTU0FHRVxyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxyXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRG91YmxlRGlzcGF0Y2goa3dhcmdzKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxyXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlMiA9IGt3YXJncy5zdWNjZXNzVHlwZTJcclxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUyLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJldHVybihrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG5cclxuICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXHJcbiAgICByZXR1cm4gZXJyb3JcclxuICB9KVxyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNFVCBGVU5DVElPTiAoUkVUUklFVkUgSU5ESVZJRFVBTClcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGt3YXJncykge1xyXG5cclxuICBjb25zdCBsb29rVXBWYWx1ZSA9IGt3YXJncy5sb29rVXBWYWx1ZVxyXG4gIGNvbnN0IGxvb2tVcEZpZWxkID0ga3dhcmdzLmxvb2tVcEZpZWxkXHJcbiAgY29uc3QgaGlzdG9yeSA9IGt3YXJncy5oaXN0b3J5XHJcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBrd2FyZ3MucmVkaXJlY3RVcmxcclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgY29uc29sZS5sb2coYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApXHJcbiAgICBheGlvcy5nZXQoYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAvLyBJRiBUSEVSRSBJUyBNT1JFIFRIQU4gT05FIEVMRU1FTlQgRklMVEVSRURcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQVRFTkNJw5NOJywgYEV4aXN0ZSBtYXMgZGUgdW4gJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgJHtrd2FyZ3MubG9va1VwTmFtZX06XHJcbiAgICAgICAgICAke2t3YXJncy5sb29rVXBWYWx1ZX0sIHNlIHV0aWxpemFyw6EgZWwgcHJpbWVybyBlbiBsaXN0YSwgcG9yIGxvIHF1ZSBwdWVkZSBubyBzZXIgZWwgbWlzbW8gcXVlIHVkIGRlc2VhXHJcbiAgICAgICAgICBhY3R1YWxpemFyLCBlc3RvIHB1ZWRlIGRlYmVyc2UgYSB1biBlcnJvciwgcG9yIGZhdm9yIHJldmlzZSBsb3NcclxuICAgICAgICAgIGRhdG9zIG8gY29udGFjdGUgY29uIGVsIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEuYClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZTIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFbMF19KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaEVycm9yVHlwZSwgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBObyBoYXkgJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgdmFsb3IgZGUgJHtrd2FyZ3MubG9va1VwTmFtZX06ICR7a3dhcmdzLmxvb2tVcFZhbHVlfWAsXHJcbiAgICAgICAgICBmdW5jdGlvbigpIHsgaGlzdG9yeS5wdXNoKHJlZGlyZWN0VXJsKSB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgZWwgdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXHJcbiAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXHJcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxyXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxyXG4gIGNvbnN0IGlzU2FsZSA9IGt3YXJncy5pc1NhbGVcclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIGlmIChpc1NhbGUpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICB9KVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBVUERBVEUgRlVOQ1RJT05cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShrd2FyZ3MpIHtcclxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXHJcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxyXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxyXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbShrd2FyZ3MpIHtcclxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXHJcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxyXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IGl0ZW1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChrd2FyZ3Muc3VjZXNzTWVzc2FnZSkge1xyXG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICB9KVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBET1VCTEUgVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbXMoa3dhcmdzLCBrd2FyZ3MyKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgY29uc3QgaXRlbTIgPSBrd2FyZ3MyLml0ZW1cclxuICBjb25zdCB1cmwyID0ga3dhcmdzMi51cmxcclxuICBjb25zdCBsb2dDb2RlMiA9IGt3YXJnczIubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQyID0ga3dhcmdzMi5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwyID0ga3dhcmdzMi5sb2dNb2RlbFxyXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uMiA9IGt3YXJnczIubG9nRGVzY3JpcHRpb25cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAvLyBGSVJTVCBQQVRDSCBUSEVOXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxyXG5cclxuICAgICAgICAvLyBTRUNPTkQgUEFUQ0hcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgICAgICB1cmw6IHVybDIsXHJcbiAgICAgICAgICBkYXRhOiBpdGVtMlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAvLyBTRUNPTkQgUEFUQ0ggVEhFTlxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJnczIuc3VjZXNzTWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGt3YXJnczIucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBrd2FyZ3MyLmhpc3RvcnkucHVzaChrd2FyZ3MyLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MyLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgICAgICBzYXZlTG9nKGxvZ0NvZGUyLCBsb2dNb2RlbDIsIGl0ZW1PbGQyLCBpdGVtMiwgbG9nRGVzY3JpcHRpb24yLCB1c2VyKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIENBVENIXHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJnczIuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgLy8gRklSU1QgUEFUQ0ggQ0FUQ0hcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICB9KVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBERUxFVEUgRlVOQ1RJT04gKERFTEVURSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGt3YXJncykge1xyXG5cclxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3QgbW9kZWwgPSBrd2FyZ3MubW9kZWxOYW1lXHJcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXHJcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXHJcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxyXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgIHVybDogdXJsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCAnRWxlbWVudG8gZWxpbWluYWRvIHNhdGlmYWN0b3JpYW1lbnRlJylcclxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgSHVibyB1biBlcnJvciBhbCBlbGltaW5hciBlbCAke21vZGVsfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTE9BRCBDT05GSUcgRlVOQ1RJT05cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2xvYmFsQ29uZmlnKHNlY3Rpb24sIG5hbWUsIHN1Y2Nlc3MsIGZhaWwpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGlmIChuYW1lKSB7XHJcblxyXG4gICAgICBheGlvcy5nZXQoYC9hcGkvZ2xvYmFsY29uZi8ke3NlY3Rpb259X18ke25hbWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFRPRE8gU2luZ2xlIGNvbmZpZyBmZXRjaFxyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbHByZWZzYCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFRoZSBwcm9wZXJ0eSB0byBtb2RpZnkgaW4gcmVkdWNlclxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgID8gcmVzcG9uc2UuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNlY3Rpb24gPT0gc2VjdGlvblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDoge31cclxuICAgICAgICBjb25zdCBkYXRhID0ge31cclxuICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGRhdGFbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2VzcywgcGF5bG9hZDoge2RhdGE6IGRhdGEsIHNlY3Rpb246IHNlY3Rpb259fSlcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNBVkUgTE9HIEZVTkNUSU9OIChDUkVBVEUgTE9HKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2cgKGNvZGUsIG1vZGVsLCBvbGRPYmplY3QsIG9iamVjdCwgZGVzY3JpcHRpb24sIHVzZXIpIHtcclxuXHJcbiAgY29uc3QgcHJldk9iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9sZE9iamVjdClcclxuICBjb25zdCBuZXdPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpXHJcbiAgY29uc3QgdXNlcjIgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG5cclxuICBjb25zdCBpdGVtID0ge1xyXG4gICAgY29kZTogY29kZSxcclxuICAgIG1vZGVsOiBtb2RlbCxcclxuICAgIHByZXZfb2JqZWN0OiBwcmV2T2JqZWN0LFxyXG4gICAgbmV3X29iamVjdDogbmV3T2JqZWN0LFxyXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcjogdXNlcjJcclxuICB9XHJcblxyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgdXJsOiAnL2FwaS9sb2dzLycsXHJcbiAgICBkYXRhOiBpdGVtXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIExvZyBkZWwgbW92aW1pZW50bywgRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFVWCBGVU5DVElPTlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBORVhUIE5VTUVSSUMgQ09ERVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE51bWVyaWNDb2RlKGVsZW1lbnRzLCBmaWVsZCkge1xyXG5cclxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XHJcblxyXG4gICAgbGV0IGtleXMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50W2ZpZWxkXSlcclxuXHJcbiAgICBrZXlzID0ga2V5cy5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgIGNvbnN0IG1heCA9IGtleXMucG9wKClcclxuICAgIGNvbnN0IG5leHQgPSBwYXJzZUludChtYXgpICsgMVxyXG4gICAgcmV0dXJuIG5leHQudG9TdHJpbmcoKVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAxXHJcblxyXG59XHJcblxyXG4vLyBORVhUIFBSRVZJT1VTIElURU1TXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXh0UHJldkl0ZW0oa3dhcmdzKSB7XHJcblxyXG4gIGNvbnN0IGNvZGUgPSBrd2FyZ3MuY29kZVxyXG4gIGNvbnN0IGl0ZW1zID0ga3dhcmdzLml0ZW1zXHJcbiAgY29uc3QgY29kZUZpZWxkID0ga3dhcmdzLmNvZGVGaWVsZFxyXG4gIGxldCBwcmV2aW91cyA9IDBcclxuICBsZXQgbmV4dCA9IDBcclxuXHJcbiAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGFbY29kZUZpZWxkXSAtIGJbY29kZUZpZWxkXVxyXG4gIH0pXHJcblxyXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaXRlbVtjb2RlRmllbGRdID09IGNvZGUpIHtcclxuICAgICAgbmV4dCA9IGluZGV4ICsgMVxyXG4gICAgICBwcmV2aW91cyA9IGluZGV4IC0gMVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG5leHRDb2RlID0gaXRlbXNbbmV4dF0gPyBpdGVtc1tuZXh0XVtjb2RlRmllbGRdIDogaXRlbXNbMF1bY29kZUZpZWxkXVxyXG4gIGNvbnN0IHByZXZDb2RlID0gaXRlbXNbcHJldmlvdXNdID8gaXRlbXNbcHJldmlvdXNdW2NvZGVGaWVsZF0gOiBpdGVtcy5wb3AoKVtjb2RlRmllbGRdXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6IHtuZXh0OiBuZXh0Q29kZSwgcHJldmlvdXM6IHByZXZDb2RlfX0pXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2FwaS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoZS5yZWR1eExvZ2dlcj1lLnJlZHV4TG9nZ2VyfHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLHQpe2Uuc3VwZXJfPXQsZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSl9ZnVuY3Rpb24gcihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwia2luZFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KSx0JiZ0Lmxlbmd0aCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXRoXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG4oZSx0LHIpe24uc3VwZXJfLmNhbGwodGhpcyxcIkVcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJoc1wiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBvKGUsdCl7by5zdXBlcl8uY2FsbCh0aGlzLFwiTlwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGkoZSx0KXtpLnN1cGVyXy5jYWxsKHRoaXMsXCJEXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gYShlLHQscil7YS5zdXBlcl8uY2FsbCh0aGlzLFwiQVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5kZXhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpdGVtXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGYoZSx0LHIpe3ZhciBuPWUuc2xpY2UoKHJ8fHQpKzF8fGUubGVuZ3RoKTtyZXR1cm4gZS5sZW5ndGg9dDwwP2UubGVuZ3RoK3Q6dCxlLnB1c2guYXBwbHkoZSxuKSxlfWZ1bmN0aW9uIHUoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpO3JldHVyblwib2JqZWN0XCIhPT10P3Q6ZT09PU1hdGg/XCJtYXRoXCI6bnVsbD09PWU/XCJudWxsXCI6QXJyYXkuaXNBcnJheShlKT9cImFycmF5XCI6XCJbb2JqZWN0IERhdGVdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk/XCJkYXRlXCI6XCJmdW5jdGlvblwiPT10eXBlb2YgZS50b1N0cmluZyYmL15cXC8uKlxcLy8udGVzdChlLnRvU3RyaW5nKCkpP1wicmVnZXhwXCI6XCJvYmplY3RcIn1mdW5jdGlvbiBsKGUsdCxyLGMscyxkLHApe3M9c3x8W10scD1wfHxbXTt2YXIgZz1zLnNsaWNlKDApO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkKXtpZihjKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZjKGcsZCkpcmV0dXJuO2lmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/XCJ1bmRlZmluZWRcIjpOKGMpKSl7aWYoYy5wcmVmaWx0ZXImJmMucHJlZmlsdGVyKGcsZCkpcmV0dXJuO2lmKGMubm9ybWFsaXplKXt2YXIgaD1jLm5vcm1hbGl6ZShnLGQsZSx0KTtoJiYoZT1oWzBdLHQ9aFsxXSl9fX1nLnB1c2goZCl9XCJyZWdleHBcIj09PXUoZSkmJlwicmVnZXhwXCI9PT11KHQpJiYoZT1lLnRvU3RyaW5nKCksdD10LnRvU3RyaW5nKCkpO3ZhciB5PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKSx2PVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Tih0KSxiPVwidW5kZWZpbmVkXCIhPT15fHxwJiZwW3AubGVuZ3RoLTFdLmxocyYmcFtwLmxlbmd0aC0xXS5saHMuaGFzT3duUHJvcGVydHkoZCksbT1cInVuZGVmaW5lZFwiIT09dnx8cCYmcFtwLmxlbmd0aC0xXS5yaHMmJnBbcC5sZW5ndGgtMV0ucmhzLmhhc093blByb3BlcnR5KGQpO2lmKCFiJiZtKXIobmV3IG8oZyx0KSk7ZWxzZSBpZighbSYmYilyKG5ldyBpKGcsZSkpO2Vsc2UgaWYodShlKSE9PXUodCkpcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJkYXRlXCI9PT11KGUpJiZlLXQhPT0wKXIobmV3IG4oZyxlLHQpKTtlbHNlIGlmKFwib2JqZWN0XCI9PT15JiZudWxsIT09ZSYmbnVsbCE9PXQpaWYocC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGhzPT09ZX0pLmxlbmd0aCllIT09dCYmcihuZXcgbihnLGUsdCkpO2Vsc2V7aWYocC5wdXNoKHtsaHM6ZSxyaHM6dH0pLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB3O2UubGVuZ3RoO2Zvcih3PTA7dzxlLmxlbmd0aDt3Kyspdz49dC5sZW5ndGg/cihuZXcgYShnLHcsbmV3IGkodm9pZCAwLGVbd10pKSk6bChlW3ddLHRbd10scixjLGcsdyxwKTtmb3IoO3c8dC5sZW5ndGg7KXIobmV3IGEoZyx3LG5ldyBvKHZvaWQgMCx0W3crK10pKSl9ZWxzZXt2YXIgeD1PYmplY3Qua2V5cyhlKSxTPU9iamVjdC5rZXlzKHQpO3guZm9yRWFjaChmdW5jdGlvbihuLG8pe3ZhciBpPVMuaW5kZXhPZihuKTtpPj0wPyhsKGVbbl0sdFtuXSxyLGMsZyxuLHApLFM9ZihTLGkpKTpsKGVbbl0sdm9pZCAwLHIsYyxnLG4scCl9KSxTLmZvckVhY2goZnVuY3Rpb24oZSl7bCh2b2lkIDAsdFtlXSxyLGMsZyxlLHApfSl9cC5sZW5ndGg9cC5sZW5ndGgtMX1lbHNlIGUhPT10JiYoXCJudW1iZXJcIj09PXkmJmlzTmFOKGUpJiZpc05hTih0KXx8cihuZXcgbihnLGUsdCkpKX1mdW5jdGlvbiBjKGUsdCxyLG4pe3JldHVybiBuPW58fFtdLGwoZSx0LGZ1bmN0aW9uKGUpe2UmJm4ucHVzaChlKX0sciksbi5sZW5ndGg/bjp2b2lkIDB9ZnVuY3Rpb24gcyhlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmRlbGV0ZSBvW3IucGF0aFtuXV07YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjpvW3IucGF0aFtuXV09ci5yaHN9fWVsc2Ugc3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoZVt0XSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmU9ZihlLHQpO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6ZVt0XT1yLnJoc31yZXR1cm4gZX1mdW5jdGlvbiBkKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe2Zvcih2YXIgbj1lLG89LTEsaT1yLnBhdGg/ci5wYXRoLmxlbmd0aC0xOjA7KytvPGk7KVwidW5kZWZpbmVkXCI9PXR5cGVvZiBuW3IucGF0aFtvXV0mJihuW3IucGF0aFtvXV09XCJudW1iZXJcIj09dHlwZW9mIHIucGF0aFtvXT9bXTp7fSksbj1uW3IucGF0aFtvXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoci5wYXRoP25bci5wYXRoW29dXTpuLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG5bci5wYXRoW29dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm5bci5wYXRoW29dXT1yLnJoc319fWZ1bmN0aW9uIHAoZSx0LHIpe2lmKHIucGF0aCYmci5wYXRoLmxlbmd0aCl7dmFyIG4sbz1lW3RdLGk9ci5wYXRoLmxlbmd0aC0xO2ZvcihuPTA7bjxpO24rKylvPW9bci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChvW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpvW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIG9bci5wYXRoW25dXX19ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJFXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJOXCI6ZT1mKGUsdCl9cmV0dXJuIGV9ZnVuY3Rpb24gZyhlLHQscil7aWYoZSYmdCYmciYmci5raW5kKXt2YXIgbixvLGk9ZTtmb3Iobz1yLnBhdGgubGVuZ3RoLTEsbj0wO248bztuKyspXCJ1bmRlZmluZWRcIj09dHlwZW9mIGlbci5wYXRoW25dXSYmKGlbci5wYXRoW25dXT17fSksaT1pW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAoaVtyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6aVtyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmRlbGV0ZSBpW3IucGF0aFtuXV19fX1mdW5jdGlvbiBoKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1mdW5jdGlvbihuKXtyJiYhcihlLHQsbil8fGQoZSx0LG4pfTtsKGUsdCxuKX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImNvbG9yOiBcIitGW2VdLmNvbG9yK1wiOyBmb250LXdlaWdodDogYm9sZFwifWZ1bmN0aW9uIHYoZSl7dmFyIHQ9ZS5raW5kLHI9ZS5wYXRoLG49ZS5saHMsbz1lLnJocyxpPWUuaW5kZXgsYT1lLml0ZW07c3dpdGNoKHQpe2Nhc2VcIkVcIjpyZXR1cm5bci5qb2luKFwiLlwiKSxuLFwi4oaSXCIsb107Y2FzZVwiTlwiOnJldHVybltyLmpvaW4oXCIuXCIpLG9dO2Nhc2VcIkRcIjpyZXR1cm5bci5qb2luKFwiLlwiKV07Y2FzZVwiQVwiOnJldHVybltyLmpvaW4oXCIuXCIpK1wiW1wiK2krXCJdXCIsYV07ZGVmYXVsdDpyZXR1cm5bXX19ZnVuY3Rpb24gYihlLHQscixuKXt2YXIgbz1jKGUsdCk7dHJ5e24/ci5ncm91cENvbGxhcHNlZChcImRpZmZcIik6ci5ncm91cChcImRpZmZcIil9Y2F0Y2goZSl7ci5sb2coXCJkaWZmXCIpfW8/by5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUua2luZCxuPXYoZSk7ci5sb2cuYXBwbHkocixbXCIlYyBcIitGW3RdLnRleHQseSh0KV0uY29uY2F0KFAobikpKX0pOnIubG9nKFwi4oCU4oCUIG5vIGRpZmYg4oCU4oCUXCIpO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgZGlmZiBlbmQg4oCU4oCUIFwiKX19ZnVuY3Rpb24gbShlLHQscixuKXtzd2l0Y2goXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpKXtjYXNlXCJvYmplY3RcIjpyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW25dP2Vbbl0uYXBwbHkoZSxQKHIpKTplW25dO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIGUodCk7ZGVmYXVsdDpyZXR1cm4gZX19ZnVuY3Rpb24gdyhlKXt2YXIgdD1lLnRpbWVzdGFtcCxyPWUuZHVyYXRpb247cmV0dXJuIGZ1bmN0aW9uKGUsbixvKXt2YXIgaT1bXCJhY3Rpb25cIl07cmV0dXJuIGkucHVzaChcIiVjXCIrU3RyaW5nKGUudHlwZSkpLHQmJmkucHVzaChcIiVjQCBcIituKSxyJiZpLnB1c2goXCIlYyhpbiBcIitvLnRvRml4ZWQoMikrXCIgbXMpXCIpLGkuam9pbihcIiBcIil9fWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj10LmxvZ2dlcixuPXQuYWN0aW9uVHJhbnNmb3JtZXIsbz10LnRpdGxlRm9ybWF0dGVyLGk9dm9pZCAwPT09bz93KHQpOm8sYT10LmNvbGxhcHNlZCxmPXQuY29sb3JzLHU9dC5sZXZlbCxsPXQuZGlmZixjPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnRpdGxlRm9ybWF0dGVyO2UuZm9yRWFjaChmdW5jdGlvbihvLHMpe3ZhciBkPW8uc3RhcnRlZCxwPW8uc3RhcnRlZFRpbWUsZz1vLmFjdGlvbixoPW8ucHJldlN0YXRlLHk9by5lcnJvcix2PW8udG9vayx3PW8ubmV4dFN0YXRlLHg9ZVtzKzFdO3gmJih3PXgucHJldlN0YXRlLHY9eC5zdGFydGVkLWQpO3ZhciBTPW4oZyksaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EoZnVuY3Rpb24oKXtyZXR1cm4gd30sZyxvKTphLGo9RChwKSxFPWYudGl0bGU/XCJjb2xvcjogXCIrZi50aXRsZShTKStcIjtcIjpcIlwiLEE9W1wiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiXTtBLnB1c2goRSksdC50aW1lc3RhbXAmJkEucHVzaChcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIiksdC5kdXJhdGlvbiYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKTt2YXIgTz1pKFMsaix2KTt0cnl7az9mLnRpdGxlJiZjP3IuZ3JvdXBDb2xsYXBzZWQuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXBDb2xsYXBzZWQoTyk6Zi50aXRsZSYmYz9yLmdyb3VwLmFwcGx5KHIsW1wiJWMgXCIrT10uY29uY2F0KEEpKTpyLmdyb3VwKE8pfWNhdGNoKGUpe3IubG9nKE8pfXZhciBOPW0odSxTLFtoXSxcInByZXZTdGF0ZVwiKSxQPW0odSxTLFtTXSxcImFjdGlvblwiKSxDPW0odSxTLFt5LGhdLFwiZXJyb3JcIiksRj1tKHUsUyxbd10sXCJuZXh0U3RhdGVcIik7aWYoTilpZihmLnByZXZTdGF0ZSl7dmFyIEw9XCJjb2xvcjogXCIrZi5wcmV2U3RhdGUoaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltOXShcIiVjIHByZXYgc3RhdGVcIixMLGgpfWVsc2UgcltOXShcInByZXYgc3RhdGVcIixoKTtpZihQKWlmKGYuYWN0aW9uKXt2YXIgVD1cImNvbG9yOiBcIitmLmFjdGlvbihTKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW1BdKFwiJWMgYWN0aW9uICAgIFwiLFQsUyl9ZWxzZSByW1BdKFwiYWN0aW9uICAgIFwiLFMpO2lmKHkmJkMpaWYoZi5lcnJvcil7dmFyIE09XCJjb2xvcjogXCIrZi5lcnJvcih5LGgpK1wiOyBmb250LXdlaWdodDogYm9sZDtcIjtyW0NdKFwiJWMgZXJyb3IgICAgIFwiLE0seSl9ZWxzZSByW0NdKFwiZXJyb3IgICAgIFwiLHkpO2lmKEYpaWYoZi5uZXh0U3RhdGUpe3ZhciBfPVwiY29sb3I6IFwiK2YubmV4dFN0YXRlKHcpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbRl0oXCIlYyBuZXh0IHN0YXRlXCIsXyx3KX1lbHNlIHJbRl0oXCJuZXh0IHN0YXRlXCIsdyk7bCYmYihoLHcscixrKTt0cnl7ci5ncm91cEVuZCgpfWNhdGNoKGUpe3IubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpfX0pfWZ1bmN0aW9uIFMoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1PYmplY3QuYXNzaWduKHt9LEwsZSkscj10LmxvZ2dlcixuPXQuc3RhdGVUcmFuc2Zvcm1lcixvPXQuZXJyb3JUcmFuc2Zvcm1lcixpPXQucHJlZGljYXRlLGE9dC5sb2dFcnJvcnMsZj10LmRpZmZQcmVkaWNhdGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHIpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTtpZihlLmdldFN0YXRlJiZlLmRpc3BhdGNoKXJldHVybiBjb25zb2xlLmVycm9yKFwiW3JlZHV4LWxvZ2dlcl0gcmVkdXgtbG9nZ2VyIG5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBwYXNzIGxvZ2dlciBpbnN0YW5jZSBhcyBtaWRkbGV3YXJlOlxcbi8vIExvZ2dlciB3aXRoIGRlZmF1bHQgb3B0aW9uc1xcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxcbiAgcmVkdWNlcixcXG4gIGFwcGx5TWlkZGxld2FyZShsb2dnZXIpXFxuKVxcbi8vIE9yIHlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGxvZ2dlciB3aXRoIGN1c3RvbSBvcHRpb25zIGh0dHA6Ly9iaXQubHkvcmVkdXgtbG9nZ2VyLW9wdGlvbnNcXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xcbiAgLy8gLi4ub3B0aW9uc1xcbn0pO1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTt2YXIgdT1bXTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRTdGF0ZTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGwpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiFpKHIsbCkpcmV0dXJuIGUobCk7dmFyIGM9e307dS5wdXNoKGMpLGMuc3RhcnRlZD1PLm5vdygpLGMuc3RhcnRlZFRpbWU9bmV3IERhdGUsYy5wcmV2U3RhdGU9bihyKCkpLGMuYWN0aW9uPWw7dmFyIHM9dm9pZCAwO2lmKGEpdHJ5e3M9ZShsKX1jYXRjaChlKXtjLmVycm9yPW8oZSl9ZWxzZSBzPWUobCk7Yy50b29rPU8ubm93KCktYy5zdGFydGVkLGMubmV4dFN0YXRlPW4ocigpKTt2YXIgZD10LmRpZmYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZihyLGwpOnQuZGlmZjtpZih4KHUsT2JqZWN0LmFzc2lnbih7fSx0LHtkaWZmOmR9KSksdS5sZW5ndGg9MCxjLmVycm9yKXRocm93IGMuZXJyb3I7cmV0dXJuIHN9fX19dmFyIGssaixFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBBcnJheSh0KzEpLmpvaW4oZSl9LEE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRShcIjBcIix0LWUudG9TdHJpbmcoKS5sZW5ndGgpK2V9LEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZS5nZXRIb3VycygpLDIpK1wiOlwiK0EoZS5nZXRNaW51dGVzKCksMikrXCI6XCIrQShlLmdldFNlY29uZHMoKSwyKStcIi5cIitBKGUuZ2V0TWlsbGlzZWNvbmRzKCksMyl9LE89XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZTpEYXRlLE49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUD1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxyPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylyW3RdPWVbdF07cmV0dXJuIHJ9cmV0dXJuIEFycmF5LmZyb20oZSl9LEM9W107az1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBnbG9iYWw/XCJ1bmRlZmluZWRcIjpOKGdsb2JhbCkpJiZnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGo9ay5EZWVwRGlmZixqJiZDLnB1c2goZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgaiYmay5EZWVwRGlmZj09PWMmJihrLkRlZXBEaWZmPWosaj12b2lkIDApfSksdChuLHIpLHQobyxyKSx0KGksciksdChhLHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse2RpZmY6e3ZhbHVlOmMsZW51bWVyYWJsZTohMH0sb2JzZXJ2YWJsZURpZmY6e3ZhbHVlOmwsZW51bWVyYWJsZTohMH0sYXBwbHlEaWZmOnt2YWx1ZTpoLGVudW1lcmFibGU6ITB9LGFwcGx5Q2hhbmdlOnt2YWx1ZTpkLGVudW1lcmFibGU6ITB9LHJldmVydENoYW5nZTp7dmFsdWU6ZyxlbnVtZXJhYmxlOiEwfSxpc0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBqfSxlbnVtZXJhYmxlOiEwfSxub0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBDJiYoQy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoKX0pLEM9bnVsbCksY30sZW51bWVyYWJsZTohMH19KTt2YXIgRj17RTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkNIQU5HRUQ6XCJ9LE46e2NvbG9yOlwiIzRDQUY1MFwiLHRleHQ6XCJBRERFRDpcIn0sRDp7Y29sb3I6XCIjRjQ0MzM2XCIsdGV4dDpcIkRFTEVURUQ6XCJ9LEE6e2NvbG9yOlwiIzIxOTZGM1wiLHRleHQ6XCJBUlJBWTpcIn19LEw9e2xldmVsOlwibG9nXCIsbG9nZ2VyOmNvbnNvbGUsbG9nRXJyb3JzOiEwLGNvbGxhcHNlZDp2b2lkIDAscHJlZGljYXRlOnZvaWQgMCxkdXJhdGlvbjohMSx0aW1lc3RhbXA6ITAsc3RhdGVUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sYWN0aW9uVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGVycm9yVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNvbG9yczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cImluaGVyaXRcIn0scHJldlN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuXCIjOUU5RTlFXCJ9LGFjdGlvbjpmdW5jdGlvbigpe3JldHVyblwiIzAzQTlGNFwifSxuZXh0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM0Q0FGNTBcIn0sZXJyb3I6ZnVuY3Rpb24oKXtyZXR1cm5cIiNGMjA0MDRcIn19LGRpZmY6ITEsZGlmZlByZWRpY2F0ZTp2b2lkIDAsdHJhbnNmb3JtZXI6dm9pZCAwfSxUPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9ZS5kaXNwYXRjaCxyPWUuZ2V0U3RhdGU7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9TKCkoe2Rpc3BhdGNoOnQsZ2V0U3RhdGU6cn0pOnZvaWQgY29uc29sZS5lcnJvcihcIlxcbltyZWR1eC1sb2dnZXIgdjNdIEJSRUFLSU5HIENIQU5HRVxcbltyZWR1eC1sb2dnZXIgdjNdIFNpbmNlIDMuMC4wIHJlZHV4LWxvZ2dlciBleHBvcnRzIGJ5IGRlZmF1bHQgbG9nZ2VyIHdpdGggZGVmYXVsdCBzZXR0aW5ncy5cXG5bcmVkdXgtbG9nZ2VyIHYzXSBDaGFuZ2VcXG5bcmVkdXgtbG9nZ2VyIHYzXSBpbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5bcmVkdXgtbG9nZ2VyIHYzXSB0b1xcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5cIil9O2UuZGVmYXVsdHM9TCxlLmNyZWF0ZUxvZ2dlcj1TLGUubG9nZ2VyPVQsZS5kZWZhdWx0PVQsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWxvZ2dlci9kaXN0L3JlZHV4LWxvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1sb2dnZXIvZGlzdC9yZWR1eC1sb2dnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMiLCJ2YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBpc1Byb21pc2UgZnJvbSAnLi9pc1Byb21pc2UuanMnO1xuXG4vKipcbiAqIE5vdGUgdG8gY29udHJpYnV0b3JzOiBQbGVhc2UgYWxzbyByZW1lbWJlciB0byBjaGVjayBhbmQgbWFrZSBzdXJlXG4gKiB0aGF0IGBpbmRleC5kLnRzYCBpcyBhbHNvIHVwIHRvIGRhdGUgd2l0aCB0aGUgaW1wbGVtZW50YXRpb24gd2hlblxuICogeW91IGFkZCBuZXcgZmVhdHVyZXMgb3IgbW9kaWZ5IGV4aXN0aW5nIG9uZXMuXG4gKi9cblxuLy8gVGhlIGRlZmF1bHQgYXN5bmMgYWN0aW9uIHR5cGVzXG5leHBvcnQgdmFyIFBFTkRJTkcgPSAnUEVORElORyc7XG5leHBvcnQgdmFyIEZVTEZJTExFRCA9ICdGVUxGSUxMRUQnO1xuZXhwb3J0IHZhciBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG52YXIgZGVmYXVsdFR5cGVzID0gW1BFTkRJTkcsIEZVTEZJTExFRCwgUkVKRUNURURdO1xuXG4vKipcbiAqIEZ1bmN0aW9uOiBwcm9taXNlTWlkZGxld2FyZVxuICogRGVzY3JpcHRpb246IFRoZSBtYWluIHByb21pc2VNaWRkbGV3YXJlIGFjY2VwdHMgYSBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgYW5kIHJldHVybnMgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb21pc2VNaWRkbGV3YXJlKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgUFJPTUlTRV9UWVBFX1NVRkZJWEVTID0gY29uZmlnLnByb21pc2VUeXBlU3VmZml4ZXMgfHwgZGVmYXVsdFR5cGVzO1xuICB2YXIgUFJPTUlTRV9UWVBFX0RFTElNSVRFUiA9IGNvbmZpZy5wcm9taXNlVHlwZURlbGltaXRlciB8fCAnXyc7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG5cblxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zdGFudGlhdGUgdmFyaWFibGVzIHRvIGhvbGQ6XG4gICAgICAgICAqICgxKSB0aGUgcHJvbWlzZVxuICAgICAgICAgKiAoMikgdGhlIGRhdGEgZm9yIG9wdGltaXN0aWMgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIHZhciBkYXRhID0gdm9pZCAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGVyZSBhcmUgbXVsdGlwbGUgd2F5cyB0byBkaXNwYXRjaCBhIHByb21pc2UuIFRoZSBmaXJzdCBzdGVwIGlzIHRvXG4gICAgICAgICAqIGRldGVybWluZSBpZiB0aGUgcHJvbWlzZSBpcyBkZWZpbmVkOlxuICAgICAgICAgKiAoYSkgZXhwbGljaXRseSAoYWN0aW9uLnBheWxvYWQucHJvbWlzZSBpcyB0aGUgcHJvbWlzZSlcbiAgICAgICAgICogKGIpIGltcGxpY2l0bHkgKGFjdGlvbi5wYXlsb2FkIGlzIHRoZSBwcm9taXNlKVxuICAgICAgICAgKiAoYykgYXMgYW4gYXN5bmMgZnVuY3Rpb24gKHJldHVybnMgYSBwcm9taXNlIHdoZW4gY2FsbGVkKVxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgcHJvbWlzZSBpcyBub3QgZGVmaW5lZCBpbiBvbmUgb2YgdGhlc2UgdGhyZWUgd2F5cywgd2UgZG9uJ3QgZG9cbiAgICAgICAgICogYW55dGhpbmcgYW5kIG1vdmUgb24gdG8gdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgbWlkZGxld2FyZSBjaGFpbi5cbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gU3RlcCAxYTogSXMgdGhlcmUgYSBwYXlsb2FkP1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgICB2YXIgUEFZTE9BRCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICAgICAgLy8gU3RlcCAxLjE6IElzIHRoZSBwcm9taXNlIGltcGxpY2l0bHkgZGVmaW5lZD9cbiAgICAgICAgICBpZiAoaXNQcm9taXNlKFBBWUxPQUQpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gUEFZTE9BRDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGVwIDEuMjogSXMgdGhlIHByb21pc2UgZXhwbGljaXRseSBkZWZpbmVkP1xuICAgICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZShQQVlMT0FELnByb21pc2UpKSB7XG4gICAgICAgICAgICAgIHByb21pc2UgPSBQQVlMT0FELnByb21pc2U7XG4gICAgICAgICAgICAgIGRhdGEgPSBQQVlMT0FELmRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgMS4zOiBJcyB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSBhbiBhc3luYyBmdW5jdGlvbj9cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBQQVlMT0FEID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBQQVlMT0FELnByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gUEFZTE9BRC5wcm9taXNlID8gUEFZTE9BRC5wcm9taXNlKCkgOiBQQVlMT0FEKCk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IFBBWUxPQUQucHJvbWlzZSA/IFBBWUxPQUQuZGF0YSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgMS4zLjE6IElzIHRoZSByZXR1cm4gb2YgYWN0aW9uLnBheWxvYWQgYSBwcm9taXNlP1xuICAgICAgICAgICAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoX2V4dGVuZHMoe30sIGFjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9taXNlXG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gU3RlcCAxLjQ6IElmIHRoZXJlJ3Mgbm8gcHJvbWlzZSwgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RlcCAxYjogSWYgdGhlcmUncyBubyBwYXlsb2FkLCBtb3ZlIG9uIHRvIHRoZSBuZXh0IG1pZGRsZXdhcmUuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnN0YW50aWF0ZSBhbmQgZGVmaW5lIGNvbnN0YW50cyBmb3I6XG4gICAgICAgICAqICgxKSB0aGUgYWN0aW9uIHR5cGVcbiAgICAgICAgICogKDIpIHRoZSBhY3Rpb24gbWV0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFRZUEUgPSBhY3Rpb24udHlwZTtcbiAgICAgICAgdmFyIE1FVEEgPSBhY3Rpb24ubWV0YTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zdGFudGlhdGUgYW5kIGRlZmluZSBjb25zdGFudHMgZm9yIHRoZSBhY3Rpb24gdHlwZSBzdWZmaXhlcy5cbiAgICAgICAgICogVGhlc2UgYXJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGFjdGlvbiB0eXBlLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgX1BST01JU0VfVFlQRV9TVUZGSVhFID0gX3NsaWNlZFRvQXJyYXkoUFJPTUlTRV9UWVBFX1NVRkZJWEVTLCAzKSxcbiAgICAgICAgICAgIF9QRU5ESU5HID0gX1BST01JU0VfVFlQRV9TVUZGSVhFWzBdLFxuICAgICAgICAgICAgX0ZVTEZJTExFRCA9IF9QUk9NSVNFX1RZUEVfU1VGRklYRVsxXSxcbiAgICAgICAgICAgIF9SRUpFQ1RFRCA9IF9QUk9NSVNFX1RZUEVfU1VGRklYRVsyXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb246IGdldEFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBjb25zdHJ1Y3RzIGFuZCByZXR1cm5zIGEgcmVqZWN0ZWRcbiAgICAgICAgICogb3IgZnVsZmlsbGVkIGFjdGlvbiBvYmplY3QuIFRoZSBhY3Rpb24gb2JqZWN0IGlzIGJhc2VkIG9mZiB0aGUgRmx1eFxuICAgICAgICAgKiBTdGFuZGFyZCBBY3Rpb24gKEZTQSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEdpdmVuIGFuIG9yaWdpbmFsIGFjdGlvbiB3aXRoIHRoZSB0eXBlIEZPTzpcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHJlamVjdGVkIG9iamVjdCBtb2RlbCB3aWxsIGJlOlxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAqICAgdHlwZTogJ0ZPT19SRUpFQ1RFRCcsXG4gICAgICAgICAqICAgcGF5bG9hZDogLi4uLFxuICAgICAgICAgKiAgIG1ldGE6IC4uLiAob3B0aW9uYWwpXG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZ1bGZpbGxlZCBvYmplY3QgbW9kZWwgd2lsbCBiZTpcbiAgICAgICAgICoge1xuICAgICAgICAgKiAgIHR5cGU6ICdGT09fRlVMRklMTEVEJyxcbiAgICAgICAgICogICBwYXlsb2FkOiAuLi4sXG4gICAgICAgICAqICAgbWV0YTogLi4uIChvcHRpb25hbClcbiAgICAgICAgICogfVxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBnZXRBY3Rpb24gPSBmdW5jdGlvbiBnZXRBY3Rpb24obmV3UGF5bG9hZCwgaXNSZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAvLyBDb25jYXRlbnRhdGUgdGhlIHR5cGUgc3RyaW5nIHByb3BlcnR5LlxuICAgICAgICAgICAgdHlwZTogW1RZUEUsIGlzUmVqZWN0ZWQgPyBfUkVKRUNURUQgOiBfRlVMRklMTEVEXS5qb2luKFBST01JU0VfVFlQRV9ERUxJTUlURVIpXG5cbiAgICAgICAgICB9LCBuZXdQYXlsb2FkID09PSBudWxsIHx8IHR5cGVvZiBuZXdQYXlsb2FkID09PSAndW5kZWZpbmVkJyA/IHt9IDoge1xuICAgICAgICAgICAgcGF5bG9hZDogbmV3UGF5bG9hZFxuICAgICAgICAgIH0sIE1FVEEgIT09IHVuZGVmaW5lZCA/IHsgbWV0YTogTUVUQSB9IDoge30sIGlzUmVqZWN0ZWQgPyB7XG4gICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgIH0gOiB7fSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uOiBoYW5kbGVSZWplY3RcbiAgICAgICAgICogQ2FsbHM6IGdldEFjdGlvbiB0byBjb25zdHJ1Y3QgdGhlIHJlamVjdGVkIGFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBkaXNwYXRjaGVzIHRoZSByZWplY3RlZCBhY3Rpb24gYW5kIHJldHVybnNcbiAgICAgICAgICogdGhlIG9yaWdpbmFsIEVycm9yIG9iamVjdC4gUGxlYXNlIG5vdGUgdGhlIGRldmVsb3BlciBpcyByZXNwb25zaWJsZVxuICAgICAgICAgKiBmb3IgY29uc3RydWN0aW5nIGFuZCB0aHJvd2luZyBhbiBFcnJvciBvYmplY3QuIFRoZSBtaWRkbGV3YXJlIGRvZXMgbm90XG4gICAgICAgICAqIGNvbnN0cnVjdCBhbnkgRXJyb3JzLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZVJlamVjdCA9IGZ1bmN0aW9uIGhhbmRsZVJlamVjdChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgcmVqZWN0ZWRBY3Rpb24gPSBnZXRBY3Rpb24ocmVhc29uLCB0cnVlKTtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RlZEFjdGlvbik7XG5cbiAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uOiBoYW5kbGVGdWxmaWxsXG4gICAgICAgICAqIENhbGxzOiBnZXRBY3Rpb24gdG8gY29uc3RydWN0IHRoZSBmdWxsZmlsbGVkIGFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBkaXNwYXRjaGVzIHRoZSBmdWxmaWxsZWQgYWN0aW9uIGFuZFxuICAgICAgICAgKiByZXR1cm5zIHRoZSBzdWNjZXNzIG9iamVjdC4gVGhlIHN1Y2Nlc3Mgb2JqZWN0IHNob3VsZFxuICAgICAgICAgKiBjb250YWluIHRoZSB2YWx1ZSBhbmQgdGhlIGRpc3BhdGNoZWQgYWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZUZ1bGZpbGwgPSBmdW5jdGlvbiBoYW5kbGVGdWxmaWxsKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgICAgICAgIHZhciByZXNvbHZlZEFjdGlvbiA9IGdldEFjdGlvbih2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgIGRpc3BhdGNoKHJlc29sdmVkQWN0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgYWN0aW9uOiByZXNvbHZlZEFjdGlvbiB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJzdCwgZGlzcGF0Y2ggdGhlIHBlbmRpbmcgYWN0aW9uOlxuICAgICAgICAgKiBUaGlzIG9iamVjdCBkZXNjcmliZXMgdGhlIHBlbmRpbmcgc3RhdGUgb2YgYSBwcm9taXNlIGFuZCB3aWxsIGluY2x1ZGVcbiAgICAgICAgICogYW55IGRhdGEgKGZvciBvcHRpbWlzdGljIHVwZGF0ZXMpIGFuZC9vciBtZXRhIGZyb20gdGhlIG9yaWdpbmFsIGFjdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIG5leHQoX2V4dGVuZHMoe1xuICAgICAgICAgIC8vIENvbmNhdGVudGF0ZSB0aGUgdHlwZSBzdHJpbmcuXG4gICAgICAgICAgdHlwZTogW1RZUEUsIF9QRU5ESU5HXS5qb2luKFBST01JU0VfVFlQRV9ERUxJTUlURVIpXG5cbiAgICAgICAgfSwgZGF0YSAhPT0gdW5kZWZpbmVkID8geyBwYXlsb2FkOiBkYXRhIH0gOiB7fSwgTUVUQSAhPT0gdW5kZWZpbmVkID8geyBtZXRhOiBNRVRBIH0gOiB7fSkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWNvbmQsIGRpc3BhdGNoIGEgcmVqZWN0ZWQgb3IgZnVsZmlsbGVkIGFjdGlvbiBhbmQgbW92ZSBvbiB0byB0aGVcbiAgICAgICAgICogbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihoYW5kbGVGdWxmaWxsLCBoYW5kbGVSZWplY3QpO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaW5kZXguanMiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaXNQcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pc1Byb21pc2UuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2VzL2lzUHJvbWlzZS5qcyIsIi8qZ2xvYmFsIGRlZmluZTpmYWxzZSAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE3IENyYWlnIENhbXBiZWxsXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogTW91c2V0cmFwIGlzIGEgc2ltcGxlIGtleWJvYXJkIHNob3J0Y3V0IGxpYnJhcnkgZm9yIEphdmFzY3JpcHQgd2l0aFxuICogbm8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKlxuICogQHZlcnNpb24gMS42LjFcbiAqIEB1cmwgY3JhaWcuaXMva2lsbGluZy9taWNlXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8vIENoZWNrIGlmIG1vdXNldHJhcCBpcyB1c2VkIGluc2lkZSBicm93c2VyLCBpZiBub3QsIHJldHVyblxuICAgIGlmICghd2luZG93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIG9mIHNwZWNpYWwga2V5Y29kZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBrZXlzXG4gICAgICpcbiAgICAgKiBldmVyeXRoaW5nIGluIHRoaXMgZGljdGlvbmFyeSBjYW5ub3QgdXNlIGtleXByZXNzIGV2ZW50c1xuICAgICAqIHNvIGl0IGhhcyB0byBiZSBoZXJlIHRvIG1hcCB0byB0aGUgY29ycmVjdCBrZXljb2RlcyBmb3JcbiAgICAgKiBrZXl1cC9rZXlkb3duIGV2ZW50c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX01BUCA9IHtcbiAgICAgICAgODogJ2JhY2tzcGFjZScsXG4gICAgICAgIDk6ICd0YWInLFxuICAgICAgICAxMzogJ2VudGVyJyxcbiAgICAgICAgMTY6ICdzaGlmdCcsXG4gICAgICAgIDE3OiAnY3RybCcsXG4gICAgICAgIDE4OiAnYWx0JyxcbiAgICAgICAgMjA6ICdjYXBzbG9jaycsXG4gICAgICAgIDI3OiAnZXNjJyxcbiAgICAgICAgMzI6ICdzcGFjZScsXG4gICAgICAgIDMzOiAncGFnZXVwJyxcbiAgICAgICAgMzQ6ICdwYWdlZG93bicsXG4gICAgICAgIDM1OiAnZW5kJyxcbiAgICAgICAgMzY6ICdob21lJyxcbiAgICAgICAgMzc6ICdsZWZ0JyxcbiAgICAgICAgMzg6ICd1cCcsXG4gICAgICAgIDM5OiAncmlnaHQnLFxuICAgICAgICA0MDogJ2Rvd24nLFxuICAgICAgICA0NTogJ2lucycsXG4gICAgICAgIDQ2OiAnZGVsJyxcbiAgICAgICAgOTE6ICdtZXRhJyxcbiAgICAgICAgOTM6ICdtZXRhJyxcbiAgICAgICAgMjI0OiAnbWV0YSdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBmb3Igc3BlY2lhbCBjaGFyYWN0ZXJzIHNvIHRoZXkgY2FuIHN1cHBvcnRcbiAgICAgKlxuICAgICAqIHRoaXMgZGljdGlvbmFyeSBpcyBvbmx5IHVzZWQgaW5jYXNlIHlvdSB3YW50IHRvIGJpbmQgYVxuICAgICAqIGtleXVwIG9yIGtleWRvd24gZXZlbnQgdG8gb25lIG9mIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgICAgMTA2OiAnKicsXG4gICAgICAgIDEwNzogJysnLFxuICAgICAgICAxMDk6ICctJyxcbiAgICAgICAgMTEwOiAnLicsXG4gICAgICAgIDExMSA6ICcvJyxcbiAgICAgICAgMTg2OiAnOycsXG4gICAgICAgIDE4NzogJz0nLFxuICAgICAgICAxODg6ICcsJyxcbiAgICAgICAgMTg5OiAnLScsXG4gICAgICAgIDE5MDogJy4nLFxuICAgICAgICAxOTE6ICcvJyxcbiAgICAgICAgMTkyOiAnYCcsXG4gICAgICAgIDIxOTogJ1snLFxuICAgICAgICAyMjA6ICdcXFxcJyxcbiAgICAgICAgMjIxOiAnXScsXG4gICAgICAgIDIyMjogJ1xcJydcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIG1hcHBpbmcgb2Yga2V5cyB0aGF0IHJlcXVpcmUgc2hpZnQgb24gYSBVUyBrZXlwYWRcbiAgICAgKiBiYWNrIHRvIHRoZSBub24gc2hpZnQgZXF1aXZlbGVudHNcbiAgICAgKlxuICAgICAqIHRoaXMgaXMgc28geW91IGNhbiB1c2Uga2V5dXAgZXZlbnRzIHdpdGggdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogbm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IHdvcmsgcmVsaWFibHkgb24gVVMga2V5Ym9hcmRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgICAnfic6ICdgJyxcbiAgICAgICAgJyEnOiAnMScsXG4gICAgICAgICdAJzogJzInLFxuICAgICAgICAnIyc6ICczJyxcbiAgICAgICAgJyQnOiAnNCcsXG4gICAgICAgICclJzogJzUnLFxuICAgICAgICAnXic6ICc2JyxcbiAgICAgICAgJyYnOiAnNycsXG4gICAgICAgICcqJzogJzgnLFxuICAgICAgICAnKCc6ICc5JyxcbiAgICAgICAgJyknOiAnMCcsXG4gICAgICAgICdfJzogJy0nLFxuICAgICAgICAnKyc6ICc9JyxcbiAgICAgICAgJzonOiAnOycsXG4gICAgICAgICdcXFwiJzogJ1xcJycsXG4gICAgICAgICc8JzogJywnLFxuICAgICAgICAnPic6ICcuJyxcbiAgICAgICAgJz8nOiAnLycsXG4gICAgICAgICd8JzogJ1xcXFwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBsaXN0IG9mIHNwZWNpYWwgc3RyaW5ncyB5b3UgY2FuIHVzZSB0byBtYXBcbiAgICAgKiB0byBtb2RpZmllciBrZXlzIHdoZW4geW91IHNwZWNpZnkgeW91ciBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TUEVDSUFMX0FMSUFTRVMgPSB7XG4gICAgICAgICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgJ2NvbW1hbmQnOiAnbWV0YScsXG4gICAgICAgICdyZXR1cm4nOiAnZW50ZXInLFxuICAgICAgICAnZXNjYXBlJzogJ2VzYycsXG4gICAgICAgICdwbHVzJzogJysnLFxuICAgICAgICAnbW9kJzogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyAnbWV0YScgOiAnY3RybCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZsaXBwZWQgdmVyc2lvbiBvZiBfTUFQIGZyb20gYWJvdmVcbiAgICAgKiBuZWVkZWQgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIHVzZSBrZXlwcmVzcyBvciBub3Qgd2hlbiBubyBhY3Rpb25cbiAgICAgKiBpcyBzcGVjaWZpZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHZhciBfUkVWRVJTRV9NQVA7XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdGhlIGYga2V5cywgZjEgdG8gZjE5IGFuZCBhZGQgdGhlbSB0byB0aGUgbWFwXG4gICAgICogcHJvZ3JhbWF0aWNhbGx5XG4gICAgICovXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCAyMDsgKytpKSB7XG4gICAgICAgIF9NQVBbMTExICsgaV0gPSAnZicgKyBpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0byBtYXAgbnVtYmVycyBvbiB0aGUgbnVtZXJpYyBrZXlwYWRcbiAgICAgKi9cbiAgICBmb3IgKGkgPSAwOyBpIDw9IDk7ICsraSkge1xuXG4gICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gdXNlIGEgc3RyaW5nIGNhdXNlIG90aGVyd2lzZSBzaW5jZSAwIGlzIGZhbHNleVxuICAgICAgICAvLyBtb3VzZXRyYXAgd2lsbCBuZXZlciBmaXJlIGZvciBudW1wYWQgMCBwcmVzc2VkIGFzIHBhcnQgb2YgYSBrZXlkb3duXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICAvL1xuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvbW91c2V0cmFwL3B1bGwvMjU4XG4gICAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcm9zcyBicm93c2VyIGFkZCBldmVudCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRG9jdW1lbnR9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgdGhlIGV2ZW50IGFuZCByZXR1cm5zIHRoZSBrZXkgY2hhcmFjdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSkge1xuXG4gICAgICAgIC8vIGZvciBrZXlwcmVzcyBldmVudHMgd2Ugc2hvdWxkIHJldHVybiB0aGUgY2hhcmFjdGVyIGFzIGlzXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgbm90IHByZXNzZWQgdGhlbiBpdCBpcyBzYWZlIHRvIGFzc3VtZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSB3YW50IHRoZSBjaGFyYWN0ZXIgdG8gYmUgbG93ZXJjYXNlLiAgdGhpcyBtZWFucyBpZlxuICAgICAgICAgICAgLy8geW91IGFjY2lkZW50YWxseSBoYXZlIGNhcHMgbG9jayBvbiB0aGVuIHlvdXIga2V5IGJpbmRpbmdzXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRpbnVlIHRvIHdvcmtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgb25seSBzaWRlIGVmZmVjdCB0aGF0IG1pZ2h0IG5vdCBiZSBkZXNpcmVkIGlzIGlmIHlvdVxuICAgICAgICAgICAgLy8gYmluZCBzb21ldGhpbmcgbGlrZSAnQScgY2F1c2UgeW91IHdhbnQgdG8gdHJpZ2dlciBhblxuICAgICAgICAgICAgLy8gZXZlbnQgd2hlbiBjYXBpdGFsIEEgaXMgcHJlc3NlZCBjYXBzIGxvY2sgd2lsbCBubyBsb25nZXJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50LiAgc2hpZnQrYSB3aWxsIHRob3VnaC5cbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIG5vbiBrZXlwcmVzcyBldmVudHMgdGhlIHNwZWNpYWwgbWFwcyBhcmUgbmVlZGVkXG4gICAgICAgIGlmIChfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfS0VZQ09ERV9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCBpcyBub3QgaW4gdGhlIHNwZWNpYWwgbWFwXG5cbiAgICAgICAgLy8gd2l0aCBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgdGhlIGNoYXJhY3RlciBzZWVtcyB0byBhbHdheXNcbiAgICAgICAgLy8gY29tZSBpbiBhcyBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyIHdoZXRoZXIgeW91IGFyZSBwcmVzc2luZyBzaGlmdFxuICAgICAgICAvLyBvciBub3QuICB3ZSBzaG91bGQgbWFrZSBzdXJlIGl0IGlzIGFsd2F5cyBsb3dlcmNhc2UgZm9yIGNvbXBhcmlzb25zXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMxXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMxLCBtb2RpZmllcnMyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllcnMxLnNvcnQoKS5qb2luKCcsJykgPT09IG1vZGlmaWVyczIuc29ydCgpLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIGtleSBldmVudCBhbmQgZmlndXJlcyBvdXQgd2hhdCB0aGUgbW9kaWZpZXJzIGFyZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXZlbnRNb2RpZmllcnMoZSkge1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnY3RybCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ21ldGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RpZmllcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgZGVmYXVsdCBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0b3BzIHByb3BvZ2F0aW9uIGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUga2V5Y29kZSBzcGVjaWZpZWQgaXMgYSBtb2RpZmllciBrZXkgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzTW9kaWZpZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NoaWZ0JyB8fCBrZXkgPT0gJ2N0cmwnIHx8IGtleSA9PSAnYWx0JyB8fCBrZXkgPT0gJ21ldGEnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldmVyc2VzIHRoZSBtYXAgbG9va3VwIHNvIHRoYXQgd2UgY2FuIGxvb2sgZm9yIHNwZWNpZmljIGtleXNcbiAgICAgKiB0byBzZWUgd2hhdCBjYW4gYW5kIGNhbid0IHVzZSBrZXlwcmVzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRSZXZlcnNlTWFwKCkge1xuICAgICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX01BUCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcHVsbCBvdXQgdGhlIG51bWVyaWMga2V5cGFkIGZyb20gaGVyZSBjYXVzZSBrZXlwcmVzcyBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBiZSBhYmxlIHRvIGRldGVjdCB0aGUga2V5cyBmcm9tIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfTUFQLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfUkVWRVJTRV9NQVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcGlja3MgdGhlIGJlc3QgYWN0aW9uIGJhc2VkIG9uIHRoZSBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBjaGFyYWN0ZXIgZm9yIGtleVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIHBhc3NlZCBpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKSB7XG5cbiAgICAgICAgLy8gaWYgbm8gYWN0aW9uIHdhcyBwaWNrZWQgaW4gd2Ugc2hvdWxkIHRyeSB0byBwaWNrIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCB3ZSB0aGluayB3b3VsZCB3b3JrIGJlc3QgZm9yIHRoaXMga2V5XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBfZ2V0UmV2ZXJzZU1hcCgpW2tleV0gPyAna2V5ZG93bicgOiAna2V5cHJlc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBkb24ndCB3b3JrIGFzIGV4cGVjdGVkIHdpdGgga2V5cHJlc3MsXG4gICAgICAgIC8vIHN3aXRjaCB0byBrZXlkb3duXG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAna2V5ZG93bic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGZyb20gYSBzdHJpbmcga2V5IGNvbWJpbmF0aW9uIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGxpa2UgXCJjb21tYW5kK3NoaWZ0K2xcIlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbikge1xuICAgICAgICBpZiAoY29tYmluYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmV0dXJuIFsnKyddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgJytwbHVzJyk7XG4gICAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdCgnKycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaW5mbyBmb3IgYSBzcGVjaWZpYyBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24ga2V5IGNvbWJpbmF0aW9uIChcImNvbW1hbmQrc1wiIG9yIFwiYVwiIG9yIFwiKlwiKVxuICAgICAqIEBwYXJhbSAge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbikge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICAvLyB0YWtlIHRoZSBrZXlzIGZyb20gdGhpcyBwYXR0ZXJuIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIGFjdHVhbFxuICAgICAgICAvLyBwYXR0ZXJuIGlzIGFsbCBhYm91dFxuICAgICAgICBrZXlzID0gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGtleSBuYW1lc1xuICAgICAgICAgICAgaWYgKF9TUEVDSUFMX0FMSUFTRVNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TUEVDSUFMX0FMSUFTRVNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBub3QgYSBrZXlwcmVzcyBldmVudCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gYmUgc21hcnQgYWJvdXQgdXNpbmcgc2hpZnQga2V5c1xuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG9ubHkgd29yayBmb3IgVVMga2V5Ym9hcmRzIGhvd2V2ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9ICdrZXlwcmVzcycgJiYgX1NISUZUX01BUFtrZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NISUZUX01BUFtrZXldO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGtleSBpcyBhIG1vZGlmaWVyIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG1vZGlmaWVyc1xuICAgICAgICAgICAgaWYgKF9pc01vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGtleSBjb21iaW5hdGlvbiBpc1xuICAgICAgICAvLyB3ZSB3aWxsIHRyeSB0byBwaWNrIHRoZSBiZXN0IGV2ZW50IGZvciBpdFxuICAgICAgICBhY3Rpb24gPSBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9iZWxvbmdzVG8oZWxlbWVudCwgYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JlbG9uZ3NUbyhlbGVtZW50LnBhcmVudE5vZGUsIGFuY2VzdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIE1vdXNldHJhcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGVsZW1lbnQgdG8gYXR0YWNoIGtleSBldmVudHMgdG9cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiBhbGwgdGhlIGNhbGxiYWNrcyBzZXR1cCB2aWEgTW91c2V0cmFwLmJpbmQoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRpcmVjdCBtYXAgb2Ygc3RyaW5nIGNvbWJpbmF0aW9ucyB0byBjYWxsYmFja3MgdXNlZCBmb3IgdHJpZ2dlcigpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICoga2VlcHMgdHJhY2sgb2Ygd2hhdCBsZXZlbCBlYWNoIHNlcXVlbmNlIGlzIGF0IHNpbmNlIG11bHRpcGxlXG4gICAgICAgICAqIHNlcXVlbmNlcyBjYW4gc3RhcnQgb3V0IHdpdGggdGhlIHNhbWUgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfc2VxdWVuY2VMZXZlbHMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIHNldFRpbWVvdXQgY2FsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVsbHxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3Jlc2V0VGltZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXl1cFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5cHJlc3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXlwcmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhcmUgd2UgY3VycmVudGx5IGluc2lkZSBvZiBhIHNlcXVlbmNlP1xuICAgICAgICAgKiB0eXBlIG9mIGFjdGlvbiAoXCJrZXl1cFwiIG9yIFwia2V5ZG93blwiIG9yIFwia2V5cHJlc3NcIikgb3IgZmFsc2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVzZXRzIGFsbCBzZXF1ZW5jZSBjb3VudGVycyBleGNlcHQgZm9yIHRoZSBvbmVzIHBhc3NlZCBpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZG9Ob3RSZXNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCkge1xuICAgICAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG5cbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIF9zZXF1ZW5jZUxldmVscykge1xuICAgICAgICAgICAgICAgIGlmIChkb05vdFJlc2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VxdWVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVTZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZmluZHMgYWxsIGNhbGxiYWNrcyB0aGF0IG1hdGNoIGJhc2VkIG9uIHRoZSBrZXljb2RlLCBtb2RpZmllcnMsXG4gICAgICAgICAqIGFuZCBhY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudHxPYmplY3R9IGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHRoZSBzZXF1ZW5jZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlLCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2s7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGUudHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyByZWxhdGVkIHRvIHRoaXMga2V5Y29kZVxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXkgaXMgY29taW5nIHVwIG9uIGl0cyBvd24gd2Ugc2hvdWxkIGFsbG93IGl0XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09ICdrZXl1cCcgJiYgX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA9IFtjaGFyYWN0ZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkXG4gICAgICAgICAgICAvLyBhbmQgc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgYSBzZXF1ZW5jZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQsIGJ1dCB0aGlzIGlzIGEgc2VxdWVuY2UgYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgd3JvbmcgbGV2ZWwgdGhlbiBtb3ZlIG9udG8gdGhlIG5leHQgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGFjdGlvbiB3ZSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBtYXRjaCB0aGUgYWN0aW9uIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd2Ugc2hvdWxkIGtlZXAgZ29pbmdcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEga2V5cHJlc3MgZXZlbnQgYW5kIHRoZSBtZXRhIGtleSBhbmQgY29udHJvbCBrZXlcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHByZXNzZWQgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gb25seSBsb29rIGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGNoYXJhY3Rlciwgb3RoZXJ3aXNlIGNoZWNrIHRoZSBtb2RpZmllcnMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gY2hyb21lIHdpbGwgbm90IGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIHNhZmFyaSB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIG1ldGErc2hpZnQgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIGZpcmVmb3ggd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSkgfHwgX21vZGlmaWVyc01hdGNoKG1vZGlmaWVycywgY2FsbGJhY2subW9kaWZpZXJzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4geW91IGJpbmQgYSBjb21iaW5hdGlvbiBvciBzZXF1ZW5jZSBhIHNlY29uZCB0aW1lIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZS4gIGlmIGEgc2VxdWVuY2VOYW1lIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbWJpbmF0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGlzIGNhbGwgaXQgZG9lcyBqdXN0IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRvZG8gbWFrZSBkZWxldGluZyBpdHMgb3duIG1ldGhvZD9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUNvbWJvID0gIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5jb21ibyA9PSBjb21iaW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVDb21ibyB8fCBkZWxldGVTZXF1ZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdHVhbGx5IGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgdGhpcyB3aWxsIHVzZSB0aGUganF1ZXJ5XG4gICAgICAgICAqIGNvbnZlbnRpb24gLSBwcmV2ZW50IGRlZmF1bHQgYW5kIHN0b3AgcHJvcG9nYXRpb24gb24gdGhlIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZXZlbnQgc2hvdWxkIG5vdCBoYXBwZW4gc3RvcCBoZXJlXG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9wQ2FsbGJhY2soZSwgZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LCBjb21ibywgc2VxdWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soZSwgY29tYm8pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICAgICAgICBfc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBjaGFyYWN0ZXIga2V5IGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSk7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBkb05vdFJlc2V0ID0ge307XG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhMZXZlbCBmb3Igc2VxdWVuY2VzIHNvIHdlIGNhbiBvbmx5IGV4ZWN1dGUgdGhlIGxvbmdlc3QgY2FsbGJhY2sgc2VxdWVuY2VcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaV0ubGV2ZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG1hdGNoaW5nIGNhbGxiYWNrcyBmb3IgdGhpcyBrZXkgZXZlbnRcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpcmUgZm9yIGFsbCBzZXF1ZW5jZSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgc3VjaCBhcyBcImcgaVwiIGFuZCBcImcgdFwiIHRoZXkgYm90aCBuZWVkIHRvIGZpcmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZm9yIG1hdGNoaW5nIGcgY2F1c2Ugb3RoZXJ3aXNlIHlvdSBjYW4gb25seSBldmVyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdGhlIGZpcnN0IG9uZVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBmaXJlIGNhbGxiYWNrcyBmb3IgdGhlIG1heExldmVsIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Vic2VxdWVuY2VzIGZyb20gYWxzbyBmaXJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgJ2Egb3B0aW9uIGInIHNob3VsZCBub3QgY2F1c2UgJ29wdGlvbiBiJyB0byBmaXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gdGhvdWdoICdvcHRpb24gYicgaXMgcGFydCBvZiB0aGUgb3RoZXIgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IHNlcXVlbmNlcyB0aGF0IGRvIG5vdCBtYXRjaCBoZXJlIHdpbGwgYmUgZGlzY2FyZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93IGJ5IHRoZSBfcmVzZXRTZXF1ZW5jZXMgY2FsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLmxldmVsICE9IG1heExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSBsaXN0IG9mIHdoaWNoIHNlcXVlbmNlcyB3ZXJlIG1hdGNoZXMgZm9yIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2ldLnNlcV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvLCBjYWxsYmFja3NbaV0uc2VxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2VyZSBubyBzZXF1ZW5jZSBtYXRjaGVzIGJ1dCB3ZSBhcmUgc3RpbGwgaGVyZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgbWVhbnMgdGhpcyBpcyBhIHJlZ3VsYXIgbWF0Y2ggc28gd2Ugc2hvdWxkIGZpcmUgdGhhdFxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBrZXkgeW91IHByZXNzZWQgbWF0Y2hlcyB0aGUgdHlwZSBvZiBzZXF1ZW5jZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBiZWluZyBhIG1vZGlmaWVyIChpZSBcImtleXVwXCIgb3IgXCJrZXlwcmVzc1wiKSB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHNlcXVlbmNlcyB0aGF0IHdlcmUgbm90IG1hdGNoZWQgYnkgdGhpcyBldmVudFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc28sIGZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGUgc2VxdWVuY2UgXCJoIGEgdFwiIGFuZCB5b3VcbiAgICAgICAgICAgIC8vIHR5cGUgXCJoIGUgYSByIHRcIiBpdCBkb2VzIG5vdCBtYXRjaC4gIGluIHRoaXMgY2FzZSB0aGUgXCJlXCIgd2lsbFxuICAgICAgICAgICAgLy8gY2F1c2UgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBhcmUgaWdub3JlZCBiZWNhdXNlIHlvdSBjYW4gaGF2ZSBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0aGF0IGNvbnRhaW5zIG1vZGlmaWVycyBzdWNoIGFzIFwiZW50ZXIgY3RybCtzcGFjZVwiIGFuZCBpbiBtb3N0XG4gICAgICAgICAgICAvLyBjYXNlcyB0aGUgbW9kaWZpZXIga2V5IHdpbGwgYmUgcHJlc3NlZCBiZWZvcmUgdGhlIG5leHQga2V5XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgaGF2ZSBhIHNlcXVlbmNlIHN1Y2ggYXMgXCJjdHJsK2IgYVwiIHRoZW4gcHJlc3NpbmcgdGhlXG4gICAgICAgICAgICAvLyBcImJcIiBrZXkgd2lsbCB0cmlnZ2VyIGEgXCJrZXlwcmVzc1wiIGFuZCBhIFwia2V5ZG93blwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIFwia2V5ZG93blwiIGlzIGV4cGVjdGVkIHdoZW4gdGhlcmUgaXMgYSBtb2RpZmllciwgYnV0IHRoZVxuICAgICAgICAgICAgLy8gXCJrZXlwcmVzc1wiIGVuZHMgdXAgbWF0Y2hpbmcgdGhlIF9uZXh0RXhwZWN0ZWRBY3Rpb24gc2luY2UgaXQgb2NjdXJzXG4gICAgICAgICAgICAvLyBhZnRlciBhbmQgdGhhdCBjYXVzZXMgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gd2UgaWdub3JlIGtleXByZXNzZXMgaW4gYSBzZXF1ZW5jZSB0aGF0IGRpcmVjdGx5IGZvbGxvdyBhIGtleWRvd25cbiAgICAgICAgICAgIC8vIGZvciB0aGUgc2FtZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHZhciBpZ25vcmVUaGlzS2V5cHJlc3MgPSBlLnR5cGUgPT0gJ2tleXByZXNzJyAmJiBfaWdub3JlTmV4dEtleXByZXNzO1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrICYmIGUudHlwZSA9PSAna2V5ZG93bic7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBrZXlkb3duIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2hhbmRsZUtleUV2ZW50KGUpIHtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGUud2hpY2ggZm9yIGtleSBldmVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjg1NjI3L2phdmFzY3JpcHQta2V5Y29kZS12cy1jaGFyY29kZS11dHRlci1jb25mdXNpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBlLndoaWNoID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcblxuICAgICAgICAgICAgLy8gbm8gY2hhcmFjdGVyIGZvdW5kIHRoZW4gc3RvcFxuICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5lZWQgdG8gdXNlID09PSBmb3IgdGhlIGNoYXJhY3RlciBjaGVjayBiZWNhdXNlIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIDBcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXVwJyAmJiBfaWdub3JlTmV4dEtleXVwID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmhhbmRsZUtleShjaGFyYWN0ZXIsIF9ldmVudE1vZGlmaWVycyhlKSwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2FsbGVkIHRvIHNldCBhIDEgc2Vjb25kIHRpbWVvdXQgb24gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiB0aGlzIGlzIHNvIGFmdGVyIGVhY2gga2V5IHByZXNzIGluIHRoZSBzZXF1ZW5jZSB5b3UgaGF2ZSAxIHNlY29uZFxuICAgICAgICAgKiB0byBwcmVzcyB0aGUgbmV4dCBrZXkgYmVmb3JlIHlvdSBoYXZlIHRvIHN0YXJ0IG92ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfcmVzZXRUaW1lcik7XG4gICAgICAgICAgICBfcmVzZXRUaW1lciA9IHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIGtleSBzZXF1ZW5jZSB0byBhbiBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYm8gLSBjb21ibyBzcGVjaWZpZWQgaW4gYmluZCBjYWxsXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGtleXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTZXF1ZW5jZShjb21ibywga2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuXG4gICAgICAgICAgICAvLyBzdGFydCBvZmYgYnkgYWRkaW5nIGEgc2VxdWVuY2UgbGV2ZWwgcmVjb3JkIGZvciB0aGlzIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICAvLyBhbmQgc2V0dGluZyB0aGUgbGV2ZWwgdG8gMFxuICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbGJhY2sgdG8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlIGxldmVsIGZvciB0aGlzIHNlcXVlbmNlIGFuZCByZXNldFxuICAgICAgICAgICAgICogYWxsIG90aGVyIHNlcXVlbmNlcyB0aGF0IHdlcmUgYWN0aXZlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5leHRBY3Rpb25cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2luY3JlYXNlU2VxdWVuY2UobmV4dEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IG5leHRBY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VUaW1lcigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd3JhcHMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayBpbnNpZGUgb2YgYW5vdGhlciBmdW5jdGlvbiBpbiBvcmRlclxuICAgICAgICAgICAgICogdG8gcmVzZXQgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGFzIHNvb24gYXMgdGhpcyBzZXF1ZW5jZSBpcyBkb25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2FsbGJhY2tBbmRSZXNldChlKSB7XG4gICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSB0aGUgbmV4dCBrZXkgdXAgaWYgdGhlIGFjdGlvbiBpcyBrZXkgZG93blxuICAgICAgICAgICAgICAgIC8vIG9yIGtleXByZXNzLiAgdGhpcyBpcyBzbyBpZiB5b3UgZmluaXNoIGEgc2VxdWVuY2UgYW5kXG4gICAgICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUga2V5IHRoZSBmaW5hbCBrZXkgd2lsbCBub3QgdHJpZ2dlciBhIGtleXVwXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2tleXVwJykge1xuICAgICAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZWlyZCByYWNlIGNvbmRpdGlvbiBpZiBhIHNlcXVlbmNlIGVuZHMgd2l0aCB0aGUga2V5XG4gICAgICAgICAgICAgICAgLy8gYW5vdGhlciBzZXF1ZW5jZSBiZWdpbnMgd2l0aFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzIG9uZSBhdCBhIHRpbWUgYW5kIGJpbmQgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBmdW5jdGlvbi4gIGZvciBhbnkga2V5IGxlYWRpbmcgdXAgdG8gdGhlIGZpbmFsIG9uZSBpdCBzaG91bGRcbiAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBzZXF1ZW5jZS4gYWZ0ZXIgdGhlIGZpbmFsLCBpdCBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlmIGFuIGFjdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsIGJpbmQgY2FsbCB0aGVuIHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gYmUgdXNlZCB0aHJvdWdob3V0LiAgb3RoZXJ3aXNlIHdlIHdpbGwgcGFzcyB0aGUgYWN0aW9uIHRoYXQgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IGtleSBpbiB0aGUgc2VxdWVuY2Ugc2hvdWxkIG1hdGNoLiAgdGhpcyBhbGxvd3MgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdG8gbWl4IGFuZCBtYXRjaCBrZXlwcmVzcyBhbmQga2V5ZG93biBldmVudHMgZGVwZW5kaW5nIG9uIHdoaWNoXG4gICAgICAgICAgICAvLyBvbmVzIGFyZSBiZXR0ZXIgc3VpdGVkIHRvIHRoZSBrZXkgcHJvdmlkZWRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsID0gaSArIDEgPT09IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ2FsbGJhY2sgPSBpc0ZpbmFsID8gX2NhbGxiYWNrQW5kUmVzZXQgOiBfaW5jcmVhc2VTZXF1ZW5jZShhY3Rpb24gfHwgX2dldEtleUluZm8oa2V5c1tpICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpXSwgd3JhcHBlZENhbGxiYWNrLCBhY3Rpb24sIGNvbWJvLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIHNpbmdsZSBrZXlib2FyZCBjb21iaW5hdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHNlcXVlbmNlIGlmIHBhcnQgb2Ygc2VxdWVuY2VcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbCAtIHdoYXQgcGFydCBvZiB0aGUgc2VxdWVuY2UgdGhlIGNvbW1hbmQgaXNcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTaW5nbGUoY29tYmluYXRpb24sIGNhbGxiYWNrLCBhY3Rpb24sIHNlcXVlbmNlTmFtZSwgbGV2ZWwpIHtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYSBkaXJlY3QgbWFwcGVkIHJlZmVyZW5jZSBmb3IgdXNlIHdpdGggTW91c2V0cmFwLnRyaWdnZXJcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtjb21iaW5hdGlvbiArICc6JyArIGFjdGlvbl0gPSBjYWxsYmFjaztcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIG11bHRpcGxlIHNwYWNlcyBpbiBhIHJvdyBiZWNvbWUgYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBjb21iaW5hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGluZm87XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgcGF0dGVybiBpcyBhIHNlcXVlbmNlIG9mIGtleXMgdGhlbiBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAgICAgICAgLy8gdG8gcmVwcm9jZXNzIGVhY2ggcGF0dGVybiBvbmUga2V5IGF0IGEgdGltZVxuICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmZvID0gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbml0aWFsaXplIGFycmF5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIC8vIGEgY2FsbGJhY2sgaXMgYWRkZWQgZm9yIHRoaXMga2V5XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldID0gc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSB8fCBbXTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIG1hdGNoIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgX2dldE1hdGNoZXMoaW5mby5rZXksIGluZm8ubW9kaWZpZXJzLCB7dHlwZTogaW5mby5hY3Rpb259LCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGlzIGNhbGwgYmFjayB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgc2VxdWVuY2UgcHV0IGl0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIC8vIGlmIG5vdCBwdXQgaXQgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHdheSB0aGVzZSBhcmUgcHJvY2Vzc2VkIGV4cGVjdHNcbiAgICAgICAgICAgIC8vIHRoZSBzZXF1ZW5jZSBvbmVzIHRvIGNvbWUgZmlyc3RcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV1bc2VxdWVuY2VOYW1lID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogaW5mby5tb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpbmZvLmFjdGlvbixcbiAgICAgICAgICAgICAgICBzZXE6IHNlcXVlbmNlTmFtZSxcbiAgICAgICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBtdWx0aXBsZSBjb21iaW5hdGlvbnMgdG8gdGhlIHNhbWUgY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29tYmluYXRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZSA9IGZ1bmN0aW9uKGNvbWJpbmF0aW9ucywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShjb21iaW5hdGlvbnNbaV0sIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN0YXJ0IVxuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXByZXNzJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlkb3duJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXl1cCcsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiBjYW4gYmUgYSBzaW5nbGUga2V5LCBhIGNvbWJpbmF0aW9uIG9mIGtleXMgc2VwYXJhdGVkIHdpdGggKyxcbiAgICAgKiBhbiBhcnJheSBvZiBrZXlzLCBvciBhIHNlcXVlbmNlIG9mIGtleXMgc2VwYXJhdGVkIGJ5IHNwYWNlc1xuICAgICAqXG4gICAgICogYmUgc3VyZSB0byBsaXN0IHRoZSBtb2RpZmllciBrZXlzIGZpcnN0IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgICAqIGNvcnJlY3Qga2V5IGVuZHMgdXAgZ2V0dGluZyBib3VuZCAodGhlIGxhc3Qga2V5IGluIHRoZSBwYXR0ZXJuKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIC0gJ2tleXByZXNzJywgJ2tleWRvd24nLCBvciAna2V5dXAnXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXlzID0ga2V5cyBpbnN0YW5jZW9mIEFycmF5ID8ga2V5cyA6IFtrZXlzXTtcbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB1bmJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogdGhlIHVuYmluZGluZyBzZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGtleSBjb21ib1xuICAgICAqIHRvIGFuIGVtcHR5IGZ1bmN0aW9uIGFuZCBkZWxldGVzIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiB0aGVcbiAgICAgKiBfZGlyZWN0TWFwIGRpY3QuXG4gICAgICpcbiAgICAgKiBUT0RPOiBhY3R1YWxseSByZW1vdmUgdGhpcyBmcm9tIHRoZSBfY2FsbGJhY2tzIGRpY3Rpb25hcnkgaW5zdGVhZFxuICAgICAqIG9mIGJpbmRpbmcgYW4gZW1wdHkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIHRoZSBrZXljb21ibythY3Rpb24gaGFzIHRvIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXNcbiAgICAgKiBpdCB3YXMgZGVmaW5lZCBpbiB0aGUgYmluZCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLmJpbmQuY2FsbChzZWxmLCBrZXlzLCBmdW5jdGlvbigpIHt9LCBhY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0cmlnZ2VycyBhbiBldmVudCB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSkge1xuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKHt9LCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogcmVzZXRzIHRoZSBsaWJyYXJ5IGJhY2sgdG8gaXRzIGluaXRpYWwgc3RhdGUuICB0aGlzIGlzIHVzZWZ1bFxuICAgICAqIGlmIHlvdSB3YW50IHRvIGNsZWFyIG91dCB0aGUgY3VycmVudCBrZXlib2FyZCBzaG9ydGN1dHMgYW5kIGJpbmRcbiAgICAgKiBuZXcgb25lcyAtIGZvciBleGFtcGxlIGlmIHlvdSBzd2l0Y2ggdG8gYW5vdGhlciBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNob3VsZCB3ZSBzdG9wIHRoaXMgZXZlbnQgYmVmb3JlIGZpcmluZyBvZmYgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnN0b3BDYWxsYmFjayA9IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgICBpZiAoKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgbW91c2V0cmFwICcpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfYmVsb25nc1RvKGVsZW1lbnQsIHNlbGYudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcCBmb3IgaW5wdXQsIHNlbGVjdCwgYW5kIHRleHRhcmVhXG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT0gJ0lOUFVUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdURVhUQVJFQScgfHwgZWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogZXhwb3NlcyBfaGFuZGxlS2V5IHB1YmxpY2x5IHNvIGl0IGNhbiBiZSBvdmVyd3JpdHRlbiBieSBleHRlbnNpb25zXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5oYW5kbGVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGFsbG93IGN1c3RvbSBrZXkgbWFwcGluZ3NcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuYWRkS2V5Y29kZXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgX01BUFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX1JFVkVSU0VfTUFQID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnNcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnMgdG8gd29ya1xuICAgICAqIG5vdyB0aGF0IG1vdXNldHJhcCBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIE1vdXNldHJhcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkb2N1bWVudE1vdXNldHJhcCA9IE1vdXNldHJhcChkb2N1bWVudCk7XG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBkb2N1bWVudE1vdXNldHJhcCkge1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIE1vdXNldHJhcFttZXRob2RdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kXS5hcHBseShkb2N1bWVudE1vdXNldHJhcCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IChtZXRob2QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNb3VzZXRyYXAuaW5pdCgpO1xuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCB0byB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIHdpbmRvdy5Nb3VzZXRyYXAgPSBNb3VzZXRyYXA7XG5cbiAgICAvLyBleHBvc2UgYXMgYSBjb21tb24ganMgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTW91c2V0cmFwO1xuICAgIH1cblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgYXMgYW4gQU1EIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vdXNldHJhcDtcbiAgICAgICAgfSk7XG4gICAgfVxufSkgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCwgdHlwZW9mICB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xyXG5cclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzJ1xyXG5cclxuLy8gUkVEVVggUFJPVklERVJcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vIENPTVBPTkVOVFNcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluL21haW4uanN4J1xyXG5cclxuLy8gU1RPUkVcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnXHJcblxyXG53aW5kb3cuYWxlcnRpZnkgPSBhbGVydGlmeVxyXG5mb3JtYXRNb25leSgpXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8TWFpbiAvPlxyXG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2FwcC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9hcHAuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9hcHAuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7ZmVjdGhQcm9maWxlfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXHJcblxyXG4vLyBDT01QT05FTlRTXHJcblxyXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCdcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3gnXHJcbmltcG9ydCBGZXRjaGluZyBmcm9tICcuLi8uLi8uLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCdcclxuXHJcbi8vIGltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZmV0Y2hpbmc6IHN0b3JlLmZldGNoaW5nLmZldGNoaW5nLFxyXG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZWN0aFByb2ZpbGUoKSlcclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGZldGNoaW5nID0gdGhpcy5wcm9wcy5mZXRjaGluZyA/IDxGZXRjaGluZyAvPiA6ICcnXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdtYWluQ29udGFpbmVyJyA6ICdtYWluQ29udGFpbmVyIHNpZGVIaWRkZW4nXHJcbiAgICBjb25zdCBjb250ZW50ID0gPFJvdXRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2lkZU1lbnUgLz5cclxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9e21haW5Db250YWluZXJDbGFzc30+XHJcbiAgICAgICAgICA8VG9wQmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRhaW5lci1jb250ZW50Jz5cclxuICAgICAgICAgICAge3JvdXRlc31cclxuICAgICAgICAgICAge2ZldGNoaW5nfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Sb3V0ZXI+XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIHtjb250ZW50fVxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9tYWluLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhQcm9maWxlKCkge1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCgnL3Byb2ZpbGUvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoSXNBZG1pbkxvY2tlZCgpIHtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnByZWZzL2FkbWluX19pc19hZG1pbl9sb2NrZWQvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcclxuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcclxuXHJcbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XHJcblxyXG4gIDxSb3V0ZSBleGFjdCBwYXRoPScvc2FsZXMnIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cclxuXHJcbjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY2hlY2tVc2VyUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGVja1Blcm1pc3Npb25zJ1xyXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSE9NRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICB9XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J01haW4gaGVpZ2gxMDAnPlxyXG4gICAgICBIT01FXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvaG9tZS9ob21lLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3giLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcclxuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQvY29udGVudC5qc3gnXHJcbmltcG9ydCBBc2lkZSBmcm9tICcuL2FzaWRlL2FzaWRlLmpzeCdcclxuaW1wb3J0IFNlYXJjaFByb2R1Y3QgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4J1xyXG5pbXBvcnQgU2VhcmNoQ2xpZW50IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4J1xyXG5pbXBvcnQgUGF5UGFuZWwgZnJvbSAnLi9wYXkvcGF5UGFuZWwuanN4J1xyXG5pbXBvcnQgSW52b2ljZVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCdcclxuXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0FMRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICB9XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NhbGUnPlxyXG4gICAgICA8Q29udGVudCAvPlxyXG4gICAgICA8QXNpZGUgLz5cclxuXHJcbiAgICAgIDxTZWFyY2hQcm9kdWN0IC8+XHJcbiAgICAgIDxTZWFyY2hDbGllbnQgLz5cclxuICAgICAgPFBheVBhbmVsIC8+XHJcbiAgICAgIDxJbnZvaWNlUGFuZWwgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvbWFpbi5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvbWFpbi5qc3giLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3gnXHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uLy4uL2dlbmVyYWwvY2FydC9jYXJ0LmpzeCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxyXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgdG9nZ2xlV2lkdGggKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQgZnVsbFdpZHRoJyA6ICdzYWxlLWNvbnRlbnQnXHJcbiAgICBjb25zdCBjYXJ0Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtY2FydCcgOiAnc2FsZS1jb250ZW50LWNhcnQgZnVsbEhlaWdodCdcclxuICAgIGNvbnN0IHRvdGFsQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtdG90YWwnIDogJ3NhbGUtY29udGVudC10b3RhbCBjb2xsYXBzZWQnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1jb250ZW50LXByb2R1Y3QnID5cclxuICAgICAgICA8UHJvZHVjdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcnRDbGFzc30gPlxyXG4gICAgICAgIDxDYXJ0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG90YWxDbGFzc30gPlxyXG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1sZWZ0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGlucHV0VmFsOiBzdG9yZS5wcm9kdWN0cy5pbnB1dFZhbCxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxyXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcclxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuY29kZUlucHV0LmZvY3VzKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIC8vIHRoaXMuY29kZUlucHV0LmZvY3VzKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUUycsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0S3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnLFxyXG4gICAgICBlcnJvclR5cGU6ICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChwcm9kdWN0S3dhcmdzKSlcclxuXHJcbiAgfVxyXG5cclxuICBzZWFyY2hQcm9kdWN0Q2xpY2soKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1BST0RVQ1RfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGlmIChldi50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMF0gLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcclxuICAgICAgICBsZXQgcXR5ID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMV1cclxuICAgICAgICBxdHkgPSAoaXNOYU4ocXR5KSlcclxuICAgICAgICAgID8gMVxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHF0eSkgLy8gaWYgbm8gcXR5IHNldHMgdG8gMVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcclxuICAgICAgICAvLyAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiAwfSlcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIHByb2R1Y3RcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxiPlByb2R1Y3RvOjwvYj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZSc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcmNvZGUnIC8+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9J3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb2RlSW5wdXQgPSBpbnB1dFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBlbCBDw7NkaWdvIGRlbCBQcm9kdWN0bydcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlLWlucHV0IG1vdXNldHJhcCBmb3JtLWNvbnRyb2wgaW5wdXQtbGcnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0Q2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtc2VhcmNoJz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gNjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MThcbi8vIG1vZHVsZSBjaHVua3MgPSAxXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL2NhcnRJdGVtcy5qc3gnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcclxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXMsXHJcbiAgICAvLyBwcm9kdWN0U2VhcmNocGFuZWxWaXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtiJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xyXG5cclxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcclxuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2MnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXHJcblxyXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXHJcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGNvbnN0IHVzZUxvdGUgPSB0aGlzLnByb3BzLmRlZmF1bHRDb25maWdcclxuICAgIC8vICAgPyB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcuY2FydEl0ZW1Vc2VMb3RlXHJcbiAgICAvLyAgIDogZmFsc2VcclxuXHJcbiAgICAvLyBjb25zdCBsb3RlRmllbGQgPSB1c2VMb3RlXHJcbiAgICAvLyAgID8gPHRoPkxvdGU8L3RoPlxyXG4gICAgLy8gICA6IDx0aCAvPlxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FydCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWNvZGUnPlxyXG4gICAgICAgICAgPGg1PkPDs2Q8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDU+QXJ0PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItcXR5Jz5cclxuICAgICAgICAgIDxoNT5DYW50PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdW5pdFByaWNlJz5cclxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kaXNjb3VudCc+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWl2YSc+XHJcbiAgICAgICAgICA8aDU+SVY8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci10b3RhbCc+XHJcbiAgICAgICAgICA8aDU+VG90YWwgSVZJPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Q2FydEl0ZW1zIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VwZGF0ZVRvdGFscywgcmVtb3ZlRnJvbUNhcnR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxyXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcclxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXHJcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBPbiBjb21wb25lbnQgdXBkYXRlIChUaGUgY2FydCBoYXMgYmVlbiBtb2RpZmllZCkgY2FsbHMgdGhlIHVwZGF0ZSB0b3RhbHMgbWV0aG9kIGluIGFjdGlvbnMgZmlsZS5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVUb3RhbHModGhpcy5wcm9wcy5pbkNhcnQpKVxyXG5cclxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1ib2R5JylcclxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcclxuXHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgLy8gICBpZiAodGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSAhPSBuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmUpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICB9KVxyXG5cclxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrZicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlfWApLmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCstJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcclxuICAgICAgYWxlcnRpZnkucHJvbXB0KGBOdWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkb2AsICdJbmdyZXNlIGxhIG51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvJywgJydcclxuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcclxuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXHJcbiAgICAgICAgICAgIF9fdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgX190aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcclxuICAgICAgICAuc2V0KCdsYWJlbHMnLCB7b2s6ICdPaycsIGNhbmNlbDogJ0NhbmNlbGFyJ30pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcclxuICAgICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGRpc2NvdW50SW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgIDogMFxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gIH1cclxuXHJcbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBxdHkgPSBwYXJzZUZsb2F0KChldi50YXJnZXQudmFsdWUpKVxyXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICA6IDBcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5KGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5pbkNhcnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50KSlcclxuXHJcbiAgfVxyXG5cclxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xyXG5cclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcclxuICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgOiAwXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBmaWVsZEZvY3VzKGV2KSB7XHJcbiAgICBldi50YXJnZXQuc2VsZWN0KClcclxuICB9XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgaXRlbXMgaW4gY2FydCB1c2luZyB0YWJsZSByb3dzXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxyXG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcclxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcclxuICAgICAgICA6ICdjYXJ0LWJvZHktaXRlbSdcclxuXHJcbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xyXG5cclxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcclxuICAgICAgICA6IDBcclxuXHJcbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XHJcbiAgICAgICAgaWQ9e2BxdHkke2l0ZW0ucHJvZHVjdC5jb2RlfWB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxyXG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxyXG4gICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cclxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxyXG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxyXG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1xdHknPlxyXG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cclxuICAgICAgICAgIHtxdHlGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cclxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxyXG4gICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0taXZhJz5cclxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxyXG4gICAgICAgICAge3RheGVzMX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxyXG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cclxuICAgICAgICAgICAg4oKhIHtpdGVtLnRvdGFsV2l0aEl2LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZW1vdmVJY29uQ2xhc3N9PlxyXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cclxuICAgIC8vICAge2l0ZW1zfVxyXG4gICAgLy8gPC90Ym9keT5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XHJcbiAgICAgIHtpdGVtczJ9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdG90YWxzIHRoZSBjYXJ0IHN0b3JlIGl0ZW0sIGdlbmVyYXRlcyBuZXcgdmFsdWVzIGFjY29yZGluZyBjYXJ0IGl0ZW0gb2JqZWN0cywgdGhlbiBwdXNoIHRoZSB0byBzdG9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG90YWxzKGluQ2FydCkge1xyXG5cclxuICBsZXQgc3VidG90YWwgPSAwXHJcbiAgbGV0IHN1YlRvdGFsTm9EaXNjb3VudCA9IDBcclxuICBsZXQgdGF4ZXMgPSAwXHJcbiAgbGV0IHRvdGFsID0gMFxyXG4gIGxldCBkaXNjb3VudFRvdGFsID0gMFxyXG5cclxuICAvLyBmb3IgRWFjaCBlbGVtZW50IGFkZHMgdGhlIHZhbHVlcyB0byBnZXQgdG90YWxzXHJcbiAgaW5DYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQgPSBzdWJUb3RhbE5vRGlzY291bnQgKyBpdGVtLnN1YlRvdGFsTm9EaXNjb3VudFxyXG5cclxuICAgIHN1YnRvdGFsID0gc3VidG90YWwgKyBpdGVtLnN1YnRvdGFsXHJcblxyXG4gICAgY29uc3QgdGF4ZXNDYWxjID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMgLyAxMDApXHJcbiAgICAgIDogMFxyXG5cclxuICAgIGNvbnN0IHRheGVzQ2FsYzIgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlczIpXHJcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMyIC8gMTAwKVxyXG4gICAgICA6IDBcclxuXHJcbiAgICBjb25zdCB0YXhlc0NhbGMzID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMzKVxyXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMyAvIDEwMClcclxuICAgICAgOiAwXHJcblxyXG4gICAgdGF4ZXMgPSB0YXhlcyArIHRheGVzQ2FsYyArIHRheGVzQ2FsYzIgKyB0YXhlc0NhbGMzXHJcblxyXG4gICAgZGlzY291bnRUb3RhbCA9IGRpc2NvdW50VG90YWwgKyBpdGVtLmRpc2NvdW50Q3VycmVuY3kgLy8gdGhpcyBpcyB0aGUgdmFsdWUgaW4gY3VycmVuY3lcclxuXHJcbiAgfSlcclxuICAvLyBUT0RPIENvbmZpZyBmb3Igcm91bmQgb3Igbm90XHJcbiAgLy8gdG90YWwgPSBNYXRoLnJvdW5kKHN1YnRvdGFsICsgdGF4ZXMpXHJcbiAgdG90YWwgPSBzdWJ0b3RhbCArIHRheGVzXHJcbiAgLy8gcmV0dXJzIGEgZGlzcGF0Y2ggd2l0aCBhIHBheWxvYWQgb2YgdGhlIG9idGFpbmVkIHZhbHVlc1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlRfVE9UQUxTJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgc3VidG90YWw6IHN1YnRvdGFsLFxyXG4gICAgICB0YXhlczogdGF4ZXMsXHJcbiAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgZGlzY291bnRUb3RhbDogZGlzY291bnRUb3RhbCxcclxuICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpdGVtc0luQ2FydCwgY29kZSkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnUkVNT1ZFX0ZST01fQ0FSVCcsXHJcbiAgICAgIHBheWxvYWQ6IGluZGV4SW5DYXJ0XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCdcclxuaW1wb3J0IFRvdGFscyBmcm9tICcuLi8uLi9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4J1xyXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuLi9idXR0b25zL2J1dHRvbnMuanN4J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzaWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgdG9nZ2xlV2lkdGggKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgYXNpZGVDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUgY29sbGFwc2VkJyA6ICdzYWxlLWFzaWRlJ1xyXG4gICAgY29uc3QgYXNpZGVDb250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUtY29udGVudCBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUtY29udGVudCdcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDbGFzc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3cnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3ctY29udGFpbmVyJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tcmlnaHQnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPENsaWVudCAvPlxyXG4gICAgICAgIDxUb3RhbHMgLz5cclxuICAgICAgICA8QnV0dG9ucyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxCdXR0b25zIC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS10b3RhbCcgPlxyXG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2FzaWRlL2FzaWRlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL2FzaWRlL2FzaWRlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZCwgc2VhcmNoQ2xpZW50LCB1c2VyU2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRDbGllbnREZWJ0J1xyXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50cyxcclxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgY2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIHVzZXJzOiBzdG9yZS5jbGllbnRzLnVzZXJzLFxyXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXHJcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxyXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAobmV4dFByb3BzLmNsaWVudFNlbGVjdGVkICE9IHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpIHtcclxuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXHJcblxyXG4gICAgICBpZiAoIW5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5zYWxlTG9hZGVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgICAgIGNsaWVudF9pZDogbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgc3VjY2VzczogJ1NFVF9DTElFTlRfREVCVCcsXHJcbiAgICAgICAgICBmYWlsOiAnU0VUX0NMSUVOVF9ERUJUX0ZBSUxFRCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KG5leHRQcm9wcy5jYXJ0LCBkaXNjb3VudCwgbmV4dFByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0Q2xpZW50RGVidChrd2FyZ3MpKVxyXG5cclxuICAgICAgICAvLyBTRVRTIFZBTFVFIE9GIERFRkFVTFQgRElTQ09VTlQgVE8gRklFTEQgT1IgMFxyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX0NMSUVOVFMnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2NsaWVudHMnLFxyXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJyxcclxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcclxuXHJcbiAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUgLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB1c2VyU2VsZWN0KGV2KSB7XHJcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXNlclNlbGVjdGVkKF9pZCwgdGhpcy5wcm9wcy51c2VycykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgdXNlclVuU2VsZWN0KGV2KSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVNFUl9DTEVBUicsIHBheWxvYWQ6ICcnfSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBzZWFyY2hDbGllbnRDbGljaygpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCgpKVxyXG5cclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyBTRUxFQ1QyIERBVEFcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXHJcbiAgICAgID8gYCR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5uYW1lfSAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubGFzdF9uYW1lfWBcclxuICAgICAgOiAnQ2xpZW50ZSBDb250YWRvJ1xyXG5cclxuICAgIC8vIGNvbnN0IGNyZWRpdEljb24gPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCAmJiB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmhhc19jcmVkaXQpXHJcbiAgICAvLyAgID8gJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcclxuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtaW1nJz5cclxuICAgICAgICA8aW1nIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudENsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XHJcbiAgICAgICAgICA8aDM+Q2xpZW50ZSA6PC9oMz5cclxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxyXG4gICAgICAgICAgPGgzPk5vbWJyZSA6PC9oMz5cclxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcclxuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIENIRUNLIEZPUiBDTElFTlQgREVCVCBBTkQgRElTUEFUQ0hcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudERlYnQoa3dhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe2NsaWVudF9pZDoga3dhcmdzLmNsaWVudF9pZH0pXHJcbiAgICAvLyBjYWxscyB0aGUgZnVuY3Rpb24gaW4gYmFja2VuZCB0byBjaGVjayBwZXJtaXNzaW9uc1xyXG4gICAgYXhpb3MucG9zdCgnL2FwaS9nZXRjbGllbnRkZWJ0LycsIGRhdGEpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3Muc3VjY2VzcywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBpbnRlbnRhciBvYnRlbmVyIGxhIGRldWRhIGRlbCB1c3VhcmlvLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZmFpbCwgcGF5bG9hZDogJyd9KVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9nZXRDbGllbnREZWJ0LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi91dGlscy9nZXRDbGllbnREZWJ0LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL3V0aWxzL2dldENsaWVudERlYnQuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXHJcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXHJcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXHJcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudFZhbDogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0ludm9pY2VQYW5lbCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcblxyXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgICA6IDBcclxuICAgICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcclxuICAgICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXHJcbiAgICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlzY291bnRWYWwgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gcGFyc2VGbG9hdChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgOiAwXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRPbkJsdXIoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcblxyXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICA6IDBcclxuICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXHJcbiAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcclxuICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvdGFscyc+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAncGFkZGluZ1RvcCc6ICcwJyxcclxuICAgICAgICAnbWFyZ2luVG9wJzogJzAnXHJcbiAgICAgIH19IGNsYXNzTmFtZT0nYmctd2hpdGUgcmlnaHQtaXRlbSc+XHJcbiAgICAgICAgey8qIDxzcGFuPlxyXG4gICAgICAgICAgPGI+VG90YWxlczo8L2I+XHJcbiAgICAgICAgPC9zcGFuPjxiciAvPiAqL31cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0b3RhbHMtdGFibGUnPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlN1Yi1Ub3RhbDo8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzM3JSdcclxuICAgICAgICAgICAgICB9fT5EZXNjdWVudG8gJTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPSdkaXNjb3VudEZpZWxkJ1xyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmlucHV0T25CbHVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICczN3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDAgMCAxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzYWxlX2dsb2JhbF9kaXNjb3VudF9pbnB1dCBmb3JtLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+RGVzY3VlbnRvOjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+SVY6PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgey8qIDx0aCBvbkNsaWNrPXt0aGlzLnNob3dJbnZvaWNlUGFuZWwuYmluZCh0aGlzKX0+VG90YWw6PC90aD4gKi99XHJcbiAgICAgICAgICAgICAgPHRoPlRvdGFsOjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2hvd1BheVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUEFZX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93SW5vaWNlUGFuZWwoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93U2FsZVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUFJFU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIG5ld1NhbGUoKSB7XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xyXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ05FV19TQUxFJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgPyA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0lub2ljZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICAgIEZhY3R1cmFcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3U2FsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgICBOdWV2YSBWZW50YVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCcgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDogJydcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBidXR0b25zJz5cclxuXHJcbiAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICA8Yj5QYWdvOjxiciAvPjwvYj5cclxuICAgICAgPC9zcGFuPiAqL31cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQYXlQYW5lbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgQ29icmFyXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93U2FsZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXHJcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICBWZW50YXMgZGVsIGTDrWFcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXNhbGVzUGFuZWwuYmluZCh0aGlzKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxyXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxyXG4gICAgICAgIFByZS1WZW50YXNcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge2J1dHRvbnN9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xyXG5pbXBvcnQgUmVzdWx0c1RhYmxlIGZyb20gJy4vcmVzdWx0c1RhYmxlLmpzeCdcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZX1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcGFuZWxDbGljayhldikge1xyXG5cclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxyXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQgaXMtdmlzaWJsZSdcclxuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0J1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cclxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIFByb2R1Y3RvPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblxyXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgICAgICA8UmVzdWx0c1RhYmxlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge3NlYXJjaFByb2R1Y3R9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWFyY2hWYWw6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcblxyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbigpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2VhcmNoUHJvZHVjdEFjdGlvbigpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoUHJvZHVjdCh0aGlzLnByb3BzLnNlYXJjaFZhbHVlLCB0aGlzLnByb3BzLnByb2R1Y3RzKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBEZXNjcmlwY2nDs246PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hWYWx1ZX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcclxuICAgICAgICAgICAgfX0gaWQ9J3Byb2R1Y3Qtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J3Byb2R1Y3Qtc2VhcmNoLWJ0bicgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xyXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICAgIE51bWJlci5wcm90b3R5cGUuZm9ybWF0TW9uZXkgPSBmdW5jdGlvbihjLCBkLCB0KXtcclxuICAgIHZhciBuID0gdGhpcyxcclxuICAgICAgICBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxyXG4gICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcclxuICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXHJcbiAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxyXG4gICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXHJcbiAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcclxuICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XHJcbiAgICAgfTtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0TW9uZXkuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtwcm9kdWN0U2VsZWN0ZWRUYWJsZSwgaGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnByb2R1Y3RzTWF0Y2hlZCwgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzZWxlY3RQcm9kdWN0KGNvZGUsIGV2KSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdFByb2R1Y3QuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2l0ZW0uY29kZX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2l0ZW0uc2VsbHByaWNlfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cclxuICAgICAgICAgIDx0YWJsZSBpZD0ncHJvZHVjdGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwY2nDs248L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlByZWNpbzwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J3Byb2R1Y3Qtc2VhcmNoLXRhYmxlLWJvZHknPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0c31cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcclxuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXHJcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge3Zpc2libGU6IHN0b3JlLnNlYXJjaENsaWVudHMudmlzaWJsZX1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaENsaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBwYW5lbENsaWNrKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXHJcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxyXG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgQ2xpZW50ZTwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtzZWFyY2hDbGllbnR9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7Y2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoVmFsOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRLZXlQcmVzcyhldikge1xyXG5cclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuc2VhcmNoQ2xpZW50QWN0aW9uKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsID0gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2VhcmNoQ2xpZW50QWN0aW9uKCkge1xyXG4gICAgY29uc3QgdmFsID0gdGhpcy5zdGF0ZS5zZWFyY2hWYWxcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoQ2xpZW50KHZhbCwgdGhpcy5wcm9wcy5jbGllbnRzKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjbGllbnQtc2VhcmNoLWlucHV0Jz5Cw7pzcXVlZGEgcG9yIE5vbWJyZTo8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNyBjb2wtc20tOCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbktleVByZXNzPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fSBpZD0nY2xpZW50LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J2NsaWVudC1zZWFyY2gtYnRuJyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXHJcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXHJcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIGZvcm0tY29udHJvbCBtYXJnaW5CdG5BZGQyJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZH0gZnJvbSAnLi4vLi4vY2xpZW50cy9hY3Rpb25zLmpzJ1xyXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hDbGllbnRzLmNsaWVudHNNYXRjaGVkLCBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHNlbGVjdENsaWVudChjb2RlLCBldikge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBoYXNDcmVkaXQgPSAoaXRlbS5oYXNfY3JlZGl0KVxyXG4gICAgICAgID8gJ1NJJ1xyXG4gICAgICAgIDogJ05PJ1xyXG5cclxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdENsaWVudC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5jb2RlfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2Ake2l0ZW0ubmFtZX0gJHtpdGVtLmxhc3RfbmFtZX1gfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2hhc0NyZWRpdH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDBcclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XHJcbiAgICAgICAgICA8dGFibGUgaWQ9J2NsaWVudGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNyw6lkaXRvPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TYWxkbzwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J2NsaWVudC1zZWFyY2gtdGFibGUtYm9keSc+XHJcbiAgICAgICAgICAgICAge2NsaWVudHN9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgUGF5TWV0aG9kIGZyb20gJy4vY29tcG9uZW50cy9wYXlNZXRob2QuanN4J1xyXG5pbXBvcnQgUGF5Q2FzaCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2Focy5qc3gnXHJcbmltcG9ydCBQYXlDYXJkIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYXJkLmpzeCdcclxuaW1wb3J0IFBheUNyZWRpdCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCdcclxuaW1wb3J0IFBheU90aGVyIGZyb20gJy4vY29tcG9uZW50cy9wYXlPdGhlci5qc3gnXHJcbmltcG9ydCBQYXlTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5wYXkuaXNWaXNpYmxlLCBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgaGlkZVBhbmVsKCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXHJcbiAgICAgID8gJ3BheS1wYW5lbCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdwYXktcGFuZWwnXHJcblxyXG4gICAgbGV0IHBheU1ldGhvZCA9ICcnXHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XHJcblxyXG4gICAgICBjYXNlICdDQVNIJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXNoIC8+XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSAvLyBjYXNlXHJcblxyXG4gICAgICBjYXNlICdDQVJEJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXJkIC8+XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSAvLyBjYXNlXHJcblxyXG4gICAgICBjYXNlICdDUkVEJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDcmVkaXQgLz5cclxuICAgICAgICBicmVha1xyXG4gICAgICB9IC8vICBjYXNlXHJcblxyXG4gICAgICBjYXNlICdPVEhFJzpcclxuICAgICAge1xyXG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlPdGhlciAvPlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIH0gLy8gc3dpdGNoXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1wYW5lbC1tYWluJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLWhlYWRlcic+XHJcbiAgICAgICAgICBSZWdpc3RyYXIgUGFnb1xyXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYXlNZXRob2QgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1hcmVhLWNvbnRhaW5lcic+XHJcblxyXG4gICAgICAgICAge3BheU1ldGhvZH1cclxuXHJcbiAgICAgICAgICA8UGF5U2lkZUJhciAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjbGlja0NoYW5nZVBheU1ldGhvZChtZXRob2QsIGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NIQU5HRV9QQVlfTUVUSE9EJywgcGF5bG9hZDogbWV0aG9kfSlcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdCc+XHJcblxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcclxuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xyXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XHJcbiAgICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXJzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ09USEUnXHJcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcclxuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxyXG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7dXBkYXRlU3RvcmVDYXNoQW1vdW50fSBmcm9tICcuLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtjYXNoQW1vdW50OiBzdG9yZS5wYXkuY2FzaEFtb3VudH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q2FzaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FzaEFtb3VudChldi50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cclxuICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FzaEFtb3VudH0gb25DaGFuZ2U9e3RoaXMucGF5QW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHt1cGRhdGVTdG9yZUNhcmRBdXRoLCB1cGRhdGVTdG9yZUNhcmREaWdpdHN9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2NhcmRBdXRoOiBzdG9yZS5wYXkuY2FyZEF1dGgsIGNhcmREaWdpdHM6IHN0b3JlLnBheS5jYXJkRGlnaXRzfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcGF5Q2FyZEF1dGhDaGFuZ2VkKGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmRBdXRoKGV2LnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBwYXlDYXJkRGlnaXRzQ2hhbmdlZChldikge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXJkRGlnaXRzKGV2LnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxyXG4gICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+NCBESUdJVE9TOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkRGlnaXRzfSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkRGlnaXRzQ2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5BVVRPUklaQUNJw5NOOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkQXV0aH0gb25DaGFuZ2U9e3RoaXMucGF5Q2FyZEF1dGhDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDcmVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZGVidClcclxuICAgIGNvbnN0IGNsaWVudExpbWl0ID0gdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdFxyXG4gICAgICA/IGDigqEgJHtwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcclxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xyXG4gICAgY29uc3QgY2xpZW50QXZhaWxhYmxlID0gdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdFxyXG4gICAgICA/IGDigqEgJHthdmFpbGFibGUuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcclxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cclxuICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5Mw41NSVRFOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cclxuICAgICAgICAgIHtjbGllbnRMaW1pdH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RElTUE9OSUJMRTo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XHJcbiAgICAgICAgICB7Y2xpZW50QXZhaWxhYmxlfTwvZGl2PlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPiA8c3Bhbj5PdHJvPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlPdGhlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmZXRjaW5nLWNvbnRhaW5lcic+XHJcbiAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy92ZW5kb3IvbG9hZGVycy9FY2xpcHNlLmdpZid9IC8+XHJcbiAgICAgIDxoMT5DYXJnYW5kbyBlbGVtZW50b3M8L2gxPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBTYXZlQnRuIGZyb20gJy4uLy4uL3NhdmUvc2F2ZS5qc3gnXHJcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY2FydDogc3RvcmUuY2FydCxcclxuICAgIHBheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZCxcclxuICAgIHBheTogc3RvcmUucGF5LFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXHJcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxyXG4gICAgLy8gc2FsZXM6IHN0b3JlLnNhbGVzLnNhbGVzLFxyXG4gICAgLy8gc2FsZUlkOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlSWQsXHJcbiAgICAvLyBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxyXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2F2ZUJ0bigpIHtcclxuICAgIC8vIGNvbnN0IHNhbGVzID0gdGhpcy5wcm9wcy5zYWxlc1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlclxyXG4gICAgY29uc3Qgc2FsZSA9IHtcclxuICAgICAgY2FydDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jYXJ0KSxcclxuICAgICAgY2xpZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCksXHJcbiAgICAgIHVzZXI6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudXNlciksXHJcbiAgICAgIHBheTogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5wYXkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJykge1xyXG4gICAgICBzYWxlLnBheS5kZWJ0ID0gdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxyXG4gICAgICBzYWxlLnBheS5wYXllZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL3NhbGVzLycsXHJcbiAgICAgIGl0ZW06IHNhbGUsXHJcbiAgICAgIGxvZ0NvZGU6ICdTQUxFX0NSRUFURScsXHJcbiAgICAgIGxvZ0Rlc2NyaXB0aW9uOiAnQ3JlYWNpw7NuIGRlIG51ZXZhIFZlbnRhJyxcclxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgaXRlbU9sZDogJycsXHJcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICdIdWJvIHVuIGVycm9yIGFsIGNyZWFyIGxhIFZlbnRhLCBpbnRlbnRlIGRlIG51ZXZvLicsXHJcbiAgICAgIGRpc3BhdGNoVHlwZTogJ0NMRUFSX1NBTEUnLFxyXG4gICAgICBpc1NhbGU6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzKSlcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgICBNb3VzZXRyYXAucmVzZXQoKVxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBsZXQgY2hhbmdlID0gMFxyXG4gICAgbGV0IHBheUJ1dHRvbkNsYXNzID0gJ3BheS10YWcgdGFnLWJ1dHRvbidcclxuICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsKVxyXG4gICAgY29uc3QgY2FzaCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudClcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGF5TWV0aG9kKSB7XHJcblxyXG4gICAgICBjYXNlICdDQVNIJzpcclxuICAgICAge1xyXG4gICAgICAgIGNoYW5nZSA9IGNhc2ggLSB0b3RhbFxyXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBjaGFuZ2UgPj0gMClcclxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXHJcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSAnQ0FSRCc6XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCBhdXRoID0gdGhpcy5wcm9wcy5wYXkuY2FyZEF1dGhcclxuICAgICAgICBjb25zdCBkaWdpdHMgPSB0aGlzLnByb3BzLnBheS5jYXJkRGlnaXRzXHJcbiAgICAgICAgY2hhbmdlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy50b3RhbClcclxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgYXV0aCAmJiBkaWdpdHMpXHJcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xyXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnQ1JFRCc6XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZGVidClcclxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgdG90YWwgPD0gYXZhaWxhYmxlICYmIHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXQpXHJcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xyXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktc2lkZS1iYXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XHJcbiAgICAgICAgPHNwYW4+UGFnbzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5cclxuICAgICAgICAgIFRPVEFMIDo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XHJcbiAgICAgICAgICDigqEge3RoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5WVUVMVE8gOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cclxuICAgICAgICAgIOKCoSB7Y2hhbmdlLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxTYXZlQnRuIHBheUJ1dHRvbkNsYXNzPXtwYXlCdXR0b25DbGFzc30gLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheVNpZGVCYXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHtzYXZlSXRlbSwgbG9hZFNhbGV9IGZyb20gJy4uL2FjdGlvbnMnXHJcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXHJcbiAgICBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2QsXHJcbiAgICBwYXk6IHN0b3JlLnBheSxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxyXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcclxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcclxuICAgIC8vIHNhbGVJZDogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZUlkLFxyXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcclxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUJ0biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHNhdmVCdG4oKSB7XHJcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcclxuICAgIGNvbnN0IHBheWVkID0gISh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRUQnKVxyXG5cclxuICAgIGNvbnN0IHNhbGUgPSB7XHJcbiAgICAgIGNhcnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2FydCksXHJcbiAgICAgIGNsaWVudDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpLFxyXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxyXG4gICAgICBwYXk6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucGF5KSxcclxuICAgICAgcGF5X3R5cGU6IHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCxcclxuICAgICAgcGF5ZWQ6IHBheWVkLFxyXG4gICAgICBjbGllbnRfaWQ6IHRoaXMucHJvcHMuY2xpZW50LmlkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlZGl0TW92ZW1lbnQgPSB7XHJcbiAgICAgIGNsaWVudF9pZDogdGhpcy5wcm9wcy5jbGllbnQuaWQsXHJcbiAgICAgIG1vdmVtZW50X3R5cGU6ICdDUkVEJyxcclxuICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL3NhbGVzLycsXHJcbiAgICAgIGl0ZW06IHNhbGUsXHJcbiAgICAgIGxvZ0NvZGU6ICdTQUxFX0NSRUFURScsXHJcbiAgICAgIGxvZ0Rlc2NyaXB0aW9uOiAnQ3JlYWNpw7NuIGRlIG51ZXZhIFZlbnRhJyxcclxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgaXRlbU9sZDogJycsXHJcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICdIdWJvIHVuIGVycm9yIGFsIGNyZWFyIGxhIFZlbnRhLCBpbnRlbnRlIGRlIG51ZXZvLicsXHJcbiAgICAgIGNyZWRpdE1vdmVtZW50OiBjcmVkaXRNb3ZlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzLCByZXNvbHZlLCByZWplY3QpKVxyXG4gICAgfSlcclxuXHJcbiAgICB1cGRhdGVQcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICBNb3VzZXRyYXAucmVzZXQoKVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXt0aGlzLnNhdmVCdG4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBheUJ1dHRvbkNsYXNzfT5cclxuICAgICAgUmVnaXN0cmFyXHJcbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvc2F2ZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgc2F2ZUxvZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzLCByZXNvbHZlLCByZWplY3QpIHtcclxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuICBkZWxldGUgaXRlbVsnaWQnXVxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcclxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxyXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXHJcbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcblxyXG4gICAgICAgIC8vIElGIFRIRSBTQUxFIElTIEEgQ1JFRElUIE9ORSBTQVZFIENSRURJVCBNT1ZFTUVOVFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnBheV90eXBlID09ICdDUkVEJykge1xyXG4gICAgICAgICAgY29uc3QgY3JlZGl0TW92ZW1lbnQgPSBrd2FyZ3MuY3JlZGl0TW92ZW1lbnRcclxuICAgICAgICAgIGNyZWRpdE1vdmVtZW50LmJpbGxfaWQgPSByZXNwb25zZS5kYXRhLmlkXHJcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5kZXNjcmlwdGlvbiA9IGBWZW50YSBkZSBjcsOpZGl0byAjJHtyZXNwb25zZS5kYXRhLmJpbGxfbnVtYmVyfWBcclxuICAgICAgICAgIHNhdmVDcmVkaXRNb3ZlbWVudChjcmVkaXRNb3ZlbWVudCwgcmVzcG9uc2UuZGF0YSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KVxyXG5cclxuICAgICAgICAvLyBJRiBJUyBDQVNIIFRIRU4gSlVTVCBSRVNPTFZFXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfU0FMRScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQ3JlZGl0TW92ZW1lbnQobW92ZW1lbnQsIHNhbGUsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgdXJsOiAnL2FwaS9jcmVkaXRtb3ZlbWVudHMvJyxcclxuICAgIGRhdGE6IG1vdmVtZW50XHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBzYWxlfSlcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIHJlamVjdCgpXHJcbiAgICB9KVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9zYXZlL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtsb2FkR2xvYmFsQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9hcGkuanMnXHJcbmltcG9ydCBGdWxsSW52b2ljZSBmcm9tICcuLi9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3gnXHJcbmltcG9ydCBDb21wYWN0SW52b2ljZSBmcm9tICcuLi9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3gnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUuaW52b2ljZS5pc1Zpc2libGUsIGlzRnVsbDogc3RvcmUuaW52b2ljZS5pc0Z1bGx9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9pY2VQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvYWRHbG9iYWxDb25maWcoJ2NvbXBhbnknLCBmYWxzZSwgJ0ZFVENIX0NPTkZJR19GVUxGSUxMRUQnLCAnRkVUQ0hfQ09ORklHX1JFSkVDVEVEJykpXHJcbiAgfVxyXG5cclxuICBoaWRlUGFuZWwoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICAgIC8vIHByaW50RGl2KCdmdWxsLWludm9pY2UtcHJpbnQnKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGFuZWwoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG5cclxuICB9XHJcblxyXG4gIHRvZ2dsZUludm9pY2UoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9JTlZPSUNFX0RFU0lORycsIHBheWxvYWQ6IC0xfSlcclxuXHJcbiAgfVxyXG5cclxuICBwcmludFBhbmVsKCkge1xyXG4gICAgd2luZG93LnByaW50RGl2KCdpbnZvaWNlLXByaW50JylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXHJcbiAgICAgID8gJ2ludm9pY2UtcGFuZWwgaXMtdmlzaWJsZSdcclxuICAgICAgOiAnaW52b2ljZS1wYW5lbCdcclxuICAgIGNvbnN0IGlzRnVsbENsYXNzID0gKHRoaXMucHJvcHMuaXNGdWxsKVxyXG4gICAgICA/ICcnXHJcbiAgICAgIDogJyBjb21wYWN0LWludm9pY2Utb24nXHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50VG9Nb3VudCA9ICh0aGlzLnByb3BzLmlzRnVsbClcclxuICAgICAgPyA8RnVsbEludm9pY2UgLz5cclxuICAgICAgOiA8Q29tcGFjdEludm9pY2UgLz5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZX0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtbWFpbicgKyBpc0Z1bGxDbGFzc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2UtcGFuZWwtaGVhZGVyJz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEZhY3R1cmEgZGUgVmVudGFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1maWxlLXRleHQtbycgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucHJpbnRQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXByaW50JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgICAgICAgICAgey8qIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW52b2ljZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWNvZmZlZScgYXJpYS1oaWRkZW49J3RydWUnIC8+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9J2ludm9pY2UtcHJpbnQnIGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtY29udGFpbmVyJyArIGlzRnVsbENsYXNzfT5cclxuXHJcbiAgICAgICAgICB7Y29tcG9uZW50VG9Nb3VudH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xyXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xyXG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9jb21wb25lbnRzL25vdGVzLmpzeCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlJz5cclxuXHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERhdGEgLz5cclxuICAgICAgPFRhYmxlIC8+XHJcbiAgICAgIDxUb3RhbHMgLz5cclxuICAgICAgPE5vdGVzIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXHJcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gQ3JlZGl0IG9yIGNhc2hcclxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSB0aGlzLnByb3BzLnNhbGUucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJyA/ICdGYWN0dXJhIGRlIGNyw6lkaXRvJyA6ICdGYWN0dXJhIGRlIGNvbnRhZG8nXHJcbiAgICAvLyBMT0dPXHJcbiAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ28gfHwgJydcclxuICAgIGNvbnN0IGxvZ29XaWR0aCA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvV2lkdGggfHwgJzEzMHB4J1xyXG4gICAgY29uc3QgbG9nb1VybCA9IGAvbWVkaWEvbG9nb3MvJHtsb2dvfWBcclxuXHJcbiAgICAvLyBCSUxMIERBVEFcclxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsX25hbWUgfHwgJydcclxuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsX25hbWUgfHwgJydcclxuXHJcbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcclxuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxyXG5cclxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJ1BFUlNPTidcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICcnXHJcbiAgICBjb25zdCBpZFRleHQgPSBpZFR5cGUgPT0gJ0pVUklESScgPyBgQ8OpZCBKdXJpZCBObyAke2lkfWAgOiBgQ8OpZCBObyAke2lkfWBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItbG9nbyc+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzogYCR7bG9nb1dpZHRofWB9fSBzcmM9e2xvZ29Vcmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItaW5mbyc+XHJcbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWUudG9VcHBlckNhc2UoKX08L2gyPlxyXG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxyXG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuZW1haWwgfHwgJyd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1zZXBhcmF0b3InPlxyXG4gICAgICAgIDxzcGFuIC8+XHJcblxyXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxyXG4gICAgICAgIDxzcGFuIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcclxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcclxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXHJcbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xyXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcclxuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xyXG4gICAgICA/IDx0cj5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdjbGllbnRBZHJlc3MnPkRJUkVDQ0nDk046IHtzYWxlLmNsaWVudC5hZHJlc3N9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgOiA8dHIgLz5cclxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMDEnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdjbGllbnQtdGFibGUnPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkNMSUVOVEU6PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAge2NsaWVudEFkcmVzc31cclxuICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XHJcblxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPk4uIGRlIGZhY3R1cmE6PC90aD5cclxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cclxuXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cclxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcclxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50ID0gKHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXHJcbiAgICAgID8gPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPnt0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50fTwvdGQ+XHJcbiAgICAgIDogPHRkIHN0eWxlPXt7J2Rpc3BsYXknOiAnbm9uZSd9fSA+LTwvdGQ+XHJcbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5sZW5ndGhcclxuICAgICAgPyBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGF4ZXNUZXh0ID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICAgICAgICA/IGBHYFxyXG4gICAgICAgICAgOiBgRWBcclxuXHJcbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHtpdGVtLnByb2R1Y3QuY29kZX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICB7aXRlbS5xdHl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICDigqEge3BhcnNlRmxvYXQoaXRlbS5wcmljZVRvVXNlKS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICB7aXRlbS5kaXNjb3VudH1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnR9XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XHJcbiAgICAgICAgICAgIHt0YXhlc1RleHR9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgfSlcclxuICAgICAgOiA8dHI+XHJcbiAgICAgICAgPHRkPi0tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgPC90cj5cclxuXHJcbiAgICBjb25zdCBnbG9iYWxEaXNjb3VudFJvdyA9IHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQgPyA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+RGVzMiAlPC90aD5cclxuICAgICAgOiA8dGggc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90aD5cclxuXHJcbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+RGVzY3JpcGNpw7NuPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5DYW50aWRhZDwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UC5VPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMlPC90aD5cclxuICAgICAgICAgIHtnbG9iYWxEaXNjb3VudFJvd31cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5JVjwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UHJlY2lvPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+e2l0ZW1zfTwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXHJcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXHJcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdG90YWxzJz5cclxuXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPklWPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxyXG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cclxuICAgICAgPGgxPk5vdGFzOjwvaDE+XHJcblxyXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5qc3gnXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXHJcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFscy5qc3gnXHJcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFjdEludm9pY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxyXG5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGF0YSAvPlxyXG4gICAgICA8VGFibGUgLz5cclxuICAgICAgPFRvdGFscyAvPlxyXG4gICAgICA8Tm90ZXMgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcclxuICAgIGNvbXBhbnk6IHN0b3JlLmNvbmZpZy5jb21wYW55XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgaGVhZGVydGV4dCA9IHRoaXMucHJvcHMuc2FsZS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnID8gJ0ZhY3R1cmEgZGUgY3LDqWRpdG8nIDogJ0ZhY3R1cmEgZGUgY29udGFkbydcclxuXHJcbiAgICAvLyBCSUxMIERBVEFcclxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsTmFtZSB8fCAnJ1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsTmFtZSB8fCAnJ1xyXG5cclxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xyXG4gICAgY29uc3QgdGVsc1RleHQgPSB0ZWxzLnNwbGl0KCcvJykubGVuZ3RoID4gMSA/IGBUZWxzOiAke3RlbHN9YCA6IGBUZWw6ICR7dGVsc31gXHJcblxyXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnJ1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWQgfHwgJ1BFUlNPTidcclxuICAgIGNvbnN0IGlkVGV4dCA9IGlkVHlwZSA9PSAnSlVSSURJJyA/IGBDw6lkIEp1cmlkIE5vICR7aWR9YCA6IGBDw6lkIE5vICR7aWR9YFxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1oZWFkZXInPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlci1pbmZvJz5cclxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZX08L2gyPlxyXG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxyXG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXNlcGFyYXRvcic+XHJcbiAgICAgICAgPHNwYW4gLz5cclxuXHJcbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XHJcblxyXG4gICAgICAgIDxzcGFuIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLCBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxyXG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZVRheGVzKVxyXG4gICAgICAgID8gYEdgXHJcbiAgICAgICAgOiBgRWBcclxuXHJcbiAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLnF0eX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XHJcbiAgICAgICAgICB7dGF4ZXNUZXh0fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10YWJsZSB0YWJsZSc+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+Q2FudDwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkFydGljdWxvPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5JVjwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+VG90YWw8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAge2l0ZW1zfVxyXG4gICAgICA8L3Rib2R5PlxyXG5cclxuICAgIDwvdGFibGU+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc2FsZSA9IHRoaXMucHJvcHMuc2FsZVxyXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxyXG4gICAgICA/IGAkeygnMCcgKyBzYWxlLmNyZWF0ZWQuZ2V0RGF0ZSgpKS5zbGljZSgtMil9L1xyXG4gICAgICAkeygnMCcgKyAoc2FsZS5jcmVhdGVkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXHJcbiAgICAgIDogJzAxLzAxLzE5NzAnXHJcbiAgICBjb25zdCBjbGllbnQgPSBzYWxlLmNsaWVudCA/IGAke3NhbGUuY2xpZW50LmNvZGV9IC0gJHtzYWxlLmNsaWVudC5uYW1lfSAke3NhbGUuY2xpZW50Lmxhc3RfbmFtZX1gIDogJzAwIC0gQ2xpZW50ZSBkZSBDb250YWRvJ1xyXG4gICAgY29uc3QgaWQgPSBzYWxlLmJpbGxfbnVtYmVyID8gc2FsZS5iaWxsX251bWJlciA6ICcwMDAxJ1xyXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXHJcbiAgICAgID8gPHRyPlxyXG4gICAgICAgIDx0aD5EaXJlYzo8L3RoPlxyXG4gICAgICAgIDx0ZD57c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDogPHRyIC8+XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtZGF0YSc+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlbnVtLXRhYmxlJz5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5GZWNoYTo8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5GYWN0dXJhOjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkNsaWVudGU6PC90aD5cclxuICAgICAgICAgICAgPHRkPntjbGllbnR9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAge2NsaWVudEFkcmVzc31cclxuXHJcbiAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcclxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcclxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcclxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxyXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10b3RhbHMnPlxyXG5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XHJcbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMnPlxyXG4gICAgICA8aDE+Tm90YXM6PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcy1jb250ZW50Jz5cclxuICAgICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xyXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHN0b3JlLmxheW91dC50b3BCYXJUb2dnbGVWaXNpYmxlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBtZW51Q2xpY2soZXYpIHtcclxuXHJcbiAgICB0b2dnbGVMYXlvdXQoKVxyXG5cclxuICB9XHJcblxyXG4gIGxvZ091dENsaWNrKCkge1xyXG5cclxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cclxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0NlcnJhciBTZXNpw7NuJywgYMK/RGVzZWEgQ2VycmFyIHN1IHNlc2nDs24gZW4gZWwgc2lzdGVtYT9gLCBmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dvdXQnKVxyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KS5zZXQoJ2xhYmVscycsIHtcclxuICAgICAgb2s6ICdDZXJyYXInLFxyXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhvbWVDbGljaygpIHtcclxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cclxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0lyIGFsIG1lbsO6IFByaW5jaXBhbCcsIGDCv0Rlc2VhIGlyIGFsIG1lbsO6IHByaW5jaXBhbD9gLCBmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nKVxyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KS5zZXQoJ2xhYmVscycsIHtcclxuICAgICAgb2s6ICdJcicsXHJcbiAgICAgIGNhbmNlbDogJ1Blcm1hbmVjZXInXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBidXR0b25DbGFzcyA9IHRoaXMucHJvcHMudG9wQmFyVG9nZ2xlVmlzaWJsZVxyXG4gICAgICA/ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UgdmlzaWJsZScgOiAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyJz5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm1lbnVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfSA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcEJhci1yaWdodCc+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWhvbWUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheW91dCgpIHtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcclxuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTWVudScpXHJcblxyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXHJcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcclxuICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcclxuXHJcbiAgY29uc3QgY29uZmlnQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0JhcicpXHJcblxyXG4gIGlmIChjb25maWdCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtdmlzaWJsZScpKSB7XHJcblxyXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25maWdCYXIuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcclxuLy8gaW1wb3J0IENvbXBvc2VkSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbXMvY29tcG9zZWQuanN4J1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlcicpXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICAvLyBjb25zdCBjaGlsZFByb2R1Y3RzID0gW1xyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXHJcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1naWZ0JyxcclxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzJ1xyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgdGV4dDogJ0ZhbWlsaWFzJyxcclxuICAgIC8vICAgICBjbGFzczogJ2ZhLWxpc3QnLFxyXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgdGV4dDogJ1N1Yi1GYW1pbGlhcycsXHJcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcclxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzdWJkZXBhcnRtZW50cydcclxuICAgIC8vICAgfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xyXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcclxuICAgIHJldHVybiA8ZGl2IGlkPSdzaWRlTWVudScgY2xhc3NOYW1lPXtzaWRlTWVudUNsYXNzfT5cclxuXHJcbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxyXG4gICAgICA8VXNlciAvPlxyXG5cclxuICAgICAgPFNlYXJjaCAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXdyYXBwZXIgY29sLXhzLTEyJz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cclxuICAgICAgICAgICAgICBJbmljaW88L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3NhbGUnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cclxuICAgICAgICAgICAgICBOdWV2YSBWZW50YTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJvZm9ybWEnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cclxuICAgICAgICAgICAgICBOdWV2YSBDb3RpemFjacOzbjwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJlc2FsZSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxyXG4gICAgICAgICAgICAgIE51ZXZhIFByZXZlbnRhPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdCdXNjYXIuLi4nIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcclxuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxyXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXHJcbiAgICAgIDogKHRoaXMucHJvcHMudXNlci51c2VybmFtZVxyXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXHJcblxyXG4gICAgY29uc3QgbGFzdE5hbWUgPSB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lID8gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA6ICcnXHJcblxyXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXHJcbiAgICBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMjIpIGZ1bGxOYW1lID0gZnVsbE5hbWUuc3Vic3RyaW5nKDAsIDIyKVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XHJcbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cclxuICAgICAgICA8c3Bhbj57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxyXG5cclxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zdG9yZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zdG9yZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3N0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgZmV0Y2hpbmcgZnJvbSAnLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vbGF5b3V0L3JlZHVjZXIuanMnXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgY2FydCBmcm9tICcuL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgY2xpZW50cyBmcm9tICcuL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcclxuaW1wb3J0IHNhbGUgZnJvbSAnLi9zYWxlL3JlZHVjZXIuanMnXHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzL3JlZHVjZXIuanMnXHJcbmltcG9ydCBzZWFyY2hDbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgc2VhcmNoUHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgcGF5IGZyb20gJy4vc2FsZS9wYXkvcmVkdWNlci5qcydcclxuaW1wb3J0IGludm9pY2UgZnJvbSAnLi9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcydcclxuaW1wb3J0IHNhbGVzIGZyb20gJy4vZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL3JlZHVjZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZldGNoaW5nLFxyXG4gIGxheW91dCxcclxuICB1c2VyLFxyXG4gIGNhcnQsXHJcbiAgY2xpZW50cyxcclxuICBwcm9kdWN0cyxcclxuICBzYWxlLFxyXG4gIG1lc3NhZ2VzLFxyXG4gIHNlYXJjaENsaWVudHMsXHJcbiAgc2VhcmNoUHJvZHVjdHMsXHJcbiAgcGF5LFxyXG4gIGludm9pY2UsXHJcbiAgc2FsZXMsXHJcbiAgY29uZmlnXHJcbn0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXHJcbiAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NBTEVfUEFORUxfTU9VTlRFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBzaWRlTWVudVZpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0hPTUVfUEFORUxfTU9VTlRFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIHVzZXI6IHt9LFxyXG4gIHByb2ZpbGU6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxyXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgICAgIHByb2ZpbGU6IHt9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgfSAvLyBzd2l0Y2hcclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcblxyXG59IC8vIHJlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvdXNlci9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvdXNlci9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBlZGl0YWJsZTogdHJ1ZSxcclxuICBjcmVhdGVkOiAnJyxcclxuICB1cGRhdGVkOiAnJyxcclxuICBpc051bGw6IGZhbHNlLFxyXG4gIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xyXG4gIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcclxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xyXG4gIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcclxuICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxyXG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxyXG4gICAgICAgIHVwZGF0ZWQ6ICcnLFxyXG4gICAgICAgIGlzTnVsbDogZmFsc2UsXHJcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXHJcbiAgICAgICAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IDAsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXHJcbiAgICAgICAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRUb3RhbDogMCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxyXG4gICAgICAgIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XHJcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XHJcbiAgICB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRIYXNJdGVtczogdHJ1ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IFtcclxuICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgLi4uc3RhdGUuY2FydEl0ZW1zLFxyXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1JFTU9WRV9GUk9NX0NBUlQnOlxyXG4gICAge1xyXG5cclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcblxyXG4gICAgICBuZXdDYXJ0LnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSlcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXHJcbiAgICAgIC8vID8gdHJ1ZVxyXG4gICAgICAvLyA6IGZhbHNlXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxyXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdVUERBVEVfQ0FSVCc6XHJcbiAgICB7XHJcblxyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cclxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnOlxyXG4gICAge1xyXG5cclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdVUERBVEVfQ0FSVF9UT1RBTFMnOlxyXG4gICAge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLnN1YnRvdGFsLFxyXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQudGF4ZXMsXHJcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5kaXNjb3VudFRvdGFsLFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLnN1YlRvdGFsTm9EaXNjb3VudFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcclxuICAgIHtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0xJTkVfRElTQ09VTlQnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cclxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0uZGlzY291bnQgPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcclxuICAgICAgICBpc051bGw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuaXNOdWxsLFxyXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xyXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcclxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xyXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XHJcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUb3RhbCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxyXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXHJcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXHJcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsImNvbnN0IGNsaWVudFNlbGVjdGVkTW9kZWwgPSB7XHJcbiAgY29kZTogJzAwMDAnLFxyXG4gIGNsaWVudFR5cGU6ICdHRU5FUkFMJyxcclxuICBjcmVhdGVkOiAnJyxcclxuICBjcmVkaXRfZGF5czogMCxcclxuICBjcmVkaXRfbGltaXQ6IDAsXHJcbiAgZG9jVHlwZTogJ0NMSUVOVCcsXHJcbiAgaGFzX2NyZWRpdDogZmFsc2UsXHJcbiAgaWQ6ICcwMDAwMDAwMDAnLFxyXG4gIGxhc3RfbmFtZTogJ0NvbnRhZG8nLFxyXG4gIG5hbWU6ICdDbGllbnRlJyxcclxuICB1cGRhdGVkOiAnJyxcclxuICBzYWxlTG9hZGVkOiBmYWxzZSxcclxuICBfaWQ6IDBcclxufVxyXG5cclxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XHJcbiAgdXNlcjogJzAwMDAnLFxyXG4gIG5hbWU6ICcnLFxyXG4gIGxhc3RfbmFtZTogJycsXHJcbiAgaWQ6ICcwMDAwJyxcclxuICBfaWQ6IDBcclxufVxyXG5cclxuY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxyXG4gIGNsaWVudHNGZWN0ZWQ6IGZhbHNlLFxyXG4gIGNsaWVudHNGZXRjaEVycm9yOiAnJyxcclxuICBjbGllbnRzOiBbXSxcclxuICB1c2VyczogW10sXHJcbiAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFNlbGVjdGVkTW9kZWwsXHJcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcclxuICBjbGllbnRTZWxlY3RlZERlYnQ6IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcclxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdGRVRDSF9DTElFTlRTJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcclxuICAgICAgICBjbGllbnRzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTElFTlRfU0VMRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgLy8gKioqKioqKiogVVNFUlMgKioqKioqKipcclxuICAgIGNhc2UgJ0ZFVENIX1VTRVJTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1VTRVJTX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdVU0VSX0NMRUFSJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXHJcblxyXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZERlYnQ6IHBhcnNlRmxvYXQoYWN0aW9uLnBheWxvYWQuZGVidClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2xpZW50cyA9IHN0YXRlLmNsaWVudHNcclxuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsIGNsaWVudHM6IGNsaWVudHNcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnQsXHJcbiAgICAgICAgdXNlclNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfVFJVRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXHJcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gdHJ1ZVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9GQUxTRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXHJcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSAvLyBzd2l0Y2hcclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcblxyXG59IC8vIHJlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBwcm9kdWN0czoge30sXHJcbiAgaW5wdXRWYWw6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge31cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbnB1dFZhbDogJydcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdHNcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZnVsbFdpZHRoOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gIXN0YXRlLmZ1bGxXaWR0aFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZ1bGxXaWR0aDogd2lkdGhcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsImltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xyXG5cclxuY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBtZXNzYWdlczogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnUFJPRFVDVF9OT1RfRk9VTkQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBQUk9EVUNUTyEnLCAnRWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdOT1RfRk9VTkRfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIExBIFZFTlRBIScsIGBMYSB2ZW50YSAjJHthY3Rpb24ucGF5bG9hZH0gbm8gZXhpc3RlLCBvIGhheSB1biBwcm9ibGVtYSBwYXJhIGNhcmdhcmxhLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2by5gKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IhJywgJ0h1Ym8gdW4gZXJyb3IgYWwgZW5jb250cmFyIGVsIHByb2R1Y3RvIGVuIGxhIGxpc3RhIGRlIHByb2R1Y3RvcyBhZ3JlZ2Fkb3MscG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby4nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgUFJPRFVDVE9TIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgcHJvZHVjdG9zLCBwb3IgZmF2b3IgaW50ZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnQ0xJRU5UX05PVF9GT1VORCc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIENMSUVOVEUhJywgJ0VsIGNsaWVudGUgY29uIGVsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIENMSUVOVEVTIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgY2xpZW50ZXMsIHBvciBmYXZvciBpbnRlbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgY2xpZW50c01hdGNoZWQ6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9ISURFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogW11cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgcHJvZHVjdHNNYXRjaGVkOiBbXSxcclxuICBzZWFyY2hWYWx1ZTogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdQUk9EVUNUX1NIT1dfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdQUk9EVUNUX0hJREVfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfU1VDQ0VTUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogW11cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGlzVmlzaWJsZTogZmFsc2UsXHJcbiAgcGF5TWV0aG9kOiAnQ0FTSCcsXHJcbiAgY2FzaEFtb3VudDogMCxcclxuICBjYXJkRGlnaXRzOiAnJyxcclxuICBjYXJkQXV0aDogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnU0hPV19QQVlfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdISURFX1BBWV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDSEFOR0VfUEFZX01FVEhPRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdVUERBVEVfQ0FTSF9BTU9VTlQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdVUERBVEVfQ0FSRF9BVVRIJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0RJR0lUUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBheU1ldGhvZDogYWN0aW9uLnBheWxvYWQucGF5LnBheU1ldGhvZCxcclxuICAgICAgICBjYXNoQW1vdW50OiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FzaEFtb3VudCxcclxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZERpZ2l0cyxcclxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWQucGF5LmNhcmRBdXRoXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSAvLyBzd2l0Y2hcclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcblxyXG59IC8vIHJlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBpc1Zpc2libGU6IGZhbHNlLFxyXG4gIGlzRnVsbDogdHJ1ZSxcclxuICBkZWZhdWx0RGVzaW5nOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NIT1dfSU5WT0lDRV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0hJREVfSU5WT0lDRV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGZ1bGxPck5vdCA9IHN0YXRlLmlzRnVsbFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzRnVsbDogIWZ1bGxPck5vdFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBkZXNpbmdPck5vdCA9IHN0YXRlLmRlZmF1bHREZXNpbmdcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkZWZhdWx0RGVzaW5nOiAhZGVzaW5nT3JOb3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgfSAvLyBzd2l0Y2hcclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcblxyXG59IC8vIHJlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwiY29uc3Qgc2FsZUFjdGl2ZU1vZGVsID0ge1xyXG4gIGlkOiAwLFxyXG4gIGJpbGxfbnVtYmVyOiAnJyxcclxuICBjYXJ0OiB7fSxcclxuICBjbGllbnQ6ICcnLFxyXG4gIHVzZXI6ICcnLFxyXG4gIGNsaWVudF9pZDogJycsXHJcbiAgcGF5OiB7fSxcclxuICBwYXllZDogZmFsc2UsXHJcbiAgcGF5X3R5cGU6ICdDQVNIJ1xyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBzYWxlczogW10sXHJcbiAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxyXG4gIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgc2FsZUFjdGl2ZUlkOiAwLFxyXG4gIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxyXG4gIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNhbGVBY3RpdmVJZDogMCxcclxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTSE9XX1NBTEVTX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnSElERV9TQUxFU19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnSElERV9QUkVTQUxFU19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVzOiBbXVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9TQUxFU19GVUxGSUxMRUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNhcnQpXHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2xpZW50KVxyXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC51c2VyKVxyXG4gICAgICBjb25zdCBwYXkgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnBheSlcclxuXHJcbiAgICAgIGNvbnN0IHNhbGUgPSB7XHJcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgIGJpbGxfbnVtYmVyOiBhY3Rpb24ucGF5bG9hZC5iaWxsX251bWJlcixcclxuICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgcGF5OiBwYXksXHJcbiAgICAgICAgcGF5ZWQ6IGFjdGlvbi5wYXlsb2FkLnBheWVkLFxyXG4gICAgICAgIHBheV90eXBlOiBhY3Rpb24ucGF5bG9hZC5wYXlfdHlwZSxcclxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC5jcmVhdGVkKSxcclxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC51cGRhdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfUFJFU0FMRV9JRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9QUk9GT1JNQV9JRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgY29uc3Qgc2FsZXMgPSBzdGF0ZS5zYWxlc1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgc2FsZXM6IHNhbGVzXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBzYWxlQWN0aXZlSWQ6IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcclxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxyXG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcclxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxyXG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGNvbXBhbnk6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENIX0NPTkZJR19GVUxGSUxMRUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxyXG4gICAgICB9XHJcblxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IHt9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfQ09ORklHJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IGFjdGlvbi5wYXlsb2FkLmRhdGFcclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvY29uZmlnL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2FwcHMvc2FsZXMvY29uZmlnL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9jb25maWcvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZmV0Y2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmZXRjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTU9EVUxFIElNUE9SVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoJ3V1aWQvdjEnKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXHJcbmV4cG9ydCBmdW5jdGlvbiByZWNhbGNDYXJ0KGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmV3SXRlbSA9IGl0ZW1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW0ucHJvZHVjdCwgaXRlbS5xdHksIGl0ZW0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXHJcblxyXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcclxuICAgIG5ld0l0ZW0udG90YWxXaXRoSXYgPSBkYXRhLnRvdGFsV2l0aEl2XHJcbiAgICBuZXdJdGVtLmRpc2NvdW50Q3VycmVuY3kgPSBkYXRhLmRpc2NvdW50Q3VycmVuY3lcclxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcclxuICAgIG5ld0l0ZW0ucHJpY2VUb1VzZSA9IGRhdGEucHJpY2VUb1VzZVxyXG5cclxuICAgIHJldHVybiBuZXdJdGVtXHJcblxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7dHlwZTogJ1JFUExBQ0VfQ0FSVCcsIHBheWxvYWQ6IG5ld0NhcnR9XHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXHJcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIHJlc1xyXG5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBpbmxpbmUgZGlzY291bnQgb2YgYW4gaXRlbSwgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Mb3RlKGl0ZW1zSW5DYXJ0LCBjb2RlLCBsb3RlKSB7XHJcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgbG90ZTogbG90ZU51bSxcclxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcblxyXG59XHJcblxyXG4vLyBXaGVuIGl0ZW0gaXMgc2VsZWN0ZWQgaW4gY29kZSBmaWVsZFxyXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XHJcblxyXG4gIGNvbnN0IHBlckxpbmUgPSBmYWxzZVxyXG5cclxuICBjb25zdCBwcm9kdWN0U2VsZWN0ZWQgPSBwcm9kdWN0cy5maW5kSW5kZXgocHJvZHVjdCA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdC5jb2RlID09IGNvZGUgfHwgcHJvZHVjdC5iYXJjb2RlID09IGNvZGVcclxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKHByb2R1Y3RTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpXHJcblxyXG4gIHJldHVybiByZXNcclxuXHJcbn1cclxuXHJcbi8vIFVwZGF0ZXMgQW1vdW50IGJhc2VkIG9uIHF0eSBpbnB1dCBmaWVsZFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKVxyXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxyXG4gIGNvbnN0IHJlcyA9IHtcclxuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxyXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcclxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcclxuXHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXHJcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXHJcbiAgY29uc3QgcmVzID0ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJPbmUgKGNvZGUsIHN1Yk9yQWRkLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUpXHJcbiAgY29uc3QgcXR5TnVtID0gc3ViT3JBZGQgPyBwYXJzZUZsb2F0KGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyAxKSA6IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSAtIDEpXHJcbiAgY29uc3QgcmVzID0ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcclxuZnVuY3Rpb24gY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKSB7XHJcblxyXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGNhcnQgPT4gY2FydC5wcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBjYXJ0LnByb2R1Y3QuYmFyY29kZSA9PSBjb2RlKVxyXG5cclxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXHJcblxyXG4gIC8vIENIRUNLIElGIENPTkZJRyBBTExPV1MgTVVMVElQTEUgTElORVMgT1IgTk9UXHJcbiAgaWYgKHBlckxpbmUpIHtcclxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxyXG4gICAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGluIGNhcnQgRGlzcGF0cyBBRERfVE9fVEFCTEUsIGlmIGV4aXN0cyBkaXNwYXRjaCBjYXJ0IHVwZGF0ZWRcclxuICAgICAgPyB7XHJcbiAgICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1dWlkOiB1dWlkLFxyXG4gICAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcclxuICAgICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXHJcbiAgICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXHJcbiAgICAgICAgICBsb3RlOiAnLScsXHJcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICA6IHtcclxuICAgICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyBxdHksXHJcbiAgICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcblxyXG4gIC8vIElHTk9SRSBJRiBBTFJFQURZIElOIENBUlQgSUYgQ09ORklHIFNBWVMgVEhBVFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHV1aWQ6IHV1aWQsXHJcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcclxuICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YU5ld1Byb2Quc3ViVG90YWxOb0Rpc2NvdW50LFxyXG4gICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcclxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXHJcbiAgICAgICAgbG90ZTogJy0nLFxyXG4gICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIGNhbGN1bGF0ZXMgdGhlIHN1YnRvdGFsIGJ5IGxpbmUsIGFsc28gdGhlIHRvdGFsIHdpdGggaXYgaW5jbHVkZWQsIHRoZSBkaXNjb3VudCBpbiBjdXJyZW5jeSBmb3JtYXRcclxuZnVuY3Rpb24gY2FjbFN1YnRvdGFsKHByb2R1Y3QsIHF0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IHByaWNlID0gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpXHJcblxyXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XHJcblxyXG4gIGNvbnN0IHN1YlRvdGFsID0gcHJpY2UgKiBxdHkgKiAoMSAtIChwcm9kdWN0RGlzY291bnQgLyAxMDApKSAqICgxIC0gKGdsb2JhbERpc2NvdW50IC8gMTAwKSlcclxuXHJcbiAgY29uc3QgaXYxID0gKHByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IGl2MiA9IChwcm9kdWN0LnVzZV90YXhlczIpXHJcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IGl2MyA9IChwcm9kdWN0LnVzZV90YXhlczMpXHJcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMzIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjIgKyBpdjNcclxuXHJcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUluTGluZSA9IHByaWNlICogcXR5ICogKHByb2R1Y3REaXNjb3VudCAvIDEwMClcclxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcclxuXHJcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeSA9IGRpc2NvdW50Q3VycmVuY3lJbkxpbmUgKyBkaXNjb3VudEN1cnJlbmN5R2xvYmFsXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWJ0b3RhbDogc3ViVG90YWwsXHJcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXHJcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICBwcmljZVRvVXNlOiBwcmljZVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgY2FydCB3aXRoIG5ldyBpbmZvcm1hdGlvbiwgdGhpcyBhdXggZnVudGlvbiByZXR1cm5zIG5ldyB1cGRhdGVkIG9iamVjdCByZWFkeSBmb3IgcmVwbGFjZSB0aGUgc3RvcmVkIG9uZVxyXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHV1aWQ6IHV1aWQsXHJcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcclxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGEuZGlzY291bnRDdXJyZW5jeSxcclxuICAgIHF0eTogbmV3UXR5LFxyXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcclxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YS5zdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICBzdWJ0b3RhbDogZGF0YS5zdWJ0b3RhbCxcclxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxyXG4gICAgbG90ZTogaXRlbXNJbkNhcnRbaW5kZXhdLmxvdGUsXHJcbiAgICBwcmljZVRvVXNlOiBkYXRhLnByaWNlVG9Vc2VcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxyXG5mdW5jdGlvbiBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudCkge1xyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UzKSByZXR1cm4gcHJvZHVjdC5wcmljZTNcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9