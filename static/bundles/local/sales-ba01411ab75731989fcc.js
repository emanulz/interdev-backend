webpackJsonp([1],{

/***/ 266:
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

/***/ 267:
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

/***/ 27:
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

var _axios = __webpack_require__(18);

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

/***/ 52:
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
var uuidv1 = __webpack_require__(616);
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

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(38);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(67);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(609);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(660);

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

/***/ 609:
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

var _reactRouterDom = __webpack_require__(4);

var _actions = __webpack_require__(610);

var _routes = __webpack_require__(611);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(655);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(657);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(68);

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

/***/ 610:
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

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _home = __webpack_require__(612);

var _home2 = _interopRequireDefault(_home);

var _main = __webpack_require__(613);

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

/***/ 612:
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

var _reactRedux = __webpack_require__(2);

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

var _content = __webpack_require__(614);

var _content2 = _interopRequireDefault(_content);

var _aside = __webpack_require__(622);

var _aside2 = _interopRequireDefault(_aside);

var _searchPanel = __webpack_require__(627);

var _searchPanel2 = _interopRequireDefault(_searchPanel);

var _searchPanel3 = __webpack_require__(630);

var _searchPanel4 = _interopRequireDefault(_searchPanel3);

var _payPanel = __webpack_require__(633);

var _payPanel2 = _interopRequireDefault(_payPanel);

var _invoicePanel = __webpack_require__(642);

var _invoicePanel2 = _interopRequireDefault(_invoicePanel);

var _reactRedux = __webpack_require__(2);

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


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _product = __webpack_require__(615);

var _product2 = _interopRequireDefault(_product);

var _cart = __webpack_require__(619);

var _cart2 = _interopRequireDefault(_cart);

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

var _api = __webpack_require__(3);

var _actions = __webpack_require__(52);

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

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(617);
var bytesToUuid = __webpack_require__(618);

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

/***/ 617:
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

/***/ 618:
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

/***/ 619:
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

var _cartItems = __webpack_require__(620);

var _cartItems2 = _interopRequireDefault(_cartItems);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(621);

var _actions2 = __webpack_require__(52);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

/***/ 621:
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

/***/ 622:
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

var _clients = __webpack_require__(623);

var _clients2 = _interopRequireDefault(_clients);

var _totals = __webpack_require__(625);

var _totals2 = _interopRequireDefault(_totals);

var _buttons = __webpack_require__(626);

var _buttons2 = _interopRequireDefault(_buttons);

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(266);

var _api = __webpack_require__(3);

var _getClientDebt = __webpack_require__(624);

var _actions2 = __webpack_require__(52);

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

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientDebt = getClientDebt;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(18);

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

// CHECK PERMISSIONS FOR CURRENT USER
function getClientDebt(kwargs) {
  return function (dispatch) {
    var data = JSON.stringify({ client_id: kwargs.client_id });
    // calls the function in backend to check permissions
    _axios2.default.post('/api/getclientdebt/', data).then(function (response) {
      console.log(response);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
      dispatch({ type: kwargs.success, payload: response.data });
    }).catch(function (error) {
      _alertifyjs2.default.alert('ERROR', 'Error al intentar verificar los permisos de usuario, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
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

/***/ 625:
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

var _actions = __webpack_require__(52);

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

var _reactRedux = __webpack_require__(2);

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

/***/ 627:
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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(80);

var _searchForm = __webpack_require__(628);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(629);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

/***/ 628:
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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(80);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(80);

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

/***/ 630:
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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(81);

var _searchForm = __webpack_require__(631);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(632);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

/***/ 631:
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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(81);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(266);

var _actions2 = __webpack_require__(81);

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

var _reactRedux = __webpack_require__(2);

var _payMethod = __webpack_require__(634);

var _payMethod2 = _interopRequireDefault(_payMethod);

var _payCahs = __webpack_require__(635);

var _payCahs2 = _interopRequireDefault(_payCahs);

var _payCard = __webpack_require__(636);

var _payCard2 = _interopRequireDefault(_payCard);

var _payCredit = __webpack_require__(637);

var _payCredit2 = _interopRequireDefault(_payCredit);

var _payOther = __webpack_require__(638);

var _payOther2 = _interopRequireDefault(_payOther);

var _paySideBar = __webpack_require__(639);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(267);

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

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(267);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

/***/ 639:
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

var _reactRedux = __webpack_require__(2);

var _save = __webpack_require__(640);

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

var _actions = __webpack_require__(641);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(27);

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

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItem = saveItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(18);

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

/***/ 642:
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

var _reactRedux = __webpack_require__(2);

var _api = __webpack_require__(3);

var _fullInvoice = __webpack_require__(643);

var _fullInvoice2 = _interopRequireDefault(_fullInvoice);

var _compactInvoice = __webpack_require__(649);

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

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(644);

var _header2 = _interopRequireDefault(_header);

var _data = __webpack_require__(645);

var _data2 = _interopRequireDefault(_data);

var _table = __webpack_require__(646);

var _table2 = _interopRequireDefault(_table);

var _totals = __webpack_require__(647);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(648);

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

/***/ 644:
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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

/***/ 648:
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

var _header = __webpack_require__(650);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(651);

var _table2 = _interopRequireDefault(_table);

var _data = __webpack_require__(652);

var _data2 = _interopRequireDefault(_data);

var _totals = __webpack_require__(653);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(654);

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

/***/ 650:
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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

var _reactRedux = __webpack_require__(2);

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

/***/ 654:
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

/***/ 655:
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

var _actions = __webpack_require__(656);

var _reactRedux = __webpack_require__(2);

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

/***/ 656:
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

/***/ 657:
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

var _search = __webpack_require__(658);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(659);

var _user2 = _interopRequireDefault(_user);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

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

/***/ 658:
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

/***/ 659:
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

  __REACT_HOT_LOADER__.register(User, 'User', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/sideMenu/components/user/user.jsx');
}();

;

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _reduxLogger = __webpack_require__(64);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(65);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(66);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(661);

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

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _reducer = __webpack_require__(79);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(662);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(663);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(664);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(665);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(666);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(667);

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = __webpack_require__(668);

var _reducer16 = _interopRequireDefault(_reducer15);

var _reducer17 = __webpack_require__(669);

var _reducer18 = _interopRequireDefault(_reducer17);

var _reducer19 = __webpack_require__(670);

var _reducer20 = _interopRequireDefault(_reducer19);

var _reducer21 = __webpack_require__(671);

var _reducer22 = _interopRequireDefault(_reducer21);

var _reducer23 = __webpack_require__(672);

var _reducer24 = _interopRequireDefault(_reducer23);

var _reducer25 = __webpack_require__(673);

var _reducer26 = _interopRequireDefault(_reducer25);

var _reducer27 = __webpack_require__(674);

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

/***/ 662:
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

/***/ 663:
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

/***/ 664:
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

/***/ 665:
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

/***/ 666:
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

/***/ 667:
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

/***/ 668:
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

/***/ 669:
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

/***/ 67:
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

/***/ 671:
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

/***/ 673:
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

/***/ 674:
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

/***/ 68:
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

},[608]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL21haW4uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydEl0ZW1zLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0Q2xpZW50RGVidC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3Jlc3VsdHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9wYXlQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhaHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q3JlZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9zYXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3VzZXIvdXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjbGllbnRTZWxlY3RlZCIsInVzZXJTZWxlY3RlZCIsInNlYXJjaENsaWVudCIsImNvZGUiLCJjbGllbnRzIiwiZmluZEluZGV4IiwiY2xpZW50IiwicmVzIiwidHlwZSIsInBheWxvYWQiLCJfaWQiLCJ1c2VycyIsInVzZXIiLCJ1cGRhdGVTdG9yZUNhc2hBbW91bnQiLCJ1cGRhdGVTdG9yZUNhcmRBdXRoIiwidXBkYXRlU3RvcmVDYXJkRGlnaXRzIiwiYW1vdW50IiwicGFyc2VGbG9hdCIsIm51bWJlciIsImdldEl0ZW1EaXNwYXRjaCIsImdldEl0ZW1Eb3VibGVEaXNwYXRjaCIsImdldEl0ZW1SZXR1cm4iLCJzZXRJdGVtIiwic2F2ZUl0ZW0iLCJ1cGRhdGVJdGVtIiwicGF0Y2hJdGVtIiwicGF0Y2hJdGVtcyIsImRlbGV0ZUl0ZW0iLCJsb2FkR2xvYmFsQ29uZmlnIiwic2F2ZUxvZyIsImdldE5leHROdW1lcmljQ29kZSIsInNldE5leHRQcmV2SXRlbSIsImRlZmF1bHRzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsImt3YXJncyIsInVybCIsInN1Y2Nlc3NUeXBlIiwiZXJyb3JUeXBlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhbGVydCIsInN1Y2Nlc3NUeXBlMiIsImxvb2tVcFZhbHVlIiwibG9va1VwRmllbGQiLCJoaXN0b3J5IiwicmVkaXJlY3RVcmwiLCJsZW5ndGgiLCJtb2RlbE5hbWUiLCJsb29rVXBOYW1lIiwiZGlzcGF0Y2hUeXBlIiwiZGlzcGF0Y2hUeXBlMiIsImRpc3BhdGNoRXJyb3JUeXBlIiwicHVzaCIsIml0ZW0iLCJsb2dDb2RlIiwiaXRlbU9sZCIsImxvZ01vZGVsIiwibG9nRGVzY3JpcHRpb24iLCJpc1NhbGUiLCJtZXRob2QiLCJzdWNlc3NNZXNzYWdlIiwic2V0IiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwia3dhcmdzMiIsIml0ZW0yIiwidXJsMiIsImxvZ0NvZGUyIiwiaXRlbU9sZDIiLCJsb2dNb2RlbDIiLCJsb2dEZXNjcmlwdGlvbjIiLCJtb2RlbCIsInNlY3Rpb24iLCJuYW1lIiwic3VjY2VzcyIsImZhaWwiLCJjb25maWciLCJmaWx0ZXIiLCJmb3JFYWNoIiwidmFsdWUiLCJvbGRPYmplY3QiLCJvYmplY3QiLCJkZXNjcmlwdGlvbiIsInByZXZPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwidXNlcjIiLCJwcmV2X29iamVjdCIsIm5ld19vYmplY3QiLCJlbGVtZW50cyIsImZpZWxkIiwia2V5cyIsIm1hcCIsImVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtYXgiLCJwb3AiLCJuZXh0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJpbmRleCIsIm5leHRDb2RlIiwicHJldkNvZGUiLCJyZWNhbGNDYXJ0IiwidXBkYXRlSXRlbURpc2NvdW50IiwidXBkYXRlSXRlbUxvdGUiLCJwcm9kdWN0U2VsZWN0ZWQiLCJ1cGRhdGVRdHkiLCJ1cGRhdGVRdHlDb2RlIiwiYWRkU3ViT25lIiwidXVpZHYxIiwicmVxdWlyZSIsIml0ZW1zSW5DYXJ0IiwiZ2xvYmFsRGlzY291bnQiLCJuZXdDYXJ0IiwibmV3SXRlbSIsImNhY2xTdWJ0b3RhbCIsInByb2R1Y3QiLCJxdHkiLCJkaXNjb3VudCIsInN1YnRvdGFsIiwidG90YWxXaXRoSXYiLCJkaXNjb3VudEN1cnJlbmN5Iiwic3ViVG90YWxOb0Rpc2NvdW50IiwicHJpY2VUb1VzZSIsImluZGV4SW5DYXJ0IiwidXVpZCIsInVwZGF0ZWRDYXJ0SXRlbSIsImxvdGUiLCJsb3RlTnVtIiwicHJvZHVjdHMiLCJkZWZhdWx0Q29uZmlnIiwidXNlckNvbmZpZyIsInBlckxpbmUiLCJiYXJjb2RlIiwiY2hlY2tJZkluQ2FydCIsInF0eU51bSIsInN1Yk9yQWRkIiwiY2FydCIsImRhdGFOZXdQcm9kIiwicHJvZHVjdERpc2NvdW50IiwicHJpY2UiLCJzdWJUb3RhbCIsIml2MSIsInVzZV90YXhlcyIsInRheGVzIiwiaXYyIiwidXNlX3RheGVzMiIsInRheGVzMiIsIml2MyIsInVzZV90YXhlczMiLCJ0YXhlczMiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsImNsaWVudFR5cGUiLCJ1c2VQcmljZTIiLCJwcmljZTIiLCJ1c2VQcmljZTMiLCJwcmljZTMiLCJ3aW5kb3ciLCJhbGVydGlmeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwic3RvcmUiLCJmZXRjaGluZyIsInNpZGVNZW51VmlzaWJsZSIsImxheW91dCIsInByb3BzIiwibWFpbkNvbnRhaW5lckNsYXNzIiwiY29udGVudCIsIkNvbXBvbmVudCIsImZlY3RoUHJvZmlsZSIsImZlY3RoSXNBZG1pbkxvY2tlZCIsImZpZWxkcyIsInByb2ZpbGUiLCJyb3V0ZXMiLCJIb21lIiwiU2FsZSIsImZ1bGxXaWR0aCIsInNhbGUiLCJ0b3RhbCIsImNhcnRUb3RhbCIsImNvbnRlbnRDbGFzcyIsImNhcnRDbGFzcyIsInRvdGFsQ2xhc3MiLCJmb3JtYXRNb25leSIsInRvZ2dsZVdpZHRoIiwiYmluZCIsIlByb2R1Y3QiLCJjYXJ0SXRlbXMiLCJpbnB1dFZhbCIsImNvZGVJbnB1dCIsImZvY3VzIiwicHJvZHVjdEt3YXJncyIsImV2Iiwia2V5IiwidGFyZ2V0Iiwic3BsaXQiLCJpc05hTiIsImRpc2FibGVkIiwiaW5wdXRLZXlQcmVzcyIsImlucHV0Iiwic2VhcmNoUHJvZHVjdENsaWNrIiwiTW91c2V0cmFwIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwicmVtb3ZlSWNvbkNsYXNzIiwidGF4ZXMxIiwicXR5RmllbGQiLCJxdHlJbnB1dENoYW5nZSIsImZpZWxkRm9jdXMiLCJxdHlJbnB1dEtleVByZXNzIiwiZGlzY291bnRGaWVsZCIsInNhbGVMb2FkZWQiLCJkaXNjb3VudElucHV0S2V5UHJlc3MiLCJkaXNjb3VudElucHV0T25CbHVyIiwic2V0Q2FydEl0ZW1BY3RpdmUiLCJyZW1vdmVJdGVtIiwidXBkYXRlVG90YWxzIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXNjb3VudFRvdGFsIiwidGF4ZXNDYWxjIiwidGF4ZXNDYWxjMiIsInRheGVzQ2FsYzMiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsImRlYnQiLCJjbGllbnRTZWxlY3RlZERlYnQiLCJuZXh0UHJvcHMiLCJjbGllbnRfaWQiLCJpZCIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsImxhc3RfbmFtZSIsInNlYXJjaENsaWVudENsaWNrIiwiZ2V0Q2xpZW50RGVidCIsInBvc3QiLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50Iiwic3RhdGUiLCJkaXNjb3VudFZhbCIsIm1heERpc2NvdW50IiwiaW5wdXRPbkJsdXIiLCJCdXR0b25zIiwic2FsZXMiLCJjb21wbGV0ZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJidXR0b25zIiwic2hvd0lub2ljZVBhbmVsIiwibmV3U2FsZSIsInNob3dQYXlQYW5lbCIsInNob3dTYWxlUGFuZWwiLCJzaG93UHJlc2FsZXNQYW5lbCIsInNlYXJjaFByb2R1Y3RzIiwidmlzaWJsZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmlzaWJsZU9yTm90IiwicGFuZWxDbGljayIsInNlYXJjaEZvcm0iLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFZhbCIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJyZXN1bHRzVGFibGUiLCJtYXRjaGVzIiwicHJvZHVjdHNNYXRjaGVkIiwic2VsZWN0UHJvZHVjdCIsInNlbGxwcmljZSIsInNlYXJjaENsaWVudHMiLCJzZWFyY2hDbGllbnRBY3Rpb24iLCJ2YWwiLCJjbGllbnRzTWF0Y2hlZCIsImhhc0NyZWRpdCIsImhhc19jcmVkaXQiLCJzZWxlY3RDbGllbnQiLCJQYXlQYW5lbCIsInBhbmVsVmlzaWJsZSIsInBheSIsImlzVmlzaWJsZSIsInBheU1ldGhvZCIsImhpZGVQYW5lbCIsIlBheU1ldGhvZCIsImNsaWNrQ2hhbmdlUGF5TWV0aG9kIiwiUGF5Q2FzaCIsImNhc2hBbW91bnQiLCJwYXlBbW91bnRDaGFuZ2VkIiwiUGF5Q2FyZCIsImNhcmRBdXRoIiwiY2FyZERpZ2l0cyIsInBheUNhcmREaWdpdHNDaGFuZ2VkIiwicGF5Q2FyZEF1dGhDaGFuZ2VkIiwiUGF5Q3JlZGl0IiwiYXZhaWxhYmxlIiwiY3JlZGl0X2xpbWl0IiwiY2xpZW50TGltaXQiLCJjbGllbnRBdmFpbGFibGUiLCJQYXlPdGhlciIsIlBheVNpZGVCYXIiLCJwYXllZCIsInJlc2V0IiwiY2hhbmdlIiwicGF5QnV0dG9uQ2xhc3MiLCJjYXNoIiwiYXV0aCIsImRpZ2l0cyIsIlNhdmVCdG4iLCJwYXlfdHlwZSIsImNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnRfdHlwZSIsInVwZGF0ZVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNhdmVCdG4iLCJiaWxsX2lkIiwiYmlsbF9udW1iZXIiLCJzYXZlQ3JlZGl0TW92ZW1lbnQiLCJtb3ZlbWVudCIsIkludm9pY2VQYW5lbCIsImludm9pY2UiLCJpc0Z1bGwiLCJwcmludERpdiIsImlzRnVsbENsYXNzIiwiY29tcG9uZW50VG9Nb3VudCIsInRvZ2dsZVBhbmVsIiwicHJpbnRQYW5lbCIsIkZ1bGxJbnZvaWNlIiwiSGVhZGVyIiwic2FsZUFjdGl2ZSIsImNvbXBhbnkiLCJoZWFkZXJ0ZXh0IiwibG9nbyIsImxvZ29XaWR0aCIsImxvZ29VcmwiLCJoZWFkZXJOYW1lIiwiY29tZXJjaWFsX25hbWUiLCJoZWFkZXJOYW1lMiIsImxlZ2FsX25hbWUiLCJ0ZWxzIiwidGVsZXBob25lcyIsInRlbHNUZXh0IiwiaWRUeXBlIiwiaWRUZXh0IiwidG9VcHBlckNhc2UiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY291bnRyeSIsImVtYWlsIiwiRGF0YSIsImRhdGUiLCJjcmVhdGVkIiwiZ2V0RGF0ZSIsInNsaWNlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImNsaWVudEFkcmVzcyIsImFkcmVzcyIsIlRhYmxlIiwidGF4ZXNUZXh0IiwiZ2xvYmFsRGlzY291bnRSb3ciLCJOb3RlcyIsIkNvbXBhY3RJbnZvaWNlIiwiY29tZXJjaWFsTmFtZSIsImxlZ2FsTmFtZSIsInVzZVRheGVzIiwiVG9wQmFyIiwidG9wQmFyVG9nZ2xlVmlzaWJsZSIsImNvbmZpcm0iLCJyZXBsYWNlIiwiYnV0dG9uQ2xhc3MiLCJtZW51Q2xpY2siLCJob21lQ2xpY2siLCJsb2dPdXRDbGljayIsInRvZ2dsZUxheW91dCIsInRvZ2dsZUNvbmZpZ0JhciIsIm1haW5Db250YWluZXIiLCJzaWRlTWVudSIsInJlbW92ZSIsImFkZCIsImNvbmZpZ0JhciIsIlNpZGVNZW51Iiwic2lkZU1lbnVDbGFzcyIsIlNlYXJjaCIsIlVzZXIiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwidXNlcm5hbWUiLCJsYXN0TmFtZSIsImZ1bGxOYW1lIiwic3Vic3RyaW5nIiwibWlkZGxld2FyZSIsIm1lc3NhZ2VzIiwicmVkdWNlciIsInN0YXRlQ29uc3QiLCJhY3Rpb24iLCJlZGl0YWJsZSIsInVwZGF0ZWQiLCJpc051bGwiLCJjYXJ0SGFzSXRlbXMiLCJjYXJ0U3VidG90YWwiLCJzcGxpY2UiLCJpdGVtc0xlZnRJbkNhcnQiLCJjbGllbnRTZWxlY3RlZE1vZGVsIiwiY3JlZGl0X2RheXMiLCJkb2NUeXBlIiwidXNlclNlbGVjdGVkTW9kZWwiLCJjbGllbnRzRmV0Y2hpbmciLCJjbGllbnRzRmVjdGVkIiwiY2xpZW50c0ZldGNoRXJyb3IiLCJ3aWR0aCIsIk51bWJlciIsInByb3RvdHlwZSIsImMiLCJkIiwidCIsIm4iLCJNYXRoIiwiYWJzIiwidW5kZWZpbmVkIiwicyIsImkiLCJTdHJpbmciLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsImRlZmF1bHREZXNpbmciLCJmdWxsT3JOb3QiLCJkZXNpbmdPck5vdCIsInNhbGVBY3RpdmVNb2RlbCIsInNhbGVBY3RpdmVJZCIsImlzU2FsZXNQYW5lbFZpc2libGUiLCJpc1ByZXNhbGVzUGFuZWxWaXNpYmxlIiwicGFyc2UiLCJEYXRlIiwiRmV0Y2hpbmciLCJzZWFyY2hQcm9kdWN0IiwicHJvZHVjdFNlbGVjdGVkVGFibGUiLCJ0ZXh0IiwibWF0Y2hzIiwiY29udHJvbCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIndvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQ2dCQSxjLEdBQUFBLGM7UUFvQkFDLFksR0FBQUEsWTtRQW9CQUMsWSxHQUFBQSxZO0FBeENULFNBQVNGLGNBQVQsQ0FBd0JHLElBQXhCLEVBQThCQyxPQUE5QixFQUF1Qzs7QUFFNUMsTUFBTUosaUJBQWlCSSxRQUFRQyxTQUFSLENBQWtCO0FBQUEsV0FBVUMsT0FBT0gsSUFBUCxJQUFlQSxJQUF6QjtBQUFBLEdBQWxCLENBQXZCLENBRjRDLENBRTRCOztBQUV4RSxNQUFNSSxNQUFPUCxrQkFBa0IsQ0FBQyxDQUFwQixHQUF1QjtBQUMvQjtBQUNBUSxVQUFNLGtCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGlCQUROO0FBRUFDLGFBQVM7QUFDUEgsY0FBUUYsUUFBUUosY0FBUjtBQUREO0FBRlQsR0FMSjs7QUFZQSxTQUFPTyxHQUFQO0FBRUQ7O0FBRU0sU0FBU04sWUFBVCxDQUFzQlMsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDOztBQUV2QyxNQUFNVixlQUFlVSxNQUFNTixTQUFOLENBQWdCO0FBQUEsV0FBUU8sS0FBS0YsR0FBTCxJQUFZQSxHQUFwQjtBQUFBLEdBQWhCLENBQXJCLENBRnVDLENBRXVCOztBQUU5RCxNQUFNSCxNQUFPTixnQkFBZ0IsQ0FBQyxDQUFsQixHQUFxQjtBQUM3QjtBQUNBTyxVQUFNLGdCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGVBRE47QUFFQUMsYUFBUztBQUNQRyxZQUFNRCxNQUFNVixZQUFOO0FBREM7QUFGVCxHQUxKOztBQVlBLFNBQU9NLEdBQVA7QUFFRDs7QUFFTSxTQUFTTCxZQUFULEdBQXdCOztBQUU3QixTQUFPLEVBQUNNLE1BQU0sbUJBQVAsRUFBNEJDLFNBQVMsQ0FBQyxDQUF0QyxFQUFQO0FBQ0Q7Ozs7Ozs7O2dDQTNDZVQsYzs7Z0NBb0JBQyxZOztnQ0FvQkFDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7UUNuQ0FXLHFCLEdBQUFBLHFCO1FBZUFDLG1CLEdBQUFBLG1CO1FBZUFDLHFCLEdBQUFBLHFCO0FBcENoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNGLHFCQUFULENBQStCRyxNQUEvQixFQUF1Qzs7QUFFNUMsTUFBTVQsTUFBT1MsTUFBRCxHQUFTO0FBQ2pCO0FBQ0FSLFVBQU0sb0JBRE47QUFFQUMsYUFBU1EsV0FBV0QsTUFBWDtBQUZULEdBRFEsR0FLUjtBQUNBUixVQUFNLG9CQUROO0FBRUFDLGFBQVM7QUFGVCxHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7QUFFTSxTQUFTTyxtQkFBVCxDQUE2QkksTUFBN0IsRUFBcUM7O0FBRTFDLE1BQU1YLE1BQU9XLE1BQUQsR0FBUztBQUNqQjtBQUNBVixVQUFNLGtCQUROO0FBRUFDLGFBQVNTO0FBRlQsR0FEUSxHQUtSO0FBQ0FWLFVBQU0sa0JBRE47QUFFQUMsYUFBUztBQUZULEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOztBQUVNLFNBQVNRLHFCQUFULENBQStCRyxNQUEvQixFQUF1Qzs7QUFFNUMsTUFBTVgsTUFBT1csTUFBRCxHQUFTO0FBQ2pCO0FBQ0FWLFVBQU0sb0JBRE47QUFFQUMsYUFBU1M7QUFGVCxHQURRLEdBS1I7QUFDQVYsVUFBTSxvQkFETjtBQUVBQyxhQUFTO0FBRlQsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Z0NBbElnQk0scUI7O2dDQWVBQyxtQjs7Z0NBZUFDLHFCOzs7Ozs7Ozs7O0FDcENoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNB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LEtBQVA7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBSUEsT0FBSixFQUFhO0FBQ1hELGFBQU9uYSxJQUFQLENBQVl2RCxNQUFaO0FBQ0Q7QUFFRixHQWpCRDs7QUFtQkEsTUFBTUMsTUFBT3lkLE9BQU96YSxNQUFSLEdBQ1I7QUFDQS9DLFVBQU0sdUJBRE47QUFFQUMsYUFBU3VkO0FBRlQsR0FEUSxHQUtSO0FBQ0F4ZCxVQUFNLG9CQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOzs7Ozs7OztnQ0ExQ2UyVCxTOztnQ0FLQWhVLFkiLCJmaWxlIjoic2FsZXMtYmEwMTQxMWFiNzU3MzE5ODlmY2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnRTZWxlY3RlZChjb2RlLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgY2xpZW50U2VsZWN0ZWQgPSBjbGllbnRzLmZpbmRJbmRleChjbGllbnQgPT4gY2xpZW50LmNvZGUgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGNsaWVudFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ0NMSUVOVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2xpZW50OiBjbGllbnRzW2NsaWVudFNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTZWxlY3RlZChfaWQsIHVzZXJzKSB7XG5cbiAgY29uc3QgdXNlclNlbGVjdGVkID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5faWQgPT0gX2lkKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAodXNlclNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1VTRVJfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VTRVJfU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB1c2Vyc1t1c2VyU2VsZWN0ZWRdXG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhc2hBbW91bnQoYW1vdW50KSB7XG5cbiAgY29uc3QgcmVzID0gKGFtb3VudCkgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogcGFyc2VGbG9hdChhbW91bnQpXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVNIX0FNT1VOVCcsXG4gICAgICBwYXlsb2FkOiAwXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZEF1dGgobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6IG51bWJlclxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhudW1iZXIpIHtcblxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxuICAgID8ge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfRElHSVRTJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvYWRTYWxlKGlkLCBzYWxlcykge1xuLy8gICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gc2FsZXMuZmlsdGVyKHNhbGUgPT4ge1xuLy8gICAgIHJldHVybiBzYWxlLmlkID09IGlkXG4vLyAgIH0pXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGlmIChmaWx0ZXJlZFNhbGVzLmxlbmd0aCkge1xuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddID0gbmV3IERhdGUoZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddKVxuLy8gICAgICAgLy8gZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2NhcnQnXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFZlbnRhICMke2lkfWBcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NsaWVudCddWydzYWxlTG9hZGVkJ10gPSB0cnVlXG5cbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdLl9pZH0pXG5cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RfRk9VTkRfU0FMRScsIHBheWxvYWQ6IGlkfSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuXG4vLyAgIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuLy8gICBjb25zdCBtb3ZlbWVudHMgPSBrd2FyZ3MubW92ZW1lbnRzXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGNvbnN0IGRiID0gbmV3IFBvdWNoREIoa3dhcmdzLmRiKVxuXG4vLyAgICAgZGIucG9zdChpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogaXRlbX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogcmVzcG9uc2UuaWR9KVxuXG4vLyAgICAgICBpZiAoaXRlbS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7IC8vIElGIENSRURJVCBDUkVBVEUgQ1JFRElUIE1PVkVNRU5UXG4vLyAgICAgICAgIGNvbnN0IGRiMiA9IG5ldyBQb3VjaERCKCdnZW5lcmFsJylcbi8vICAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHJlc3BvbnNlLmlkLCBpdGVtKVxuXG4vLyAgICAgICAgIGRiMi5wb3N0KG1vdmVtZW50KS50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICB9KS5jYXRjaChlcnIgPT4geyAvLyBJRiBFUlJPUiBTSE9XIE1FU1NBR0Vcbi8vICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgbW92aW1pZW50byBkZSBjcsOpZGl0bywgcG9yIGZhdm9yIGFudWxlIGxhIGZhY3R1cmEgeSBjcmVlbGFcbi8vICAgICAgICAgICBkZSBudWV2byBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgIH0gZWxzZSB7IC8vIElGIE5PVCBDUkVESVQgU0hPVyBQQU5FTFNcbi8vICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICB9XG5cbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHNhbGVJZCwgc2FsZSkge1xuXG4vLyAgIGNvbnN0IHNvcnRlZE1vdmVtZW50cyA9IG1vdmVtZW50cy5sZW5ndGggPiAxID8gbW92ZW1lbnRzLnNvcnQoKGEsIGIpID0+IHtcbi8vICAgICBpZiAoYS5kb2N1bWVudCA8IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAxXG4vLyAgICAgfVxuLy8gICAgIGlmIChhLmRvY3VtZW50ID4gYi5kb2N1bWVudCkge1xuLy8gICAgICAgcmV0dXJuIC0xXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAwXG4vLyAgIH0pIDogbW92ZW1lbnRzXG5cbi8vICAgY29uc3QgbmV4dElkID0gc29ydGVkTW92ZW1lbnRzLmxlbmd0aCA+IDAgPyBzb3J0ZWRNb3ZlbWVudHNbMF0uZG9jdW1lbnQgKyAxIDogMVxuXG4vLyAgIGNvbnN0IG1vdmVtZW50ID0ge1xuLy8gICAgICdkb2N1bWVudCc6IG5leHRJZCxcbi8vICAgICAnZG9jVHlwZSc6ICdDTElFTlRfTU9WRU1FTlQnLFxuLy8gICAgICdjbGllbnRJZCc6IHNhbGUuY2xpZW50Ll9pZCxcbi8vICAgICAndHlwZSc6ICdDUkVESVQnLFxuLy8gICAgICdhbW91bnQnOiBwYXJzZUZsb2F0KHNhbGUuY2FydC5jYXJ0VG90YWwpLFxuLy8gICAgICdkYXRlJzogbmV3IERhdGUoKSxcbi8vICAgICAnc2FsZV9pZCc6IHNhbGVJZCxcbi8vICAgICAnc2FsZUlkJzogc2FsZS5pZCxcbi8vICAgICAnZGVzY3JpcHRpb24nOiBgVmVudGEgYSBjcsOpZGl0byBjb24gZmFjdHVyYSAjJHtzYWxlLmlkfWBcbi8vICAgfVxuXG4vLyAgIHJldHVybiBtb3ZlbWVudFxuXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2FjdGlvbnMuanMiLCIvKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4xXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09ORklHIERFRkFVTFQgQVhJT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHRVQgRlVOQ1RJT05TIChSRVRSSUVWRSBBTEwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRGlzcGF0Y2goa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgLy8gSUYgVEhFIEVSUk9SIElTIFVOQVVUT1JJWkVEIFBBR0UgV0lMTCBTSE9XIFRIRSBNRVNTQUdFXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURvdWJsZURpc3BhdGNoKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcbiAgY29uc3Qgc3VjY2Vzc1R5cGUyID0ga3dhcmdzLnN1Y2Nlc3NUeXBlMlxuICBjb25zdCBlcnJvclR5cGUgPSBrd2FyZ3MuZXJyb3JUeXBlXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZTIsIHBheWxvYWQ6ICcnfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SZXR1cm4oa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuXG4gIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgcmV0dXJuIGVycm9yXG4gIH0pXG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTRVQgRlVOQ1RJT04gKFJFVFJJRVZFIElORElWSURVQUwpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGxvb2tVcFZhbHVlID0ga3dhcmdzLmxvb2tVcFZhbHVlXG4gIGNvbnN0IGxvb2tVcEZpZWxkID0ga3dhcmdzLmxvb2tVcEZpZWxkXG4gIGNvbnN0IGhpc3RvcnkgPSBrd2FyZ3MuaGlzdG9yeVxuICBjb25zdCByZWRpcmVjdFVybCA9IGt3YXJncy5yZWRpcmVjdFVybFxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApXG4gICAgYXhpb3MuZ2V0KGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAvLyBJRiBUSEVSRSBJUyBNT1JFIFRIQU4gT05FIEVMRU1FTlQgRklMVEVSRURcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdBVEVOQ0nDk04nLCBgRXhpc3RlIG1hcyBkZSB1biAke2t3YXJncy5tb2RlbE5hbWV9IGNvbiBlbCAke2t3YXJncy5sb29rVXBOYW1lfTpcbiAgICAgICAgICAke2t3YXJncy5sb29rVXBWYWx1ZX0sIHNlIHV0aWxpemFyw6EgZWwgcHJpbWVybyBlbiBsaXN0YSwgcG9yIGxvIHF1ZSBwdWVkZSBubyBzZXIgZWwgbWlzbW8gcXVlIHVkIGRlc2VhXG4gICAgICAgICAgYWN0dWFsaXphciwgZXN0byBwdWVkZSBkZWJlcnNlIGEgdW4gZXJyb3IsIHBvciBmYXZvciByZXZpc2UgbG9zXG4gICAgICAgICAgZGF0b3MgbyBjb250YWN0ZSBjb24gZWwgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYS5gKVxuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFbMF19KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZTIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFbMF19KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hFcnJvclR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYE5vIGhheSAke2t3YXJncy5tb2RlbE5hbWV9IGNvbiBlbCB2YWxvciBkZSAke2t3YXJncy5sb29rVXBOYW1lfTogJHtrd2FyZ3MubG9va1VwVmFsdWV9YCxcbiAgICAgICAgICBmdW5jdGlvbigpIHsgaGlzdG9yeS5wdXNoKHJlZGlyZWN0VXJsKSB9KVxuICAgICAgfVxuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIGVsIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICB9KVxuICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGRlbGV0ZSBpdGVtWydpZCddXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcbiAgY29uc3QgaXNTYWxlID0ga3dhcmdzLmlzU2FsZVxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgaWYgKGlzU2FsZSkge1xuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVUERBVEUgRlVOQ1RJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVUERBVEUgUEFSVElBTExZIEZVTkNUSU9OIChQQVRDSClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoa3dhcmdzLnN1Y2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9VQkxFIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW1zKGt3YXJncywga3dhcmdzMikge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIGNvbnN0IGl0ZW0yID0ga3dhcmdzMi5pdGVtXG4gIGNvbnN0IHVybDIgPSBrd2FyZ3MyLnVybFxuICBjb25zdCBsb2dDb2RlMiA9IGt3YXJnczIubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkMiA9IGt3YXJnczIuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbDIgPSBrd2FyZ3MyLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uMiA9IGt3YXJnczIubG9nRGVzY3JpcHRpb25cblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAvLyBGSVJTVCBQQVRDSCBUSEVOXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcblxuICAgICAgICAvLyBTRUNPTkQgUEFUQ0hcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgICAgICB1cmw6IHVybDIsXG4gICAgICAgICAgZGF0YTogaXRlbTJcbiAgICAgICAgfSlcbiAgICAgICAgICAvLyBTRUNPTkQgUEFUQ0ggVEhFTlxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGt3YXJnczIuc3VjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJnczIuc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoa3dhcmdzMi5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgICAgICBrd2FyZ3MyLmhpc3RvcnkucHVzaChrd2FyZ3MyLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzMi5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgICAgIHNhdmVMb2cobG9nQ29kZTIsIGxvZ01vZGVsMiwgaXRlbU9sZDIsIGl0ZW0yLCBsb2dEZXNjcmlwdGlvbjIsIHVzZXIpXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgICAgICAvLyBTRUNPTkQgUEFUQ0ggQ0FUQ0hcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzMi5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgICAgICB9KVxuXG4gICAgICAvLyBGSVJTVCBQQVRDSCBDQVRDSFxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBERUxFVEUgRlVOQ1RJT04gKERFTEVURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbW9kZWwgPSBrd2FyZ3MubW9kZWxOYW1lXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCAnRWxlbWVudG8gZWxpbWluYWRvIHNhdGlmYWN0b3JpYW1lbnRlJylcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEh1Ym8gdW4gZXJyb3IgYWwgZWxpbWluYXIgZWwgJHttb2RlbH0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExPQUQgQ09ORklHIEZVTkNUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2xvYmFsQ29uZmlnKHNlY3Rpb24sIG5hbWUsIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgaWYgKG5hbWUpIHtcblxuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbGNvbmYvJHtzZWN0aW9ufV9fJHtuYW1lfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gVE9ETyBTaW5nbGUgY29uZmlnIGZldGNoXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG4gICAgICBheGlvcy5nZXQoYC9hcGkvZ2xvYmFscHJlZnNgKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRoZSBwcm9wZXJ0eSB0byBtb2RpZnkgaW4gcmVkdWNlclxuICAgICAgICBjb25zdCBjb25maWcgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgPyByZXNwb25zZS5kYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnNlY3Rpb24gPT0gc2VjdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiB7fVxuICAgICAgICBjb25zdCBkYXRhID0ge31cbiAgICAgICAgY29uZmlnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgZGF0YVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzLCBwYXlsb2FkOiB7ZGF0YTogZGF0YSwgc2VjdGlvbjogc2VjdGlvbn19KVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0FWRSBMT0cgRlVOQ1RJT04gKENSRUFURSBMT0cpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9nIChjb2RlLCBtb2RlbCwgb2xkT2JqZWN0LCBvYmplY3QsIGRlc2NyaXB0aW9uLCB1c2VyKSB7XG5cbiAgY29uc3QgcHJldk9iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9sZE9iamVjdClcbiAgY29uc3QgbmV3T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxuICBjb25zdCB1c2VyMiA9IEpTT04uc3RyaW5naWZ5KHVzZXIpXG5cbiAgY29uc3QgaXRlbSA9IHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBwcmV2X29iamVjdDogcHJldk9iamVjdCxcbiAgICBuZXdfb2JqZWN0OiBuZXdPYmplY3QsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHVzZXI6IHVzZXIyXG4gIH1cblxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS9sb2dzLycsXG4gICAgZGF0YTogaXRlbVxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgIH1cbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBFcnJvciBhbCBjcmVhciBlbCBMb2cgZGVsIG1vdmltaWVudG8sIEVSUk9SOiAke2Vycn0uYClcbiAgICB9KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFVWCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBORVhUIE5VTUVSSUMgQ09ERVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHROdW1lcmljQ29kZShlbGVtZW50cywgZmllbGQpIHtcblxuICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG5cbiAgICBsZXQga2V5cyA9IGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnRbZmllbGRdKVxuXG4gICAga2V5cyA9IGtleXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgY29uc3QgbWF4ID0ga2V5cy5wb3AoKVxuICAgIGNvbnN0IG5leHQgPSBwYXJzZUludChtYXgpICsgMVxuICAgIHJldHVybiBuZXh0LnRvU3RyaW5nKClcblxuICB9XG5cbiAgcmV0dXJuIDFcblxufVxuXG4vLyBORVhUIFBSRVZJT1VTIElURU1TXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV4dFByZXZJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGNvZGUgPSBrd2FyZ3MuY29kZVxuICBjb25zdCBpdGVtcyA9IGt3YXJncy5pdGVtc1xuICBjb25zdCBjb2RlRmllbGQgPSBrd2FyZ3MuY29kZUZpZWxkXG4gIGxldCBwcmV2aW91cyA9IDBcbiAgbGV0IG5leHQgPSAwXG5cbiAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhW2NvZGVGaWVsZF0gLSBiW2NvZGVGaWVsZF1cbiAgfSlcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtW2NvZGVGaWVsZF0gPT0gY29kZSkge1xuICAgICAgbmV4dCA9IGluZGV4ICsgMVxuICAgICAgcHJldmlvdXMgPSBpbmRleCAtIDFcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5leHRDb2RlID0gaXRlbXNbbmV4dF0gPyBpdGVtc1tuZXh0XVtjb2RlRmllbGRdIDogaXRlbXNbMF1bY29kZUZpZWxkXVxuICBjb25zdCBwcmV2Q29kZSA9IGl0ZW1zW3ByZXZpb3VzXSA/IGl0ZW1zW3ByZXZpb3VzXVtjb2RlRmllbGRdIDogaXRlbXMucG9wKClbY29kZUZpZWxkXVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiB7bmV4dDogbmV4dENvZGUsIHByZXZpb3VzOiBwcmV2Q29kZX19KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9hcGkuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHV1aWR2MSA9IHJlcXVpcmUoJ3V1aWQvdjEnKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZ2xvYmE7IGRpc2NvdW50IG9mIGNvbXBsZXRlIHN0b3JhZ2Ugb2YgaXRlbXMsIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlLCB0aGVuIHVwZGF0aW5nIERPTUVcbmV4cG9ydCBmdW5jdGlvbiByZWNhbGNDYXJ0KGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgbmV3Q2FydCA9IGl0ZW1zSW5DYXJ0Lm1hcChpdGVtID0+IHtcblxuICAgIGNvbnN0IG5ld0l0ZW0gPSBpdGVtXG5cbiAgICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW0ucHJvZHVjdCwgaXRlbS5xdHksIGl0ZW0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgICBuZXdJdGVtLnN1YnRvdGFsID0gZGF0YS5zdWJ0b3RhbFxuICAgIG5ld0l0ZW0udG90YWxXaXRoSXYgPSBkYXRhLnRvdGFsV2l0aEl2XG4gICAgbmV3SXRlbS5kaXNjb3VudEN1cnJlbmN5ID0gZGF0YS5kaXNjb3VudEN1cnJlbmN5XG4gICAgbmV3SXRlbS5zdWJUb3RhbE5vRGlzY291bnQgPSBkYXRhLnN1YlRvdGFsTm9EaXNjb3VudFxuICAgIG5ld0l0ZW0ucHJpY2VUb1VzZSA9IGRhdGEucHJpY2VUb1VzZVxuXG4gICAgcmV0dXJuIG5ld0l0ZW1cblxuICB9KVxuXG4gIHJldHVybiB7dHlwZTogJ1JFUExBQ0VfQ0FSVCcsIHBheWxvYWQ6IG5ld0NhcnR9XG5cbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBpbmxpbmUgZGlzY291bnQgb2YgYW4gaXRlbSwgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtRGlzY291bnQoaXRlbXNJbkNhcnQsIGNvZGUsIGRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5LCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBpbmxpbmUgZGlzY291bnQgb2YgYW4gaXRlbSwgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtTG90ZShpdGVtc0luQ2FydCwgY29kZSwgbG90ZSkge1xuICBjb25zdCBsb3RlTnVtID0gIWxvdGUgPyAnLScgOiBsb3RlXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUX0lURU1fTE9URScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGxvdGU6IGxvdGVOdW0sXG4gICAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuLy8gV2hlbiBpdGVtIGlzIHNlbGVjdGVkIGluIGNvZGUgZmllbGRcbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsIGRlZmF1bHRDb25maWcsIHVzZXJDb25maWcpIHtcblxuICBjb25zdCBwZXJMaW5lID0gZmFsc2VcblxuICBjb25zdCBwcm9kdWN0U2VsZWN0ZWQgPSBwcm9kdWN0cy5maW5kSW5kZXgocHJvZHVjdCA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IHByb2R1Y3QuYmFyY29kZSA9PSBjb2RlXG4gIH0pIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChwcm9kdWN0U2VsZWN0ZWQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpXG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFVwZGF0ZXMgQW1vdW50IGJhc2VkIG9uIHF0eSBpbnB1dCBmaWVsZFxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXR5IChjb2RlLCBxdHksIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXR5Q29kZSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBpdGVtLnByb2R1Y3QuYmFyY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBwYXJzZUZsb2F0KHF0eSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIFVwZGF0ZXMgQW1vdW50IGJhc2VkIG9uIHF0eSBpbnB1dCBmaWVsZFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3ViT25lIChjb2RlLCBzdWJPckFkZCwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHN1Yk9yQWRkID8gcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgMSkgOiBwYXJzZUZsb2F0KGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgLSAxKVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0NBTCBBVVggRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gY2hlY2tzIGluIGNhcnQgaWYgaXRlbSBhbHJlYWR5IGV4aXN0c1xuZnVuY3Rpb24gY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKSB7XG5cbiAgLy8gY2hlY2sgaWYgcHJvZHVjdCBpbiBjYXJ0XG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGNhcnQgPT4gY2FydC5wcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBjYXJ0LnByb2R1Y3QuYmFyY29kZSA9PSBjb2RlKVxuXG4gIGNvbnN0IGRhdGFOZXdQcm9kID0gY2FjbFN1YnRvdGFsKHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sIHF0eSwgMCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcblxuICAvLyBDSEVDSyBJRiBDT05GSUcgQUxMT1dTIE1VTFRJUExFIExJTkVTIE9SIE5PVFxuICBpZiAocGVyTGluZSkge1xuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxuICAgIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBpbiBjYXJ0IERpc3BhdHMgQUREX1RPX1RBQkxFLCBpZiBleGlzdHMgZGlzcGF0Y2ggY2FydCB1cGRhdGVkXG4gICAgICA/IHtcbiAgICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgICBxdHk6IHF0eSxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YU5ld1Byb2Quc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcbiAgICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgICAgbG90ZTogJy0nLFxuICAgICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6IHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyBxdHksXG4gICAgICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIHJldHVybiByZXNcblxuICAvLyBJR05PUkUgSUYgQUxSRUFEWSBJTiBDQVJUIElGIENPTkZJRyBTQVlTIFRIQVRcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB0eXBlOiAnQUREX1RPX0NBUlQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLFxuICAgICAgICBxdHk6IHF0eSxcbiAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGFOZXdQcm9kLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YU5ld1Byb2Quc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgIHRvdGFsV2l0aEl2OiBkYXRhTmV3UHJvZC50b3RhbFdpdGhJdixcbiAgICAgICAgbG90ZTogJy0nLFxuICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG59XG5cbi8vIGNhbGN1bGF0ZXMgdGhlIHN1YnRvdGFsIGJ5IGxpbmUsIGFsc28gdGhlIHRvdGFsIHdpdGggaXYgaW5jbHVkZWQsIHRoZSBkaXNjb3VudCBpbiBjdXJyZW5jeSBmb3JtYXRcbmZ1bmN0aW9uIGNhY2xTdWJ0b3RhbChwcm9kdWN0LCBxdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IHByaWNlID0gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpXG5cbiAgY29uc3Qgc3ViVG90YWxOb0Rpc2NvdW50ID0gcHJpY2UgKiBxdHlcblxuICBjb25zdCBzdWJUb3RhbCA9IHByaWNlICogcXR5ICogKDEgLSAocHJvZHVjdERpc2NvdW50IC8gMTAwKSkgKiAoMSAtIChnbG9iYWxEaXNjb3VudCAvIDEwMCkpXG5cbiAgY29uc3QgaXYxID0gKHByb2R1Y3QudXNlX3RheGVzKVxuICAgID8gc3ViVG90YWwgKiAocHJvZHVjdC50YXhlcyAvIDEwMClcbiAgICA6IDBcblxuICBjb25zdCBpdjIgPSAocHJvZHVjdC51c2VfdGF4ZXMyKVxuICAgID8gc3ViVG90YWwgKiAocHJvZHVjdC50YXhlczIgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYzID0gKHByb2R1Y3QudXNlX3RheGVzMylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMzIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IHRvdGFsV2l0aEl2ID0gc3ViVG90YWwgKyBpdjEgKyBpdjIgKyBpdjNcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5SW5MaW5lID0gcHJpY2UgKiBxdHkgKiAocHJvZHVjdERpc2NvdW50IC8gMTAwKVxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5R2xvYmFsID0gKChwcmljZSAqIHF0eSkgLSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lKSAqIChnbG9iYWxEaXNjb3VudCAvIDEwMClcblxuICBjb25zdCBkaXNjb3VudEN1cnJlbmN5ID0gZGlzY291bnRDdXJyZW5jeUluTGluZSArIGRpc2NvdW50Q3VycmVuY3lHbG9iYWxcblxuICByZXR1cm4ge1xuICAgIHN1YnRvdGFsOiBzdWJUb3RhbCxcbiAgICB0b3RhbFdpdGhJdjogdG90YWxXaXRoSXYsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGlzY291bnRDdXJyZW5jeSxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBwcmljZVRvVXNlOiBwcmljZVxuICB9XG5cbn1cblxuLy8gdXBkYXRlcyBhbiBpdGVtIGluIHRoZSBjYXJ0IHdpdGggbmV3IGluZm9ybWF0aW9uLCB0aGlzIGF1eCBmdW50aW9uIHJldHVybnMgbmV3IHVwZGF0ZWQgb2JqZWN0IHJlYWR5IGZvciByZXBsYWNlIHRoZSBzdG9yZWQgb25lXG5mdW5jdGlvbiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgdXVpZCkge1xuXG4gIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIHJldHVybiB7XG4gICAgdXVpZDogdXVpZCxcbiAgICBwcm9kdWN0OiBpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCxcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgcXR5OiBuZXdRdHksXG4gICAgZGlzY291bnQ6IHByb2R1Y3REaXNjb3VudCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHN1YnRvdGFsOiBkYXRhLnN1YnRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiBkYXRhLnRvdGFsV2l0aEl2LFxuICAgIGxvdGU6IGl0ZW1zSW5DYXJ0W2luZGV4XS5sb3RlLFxuICAgIHByaWNlVG9Vc2U6IGRhdGEucHJpY2VUb1VzZVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluIHByaWNlIHRvIHVzZSBpbiBjYWxjdWxhdGlvblxuZnVuY3Rpb24gcHJpY2VUb1VzZShwcm9kdWN0LCBjbGllbnQpIHtcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0dFTkVSQUwnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTMpIHJldHVybiBwcm9kdWN0LnByaWNlM1xuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0TW9uZXkuanMnXG5cbi8vIFJFRFVYIFBST1ZJREVSXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIENPTVBPTkVOVFNcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbi9tYWluLmpzeCdcblxuLy8gU1RPUkVcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlLmpzJ1xuXG53aW5kb3cuYWxlcnRpZnkgPSBhbGVydGlmeVxuZm9ybWF0TW9uZXkoKVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxNYWluIC8+XG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9hcHAuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7ZmVjdGhQcm9maWxlfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG4vLyBDT01QT05FTlRTXG5cbmltcG9ydCBUb3BCYXIgZnJvbSAnLi4vbGF5b3V0L3RvcEJhci90b3BCYXIuanN4J1xuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3gnXG5pbXBvcnQgRmV0Y2hpbmcgZnJvbSAnLi4vLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3gnXG5cbi8vIGltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoaW5nOiBzdG9yZS5mZXRjaGluZy5mZXRjaGluZyxcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZlY3RoUHJvZmlsZSgpKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZmV0Y2hpbmcgPSB0aGlzLnByb3BzLmZldGNoaW5nID8gPEZldGNoaW5nIC8+IDogJydcbiAgICBjb25zdCBtYWluQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdtYWluQ29udGFpbmVyJyA6ICdtYWluQ29udGFpbmVyIHNpZGVIaWRkZW4nXG4gICAgY29uc3QgY29udGVudCA9IDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZU1lbnUgLz5cbiAgICAgICAgPGRpdiBpZD0nbWFpbkNvbnRhaW5lcicgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICAgIDxUb3BCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRhaW5lci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtyb3V0ZXN9XG4gICAgICAgICAgICB7ZmV0Y2hpbmd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9tYWluLmpzeCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoUHJvZmlsZSgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9wcm9maWxlLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnLCBwYXlsb2FkOiB7dXNlcjogcmVzcG9uc2UuZGF0YVswXS5maWVsZHMsIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGFbMV0uZmllbGRzfX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aElzQWRtaW5Mb2NrZWQoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJwcmVmcy9hZG1pbl9faXNfYWRtaW5fbG9ja2VkLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudmFsdWV9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbi8vIFJvdXRlcyBDb21wb25lbnRzXG5cbmltcG9ydCBIb21lIGZyb20gJy4uL2hvbWUvaG9tZS5qc3gnXG5pbXBvcnQgU2FsZSBmcm9tICcuLi9zYWxlL21haW4uanN4J1xuXG5jb25zdCByb3V0ZXMgPSA8ZGl2IGNsYXNzTmFtZT0naGVpZ2gxMDAnPlxuXG4gIDxSb3V0ZSBleGFjdCBwYXRoPScvc2FsZXMnIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgPFJvdXRlIHBhdGg9Jy9zYWxlcy9zYWxlJyBjb21wb25lbnQ9e1NhbGV9IC8+XG5cbjwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdIT01FX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdNYWluIGhlaWdoMTAwJz5cbiAgICAgIEhPTUVcbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvaG9tZS9ob21lLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudC9jb250ZW50LmpzeCdcbmltcG9ydCBBc2lkZSBmcm9tICcuL2FzaWRlL2FzaWRlLmpzeCdcbmltcG9ydCBTZWFyY2hQcm9kdWN0IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3NlYXJjaFBhbmVsLmpzeCdcbmltcG9ydCBTZWFyY2hDbGllbnQgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3gnXG5pbXBvcnQgUGF5UGFuZWwgZnJvbSAnLi9wYXkvcGF5UGFuZWwuanN4J1xuaW1wb3J0IEludm9pY2VQYW5lbCBmcm9tICcuLi9nZW5lcmFsL2ludm9pY2UvaW52b2ljZVBhbmVsL2ludm9pY2VQYW5lbC5qc3gnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NBTEVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NhbGUnPlxuICAgICAgPENvbnRlbnQgLz5cbiAgICAgIDxBc2lkZSAvPlxuXG4gICAgICA8U2VhcmNoUHJvZHVjdCAvPlxuICAgICAgPFNlYXJjaENsaWVudCAvPlxuICAgICAgPFBheVBhbmVsIC8+XG4gICAgICA8SW52b2ljZVBhbmVsIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4J1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jYXJ0L2NhcnQuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50IGZ1bGxXaWR0aCcgOiAnc2FsZS1jb250ZW50J1xuICAgIGNvbnN0IGNhcnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC1jYXJ0JyA6ICdzYWxlLWNvbnRlbnQtY2FydCBmdWxsSGVpZ2h0J1xuICAgIGNvbnN0IHRvdGFsQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtdG90YWwnIDogJ3NhbGUtY29udGVudC10b3RhbCBjb2xsYXBzZWQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1jb250ZW50LXByb2R1Y3QnID5cbiAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcnRDbGFzc30gPlxuICAgICAgICA8Q2FydCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG90YWxDbGFzc30gPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLWxlZnQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2NvbnRlbnQvY29udGVudC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGlucHV0VmFsOiBzdG9yZS5wcm9kdWN0cy5pbnB1dFZhbCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvZGVJbnB1dC5mb2N1cygpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgcHJvZHVjdEt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvcHJvZHVjdHMnLFxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9QUk9EVUNUU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRJdGVtRGlzcGF0Y2gocHJvZHVjdEt3YXJncykpXG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RDbGljaygpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdQUk9EVUNUX1NIT1dfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMF0gLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcbiAgICAgICAgbGV0IHF0eSA9IGV2LnRhcmdldC52YWx1ZS5zcGxpdCgnKicpWzFdXG4gICAgICAgIHF0eSA9IChpc05hTihxdHkpKVxuICAgICAgICAgID8gMVxuICAgICAgICAgIDogcGFyc2VGbG9hdChxdHkpIC8vIGlmIG5vIHF0eSBzZXRzIHRvIDFcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxuICAgICAgICAvLyAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogMH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBwcm9kdWN0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8Yj5Qcm9kdWN0bzo8L2I+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlJz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJhcmNvZGUnIC8+XG4gICAgICAgICAgPGlucHV0IGlkPSdwcm9kdWN0Q29kZUlucHV0RmllbGQnIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb2RlSW5wdXQgPSBpbnB1dFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIGVsIEPDs2RpZ28gZGVsIFByb2R1Y3RvJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1jb2RlLWlucHV0IG1vdXNldHJhcCBmb3JtLWNvbnRyb2wgaW5wdXQtbGcnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaFByb2R1Y3RDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtc2VhcmNoJz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gNjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgcmV0dXJuIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcnRJdGVtcyBmcm9tICcuL2NhcnRJdGVtcy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzLFxuICAgIC8vIHByb2R1Y3RTZWFyY2hwYW5lbFZpc2libGU6IHN0b3JlLnNlYXJjaFByb2R1Y3RzLnZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3Qtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtjJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykuZm9jdXMoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXG5cbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCB1c2VMb3RlID0gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnXG4gICAgLy8gICA/IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZy5jYXJ0SXRlbVVzZUxvdGVcbiAgICAvLyAgIDogZmFsc2VcblxuICAgIC8vIGNvbnN0IGxvdGVGaWVsZCA9IHVzZUxvdGVcbiAgICAvLyAgID8gPHRoPkxvdGU8L3RoPlxuICAgIC8vICAgOiA8dGggLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FydCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2Q8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICA8aDU+QXJ0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1xdHknPlxuICAgICAgICAgIDxoNT5DYW50PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWRpc2NvdW50Jz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItaXZhJz5cbiAgICAgICAgICA8aDU+SVY8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXRvdGFsJz5cbiAgICAgICAgICA8aDU+VG90YWwgSVZJPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcnRJdGVtcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VwZGF0ZVRvdGFscywgcmVtb3ZlRnJvbUNhcnR9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7dXBkYXRlSXRlbURpc2NvdW50LCB1cGRhdGVJdGVtTG90ZSwgdXBkYXRlUXR5LCBhZGRTdWJPbmUsIHVwZGF0ZVF0eUNvZGV9IGZyb20gJy4uL3Byb2R1Y3QvYWN0aW9ucydcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZCxcbiAgICBjYXJ0SXRlbUFjdGl2ZTogc3RvcmUuY2FydC5jYXJ0SXRlbUFjdGl2ZVxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBPbiBjb21wb25lbnQgdXBkYXRlIChUaGUgY2FydCBoYXMgYmVlbiBtb2RpZmllZCkgY2FsbHMgdGhlIHVwZGF0ZSB0b3RhbHMgbWV0aG9kIGluIGFjdGlvbnMgZmlsZS5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVUb3RhbHModGhpcy5wcm9wcy5pbkNhcnQpKVxuXG4gICAgLy8gQXV0byBTY3JvbGwgVG8gZW5kIG9mIGNvbnRhaW5lclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1ib2R5JylcbiAgICBlbGVtLnNjcm9sbFRvcCA9IGVsZW0uc2Nyb2xsSGVpZ2h0XG5cbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgLy8gICBpZiAodGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSAhPSBuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmUpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke25leHRQcm9wcy5jYXJ0SXRlbUFjdGl2ZX1gKSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK3BsdXMnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdWJPbmUoX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIHRydWUsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrZicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBxdHkke190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlfWApLmZvY3VzKClcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCstJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdWJPbmUoX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIGZhbHNlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICBfdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kKyonLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBfX3RoaXMgPSBfdGhpc1xuICAgICAgYWxlcnRpZnkucHJvbXB0KGBOdWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkb2AsICdJbmdyZXNlIGxhIG51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvJywgJydcbiAgICAgICAgLCBmdW5jdGlvbihldnQsIHZhbHVlKSB7XG4gICAgICAgICAgX190aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVF0eUNvZGUoX190aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB2YWx1ZSwgX190aGlzLnByb3BzLmluQ2FydCxcbiAgICAgICAgICAgIF9fdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgX190aGlzLnByb3BzLmNsaWVudCkpXG4gICAgICAgIH1cbiAgICAgICAgLCBmdW5jdGlvbigpIHt9KVxuICAgICAgICAuc2V0KCdsYWJlbHMnLCB7b2s6ICdPaycsIGNhbmNlbDogJ0NhbmNlbGFyJ30pXG4gICAgfSlcbiAgfVxuXG4gIGRpc2NvdW50SW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgICB9XG5cbiAgfVxuXG4gIGRpc2NvdW50SW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1EaXNjb3VudCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgZGlzY291bnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgfVxuXG4gIHF0eUlucHV0Q2hhbmdlKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBxdHkgPSBwYXJzZUZsb2F0KChldi50YXJnZXQudmFsdWUpKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5KGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5pbkNhcnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICB9XG5cbiAgcXR5SW5wdXRLZXlQcmVzcyhldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJylcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcmVzc3NzcycsIGV2LmtleSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgbG90ZUlucHV0S2V5UHJlc3MoY29kZSwgZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgbG90ZSA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtTG90ZSh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgbG90ZSkpXG5cbiAgICB9XG5cbiAgfVxuXG4gIGxvdGVJbnB1dE9uQmx1cihjb2RlLCBldikge1xuXG4gICAgY29uc3QgbG90ZSA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtTG90ZSh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgbG90ZSkpXG5cbiAgfVxuXG4gIHNldENhcnRJdGVtQWN0aXZlKGNvZGUsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcblxuICB9XG5cbiAgcmVtb3ZlSXRlbShjb2RlLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVGcm9tQ2FydCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSkpXG5cbiAgfVxuXG4gIGZpZWxkRm9jdXMoZXYpIHtcbiAgICBldi50YXJnZXQuc2VsZWN0KClcbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgaXRlbXMgaW4gY2FydCB1c2luZyB0YWJsZSByb3dzXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcbiAgICBjb25zdCBpdGVtczIgPSBjYXJ0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICBjb25zdCBhY3RpdmVDbGFzcyA9IChpdGVtLnByb2R1Y3QuY29kZSA9PSB0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUpXG4gICAgICAgID8gJ2NhcnQtYWN0aXZlUm93IGNhcnQtYm9keS1pdGVtJ1xuICAgICAgICA6ICdjYXJ0LWJvZHktaXRlbSdcblxuICAgICAgY29uc3QgcmVtb3ZlSWNvbkNsYXNzID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/ICdyZW1vdmVJdGVtSWNvbiBkaXNhYmxlZCcgOiAncmVtb3ZlSXRlbUljb24nXG5cbiAgICAgIGNvbnN0IHRheGVzMSA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgICA/IGl0ZW0ucHJvZHVjdC50YXhlc1xuICAgICAgICA6IDBcblxuICAgICAgY29uc3QgcXR5RmllbGQgPSA8aW5wdXRcbiAgICAgICAgaWQ9e2BxdHkke2l0ZW0ucHJvZHVjdC5jb2RlfWB9XG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5xdHlJbnB1dENoYW5nZS5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICBvbktleVVwPXt0aGlzLnF0eUlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgdmFsdWU9e2l0ZW0ucXR5fVxuICAgICAgLz5cblxuICAgICAgY29uc3QgZGlzY291bnRGaWVsZCA9IHRoaXMucHJvcHMuY2xpZW50LnNhbGVMb2FkZWRcbiAgICAgICAgPyA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpc2NvdW50SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRpc2NvdW50SW5wdXRPbkJsdXIuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYXJzZUZsb2F0KGl0ZW0uZGlzY291bnQpfVxuICAgICAgICAvPlxuICAgICAgICA6IDxpbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGlzY291bnRJbnB1dE9uQmx1ci5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgLz5cblxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cbiAgICAgICAga2V5PXtpdGVtLnV1aWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0Q2FydEl0ZW1BY3RpdmUuYmluZCh0aGlzLCBpdGVtLnByb2R1Y3QuY29kZSl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1jb2RlJz5cbiAgICAgICAgICA8aDU+Q8OzZGlnbzwvaDU+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1xdHknPlxuICAgICAgICAgIDxoNT5DYW50aWRhZDwvaDU+XG4gICAgICAgICAge3F0eUZpZWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXVuaXRQcmljZSc+XG4gICAgICAgICAgPGg1PlAgVW5pdDwvaDU+XG4gICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWRpc2NvdW50Jz5cbiAgICAgICAgICA8aDU+RGVzYzwvaDU+XG4gICAgICAgICAge2Rpc2NvdW50RmllbGR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0taXZhJz5cbiAgICAgICAgICA8aDU+SVZBPC9oNT5cbiAgICAgICAgICB7dGF4ZXMxfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXRvdGFsJz5cbiAgICAgICAgICA8aDU+VG90YWw8L2g1PlxuICAgICAgICAgICAg4oKhIHtpdGVtLnRvdGFsV2l0aEl2LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtyZW1vdmVJY29uQ2xhc3N9PlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMtY2lyY2xlJyAvPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIH0pXG5cbiAgICAvLyByZXR1cm4gPHRib2R5IGNsYXNzTmFtZT0ndGFibGUtYm9keSc+XG4gICAgLy8gICB7aXRlbXN9XG4gICAgLy8gPC90Ym9keT5cblxuICAgIHJldHVybiA8ZGl2IGlkPSdjYXJ0LWJvZHknIGNsYXNzTmFtZT0nY2FydC1ib2R5Jz5cbiAgICAgIHtpdGVtczJ9XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9jYXJ0SXRlbXMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TIFVTRUQgSU4gQ09NUE9ORU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0b3RhbHMgdGhlIGNhcnQgc3RvcmUgaXRlbSwgZ2VuZXJhdGVzIG5ldyB2YWx1ZXMgYWNjb3JkaW5nIGNhcnQgaXRlbSBvYmplY3RzLCB0aGVuIHB1c2ggdGhlIHRvIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG90YWxzKGluQ2FydCkge1xuXG4gIGxldCBzdWJ0b3RhbCA9IDBcbiAgbGV0IHN1YlRvdGFsTm9EaXNjb3VudCA9IDBcbiAgbGV0IHRheGVzID0gMFxuICBsZXQgdG90YWwgPSAwXG4gIGxldCBkaXNjb3VudFRvdGFsID0gMFxuXG4gIC8vIGZvciBFYWNoIGVsZW1lbnQgYWRkcyB0aGUgdmFsdWVzIHRvIGdldCB0b3RhbHNcbiAgaW5DYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcblxuICAgIHN1YlRvdGFsTm9EaXNjb3VudCA9IHN1YlRvdGFsTm9EaXNjb3VudCArIGl0ZW0uc3ViVG90YWxOb0Rpc2NvdW50XG5cbiAgICBzdWJ0b3RhbCA9IHN1YnRvdGFsICsgaXRlbS5zdWJ0b3RhbFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICBjb25zdCB0YXhlc0NhbGMyID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMyKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczIgLyAxMDApXG4gICAgICA6IDBcblxuICAgIGNvbnN0IHRheGVzQ2FsYzMgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlczMpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMyAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgdGF4ZXMgPSB0YXhlcyArIHRheGVzQ2FsYyArIHRheGVzQ2FsYzIgKyB0YXhlc0NhbGMzXG5cbiAgICBkaXNjb3VudFRvdGFsID0gZGlzY291bnRUb3RhbCArIGl0ZW0uZGlzY291bnRDdXJyZW5jeSAvLyB0aGlzIGlzIHRoZSB2YWx1ZSBpbiBjdXJyZW5jeVxuXG4gIH0pXG4gIC8vIFRPRE8gQ29uZmlnIGZvciByb3VuZCBvciBub3RcbiAgLy8gdG90YWwgPSBNYXRoLnJvdW5kKHN1YnRvdGFsICsgdGF4ZXMpXG4gIHRvdGFsID0gc3VidG90YWwgKyB0YXhlc1xuICAvLyByZXR1cnMgYSBkaXNwYXRjaCB3aXRoIGEgcGF5bG9hZCBvZiB0aGUgb2J0YWluZWQgdmFsdWVzXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUX1RPVEFMUycsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc3VidG90YWw6IHN1YnRvdGFsLFxuICAgICAgdGF4ZXM6IHRheGVzLFxuICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgZGlzY291bnRUb3RhbDogZGlzY291bnRUb3RhbCxcbiAgICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgfVxuICB9XG59XG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaXRlbXNJbkNhcnQsIGNvZGUpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdSRU1PVkVfRlJPTV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IGluZGV4SW5DYXJ0XG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2FjdGlvbnMuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuLi8uLi9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4J1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi4vYnV0dG9ucy9idXR0b25zLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgdG9nZ2xlV2lkdGggKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgYXNpZGVDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUgY29sbGFwc2VkJyA6ICdzYWxlLWFzaWRlJ1xuICAgIGNvbnN0IGFzaWRlQ29udGFpbmVyQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWFzaWRlLWNvbnRlbnQgY29sbGFwc2VkJyA6ICdzYWxlLWFzaWRlLWNvbnRlbnQnXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthc2lkZUNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLWFycm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdy1jb250YWluZXInIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tcmlnaHQnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPENsaWVudCAvPlxuICAgICAgICA8VG90YWxzIC8+XG4gICAgICAgIDxCdXR0b25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QnV0dG9ucyAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLXRvdGFsJyA+XG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tcmlnaHQnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2lkdGguYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9hc2lkZS9hc2lkZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NsaWVudFNlbGVjdGVkLCBzZWFyY2hDbGllbnQsIHVzZXJTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtnZXRJdGVtRGlzcGF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7Z2V0Q2xpZW50RGVidH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZ2V0Q2xpZW50RGVidCdcbmltcG9ydCB7cmVjYWxjQ2FydH0gZnJvbSAnLi4vLi4vZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50cyxcbiAgICBjbGllbnRTZWxlY3RlZDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBjYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdXNlcnM6IHN0b3JlLmNsaWVudHMudXNlcnMsXG4gICAgdXNlcjogc3RvcmUuY2xpZW50cy51c2VyU2VsZWN0ZWQsXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzLFxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmNsaWVudFNlbGVjdGVkICE9IHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpIHtcbiAgICAgIC8vIHNldCB0aGUgZGlzY291bnQ6IGRlZmF1bHQgdmFsdWUgb3IgMFxuXG4gICAgICBpZiAoIW5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5zYWxlTG9hZGVkKSB7XG5cbiAgICAgICAgY29uc3Qga3dhcmdzID0ge1xuICAgICAgICAgIGNsaWVudF9pZDogbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLmlkLFxuICAgICAgICAgIHN1Y2Nlc3M6ICdTRVRfQ0xJRU5UX0RFQlQnLFxuICAgICAgICAgIGZhaWw6ICdTRVRfQ0xJRU5UX0RFQlRfRkFJTEVEJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzY291bnQgPSBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA/IG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50IDogMFxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydChuZXh0UHJvcHMuY2FydCwgZGlzY291bnQsIG5leHRQcm9wcy5jbGllbnQpKVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX0dMT0JBTF9ESVNDT1VOVCcsIHBheWxvYWQ6IGRpc2NvdW50fSlcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldENsaWVudERlYnQoa3dhcmdzKSlcblxuICAgICAgICAvLyBTRVRTIFZBTFVFIE9GIERFRkFVTFQgRElTQ09VTlQgVE8gRklFTEQgT1IgMFxuICAgICAgICBpZiAobmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gZGlzY291bnRcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX0NMSUVOVFMnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICBjb25zdCBjbGllbnRLd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL2NsaWVudHMnLFxuICAgICAgc3VjY2Vzc1R5cGU6ICdGRVRDSF9DTElFTlRTX0ZVTEZJTExFRCcsXG4gICAgICBlcnJvclR5cGU6ICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJ1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0SXRlbURpc3BhdGNoKGNsaWVudEt3YXJncykpXG5cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBjb25zdCBjb2RlID0gZXYudGFyZ2V0LnZhbHVlIC8vIFNwbGl0IHZhbCBbMF0gaXMgY29kZSBbMV0gaXMgcXR5XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsaWVudFNlbGVjdGVkKGNvZGUsIHRoaXMucHJvcHMuY2xpZW50cykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIH1cblxuICB9XG5cbiAgdXNlclNlbGVjdChldikge1xuICAgIGNvbnN0IF9pZCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXNlclNlbGVjdGVkKF9pZCwgdGhpcy5wcm9wcy51c2VycykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICB9XG5cbiAgdXNlclVuU2VsZWN0KGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1VTRVJfQ0xFQVInLCBwYXlsb2FkOiAnJ30pIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICB9XG5cbiAgc2VhcmNoQ2xpZW50Q2xpY2soKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCgpKVxuXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vIFNFTEVDVDIgREFUQVxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICBjb25zdCBjbGllbnRUb1Nob3cgPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZClcbiAgICAgID8gYCR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5uYW1lfSAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubGFzdF9uYW1lfWBcbiAgICAgIDogJ0NsaWVudGUgQ29udGFkbydcblxuICAgIC8vIGNvbnN0IGNyZWRpdEljb24gPSAodGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCAmJiB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmhhc19jcmVkaXQpXG4gICAgLy8gICA/ICdmYSBmYS1jaGVjay1zcXVhcmUnXG4gICAgLy8gICA6ICdmYSBmYS10aW1lcy1jaXJjbGUnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NsaWVudCc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtaW1nJz5cbiAgICAgICAgPGltZyBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hDbGllbnRDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIHNyYz0nL21lZGlhL2RlZmF1bHQvcHJvZmlsZS5qcGcnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhJz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Q2xpZW50ZSA6PC9oMz5cbiAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxuICAgICAgICAgIDxoMz5Ob21icmUgOjwvaDM+XG4gICAgICAgICAgPHNwYW4+e2NsaWVudFRvU2hvd308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBDSEVDSyBQRVJNSVNTSU9OUyBGT1IgQ1VSUkVOVCBVU0VSXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50RGVidChrd2FyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtjbGllbnRfaWQ6IGt3YXJncy5jbGllbnRfaWR9KVxuICAgIC8vIGNhbGxzIHRoZSBmdW5jdGlvbiBpbiBiYWNrZW5kIHRvIGNoZWNrIHBlcm1pc3Npb25zXG4gICAgYXhpb3MucG9zdCgnL2FwaS9nZXRjbGllbnRkZWJ0LycsIGRhdGEpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLnN1Y2Nlc3MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgaW50ZW50YXIgdmVyaWZpY2FyIGxvcyBwZXJtaXNvcyBkZSB1c3VhcmlvLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5mYWlsLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9nZXRDbGllbnREZWJ0LmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcydcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNjb3VudFZhbDogMFxuICAgIH1cbiAgfVxuXG4gIHNob3dJbnZvaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgICAgaWYgKGRpc2NvdW50IDw9IG1heERpc2NvdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmRpc2NvdW50VmFsID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgfVxuXG4gIH1cblxuICBpbnB1dE9uQmx1cihldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcbiAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICB9XG5cbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG90YWxzJz5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgJ3BhZGRpbmdUb3AnOiAnMCcsXG4gICAgICAgICdtYXJnaW5Ub3AnOiAnMCdcbiAgICAgIH19IGNsYXNzTmFtZT0nYmctd2hpdGUgcmlnaHQtaXRlbSc+XG4gICAgICAgIHsvKiA8c3Bhbj5cbiAgICAgICAgICA8Yj5Ub3RhbGVzOjwvYj5cbiAgICAgICAgPC9zcGFuPjxiciAvPiAqL31cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdG90YWxzLXRhYmxlJz5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5TdWItVG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICd3aWR0aCc6ICczNyUnXG4gICAgICAgICAgICAgIH19PkRlc2N1ZW50byAlPC90aD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD0nZGlzY291bnRGaWVsZCdcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaW5wdXRPbkJsdXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICczN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAwIDAgMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICdmb250U2l6ZSc6ICcxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2FsZV9nbG9iYWxfZGlzY291bnRfaW5wdXQgZm9ybS1jb250cm9sJyAvPlxuICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+RGVzY3VlbnRvOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SVY6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHsvKiA8dGggb25DbGljaz17dGhpcy5zaG93SW52b2ljZVBhbmVsLmJpbmQodGhpcyl9PlRvdGFsOjwvdGg+ICovfVxuICAgICAgICAgICAgICA8dGg+VG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNob3dQYXlQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd0lub2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd1NhbGVQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19TQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93UHJlc2FsZXNQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QUkVTQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBuZXdTYWxlKCkge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdORVdfU0FMRScsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICA/IDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dJbm9pY2VQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgICAgRmFjdHVyYVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5uZXdTYWxlLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgICBOdWV2YSBWZW50YVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1yZWZyZXNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDogJydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGJ1dHRvbnMnPlxuXG4gICAgICB7LyogPHNwYW4+XG4gICAgICAgIDxiPlBhZ286PGJyIC8+PC9iPlxuICAgICAgPC9zcGFuPiAqL31cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93UGF5UGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBDb2JyYXJcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1NhbGVQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIFZlbnRhcyBkZWwgZMOtYVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQcmVzYWxlc1BhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgUHJlLVZlbnRhc1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7YnV0dG9uc31cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZX1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIFByb2R1Y3RvPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZWFyY2hQcm9kdWN0fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uKClcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RBY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hQcm9kdWN0KHRoaXMucHJvcHMuc2VhcmNoVmFsdWUsIHRoaXMucHJvcHMucHJvZHVjdHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgRGVzY3JpcGNpw7NuOjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICAgIH19IGlkPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdwcm9kdWN0LXNlYXJjaC1idG4nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZFRhYmxlLCBoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoUHJvZHVjdHMucHJvZHVjdHNNYXRjaGVkLCBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzZWxlY3RQcm9kdWN0KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RQcm9kdWN0LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uY29kZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5zZWxscHJpY2V9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgfSlcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgPHRhYmxlIGlkPSdwcm9kdWN0ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwY2nDs248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0ncHJvZHVjdC1zZWFyY2gtdGFibGUtYm9keSc+XG4gICAgICAgICAgICAgIHtwcm9kdWN0c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoQ2xpZW50cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGFuZWxDbGljayhldikge1xuXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICB9XG5cbiAgfVxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxuICAgICAgPyAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLWNsaWVudCBmcm9tLXJpZ2h0IGlzLXZpc2libGUnXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Zpc2libGVPck5vdH0gb25DbGljaz17dGhpcy5wYW5lbENsaWNrLmJpbmQodGhpcyl9PlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgPGgxPkLDunNxdWVkYSBkZSBDbGllbnRlPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaENsaWVudH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hDbGllbnRBY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoQ2xpZW50QWN0aW9uKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQodmFsLCB0aGlzLnByb3BzLmNsaWVudHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2xpZW50LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBOb21icmU6PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J2NsaWVudC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdjbGllbnQtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZH0gZnJvbSAnLi4vLi4vY2xpZW50cy9hY3Rpb25zLmpzJ1xuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoQ2xpZW50cy5jbGllbnRzTWF0Y2hlZCwgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2VsZWN0Q2xpZW50KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjbGllbnRzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCBoYXNDcmVkaXQgPSAoaXRlbS5oYXNfY3JlZGl0KVxuICAgICAgICA/ICdTSSdcbiAgICAgICAgOiAnTk8nXG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RDbGllbnQuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2Ake2l0ZW0ubmFtZX0gJHtpdGVtLmxhc3RfbmFtZX1gfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2hhc0NyZWRpdH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDBcbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICA8dGFibGUgaWQ9J2NsaWVudGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Tm9tYnJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Q3LDqWRpdG88L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TYWxkbzwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdjbGllbnQtc2VhcmNoLXRhYmxlLWJvZHknPlxuICAgICAgICAgICAgICB7Y2xpZW50c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBQYXlNZXRob2QgZnJvbSAnLi9jb21wb25lbnRzL3BheU1ldGhvZC5qc3gnXG5pbXBvcnQgUGF5Q2FzaCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2Focy5qc3gnXG5pbXBvcnQgUGF5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2FyZC5qc3gnXG5pbXBvcnQgUGF5Q3JlZGl0IGZyb20gJy4vY29tcG9uZW50cy9wYXlDcmVkaXQuanN4J1xuaW1wb3J0IFBheU90aGVyIGZyb20gJy4vY29tcG9uZW50cy9wYXlPdGhlci5qc3gnXG5pbXBvcnQgUGF5U2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUucGF5LmlzVmlzaWJsZSwgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdwYXktcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ3BheS1wYW5lbCdcblxuICAgIGxldCBwYXlNZXRob2QgPSAnJ1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcblxuICAgICAgY2FzZSAnQ0FTSCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXNoIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXJkIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ1JFRCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDcmVkaXQgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gIGNhc2VcblxuICAgICAgY2FzZSAnT1RIRSc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlPdGhlciAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyBjYXNlXG5cbiAgICB9IC8vIHN3aXRjaFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLW1haW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgUmVnaXN0cmFyIFBhZ29cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBheU1ldGhvZCAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktYXJlYS1jb250YWluZXInPlxuXG4gICAgICAgICAge3BheU1ldGhvZH1cblxuICAgICAgICAgIDxQYXlTaWRlQmFyIC8+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNsaWNrQ2hhbmdlUGF5TWV0aG9kKG1ldGhvZCwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDSEFOR0VfUEFZX01FVEhPRCcsIHBheWxvYWQ6IG1ldGhvZH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QnPlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ1JFRCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ1JFRCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXJzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ09USEVSJyl9ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnT1RIRSdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPk90cm88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2hhcmUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhc2hBbW91bnR9IG9uQ2hhbmdlPXt0aGlzLnBheUFtb3VudENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2Focy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhcmRBdXRoLCB1cGRhdGVTdG9yZUNhcmREaWdpdHN9IGZyb20gJy4uL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NhcmRBdXRoOiBzdG9yZS5wYXkuY2FyZEF1dGgsIGNhcmREaWdpdHM6IHN0b3JlLnBheS5jYXJkRGlnaXRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUNhcmRBdXRoQ2hhbmdlZChldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmRBdXRoKGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICBwYXlDYXJkRGlnaXRzQ2hhbmdlZChldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmREaWdpdHMoZXYudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5UYXJqZXRhPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+NCBESUdJVE9TOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FyZERpZ2l0c30gb25DaGFuZ2U9e3RoaXMucGF5Q2FyZERpZ2l0c0NoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5BVVRPUklaQUNJw5NOOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FyZEF1dGh9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmRBdXRoQ2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCwgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q3JlZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXG4gICAgY29uc3QgY2xpZW50TGltaXQgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHtwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcbiAgICBjb25zdCBjbGllbnRBdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHthdmFpbGFibGUuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkzDjU1JVEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50TGltaXR9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkRJU1BPTklCTEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50QXZhaWxhYmxlfTwvZGl2PlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+IDxzcGFuPk90cm88L3NwYW4+IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNhdmVCdG4gZnJvbSAnLi4vLi4vc2F2ZS9zYXZlLmpzeCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxuICAgIHBheTogc3RvcmUucGF5LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcbiAgICAvLyBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5U2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2F2ZUJ0bigpIHtcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgY29uc3Qgc2FsZSA9IHtcbiAgICAgIGNhcnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2FydCksXG4gICAgICBjbGllbnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSxcbiAgICAgIHVzZXI6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudXNlciksXG4gICAgICBwYXk6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucGF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHtcbiAgICAgIHNhbGUucGF5LmRlYnQgPSB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXG4gICAgICBzYWxlLnBheS5wYXllZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3Qga3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9zYWxlcy8nLFxuICAgICAgaXRlbTogc2FsZSxcbiAgICAgIGxvZ0NvZGU6ICdTQUxFX0NSRUFURScsXG4gICAgICBsb2dEZXNjcmlwdGlvbjogJ0NyZWFjacOzbiBkZSBudWV2YSBWZW50YScsXG4gICAgICBsb2dNb2RlbDogJ1NBTEUnLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGl0ZW1PbGQ6ICcnLFxuICAgICAgc3VjZXNzTWVzc2FnZTogJ1ZlbnRhIGNyZWFkYSBDb3JyZWN0YW1lbnRlLicsXG4gICAgICBlcnJvck1lc3NhZ2U6ICdIdWJvIHVuIGVycm9yIGFsIGNyZWFyIGxhIFZlbnRhLCBpbnRlbnRlIGRlIG51ZXZvLicsXG4gICAgICBkaXNwYXRjaFR5cGU6ICdDTEVBUl9TQUxFJyxcbiAgICAgIGlzU2FsZTogdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICBNb3VzZXRyYXAucmVzZXQoKVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gMFxuICAgIGxldCBwYXlCdXR0b25DbGFzcyA9ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwpXG4gICAgY29uc3QgY2FzaCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudClcblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcblxuICAgICAgY2FzZSAnQ0FTSCc6XG4gICAgICB7XG4gICAgICAgIGNoYW5nZSA9IGNhc2ggLSB0b3RhbFxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgY2hhbmdlID49IDApXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ0NBUkQnOlxuICAgICAge1xuICAgICAgICBjb25zdCBhdXRoID0gdGhpcy5wcm9wcy5wYXkuY2FyZEF1dGhcbiAgICAgICAgY29uc3QgZGlnaXRzID0gdGhpcy5wcm9wcy5wYXkuY2FyZERpZ2l0c1xuICAgICAgICBjaGFuZ2UgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnRvdGFsKVxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgYXV0aCAmJiBkaWdpdHMpXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdDUkVEJzpcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiB0b3RhbCA8PSBhdmFpbGFibGUgJiYgdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LXNpZGUtYmFyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+UGFnbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlxuICAgICAgICAgIFRPVEFMIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7dGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+VlVFTFRPIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7Y2hhbmdlLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8U2F2ZUJ0biBwYXlCdXR0b25DbGFzcz17cGF5QnV0dG9uQ2xhc3N9IC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxuICAgIHBheTogc3RvcmUucGF5LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcbiAgICAvLyBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUJ0biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2F2ZUJ0bigpIHtcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgY29uc3QgcGF5ZWQgPSAhKHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCA9PSAnQ1JFRCcpXG5cbiAgICBjb25zdCBzYWxlID0ge1xuICAgICAgY2FydDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jYXJ0KSxcbiAgICAgIGNsaWVudDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpLFxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcbiAgICAgIHBheTogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5wYXkpLFxuICAgICAgcGF5X3R5cGU6IHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCxcbiAgICAgIHBheWVkOiBwYXllZCxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5wcm9wcy5jbGllbnQuaWRcbiAgICB9XG5cbiAgICBjb25zdCBjcmVkaXRNb3ZlbWVudCA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5wcm9wcy5jbGllbnQuaWQsXG4gICAgICBtb3ZlbWVudF90eXBlOiAnQ1JFRCcsXG4gICAgICBhbW91bnQ6IHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWxcbiAgICB9XG5cbiAgICBjb25zdCBrd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3NhbGVzLycsXG4gICAgICBpdGVtOiBzYWxlLFxuICAgICAgbG9nQ29kZTogJ1NBTEVfQ1JFQVRFJyxcbiAgICAgIGxvZ0Rlc2NyaXB0aW9uOiAnQ3JlYWNpw7NuIGRlIG51ZXZhIFZlbnRhJyxcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgaXRlbU9sZDogJycsXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcbiAgICAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgVmVudGEsIGludGVudGUgZGUgbnVldm8uJyxcbiAgICAgIGNyZWRpdE1vdmVtZW50OiBjcmVkaXRNb3ZlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSlcbiAgICB9KVxuXG4gICAgdXBkYXRlUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIE1vdXNldHJhcC5yZXNldCgpXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9e3RoaXMuc2F2ZUJ0bi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF5QnV0dG9uQ2xhc3N9PlxuICAgICAgUmVnaXN0cmFyXG4gICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgc2F2ZUxvZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gSUYgVEhFIFNBTEUgSVMgQSBDUkVESVQgT05FIFNBVkUgQ1JFRElUIE1PVkVNRU5UXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnBheV90eXBlID09ICdDUkVEJykge1xuICAgICAgICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ga3dhcmdzLmNyZWRpdE1vdmVtZW50XG4gICAgICAgICAgY3JlZGl0TW92ZW1lbnQuYmlsbF9pZCA9IHJlc3BvbnNlLmRhdGEuaWRcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5kZXNjcmlwdGlvbiA9IGBWZW50YSBkZSBjcsOpZGl0byAjJHtyZXNwb25zZS5kYXRhLmJpbGxfbnVtYmVyfWBcbiAgICAgICAgICBzYXZlQ3JlZGl0TW92ZW1lbnQoY3JlZGl0TW92ZW1lbnQsIHJlc3BvbnNlLmRhdGEsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdClcblxuICAgICAgICAvLyBJRiBJUyBDQVNIIFRIRU4gSlVTVCBSRVNPTFZFXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9TQUxFJywgcGF5bG9hZDogJyd9KVxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZWplY3QoKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVDcmVkaXRNb3ZlbWVudChtb3ZlbWVudCwgc2FsZSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2NyZWRpdG1vdmVtZW50cy8nLFxuICAgIGRhdGE6IG1vdmVtZW50XG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogc2FsZX0pXG4gICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgcmVqZWN0KClcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2xvYWRHbG9iYWxDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBGdWxsSW52b2ljZSBmcm9tICcuLi9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3gnXG5pbXBvcnQgQ29tcGFjdEludm9pY2UgZnJvbSAnLi4vY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtwYW5lbFZpc2libGU6IHN0b3JlLmludm9pY2UuaXNWaXNpYmxlLCBpc0Z1bGw6IHN0b3JlLmludm9pY2UuaXNGdWxsfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9pY2VQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvYWRHbG9iYWxDb25maWcoJ2NvbXBhbnknLCBmYWxzZSwgJ0ZFVENIX0NPTkZJR19GVUxGSUxMRUQnLCAnRkVUQ0hfQ09ORklHX1JFSkVDVEVEJykpXG4gIH1cblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgIC8vIHByaW50RGl2KCdmdWxsLWludm9pY2UtcHJpbnQnKVxuICB9XG5cbiAgdG9nZ2xlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHRvZ2dsZUludm9pY2UoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICBwcmludFBhbmVsKCkge1xuICAgIHdpbmRvdy5wcmludERpdignaW52b2ljZS1wcmludCcpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdpbnZvaWNlLXBhbmVsIGlzLXZpc2libGUnXG4gICAgICA6ICdpbnZvaWNlLXBhbmVsJ1xuICAgIGNvbnN0IGlzRnVsbENsYXNzID0gKHRoaXMucHJvcHMuaXNGdWxsKVxuICAgICAgPyAnJ1xuICAgICAgOiAnIGNvbXBhY3QtaW52b2ljZS1vbidcblxuICAgIGNvbnN0IGNvbXBvbmVudFRvTW91bnQgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/IDxGdWxsSW52b2ljZSAvPlxuICAgICAgOiA8Q29tcGFjdEludm9pY2UgLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLW1haW4nICsgaXNGdWxsQ2xhc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZS1wYW5lbC1oZWFkZXInPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBGYWN0dXJhIGRlIFZlbnRhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucHJpbnRQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXByaW50JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIHsvKiA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUludm9pY2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1jb2ZmZWUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0naW52b2ljZS1wcmludCcgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1jb250YWluZXInICsgaXNGdWxsQ2xhc3N9PlxuXG4gICAgICAgICAge2NvbXBvbmVudFRvTW91bnR9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsSW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gQ3JlZGl0IG9yIGNhc2hcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuICAgIC8vIExPR09cbiAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ28gfHwgJydcbiAgICBjb25zdCBsb2dvV2lkdGggPSB0aGlzLnByb3BzLmNvbXBhbnkubG9nb1dpZHRoIHx8ICcxMzBweCdcbiAgICBjb25zdCBsb2dvVXJsID0gYC9tZWRpYS9sb2dvcy8ke2xvZ299YFxuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxfbmFtZSB8fCAnJ1xuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsX25hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnUEVSU09OJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICcnXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWxvZ28nPlxuICAgICAgICAgIDxpbWcgc3R5bGU9e3snd2lkdGgnOiBgJHtsb2dvV2lkdGh9YH19IHNyYz17bG9nb1VybH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvaDI+XG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxuICAgICAgICAgIDxoMz57aWRUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmNvdW50cnkgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuZW1haWwgfHwgJyd9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXNlcGFyYXRvcic+XG4gICAgICAgIDxzcGFuIC8+XG5cbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3NhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmV9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3Qgc2FsZSA9IHRoaXMucHJvcHMuc2FsZVxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcbiAgICAgID8gYCR7KCcwJyArIHNhbGUuY3JlYXRlZC5nZXREYXRlKCkpLnNsaWNlKC0yKX0vXG4gICAgICAkeygnMCcgKyAoc2FsZS5jcmVhdGVkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxuICAgICAgOiAnMDEvMDEvMTk3MCdcbiAgICBjb25zdCBjbGllbnQgPSBzYWxlLmNsaWVudCA/IGAke3NhbGUuY2xpZW50LmNvZGV9IC0gJHtzYWxlLmNsaWVudC5uYW1lfSAke3NhbGUuY2xpZW50Lmxhc3RfbmFtZX1gIDogJzAwIC0gQ2xpZW50ZSBkZSBDb250YWRvJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2NsaWVudEFkcmVzcyc+RElSRUNDScOTTjoge3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG4gICAgY29uc3QgaWQgPSBzYWxlLmJpbGxfbnVtYmVyID8gc2FsZS5iaWxsX251bWJlciA6ICcwMDAwMSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWRhdGEnPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdjbGllbnQtdGFibGUnPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNMSUVOVEU6PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntjbGllbnR9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlbnVtLXRhYmxlJz5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk4uIGRlIGZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWNoYTo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50ID0gKHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxuICAgICAgOiA8dGQgc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90ZD5cbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5sZW5ndGhcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgICA/IGBHYFxuICAgICAgICAgIDogYEVgXG5cbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLmRpc2NvdW50fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgfSlcbiAgICAgIDogPHRyPlxuICAgICAgICA8dGQ+LS08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgPC90cj5cblxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50Um93ID0gdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCA/IDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMyICU8L3RoPlxuICAgICAgOiA8dGggc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90aD5cblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QLlU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMlPC90aD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UHJlY2lvPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e2l0ZW1zfTwvdGJvZHk+XG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRvdGFscyc+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPklWPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cbiAgICAgIDxoMT5Ob3Rhczo8L2gxPlxuXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0SW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbE5hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICdQRVJTT04nXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZX08L2gyPlxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gLz5cblxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cblxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLCBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgY29uc3QgdGF4ZXNUZXh0ID0gKGl0ZW0ucHJvZHVjdC51c2VUYXhlcylcbiAgICAgICAgPyBgR2BcbiAgICAgICAgOiBgRWBcblxuICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5xdHl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAge3RheGVzVGV4dH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIOKCoSB7aXRlbS5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10YWJsZSB0YWJsZSc+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+Q2FudDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24tcm93Jz5BcnRpY3VsbzwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+VG90YWw8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9Jyc+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdGJvZHk+XG5cbiAgICA8L3RhYmxlPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgaWQgPSBzYWxlLmJpbGxfbnVtYmVyID8gc2FsZS5iaWxsX251bWJlciA6ICcwMDAxJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0aD5EaXJlYzo8L3RoPlxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuXG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdG90YWxzJz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzLWNvbnRlbnQnPlxuICAgICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIlxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheW91dCgpIHtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKVxuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTWVudScpXG5cbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwdWxsZWQnKSkge1xuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcbiAgc2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uZmlnQmFyKCkge1xuXG4gIGNvbnN0IGNvbmZpZ0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdCYXInKVxuXG4gIGlmIChjb25maWdCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtdmlzaWJsZScpKSB7XG5cbiAgICBjb25maWdCYXIuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZpc2libGUnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25maWdCYXIuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci5qc3gnXG4vLyBpbXBvcnQgQ29tcG9zZWRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9jb21wb3NlZC5qc3gnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJylcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIC8vIGNvbnN0IGNoaWxkUHJvZHVjdHMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRleHQ6ICdQcm9kdWN0b3MnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWdpZnQnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnRmFtaWxpYXMnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWxpc3QnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RkZXBhcnRtZW50cydcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgdGV4dDogJ1N1Yi1GYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtb3V0ZGVudCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHN1YmRlcGFydG1lbnRzJ1xuICAgIC8vICAgfVxuICAgIC8vIF1cblxuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xuICAgIGNvbnN0IHNpZGVNZW51Q2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdzaWRlTWVudScgOiAnc2lkZU1lbnUgaGlkZGVuQnlBcHAnXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9e3NpZGVNZW51Q2xhc3N9PlxuXG4gICAgICB7LyogPGgzIGNsYXNzTmFtZT0nc2lkZU1lbnUtaGVhZGVyJz57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPiAqL31cbiAgICAgIDxVc2VyIC8+XG5cbiAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXdyYXBwZXIgY29sLXhzLTEyJz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZU1lbnUtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XG4gICAgICAgICAgICAgIEluaWNpbzwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgTnVldmEgVmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3Byb2Zvcm1hJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBDb3RpemFjacOzbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJlc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cbiAgICAgICAgICAgICAgTnVldmEgUHJldmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUnXG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rLCBsb2dnZXIpXG5cbi8vIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaylcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcbmltcG9ydCBjbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMvcmVkdWNlci5qcydcbmltcG9ydCBzZWFyY2hDbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcbmltcG9ydCBwYXkgZnJvbSAnLi9zYWxlL3BheS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGludm9pY2UgZnJvbSAnLi9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvcmVkdWNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmV0Y2hpbmcsXG4gIGxheW91dCxcbiAgdXNlcixcbiAgY2FydCxcbiAgY2xpZW50cyxcbiAgcHJvZHVjdHMsXG4gIHNhbGUsXG4gIG1lc3NhZ2VzLFxuICBzZWFyY2hDbGllbnRzLFxuICBzZWFyY2hQcm9kdWN0cyxcbiAgcGF5LFxuICBpbnZvaWNlLFxuICBzYWxlcyxcbiAgY29uZmlnXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0FMRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSE9NRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHVzZXI6IHt9LFxuICBwcm9maWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgICBwcm9maWxlOiBhY3Rpb24ucGF5bG9hZC5wcm9maWxlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgcHJvZmlsZToge31cbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgY3JlYXRlZDogJycsXG4gIHVwZGF0ZWQ6ICcnLFxuICBpc051bGw6IGZhbHNlLFxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxuICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgaXNOdWxsOiBmYWxzZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiB0cnVlLFxuICAgICAgICBjYXJ0SXRlbXM6IFtcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0SXRlbXMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVNT1ZFX0ZST01fQ0FSVCc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cblxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG5cbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXG4gICAgICAvLyA/IHRydWVcbiAgICAgIC8vIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX0lURU1fTE9URSc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX1RPVEFMUyc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC50YXhlcyxcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfTElORV9ESVNDT1VOVCc6XG4gICAge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XS5kaXNjb3VudCA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkLmRlYnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudHMgPSBzdGF0ZS5jbGllbnRzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBjbGllbnRzOiBjbGllbnRzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnQsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfVFJVRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfRkFMU0UnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IGZhbHNlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBwcm9kdWN0czoge30sXG4gIGlucHV0VmFsOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge31cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnB1dFZhbDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnB1dFZhbDogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdHNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XG4gICAge1xuICAgICAgY29uc3Qgd2lkdGggPSAhc3RhdGUuZnVsbFdpZHRoXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB3aWR0aFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgbWVzc2FnZXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdQUk9EVUNUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgUFJPRFVDVE8hJywgJ0VsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05PVF9GT1VORF9TQUxFJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBMQSBWRU5UQSEnLCBgTGEgdmVudGEgIyR7YWN0aW9uLnBheWxvYWR9IG5vIGV4aXN0ZSwgbyBoYXkgdW4gcHJvYmxlbWEgcGFyYSBjYXJnYXJsYSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8uYClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIScsICdIdWJvIHVuIGVycm9yIGFsIGVuY29udHJhciBlbCBwcm9kdWN0byBlbiBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgYWdyZWdhZG9zLHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIFBST0RVQ1RPUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIHByb2R1Y3RvcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBDTElFTlRFIScsICdFbCBjbGllbnRlIGNvbiBlbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBDTElFTlRFUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIGNsaWVudGVzLCBwb3IgZmF2b3IgaW50ZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB2aXNpYmxlOiBmYWxzZSxcbiAgY2xpZW50c01hdGNoZWQ6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX1NIT1dfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX0hJREVfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfRkFJTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNNYXRjaGVkOiBbXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcblxuICAgIE51bWJlci5wcm90b3R5cGUuZm9ybWF0TW9uZXkgPSBmdW5jdGlvbihjLCBkLCB0KXtcbiAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG4gICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcbiAgICAgfTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB2aXNpYmxlOiBmYWxzZSxcbiAgcHJvZHVjdHNNYXRjaGVkOiBbXSxcbiAgc2VhcmNoVmFsdWU6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTRVRfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMRUFSX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnOlxuICAgIHtcbiAgICAgIGNvbnN0IHZpc2libGUgPSAhc3RhdGUudmlzaWJsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUFJPRFVDVF9TSE9XX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfSElERV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfU1VDQ0VTUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX1NFQVJDSF9GQUlMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBbXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2UsXG4gIHBheU1ldGhvZDogJ0NBU0gnLFxuICBjYXNoQW1vdW50OiAwLFxuICBjYXJkRGlnaXRzOiAnJyxcbiAgY2FyZEF1dGg6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTSE9XX1BBWV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9QQVlfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDSEFOR0VfUEFZX01FVEhPRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheU1ldGhvZDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVNIX0FNT1VOVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfQVVUSCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0RJR0lUUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5wYXkucGF5TWV0aG9kLFxuICAgICAgICBjYXNoQW1vdW50OiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FzaEFtb3VudCxcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWQucGF5LmNhcmREaWdpdHMsXG4gICAgICAgIGNhcmRBdXRoOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZEF1dGhcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBpc1Zpc2libGU6IGZhbHNlLFxuICBpc0Z1bGw6IHRydWUsXG4gIGRlZmF1bHREZXNpbmc6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NIT1dfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIGNvbnN0IGZ1bGxPck5vdCA9IHN0YXRlLmlzRnVsbFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRnVsbDogIWZ1bGxPck5vdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJzpcbiAgICB7XG4gICAgICBjb25zdCBkZXNpbmdPck5vdCA9IHN0YXRlLmRlZmF1bHREZXNpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWZhdWx0RGVzaW5nOiAhZGVzaW5nT3JOb3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzIiwiY29uc3Qgc2FsZUFjdGl2ZU1vZGVsID0ge1xuICBpZDogMCxcbiAgYmlsbF9udW1iZXI6ICcnLFxuICBjYXJ0OiB7fSxcbiAgY2xpZW50OiAnJyxcbiAgdXNlcjogJycsXG4gIGNsaWVudF9pZDogJycsXG4gIHBheToge30sXG4gIHBheWVkOiBmYWxzZSxcbiAgcGF5X3R5cGU6ICdDQVNIJ1xuXG59XG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHNhbGVzOiBbXSxcbiAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICBjb21wbGV0ZWQ6IGZhbHNlLFxuICBzYWxlQWN0aXZlSWQ6IDAsXG4gIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlQWN0aXZlTW9kZWwsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogMCxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTSE9XX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19QUkVTQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9QUkVTQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9TQUxFU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBbXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3QgY2FydCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2FydClcbiAgICAgIGNvbnN0IGNsaWVudCA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQuY2xpZW50KVxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQudXNlcilcbiAgICAgIGNvbnN0IHBheSA9IEpTT04ucGFyc2UoYWN0aW9uLnBheWxvYWQucGF5KVxuXG4gICAgICBjb25zdCBzYWxlID0ge1xuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWQsXG4gICAgICAgIGJpbGxfbnVtYmVyOiBhY3Rpb24ucGF5bG9hZC5iaWxsX251bWJlcixcbiAgICAgICAgY2FydDogY2FydCxcbiAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgIHBheTogcGF5LFxuICAgICAgICBwYXllZDogYWN0aW9uLnBheWxvYWQucGF5ZWQsXG4gICAgICAgIHBheV90eXBlOiBhY3Rpb24ucGF5bG9hZC5wYXlfdHlwZSxcbiAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoYWN0aW9uLnBheWxvYWQuY3JlYXRlZCksXG4gICAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLnVwZGF0ZWQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfU0FMRV9JRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1BSRVNBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUk9GT1JNQV9JRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHNhbGVzID0gc3RhdGUuc2FsZXNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHNhbGVzOiBzYWxlc1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgc2FsZUFjdGl2ZUlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcbiAgICAgIHNhbGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkLmNhcnRcbiAgICAgIHNhbGUuY2xpZW50ID0gYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZVxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgY29tcGFueToge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENIX0NPTkZJR19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IGFjdGlvbi5wYXlsb2FkLmRhdGFcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfQ09ORklHJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiBhY3Rpb24ucGF5bG9hZC5kYXRhXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9XG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmZXRjaW5nLWNvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvdmVuZG9yL2xvYWRlcnMvRWNsaXBzZS5naWYnfSAvPlxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hJTkdfU1RBUlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENISU5HX0RPTkUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYW5lbCgpIHtcblxuICByZXR1cm4ge3R5cGU6ICdQUk9EVUNUX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QodmFsLCBwcm9kdWN0cykge1xuXG4gIGNvbnN0IHRleHQgPSB2YWwuc3BsaXQoJyUnKVxuICBjb25zdCBtYXRjaHMgPSBbXVxuXG4gIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgbGV0IGNvbnRyb2wgPSB0cnVlXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9kdWN0LmRlc2NyaXB0aW9uLnRvU3RyaW5nKClcblxuICAgIHRleHQuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIG1hdGNocy5wdXNoKHByb2R1Y3QpXG4gICAgfVxuXG4gIH0pXG5cbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9TRUFSQ0hfU1VDQ0VTUycsXG4gICAgICBwYXlsb2FkOiBtYXRjaHNcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9TRUFSQ0hfRkFJTCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBjb2RlfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL2FjdGlvbnMuanMiLCJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDbGllbnQodmFsLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXG4gIGNvbnN0IG1hdGNocyA9IFtdXG5cbiAgY29uc29sZS5sb2coY2xpZW50cylcblxuICBjbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcbiAgICBsZXQgY29udHJvbCA9IHRydWVcbiAgICBjb25zdCBuYW1lID0gY2xpZW50Lm5hbWUudG9TdHJpbmcoKSArICcgJyArIGNsaWVudC5sYXN0X25hbWUudG9TdHJpbmcoKVxuXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChjbGllbnQpXG4gICAgfVxuXG4gIH0pXG5cbiAgY29uc3QgcmVzID0gKG1hdGNocy5sZW5ndGgpXG4gICAgPyB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJyxcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9