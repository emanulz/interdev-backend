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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2dldENsaWVudERlYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlNZXRob2QuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvc2F2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImhpZGVQYW5lbCIsInNlYXJjaFByb2R1Y3QiLCJwcm9kdWN0U2VsZWN0ZWRUYWJsZSIsInR5cGUiLCJwYXlsb2FkIiwidmFsIiwicHJvZHVjdHMiLCJ0ZXh0Iiwic3BsaXQiLCJtYXRjaHMiLCJmb3JFYWNoIiwiY29udHJvbCIsImRlc2NyaXB0aW9uIiwicHJvZHVjdCIsInRvU3RyaW5nIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ3b3JkIiwicHVzaCIsInJlcyIsImxlbmd0aCIsImNvZGUiLCJzZWFyY2hDbGllbnQiLCJjbGllbnRzIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjbGllbnQiLCJsYXN0X25hbWUiLCJjbGllbnRTZWxlY3RlZCIsInVzZXJTZWxlY3RlZCIsImZpbmRJbmRleCIsIl9pZCIsInVzZXJzIiwidXNlciIsInVwZGF0ZVN0b3JlQ2FzaEFtb3VudCIsInVwZGF0ZVN0b3JlQ2FyZEF1dGgiLCJ1cGRhdGVTdG9yZUNhcmREaWdpdHMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwibnVtYmVyIiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImxvYWRHbG9iYWxDb25maWciLCJzYXZlTG9nIiwiZ2V0TmV4dE51bWVyaWNDb2RlIiwic2V0TmV4dFByZXZJdGVtIiwiZGVmYXVsdHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwia3dhcmdzIiwidXJsIiwic3VjY2Vzc1R5cGUiLCJlcnJvclR5cGUiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic3RhdHVzIiwiYWxlcnQiLCJzdWNjZXNzVHlwZTIiLCJsb29rVXBWYWx1ZSIsImxvb2tVcEZpZWxkIiwiaGlzdG9yeSIsInJlZGlyZWN0VXJsIiwibW9kZWxOYW1lIiwibG9va1VwTmFtZSIsImRpc3BhdGNoVHlwZSIsImRpc3BhdGNoVHlwZTIiLCJkaXNwYXRjaEVycm9yVHlwZSIsIml0ZW0iLCJsb2dDb2RlIiwiaXRlbU9sZCIsImxvZ01vZGVsIiwibG9nRGVzY3JpcHRpb24iLCJpc1NhbGUiLCJtZXRob2QiLCJzdWNlc3NNZXNzYWdlIiwic2V0IiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwia3dhcmdzMiIsIml0ZW0yIiwidXJsMiIsImxvZ0NvZGUyIiwiaXRlbU9sZDIiLCJsb2dNb2RlbDIiLCJsb2dEZXNjcmlwdGlvbjIiLCJtb2RlbCIsInNlY3Rpb24iLCJzdWNjZXNzIiwiZmFpbCIsImNvbmZpZyIsImZpbHRlciIsInZhbHVlIiwib2xkT2JqZWN0Iiwib2JqZWN0IiwicHJldk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPYmplY3QiLCJ1c2VyMiIsInByZXZfb2JqZWN0IiwibmV3X29iamVjdCIsImVsZW1lbnRzIiwiZmllbGQiLCJrZXlzIiwibWFwIiwiZWxlbWVudCIsInNvcnQiLCJhIiwiYiIsIm1heCIsInBvcCIsIm5leHQiLCJwYXJzZUludCIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJuZXh0Q29kZSIsInByZXZDb2RlIiwid2luZG93IiwiYWxlcnRpZnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTWFpbiIsInN0b3JlIiwiZmV0Y2hpbmciLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwicm91dGVzIiwiSG9tZSIsIlNhbGUiLCJmdWxsV2lkdGgiLCJzYWxlIiwidG90YWwiLCJjYXJ0IiwiY2FydFRvdGFsIiwiY29udGVudENsYXNzIiwiY2FydENsYXNzIiwidG90YWxDbGFzcyIsImZvcm1hdE1vbmV5IiwidG9nZ2xlV2lkdGgiLCJiaW5kIiwiUHJvZHVjdCIsIml0ZW1zSW5DYXJ0IiwiY2FydEl0ZW1zIiwiaW5wdXRWYWwiLCJnbG9iYWxEaXNjb3VudCIsImNvZGVJbnB1dCIsImZvY3VzIiwicHJvZHVjdEt3YXJncyIsImV2Iiwia2V5IiwidGFyZ2V0IiwicXR5IiwiaXNOYU4iLCJkZWZhdWx0Q29uZmlnIiwidXNlckNvbmZpZyIsImRpc2FibGVkIiwiaW5wdXRLZXlQcmVzcyIsImlucHV0Iiwic2VhcmNoUHJvZHVjdENsaWNrIiwiTW91c2V0cmFwIiwicmVxdWlyZSIsIkNhcnQiLCJfdGhpcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwidW5iaW5kIiwiQ2FydEl0ZW1zIiwiaW5DYXJ0IiwiY2FydEl0ZW1BY3RpdmUiLCJwcmV2UHJvcHMiLCJlbGVtIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiX190aGlzIiwicHJvbXB0IiwiZXZ0Iiwib2siLCJjYW5jZWwiLCJkaXNjb3VudCIsImxvdGUiLCJzZWxlY3QiLCJpdGVtczIiLCJhY3RpdmVDbGFzcyIsImJhcmNvZGUiLCJyZW1vdmVJY29uQ2xhc3MiLCJ0YXhlczEiLCJ1c2VfdGF4ZXMiLCJ0YXhlcyIsInF0eUZpZWxkIiwicXR5SW5wdXRDaGFuZ2UiLCJ1dWlkIiwiZmllbGRGb2N1cyIsInF0eUlucHV0S2V5UHJlc3MiLCJkaXNjb3VudEZpZWxkIiwic2FsZUxvYWRlZCIsImRpc2NvdW50SW5wdXRLZXlQcmVzcyIsImRpc2NvdW50SW5wdXRPbkJsdXIiLCJzZXRDYXJ0SXRlbUFjdGl2ZSIsInByaWNlVG9Vc2UiLCJ0b3RhbFdpdGhJdiIsInJlbW92ZUl0ZW0iLCJ1cGRhdGVUb3RhbHMiLCJyZW1vdmVGcm9tQ2FydCIsInN1YnRvdGFsIiwic3ViVG90YWxOb0Rpc2NvdW50IiwiZGlzY291bnRUb3RhbCIsInRheGVzQ2FsYyIsInRheGVzQ2FsYzIiLCJ1c2VfdGF4ZXMyIiwidGF4ZXMyIiwidGF4ZXNDYWxjMyIsInVzZV90YXhlczMiLCJ0YXhlczMiLCJkaXNjb3VudEN1cnJlbmN5IiwiaW5kZXhJbkNhcnQiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsImRlYnQiLCJjbGllbnRTZWxlY3RlZERlYnQiLCJuZXh0UHJvcHMiLCJjbGllbnRfaWQiLCJpZCIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsInNlYXJjaENsaWVudENsaWNrIiwiZ2V0Q2xpZW50RGVidCIsInBvc3QiLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50Iiwic3RhdGUiLCJkaXNjb3VudFZhbCIsIm1heERpc2NvdW50IiwiaW5wdXRPbkJsdXIiLCJCdXR0b25zIiwic2FsZXMiLCJjb21wbGV0ZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJidXR0b25zIiwic2hvd0lub2ljZVBhbmVsIiwibmV3U2FsZSIsInNob3dQYXlQYW5lbCIsInNob3dTYWxlUGFuZWwiLCJzaG93UHJlc2FsZXNQYW5lbCIsInNlYXJjaFByb2R1Y3RzIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmlzaWJsZU9yTm90IiwicGFuZWxDbGljayIsInNlYXJjaEZvcm0iLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFZhbCIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJjIiwiZCIsInQiLCJuIiwiTWF0aCIsImFicyIsInVuZGVmaW5lZCIsInMiLCJpIiwiU3RyaW5nIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJyZXN1bHRzVGFibGUiLCJtYXRjaGVzIiwicHJvZHVjdHNNYXRjaGVkIiwic2VsZWN0UHJvZHVjdCIsInNlbGxwcmljZSIsInNlYXJjaENsaWVudHMiLCJzZWFyY2hDbGllbnRBY3Rpb24iLCJjbGllbnRzTWF0Y2hlZCIsImhhc0NyZWRpdCIsImhhc19jcmVkaXQiLCJzZWxlY3RDbGllbnQiLCJQYXlQYW5lbCIsInBhbmVsVmlzaWJsZSIsInBheSIsImlzVmlzaWJsZSIsInBheU1ldGhvZCIsIlBheU1ldGhvZCIsImNsaWNrQ2hhbmdlUGF5TWV0aG9kIiwiUGF5Q2FzaCIsImNhc2hBbW91bnQiLCJwYXlBbW91bnRDaGFuZ2VkIiwiUGF5Q2FyZCIsImNhcmRBdXRoIiwiY2FyZERpZ2l0cyIsInBheUNhcmREaWdpdHNDaGFuZ2VkIiwicGF5Q2FyZEF1dGhDaGFuZ2VkIiwiUGF5Q3JlZGl0IiwiYXZhaWxhYmxlIiwiY3JlZGl0X2xpbWl0IiwiY2xpZW50TGltaXQiLCJjbGllbnRBdmFpbGFibGUiLCJQYXlPdGhlciIsIkZldGNoaW5nIiwiUGF5U2lkZUJhciIsInBheWVkIiwicmVzZXQiLCJjaGFuZ2UiLCJwYXlCdXR0b25DbGFzcyIsImNhc2giLCJhdXRoIiwiZGlnaXRzIiwiU2F2ZUJ0biIsInBheV90eXBlIiwiY3JlZGl0TW92ZW1lbnQiLCJtb3ZlbWVudF90eXBlIiwidXBkYXRlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2F2ZUJ0biIsImJpbGxfaWQiLCJiaWxsX251bWJlciIsInNhdmVDcmVkaXRNb3ZlbWVudCIsIm1vdmVtZW50IiwiSW52b2ljZVBhbmVsIiwiaW52b2ljZSIsImlzRnVsbCIsInByaW50RGl2IiwiaXNGdWxsQ2xhc3MiLCJjb21wb25lbnRUb01vdW50IiwidG9nZ2xlUGFuZWwiLCJwcmludFBhbmVsIiwiRnVsbEludm9pY2UiLCJIZWFkZXIiLCJzYWxlQWN0aXZlIiwiY29tcGFueSIsImhlYWRlcnRleHQiLCJsb2dvIiwibG9nb1dpZHRoIiwibG9nb1VybCIsImhlYWRlck5hbWUiLCJjb21lcmNpYWxfbmFtZSIsImhlYWRlck5hbWUyIiwibGVnYWxfbmFtZSIsInRlbHMiLCJ0ZWxlcGhvbmVzIiwidGVsc1RleHQiLCJpZFR5cGUiLCJpZFRleHQiLCJ0b1VwcGVyQ2FzZSIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjb3VudHJ5IiwiZW1haWwiLCJEYXRhIiwiZGF0ZSIsImNyZWF0ZWQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImNsaWVudEFkcmVzcyIsImFkcmVzcyIsIlRhYmxlIiwidGF4ZXNUZXh0IiwiZ2xvYmFsRGlzY291bnRSb3ciLCJOb3RlcyIsIkNvbXBhY3RJbnZvaWNlIiwiY29tZXJjaWFsTmFtZSIsImxlZ2FsTmFtZSIsInVzZVRheGVzIiwiVG9wQmFyIiwidG9wQmFyVG9nZ2xlVmlzaWJsZSIsImNvbmZpcm0iLCJidXR0b25DbGFzcyIsIm1lbnVDbGljayIsImhvbWVDbGljayIsImxvZ091dENsaWNrIiwidG9nZ2xlTGF5b3V0IiwidG9nZ2xlQ29uZmlnQmFyIiwibWFpbkNvbnRhaW5lciIsInNpZGVNZW51IiwicmVtb3ZlIiwiYWRkIiwiY29uZmlnQmFyIiwiU2lkZU1lbnUiLCJzaWRlTWVudUNsYXNzIiwiU2VhcmNoIiwiVXNlciIsImF2YXRhciIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwiZnVsbE5hbWUiLCJzdWJzdHJpbmciLCJtaWRkbGV3YXJlIiwibWVzc2FnZXMiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImFjdGlvbiIsImVkaXRhYmxlIiwidXBkYXRlZCIsImlzTnVsbCIsImNhcnRIYXNJdGVtcyIsImNhcnRTdWJ0b3RhbCIsIm5ld0NhcnQiLCJzcGxpY2UiLCJpdGVtc0xlZnRJbkNhcnQiLCJjbGllbnRTZWxlY3RlZE1vZGVsIiwiY2xpZW50VHlwZSIsImNyZWRpdF9kYXlzIiwiZG9jVHlwZSIsInVzZXJTZWxlY3RlZE1vZGVsIiwiY2xpZW50c0ZldGNoaW5nIiwiY2xpZW50c0ZlY3RlZCIsImNsaWVudHNGZXRjaEVycm9yIiwid2lkdGgiLCJkZWZhdWx0RGVzaW5nIiwiZnVsbE9yTm90IiwiZGVzaW5nT3JOb3QiLCJzYWxlQWN0aXZlTW9kZWwiLCJzYWxlQWN0aXZlSWQiLCJpc1NhbGVzUGFuZWxWaXNpYmxlIiwiaXNQcmVzYWxlc1BhbmVsVmlzaWJsZSIsInBhcnNlIiwiRGF0ZSIsInJlY2FsY0NhcnQiLCJ1cGRhdGVJdGVtRGlzY291bnQiLCJ1cGRhdGVJdGVtTG90ZSIsInByb2R1Y3RTZWxlY3RlZCIsInVwZGF0ZVF0eSIsInVwZGF0ZVF0eUNvZGUiLCJhZGRTdWJPbmUiLCJ1dWlkdjEiLCJuZXdJdGVtIiwiY2FjbFN1YnRvdGFsIiwidXBkYXRlZENhcnRJdGVtIiwibG90ZU51bSIsInBlckxpbmUiLCJjaGVja0lmSW5DYXJ0IiwicXR5TnVtIiwic3ViT3JBZGQiLCJkYXRhTmV3UHJvZCIsInByb2R1Y3REaXNjb3VudCIsInByaWNlIiwic3ViVG90YWwiLCJpdjEiLCJpdjIiLCJpdjMiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsInVzZVByaWNlMiIsInByaWNlMiIsInVzZVByaWNlMyIsInByaWNlMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFBZ0JBLFMsR0FBQUEsUztRQUtBQyxhLEdBQUFBLGE7UUFxQ0FDLG9CLEdBQUFBLG9CO0FBMUNULFNBQVNGLFNBQVQsR0FBcUI7O0FBRTFCLFNBQU8sRUFBQ0csTUFBTSxvQkFBUCxFQUE2QkMsU0FBUyxDQUFDLENBQXZDLEVBQVA7QUFDRDs7QUFFTSxTQUFTSCxhQUFULENBQXVCSSxHQUF2QixFQUE0QkMsUUFBNUIsRUFBc0M7O0FBRTNDLE1BQU1DLE9BQU9GLElBQUlHLEtBQUosQ0FBVSxHQUFWLENBQWI7QUFDQSxNQUFNQyxTQUFTLEVBQWY7O0FBRUFILFdBQVNJLE9BQVQsQ0FBaUIsbUJBQVc7QUFDMUIsUUFBSUMsVUFBVSxJQUFkO0FBQ0EsUUFBTUMsY0FBY0MsUUFBUUQsV0FBUixDQUFvQkUsUUFBcEIsRUFBcEI7O0FBRUFQLFNBQUtHLE9BQUwsQ0FBYSxnQkFBUTtBQUNuQixVQUFNSyxRQUFRSCxZQUFZSSxXQUFaLEdBQTBCQyxPQUExQixDQUFrQ0MsS0FBS0YsV0FBTCxFQUFsQyxDQUFkOztBQUVBLFVBQUlELFNBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2ZKLGtCQUFVLEtBQVY7QUFDQSxlQUFPLEtBQVA7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBSUEsT0FBSixFQUFhO0FBQ1hGLGFBQU9VLElBQVAsQ0FBWU4sT0FBWjtBQUNEO0FBRUYsR0FqQkQ7O0FBbUJBLE1BQU1PLE1BQU9YLE9BQU9ZLE1BQVIsR0FDUjtBQUNBbEIsVUFBTSx3QkFETjtBQUVBQyxhQUFTSztBQUZULEdBRFEsR0FLUjtBQUNBTixVQUFNLHFCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBTEo7O0FBVUEsU0FBT2dCLEdBQVA7QUFDRDs7QUFFTSxTQUFTbEIsb0JBQVQsQ0FBOEJvQixJQUE5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QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE1BQU07QUFDekIsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFvQyxPQUFPemEsUUFBUTRjLEtBQWY7O0FBRXBDLFNBQU81YyxRQUFRNGMsS0FBZjtBQUVEOzs7Ozs7OztnQ0FoUmVsQixVOztnQ0F1QkFDLGtCOztnQ0F1QkFDLGM7O2dDQXNCQUMsZTs7Z0NBcUJBQyxTOztnQ0FlQUMsYTs7Z0NBaUJBQyxTOztnQ0FvQlBPLGE7O2dDQTZEQUosWTs7Z0NBc0NBQyxlOztnQ0FtQkFsUCxVIiwiZmlsZSI6InNhbGVzLTkyMTNkOGVlOTNhMWNjYzhhYzE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYW5lbCgpIHtcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnUFJPRFVDVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHZhbCwgcHJvZHVjdHMpIHtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXHJcbiAgY29uc3QgbWF0Y2hzID0gW11cclxuXHJcbiAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgIGxldCBjb250cm9sID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9kdWN0LmRlc2NyaXB0aW9uLnRvU3RyaW5nKClcclxuXHJcbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcclxuXHJcbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgIG1hdGNocy5wdXNoKHByb2R1Y3QpXHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJyxcclxuICAgICAgcGF5bG9hZDogbWF0Y2hzXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSB7XHJcblxyXG4gIHJldHVybiB7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogY29kZX1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9hY3Rpb25zLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYW5lbCgpIHtcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcclxuXHJcbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXHJcbiAgY29uc3QgbWF0Y2hzID0gW11cclxuXHJcbiAgY29uc29sZS5sb2coY2xpZW50cylcclxuXHJcbiAgY2xpZW50cy5mb3JFYWNoKGNsaWVudCA9PiB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRydWVcclxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXHJcblxyXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcclxuXHJcbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUycsXHJcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX0ZBSUwnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWVudFNlbGVjdGVkKGNvZGUsIGNsaWVudHMpIHtcclxuXHJcbiAgY29uc3QgY2xpZW50U2VsZWN0ZWQgPSBjbGllbnRzLmZpbmRJbmRleChjbGllbnQgPT4gY2xpZW50LmNvZGUgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXHJcblxyXG4gIGNvbnN0IHJlcyA9IChjbGllbnRTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnQ0xJRU5UX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ0NMSUVOVF9TRUxFQ1RFRCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBjbGllbnQ6IGNsaWVudHNbY2xpZW50U2VsZWN0ZWRdXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIHJlc1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTZWxlY3RlZChfaWQsIHVzZXJzKSB7XHJcblxyXG4gIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHVzZXJzLmZpbmRJbmRleCh1c2VyID0+IHVzZXIuX2lkID09IF9pZCkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXHJcblxyXG4gIGNvbnN0IHJlcyA9ICh1c2VyU2VsZWN0ZWQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1VTRVJfTk9UX0ZPVU5EJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVNFUl9TRUxFQ1RFRCcsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB1c2VyOiB1c2Vyc1t1c2VyU2VsZWN0ZWRdXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIHJlc1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCgpIHtcclxuXHJcbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX1NIT1dfUEFORUwnLCBwYXlsb2FkOiAtMX1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhc2hBbW91bnQoYW1vdW50KSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IChhbW91bnQpIC8vIGlmIGl0cyBhIHZhbHVlXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVNIX0FNT1VOVCcsXHJcbiAgICAgIHBheWxvYWQ6IHBhcnNlRmxvYXQoYW1vdW50KVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxyXG4gICAgICBwYXlsb2FkOiAwXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZEF1dGgobnVtYmVyKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0FVVEgnLFxyXG4gICAgICBwYXlsb2FkOiBudW1iZXJcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXHJcbiAgICAgIHBheWxvYWQ6ICcnXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhudW1iZXIpIHtcclxuXHJcbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfRElHSVRTJyxcclxuICAgICAgcGF5bG9hZDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXHJcbiAgICAgIHBheWxvYWQ6ICcnXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvYWRTYWxlKGlkLCBzYWxlcykge1xyXG4vLyAgIGNvbnN0IGZpbHRlcmVkU2FsZXMgPSBzYWxlcy5maWx0ZXIoc2FsZSA9PiB7XHJcbi8vICAgICByZXR1cm4gc2FsZS5pZCA9PSBpZFxyXG4vLyAgIH0pXHJcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbi8vICAgICBpZiAoZmlsdGVyZWRTYWxlcy5sZW5ndGgpIHtcclxuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddID0gbmV3IERhdGUoZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddKVxyXG4vLyAgICAgICAvLyBmaWx0ZXJlZFNhbGVzWzBdWydnbG9iYWxEaXNjb3VudCddID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydnbG9iYWxEaXNjb3VudCddKVxyXG4vLyAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydjYXJ0J11bJ2dsb2JhbERpc2NvdW50J10pXHJcbi8vICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFZlbnRhICMke2lkfWBcclxuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY2xpZW50J11bJ3NhbGVMb2FkZWQnXSA9IHRydWVcclxuXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcclxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IGZpbHRlcmVkU2FsZXNbMF19KVxyXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXS5faWR9KVxyXG5cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9UX0ZPVU5EX1NBTEUnLCBwYXlsb2FkOiBpZH0pXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XHJcblxyXG4vLyAgIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxyXG4vLyAgIGNvbnN0IG1vdmVtZW50cyA9IGt3YXJncy5tb3ZlbWVudHNcclxuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuLy8gICAgIGNvbnN0IGRiID0gbmV3IFBvdWNoREIoa3dhcmdzLmRiKVxyXG5cclxuLy8gICAgIGRiLnBvc3QoaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBpdGVtfSlcclxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmlkfSlcclxuXHJcbi8vICAgICAgIGlmIChpdGVtLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHsgLy8gSUYgQ1JFRElUIENSRUFURSBDUkVESVQgTU9WRU1FTlRcclxuLy8gICAgICAgICBjb25zdCBkYjIgPSBuZXcgUG91Y2hEQignZ2VuZXJhbCcpXHJcbi8vICAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHJlc3BvbnNlLmlkLCBpdGVtKVxyXG5cclxuLy8gICAgICAgICBkYjIucG9zdChtb3ZlbWVudCkudGhlbihyZXNwb25zZSA9PiB7XHJcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuLy8gICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcbi8vICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgLy8gSUYgRVJST1IgU0hPVyBNRVNTQUdFXHJcbi8vICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgbW92aW1pZW50byBkZSBjcsOpZGl0bywgcG9yIGZhdm9yIGFudWxlIGxhIGZhY3R1cmEgeSBjcmVlbGFcclxuLy8gICAgICAgICAgIGRlIG51ZXZvIEVSUk9SOiAke2Vycn0uYClcclxuLy8gICAgICAgICB9KVxyXG5cclxuLy8gICAgICAgfSBlbHNlIHsgLy8gSUYgTk9UIENSRURJVCBTSE9XIFBBTkVMU1xyXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuLy8gICAgIH0pXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHNhbGVJZCwgc2FsZSkge1xyXG5cclxuLy8gICBjb25zdCBzb3J0ZWRNb3ZlbWVudHMgPSBtb3ZlbWVudHMubGVuZ3RoID4gMSA/IG1vdmVtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbi8vICAgICBpZiAoYS5kb2N1bWVudCA8IGIuZG9jdW1lbnQpIHtcclxuLy8gICAgICAgcmV0dXJuIDFcclxuLy8gICAgIH1cclxuLy8gICAgIGlmIChhLmRvY3VtZW50ID4gYi5kb2N1bWVudCkge1xyXG4vLyAgICAgICByZXR1cm4gLTFcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiAwXHJcbi8vICAgfSkgOiBtb3ZlbWVudHNcclxuXHJcbi8vICAgY29uc3QgbmV4dElkID0gc29ydGVkTW92ZW1lbnRzLmxlbmd0aCA+IDAgPyBzb3J0ZWRNb3ZlbWVudHNbMF0uZG9jdW1lbnQgKyAxIDogMVxyXG5cclxuLy8gICBjb25zdCBtb3ZlbWVudCA9IHtcclxuLy8gICAgICdkb2N1bWVudCc6IG5leHRJZCxcclxuLy8gICAgICdkb2NUeXBlJzogJ0NMSUVOVF9NT1ZFTUVOVCcsXHJcbi8vICAgICAnY2xpZW50SWQnOiBzYWxlLmNsaWVudC5faWQsXHJcbi8vICAgICAndHlwZSc6ICdDUkVESVQnLFxyXG4vLyAgICAgJ2Ftb3VudCc6IHBhcnNlRmxvYXQoc2FsZS5jYXJ0LmNhcnRUb3RhbCksXHJcbi8vICAgICAnZGF0ZSc6IG5ldyBEYXRlKCksXHJcbi8vICAgICAnc2FsZV9pZCc6IHNhbGVJZCxcclxuLy8gICAgICdzYWxlSWQnOiBzYWxlLmlkLFxyXG4vLyAgICAgJ2Rlc2NyaXB0aW9uJzogYFZlbnRhIGEgY3LDqWRpdG8gY29uIGZhY3R1cmEgIyR7c2FsZS5pZH1gXHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gbW92ZW1lbnRcclxuXHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNT0RVTEUgSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ09ORklHIERFRkFVTFQgQVhJT1NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXHJcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEVYUE9SVCBGVU5DVElPTlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR0VUIEZVTkNUSU9OUyAoUkVUUklFVkUgQUxMKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1EaXNwYXRjaChrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXHJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAvLyBJRiBUSEUgRVJST1IgSVMgVU5BVVRPUklaRUQgUEFHRSBXSUxMIFNIT1cgVEhFIE1FU1NBR0VcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcclxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURvdWJsZURpc3BhdGNoKGt3YXJncykge1xyXG5cclxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXHJcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcclxuICBjb25zdCBzdWNjZXNzVHlwZTIgPSBrd2FyZ3Muc3VjY2Vzc1R5cGUyXHJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlMiwgcGF5bG9hZDogJyd9KVxyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXHJcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SZXR1cm4oa3dhcmdzKSB7XHJcblxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuXHJcbiAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXHJcbiAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTRVQgRlVOQ1RJT04gKFJFVFJJRVZFIElORElWSURVQUwpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgbG9va1VwVmFsdWUgPSBrd2FyZ3MubG9va1VwVmFsdWVcclxuICBjb25zdCBsb29rVXBGaWVsZCA9IGt3YXJncy5sb29rVXBGaWVsZFxyXG4gIGNvbnN0IGhpc3RvcnkgPSBrd2FyZ3MuaGlzdG9yeVxyXG4gIGNvbnN0IHJlZGlyZWN0VXJsID0ga3dhcmdzLnJlZGlyZWN0VXJsXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGNvbnNvbGUubG9nKGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKVxyXG4gICAgYXhpb3MuZ2V0KGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gSUYgVEhFUkUgSVMgTU9SRSBUSEFOIE9ORSBFTEVNRU5UIEZJTFRFUkVEXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0FURU5DScOTTicsIGBFeGlzdGUgbWFzIGRlIHVuICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsICR7a3dhcmdzLmxvb2tVcE5hbWV9OlxyXG4gICAgICAgICAgJHtrd2FyZ3MubG9va1VwVmFsdWV9LCBzZSB1dGlsaXphcsOhIGVsIHByaW1lcm8gZW4gbGlzdGEsIHBvciBsbyBxdWUgcHVlZGUgbm8gc2VyIGVsIG1pc21vIHF1ZSB1ZCBkZXNlYVxyXG4gICAgICAgICAgYWN0dWFsaXphciwgZXN0byBwdWVkZSBkZWJlcnNlIGEgdW4gZXJyb3IsIHBvciBmYXZvciByZXZpc2UgbG9zXHJcbiAgICAgICAgICBkYXRvcyBvIGNvbnRhY3RlIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hLmApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUyLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hFcnJvclR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgTm8gaGF5ICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsIHZhbG9yIGRlICR7a3dhcmdzLmxvb2tVcE5hbWV9OiAke2t3YXJncy5sb29rVXBWYWx1ZX1gLFxyXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IGhpc3RvcnkucHVzaChyZWRpcmVjdFVybCkgfSlcclxuICAgICAgfVxyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIGVsIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxyXG4gICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xyXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxyXG4gIGRlbGV0ZSBpdGVtWydpZCddXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuICBjb25zdCBpc1NhbGUgPSBrd2FyZ3MuaXNTYWxlXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IGl0ZW1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxyXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBpZiAoaXNTYWxlKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVVBEQVRFIEZVTkNUSU9OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oa3dhcmdzKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIH0pXHJcblxyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW0oa3dhcmdzKSB7XHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoa3dhcmdzLnN1Y2Vzc01lc3NhZ2UpIHtcclxuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRE9VQkxFIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW1zKGt3YXJncywga3dhcmdzMikge1xyXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcclxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxyXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXHJcbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXHJcblxyXG4gIGNvbnN0IGl0ZW0yID0ga3dhcmdzMi5pdGVtXHJcbiAgY29uc3QgdXJsMiA9IGt3YXJnczIudXJsXHJcbiAgY29uc3QgbG9nQ29kZTIgPSBrd2FyZ3MyLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkMiA9IGt3YXJnczIuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsMiA9IGt3YXJnczIubG9nTW9kZWxcclxuICBjb25zdCBsb2dEZXNjcmlwdGlvbjIgPSBrd2FyZ3MyLmxvZ0Rlc2NyaXB0aW9uXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogaXRlbVxyXG4gICAgfSlcclxuICAgICAgLy8gRklSU1QgUEFUQ0ggVEhFTlxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuXHJcbiAgICAgICAgLy8gU0VDT05EIFBBVENIXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxyXG4gICAgICAgICAgdXJsOiB1cmwyLFxyXG4gICAgICAgICAgZGF0YTogaXRlbTJcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIFRIRU5cclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa3dhcmdzMi5zdWNlc3NNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChrd2FyZ3MyLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga3dhcmdzMi5oaXN0b3J5LnB1c2goa3dhcmdzMi5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzMi5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICAgICAgc2F2ZUxvZyhsb2dDb2RlMiwgbG9nTW9kZWwyLCBpdGVtT2xkMiwgaXRlbTIsIGxvZ0Rlc2NyaXB0aW9uMiwgdXNlcilcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG5cclxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBDQVRDSFxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MyLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEZJUlNUIFBBVENIIENBVENIXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gREVMRVRFIEZVTkNUSU9OIChERUxFVEUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShrd2FyZ3MpIHtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXHJcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxyXG4gIGNvbnN0IG1vZGVsID0ga3dhcmdzLm1vZGVsTmFtZVxyXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxyXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxyXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXHJcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cclxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICB1cmw6IHVybFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywgJ0VsZW1lbnRvIGVsaW1pbmFkbyBzYXRpZmFjdG9yaWFtZW50ZScpXHJcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEh1Ym8gdW4gZXJyb3IgYWwgZWxpbWluYXIgZWwgJHttb2RlbH0gRVJST1I6ICR7ZXJyfS5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIExPQUQgQ09ORklHIEZVTkNUSU9OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdsb2JhbENvbmZpZyhzZWN0aW9uLCBuYW1lLCBzdWNjZXNzLCBmYWlsKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBpZiAobmFtZSkge1xyXG5cclxuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbGNvbmYvJHtzZWN0aW9ufV9fJHtuYW1lfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIFNpbmdsZSBjb25maWcgZmV0Y2hcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxwcmVmc2ApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUaGUgcHJvcGVydHkgdG8gbW9kaWZ5IGluIHJlZHVjZXJcclxuICAgICAgICBjb25zdCBjb25maWcgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICA/IHJlc3BvbnNlLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uID09IHNlY3Rpb25cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IHt9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgICAgICAgY29uZmlnLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3MsIHBheWxvYWQ6IHtkYXRhOiBkYXRhLCBzZWN0aW9uOiBzZWN0aW9ufX0pXHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTQVZFIExPRyBGVU5DVElPTiAoQ1JFQVRFIExPRylcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9nIChjb2RlLCBtb2RlbCwgb2xkT2JqZWN0LCBvYmplY3QsIGRlc2NyaXB0aW9uLCB1c2VyKSB7XHJcblxyXG4gIGNvbnN0IHByZXZPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QpXHJcbiAgY29uc3QgbmV3T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxyXG4gIGNvbnN0IHVzZXIyID0gSlNPTi5zdHJpbmdpZnkodXNlcilcclxuXHJcbiAgY29uc3QgaXRlbSA9IHtcclxuICAgIGNvZGU6IGNvZGUsXHJcbiAgICBtb2RlbDogbW9kZWwsXHJcbiAgICBwcmV2X29iamVjdDogcHJldk9iamVjdCxcclxuICAgIG5ld19vYmplY3Q6IG5ld09iamVjdCxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIHVzZXI6IHVzZXIyXHJcbiAgfVxyXG5cclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIHVybDogJy9hcGkvbG9ncy8nLFxyXG4gICAgZGF0YTogaXRlbVxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBMb2cgZGVsIG1vdmltaWVudG8sIEVSUk9SOiAke2Vycn0uYClcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBVVggRlVOQ1RJT05TXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTkVYVCBOVU1FUklDIENPREVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHROdW1lcmljQ29kZShlbGVtZW50cywgZmllbGQpIHtcclxuXHJcbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xyXG5cclxuICAgIGxldCBrZXlzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudFtmaWVsZF0pXHJcblxyXG4gICAga2V5cyA9IGtleXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICBjb25zdCBtYXggPSBrZXlzLnBvcCgpXHJcbiAgICBjb25zdCBuZXh0ID0gcGFyc2VJbnQobWF4KSArIDFcclxuICAgIHJldHVybiBuZXh0LnRvU3RyaW5nKClcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gMVxyXG5cclxufVxyXG5cclxuLy8gTkVYVCBQUkVWSU9VUyBJVEVNU1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV4dFByZXZJdGVtKGt3YXJncykge1xyXG5cclxuICBjb25zdCBjb2RlID0ga3dhcmdzLmNvZGVcclxuICBjb25zdCBpdGVtcyA9IGt3YXJncy5pdGVtc1xyXG4gIGNvbnN0IGNvZGVGaWVsZCA9IGt3YXJncy5jb2RlRmllbGRcclxuICBsZXQgcHJldmlvdXMgPSAwXHJcbiAgbGV0IG5leHQgPSAwXHJcblxyXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhW2NvZGVGaWVsZF0gLSBiW2NvZGVGaWVsZF1cclxuICB9KVxyXG5cclxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1bY29kZUZpZWxkXSA9PSBjb2RlKSB7XHJcbiAgICAgIG5leHQgPSBpbmRleCArIDFcclxuICAgICAgcHJldmlvdXMgPSBpbmRleCAtIDFcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBuZXh0Q29kZSA9IGl0ZW1zW25leHRdID8gaXRlbXNbbmV4dF1bY29kZUZpZWxkXSA6IGl0ZW1zWzBdW2NvZGVGaWVsZF1cclxuICBjb25zdCBwcmV2Q29kZSA9IGl0ZW1zW3ByZXZpb3VzXSA/IGl0ZW1zW3ByZXZpb3VzXVtjb2RlRmllbGRdIDogaXRlbXMucG9wKClbY29kZUZpZWxkXVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiB7bmV4dDogbmV4dENvZGUsIHByZXZpb3VzOiBwcmV2Q29kZX19KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9hcGkuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoZS5yZWR1eExvZ2dlcj1lLnJlZHV4TG9nZ2VyfHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLHQpe2Uuc3VwZXJfPXQsZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSl9ZnVuY3Rpb24gcihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwia2luZFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KSx0JiZ0Lmxlbmd0aCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXRoXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG4oZSx0LHIpe24uc3VwZXJfLmNhbGwodGhpcyxcIkVcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJoc1wiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBvKGUsdCl7by5zdXBlcl8uY2FsbCh0aGlzLFwiTlwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGkoZSx0KXtpLnN1cGVyXy5jYWxsKHRoaXMsXCJEXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gYShlLHQscil7YS5zdXBlcl8uY2FsbCh0aGlzLFwiQVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5kZXhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpdGVtXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGYoZSx0LHIpe3ZhciBuPWUuc2xpY2UoKHJ8fHQpKzF8fGUubGVuZ3RoKTtyZXR1cm4gZS5sZW5ndGg9dDwwP2UubGVuZ3RoK3Q6dCxlLnB1c2guYXBwbHkoZSxuKSxlfWZ1bmN0aW9uIHUoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpO3JldHVyblwib2JqZWN0XCIhPT10P3Q6ZT09PU1hdGg/XCJtYXRoXCI6bnVsbD09PWU/XCJudWxsXCI6QXJyYXkuaXNBcnJheShlKT9cImFycmF5XCI6XCJbb2JqZWN0IERhdGVdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk/XCJkYXRlXCI6XCJmdW5jdGlvblwiPT10eXBlb2YgZS50b1N0cmluZyYmL15cXC8uKlxcLy8udGVzdChlLnRvU3RyaW5nKCkpP1wicmVnZXhwXCI6XCJvYmplY3RcIn1mdW5jdGlvbiBsKGUsdCxyLGMscyxkLHApe3M9c3x8W10scD1wfHxbXTt2YXIgZz1zLnNsaWNlKDApO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkKXtpZihjKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZjKGcsZCkpcmV0dXJuO2lmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/XCJ1bmRlZmluZWRcIjpOKGMpKSl7aWYoYy5wcmVmaWx0ZXImJmMucHJlZmlsdGVyKGcsZCkpcmV0dXJuO2lmKGMubm9ybWFsaXplKXt2YXIgaD1jLm5vcm1hbGl6ZShnLGQsZSx0KTtoJiYoZT1oWzBdLHQ9aFsxXSl9fX1nLnB1c2goZCl9XCJyZWdleHBcIj09PXUoZSkmJlwicmVnZXhwXCI9PT11KHQpJiYoZT1lLnRvU3RyaW5nKCksdD10LnRvU3RyaW5nKCkpO3ZhciB5PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKSx2PVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Tih0KSxiPVwidW5kZWZpbmVkXCIhPT15fHxwJiZwW3AubGVuZ3RoLTFdLmxocyYmcFtwLmxlbmd0aC0xXS5saHMuaGFzT3duUHJvcGVydHkoZCksbT1cInVuZGVmaW5lZFwiIT09dnx8cCYmcFtwLmxlbmd0aC0xXS5yaHMmJnBbcC5sZW5ndGgtMV0ucmhzLmhhc093blByb3BlcnR5KGQpO2lmKCFiJiZtKXIobmV3IG8oZyx0KSk7ZWxzZSBpZighbSYmYilyKG5ldyBpKGcsZSkpO2Vsc2UgaWYodShlKSE9PXUodCkpcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJkYXRlXCI9PT11KGUpJiZlLXQhPT0wKXIobmV3IG4oZyxlLHQpKTtlbHNlIGlmKFwib2JqZWN0XCI9PT15JiZudWxsIT09ZSYmbnVsbCE9PXQpaWYocC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGhzPT09ZX0pLmxlbmd0aCllIT09dCYmcihuZXcgbihnLGUsdCkpO2Vsc2V7aWYocC5wdXNoKHtsaHM6ZSxyaHM6dH0pLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB3O2UubGVuZ3RoO2Zvcih3PTA7dzxlLmxlbmd0aDt3Kyspdz49dC5sZW5ndGg/cihuZXcgYShnLHcsbmV3IGkodm9pZCAwLGVbd10pKSk6bChlW3ddLHRbd10scixjLGcsdyxwKTtmb3IoO3c8dC5sZW5ndGg7KXIobmV3IGEoZyx3LG5ldyBvKHZvaWQgMCx0W3crK10pKSl9ZWxzZXt2YXIgeD1PYmplY3Qua2V5cyhlKSxTPU9iamVjdC5rZXlzKHQpO3guZm9yRWFjaChmdW5jdGlvbihuLG8pe3ZhciBpPVMuaW5kZXhPZihuKTtpPj0wPyhsKGVbbl0sdFtuXSxyLGMsZyxuLHApLFM9ZihTLGkpKTpsKGVbbl0sdm9pZCAwLHIsYyxnLG4scCl9KSxTLmZvckVhY2goZnVuY3Rpb24oZSl7bCh2b2lkIDAsdFtlXSxyLGMsZyxlLHApfSl9cC5sZW5ndGg9cC5sZW5ndGgtMX1lbHNlIGUhPT10JiYoXCJudW1iZXJcIj09PXkmJmlzTmFOKGUpJiZpc05hTih0KXx8cihuZXcgbihnLGUsdCkpKX1mdW5jdGlvbiBjKGUsdCxyLG4pe3JldHVybiBuPW58fFtdLGwoZSx0LGZ1bmN0aW9uKGUpe2UmJm4ucHVzaChlKX0sciksbi5sZW5ndGg/bjp2b2lkIDB9ZnVuY3Rpb24gcyhlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmRlbGV0ZSBvW3IucGF0aFtuXV07YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjpvW3IucGF0aFtuXV09ci5yaHN9fWVsc2Ugc3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoZVt0XSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmU9ZihlLHQpO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6ZVt0XT1yLnJoc31yZXR1cm4gZX1mdW5jdGlvbiBkKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe2Zvcih2YXIgbj1lLG89LTEsaT1yLnBhdGg/ci5wYXRoLmxlbmd0aC0xOjA7KytvPGk7KVwidW5kZWZpbmVkXCI9PXR5cGVvZiBuW3IucGF0aFtvXV0mJihuW3IucGF0aFtvXV09XCJudW1iZXJcIj09dHlwZW9mIHIucGF0aFtvXT9bXTp7fSksbj1uW3IucGF0aFtvXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoci5wYXRoP25bci5wYXRoW29dXTpuLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG5bci5wYXRoW29dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm5bci5wYXRoW29dXT1yLnJoc319fWZ1bmN0aW9uIHAoZSx0LHIpe2lmKHIucGF0aCYmci5wYXRoLmxlbmd0aCl7dmFyIG4sbz1lW3RdLGk9ci5wYXRoLmxlbmd0aC0xO2ZvcihuPTA7bjxpO24rKylvPW9bci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChvW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpvW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIG9bci5wYXRoW25dXX19ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJFXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJOXCI6ZT1mKGUsdCl9cmV0dXJuIGV9ZnVuY3Rpb24gZyhlLHQscil7aWYoZSYmdCYmciYmci5raW5kKXt2YXIgbixvLGk9ZTtmb3Iobz1yLnBhdGgubGVuZ3RoLTEsbj0wO248bztuKyspXCJ1bmRlZmluZWRcIj09dHlwZW9mIGlbci5wYXRoW25dXSYmKGlbci5wYXRoW25dXT17fSksaT1pW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAoaVtyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6aVtyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmRlbGV0ZSBpW3IucGF0aFtuXV19fX1mdW5jdGlvbiBoKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1mdW5jdGlvbihuKXtyJiYhcihlLHQsbil8fGQoZSx0LG4pfTtsKGUsdCxuKX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImNvbG9yOiBcIitGW2VdLmNvbG9yK1wiOyBmb250LXdlaWdodDogYm9sZFwifWZ1bmN0aW9uIHYoZSl7dmFyIHQ9ZS5raW5kLHI9ZS5wYXRoLG49ZS5saHMsbz1lLnJocyxpPWUuaW5kZXgsYT1lLml0ZW07c3dpdGNoKHQpe2Nhc2VcIkVcIjpyZXR1cm5bci5qb2luKFwiLlwiKSxuLFwi4oaSXCIsb107Y2FzZVwiTlwiOnJldHVybltyLmpvaW4oXCIuXCIpLG9dO2Nhc2VcIkRcIjpyZXR1cm5bci5qb2luKFwiLlwiKV07Y2FzZVwiQVwiOnJldHVybltyLmpvaW4oXCIuXCIpK1wiW1wiK2krXCJdXCIsYV07ZGVmYXVsdDpyZXR1cm5bXX19ZnVuY3Rpb24gYihlLHQscixuKXt2YXIgbz1jKGUsdCk7dHJ5e24/ci5ncm91cENvbGxhcHNlZChcImRpZmZcIik6ci5ncm91cChcImRpZmZcIil9Y2F0Y2goZSl7ci5sb2coXCJkaWZmXCIpfW8/by5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUua2luZCxuPXYoZSk7ci5sb2cuYXBwbHkocixbXCIlYyBcIitGW3RdLnRleHQseSh0KV0uY29uY2F0KFAobikpKX0pOnIubG9nKFwi4oCU4oCUIG5vIGRpZmYg4oCU4oCUXCIpO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgZGlmZiBlbmQg4oCU4oCUIFwiKX19ZnVuY3Rpb24gbShlLHQscixuKXtzd2l0Y2goXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpKXtjYXNlXCJvYmplY3RcIjpyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW25dP2Vbbl0uYXBwbHkoZSxQKHIpKTplW25dO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIGUodCk7ZGVmYXVsdDpyZXR1cm4gZX19ZnVuY3Rpb24gdyhlKXt2YXIgdD1lLnRpbWVzdGFtcCxyPWUuZHVyYXRpb247cmV0dXJuIGZ1bmN0aW9uKGUsbixvKXt2YXIgaT1bXCJhY3Rpb25cIl07cmV0dXJuIGkucHVzaChcIiVjXCIrU3RyaW5nKGUudHlwZSkpLHQmJmkucHVzaChcIiVjQCBcIituKSxyJiZpLnB1c2goXCIlYyhpbiBcIitvLnRvRml4ZWQoMikrXCIgbXMpXCIpLGkuam9pbihcIiBcIil9fWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj10LmxvZ2dlcixuPXQuYWN0aW9uVHJhbnNmb3JtZXIsbz10LnRpdGxlRm9ybWF0dGVyLGk9dm9pZCAwPT09bz93KHQpOm8sYT10LmNvbGxhcHNlZCxmPXQuY29sb3JzLHU9dC5sZXZlbCxsPXQuZGlmZixjPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnRpdGxlRm9ybWF0dGVyO2UuZm9yRWFjaChmdW5jdGlvbihvLHMpe3ZhciBkPW8uc3RhcnRlZCxwPW8uc3RhcnRlZFRpbWUsZz1vLmFjdGlvbixoPW8ucHJldlN0YXRlLHk9by5lcnJvcix2PW8udG9vayx3PW8ubmV4dFN0YXRlLHg9ZVtzKzFdO3gmJih3PXgucHJldlN0YXRlLHY9eC5zdGFydGVkLWQpO3ZhciBTPW4oZyksaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EoZnVuY3Rpb24oKXtyZXR1cm4gd30sZyxvKTphLGo9RChwKSxFPWYudGl0bGU/XCJjb2xvcjogXCIrZi50aXRsZShTKStcIjtcIjpcIlwiLEE9W1wiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiXTtBLnB1c2goRSksdC50aW1lc3RhbXAmJkEucHVzaChcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIiksdC5kdXJhdGlvbiYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKTt2YXIgTz1pKFMsaix2KTt0cnl7az9mLnRpdGxlJiZjP3IuZ3JvdXBDb2xsYXBzZWQuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXBDb2xsYXBzZWQoTyk6Zi50aXRsZSYmYz9yLmdyb3VwLmFwcGx5KHIsW1wiJWMgXCIrT10uY29uY2F0KEEpKTpyLmdyb3VwKE8pfWNhdGNoKGUpe3IubG9nKE8pfXZhciBOPW0odSxTLFtoXSxcInByZXZTdGF0ZVwiKSxQPW0odSxTLFtTXSxcImFjdGlvblwiKSxDPW0odSxTLFt5LGhdLFwiZXJyb3JcIiksRj1tKHUsUyxbd10sXCJuZXh0U3RhdGVcIik7aWYoTilpZihmLnByZXZTdGF0ZSl7dmFyIEw9XCJjb2xvcjogXCIrZi5wcmV2U3RhdGUoaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltOXShcIiVjIHByZXYgc3RhdGVcIixMLGgpfWVsc2UgcltOXShcInByZXYgc3RhdGVcIixoKTtpZihQKWlmKGYuYWN0aW9uKXt2YXIgVD1cImNvbG9yOiBcIitmLmFjdGlvbihTKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW1BdKFwiJWMgYWN0aW9uICAgIFwiLFQsUyl9ZWxzZSByW1BdKFwiYWN0aW9uICAgIFwiLFMpO2lmKHkmJkMpaWYoZi5lcnJvcil7dmFyIE09XCJjb2xvcjogXCIrZi5lcnJvcih5LGgpK1wiOyBmb250LXdlaWdodDogYm9sZDtcIjtyW0NdKFwiJWMgZXJyb3IgICAgIFwiLE0seSl9ZWxzZSByW0NdKFwiZXJyb3IgICAgIFwiLHkpO2lmKEYpaWYoZi5uZXh0U3RhdGUpe3ZhciBfPVwiY29sb3I6IFwiK2YubmV4dFN0YXRlKHcpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbRl0oXCIlYyBuZXh0IHN0YXRlXCIsXyx3KX1lbHNlIHJbRl0oXCJuZXh0IHN0YXRlXCIsdyk7bCYmYihoLHcscixrKTt0cnl7ci5ncm91cEVuZCgpfWNhdGNoKGUpe3IubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpfX0pfWZ1bmN0aW9uIFMoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1PYmplY3QuYXNzaWduKHt9LEwsZSkscj10LmxvZ2dlcixuPXQuc3RhdGVUcmFuc2Zvcm1lcixvPXQuZXJyb3JUcmFuc2Zvcm1lcixpPXQucHJlZGljYXRlLGE9dC5sb2dFcnJvcnMsZj10LmRpZmZQcmVkaWNhdGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHIpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTtpZihlLmdldFN0YXRlJiZlLmRpc3BhdGNoKXJldHVybiBjb25zb2xlLmVycm9yKFwiW3JlZHV4LWxvZ2dlcl0gcmVkdXgtbG9nZ2VyIG5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBwYXNzIGxvZ2dlciBpbnN0YW5jZSBhcyBtaWRkbGV3YXJlOlxcbi8vIExvZ2dlciB3aXRoIGRlZmF1bHQgb3B0aW9uc1xcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxcbiAgcmVkdWNlcixcXG4gIGFwcGx5TWlkZGxld2FyZShsb2dnZXIpXFxuKVxcbi8vIE9yIHlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGxvZ2dlciB3aXRoIGN1c3RvbSBvcHRpb25zIGh0dHA6Ly9iaXQubHkvcmVkdXgtbG9nZ2VyLW9wdGlvbnNcXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xcbiAgLy8gLi4ub3B0aW9uc1xcbn0pO1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTt2YXIgdT1bXTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRTdGF0ZTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGwpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiFpKHIsbCkpcmV0dXJuIGUobCk7dmFyIGM9e307dS5wdXNoKGMpLGMuc3RhcnRlZD1PLm5vdygpLGMuc3RhcnRlZFRpbWU9bmV3IERhdGUsYy5wcmV2U3RhdGU9bihyKCkpLGMuYWN0aW9uPWw7dmFyIHM9dm9pZCAwO2lmKGEpdHJ5e3M9ZShsKX1jYXRjaChlKXtjLmVycm9yPW8oZSl9ZWxzZSBzPWUobCk7Yy50b29rPU8ubm93KCktYy5zdGFydGVkLGMubmV4dFN0YXRlPW4ocigpKTt2YXIgZD10LmRpZmYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZihyLGwpOnQuZGlmZjtpZih4KHUsT2JqZWN0LmFzc2lnbih7fSx0LHtkaWZmOmR9KSksdS5sZW5ndGg9MCxjLmVycm9yKXRocm93IGMuZXJyb3I7cmV0dXJuIHN9fX19dmFyIGssaixFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBBcnJheSh0KzEpLmpvaW4oZSl9LEE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRShcIjBcIix0LWUudG9TdHJpbmcoKS5sZW5ndGgpK2V9LEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZS5nZXRIb3VycygpLDIpK1wiOlwiK0EoZS5nZXRNaW51dGVzKCksMikrXCI6XCIrQShlLmdldFNlY29uZHMoKSwyKStcIi5cIitBKGUuZ2V0TWlsbGlzZWNvbmRzKCksMyl9LE89XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZTpEYXRlLE49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUD1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxyPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylyW3RdPWVbdF07cmV0dXJuIHJ9cmV0dXJuIEFycmF5LmZyb20oZSl9LEM9W107az1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBnbG9iYWw/XCJ1bmRlZmluZWRcIjpOKGdsb2JhbCkpJiZnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGo9ay5EZWVwRGlmZixqJiZDLnB1c2goZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgaiYmay5EZWVwRGlmZj09PWMmJihrLkRlZXBEaWZmPWosaj12b2lkIDApfSksdChuLHIpLHQobyxyKSx0KGksciksdChhLHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse2RpZmY6e3ZhbHVlOmMsZW51bWVyYWJsZTohMH0sb2JzZXJ2YWJsZURpZmY6e3ZhbHVlOmwsZW51bWVyYWJsZTohMH0sYXBwbHlEaWZmOnt2YWx1ZTpoLGVudW1lcmFibGU6ITB9LGFwcGx5Q2hhbmdlOnt2YWx1ZTpkLGVudW1lcmFibGU6ITB9LHJldmVydENoYW5nZTp7dmFsdWU6ZyxlbnVtZXJhYmxlOiEwfSxpc0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBqfSxlbnVtZXJhYmxlOiEwfSxub0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBDJiYoQy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoKX0pLEM9bnVsbCksY30sZW51bWVyYWJsZTohMH19KTt2YXIgRj17RTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkNIQU5HRUQ6XCJ9LE46e2NvbG9yOlwiIzRDQUY1MFwiLHRleHQ6XCJBRERFRDpcIn0sRDp7Y29sb3I6XCIjRjQ0MzM2XCIsdGV4dDpcIkRFTEVURUQ6XCJ9LEE6e2NvbG9yOlwiIzIxOTZGM1wiLHRleHQ6XCJBUlJBWTpcIn19LEw9e2xldmVsOlwibG9nXCIsbG9nZ2VyOmNvbnNvbGUsbG9nRXJyb3JzOiEwLGNvbGxhcHNlZDp2b2lkIDAscHJlZGljYXRlOnZvaWQgMCxkdXJhdGlvbjohMSx0aW1lc3RhbXA6ITAsc3RhdGVUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sYWN0aW9uVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGVycm9yVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNvbG9yczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cImluaGVyaXRcIn0scHJldlN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuXCIjOUU5RTlFXCJ9LGFjdGlvbjpmdW5jdGlvbigpe3JldHVyblwiIzAzQTlGNFwifSxuZXh0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM0Q0FGNTBcIn0sZXJyb3I6ZnVuY3Rpb24oKXtyZXR1cm5cIiNGMjA0MDRcIn19LGRpZmY6ITEsZGlmZlByZWRpY2F0ZTp2b2lkIDAsdHJhbnNmb3JtZXI6dm9pZCAwfSxUPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9ZS5kaXNwYXRjaCxyPWUuZ2V0U3RhdGU7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9TKCkoe2Rpc3BhdGNoOnQsZ2V0U3RhdGU6cn0pOnZvaWQgY29uc29sZS5lcnJvcihcIlxcbltyZWR1eC1sb2dnZXIgdjNdIEJSRUFLSU5HIENIQU5HRVxcbltyZWR1eC1sb2dnZXIgdjNdIFNpbmNlIDMuMC4wIHJlZHV4LWxvZ2dlciBleHBvcnRzIGJ5IGRlZmF1bHQgbG9nZ2VyIHdpdGggZGVmYXVsdCBzZXR0aW5ncy5cXG5bcmVkdXgtbG9nZ2VyIHYzXSBDaGFuZ2VcXG5bcmVkdXgtbG9nZ2VyIHYzXSBpbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5bcmVkdXgtbG9nZ2VyIHYzXSB0b1xcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5cIil9O2UuZGVmYXVsdHM9TCxlLmNyZWF0ZUxvZ2dlcj1TLGUubG9nZ2VyPVQsZS5kZWZhdWx0PVQsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LWxvZ2dlci9kaXN0L3JlZHV4LWxvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB0aHVuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IGlzUHJvbWlzZSBmcm9tICcuL2lzUHJvbWlzZS5qcyc7XG5cbi8qKlxuICogTm90ZSB0byBjb250cmlidXRvcnM6IFBsZWFzZSBhbHNvIHJlbWVtYmVyIHRvIGNoZWNrIGFuZCBtYWtlIHN1cmVcbiAqIHRoYXQgYGluZGV4LmQudHNgIGlzIGFsc28gdXAgdG8gZGF0ZSB3aXRoIHRoZSBpbXBsZW1lbnRhdGlvbiB3aGVuXG4gKiB5b3UgYWRkIG5ldyBmZWF0dXJlcyBvciBtb2RpZnkgZXhpc3Rpbmcgb25lcy5cbiAqL1xuXG4vLyBUaGUgZGVmYXVsdCBhc3luYyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB2YXIgUEVORElORyA9ICdQRU5ESU5HJztcbmV4cG9ydCB2YXIgRlVMRklMTEVEID0gJ0ZVTEZJTExFRCc7XG5leHBvcnQgdmFyIFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbnZhciBkZWZhdWx0VHlwZXMgPSBbUEVORElORywgRlVMRklMTEVELCBSRUpFQ1RFRF07XG5cbi8qKlxuICogRnVuY3Rpb246IHByb21pc2VNaWRkbGV3YXJlXG4gKiBEZXNjcmlwdGlvbjogVGhlIG1haW4gcHJvbWlzZU1pZGRsZXdhcmUgYWNjZXB0cyBhIGNvbmZpZ3VyYXRpb25cbiAqIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvbWlzZU1pZGRsZXdhcmUoKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBQUk9NSVNFX1RZUEVfU1VGRklYRVMgPSBjb25maWcucHJvbWlzZVR5cGVTdWZmaXhlcyB8fCBkZWZhdWx0VHlwZXM7XG4gIHZhciBQUk9NSVNFX1RZUEVfREVMSU1JVEVSID0gY29uZmlnLnByb21pc2VUeXBlRGVsaW1pdGVyIHx8ICdfJztcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IHJlZi5kaXNwYXRjaDtcblxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnN0YW50aWF0ZSB2YXJpYWJsZXMgdG8gaG9sZDpcbiAgICAgICAgICogKDEpIHRoZSBwcm9taXNlXG4gICAgICAgICAqICgyKSB0aGUgZGF0YSBmb3Igb3B0aW1pc3RpYyB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGRhdGEgPSB2b2lkIDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZXJlIGFyZSBtdWx0aXBsZSB3YXlzIHRvIGRpc3BhdGNoIGEgcHJvbWlzZS4gVGhlIGZpcnN0IHN0ZXAgaXMgdG9cbiAgICAgICAgICogZGV0ZXJtaW5lIGlmIHRoZSBwcm9taXNlIGlzIGRlZmluZWQ6XG4gICAgICAgICAqIChhKSBleHBsaWNpdGx5IChhY3Rpb24ucGF5bG9hZC5wcm9taXNlIGlzIHRoZSBwcm9taXNlKVxuICAgICAgICAgKiAoYikgaW1wbGljaXRseSAoYWN0aW9uLnBheWxvYWQgaXMgdGhlIHByb21pc2UpXG4gICAgICAgICAqIChjKSBhcyBhbiBhc3luYyBmdW5jdGlvbiAocmV0dXJucyBhIHByb21pc2Ugd2hlbiBjYWxsZWQpXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBwcm9taXNlIGlzIG5vdCBkZWZpbmVkIGluIG9uZSBvZiB0aGVzZSB0aHJlZSB3YXlzLCB3ZSBkb24ndCBkb1xuICAgICAgICAgKiBhbnl0aGluZyBhbmQgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBtaWRkbGV3YXJlIGNoYWluLlxuICAgICAgICAgKi9cblxuICAgICAgICAvLyBTdGVwIDFhOiBJcyB0aGVyZSBhIHBheWxvYWQ/XG4gICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgIHZhciBQQVlMT0FEID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgICAgICAvLyBTdGVwIDEuMTogSXMgdGhlIHByb21pc2UgaW1wbGljaXRseSBkZWZpbmVkP1xuICAgICAgICAgIGlmIChpc1Byb21pc2UoUEFZTE9BRCkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQQVlMT0FEO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0ZXAgMS4yOiBJcyB0aGUgcHJvbWlzZSBleHBsaWNpdGx5IGRlZmluZWQ/XG4gICAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKFBBWUxPQUQucHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZSA9IFBBWUxPQUQucHJvbWlzZTtcbiAgICAgICAgICAgICAgZGF0YSA9IFBBWUxPQUQuZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCAxLjM6IElzIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IGFuIGFzeW5jIGZ1bmN0aW9uP1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIFBBWUxPQUQgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIFBBWUxPQUQucHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSBQQVlMT0FELnByb21pc2UgPyBQQVlMT0FELnByb21pc2UoKSA6IFBBWUxPQUQoKTtcbiAgICAgICAgICAgICAgICBkYXRhID0gUEFZTE9BRC5wcm9taXNlID8gUEFZTE9BRC5kYXRhIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RlcCAxLjMuMTogSXMgdGhlIHJldHVybiBvZiBhY3Rpb24ucGF5bG9hZCBhIHByb21pc2U/XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Byb21pc2UocHJvbWlzZSkpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBtb3ZlIG9uIHRvIHRoZSBuZXh0IG1pZGRsZXdhcmUuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChfZXh0ZW5kcyh7fSwgYWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByb21pc2VcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBTdGVwIDEuNDogSWYgdGhlcmUncyBubyBwcm9taXNlLCBtb3ZlIG9uIHRvIHRoZSBuZXh0IG1pZGRsZXdhcmUuXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGVwIDFiOiBJZiB0aGVyZSdzIG5vIHBheWxvYWQsIG1vdmUgb24gdG8gdGhlIG5leHQgbWlkZGxld2FyZS5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc3RhbnRpYXRlIGFuZCBkZWZpbmUgY29uc3RhbnRzIGZvcjpcbiAgICAgICAgICogKDEpIHRoZSBhY3Rpb24gdHlwZVxuICAgICAgICAgKiAoMikgdGhlIGFjdGlvbiBtZXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgVFlQRSA9IGFjdGlvbi50eXBlO1xuICAgICAgICB2YXIgTUVUQSA9IGFjdGlvbi5tZXRhO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnN0YW50aWF0ZSBhbmQgZGVmaW5lIGNvbnN0YW50cyBmb3IgdGhlIGFjdGlvbiB0eXBlIHN1ZmZpeGVzLlxuICAgICAgICAgKiBUaGVzZSBhcmUgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgYWN0aW9uIHR5cGUuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfUFJPTUlTRV9UWVBFX1NVRkZJWEUgPSBfc2xpY2VkVG9BcnJheShQUk9NSVNFX1RZUEVfU1VGRklYRVMsIDMpLFxuICAgICAgICAgICAgX1BFTkRJTkcgPSBfUFJPTUlTRV9UWVBFX1NVRkZJWEVbMF0sXG4gICAgICAgICAgICBfRlVMRklMTEVEID0gX1BST01JU0VfVFlQRV9TVUZGSVhFWzFdLFxuICAgICAgICAgICAgX1JFSkVDVEVEID0gX1BST01JU0VfVFlQRV9TVUZGSVhFWzJdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbjogZ2V0QWN0aW9uXG4gICAgICAgICAqIERlc2NyaXB0aW9uOiBUaGlzIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYW5kIHJldHVybnMgYSByZWplY3RlZFxuICAgICAgICAgKiBvciBmdWxmaWxsZWQgYWN0aW9uIG9iamVjdC4gVGhlIGFjdGlvbiBvYmplY3QgaXMgYmFzZWQgb2ZmIHRoZSBGbHV4XG4gICAgICAgICAqIFN0YW5kYXJkIEFjdGlvbiAoRlNBKS5cbiAgICAgICAgICpcbiAgICAgICAgICogR2l2ZW4gYW4gb3JpZ2luYWwgYWN0aW9uIHdpdGggdGhlIHR5cGUgRk9POlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgcmVqZWN0ZWQgb2JqZWN0IG1vZGVsIHdpbGwgYmU6XG4gICAgICAgICAqIHtcbiAgICAgICAgICogICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICogICB0eXBlOiAnRk9PX1JFSkVDVEVEJyxcbiAgICAgICAgICogICBwYXlsb2FkOiAuLi4sXG4gICAgICAgICAqICAgbWV0YTogLi4uIChvcHRpb25hbClcbiAgICAgICAgICogfVxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZnVsZmlsbGVkIG9iamVjdCBtb2RlbCB3aWxsIGJlOlxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgdHlwZTogJ0ZPT19GVUxGSUxMRUQnLFxuICAgICAgICAgKiAgIHBheWxvYWQ6IC4uLixcbiAgICAgICAgICogICBtZXRhOiAuLi4gKG9wdGlvbmFsKVxuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgdmFyIGdldEFjdGlvbiA9IGZ1bmN0aW9uIGdldEFjdGlvbihuZXdQYXlsb2FkLCBpc1JlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICAgIC8vIENvbmNhdGVudGF0ZSB0aGUgdHlwZSBzdHJpbmcgcHJvcGVydHkuXG4gICAgICAgICAgICB0eXBlOiBbVFlQRSwgaXNSZWplY3RlZCA/IF9SRUpFQ1RFRCA6IF9GVUxGSUxMRURdLmpvaW4oUFJPTUlTRV9UWVBFX0RFTElNSVRFUilcblxuICAgICAgICAgIH0sIG5ld1BheWxvYWQgPT09IG51bGwgfHwgdHlwZW9mIG5ld1BheWxvYWQgPT09ICd1bmRlZmluZWQnID8ge30gOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiBuZXdQYXlsb2FkXG4gICAgICAgICAgfSwgTUVUQSAhPT0gdW5kZWZpbmVkID8geyBtZXRhOiBNRVRBIH0gOiB7fSwgaXNSZWplY3RlZCA/IHtcbiAgICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgICAgfSA6IHt9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb246IGhhbmRsZVJlamVjdFxuICAgICAgICAgKiBDYWxsczogZ2V0QWN0aW9uIHRvIGNvbnN0cnVjdCB0aGUgcmVqZWN0ZWQgYWN0aW9uXG4gICAgICAgICAqIERlc2NyaXB0aW9uOiBUaGlzIGZ1bmN0aW9uIGRpc3BhdGNoZXMgdGhlIHJlamVjdGVkIGFjdGlvbiBhbmQgcmV0dXJuc1xuICAgICAgICAgKiB0aGUgb3JpZ2luYWwgRXJyb3Igb2JqZWN0LiBQbGVhc2Ugbm90ZSB0aGUgZGV2ZWxvcGVyIGlzIHJlc3BvbnNpYmxlXG4gICAgICAgICAqIGZvciBjb25zdHJ1Y3RpbmcgYW5kIHRocm93aW5nIGFuIEVycm9yIG9iamVjdC4gVGhlIG1pZGRsZXdhcmUgZG9lcyBub3RcbiAgICAgICAgICogY29uc3RydWN0IGFueSBFcnJvcnMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlUmVqZWN0ID0gZnVuY3Rpb24gaGFuZGxlUmVqZWN0KHJlYXNvbikge1xuICAgICAgICAgIHZhciByZWplY3RlZEFjdGlvbiA9IGdldEFjdGlvbihyZWFzb24sIHRydWUpO1xuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdGVkQWN0aW9uKTtcblxuICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb246IGhhbmRsZUZ1bGZpbGxcbiAgICAgICAgICogQ2FsbHM6IGdldEFjdGlvbiB0byBjb25zdHJ1Y3QgdGhlIGZ1bGxmaWxsZWQgYWN0aW9uXG4gICAgICAgICAqIERlc2NyaXB0aW9uOiBUaGlzIGZ1bmN0aW9uIGRpc3BhdGNoZXMgdGhlIGZ1bGZpbGxlZCBhY3Rpb24gYW5kXG4gICAgICAgICAqIHJldHVybnMgdGhlIHN1Y2Nlc3Mgb2JqZWN0LiBUaGUgc3VjY2VzcyBvYmplY3Qgc2hvdWxkXG4gICAgICAgICAqIGNvbnRhaW4gdGhlIHZhbHVlIGFuZCB0aGUgZGlzcGF0Y2hlZCBhY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlRnVsZmlsbCA9IGZ1bmN0aW9uIGhhbmRsZUZ1bGZpbGwoKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG4gICAgICAgICAgdmFyIHJlc29sdmVkQWN0aW9uID0gZ2V0QWN0aW9uKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgZGlzcGF0Y2gocmVzb2x2ZWRBY3Rpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBhY3Rpb246IHJlc29sdmVkQWN0aW9uIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcnN0LCBkaXNwYXRjaCB0aGUgcGVuZGluZyBhY3Rpb246XG4gICAgICAgICAqIFRoaXMgb2JqZWN0IGRlc2NyaWJlcyB0aGUgcGVuZGluZyBzdGF0ZSBvZiBhIHByb21pc2UgYW5kIHdpbGwgaW5jbHVkZVxuICAgICAgICAgKiBhbnkgZGF0YSAoZm9yIG9wdGltaXN0aWMgdXBkYXRlcykgYW5kL29yIG1ldGEgZnJvbSB0aGUgb3JpZ2luYWwgYWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dChfZXh0ZW5kcyh7XG4gICAgICAgICAgLy8gQ29uY2F0ZW50YXRlIHRoZSB0eXBlIHN0cmluZy5cbiAgICAgICAgICB0eXBlOiBbVFlQRSwgX1BFTkRJTkddLmpvaW4oUFJPTUlTRV9UWVBFX0RFTElNSVRFUilcblxuICAgICAgICB9LCBkYXRhICE9PSB1bmRlZmluZWQgPyB7IHBheWxvYWQ6IGRhdGEgfSA6IHt9LCBNRVRBICE9PSB1bmRlZmluZWQgPyB7IG1ldGE6IE1FVEEgfSA6IHt9KSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlY29uZCwgZGlzcGF0Y2ggYSByZWplY3RlZCBvciBmdWxmaWxsZWQgYWN0aW9uIGFuZCBtb3ZlIG9uIHRvIHRoZVxuICAgICAgICAgKiBuZXh0IG1pZGRsZXdhcmUuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGhhbmRsZUZ1bGZpbGwsIGhhbmRsZVJlamVjdCk7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pc1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qZ2xvYmFsIGRlZmluZTpmYWxzZSAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE3IENyYWlnIENhbXBiZWxsXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogTW91c2V0cmFwIGlzIGEgc2ltcGxlIGtleWJvYXJkIHNob3J0Y3V0IGxpYnJhcnkgZm9yIEphdmFzY3JpcHQgd2l0aFxuICogbm8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKlxuICogQHZlcnNpb24gMS42LjFcbiAqIEB1cmwgY3JhaWcuaXMva2lsbGluZy9taWNlXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8vIENoZWNrIGlmIG1vdXNldHJhcCBpcyB1c2VkIGluc2lkZSBicm93c2VyLCBpZiBub3QsIHJldHVyblxuICAgIGlmICghd2luZG93KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIG9mIHNwZWNpYWwga2V5Y29kZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBrZXlzXG4gICAgICpcbiAgICAgKiBldmVyeXRoaW5nIGluIHRoaXMgZGljdGlvbmFyeSBjYW5ub3QgdXNlIGtleXByZXNzIGV2ZW50c1xuICAgICAqIHNvIGl0IGhhcyB0byBiZSBoZXJlIHRvIG1hcCB0byB0aGUgY29ycmVjdCBrZXljb2RlcyBmb3JcbiAgICAgKiBrZXl1cC9rZXlkb3duIGV2ZW50c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX01BUCA9IHtcbiAgICAgICAgODogJ2JhY2tzcGFjZScsXG4gICAgICAgIDk6ICd0YWInLFxuICAgICAgICAxMzogJ2VudGVyJyxcbiAgICAgICAgMTY6ICdzaGlmdCcsXG4gICAgICAgIDE3OiAnY3RybCcsXG4gICAgICAgIDE4OiAnYWx0JyxcbiAgICAgICAgMjA6ICdjYXBzbG9jaycsXG4gICAgICAgIDI3OiAnZXNjJyxcbiAgICAgICAgMzI6ICdzcGFjZScsXG4gICAgICAgIDMzOiAncGFnZXVwJyxcbiAgICAgICAgMzQ6ICdwYWdlZG93bicsXG4gICAgICAgIDM1OiAnZW5kJyxcbiAgICAgICAgMzY6ICdob21lJyxcbiAgICAgICAgMzc6ICdsZWZ0JyxcbiAgICAgICAgMzg6ICd1cCcsXG4gICAgICAgIDM5OiAncmlnaHQnLFxuICAgICAgICA0MDogJ2Rvd24nLFxuICAgICAgICA0NTogJ2lucycsXG4gICAgICAgIDQ2OiAnZGVsJyxcbiAgICAgICAgOTE6ICdtZXRhJyxcbiAgICAgICAgOTM6ICdtZXRhJyxcbiAgICAgICAgMjI0OiAnbWV0YSdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBmb3Igc3BlY2lhbCBjaGFyYWN0ZXJzIHNvIHRoZXkgY2FuIHN1cHBvcnRcbiAgICAgKlxuICAgICAqIHRoaXMgZGljdGlvbmFyeSBpcyBvbmx5IHVzZWQgaW5jYXNlIHlvdSB3YW50IHRvIGJpbmQgYVxuICAgICAqIGtleXVwIG9yIGtleWRvd24gZXZlbnQgdG8gb25lIG9mIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgICAgMTA2OiAnKicsXG4gICAgICAgIDEwNzogJysnLFxuICAgICAgICAxMDk6ICctJyxcbiAgICAgICAgMTEwOiAnLicsXG4gICAgICAgIDExMSA6ICcvJyxcbiAgICAgICAgMTg2OiAnOycsXG4gICAgICAgIDE4NzogJz0nLFxuICAgICAgICAxODg6ICcsJyxcbiAgICAgICAgMTg5OiAnLScsXG4gICAgICAgIDE5MDogJy4nLFxuICAgICAgICAxOTE6ICcvJyxcbiAgICAgICAgMTkyOiAnYCcsXG4gICAgICAgIDIxOTogJ1snLFxuICAgICAgICAyMjA6ICdcXFxcJyxcbiAgICAgICAgMjIxOiAnXScsXG4gICAgICAgIDIyMjogJ1xcJydcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIG1hcHBpbmcgb2Yga2V5cyB0aGF0IHJlcXVpcmUgc2hpZnQgb24gYSBVUyBrZXlwYWRcbiAgICAgKiBiYWNrIHRvIHRoZSBub24gc2hpZnQgZXF1aXZlbGVudHNcbiAgICAgKlxuICAgICAqIHRoaXMgaXMgc28geW91IGNhbiB1c2Uga2V5dXAgZXZlbnRzIHdpdGggdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogbm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IHdvcmsgcmVsaWFibHkgb24gVVMga2V5Ym9hcmRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgICAnfic6ICdgJyxcbiAgICAgICAgJyEnOiAnMScsXG4gICAgICAgICdAJzogJzInLFxuICAgICAgICAnIyc6ICczJyxcbiAgICAgICAgJyQnOiAnNCcsXG4gICAgICAgICclJzogJzUnLFxuICAgICAgICAnXic6ICc2JyxcbiAgICAgICAgJyYnOiAnNycsXG4gICAgICAgICcqJzogJzgnLFxuICAgICAgICAnKCc6ICc5JyxcbiAgICAgICAgJyknOiAnMCcsXG4gICAgICAgICdfJzogJy0nLFxuICAgICAgICAnKyc6ICc9JyxcbiAgICAgICAgJzonOiAnOycsXG4gICAgICAgICdcXFwiJzogJ1xcJycsXG4gICAgICAgICc8JzogJywnLFxuICAgICAgICAnPic6ICcuJyxcbiAgICAgICAgJz8nOiAnLycsXG4gICAgICAgICd8JzogJ1xcXFwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBsaXN0IG9mIHNwZWNpYWwgc3RyaW5ncyB5b3UgY2FuIHVzZSB0byBtYXBcbiAgICAgKiB0byBtb2RpZmllciBrZXlzIHdoZW4geW91IHNwZWNpZnkgeW91ciBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TUEVDSUFMX0FMSUFTRVMgPSB7XG4gICAgICAgICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgJ2NvbW1hbmQnOiAnbWV0YScsXG4gICAgICAgICdyZXR1cm4nOiAnZW50ZXInLFxuICAgICAgICAnZXNjYXBlJzogJ2VzYycsXG4gICAgICAgICdwbHVzJzogJysnLFxuICAgICAgICAnbW9kJzogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyAnbWV0YScgOiAnY3RybCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIGZsaXBwZWQgdmVyc2lvbiBvZiBfTUFQIGZyb20gYWJvdmVcbiAgICAgKiBuZWVkZWQgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIHVzZSBrZXlwcmVzcyBvciBub3Qgd2hlbiBubyBhY3Rpb25cbiAgICAgKiBpcyBzcGVjaWZpZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHZhciBfUkVWRVJTRV9NQVA7XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdGhlIGYga2V5cywgZjEgdG8gZjE5IGFuZCBhZGQgdGhlbSB0byB0aGUgbWFwXG4gICAgICogcHJvZ3JhbWF0aWNhbGx5XG4gICAgICovXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCAyMDsgKytpKSB7XG4gICAgICAgIF9NQVBbMTExICsgaV0gPSAnZicgKyBpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0byBtYXAgbnVtYmVycyBvbiB0aGUgbnVtZXJpYyBrZXlwYWRcbiAgICAgKi9cbiAgICBmb3IgKGkgPSAwOyBpIDw9IDk7ICsraSkge1xuXG4gICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gdXNlIGEgc3RyaW5nIGNhdXNlIG90aGVyd2lzZSBzaW5jZSAwIGlzIGZhbHNleVxuICAgICAgICAvLyBtb3VzZXRyYXAgd2lsbCBuZXZlciBmaXJlIGZvciBudW1wYWQgMCBwcmVzc2VkIGFzIHBhcnQgb2YgYSBrZXlkb3duXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICAvL1xuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvbW91c2V0cmFwL3B1bGwvMjU4XG4gICAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcm9zcyBicm93c2VyIGFkZCBldmVudCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRG9jdW1lbnR9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgdGhlIGV2ZW50IGFuZCByZXR1cm5zIHRoZSBrZXkgY2hhcmFjdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSkge1xuXG4gICAgICAgIC8vIGZvciBrZXlwcmVzcyBldmVudHMgd2Ugc2hvdWxkIHJldHVybiB0aGUgY2hhcmFjdGVyIGFzIGlzXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgbm90IHByZXNzZWQgdGhlbiBpdCBpcyBzYWZlIHRvIGFzc3VtZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSB3YW50IHRoZSBjaGFyYWN0ZXIgdG8gYmUgbG93ZXJjYXNlLiAgdGhpcyBtZWFucyBpZlxuICAgICAgICAgICAgLy8geW91IGFjY2lkZW50YWxseSBoYXZlIGNhcHMgbG9jayBvbiB0aGVuIHlvdXIga2V5IGJpbmRpbmdzXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRpbnVlIHRvIHdvcmtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgb25seSBzaWRlIGVmZmVjdCB0aGF0IG1pZ2h0IG5vdCBiZSBkZXNpcmVkIGlzIGlmIHlvdVxuICAgICAgICAgICAgLy8gYmluZCBzb21ldGhpbmcgbGlrZSAnQScgY2F1c2UgeW91IHdhbnQgdG8gdHJpZ2dlciBhblxuICAgICAgICAgICAgLy8gZXZlbnQgd2hlbiBjYXBpdGFsIEEgaXMgcHJlc3NlZCBjYXBzIGxvY2sgd2lsbCBubyBsb25nZXJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50LiAgc2hpZnQrYSB3aWxsIHRob3VnaC5cbiAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIG5vbiBrZXlwcmVzcyBldmVudHMgdGhlIHNwZWNpYWwgbWFwcyBhcmUgbmVlZGVkXG4gICAgICAgIGlmIChfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfS0VZQ09ERV9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpdCBpcyBub3QgaW4gdGhlIHNwZWNpYWwgbWFwXG5cbiAgICAgICAgLy8gd2l0aCBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgdGhlIGNoYXJhY3RlciBzZWVtcyB0byBhbHdheXNcbiAgICAgICAgLy8gY29tZSBpbiBhcyBhbiB1cHBlcmNhc2UgY2hhcmFjdGVyIHdoZXRoZXIgeW91IGFyZSBwcmVzc2luZyBzaGlmdFxuICAgICAgICAvLyBvciBub3QuICB3ZSBzaG91bGQgbWFrZSBzdXJlIGl0IGlzIGFsd2F5cyBsb3dlcmNhc2UgZm9yIGNvbXBhcmlzb25zXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMxXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMxLCBtb2RpZmllcnMyKSB7XG4gICAgICAgIHJldHVybiBtb2RpZmllcnMxLnNvcnQoKS5qb2luKCcsJykgPT09IG1vZGlmaWVyczIuc29ydCgpLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIGtleSBldmVudCBhbmQgZmlndXJlcyBvdXQgd2hhdCB0aGUgbW9kaWZpZXJzIGFyZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXZlbnRNb2RpZmllcnMoZSkge1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnYWx0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnY3RybCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ21ldGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RpZmllcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJldmVudHMgZGVmYXVsdCBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHJldmVudERlZmF1bHQoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHN0b3BzIHByb3BvZ2F0aW9uIGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBpZiB0aGUga2V5Y29kZSBzcGVjaWZpZWQgaXMgYSBtb2RpZmllciBrZXkgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzTW9kaWZpZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NoaWZ0JyB8fCBrZXkgPT0gJ2N0cmwnIHx8IGtleSA9PSAnYWx0JyB8fCBrZXkgPT0gJ21ldGEnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldmVyc2VzIHRoZSBtYXAgbG9va3VwIHNvIHRoYXQgd2UgY2FuIGxvb2sgZm9yIHNwZWNpZmljIGtleXNcbiAgICAgKiB0byBzZWUgd2hhdCBjYW4gYW5kIGNhbid0IHVzZSBrZXlwcmVzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRSZXZlcnNlTWFwKCkge1xuICAgICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX01BUCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcHVsbCBvdXQgdGhlIG51bWVyaWMga2V5cGFkIGZyb20gaGVyZSBjYXVzZSBrZXlwcmVzcyBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBiZSBhYmxlIHRvIGRldGVjdCB0aGUga2V5cyBmcm9tIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfTUFQLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfUkVWRVJTRV9NQVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcGlja3MgdGhlIGJlc3QgYWN0aW9uIGJhc2VkIG9uIHRoZSBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBjaGFyYWN0ZXIgZm9yIGtleVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIHBhc3NlZCBpblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKSB7XG5cbiAgICAgICAgLy8gaWYgbm8gYWN0aW9uIHdhcyBwaWNrZWQgaW4gd2Ugc2hvdWxkIHRyeSB0byBwaWNrIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCB3ZSB0aGluayB3b3VsZCB3b3JrIGJlc3QgZm9yIHRoaXMga2V5XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBfZ2V0UmV2ZXJzZU1hcCgpW2tleV0gPyAna2V5ZG93bicgOiAna2V5cHJlc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBkb24ndCB3b3JrIGFzIGV4cGVjdGVkIHdpdGgga2V5cHJlc3MsXG4gICAgICAgIC8vIHN3aXRjaCB0byBrZXlkb3duXG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAna2V5ZG93bic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGZyb20gYSBzdHJpbmcga2V5IGNvbWJpbmF0aW9uIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGxpa2UgXCJjb21tYW5kK3NoaWZ0K2xcIlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbikge1xuICAgICAgICBpZiAoY29tYmluYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmV0dXJuIFsnKyddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgJytwbHVzJyk7XG4gICAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdCgnKycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaW5mbyBmb3IgYSBzcGVjaWZpYyBrZXkgY29tYmluYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24ga2V5IGNvbWJpbmF0aW9uIChcImNvbW1hbmQrc1wiIG9yIFwiYVwiIG9yIFwiKlwiKVxuICAgICAqIEBwYXJhbSAge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbikge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICAvLyB0YWtlIHRoZSBrZXlzIGZyb20gdGhpcyBwYXR0ZXJuIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIGFjdHVhbFxuICAgICAgICAvLyBwYXR0ZXJuIGlzIGFsbCBhYm91dFxuICAgICAgICBrZXlzID0gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGtleSBuYW1lc1xuICAgICAgICAgICAgaWYgKF9TUEVDSUFMX0FMSUFTRVNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TUEVDSUFMX0FMSUFTRVNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBub3QgYSBrZXlwcmVzcyBldmVudCB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gYmUgc21hcnQgYWJvdXQgdXNpbmcgc2hpZnQga2V5c1xuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG9ubHkgd29yayBmb3IgVVMga2V5Ym9hcmRzIGhvd2V2ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9ICdrZXlwcmVzcycgJiYgX1NISUZUX01BUFtrZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NISUZUX01BUFtrZXldO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdzaGlmdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGtleSBpcyBhIG1vZGlmaWVyIHRoZW4gYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG1vZGlmaWVyc1xuICAgICAgICAgICAgaWYgKF9pc01vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGtleSBjb21iaW5hdGlvbiBpc1xuICAgICAgICAvLyB3ZSB3aWxsIHRyeSB0byBwaWNrIHRoZSBiZXN0IGV2ZW50IGZvciBpdFxuICAgICAgICBhY3Rpb24gPSBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9iZWxvbmdzVG8oZWxlbWVudCwgYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JlbG9uZ3NUbyhlbGVtZW50LnBhcmVudE5vZGUsIGFuY2VzdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIE1vdXNldHJhcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGVsZW1lbnQgdG8gYXR0YWNoIGtleSBldmVudHMgdG9cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiBhbGwgdGhlIGNhbGxiYWNrcyBzZXR1cCB2aWEgTW91c2V0cmFwLmJpbmQoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRpcmVjdCBtYXAgb2Ygc3RyaW5nIGNvbWJpbmF0aW9ucyB0byBjYWxsYmFja3MgdXNlZCBmb3IgdHJpZ2dlcigpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICoga2VlcHMgdHJhY2sgb2Ygd2hhdCBsZXZlbCBlYWNoIHNlcXVlbmNlIGlzIGF0IHNpbmNlIG11bHRpcGxlXG4gICAgICAgICAqIHNlcXVlbmNlcyBjYW4gc3RhcnQgb3V0IHdpdGggdGhlIHNhbWUgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfc2VxdWVuY2VMZXZlbHMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdmFyaWFibGUgdG8gc3RvcmUgdGhlIHNldFRpbWVvdXQgY2FsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVsbHxudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3Jlc2V0VGltZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXl1cFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5cHJlc3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX2lnbm9yZU5leHRLZXlwcmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhcmUgd2UgY3VycmVudGx5IGluc2lkZSBvZiBhIHNlcXVlbmNlP1xuICAgICAgICAgKiB0eXBlIG9mIGFjdGlvbiAoXCJrZXl1cFwiIG9yIFwia2V5ZG93blwiIG9yIFwia2V5cHJlc3NcIikgb3IgZmFsc2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVzZXRzIGFsbCBzZXF1ZW5jZSBjb3VudGVycyBleGNlcHQgZm9yIHRoZSBvbmVzIHBhc3NlZCBpblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZG9Ob3RSZXNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCkge1xuICAgICAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG5cbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIF9zZXF1ZW5jZUxldmVscykge1xuICAgICAgICAgICAgICAgIGlmIChkb05vdFJlc2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VxdWVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVTZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZmluZHMgYWxsIGNhbGxiYWNrcyB0aGF0IG1hdGNoIGJhc2VkIG9uIHRoZSBrZXljb2RlLCBtb2RpZmllcnMsXG4gICAgICAgICAqIGFuZCBhY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudHxPYmplY3R9IGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHRoZSBzZXF1ZW5jZSB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlLCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2s7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGUudHlwZTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGV2ZW50cyByZWxhdGVkIHRvIHRoaXMga2V5Y29kZVxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXkgaXMgY29taW5nIHVwIG9uIGl0cyBvd24gd2Ugc2hvdWxkIGFsbG93IGl0XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09ICdrZXl1cCcgJiYgX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA9IFtjaGFyYWN0ZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGtleSB0aGF0IHdhcyBwcmVzc2VkXG4gICAgICAgICAgICAvLyBhbmQgc2VlIGlmIGFueSBvZiB0aGVtIG1hdGNoXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgYSBzZXF1ZW5jZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQsIGJ1dCB0aGlzIGlzIGEgc2VxdWVuY2UgYXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgd3JvbmcgbGV2ZWwgdGhlbiBtb3ZlIG9udG8gdGhlIG5leHQgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGFjdGlvbiB3ZSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBtYXRjaCB0aGUgYWN0aW9uIHdlIGdvdFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd2Ugc2hvdWxkIGtlZXAgZ29pbmdcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEga2V5cHJlc3MgZXZlbnQgYW5kIHRoZSBtZXRhIGtleSBhbmQgY29udHJvbCBrZXlcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHByZXNzZWQgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gb25seSBsb29rIGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGNoYXJhY3Rlciwgb3RoZXJ3aXNlIGNoZWNrIHRoZSBtb2RpZmllcnMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gY2hyb21lIHdpbGwgbm90IGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIHNhZmFyaSB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIG1ldGErc2hpZnQgaXMgZG93blxuICAgICAgICAgICAgICAgIC8vIGZpcmVmb3ggd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSkgfHwgX21vZGlmaWVyc01hdGNoKG1vZGlmaWVycywgY2FsbGJhY2subW9kaWZpZXJzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4geW91IGJpbmQgYSBjb21iaW5hdGlvbiBvciBzZXF1ZW5jZSBhIHNlY29uZCB0aW1lIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZS4gIGlmIGEgc2VxdWVuY2VOYW1lIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbWJpbmF0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGlzIGNhbGwgaXQgZG9lcyBqdXN0IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRvZG8gbWFrZSBkZWxldGluZyBpdHMgb3duIG1ldGhvZD9cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUNvbWJvID0gIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5jb21ibyA9PSBjb21iaW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVDb21ibyB8fCBkZWxldGVTZXF1ZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdHVhbGx5IGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiB5b3VyIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgdGhpcyB3aWxsIHVzZSB0aGUganF1ZXJ5XG4gICAgICAgICAqIGNvbnZlbnRpb24gLSBwcmV2ZW50IGRlZmF1bHQgYW5kIHN0b3AgcHJvcG9nYXRpb24gb24gdGhlIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZXZlbnQgc2hvdWxkIG5vdCBoYXBwZW4gc3RvcCBoZXJlXG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9wQ2FsbGJhY2soZSwgZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LCBjb21ibywgc2VxdWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soZSwgY29tYm8pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgICAgICAgICBfc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBjaGFyYWN0ZXIga2V5IGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSk7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBkb05vdFJlc2V0ID0ge307XG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhMZXZlbCBmb3Igc2VxdWVuY2VzIHNvIHdlIGNhbiBvbmx5IGV4ZWN1dGUgdGhlIGxvbmdlc3QgY2FsbGJhY2sgc2VxdWVuY2VcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaV0ubGV2ZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG1hdGNoaW5nIGNhbGxiYWNrcyBmb3IgdGhpcyBrZXkgZXZlbnRcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpcmUgZm9yIGFsbCBzZXF1ZW5jZSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlY2F1c2UgaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgc3VjaCBhcyBcImcgaVwiIGFuZCBcImcgdFwiIHRoZXkgYm90aCBuZWVkIHRvIGZpcmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZm9yIG1hdGNoaW5nIGcgY2F1c2Ugb3RoZXJ3aXNlIHlvdSBjYW4gb25seSBldmVyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdGhlIGZpcnN0IG9uZVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBmaXJlIGNhbGxiYWNrcyBmb3IgdGhlIG1heExldmVsIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gc3Vic2VxdWVuY2VzIGZyb20gYWxzbyBmaXJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgJ2Egb3B0aW9uIGInIHNob3VsZCBub3QgY2F1c2UgJ29wdGlvbiBiJyB0byBmaXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gdGhvdWdoICdvcHRpb24gYicgaXMgcGFydCBvZiB0aGUgb3RoZXIgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IHNlcXVlbmNlcyB0aGF0IGRvIG5vdCBtYXRjaCBoZXJlIHdpbGwgYmUgZGlzY2FyZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlbG93IGJ5IHRoZSBfcmVzZXRTZXF1ZW5jZXMgY2FsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLmxldmVsICE9IG1heExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSBsaXN0IG9mIHdoaWNoIHNlcXVlbmNlcyB3ZXJlIG1hdGNoZXMgZm9yIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2ldLnNlcV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvLCBjYWxsYmFja3NbaV0uc2VxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2VyZSBubyBzZXF1ZW5jZSBtYXRjaGVzIGJ1dCB3ZSBhcmUgc3RpbGwgaGVyZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgbWVhbnMgdGhpcyBpcyBhIHJlZ3VsYXIgbWF0Y2ggc28gd2Ugc2hvdWxkIGZpcmUgdGhhdFxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrc1tpXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2ldLmNvbWJvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBrZXkgeW91IHByZXNzZWQgbWF0Y2hlcyB0aGUgdHlwZSBvZiBzZXF1ZW5jZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBiZWluZyBhIG1vZGlmaWVyIChpZSBcImtleXVwXCIgb3IgXCJrZXlwcmVzc1wiKSB0aGVuIHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHNlcXVlbmNlcyB0aGF0IHdlcmUgbm90IG1hdGNoZWQgYnkgdGhpcyBldmVudFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc28sIGZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGUgc2VxdWVuY2UgXCJoIGEgdFwiIGFuZCB5b3VcbiAgICAgICAgICAgIC8vIHR5cGUgXCJoIGUgYSByIHRcIiBpdCBkb2VzIG5vdCBtYXRjaC4gIGluIHRoaXMgY2FzZSB0aGUgXCJlXCIgd2lsbFxuICAgICAgICAgICAgLy8gY2F1c2UgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbW9kaWZpZXIga2V5cyBhcmUgaWdub3JlZCBiZWNhdXNlIHlvdSBjYW4gaGF2ZSBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0aGF0IGNvbnRhaW5zIG1vZGlmaWVycyBzdWNoIGFzIFwiZW50ZXIgY3RybCtzcGFjZVwiIGFuZCBpbiBtb3N0XG4gICAgICAgICAgICAvLyBjYXNlcyB0aGUgbW9kaWZpZXIga2V5IHdpbGwgYmUgcHJlc3NlZCBiZWZvcmUgdGhlIG5leHQga2V5XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gYWxzbyBpZiB5b3UgaGF2ZSBhIHNlcXVlbmNlIHN1Y2ggYXMgXCJjdHJsK2IgYVwiIHRoZW4gcHJlc3NpbmcgdGhlXG4gICAgICAgICAgICAvLyBcImJcIiBrZXkgd2lsbCB0cmlnZ2VyIGEgXCJrZXlwcmVzc1wiIGFuZCBhIFwia2V5ZG93blwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIFwia2V5ZG93blwiIGlzIGV4cGVjdGVkIHdoZW4gdGhlcmUgaXMgYSBtb2RpZmllciwgYnV0IHRoZVxuICAgICAgICAgICAgLy8gXCJrZXlwcmVzc1wiIGVuZHMgdXAgbWF0Y2hpbmcgdGhlIF9uZXh0RXhwZWN0ZWRBY3Rpb24gc2luY2UgaXQgb2NjdXJzXG4gICAgICAgICAgICAvLyBhZnRlciBhbmQgdGhhdCBjYXVzZXMgdGhlIHNlcXVlbmNlIHRvIHJlc2V0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gd2UgaWdub3JlIGtleXByZXNzZXMgaW4gYSBzZXF1ZW5jZSB0aGF0IGRpcmVjdGx5IGZvbGxvdyBhIGtleWRvd25cbiAgICAgICAgICAgIC8vIGZvciB0aGUgc2FtZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHZhciBpZ25vcmVUaGlzS2V5cHJlc3MgPSBlLnR5cGUgPT0gJ2tleXByZXNzJyAmJiBfaWdub3JlTmV4dEtleXByZXNzO1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrICYmIGUudHlwZSA9PSAna2V5ZG93bic7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhbmRsZXMgYSBrZXlkb3duIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2hhbmRsZUtleUV2ZW50KGUpIHtcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGUud2hpY2ggZm9yIGtleSBldmVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjg1NjI3L2phdmFzY3JpcHQta2V5Y29kZS12cy1jaGFyY29kZS11dHRlci1jb25mdXNpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBlLndoaWNoID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcblxuICAgICAgICAgICAgLy8gbm8gY2hhcmFjdGVyIGZvdW5kIHRoZW4gc3RvcFxuICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5lZWQgdG8gdXNlID09PSBmb3IgdGhlIGNoYXJhY3RlciBjaGVjayBiZWNhdXNlIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIDBcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2tleXVwJyAmJiBfaWdub3JlTmV4dEtleXVwID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmhhbmRsZUtleShjaGFyYWN0ZXIsIF9ldmVudE1vZGlmaWVycyhlKSwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2FsbGVkIHRvIHNldCBhIDEgc2Vjb25kIHRpbWVvdXQgb24gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiB0aGlzIGlzIHNvIGFmdGVyIGVhY2gga2V5IHByZXNzIGluIHRoZSBzZXF1ZW5jZSB5b3UgaGF2ZSAxIHNlY29uZFxuICAgICAgICAgKiB0byBwcmVzcyB0aGUgbmV4dCBrZXkgYmVmb3JlIHlvdSBoYXZlIHRvIHN0YXJ0IG92ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfcmVzZXRUaW1lcik7XG4gICAgICAgICAgICBfcmVzZXRUaW1lciA9IHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIGtleSBzZXF1ZW5jZSB0byBhbiBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYm8gLSBjb21ibyBzcGVjaWZpZWQgaW4gYmluZCBjYWxsXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGtleXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTZXF1ZW5jZShjb21ibywga2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuXG4gICAgICAgICAgICAvLyBzdGFydCBvZmYgYnkgYWRkaW5nIGEgc2VxdWVuY2UgbGV2ZWwgcmVjb3JkIGZvciB0aGlzIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICAvLyBhbmQgc2V0dGluZyB0aGUgbGV2ZWwgdG8gMFxuICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbGJhY2sgdG8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlIGxldmVsIGZvciB0aGlzIHNlcXVlbmNlIGFuZCByZXNldFxuICAgICAgICAgICAgICogYWxsIG90aGVyIHNlcXVlbmNlcyB0aGF0IHdlcmUgYWN0aXZlXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5leHRBY3Rpb25cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2luY3JlYXNlU2VxdWVuY2UobmV4dEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IG5leHRBY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VUaW1lcigpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd3JhcHMgdGhlIHNwZWNpZmllZCBjYWxsYmFjayBpbnNpZGUgb2YgYW5vdGhlciBmdW5jdGlvbiBpbiBvcmRlclxuICAgICAgICAgICAgICogdG8gcmVzZXQgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGFzIHNvb24gYXMgdGhpcyBzZXF1ZW5jZSBpcyBkb25lXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2FsbGJhY2tBbmRSZXNldChlKSB7XG4gICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGlnbm9yZSB0aGUgbmV4dCBrZXkgdXAgaWYgdGhlIGFjdGlvbiBpcyBrZXkgZG93blxuICAgICAgICAgICAgICAgIC8vIG9yIGtleXByZXNzLiAgdGhpcyBpcyBzbyBpZiB5b3UgZmluaXNoIGEgc2VxdWVuY2UgYW5kXG4gICAgICAgICAgICAgICAgLy8gcmVsZWFzZSB0aGUga2V5IHRoZSBmaW5hbCBrZXkgd2lsbCBub3QgdHJpZ2dlciBhIGtleXVwXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ2tleXVwJykge1xuICAgICAgICAgICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZWlyZCByYWNlIGNvbmRpdGlvbiBpZiBhIHNlcXVlbmNlIGVuZHMgd2l0aCB0aGUga2V5XG4gICAgICAgICAgICAgICAgLy8gYW5vdGhlciBzZXF1ZW5jZSBiZWdpbnMgd2l0aFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoX3Jlc2V0U2VxdWVuY2VzLCAxMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzIG9uZSBhdCBhIHRpbWUgYW5kIGJpbmQgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBmdW5jdGlvbi4gIGZvciBhbnkga2V5IGxlYWRpbmcgdXAgdG8gdGhlIGZpbmFsIG9uZSBpdCBzaG91bGRcbiAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBzZXF1ZW5jZS4gYWZ0ZXIgdGhlIGZpbmFsLCBpdCBzaG91bGQgcmVzZXQgYWxsIHNlcXVlbmNlc1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlmIGFuIGFjdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsIGJpbmQgY2FsbCB0aGVuIHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gYmUgdXNlZCB0aHJvdWdob3V0LiAgb3RoZXJ3aXNlIHdlIHdpbGwgcGFzcyB0aGUgYWN0aW9uIHRoYXQgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IGtleSBpbiB0aGUgc2VxdWVuY2Ugc2hvdWxkIG1hdGNoLiAgdGhpcyBhbGxvd3MgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdG8gbWl4IGFuZCBtYXRjaCBrZXlwcmVzcyBhbmQga2V5ZG93biBldmVudHMgZGVwZW5kaW5nIG9uIHdoaWNoXG4gICAgICAgICAgICAvLyBvbmVzIGFyZSBiZXR0ZXIgc3VpdGVkIHRvIHRoZSBrZXkgcHJvdmlkZWRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsID0gaSArIDEgPT09IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ2FsbGJhY2sgPSBpc0ZpbmFsID8gX2NhbGxiYWNrQW5kUmVzZXQgOiBfaW5jcmVhc2VTZXF1ZW5jZShhY3Rpb24gfHwgX2dldEtleUluZm8oa2V5c1tpICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpXSwgd3JhcHBlZENhbGxiYWNrLCBhY3Rpb24sIGNvbWJvLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBhIHNpbmdsZSBrZXlib2FyZCBjb21iaW5hdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBzZXF1ZW5jZU5hbWUgLSBuYW1lIG9mIHNlcXVlbmNlIGlmIHBhcnQgb2Ygc2VxdWVuY2VcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbCAtIHdoYXQgcGFydCBvZiB0aGUgc2VxdWVuY2UgdGhlIGNvbW1hbmQgaXNcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2JpbmRTaW5nbGUoY29tYmluYXRpb24sIGNhbGxiYWNrLCBhY3Rpb24sIHNlcXVlbmNlTmFtZSwgbGV2ZWwpIHtcblxuICAgICAgICAgICAgLy8gc3RvcmUgYSBkaXJlY3QgbWFwcGVkIHJlZmVyZW5jZSBmb3IgdXNlIHdpdGggTW91c2V0cmFwLnRyaWdnZXJcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtjb21iaW5hdGlvbiArICc6JyArIGFjdGlvbl0gPSBjYWxsYmFjaztcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIG11bHRpcGxlIHNwYWNlcyBpbiBhIHJvdyBiZWNvbWUgYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBjb21iaW5hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgdmFyIGluZm87XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgcGF0dGVybiBpcyBhIHNlcXVlbmNlIG9mIGtleXMgdGhlbiBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgICAgICAgICAgLy8gdG8gcmVwcm9jZXNzIGVhY2ggcGF0dGVybiBvbmUga2V5IGF0IGEgdGltZVxuICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmZvID0gX2dldEtleUluZm8oY29tYmluYXRpb24sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbml0aWFsaXplIGFycmF5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIC8vIGEgY2FsbGJhY2sgaXMgYWRkZWQgZm9yIHRoaXMga2V5XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldID0gc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSB8fCBbXTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGV4aXN0aW5nIG1hdGNoIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgX2dldE1hdGNoZXMoaW5mby5rZXksIGluZm8ubW9kaWZpZXJzLCB7dHlwZTogaW5mby5hY3Rpb259LCBzZXF1ZW5jZU5hbWUsIGNvbWJpbmF0aW9uLCBsZXZlbCk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGlzIGNhbGwgYmFjayB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgc2VxdWVuY2UgcHV0IGl0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIC8vIGlmIG5vdCBwdXQgaXQgYXQgdGhlIGVuZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdGhlIHdheSB0aGVzZSBhcmUgcHJvY2Vzc2VkIGV4cGVjdHNcbiAgICAgICAgICAgIC8vIHRoZSBzZXF1ZW5jZSBvbmVzIHRvIGNvbWUgZmlyc3RcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV1bc2VxdWVuY2VOYW1lID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogaW5mby5tb2RpZmllcnMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpbmZvLmFjdGlvbixcbiAgICAgICAgICAgICAgICBzZXE6IHNlcXVlbmNlTmFtZSxcbiAgICAgICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiaW5kcyBtdWx0aXBsZSBjb21iaW5hdGlvbnMgdG8gdGhlIHNhbWUgY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29tYmluYXRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZSA9IGZ1bmN0aW9uKGNvbWJpbmF0aW9ucywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShjb21iaW5hdGlvbnNbaV0sIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN0YXJ0IVxuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXByZXNzJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlkb3duJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXl1cCcsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiBjYW4gYmUgYSBzaW5nbGUga2V5LCBhIGNvbWJpbmF0aW9uIG9mIGtleXMgc2VwYXJhdGVkIHdpdGggKyxcbiAgICAgKiBhbiBhcnJheSBvZiBrZXlzLCBvciBhIHNlcXVlbmNlIG9mIGtleXMgc2VwYXJhdGVkIGJ5IHNwYWNlc1xuICAgICAqXG4gICAgICogYmUgc3VyZSB0byBsaXN0IHRoZSBtb2RpZmllciBrZXlzIGZpcnN0IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZVxuICAgICAqIGNvcnJlY3Qga2V5IGVuZHMgdXAgZ2V0dGluZyBib3VuZCAodGhlIGxhc3Qga2V5IGluIHRoZSBwYXR0ZXJuKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uIC0gJ2tleXByZXNzJywgJ2tleWRvd24nLCBvciAna2V5dXAnXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXlzID0ga2V5cyBpbnN0YW5jZW9mIEFycmF5ID8ga2V5cyA6IFtrZXlzXTtcbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB1bmJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogdGhlIHVuYmluZGluZyBzZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGtleSBjb21ib1xuICAgICAqIHRvIGFuIGVtcHR5IGZ1bmN0aW9uIGFuZCBkZWxldGVzIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiB0aGVcbiAgICAgKiBfZGlyZWN0TWFwIGRpY3QuXG4gICAgICpcbiAgICAgKiBUT0RPOiBhY3R1YWxseSByZW1vdmUgdGhpcyBmcm9tIHRoZSBfY2FsbGJhY2tzIGRpY3Rpb25hcnkgaW5zdGVhZFxuICAgICAqIG9mIGJpbmRpbmcgYW4gZW1wdHkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIHRoZSBrZXljb21ibythY3Rpb24gaGFzIHRvIGJlIGV4YWN0bHkgdGhlIHNhbWUgYXNcbiAgICAgKiBpdCB3YXMgZGVmaW5lZCBpbiB0aGUgYmluZCBtZXRob2RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLmJpbmQuY2FsbChzZWxmLCBrZXlzLCBmdW5jdGlvbigpIHt9LCBhY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0cmlnZ2VycyBhbiBldmVudCB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSkge1xuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKHt9LCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogcmVzZXRzIHRoZSBsaWJyYXJ5IGJhY2sgdG8gaXRzIGluaXRpYWwgc3RhdGUuICB0aGlzIGlzIHVzZWZ1bFxuICAgICAqIGlmIHlvdSB3YW50IHRvIGNsZWFyIG91dCB0aGUgY3VycmVudCBrZXlib2FyZCBzaG9ydGN1dHMgYW5kIGJpbmRcbiAgICAgKiBuZXcgb25lcyAtIGZvciBleGFtcGxlIGlmIHlvdSBzd2l0Y2ggdG8gYW5vdGhlciBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXAgPSB7fTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNob3VsZCB3ZSBzdG9wIHRoaXMgZXZlbnQgYmVmb3JlIGZpcmluZyBvZmYgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnN0b3BDYWxsYmFjayA9IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgICBpZiAoKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgbW91c2V0cmFwICcpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfYmVsb25nc1RvKGVsZW1lbnQsIHNlbGYudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcCBmb3IgaW5wdXQsIHNlbGVjdCwgYW5kIHRleHRhcmVhXG4gICAgICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT0gJ0lOUFVUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdURVhUQVJFQScgfHwgZWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogZXhwb3NlcyBfaGFuZGxlS2V5IHB1YmxpY2x5IHNvIGl0IGNhbiBiZSBvdmVyd3JpdHRlbiBieSBleHRlbnNpb25zXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5oYW5kbGVLZXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGFsbG93IGN1c3RvbSBrZXkgbWFwcGluZ3NcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuYWRkS2V5Y29kZXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgX01BUFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX1JFVkVSU0VfTUFQID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnNcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZ2xvYmFsIG1vdXNldHJhcCBmdW5jdGlvbnMgdG8gd29ya1xuICAgICAqIG5vdyB0aGF0IG1vdXNldHJhcCBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIE1vdXNldHJhcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkb2N1bWVudE1vdXNldHJhcCA9IE1vdXNldHJhcChkb2N1bWVudCk7XG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBkb2N1bWVudE1vdXNldHJhcCkge1xuICAgICAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIE1vdXNldHJhcFttZXRob2RdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kXS5hcHBseShkb2N1bWVudE1vdXNldHJhcCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IChtZXRob2QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNb3VzZXRyYXAuaW5pdCgpO1xuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCB0byB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIHdpbmRvdy5Nb3VzZXRyYXAgPSBNb3VzZXRyYXA7XG5cbiAgICAvLyBleHBvc2UgYXMgYSBjb21tb24ganMgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTW91c2V0cmFwO1xuICAgIH1cblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgYXMgYW4gQU1EIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vdXNldHJhcDtcbiAgICAgICAgfSk7XG4gICAgfVxufSkgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCwgdHlwZW9mICB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBudWxsKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXHJcblxyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0TW9uZXkuanMnXHJcblxyXG4vLyBSRURVWCBQUk9WSURFUlxyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy8gQ09NUE9ORU5UU1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXHJcblxyXG4vLyBTVE9SRVxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcclxuXHJcbndpbmRvdy5hbGVydGlmeSA9IGFsZXJ0aWZ5XHJcbmZvcm1hdE1vbmV5KClcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxNYWluIC8+XHJcbiAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJykpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvYXBwLmpzIiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQge2ZlY3RoUHJvZmlsZX0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuLy8gQ09NUE9ORU5UU1xyXG5cclxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xyXG5pbXBvcnQgRmV0Y2hpbmcgZnJvbSAnLi4vLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3gnXHJcblxyXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoaW5nOiBzdG9yZS5mZXRjaGluZy5mZXRjaGluZyxcclxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMucHJvcHMuZmV0Y2hpbmcgPyA8RmV0Y2hpbmcgLz4gOiAnJ1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnbWFpbkNvbnRhaW5lcicgOiAnbWFpbkNvbnRhaW5lciBzaWRlSGlkZGVuJ1xyXG4gICAgY29uc3QgY29udGVudCA9IDxSb3V0ZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNpZGVNZW51IC8+XHJcbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250YWluZXItY29udGVudCc+XHJcbiAgICAgICAgICAgIHtyb3V0ZXN9XHJcbiAgICAgICAgICAgIHtmZXRjaGluZ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm91dGVyPlxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoUHJvZmlsZSgpIHtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICBheGlvcy5nZXQoJy9wcm9maWxlLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHt1c2VyOiByZXNwb25zZS5kYXRhWzBdLmZpZWxkcywgcHJvZmlsZTogcmVzcG9uc2UuZGF0YVsxXS5maWVsZHN9fSlcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZWN0aElzQWRtaW5Mb2NrZWQoKSB7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJwcmVmcy9hZG1pbl9faXNfYWRtaW5fbG9ja2VkLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfRlVMRklMTEVEJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS52YWx1ZX0pXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcclxuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcclxuXHJcbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XHJcblxyXG4gIDxSb3V0ZSBleGFjdCBwYXRoPScvc2FsZXMnIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cclxuXHJcbjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcclxuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hPTUVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgfVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdNYWluIGhlaWdoMTAwJz5cclxuICAgICAgSE9NRVxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXHJcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuanN4J1xyXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi9hc2lkZS9hc2lkZS5qc3gnXHJcbmltcG9ydCBTZWFyY2hQcm9kdWN0IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCdcclxuaW1wb3J0IFNlYXJjaENsaWVudCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCdcclxuaW1wb3J0IFBheVBhbmVsIGZyb20gJy4vcGF5L3BheVBhbmVsLmpzeCdcclxuaW1wb3J0IEludm9pY2VQYW5lbCBmcm9tICcuLi9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3gnXHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NBTEVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgfVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzYWxlJz5cclxuICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgPEFzaWRlIC8+XHJcblxyXG4gICAgICA8U2VhcmNoUHJvZHVjdCAvPlxyXG4gICAgICA8U2VhcmNoQ2xpZW50IC8+XHJcbiAgICAgIDxQYXlQYW5lbCAvPlxyXG4gICAgICA8SW52b2ljZVBhbmVsIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL21haW4uanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4J1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi8uLi9nZW5lcmFsL2NhcnQvY2FydC5qc3gnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcclxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHRvZ2dsZVdpZHRoICgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29udGVudENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50IGZ1bGxXaWR0aCcgOiAnc2FsZS1jb250ZW50J1xyXG4gICAgY29uc3QgY2FydENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LWNhcnQnIDogJ3NhbGUtY29udGVudC1jYXJ0IGZ1bGxIZWlnaHQnXHJcbiAgICBjb25zdCB0b3RhbENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LXRvdGFsJyA6ICdzYWxlLWNvbnRlbnQtdG90YWwgY29sbGFwc2VkJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtY29udGVudC1wcm9kdWN0JyA+XHJcbiAgICAgICAgPFByb2R1Y3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJ0Q2xhc3N9ID5cclxuICAgICAgICA8Q2FydCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RvdGFsQ2xhc3N9ID5cclxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cclxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tbGVmdCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGlucHV0VmFsOiBzdG9yZS5wcm9kdWN0cy5pbnB1dFZhbCxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxyXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcclxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuY29kZUlucHV0LmZvY3VzKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIC8vIHRoaXMuY29kZUlucHV0LmZvY3VzKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUUycsIHBheWxvYWQ6ICcnfSlcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0S3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnLFxyXG4gICAgICBlcnJvclR5cGU6ICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChwcm9kdWN0S3dhcmdzKSlcclxuXHJcbiAgfVxyXG5cclxuICBzZWFyY2hQcm9kdWN0Q2xpY2soKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1BST0RVQ1RfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGlmIChldi50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMF0gLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcclxuICAgICAgICBsZXQgcXR5ID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMV1cclxuICAgICAgICBxdHkgPSAoaXNOYU4ocXR5KSlcclxuICAgICAgICAgID8gMVxyXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHF0eSkgLy8gaWYgbm8gcXR5IHNldHMgdG8gMVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcclxuICAgICAgICAvLyAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiAwfSlcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIHByb2R1Y3RcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxiPlByb2R1Y3RvOjwvYj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZSc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcmNvZGUnIC8+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9J3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb2RlSW5wdXQgPSBpbnB1dFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBlbCBDw7NkaWdvIGRlbCBQcm9kdWN0bydcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlLWlucHV0IG1vdXNldHJhcCBmb3JtLWNvbnRyb2wgaW5wdXQtbGcnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0Q2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtc2VhcmNoJz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4IiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDYxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSAnLi9jYXJ0SXRlbXMuanN4J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXHJcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzLFxyXG4gICAgLy8gcHJvZHVjdFNlYXJjaHBhbmVsVmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcclxuXHJcbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXHJcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtjJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xyXG5cclxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xyXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBjb25zdCB1c2VMb3RlID0gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnXHJcbiAgICAvLyAgID8gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLmNhcnRJdGVtVXNlTG90ZVxyXG4gICAgLy8gICA6IGZhbHNlXHJcblxyXG4gICAgLy8gY29uc3QgbG90ZUZpZWxkID0gdXNlTG90ZVxyXG4gICAgLy8gICA/IDx0aD5Mb3RlPC90aD5cclxuICAgIC8vICAgOiA8dGggLz5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NhcnQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1jb2RlJz5cclxuICAgICAgICAgIDxoNT5Dw7NkPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgPGg1PkFydDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXF0eSc+XHJcbiAgICAgICAgICA8aDU+Q2FudDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXVuaXRQcmljZSc+XHJcbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGlzY291bnQnPlxyXG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1pdmEnPlxyXG4gICAgICAgICAgPGg1PklWPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdG90YWwnPlxyXG4gICAgICAgICAgPGg1PlRvdGFsIElWSTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPENhcnRJdGVtcyAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VwZGF0ZVRvdGFscywgcmVtb3ZlRnJvbUNhcnR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxyXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxyXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcclxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXHJcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBPbiBjb21wb25lbnQgdXBkYXRlIChUaGUgY2FydCBoYXMgYmVlbiBtb2RpZmllZCkgY2FsbHMgdGhlIHVwZGF0ZSB0b3RhbHMgbWV0aG9kIGluIGFjdGlvbnMgZmlsZS5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVUb3RhbHModGhpcy5wcm9wcy5pbkNhcnQpKVxyXG5cclxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1ib2R5JylcclxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcclxuXHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgLy8gICBpZiAodGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSAhPSBuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmUpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICB9KVxyXG5cclxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrZicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlfWApLmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCstJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXHJcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcclxuICAgIH0pXHJcblxyXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcclxuICAgICAgYWxlcnRpZnkucHJvbXB0KGBOdWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkb2AsICdJbmdyZXNlIGxhIG51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvJywgJydcclxuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcclxuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXHJcbiAgICAgICAgICAgIF9fdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgX190aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcclxuICAgICAgICAuc2V0KCdsYWJlbHMnLCB7b2s6ICdPaycsIGNhbmNlbDogJ0NhbmNlbGFyJ30pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcclxuICAgICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGRpc2NvdW50SW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgIDogMFxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxyXG4gICAgICB0aGlzLnByb3BzLmNsaWVudCkpXHJcblxyXG4gIH1cclxuXHJcbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBxdHkgPSBwYXJzZUZsb2F0KChldi50YXJnZXQudmFsdWUpKVxyXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICA6IDBcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5KGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5pbkNhcnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50KSlcclxuXHJcbiAgfVxyXG5cclxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xyXG5cclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiAwXHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcclxuXHJcbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcclxuICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgOiAwXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcclxuXHJcbiAgfVxyXG5cclxuICBmaWVsZEZvY3VzKGV2KSB7XHJcbiAgICBldi50YXJnZXQuc2VsZWN0KClcclxuICB9XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgaXRlbXMgaW4gY2FydCB1c2luZyB0YWJsZSByb3dzXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxyXG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcclxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcclxuICAgICAgICA6ICdjYXJ0LWJvZHktaXRlbSdcclxuXHJcbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xyXG5cclxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXHJcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcclxuICAgICAgICA6IDBcclxuXHJcbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XHJcbiAgICAgICAgaWQ9e2BxdHkke2l0ZW0ucHJvZHVjdC5jb2RlfWB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxyXG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxyXG4gICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cclxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxyXG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxyXG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1xdHknPlxyXG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cclxuICAgICAgICAgIHtxdHlGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cclxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxyXG4gICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XHJcbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XHJcbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0taXZhJz5cclxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxyXG4gICAgICAgICAge3RheGVzMX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxyXG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cclxuICAgICAgICAgICAg4oKhIHtpdGVtLnRvdGFsV2l0aEl2LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZW1vdmVJY29uQ2xhc3N9PlxyXG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cclxuICAgIC8vICAge2l0ZW1zfVxyXG4gICAgLy8gPC90Ym9keT5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XHJcbiAgICAgIHtpdGVtczJ9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRvdGFscyB0aGUgY2FydCBzdG9yZSBpdGVtLCBnZW5lcmF0ZXMgbmV3IHZhbHVlcyBhY2NvcmRpbmcgY2FydCBpdGVtIG9iamVjdHMsIHRoZW4gcHVzaCB0aGUgdG8gc3RvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFscyhpbkNhcnQpIHtcclxuXHJcbiAgbGV0IHN1YnRvdGFsID0gMFxyXG4gIGxldCBzdWJUb3RhbE5vRGlzY291bnQgPSAwXHJcbiAgbGV0IHRheGVzID0gMFxyXG4gIGxldCB0b3RhbCA9IDBcclxuICBsZXQgZGlzY291bnRUb3RhbCA9IDBcclxuXHJcbiAgLy8gZm9yIEVhY2ggZWxlbWVudCBhZGRzIHRoZSB2YWx1ZXMgdG8gZ2V0IHRvdGFsc1xyXG4gIGluQ2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50ID0gc3ViVG90YWxOb0Rpc2NvdW50ICsgaXRlbS5zdWJUb3RhbE5vRGlzY291bnRcclxuXHJcbiAgICBzdWJ0b3RhbCA9IHN1YnRvdGFsICsgaXRlbS5zdWJ0b3RhbFxyXG5cclxuICAgIGNvbnN0IHRheGVzQ2FsYyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzIC8gMTAwKVxyXG4gICAgICA6IDBcclxuXHJcbiAgICBjb25zdCB0YXhlc0NhbGMyID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMyKVxyXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMiAvIDEwMClcclxuICAgICAgOiAwXHJcblxyXG4gICAgY29uc3QgdGF4ZXNDYWxjMyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzMylcclxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczMgLyAxMDApXHJcbiAgICAgIDogMFxyXG5cclxuICAgIHRheGVzID0gdGF4ZXMgKyB0YXhlc0NhbGMgKyB0YXhlc0NhbGMyICsgdGF4ZXNDYWxjM1xyXG5cclxuICAgIGRpc2NvdW50VG90YWwgPSBkaXNjb3VudFRvdGFsICsgaXRlbS5kaXNjb3VudEN1cnJlbmN5IC8vIHRoaXMgaXMgdGhlIHZhbHVlIGluIGN1cnJlbmN5XHJcblxyXG4gIH0pXHJcbiAgLy8gVE9ETyBDb25maWcgZm9yIHJvdW5kIG9yIG5vdFxyXG4gIC8vIHRvdGFsID0gTWF0aC5yb3VuZChzdWJ0b3RhbCArIHRheGVzKVxyXG4gIHRvdGFsID0gc3VidG90YWwgKyB0YXhlc1xyXG4gIC8vIHJldHVycyBhIGRpc3BhdGNoIHdpdGggYSBwYXlsb2FkIG9mIHRoZSBvYnRhaW5lZCB2YWx1ZXNcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUX1RPVEFMUycsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIHN1YnRvdGFsOiBzdWJ0b3RhbCxcclxuICAgICAgdGF4ZXM6IHRheGVzLFxyXG4gICAgICB0b3RhbDogdG90YWwsXHJcbiAgICAgIGRpc2NvdW50VG90YWw6IGRpc2NvdW50VG90YWwsXHJcbiAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaXRlbXNJbkNhcnQsIGNvZGUpIHtcclxuXHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXHJcblxyXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXHJcbiAgICAgIHBheWxvYWQ6IC0xXHJcbiAgICB9XHJcbiAgICA6IHtcclxuICAgICAgdHlwZTogJ1JFTU9WRV9GUk9NX0NBUlQnLFxyXG4gICAgICBwYXlsb2FkOiBpbmRleEluQ2FydFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4J1xyXG5pbXBvcnQgVG90YWxzIGZyb20gJy4uLy4uL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3gnXHJcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9ucy5qc3gnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcclxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICB0b2dnbGVXaWR0aCAoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBhc2lkZUNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZSBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUnXHJcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZS1jb250ZW50IGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZS1jb250ZW50J1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNsYXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FzaWRlQ29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdy1jb250YWluZXInIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8Q2xpZW50IC8+XHJcbiAgICAgICAgPFRvdGFscyAvPlxyXG4gICAgICAgIDxCdXR0b25zIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbnMgLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLXRvdGFsJyA+XHJcbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZCwgc2VhcmNoQ2xpZW50LCB1c2VyU2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRDbGllbnREZWJ0J1xyXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50cyxcclxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxyXG4gICAgY2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIHVzZXJzOiBzdG9yZS5jbGllbnRzLnVzZXJzLFxyXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXHJcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxyXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAobmV4dFByb3BzLmNsaWVudFNlbGVjdGVkICE9IHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpIHtcclxuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXHJcblxyXG4gICAgICBpZiAoIW5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5zYWxlTG9hZGVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgICAgIGNsaWVudF9pZDogbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgc3VjY2VzczogJ1NFVF9DTElFTlRfREVCVCcsXHJcbiAgICAgICAgICBmYWlsOiAnU0VUX0NMSUVOVF9ERUJUX0ZBSUxFRCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KG5leHRQcm9wcy5jYXJ0LCBkaXNjb3VudCwgbmV4dFByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0Q2xpZW50RGVidChrd2FyZ3MpKVxyXG5cclxuICAgICAgICAvLyBTRVRTIFZBTFVFIE9GIERFRkFVTFQgRElTQ09VTlQgVE8gRklFTEQgT1IgMFxyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX0NMSUVOVFMnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2NsaWVudHMnLFxyXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJyxcclxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcclxuXHJcbiAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUgLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB1c2VyU2VsZWN0KGV2KSB7XHJcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXNlclNlbGVjdGVkKF9pZCwgdGhpcy5wcm9wcy51c2VycykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgdXNlclVuU2VsZWN0KGV2KSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVNFUl9DTEVBUicsIHBheWxvYWQ6ICcnfSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBzZWFyY2hDbGllbnRDbGljaygpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCgpKVxyXG5cclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyBTRUxFQ1QyIERBVEFcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXHJcbiAgICAgID8gYCR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5uYW1lfSAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubGFzdF9uYW1lfWBcclxuICAgICAgOiAnQ2xpZW50ZSBDb250YWRvJ1xyXG5cclxuICAgIC8vIGNvbnN0IGNyZWRpdEljb24gPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCAmJiB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmhhc19jcmVkaXQpXHJcbiAgICAvLyAgID8gJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcclxuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtaW1nJz5cclxuICAgICAgICA8aW1nIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudENsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XHJcbiAgICAgICAgICA8aDM+Q2xpZW50ZSA6PC9oMz5cclxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxyXG4gICAgICAgICAgPGgzPk5vbWJyZSA6PC9oMz5cclxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTU9EVUxFIElNUE9SVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xyXG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbidcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFWFBPUlQgRlVOQ1RJT05TXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQ0hFQ0sgRk9SIENMSUVOVCBERUJUIEFORCBESVNQQVRDSFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50RGVidChrd2FyZ3MpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7Y2xpZW50X2lkOiBrd2FyZ3MuY2xpZW50X2lkfSlcclxuICAgIC8vIGNhbGxzIHRoZSBmdW5jdGlvbiBpbiBiYWNrZW5kIHRvIGNoZWNrIHBlcm1pc3Npb25zXHJcbiAgICBheGlvcy5wb3N0KCcvYXBpL2dldGNsaWVudGRlYnQvJywgZGF0YSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5zdWNjZXNzLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIGludGVudGFyIG9idGVuZXIgbGEgZGV1ZGEgZGVsIHVzdWFyaW8sIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxyXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5mYWlsLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2dldENsaWVudERlYnQuanMiLCIvKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXHJcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXHJcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXHJcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudFZhbDogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0ludm9pY2VQYW5lbCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcblxyXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcclxuICAgICAgICA6IDBcclxuICAgICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcclxuICAgICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXHJcbiAgICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlzY291bnRWYWwgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgID8gcGFyc2VGbG9hdChldi50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgOiAwXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRPbkJsdXIoZXYpIHtcclxuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXHJcblxyXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgICA6IDBcclxuICAgIC8vIENBTEMgVEhFIE1BWCBESVNDT1VOVCBBTkQgQ0hFQ0tTIElUIE9OIEZJRUxEXHJcbiAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcclxuICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFbCBkZXNjdWVudG8gcGFyYSBlbCBjbGllbnRlIHNlbGVjY2lvbmFkbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgJHttYXhEaXNjb3VudH0lYClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvdGFscyc+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAncGFkZGluZ1RvcCc6ICcwJyxcclxuICAgICAgICAnbWFyZ2luVG9wJzogJzAnXHJcbiAgICAgIH19IGNsYXNzTmFtZT0nYmctd2hpdGUgcmlnaHQtaXRlbSc+XHJcbiAgICAgICAgey8qIDxzcGFuPlxyXG4gICAgICAgICAgPGI+VG90YWxlczo8L2I+XHJcbiAgICAgICAgPC9zcGFuPjxiciAvPiAqL31cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0b3RhbHMtdGFibGUnPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlN1Yi1Ub3RhbDo8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzM3JSdcclxuICAgICAgICAgICAgICB9fT5EZXNjdWVudG8gJTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPSdkaXNjb3VudEZpZWxkJ1xyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmlucHV0T25CbHVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICczN3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDAgMCAxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFNpemUnOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzYWxlX2dsb2JhbF9kaXNjb3VudF9pbnB1dCBmb3JtLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+RGVzY3VlbnRvOjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+SVY6PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgey8qIDx0aCBvbkNsaWNrPXt0aGlzLnNob3dJbnZvaWNlUGFuZWwuYmluZCh0aGlzKX0+VG90YWw6PC90aD4gKi99XHJcbiAgICAgICAgICAgICAgPHRoPlRvdGFsOjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2hvd1BheVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUEFZX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93SW5vaWNlUGFuZWwoKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuICBzaG93U2FsZVBhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfUFJFU0FMRVNfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG4gIG5ld1NhbGUoKSB7XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xyXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ05FV19TQUxFJywgcGF5bG9hZDogLTF9KVxyXG4gIH1cclxuXHJcbiAgLy8gTWFpbiBMYXlvdXRcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgPyA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0lub2ljZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICAgIEZhY3R1cmFcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV3U2FsZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgICBOdWV2YSBWZW50YVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcmVmcmVzaCcgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDogJydcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBidXR0b25zJz5cclxuXHJcbiAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICA8Yj5QYWdvOjxiciAvPjwvYj5cclxuICAgICAgPC9zcGFuPiAqL31cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQYXlQYW5lbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxyXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXHJcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XHJcbiAgICAgICAgQ29icmFyXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93U2FsZVBhbmVsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXHJcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcclxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cclxuICAgICAgICBWZW50YXMgZGVsIGTDrWFcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXNhbGVzUGFuZWwuYmluZCh0aGlzKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxyXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxyXG4gICAgICAgIFByZS1WZW50YXNcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge2J1dHRvbnN9XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoRm9ybS5qc3gnXHJcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xyXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBwYW5lbENsaWNrKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXHJcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCBpcy12aXNpYmxlJ1xyXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxyXG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgUHJvZHVjdG88L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250ZW50Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHtzZWFyY2hQcm9kdWN0fSBmcm9tICcuL2FjdGlvbnMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnNlYXJjaFZhbHVlXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoVmFsOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRLZXlQcmVzcyhldikge1xyXG5cclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xyXG5cclxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnNlYXJjaFByb2R1Y3RBY3Rpb24oKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHNlYXJjaFByb2R1Y3RBY3Rpb24oKSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaFByb2R1Y3QodGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSwgdGhpcy5wcm9wcy5wcm9kdWN0cykpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgRGVzY3JpcGNpw7NuOjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cclxuICAgICAgICAgICAgPGlucHV0IG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9IHR5cGU9J3RleHQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXHJcbiAgICAgICAgICAgIH19IGlkPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdwcm9kdWN0LXNlYXJjaC1idG4nIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICAgICAnd2lkdGgnOiAnNDhweCdcclxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaEZvcm0uanN4IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgTnVtYmVyLnByb3RvdHlwZS5mb3JtYXRNb25leSA9IGZ1bmN0aW9uKGMsIGQsIHQpe1xyXG4gICAgdmFyIG4gPSB0aGlzLFxyXG4gICAgICAgIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXHJcbiAgICAgICAgZCA9IGQgPT0gdW5kZWZpbmVkID8gXCIuXCIgOiBkLFxyXG4gICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcclxuICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXHJcbiAgICAgICAgaSA9IFN0cmluZyhwYXJzZUludChuID0gTWF0aC5hYnMoTnVtYmVyKG4pIHx8IDApLnRvRml4ZWQoYykpKSxcclxuICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xyXG4gICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcclxuICAgICB9O1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mb3JtYXRNb25leS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkVGFibGUsIGhpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5wcm9kdWN0c01hdGNoZWQsIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0c31cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2VsZWN0UHJvZHVjdChjb2RlLCBldikge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RQcm9kdWN0LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLmNvZGV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLnNlbGxwcmljZX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XHJcbiAgICAgICAgICA8dGFibGUgaWQ9J3Byb2R1Y3RlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdwcm9kdWN0LXNlYXJjaC10YWJsZS1ib2R5Jz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHN9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoRm9ybS5qc3gnXHJcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xyXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hDbGllbnRzLnZpc2libGV9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcGFuZWxDbGljayhldikge1xyXG5cclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxyXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQgaXMtdmlzaWJsZSdcclxuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLWNsaWVudCBmcm9tLXJpZ2h0J1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cclxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIENsaWVudGU8L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250ZW50Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge3NlYXJjaENsaWVudH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWFyY2hWYWw6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dEtleVByZXNzKGV2KSB7XHJcblxyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5zZWFyY2hDbGllbnRBY3Rpb24oKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWwgPSBldi50YXJnZXQudmFsdWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZWFyY2hDbGllbnRBY3Rpb24oKSB7XHJcbiAgICBjb25zdCB2YWwgPSB0aGlzLnN0YXRlLnNlYXJjaFZhbFxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQodmFsLCB0aGlzLnByb3BzLmNsaWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NsaWVudC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgTm9tYnJlOjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cclxuICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHR5cGU9J3RleHQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXHJcbiAgICAgICAgICAgIH19IGlkPSdjbGllbnQtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hDbGllbnRBY3Rpb24uYmluZCh0aGlzKX0gdHlwZT0nYnV0dG9uJyBpZD0nY2xpZW50LXNlYXJjaC1idG4nIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcclxuICAgICAgICAgICAgICAnd2lkdGgnOiAnNDhweCdcclxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge2NsaWVudFNlbGVjdGVkfSBmcm9tICcuLi8uLi9jbGllbnRzL2FjdGlvbnMuanMnXHJcbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMuanMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge21hdGNoZXM6IHN0b3JlLnNlYXJjaENsaWVudHMuY2xpZW50c01hdGNoZWQsIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc2VsZWN0Q2xpZW50KGNvZGUsIGV2KSB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsaWVudFNlbGVjdGVkKGNvZGUsIHRoaXMucHJvcHMuY2xpZW50cykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGhhc0NyZWRpdCA9IChpdGVtLmhhc19jcmVkaXQpXHJcbiAgICAgICAgPyAnU0knXHJcbiAgICAgICAgOiAnTk8nXHJcblxyXG4gICAgICByZXR1cm4gPHRyIG9uRG91YmxlQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpZW50LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIHtpdGVtLmNvZGV9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7YCR7aXRlbS5uYW1lfSAke2l0ZW0ubGFzdF9uYW1lfWB9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7aGFzQ3JlZGl0fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgMFxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cclxuICAgICAgICAgIDx0YWJsZSBpZD0nY2xpZW50ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q3LDqWRpdG88L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlNhbGRvPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nY2xpZW50LXNlYXJjaC10YWJsZS1ib2R5Jz5cclxuICAgICAgICAgICAgICB7Y2xpZW50c31cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IFBheU1ldGhvZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCdcclxuaW1wb3J0IFBheUNhc2ggZnJvbSAnLi9jb21wb25lbnRzL3BheUNhaHMuanN4J1xyXG5pbXBvcnQgUGF5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2FyZC5qc3gnXHJcbmltcG9ydCBQYXlDcmVkaXQgZnJvbSAnLi9jb21wb25lbnRzL3BheUNyZWRpdC5qc3gnXHJcbmltcG9ydCBQYXlPdGhlciBmcm9tICcuL2NvbXBvbmVudHMvcGF5T3RoZXIuanN4J1xyXG5pbXBvcnQgUGF5U2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3gnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUucGF5LmlzVmlzaWJsZSwgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGhpZGVQYW5lbCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgaXNWaXNpYmxlID0gKHRoaXMucHJvcHMucGFuZWxWaXNpYmxlKVxyXG4gICAgICA/ICdwYXktcGFuZWwgaXMtdmlzaWJsZSdcclxuICAgICAgOiAncGF5LXBhbmVsJ1xyXG5cclxuICAgIGxldCBwYXlNZXRob2QgPSAnJ1xyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xyXG5cclxuICAgICAgY2FzZSAnQ0FTSCc6XHJcbiAgICAgIHtcclxuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q2FzaCAvPlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH0gLy8gY2FzZVxyXG5cclxuICAgICAgY2FzZSAnQ0FSRCc6XHJcbiAgICAgIHtcclxuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q2FyZCAvPlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH0gLy8gY2FzZVxyXG5cclxuICAgICAgY2FzZSAnQ1JFRCc6XHJcbiAgICAgIHtcclxuICAgICAgICBwYXlNZXRob2QgPSA8UGF5Q3JlZGl0IC8+XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfSAvLyAgY2FzZVxyXG5cclxuICAgICAgY2FzZSAnT1RIRSc6XHJcbiAgICAgIHtcclxuICAgICAgICBwYXlNZXRob2QgPSA8UGF5T3RoZXIgLz5cclxuICAgICAgICBicmVha1xyXG4gICAgICB9IC8vIGNhc2VcclxuXHJcbiAgICB9IC8vIHN3aXRjaFxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtbWFpbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1wYW5lbC1oZWFkZXInPlxyXG4gICAgICAgICAgUmVnaXN0cmFyIFBhZ29cclxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8UGF5TWV0aG9kIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktYXJlYS1jb250YWluZXInPlxyXG5cclxuICAgICAgICAgIHtwYXlNZXRob2R9XHJcblxyXG4gICAgICAgICAgPFBheVNpZGVCYXIgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7cGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjbGlja0NoYW5nZVBheU1ldGhvZChtZXRob2QsIGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NIQU5HRV9QQVlfTUVUSE9EJywgcGF5bG9hZDogbWV0aG9kfSlcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdCc+XHJcblxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcclxuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xyXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XHJcbiAgICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVEJ1xyXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXHJcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cclxuICAgICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXJzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ09USEUnXHJcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcclxuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxyXG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcGF5QW1vdW50Q2hhbmdlZChldikge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxyXG4gICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkVGRUNUSVZPOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXNoQW1vdW50fSBvbkNoYW5nZT17dGhpcy5wYXlBbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VwZGF0ZVN0b3JlQ2FyZEF1dGgsIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0c30gZnJvbSAnLi4vYWN0aW9ucydcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7Y2FyZEF1dGg6IHN0b3JlLnBheS5jYXJkQXV0aCwgY2FyZERpZ2l0czogc3RvcmUucGF5LmNhcmREaWdpdHN9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBwYXlDYXJkQXV0aENoYW5nZWQoZXYpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZEF1dGgoZXYudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIHBheUNhcmREaWdpdHNDaGFuZ2VkKGV2KSB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmREaWdpdHMoZXYudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XHJcbiAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz40IERJR0lUT1M6PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmREaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmREaWdpdHNDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkFVVE9SSVpBQ0nDk046PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhcmRBdXRofSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkQXV0aENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2NsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCwgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNyZWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5kZWJ0KVxyXG4gICAgY29uc3QgY2xpZW50TGltaXQgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XHJcbiAgICAgID8gYOKCoSAke3BhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxyXG4gICAgICA6ICdTSU4gQ1LDiURJVE8nXHJcbiAgICBjb25zdCBjbGllbnRBdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XHJcbiAgICAgID8gYOKCoSAke2F2YWlsYWJsZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxyXG4gICAgICA6ICdTSU4gQ1LDiURJVE8nXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxyXG4gICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkzDjU1JVEU6PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxyXG4gICAgICAgICAge2NsaWVudExpbWl0fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5ESVNQT05JQkxFOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cclxuICAgICAgICAgIHtjbGllbnRBdmFpbGFibGV9PC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlPdGhlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz4gPHNwYW4+T3Rybzwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAvLyBNYWluIExheW91dFxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2ZldGNpbmctY29udGFpbmVyJz5cclxuICAgICAgPGltZyBzcmM9eycvc3RhdGljL3ZlbmRvci9sb2FkZXJzL0VjbGlwc2UuZ2lmJ30gLz5cclxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHtzYXZlSXRlbSwgbG9hZFNhbGV9IGZyb20gJy4uL2FjdGlvbnMnXHJcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgU2F2ZUJ0biBmcm9tICcuLi8uLi9zYXZlL3NhdmUuanN4J1xyXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXHJcbiAgICBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2QsXHJcbiAgICBwYXk6IHN0b3JlLnBheSxcclxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcclxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxyXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcclxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcclxuICAgIC8vIHNhbGVJZDogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZUlkLFxyXG4gICAgLy8gc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcclxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5U2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHNhdmVCdG4oKSB7XHJcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcclxuICAgIGNvbnN0IHNhbGUgPSB7XHJcbiAgICAgIGNhcnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2FydCksXHJcbiAgICAgIGNsaWVudDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpLFxyXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxyXG4gICAgICBwYXk6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucGF5KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHtcclxuICAgICAgc2FsZS5wYXkuZGVidCA9IHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWxcclxuICAgICAgc2FsZS5wYXkucGF5ZWQgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgdXJsOiAnL2FwaS9zYWxlcy8nLFxyXG4gICAgICBpdGVtOiBzYWxlLFxyXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxyXG4gICAgICBsb2dEZXNjcmlwdGlvbjogJ0NyZWFjacOzbiBkZSBudWV2YSBWZW50YScsXHJcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGl0ZW1PbGQ6ICcnLFxyXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxyXG4gICAgICBkaXNwYXRjaFR5cGU6ICdDTEVBUl9TQUxFJyxcclxuICAgICAgaXNTYWxlOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncykpXHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXHJcblxyXG4gICAgTW91c2V0cmFwLnJlc2V0KClcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IGNoYW5nZSA9IDBcclxuICAgIGxldCBwYXlCdXR0b25DbGFzcyA9ICdwYXktdGFnIHRhZy1idXR0b24nXHJcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbClcclxuICAgIGNvbnN0IGNhc2ggPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpXHJcblxyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xyXG5cclxuICAgICAgY2FzZSAnQ0FTSCc6XHJcbiAgICAgIHtcclxuICAgICAgICBjaGFuZ2UgPSBjYXNoIC0gdG90YWxcclxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgY2hhbmdlID49IDApXHJcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xyXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgJ0NBUkQnOlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMucHJvcHMucGF5LmNhcmRBdXRoXHJcbiAgICAgICAgY29uc3QgZGlnaXRzID0gdGhpcy5wcm9wcy5wYXkuY2FyZERpZ2l0c1xyXG4gICAgICAgIGNoYW5nZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMudG90YWwpXHJcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIGF1dGggJiYgZGlnaXRzKVxyXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcclxuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ0NSRUQnOlxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXHJcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIHRvdGFsIDw9IGF2YWlsYWJsZSAmJiB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0KVxyXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcclxuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LXNpZGUtYmFyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxyXG4gICAgICAgIDxzcGFuPlBhZ288L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+XHJcbiAgICAgICAgICBUT1RBTCA6PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxyXG4gICAgICAgICAg4oKhIHt0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+VlVFTFRPIDo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XHJcbiAgICAgICAgICDigqEge2NoYW5nZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8U2F2ZUJ0biBwYXlCdXR0b25DbGFzcz17cGF5QnV0dG9uQ2xhc3N9IC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LFxyXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxyXG4gICAgcGF5OiBzdG9yZS5wYXksXHJcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXHJcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcclxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XHJcbiAgICAvLyBzYWxlczogc3RvcmUuc2FsZXMuc2FsZXMsXHJcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcclxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXHJcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHNcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVCdG4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzYXZlQnRuKCkge1xyXG4gICAgLy8gY29uc3Qgc2FsZXMgPSB0aGlzLnByb3BzLnNhbGVzXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXHJcbiAgICBjb25zdCBwYXllZCA9ICEodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVEJylcclxuXHJcbiAgICBjb25zdCBzYWxlID0ge1xyXG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxyXG4gICAgICBjbGllbnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSxcclxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcclxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSksXHJcbiAgICAgIHBheV90eXBlOiB0aGlzLnByb3BzLnBheS5wYXlNZXRob2QsXHJcbiAgICAgIHBheWVkOiBwYXllZCxcclxuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ge1xyXG4gICAgICBjbGllbnRfaWQ6IHRoaXMucHJvcHMuY2xpZW50LmlkLFxyXG4gICAgICBtb3ZlbWVudF90eXBlOiAnQ1JFRCcsXHJcbiAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGt3YXJncyA9IHtcclxuICAgICAgdXJsOiAnL2FwaS9zYWxlcy8nLFxyXG4gICAgICBpdGVtOiBzYWxlLFxyXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxyXG4gICAgICBsb2dEZXNjcmlwdGlvbjogJ0NyZWFjacOzbiBkZSBudWV2YSBWZW50YScsXHJcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGl0ZW1PbGQ6ICcnLFxyXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxyXG4gICAgICBjcmVkaXRNb3ZlbWVudDogY3JlZGl0TW92ZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSlcclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgTW91c2V0cmFwLnJlc2V0KClcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17dGhpcy5zYXZlQnRuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXlCdXR0b25DbGFzc30+XHJcbiAgICAgIFJlZ2lzdHJhclxyXG4gICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1PRFVMRSBJTVBPUlRTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgc2F2ZUxvZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzLCByZXNvbHZlLCByZWplY3QpIHtcclxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cclxuICBkZWxldGUgaXRlbVsnaWQnXVxyXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcclxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcclxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcclxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxyXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXHJcbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBpdGVtXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXHJcblxyXG4gICAgICAgIC8vIElGIFRIRSBTQUxFIElTIEEgQ1JFRElUIE9ORSBTQVZFIENSRURJVCBNT1ZFTUVOVFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnBheV90eXBlID09ICdDUkVEJykge1xyXG4gICAgICAgICAgY29uc3QgY3JlZGl0TW92ZW1lbnQgPSBrd2FyZ3MuY3JlZGl0TW92ZW1lbnRcclxuICAgICAgICAgIGNyZWRpdE1vdmVtZW50LmJpbGxfaWQgPSByZXNwb25zZS5kYXRhLmlkXHJcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5kZXNjcmlwdGlvbiA9IGBWZW50YSBkZSBjcsOpZGl0byAjJHtyZXNwb25zZS5kYXRhLmJpbGxfbnVtYmVyfWBcclxuICAgICAgICAgIHNhdmVDcmVkaXRNb3ZlbWVudChjcmVkaXRNb3ZlbWVudCwgcmVzcG9uc2UuZGF0YSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KVxyXG5cclxuICAgICAgICAvLyBJRiBJUyBDQVNIIFRIRU4gSlVTVCBSRVNPTFZFXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfU0FMRScsIHBheWxvYWQ6ICcnfSlcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcclxuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXHJcbiAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcclxuICAgICAgfSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQ3JlZGl0TW92ZW1lbnQobW92ZW1lbnQsIHNhbGUsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgdXJsOiAnL2FwaS9jcmVkaXRtb3ZlbWVudHMvJyxcclxuICAgIGRhdGE6IG1vdmVtZW50XHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBzYWxlfSlcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcclxuICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXHJcbiAgICAgIHJlamVjdCgpXHJcbiAgICB9KVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7bG9hZEdsb2JhbENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5pbXBvcnQgRnVsbEludm9pY2UgZnJvbSAnLi4vZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4J1xyXG5pbXBvcnQgQ29tcGFjdEludm9pY2UgZnJvbSAnLi4vY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtwYW5lbFZpc2libGU6IHN0b3JlLmludm9pY2UuaXNWaXNpYmxlLCBpc0Z1bGw6IHN0b3JlLmludm9pY2UuaXNGdWxsfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvaWNlUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2FkR2xvYmFsQ29uZmlnKCdjb21wYW55JywgZmFsc2UsICdGRVRDSF9DT05GSUdfRlVMRklMTEVEJywgJ0ZFVENIX0NPTkZJR19SRUpFQ1RFRCcpKVxyXG4gIH1cclxuXHJcbiAgaGlkZVBhbmVsKCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXHJcbiAgICAvLyBwcmludERpdignZnVsbC1pbnZvaWNlLXByaW50JylcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhbmVsKCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcclxuXHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbnZvaWNlKCkge1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnLCBwYXlsb2FkOiAtMX0pXHJcblxyXG4gIH1cclxuXHJcbiAgcHJpbnRQYW5lbCgpIHtcclxuICAgIHdpbmRvdy5wcmludERpdignaW52b2ljZS1wcmludCcpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgaXNWaXNpYmxlID0gKHRoaXMucHJvcHMucGFuZWxWaXNpYmxlKVxyXG4gICAgICA/ICdpbnZvaWNlLXBhbmVsIGlzLXZpc2libGUnXHJcbiAgICAgIDogJ2ludm9pY2UtcGFuZWwnXHJcbiAgICBjb25zdCBpc0Z1bGxDbGFzcyA9ICh0aGlzLnByb3BzLmlzRnVsbClcclxuICAgICAgPyAnJ1xyXG4gICAgICA6ICcgY29tcGFjdC1pbnZvaWNlLW9uJ1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudFRvTW91bnQgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXHJcbiAgICAgID8gPEZ1bGxJbnZvaWNlIC8+XHJcbiAgICAgIDogPENvbXBhY3RJbnZvaWNlIC8+XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLW1haW4nICsgaXNGdWxsQ2xhc3N9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlLXBhbmVsLWhlYWRlcic+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBGYWN0dXJhIGRlIFZlbnRhXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS10ZXh0LW8nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnByaW50UGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1wcmludCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XHJcbiAgICAgICAgICAgIHsvKiA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUludm9pY2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1jb2ZmZWUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPSdpbnZvaWNlLXByaW50JyBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLWNvbnRhaW5lcicgKyBpc0Z1bGxDbGFzc30+XHJcblxyXG4gICAgICAgICAge2NvbXBvbmVudFRvTW91bnR9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xyXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xyXG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9jb21wb25lbnRzL25vdGVzLmpzeCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlJz5cclxuXHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERhdGEgLz5cclxuICAgICAgPFRhYmxlIC8+XHJcbiAgICAgIDxUb3RhbHMgLz5cclxuICAgICAgPE5vdGVzIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXHJcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gQ3JlZGl0IG9yIGNhc2hcclxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSB0aGlzLnByb3BzLnNhbGUucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJyA/ICdGYWN0dXJhIGRlIGNyw6lkaXRvJyA6ICdGYWN0dXJhIGRlIGNvbnRhZG8nXHJcbiAgICAvLyBMT0dPXHJcbiAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ28gfHwgJydcclxuICAgIGNvbnN0IGxvZ29XaWR0aCA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvV2lkdGggfHwgJzEzMHB4J1xyXG4gICAgY29uc3QgbG9nb1VybCA9IGAvbWVkaWEvbG9nb3MvJHtsb2dvfWBcclxuXHJcbiAgICAvLyBCSUxMIERBVEFcclxuICAgIGNvbnN0IGhlYWRlck5hbWUgPSB0aGlzLnByb3BzLmNvbXBhbnkuY29tZXJjaWFsX25hbWUgfHwgJydcclxuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsX25hbWUgfHwgJydcclxuXHJcbiAgICBjb25zdCB0ZWxzID0gdGhpcy5wcm9wcy5jb21wYW55LnRlbGVwaG9uZXMgfHwgJydcclxuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxyXG5cclxuICAgIGNvbnN0IGlkVHlwZSA9IHRoaXMucHJvcHMuY29tcGFueS5pZFR5cGUgfHwgJ1BFUlNPTidcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICcnXHJcbiAgICBjb25zdCBpZFRleHQgPSBpZFR5cGUgPT0gJ0pVUklESScgPyBgQ8OpZCBKdXJpZCBObyAke2lkfWAgOiBgQ8OpZCBObyAke2lkfWBcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItbG9nbyc+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzogYCR7bG9nb1dpZHRofWB9fSBzcmM9e2xvZ29Vcmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItaW5mbyc+XHJcbiAgICAgICAgICA8aDI+e2hlYWRlck5hbWUudG9VcHBlckNhc2UoKX08L2gyPlxyXG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxyXG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxyXG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuZW1haWwgfHwgJyd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1zZXBhcmF0b3InPlxyXG4gICAgICAgIDxzcGFuIC8+XHJcblxyXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxyXG4gICAgICAgIDxzcGFuIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcclxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcclxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXHJcbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xyXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcclxuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xyXG4gICAgICA/IDx0cj5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdjbGllbnRBZHJlc3MnPkRJUkVDQ0nDk046IHtzYWxlLmNsaWVudC5hZHJlc3N9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgOiA8dHIgLz5cclxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMDEnXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XHJcblxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdjbGllbnQtdGFibGUnPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkNMSUVOVEU6PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAge2NsaWVudEFkcmVzc31cclxuICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XHJcblxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPk4uIGRlIGZhY3R1cmE6PC90aD5cclxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cclxuXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cclxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XHJcbiAgICBjb25zdCBnbG9iYWxEaXNjb3VudCA9ICh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxyXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxyXG4gICAgICA6IDx0ZCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RkPlxyXG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0SXRlbXMubGVuZ3RoXHJcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgICAgICAgPyBgR2BcclxuICAgICAgICAgIDogYEVgXHJcblxyXG4gICAgICAgIHJldHVybiA8dHIga2V5PXtpdGVtLnV1aWR9PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAge2l0ZW0ucXR5fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAge2l0ZW0uZGlzY291bnR9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxyXG4gICAgICAgICAgICB7dGF4ZXNUZXh0fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIH0pXHJcbiAgICAgIDogPHRyPlxyXG4gICAgICAgIDx0ZD4tLTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcblxyXG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnRSb3cgPSB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50ID8gPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlczIgJTwvdGg+XHJcbiAgICAgIDogPHRoIHN0eWxlPXt7J2Rpc3BsYXknOiAnbm9uZSd9fSA+LTwvdGg+XHJcblxyXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10YWJsZSB0YWJsZSc+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkRlc2NyaXBjacOzbjwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlAuVTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+RGVzJTwvdGg+XHJcbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlByZWNpbzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PntpdGVtc308L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXHJcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXHJcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXHJcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcclxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcclxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdG90YWxzJz5cclxuXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPklWPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxyXG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cclxuICAgICAgPGgxPk5vdGFzOjwvaDE+XHJcblxyXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcclxuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcclxuaW1wb3J0IE5vdGVzIGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy5qc3gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0SW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZSc+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxEYXRhIC8+XHJcbiAgICAgIDxUYWJsZSAvPlxyXG4gICAgICA8VG90YWxzIC8+XHJcbiAgICAgIDxOb3RlcyAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxyXG4gICAgY29tcGFueTogc3RvcmUuY29uZmlnLmNvbXBhbnlcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xyXG5cclxuICAgIC8vIEJJTEwgREFUQVxyXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxOYW1lIHx8ICcnXHJcblxyXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLmNvbXBhbnkubGVnYWxOYW1lIHx8ICcnXHJcblxyXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMuY29tcGFueS50ZWxlcGhvbmVzIHx8ICcnXHJcbiAgICBjb25zdCB0ZWxzVGV4dCA9IHRlbHMuc3BsaXQoJy8nKS5sZW5ndGggPiAxID8gYFRlbHM6ICR7dGVsc31gIDogYFRlbDogJHt0ZWxzfWBcclxuXHJcbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWRUeXBlIHx8ICcnXHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuY29tcGFueS5pZCB8fCAnUEVSU09OJ1xyXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyLWluZm8nPlxyXG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cclxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MyIHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XHJcbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cclxuICAgICAgICA8c3BhbiAvPlxyXG5cclxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cclxuXHJcbiAgICAgICAgPHNwYW4gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XHJcbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlVGF4ZXMpXHJcbiAgICAgICAgPyBgR2BcclxuICAgICAgICA6IGBFYFxyXG5cclxuICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2l0ZW0ucXR5fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cclxuICAgICAgICAgIHt0YXhlc1RleHR9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XHJcbiAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5DYW50PC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+QXJ0aWN1bG88L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5Ub3RhbDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICB7aXRlbXN9XHJcbiAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgPC90YWJsZT5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcclxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcclxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cclxuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXHJcbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xyXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcclxuICAgIGNvbnN0IGlkID0gc2FsZS5iaWxsX251bWJlciA/IHNhbGUuYmlsbF9udW1iZXIgOiAnMDAwMSdcclxuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xyXG4gICAgICA/IDx0cj5cclxuICAgICAgICA8dGg+RGlyZWM6PC90aD5cclxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA6IDx0ciAvPlxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWRhdGEnPlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cclxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RmFjdHVyYTo8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+eygnMDAwMDAnICsgaWQpLnNsaWNlKC01KX08L3RkPlxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XHJcblxyXG4gICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxyXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxyXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXHJcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXHJcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRvdGFscyc+XHJcblxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cclxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcyc+XHJcbiAgICAgIDxoMT5Ob3Rhczo8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzLWNvbnRlbnQnPlxyXG4gICAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcclxuaW1wb3J0IHt0b2dnbGVMYXlvdXR9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBzdG9yZS5sYXlvdXQudG9wQmFyVG9nZ2xlVmlzaWJsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgbWVudUNsaWNrKGV2KSB7XHJcblxyXG4gICAgdG9nZ2xlTGF5b3V0KClcclxuXHJcbiAgfVxyXG5cclxuICBsb2dPdXRDbGljaygpIHtcclxuXHJcbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXHJcbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XHJcbiAgICAgIG9rOiAnQ2VycmFyJyxcclxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBob21lQ2xpY2soKSB7XHJcbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXHJcbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJylcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XHJcbiAgICAgIG9rOiAnSXInLFxyXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcclxuICAgICAgPyAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIHZpc2libGUnIDogJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSdcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYmFycycgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BCYXItcmlnaHQnPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5ob21lQ2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItaXRlbSB0b3BCYXItaXRlbS1jb25maWcnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5sb2dPdXRDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1sb2dvdXQnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheW91dCgpIHtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJylcclxuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTWVudScpXHJcblxyXG4gIGlmIChtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHVsbGVkJykpIHtcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXHJcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcclxuICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbmZpZ0JhcigpIHtcclxuXHJcbiAgY29uc3QgY29uZmlnQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0JhcicpXHJcblxyXG4gIGlmIChjb25maWdCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtdmlzaWJsZScpKSB7XHJcblxyXG4gICAgY29uZmlnQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJylcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25maWdCYXIuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIi8qXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy91c2VyL3VzZXIuanN4J1xyXG4vLyBpbXBvcnQgQ29tcG9zZWRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9jb21wb3NlZC5qc3gnXHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbkBjb25uZWN0KChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJylcclxuICB9XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIC8vIGNvbnN0IGNoaWxkUHJvZHVjdHMgPSBbXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICB0ZXh0OiAnUHJvZHVjdG9zJyxcclxuICAgIC8vICAgICBjbGFzczogJ2ZhLWdpZnQnLFxyXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB0ZXh0OiAnRmFtaWxpYXMnLFxyXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXHJcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0ZGVwYXJ0bWVudHMnXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcclxuICAgIC8vICAgICBjbGFzczogJ2ZhLW91dGRlbnQnLFxyXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHN1YmRlcGFydG1lbnRzJ1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyBdXHJcblxyXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXHJcbiAgICBjb25zdCBzaWRlTWVudUNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnc2lkZU1lbnUnIDogJ3NpZGVNZW51IGhpZGRlbkJ5QXBwJ1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9e3NpZGVNZW51Q2xhc3N9PlxyXG5cclxuICAgICAgey8qIDxoMyBjbGFzc05hbWU9J3NpZGVNZW51LWhlYWRlcic+e3RpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMz4gKi99XHJcbiAgICAgIDxVc2VyIC8+XHJcblxyXG4gICAgICA8U2VhcmNoIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NpZGVNZW51LWl0ZW1zJz5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxyXG4gICAgICAgICAgICAgIEluaWNpbzwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvc2FsZSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxyXG4gICAgICAgICAgICAgIE51ZXZhIFZlbnRhPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcm9mb3JtYSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxyXG4gICAgICAgICAgICAgIE51ZXZhIENvdGl6YWNpw7NuPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcmVzYWxlJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XHJcbiAgICAgICAgICAgICAgTnVldmEgUHJldmVudGE8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtc2VhcmNoIGNvbC14cy0xMic+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiLypcclxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcclxuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIC8vIE1haW4gTGF5b3V0XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxyXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXHJcbiAgICAgIDogKHRoaXMucHJvcHMudXNlci51c2VybmFtZVxyXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXHJcblxyXG4gICAgY29uc3QgbGFzdE5hbWUgPSB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lID8gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA6ICcnXHJcblxyXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXHJcbiAgICBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMjIpIGZ1bGxOYW1lID0gZnVsbE5hbWUuc3Vic3RyaW5nKDAsIDIyKVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XHJcbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cclxuICAgICAgICA8c3Bhbj57ZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaywgbG9nZ2VyKVxyXG5cclxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5cclxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcclxuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIvcmVkdWNlci5qcydcclxuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcclxuaW1wb3J0IGNsaWVudHMgZnJvbSAnLi9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMnXHJcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy9yZWR1Y2VyLmpzJ1xyXG5pbXBvcnQgc2VhcmNoQ2xpZW50cyBmcm9tICcuL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcclxuaW1wb3J0IHBheSBmcm9tICcuL3NhbGUvcGF5L3JlZHVjZXIuanMnXHJcbmltcG9ydCBpbnZvaWNlIGZyb20gJy4vZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMnXHJcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9yZWR1Y2VyLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBmZXRjaGluZyxcclxuICBsYXlvdXQsXHJcbiAgdXNlcixcclxuICBjYXJ0LFxyXG4gIGNsaWVudHMsXHJcbiAgcHJvZHVjdHMsXHJcbiAgc2FsZSxcclxuICBtZXNzYWdlcyxcclxuICBzZWFyY2hDbGllbnRzLFxyXG4gIHNlYXJjaFByb2R1Y3RzLFxyXG4gIHBheSxcclxuICBpbnZvaWNlLFxyXG4gIHNhbGVzLFxyXG4gIGNvbmZpZ1xyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxyXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdTQUxFX1BBTkVMX01PVU5URUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IHRydWUsXHJcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdIT01FX1BBTkVMX01PVU5URUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRvcEJhclRvZ2dsZVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgfSAvLyBzd2l0Y2hcclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcblxyXG59IC8vIHJlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdXNlcjoge30sXHJcbiAgcHJvZmlsZToge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWQucHJvZmlsZVxyXG4gICAgICB9XHJcblxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge30sXHJcbiAgICAgICAgcHJvZmlsZToge31cclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZWRpdGFibGU6IHRydWUsXHJcbiAgY3JlYXRlZDogJycsXHJcbiAgdXBkYXRlZDogJycsXHJcbiAgaXNOdWxsOiBmYWxzZSxcclxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICBjYXJ0SXRlbXM6IFtdLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICBjYXJ0VGF4ZXM6IDAsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XHJcbiAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXHJcbiAgZGlzY291bnRUb3RhbDogMCwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICBjcmVhdGVkOiAnJyxcclxuICAgICAgICB1cGRhdGVkOiAnJyxcclxuICAgICAgICBpc051bGw6IGZhbHNlLFxyXG4gICAgICAgIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xyXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcclxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xyXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnQUREX1RPX0NBUlQnOlxyXG4gICAge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IHRydWUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBbXHJcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnRJdGVtcyxcclxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdSRU1PVkVfRlJPTV9DQVJUJzpcclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxyXG5cclxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXHJcblxyXG4gICAgICBjb25zdCBpdGVtc0xlZnRJbkNhcnQgPSAobmV3Q2FydC5sZW5ndGggPiAwKVxyXG4gICAgICAvLyA/IHRydWVcclxuICAgICAgLy8gOiBmYWxzZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGl0ZW1zTGVmdEluQ2FydCxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlQnOlxyXG4gICAge1xyXG5cclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdID0gYWN0aW9uLnBheWxvYWQuaXRlbVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJzpcclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxyXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XVsnbG90ZSddID0gYWN0aW9uLnBheWxvYWQubG90ZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfVE9UQUxTJzpcclxuICAgIHtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLnRheGVzLFxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQudG90YWwsXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcclxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5zdWJUb3RhbE5vRGlzY291bnRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX0dMT0JBTF9ESVNDT1VOVCc6XHJcbiAgICB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdSRVBMQUNFX0NBUlQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9MSU5FX0RJU0NPVU5UJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXHJcbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdLmRpc2NvdW50ID0gYWN0aW9uLnBheWxvYWQudmFsdWVcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBuZXdDYXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXHJcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcclxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcclxuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XHJcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcclxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxyXG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXHJcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcclxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxyXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXHJcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXHJcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXHJcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxyXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXHJcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXHJcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxyXG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcclxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXHJcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcclxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXHJcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcclxuICBjb2RlOiAnMDAwMCcsXHJcbiAgY2xpZW50VHlwZTogJ0dFTkVSQUwnLFxyXG4gIGNyZWF0ZWQ6ICcnLFxyXG4gIGNyZWRpdF9kYXlzOiAwLFxyXG4gIGNyZWRpdF9saW1pdDogMCxcclxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcclxuICBoYXNfY3JlZGl0OiBmYWxzZSxcclxuICBpZDogJzAwMDAwMDAwMCcsXHJcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXHJcbiAgbmFtZTogJ0NsaWVudGUnLFxyXG4gIHVwZGF0ZWQ6ICcnLFxyXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxyXG4gIF9pZDogMFxyXG59XHJcblxyXG5jb25zdCB1c2VyU2VsZWN0ZWRNb2RlbCA9IHtcclxuICB1c2VyOiAnMDAwMCcsXHJcbiAgbmFtZTogJycsXHJcbiAgbGFzdF9uYW1lOiAnJyxcclxuICBpZDogJzAwMDAnLFxyXG4gIF9pZDogMFxyXG59XHJcblxyXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXHJcbiAgY2xpZW50c0ZlY3RlZDogZmFsc2UsXHJcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxyXG4gIGNsaWVudHM6IFtdLFxyXG4gIHVzZXJzOiBbXSxcclxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcclxuICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsLFxyXG4gIGNsaWVudFNlbGVjdGVkRGVidDogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNsaWVudHNGZXRjaEVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBjbGllbnRzRmVjdGVkOiB0cnVlLFxyXG4gICAgICAgIGNsaWVudHM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxyXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnVVNFUl9TRUxFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlclNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgLy8gKioqKioqKiogVVNFUlMgKioqKioqKipcclxuXHJcbiAgICBjYXNlICdTRVRfQ0xJRU5UX0RFQlQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkRGVidDogcGFyc2VGbG9hdChhY3Rpb24ucGF5bG9hZC5kZWJ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBjbGllbnRzID0gc3RhdGUuY2xpZW50c1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgY2xpZW50czogY2xpZW50c1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdMT0FERURfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudCxcclxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9UUlVFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcclxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSB0cnVlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTE9BREVEX0ZBTFNFJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcclxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBwcm9kdWN0czoge30sXHJcbiAgaW5wdXRWYWw6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge31cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbnB1dFZhbDogJydcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdHNcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGZ1bGxXaWR0aDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnVE9HR0xFX0ZVTExfV0lEVEgnOlxyXG4gICAge1xyXG4gICAgICBjb25zdCB3aWR0aCA9ICFzdGF0ZS5mdWxsV2lkdGhcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmdWxsV2lkdGg6IHdpZHRoXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsImltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xyXG5cclxuY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBtZXNzYWdlczogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnUFJPRFVDVF9OT1RfRk9VTkQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBQUk9EVUNUTyEnLCAnRWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdOT1RfRk9VTkRfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIExBIFZFTlRBIScsIGBMYSB2ZW50YSAjJHthY3Rpb24ucGF5bG9hZH0gbm8gZXhpc3RlLCBvIGhheSB1biBwcm9ibGVtYSBwYXJhIGNhcmdhcmxhLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2by5gKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnOlxyXG4gICAge1xyXG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IhJywgJ0h1Ym8gdW4gZXJyb3IgYWwgZW5jb250cmFyIGVsIHByb2R1Y3RvIGVuIGxhIGxpc3RhIGRlIHByb2R1Y3RvcyBhZ3JlZ2Fkb3MscG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby4nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJzpcclxuICAgIHtcclxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgUFJPRFVDVE9TIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgcHJvZHVjdG9zLCBwb3IgZmF2b3IgaW50ZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnQ0xJRU5UX05PVF9GT1VORCc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIENMSUVOVEUhJywgJ0VsIGNsaWVudGUgY29uIGVsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIENMSUVOVEVTIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgY2xpZW50ZXMsIHBvciBmYXZvciBpbnRlbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgY2xpZW50c01hdGNoZWQ6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9ISURFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUyc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjbGllbnRzTWF0Y2hlZDogW11cclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBwcm9kdWN0c01hdGNoZWQ6IFtdLFxyXG4gIHNlYXJjaFZhbHVlOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdTRVRfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHZpc2libGUgPSAhc3RhdGUudmlzaWJsZVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1BST0RVQ1RfU0hPV19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuICAgIGNhc2UgJ1BST0RVQ1RfSElERV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcbiAgICBjYXNlICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfRkFJTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBbXVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlQ29uc3RcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH0gLy8gc3dpdGNoXHJcblxyXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxyXG5cclxufSAvLyByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgaXNWaXNpYmxlOiBmYWxzZSxcclxuICBwYXlNZXRob2Q6ICdDQVNIJyxcclxuICBjYXNoQW1vdW50OiAwLFxyXG4gIGNhcmREaWdpdHM6ICcnLFxyXG4gIGNhcmRBdXRoOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdTSE9XX1BBWV9QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0hJREVfUEFZX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0NIQU5HRV9QQVlfTUVUSE9EJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9DQVNIX0FNT1VOVCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0FVVEgnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfRElHSVRTJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxyXG4gICAge1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdMT0FERURfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5wYXkucGF5TWV0aG9kLFxyXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXNoQW1vdW50LFxyXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkRGlnaXRzLFxyXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZEF1dGhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xyXG4gIGlzVmlzaWJsZTogZmFsc2UsXHJcbiAgaXNGdWxsOiB0cnVlLFxyXG4gIGRlZmF1bHREZXNpbmc6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnU0hPV19JTlZPSUNFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1Zpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnSElERV9JTlZPSUNFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgY29uc3QgZnVsbE9yTm90ID0gc3RhdGUuaXNGdWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNGdWxsOiAhZnVsbE9yTm90XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX0RFU0lORyc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGRlc2luZ09yTm90ID0gc3RhdGUuZGVmYXVsdERlc2luZ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRlZmF1bHREZXNpbmc6ICFkZXNpbmdPck5vdFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdORVdfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwiY29uc3Qgc2FsZUFjdGl2ZU1vZGVsID0ge1xyXG4gIGlkOiAwLFxyXG4gIGJpbGxfbnVtYmVyOiAnJyxcclxuICBjYXJ0OiB7fSxcclxuICBjbGllbnQ6ICcnLFxyXG4gIHVzZXI6ICcnLFxyXG4gIGNsaWVudF9pZDogJycsXHJcbiAgcGF5OiB7fSxcclxuICBwYXllZDogZmFsc2UsXHJcbiAgcGF5X3R5cGU6ICdDQVNIJ1xyXG5cclxufVxyXG5cclxuY29uc3Qgc3RhdGVDb25zdCA9IHtcclxuICBzYWxlczogW10sXHJcbiAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxyXG4gIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgc2FsZUFjdGl2ZUlkOiAwLFxyXG4gIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxyXG4gIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlICdDTEVBUl9BTEwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNhbGVBY3RpdmVJZDogMCxcclxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTSE9XX1NBTEVTX1BBTkVMJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnSElERV9TQUxFU19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnSElERV9QUkVTQUxFU19QQU5FTCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVzOiBbXVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9TQUxFU19GVUxGSUxMRUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNhcnQpXHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2xpZW50KVxyXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC51c2VyKVxyXG4gICAgICBjb25zdCBwYXkgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnBheSlcclxuXHJcbiAgICAgIGNvbnN0IHNhbGUgPSB7XHJcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgIGJpbGxfbnVtYmVyOiBhY3Rpb24ucGF5bG9hZC5iaWxsX251bWJlcixcclxuICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgcGF5OiBwYXksXHJcbiAgICAgICAgcGF5ZWQ6IGFjdGlvbi5wYXlsb2FkLnBheWVkLFxyXG4gICAgICAgIHBheV90eXBlOiBhY3Rpb24ucGF5bG9hZC5wYXlfdHlwZSxcclxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC5jcmVhdGVkKSxcclxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC51cGRhdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdTRVRfUFJFU0FMRV9JRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9QUk9GT1JNQV9JRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ05FV19TQUxFJzpcclxuICAgIHtcclxuICAgICAgY29uc3Qgc2FsZXMgPSBzdGF0ZS5zYWxlc1xyXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSwgc2FsZXM6IHNhbGVzXHJcbiAgICAgIH1cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBzYWxlQWN0aXZlSWQ6IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcclxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxyXG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcclxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxyXG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgY29tcGFueToge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCc6XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiBhY3Rpb24ucGF5bG9hZC5kYXRhXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSF9DT05GSUdfUkVKRUNURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXToge31cclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICAgIGNhc2UgJ1NFVF9DT05GSUcnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxyXG4gICAgICB9XHJcblxyXG4gICAgfSAvLyBjYXNlXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9jb25maWcvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XHJcbiAgZmV0Y2hpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxyXG4gICAge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IC8vIGNhc2VcclxuXHJcbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmZXRjaGluZzogZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgIH0gLy8gY2FzZVxyXG5cclxuICB9IC8vIHN3aXRjaFxyXG5cclxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cclxuXHJcbn0gLy8gcmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL3JlZHVjZXIuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTU9EVUxFIElNUE9SVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoJ3V1aWQvdjEnKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXHJcbmV4cG9ydCBmdW5jdGlvbiByZWNhbGNDYXJ0KGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmV3SXRlbSA9IGl0ZW1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW0ucHJvZHVjdCwgaXRlbS5xdHksIGl0ZW0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXHJcblxyXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcclxuICAgIG5ld0l0ZW0udG90YWxXaXRoSXYgPSBkYXRhLnRvdGFsV2l0aEl2XHJcbiAgICBuZXdJdGVtLmRpc2NvdW50Q3VycmVuY3kgPSBkYXRhLmRpc2NvdW50Q3VycmVuY3lcclxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcclxuICAgIG5ld0l0ZW0ucHJpY2VUb1VzZSA9IGRhdGEucHJpY2VUb1VzZVxyXG5cclxuICAgIHJldHVybiBuZXdJdGVtXHJcblxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7dHlwZTogJ1JFUExBQ0VfQ0FSVCcsIHBheWxvYWQ6IG5ld0NhcnR9XHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxyXG4gICAgPyB7XHJcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcclxuICAgICAgcGF5bG9hZDogLTFcclxuICAgIH1cclxuICAgIDoge1xyXG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXHJcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIHJlc1xyXG5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBpbmxpbmUgZGlzY291bnQgb2YgYW4gaXRlbSwgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Mb3RlKGl0ZW1zSW5DYXJ0LCBjb2RlLCBsb3RlKSB7XHJcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xyXG5cclxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICA/IHtcclxuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiB7XHJcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgbG90ZTogbG90ZU51bSxcclxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gcmVzXHJcblxyXG59XHJcblxyXG4vLyBXaGVuIGl0ZW0gaXMgc2VsZWN0ZWQgaW4gY29kZSBmaWVsZFxyXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XHJcblxyXG4gIGNvbnN0IHBlckxpbmUgPSBmYWxzZVxyXG5cclxuICBjb25zdCBwcm9kdWN0U2VsZWN0ZWQgPSBwcm9kdWN0cy5maW5kSW5kZXgocHJvZHVjdCA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdC5jb2RlID09IGNvZGUgfHwgcHJvZHVjdC5iYXJjb2RlID09IGNvZGVcclxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcclxuXHJcbiAgY29uc3QgcmVzID0gKHByb2R1Y3RTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcclxuICAgID8ge1xyXG4gICAgICB0eXBlOiAnUFJPRFVDVF9OT1RfRk9VTkQnLFxyXG4gICAgICBwYXlsb2FkOiAtMVxyXG4gICAgfVxyXG4gICAgOiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpXHJcblxyXG4gIHJldHVybiByZXNcclxuXHJcbn1cclxuXHJcbi8vIFVwZGF0ZXMgQW1vdW50IGJhc2VkIG9uIHF0eSBpbnB1dCBmaWVsZFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKVxyXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxyXG4gIGNvbnN0IHJlcyA9IHtcclxuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxyXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcclxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcclxuXHJcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXHJcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXHJcbiAgY29uc3QgcmVzID0ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJPbmUgKGNvZGUsIHN1Yk9yQWRkLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xyXG5cclxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUpXHJcbiAgY29uc3QgcXR5TnVtID0gc3ViT3JBZGQgPyBwYXJzZUZsb2F0KGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyAxKSA6IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSAtIDEpXHJcbiAgY29uc3QgcmVzID0ge1xyXG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXHJcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcclxuZnVuY3Rpb24gY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKSB7XHJcblxyXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxyXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGNhcnQgPT4gY2FydC5wcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBjYXJ0LnByb2R1Y3QuYmFyY29kZSA9PSBjb2RlKVxyXG5cclxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXHJcblxyXG4gIC8vIENIRUNLIElGIENPTkZJRyBBTExPV1MgTVVMVElQTEUgTElORVMgT1IgTk9UXHJcbiAgaWYgKHBlckxpbmUpIHtcclxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxyXG4gICAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGluIGNhcnQgRGlzcGF0cyBBRERfVE9fVEFCTEUsIGlmIGV4aXN0cyBkaXNwYXRjaCBjYXJ0IHVwZGF0ZWRcclxuICAgICAgPyB7XHJcbiAgICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1dWlkOiB1dWlkLFxyXG4gICAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcclxuICAgICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXHJcbiAgICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXHJcbiAgICAgICAgICBsb3RlOiAnLScsXHJcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICA6IHtcclxuICAgICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyBxdHksXHJcbiAgICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcblxyXG4gIC8vIElHTk9SRSBJRiBBTFJFQURZIElOIENBUlQgSUYgQ09ORklHIFNBWVMgVEhBVFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHV1aWQ6IHV1aWQsXHJcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcclxuICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YU5ld1Byb2Quc3ViVG90YWxOb0Rpc2NvdW50LFxyXG4gICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcclxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXHJcbiAgICAgICAgbG90ZTogJy0nLFxyXG4gICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIGNhbGN1bGF0ZXMgdGhlIHN1YnRvdGFsIGJ5IGxpbmUsIGFsc28gdGhlIHRvdGFsIHdpdGggaXYgaW5jbHVkZWQsIHRoZSBkaXNjb3VudCBpbiBjdXJyZW5jeSBmb3JtYXRcclxuZnVuY3Rpb24gY2FjbFN1YnRvdGFsKHByb2R1Y3QsIHF0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XHJcblxyXG4gIGNvbnN0IHByaWNlID0gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpXHJcblxyXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XHJcblxyXG4gIGNvbnN0IHN1YlRvdGFsID0gcHJpY2UgKiBxdHkgKiAoMSAtIChwcm9kdWN0RGlzY291bnQgLyAxMDApKSAqICgxIC0gKGdsb2JhbERpc2NvdW50IC8gMTAwKSlcclxuXHJcbiAgY29uc3QgaXYxID0gKHByb2R1Y3QudXNlX3RheGVzKVxyXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IGl2MiA9IChwcm9kdWN0LnVzZV90YXhlczIpXHJcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IGl2MyA9IChwcm9kdWN0LnVzZV90YXhlczMpXHJcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMzIC8gMTAwKVxyXG4gICAgOiAwXHJcblxyXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjIgKyBpdjNcclxuXHJcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUluTGluZSA9IHByaWNlICogcXR5ICogKHByb2R1Y3REaXNjb3VudCAvIDEwMClcclxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcclxuXHJcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeSA9IGRpc2NvdW50Q3VycmVuY3lJbkxpbmUgKyBkaXNjb3VudEN1cnJlbmN5R2xvYmFsXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWJ0b3RhbDogc3ViVG90YWwsXHJcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXHJcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkaXNjb3VudEN1cnJlbmN5LFxyXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICBwcmljZVRvVXNlOiBwcmljZVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgY2FydCB3aXRoIG5ldyBpbmZvcm1hdGlvbiwgdGhpcyBhdXggZnVudGlvbiByZXR1cm5zIG5ldyB1cGRhdGVkIG9iamVjdCByZWFkeSBmb3IgcmVwbGFjZSB0aGUgc3RvcmVkIG9uZVxyXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHV1aWQ6IHV1aWQsXHJcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcclxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGEuZGlzY291bnRDdXJyZW5jeSxcclxuICAgIHF0eTogbmV3UXR5LFxyXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcclxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YS5zdWJUb3RhbE5vRGlzY291bnQsXHJcbiAgICBzdWJ0b3RhbDogZGF0YS5zdWJ0b3RhbCxcclxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxyXG4gICAgbG90ZTogaXRlbXNJbkNhcnRbaW5kZXhdLmxvdGUsXHJcbiAgICBwcmljZVRvVXNlOiBkYXRhLnByaWNlVG9Vc2VcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxyXG5mdW5jdGlvbiBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudCkge1xyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UzKSByZXR1cm4gcHJvZHVjdC5wcmljZTNcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcclxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==