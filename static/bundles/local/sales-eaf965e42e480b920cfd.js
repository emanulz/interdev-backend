webpackJsonp([1],{

/***/ 268:
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

/***/ 269:
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

/***/ 28:
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

/***/ 33:
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

/***/ 34:
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

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(16);

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

/***/ 40:
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

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(33);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(1);

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

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

var _actions = __webpack_require__(610);

var _routes = __webpack_require__(611);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(655);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(657);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(34);

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

var _axios = __webpack_require__(16);

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

var _reactRouterDom = __webpack_require__(3);

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

var _reactRedux = __webpack_require__(1);

var _api = __webpack_require__(4);

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

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(621);

var _actions2 = __webpack_require__(59);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(268);

var _api = __webpack_require__(4);

var _getClientDebt = __webpack_require__(624);

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

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientDebt = getClientDebt;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(16);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(82);

var _searchForm = __webpack_require__(628);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(629);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(82);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(82);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(83);

var _searchForm = __webpack_require__(631);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(632);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(83);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(268);

var _actions2 = __webpack_require__(83);

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

var _reactRedux = __webpack_require__(1);

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

var _actions = __webpack_require__(269);

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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(269);

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

var _api = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _save = __webpack_require__(640);

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(28);

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

var _axios = __webpack_require__(16);

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

var _reactRedux = __webpack_require__(1);

var _api = __webpack_require__(4);

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

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxLogger = __webpack_require__(45);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(46);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(47);

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

var _redux = __webpack_require__(19);

var _reducer = __webpack_require__(40);

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

/***/ 82:
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

/***/ 83:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXRNb25leS5qcyIsIndlYnBhY2s6Ly8vLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2dldENsaWVudERlYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlNZXRob2QuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvc2F2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjbGllbnRTZWxlY3RlZCIsInVzZXJTZWxlY3RlZCIsInNlYXJjaENsaWVudCIsImNvZGUiLCJjbGllbnRzIiwiZmluZEluZGV4IiwiY2xpZW50IiwicmVzIiwidHlwZSIsInBheWxvYWQiLCJfaWQiLCJ1c2VycyIsInVzZXIiLCJ1cGRhdGVTdG9yZUNhc2hBbW91bnQiLCJ1cGRhdGVTdG9yZUNhcmRBdXRoIiwidXBkYXRlU3RvcmVDYXJkRGlnaXRzIiwiYW1vdW50IiwicGFyc2VGbG9hdCIsIm51bWJlciIsIk51bWJlciIsInByb3RvdHlwZSIsImZvcm1hdE1vbmV5IiwiYyIsImQiLCJ0IiwibiIsImlzTmFOIiwiTWF0aCIsImFicyIsInVuZGVmaW5lZCIsInMiLCJpIiwiU3RyaW5nIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiaiIsImxlbmd0aCIsInN1YnN0ciIsInJlcGxhY2UiLCJzbGljZSIsIkZldGNoaW5nIiwiQ29tcG9uZW50IiwiZ2V0SXRlbURpc3BhdGNoIiwiZ2V0SXRlbURvdWJsZURpc3BhdGNoIiwiZ2V0SXRlbVJldHVybiIsInNldEl0ZW0iLCJzYXZlSXRlbSIsInVwZGF0ZUl0ZW0iLCJwYXRjaEl0ZW0iLCJwYXRjaEl0ZW1zIiwiZGVsZXRlSXRlbSIsImxvYWRHbG9iYWxDb25maWciLCJzYXZlTG9nIiwiZ2V0TmV4dE51bWVyaWNDb2RlIiwic2V0TmV4dFByZXZJdGVtIiwiZGVmYXVsdHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwia3dhcmdzIiwidXJsIiwic3VjY2Vzc1R5cGUiLCJlcnJvclR5cGUiLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImFsZXJ0Iiwic3VjY2Vzc1R5cGUyIiwibG9va1VwVmFsdWUiLCJsb29rVXBGaWVsZCIsImhpc3RvcnkiLCJyZWRpcmVjdFVybCIsIm1vZGVsTmFtZSIsImxvb2tVcE5hbWUiLCJkaXNwYXRjaFR5cGUiLCJkaXNwYXRjaFR5cGUyIiwiZGlzcGF0Y2hFcnJvclR5cGUiLCJwdXNoIiwiaXRlbSIsImxvZ0NvZGUiLCJpdGVtT2xkIiwibG9nTW9kZWwiLCJsb2dEZXNjcmlwdGlvbiIsImlzU2FsZSIsIm1ldGhvZCIsInN1Y2Vzc01lc3NhZ2UiLCJzZXQiLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJrd2FyZ3MyIiwiaXRlbTIiLCJ1cmwyIiwibG9nQ29kZTIiLCJpdGVtT2xkMiIsImxvZ01vZGVsMiIsImxvZ0Rlc2NyaXB0aW9uMiIsIm1vZGVsIiwic2VjdGlvbiIsIm5hbWUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbmZpZyIsImZpbHRlciIsImZvckVhY2giLCJ2YWx1ZSIsIm9sZE9iamVjdCIsIm9iamVjdCIsImRlc2NyaXB0aW9uIiwicHJldk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPYmplY3QiLCJ1c2VyMiIsInByZXZfb2JqZWN0IiwibmV3X29iamVjdCIsImVsZW1lbnRzIiwiZmllbGQiLCJrZXlzIiwibWFwIiwiZWxlbWVudCIsInNvcnQiLCJhIiwiYiIsIm1heCIsInBvcCIsIm5leHQiLCJ0b1N0cmluZyIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJpbmRleCIsIm5leHRDb2RlIiwicHJldkNvZGUiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImZldGNoaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJyZWNhbGNDYXJ0IiwidXBkYXRlSXRlbURpc2NvdW50IiwidXBkYXRlSXRlbUxvdGUiLCJwcm9kdWN0U2VsZWN0ZWQiLCJ1cGRhdGVRdHkiLCJ1cGRhdGVRdHlDb2RlIiwiYWRkU3ViT25lIiwidXVpZHYxIiwicmVxdWlyZSIsIml0ZW1zSW5DYXJ0IiwiZ2xvYmFsRGlzY291bnQiLCJuZXdDYXJ0IiwibmV3SXRlbSIsImNhY2xTdWJ0b3RhbCIsInByb2R1Y3QiLCJxdHkiLCJkaXNjb3VudCIsInN1YnRvdGFsIiwidG90YWxXaXRoSXYiLCJkaXNjb3VudEN1cnJlbmN5Iiwic3ViVG90YWxOb0Rpc2NvdW50IiwicHJpY2VUb1VzZSIsImluZGV4SW5DYXJ0IiwidXVpZCIsInVwZGF0ZWRDYXJ0SXRlbSIsImxvdGUiLCJsb3RlTnVtIiwicHJvZHVjdHMiLCJkZWZhdWx0Q29uZmlnIiwidXNlckNvbmZpZyIsInBlckxpbmUiLCJiYXJjb2RlIiwiY2hlY2tJZkluQ2FydCIsInF0eU51bSIsInN1Yk9yQWRkIiwiY2FydCIsImRhdGFOZXdQcm9kIiwicHJvZHVjdERpc2NvdW50IiwicHJpY2UiLCJzdWJUb3RhbCIsIml2MSIsInVzZV90YXhlcyIsInRheGVzIiwiaXYyIiwidXNlX3RheGVzMiIsInRheGVzMiIsIml2MyIsInVzZV90YXhlczMiLCJ0YXhlczMiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsImNsaWVudFR5cGUiLCJ1c2VQcmljZTIiLCJwcmljZTIiLCJ1c2VQcmljZTMiLCJwcmljZTMiLCJ3aW5kb3ciLCJhbGVydGlmeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwic3RvcmUiLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwicm91dGVzIiwiSG9tZSIsIlNhbGUiLCJmdWxsV2lkdGgiLCJzYWxlIiwidG90YWwiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwidG9nZ2xlV2lkdGgiLCJiaW5kIiwiUHJvZHVjdCIsImNhcnRJdGVtcyIsImlucHV0VmFsIiwiY29kZUlucHV0IiwiZm9jdXMiLCJwcm9kdWN0S3dhcmdzIiwiZXYiLCJrZXkiLCJ0YXJnZXQiLCJzcGxpdCIsImRpc2FibGVkIiwiaW5wdXRLZXlQcmVzcyIsImlucHV0Iiwic2VhcmNoUHJvZHVjdENsaWNrIiwiTW91c2V0cmFwIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwicmVtb3ZlSWNvbkNsYXNzIiwidGF4ZXMxIiwicXR5RmllbGQiLCJxdHlJbnB1dENoYW5nZSIsImZpZWxkRm9jdXMiLCJxdHlJbnB1dEtleVByZXNzIiwiZGlzY291bnRGaWVsZCIsInNhbGVMb2FkZWQiLCJkaXNjb3VudElucHV0S2V5UHJlc3MiLCJkaXNjb3VudElucHV0T25CbHVyIiwic2V0Q2FydEl0ZW1BY3RpdmUiLCJyZW1vdmVJdGVtIiwidXBkYXRlVG90YWxzIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXNjb3VudFRvdGFsIiwidGF4ZXNDYWxjIiwidGF4ZXNDYWxjMiIsInRheGVzQ2FsYzMiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsImRlYnQiLCJjbGllbnRTZWxlY3RlZERlYnQiLCJuZXh0UHJvcHMiLCJjbGllbnRfaWQiLCJpZCIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsImxhc3RfbmFtZSIsInNlYXJjaENsaWVudENsaWNrIiwiZ2V0Q2xpZW50RGVidCIsInBvc3QiLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50IiwiZGlzY291bnRWYWwiLCJtYXhEaXNjb3VudCIsImlucHV0T25CbHVyIiwiQnV0dG9ucyIsInNhbGVzIiwiY29tcGxldGVkIiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9ucyIsInNob3dJbm9pY2VQYW5lbCIsIm5ld1NhbGUiLCJzaG93UGF5UGFuZWwiLCJzaG93U2FsZVBhbmVsIiwic2hvd1ByZXNhbGVzUGFuZWwiLCJzZWFyY2hQcm9kdWN0cyIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZpc2libGVPck5vdCIsInBhbmVsQ2xpY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hWYWwiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwicmVzdWx0c1RhYmxlIiwibWF0Y2hlcyIsInByb2R1Y3RzTWF0Y2hlZCIsInNlbGVjdFByb2R1Y3QiLCJzZWxscHJpY2UiLCJzZWFyY2hDbGllbnRzIiwic2VhcmNoQ2xpZW50QWN0aW9uIiwidmFsIiwiY2xpZW50c01hdGNoZWQiLCJoYXNDcmVkaXQiLCJoYXNfY3JlZGl0Iiwic2VsZWN0Q2xpZW50IiwiUGF5UGFuZWwiLCJwYW5lbFZpc2libGUiLCJwYXkiLCJpc1Zpc2libGUiLCJwYXlNZXRob2QiLCJoaWRlUGFuZWwiLCJQYXlNZXRob2QiLCJjbGlja0NoYW5nZVBheU1ldGhvZCIsIlBheUNhc2giLCJjYXNoQW1vdW50IiwicGF5QW1vdW50Q2hhbmdlZCIsIlBheUNhcmQiLCJjYXJkQXV0aCIsImNhcmREaWdpdHMiLCJwYXlDYXJkRGlnaXRzQ2hhbmdlZCIsInBheUNhcmRBdXRoQ2hhbmdlZCIsIlBheUNyZWRpdCIsImF2YWlsYWJsZSIsImNyZWRpdF9saW1pdCIsImNsaWVudExpbWl0IiwiY2xpZW50QXZhaWxhYmxlIiwiUGF5T3RoZXIiLCJQYXlTaWRlQmFyIiwicGF5ZWQiLCJyZXNldCIsImNoYW5nZSIsInBheUJ1dHRvbkNsYXNzIiwiY2FzaCIsImF1dGgiLCJkaWdpdHMiLCJTYXZlQnRuIiwicGF5X3R5cGUiLCJjcmVkaXRNb3ZlbWVudCIsIm1vdmVtZW50X3R5cGUiLCJ1cGRhdGVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlQnRuIiwiYmlsbF9pZCIsImJpbGxfbnVtYmVyIiwic2F2ZUNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnQiLCJJbnZvaWNlUGFuZWwiLCJpbnZvaWNlIiwiaXNGdWxsIiwicHJpbnREaXYiLCJpc0Z1bGxDbGFzcyIsImNvbXBvbmVudFRvTW91bnQiLCJ0b2dnbGVQYW5lbCIsInByaW50UGFuZWwiLCJGdWxsSW52b2ljZSIsIkhlYWRlciIsInNhbGVBY3RpdmUiLCJjb21wYW55IiwiaGVhZGVydGV4dCIsImxvZ28iLCJsb2dvV2lkdGgiLCJsb2dvVXJsIiwiaGVhZGVyTmFtZSIsImNvbWVyY2lhbF9uYW1lIiwiaGVhZGVyTmFtZTIiLCJsZWdhbF9uYW1lIiwidGVscyIsInRlbGVwaG9uZXMiLCJ0ZWxzVGV4dCIsImlkVHlwZSIsImlkVGV4dCIsInRvVXBwZXJDYXNlIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNvdW50cnkiLCJlbWFpbCIsIkRhdGEiLCJkYXRlIiwiY3JlYXRlZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2xpZW50QWRyZXNzIiwiYWRyZXNzIiwiVGFibGUiLCJ0YXhlc1RleHQiLCJnbG9iYWxEaXNjb3VudFJvdyIsIk5vdGVzIiwiQ29tcGFjdEludm9pY2UiLCJjb21lcmNpYWxOYW1lIiwibGVnYWxOYW1lIiwidXNlVGF4ZXMiLCJUb3BCYXIiLCJ0b3BCYXJUb2dnbGVWaXNpYmxlIiwiY29uZmlybSIsImJ1dHRvbkNsYXNzIiwibWVudUNsaWNrIiwiaG9tZUNsaWNrIiwibG9nT3V0Q2xpY2siLCJ0b2dnbGVMYXlvdXQiLCJ0b2dnbGVDb25maWdCYXIiLCJtYWluQ29udGFpbmVyIiwic2lkZU1lbnUiLCJyZW1vdmUiLCJhZGQiLCJjb25maWdCYXIiLCJTaWRlTWVudSIsInNpZGVNZW51Q2xhc3MiLCJTZWFyY2giLCJVc2VyIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsInVzZXJuYW1lIiwibGFzdE5hbWUiLCJmdWxsTmFtZSIsInN1YnN0cmluZyIsIm1pZGRsZXdhcmUiLCJtZXNzYWdlcyIsImVkaXRhYmxlIiwidXBkYXRlZCIsImlzTnVsbCIsImNhcnRIYXNJdGVtcyIsImNhcnRTdWJ0b3RhbCIsInNwbGljZSIsIml0ZW1zTGVmdEluQ2FydCIsImNsaWVudFNlbGVjdGVkTW9kZWwiLCJjcmVkaXRfZGF5cyIsImRvY1R5cGUiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiZGVmYXVsdERlc2luZyIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwic2FsZUFjdGl2ZUlkIiwiaXNTYWxlc1BhbmVsVmlzaWJsZSIsImlzUHJlc2FsZXNQYW5lbFZpc2libGUiLCJwYXJzZSIsIkRhdGUiLCJzZWFyY2hQcm9kdWN0IiwicHJvZHVjdFNlbGVjdGVkVGFibGUiLCJ0ZXh0IiwibWF0Y2hzIiwiY29udHJvbCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIndvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQ2dCQSxjLEdBQUFBLGM7UUFvQkFDLFksR0FBQUEsWTtRQW9CQUMsWSxHQUFBQSxZO0FBeENULFNBQVNGLGNBQVQsQ0FBd0JHLElBQXhCLEVBQThCQyxPQUE5QixFQUF1Qzs7QUFFNUMsTUFBTUosaUJBQWlCSSxRQUFRQyxTQUFSLENBQWtCO0FBQUEsV0FBVUMsT0FBT0gsSUFBUCxJQUFlQSxJQUF6QjtBQUFBLEdBQWxCLENBQXZCLENBRjRDLENBRTRCOztBQUV4RSxNQUFNSSxNQUFPUCxrQkFBa0IsQ0FBQyxDQUFwQixHQUF1QjtBQUMvQjtBQUNBUSxVQUFNLGtCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGlCQUROO0FBRUFDLGFBQVM7QUFDUEgsY0FBUUYsUUFBUUosY0FBUjtBQUREO0FBRlQsR0FMSjs7QUFZQSxTQUFPTyxHQUFQO0FBRUQ7O0FBRU0sU0FBU04sWUFBVCxDQUFzQlMsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDOztBQUV2QyxNQUFNVixlQUFlVSxNQUFNTixTQUFOLENBQWdCO0FBQUEsV0FBUU8sS0FBS0YsR0FBTCxJQUFZQSxHQUFwQjtBQUFBLEdBQWhCLENBQXJCLENBRnVDLENBRXVCOztBQUU5RCxNQUFNSCxNQUFPTixnQkFBZ0IsQ0FBQyxDQUFsQixHQUFxQjtBQUM3QjtBQUNBTyxVQUFNLGdCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGVBRE47QUFFQUMsYUFBUztBQUNQRyxZQUFNRCxNQUFNVixZQUFOO0FBREM7QUFGVCxHQUxKOztBQVlBLFNBQU9NLEdBQVA7QUFFRDs7QUFFTSxTQUFTTCxZQUFULEdBQXdCOztBQUU3QixTQUFPLEVBQUNNLE1BQU0sbUJBQVAsRUFBNEJDLFNBQVMsQ0FBQyxDQUF0QyxFQUFQO0FBQ0Q7Ozs7Ozs7O2dDQTNDZVQsYzs7Z0NBb0JBQyxZOztnQ0FvQkFDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7UUNuQ0FXLHFCLEdBQUFBLHFCO1FBZUFDLG1CLEdBQUFBLG1CO1FBZUFDLHFCLEdBQUFBLHFCO0FBcENoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLFNBQVNGLHFCQUFULENBQStCRyxNQUEvQixFQUF1Qzs7QUFFNUMsTUFBTVQsTUFBT1MsTUFBRCxHQUFTO0FBQ2pCO0FBQ0FSLFVBQU0sb0JBRE47QUFFQUMsYUFBU1EsV0FBV0QsTUFBWDtBQUZULEdBRFEsR0FLUjtBQUNBUixVQUFNLG9CQUROO0FBRUFDLGFBQVM7QUFGVCxHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7QUFFTSxTQUFTTyxtQkFBVCxDQUE2QkksTUFBN0IsRUFBcUM7O0FBRTFDLE1BQU1YLE1BQU9XLE1BQUQsR0FBUztBQUNqQjtBQUNBVixVQUFNLGtCQUROO0FBRUFDLGFBQVNTO0FBRlQsR0FEUSxHQUtSO0FBQ0FWLFVBQU0sa0JBRE47QUFFQUMsYUFBUztBQUZULEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOztBQUVNLFNBQVNRLHFCQUFULENBQStCRyxNQUEvQixFQUF1Qzs7QUFFNUMsTUFBTVgsTUFBT1csTUFBRCxHQUFTO0FBQ2pCO0FBQ0FWLFVBQU0sb0JBRE47QUFFQUMsYUFBU1M7QUFGVCxHQURRLEdBS1I7QUFDQVYsVUFBTSxvQkFETjtBQUVBQyxhQUFTO0FBRlQsR0FMSjs7QUFVQSxTQUFPRixHQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Z0NBbElnQk0scUI7O2dDQWVBQyxtQjs7Z0NBZUFDLHFCOzs7Ozs7Ozs7O0FDcENoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNB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QVk3RSxNQUFaO0FBQ0Q7QUFFRixHQWpCRDs7QUFtQkEsTUFBTUMsTUFBT3lkLE9BQU81YixNQUFSLEdBQ1I7QUFDQTVCLFVBQU0sdUJBRE47QUFFQUMsYUFBU3VkO0FBRlQsR0FEUSxHQUtSO0FBQ0F4ZCxVQUFNLG9CQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBTEo7O0FBVUEsU0FBT0YsR0FBUDtBQUNEOzs7Ozs7OztnQ0ExQ2VnVixTOztnQ0FLQXJWLFkiLCJmaWxlIjoic2FsZXMtZWFmOTY1ZTQyZTQ4MGI5MjBjZmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjbGllbnRTZWxlY3RlZChjb2RlLCBjbGllbnRzKSB7XG5cbiAgY29uc3QgY2xpZW50U2VsZWN0ZWQgPSBjbGllbnRzLmZpbmRJbmRleChjbGllbnQgPT4gY2xpZW50LmNvZGUgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGNsaWVudFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ0NMSUVOVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2xpZW50OiBjbGllbnRzW2NsaWVudFNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTZWxlY3RlZChfaWQsIHVzZXJzKSB7XG5cbiAgY29uc3QgdXNlclNlbGVjdGVkID0gdXNlcnMuZmluZEluZGV4KHVzZXIgPT4gdXNlci5faWQgPT0gX2lkKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAodXNlclNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1VTRVJfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VTRVJfU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB1c2Vyc1t1c2VyU2VsZWN0ZWRdXG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KCkge1xuXG4gIHJldHVybiB7dHlwZTogJ0NMSUVOVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhc2hBbW91bnQoYW1vdW50KSB7XG5cbiAgY29uc3QgcmVzID0gKGFtb3VudCkgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogcGFyc2VGbG9hdChhbW91bnQpXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVNIX0FNT1VOVCcsXG4gICAgICBwYXlsb2FkOiAwXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZEF1dGgobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6IG51bWJlclxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9BVVRIJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhudW1iZXIpIHtcblxuICBjb25zdCByZXMgPSAobnVtYmVyKSAvLyBpZiBpdHMgYSB2YWx1ZVxuICAgID8ge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfRElHSVRTJyxcbiAgICAgIHBheWxvYWQ6ICcnXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvYWRTYWxlKGlkLCBzYWxlcykge1xuLy8gICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gc2FsZXMuZmlsdGVyKHNhbGUgPT4ge1xuLy8gICAgIHJldHVybiBzYWxlLmlkID09IGlkXG4vLyAgIH0pXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGlmIChmaWx0ZXJlZFNhbGVzLmxlbmd0aCkge1xuLy8gICAgICAgZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddID0gbmV3IERhdGUoZmlsdGVyZWRTYWxlc1swXVsnY3JlYXRlZCddKVxuLy8gICAgICAgLy8gZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSA9IHBhcnNlRmxvYXQoZmlsdGVyZWRTYWxlc1swXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2NhcnQnXVsnZ2xvYmFsRGlzY291bnQnXSlcbi8vICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFZlbnRhICMke2lkfWBcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NsaWVudCddWydzYWxlTG9hZGVkJ10gPSB0cnVlXG5cbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTE9BREVEX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdfSlcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEVfSUQnLCBwYXlsb2FkOiBmaWx0ZXJlZFNhbGVzWzBdLl9pZH0pXG5cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RfRk9VTkRfU0FMRScsIHBheWxvYWQ6IGlkfSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuXG4vLyAgIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuLy8gICBjb25zdCBtb3ZlbWVudHMgPSBrd2FyZ3MubW92ZW1lbnRzXG4vLyAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgIGNvbnN0IGRiID0gbmV3IFBvdWNoREIoa3dhcmdzLmRiKVxuXG4vLyAgICAgZGIucG9zdChpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogaXRlbX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogcmVzcG9uc2UuaWR9KVxuXG4vLyAgICAgICBpZiAoaXRlbS5wYXkucGF5TWV0aG9kID09ICdDUkVESVQnKSB7IC8vIElGIENSRURJVCBDUkVBVEUgQ1JFRElUIE1PVkVNRU5UXG4vLyAgICAgICAgIGNvbnN0IGRiMiA9IG5ldyBQb3VjaERCKCdnZW5lcmFsJylcbi8vICAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHJlc3BvbnNlLmlkLCBpdGVtKVxuXG4vLyAgICAgICAgIGRiMi5wb3N0KG1vdmVtZW50KS50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICB9KS5jYXRjaChlcnIgPT4geyAvLyBJRiBFUlJPUiBTSE9XIE1FU1NBR0Vcbi8vICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgbW92aW1pZW50byBkZSBjcsOpZGl0bywgcG9yIGZhdm9yIGFudWxlIGxhIGZhY3R1cmEgeSBjcmVlbGFcbi8vICAgICAgICAgICBkZSBudWV2byBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgIH0gZWxzZSB7IC8vIElGIE5PVCBDUkVESVQgU0hPVyBQQU5FTFNcbi8vICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICB9XG5cbi8vICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4vLyAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRNb3ZlbWVudChtb3ZlbWVudHMsIHNhbGVJZCwgc2FsZSkge1xuXG4vLyAgIGNvbnN0IHNvcnRlZE1vdmVtZW50cyA9IG1vdmVtZW50cy5sZW5ndGggPiAxID8gbW92ZW1lbnRzLnNvcnQoKGEsIGIpID0+IHtcbi8vICAgICBpZiAoYS5kb2N1bWVudCA8IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAxXG4vLyAgICAgfVxuLy8gICAgIGlmIChhLmRvY3VtZW50ID4gYi5kb2N1bWVudCkge1xuLy8gICAgICAgcmV0dXJuIC0xXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAwXG4vLyAgIH0pIDogbW92ZW1lbnRzXG5cbi8vICAgY29uc3QgbmV4dElkID0gc29ydGVkTW92ZW1lbnRzLmxlbmd0aCA+IDAgPyBzb3J0ZWRNb3ZlbWVudHNbMF0uZG9jdW1lbnQgKyAxIDogMVxuXG4vLyAgIGNvbnN0IG1vdmVtZW50ID0ge1xuLy8gICAgICdkb2N1bWVudCc6IG5leHRJZCxcbi8vICAgICAnZG9jVHlwZSc6ICdDTElFTlRfTU9WRU1FTlQnLFxuLy8gICAgICdjbGllbnRJZCc6IHNhbGUuY2xpZW50Ll9pZCxcbi8vICAgICAndHlwZSc6ICdDUkVESVQnLFxuLy8gICAgICdhbW91bnQnOiBwYXJzZUZsb2F0KHNhbGUuY2FydC5jYXJ0VG90YWwpLFxuLy8gICAgICdkYXRlJzogbmV3IERhdGUoKSxcbi8vICAgICAnc2FsZV9pZCc6IHNhbGVJZCxcbi8vICAgICAnc2FsZUlkJzogc2FsZS5pZCxcbi8vICAgICAnZGVzY3JpcHRpb24nOiBgVmVudGEgYSBjcsOpZGl0byBjb24gZmFjdHVyYSAjJHtzYWxlLmlkfWBcbi8vICAgfVxuXG4vLyAgIHJldHVybiBtb3ZlbWVudFxuXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2FjdGlvbnMuanMiLCIvKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4xXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tb3VzZXRyYXAvbW91c2V0cmFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cbiAgICBOdW1iZXIucHJvdG90eXBlLmZvcm1hdE1vbmV5ID0gZnVuY3Rpb24oYywgZCwgdCl7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgICBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxuICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgIH07XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2Zvcm1hdE1vbmV5LmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmZXRjaW5nLWNvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvdmVuZG9yL2xvYWRlcnMvRWNsaXBzZS5naWYnfSAvPlxuICAgICAgPGgxPkNhcmdhbmRvIGVsZW1lbnRvczwvaDE+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT05GSUcgREVGQVVMVCBBWElPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbidcbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdFVCBGVU5DVElPTlMgKFJFVFJJRVZFIEFMTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1EaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICAvLyBJRiBUSEUgRVJST1IgSVMgVU5BVVRPUklaRUQgUEFHRSBXSUxMIFNIT1cgVEhFIE1FU1NBR0VcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRG91YmxlRGlzcGF0Y2goa3dhcmdzKSB7XG5cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBzdWNjZXNzVHlwZSA9IGt3YXJncy5zdWNjZXNzVHlwZVxuICBjb25zdCBzdWNjZXNzVHlwZTIgPSBrd2FyZ3Muc3VjY2Vzc1R5cGUyXG4gIGNvbnN0IGVycm9yVHlwZSA9IGt3YXJncy5lcnJvclR5cGVcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3NUeXBlMiwgcGF5bG9hZDogJyd9KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9IDQwMykge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGVycm9yVHlwZSwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJldHVybihrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG5cbiAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICByZXR1cm4gZXJyb3JcbiAgfSlcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNFVCBGVU5DVElPTiAoUkVUUklFVkUgSU5ESVZJRFVBTClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNldEl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgbG9va1VwVmFsdWUgPSBrd2FyZ3MubG9va1VwVmFsdWVcbiAgY29uc3QgbG9va1VwRmllbGQgPSBrd2FyZ3MubG9va1VwRmllbGRcbiAgY29uc3QgaGlzdG9yeSA9IGt3YXJncy5oaXN0b3J5XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0ga3dhcmdzLnJlZGlyZWN0VXJsXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YClcbiAgICBheGlvcy5nZXQoYCR7dXJsfT8ke2xvb2tVcEZpZWxkfT0ke2xvb2tVcFZhbHVlfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIElGIFRIRVJFIElTIE1PUkUgVEhBTiBPTkUgRUxFTUVOVCBGSUxURVJFRFxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0FURU5DScOTTicsIGBFeGlzdGUgbWFzIGRlIHVuICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsICR7a3dhcmdzLmxvb2tVcE5hbWV9OlxuICAgICAgICAgICR7a3dhcmdzLmxvb2tVcFZhbHVlfSwgc2UgdXRpbGl6YXLDoSBlbCBwcmltZXJvIGVuIGxpc3RhLCBwb3IgbG8gcXVlIHB1ZWRlIG5vIHNlciBlbCBtaXNtbyBxdWUgdWQgZGVzZWFcbiAgICAgICAgICBhY3R1YWxpemFyLCBlc3RvIHB1ZWRlIGRlYmVyc2UgYSB1biBlcnJvciwgcG9yIGZhdm9yIHJldmlzZSBsb3NcbiAgICAgICAgICBkYXRvcyBvIGNvbnRhY3RlIGNvbiBlbCBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hLmApXG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlMiwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVswXX0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaEVycm9yVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgTm8gaGF5ICR7a3dhcmdzLm1vZGVsTmFtZX0gY29uIGVsIHZhbG9yIGRlICR7a3dhcmdzLmxvb2tVcE5hbWV9OiAke2t3YXJncy5sb29rVXBWYWx1ZX1gLFxuICAgICAgICAgIGZ1bmN0aW9uKCkgeyBoaXN0b3J5LnB1c2gocmVkaXJlY3RVcmwpIH0pXG4gICAgICB9XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgZWwgdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIH0pXG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgRlVOQ1RJT04gKENSRUFURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuICBjb25zdCBpc1NhbGUgPSBrd2FyZ3MuaXNTYWxlXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgICBpZiAoaXNTYWxlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtKGt3YXJncykge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFVQREFURSBQQVJUSUFMTFkgRlVOQ1RJT04gKFBBVENIKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChrd2FyZ3Muc3VjZXNzTWVzc2FnZSkge1xuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBET1VCTEUgVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbXMoa3dhcmdzLCBrd2FyZ3MyKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgY29uc3QgaXRlbTIgPSBrd2FyZ3MyLml0ZW1cbiAgY29uc3QgdXJsMiA9IGt3YXJnczIudXJsXG4gIGNvbnN0IGxvZ0NvZGUyID0ga3dhcmdzMi5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQyID0ga3dhcmdzMi5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsMiA9IGt3YXJnczIubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24yID0ga3dhcmdzMi5sb2dEZXNjcmlwdGlvblxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC8vIEZJUlNUIFBBVENIIFRIRU5cbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuXG4gICAgICAgIC8vIFNFQ09ORCBQQVRDSFxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgICAgIHVybDogdXJsMixcbiAgICAgICAgICBkYXRhOiBpdGVtMlxuICAgICAgICB9KVxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBUSEVOXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzMi5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzMi5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrd2FyZ3MyLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGt3YXJnczIuaGlzdG9yeS5wdXNoKGt3YXJnczIucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MyLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDogJyd9KVxuICAgICAgICAgICAgc2F2ZUxvZyhsb2dDb2RlMiwgbG9nTW9kZWwyLCBpdGVtT2xkMiwgaXRlbTIsIGxvZ0Rlc2NyaXB0aW9uMiwgdXNlcilcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgICAgIC8vIFNFQ09ORCBQQVRDSCBDQVRDSFxuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MyLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgICAgIH0pXG5cbiAgICAgIC8vIEZJUlNUIFBBVENIIENBVENIXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERFTEVURSBGVU5DVElPTiAoREVMRVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBtb2RlbCA9IGt3YXJncy5tb2RlbE5hbWVcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsICdFbGVtZW50byBlbGltaW5hZG8gc2F0aWZhY3RvcmlhbWVudGUnKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcblxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgSHVibyB1biBlcnJvciBhbCBlbGltaW5hciBlbCAke21vZGVsfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9BRCBDT05GSUcgRlVOQ1RJT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHbG9iYWxDb25maWcoc2VjdGlvbiwgbmFtZSwgc3VjY2VzcywgZmFpbCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBpZiAobmFtZSkge1xuXG4gICAgICBheGlvcy5nZXQoYC9hcGkvZ2xvYmFsY29uZi8ke3NlY3Rpb259X18ke25hbWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPIFNpbmdsZSBjb25maWcgZmV0Y2hcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxwcmVmc2ApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gVGhlIHByb3BlcnR5IHRvIG1vZGlmeSBpbiByZWR1Y2VyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICA/IHJlc3BvbnNlLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2VjdGlvbiA9PSBzZWN0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHt9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fVxuICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBkYXRhW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IHN1Y2Nlc3MsIHBheWxvYWQ6IHtkYXRhOiBkYXRhLCBzZWN0aW9uOiBzZWN0aW9ufX0pXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZmFpbCwgcGF5bG9hZDogZXJyb3J9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIExPRyBGVU5DVElPTiAoQ1JFQVRFIExPRylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2cgKGNvZGUsIG1vZGVsLCBvbGRPYmplY3QsIG9iamVjdCwgZGVzY3JpcHRpb24sIHVzZXIpIHtcblxuICBjb25zdCBwcmV2T2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkob2xkT2JqZWN0KVxuICBjb25zdCBuZXdPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpXG4gIGNvbnN0IHVzZXIyID0gSlNPTi5zdHJpbmdpZnkodXNlcilcblxuICBjb25zdCBpdGVtID0ge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIHByZXZfb2JqZWN0OiBwcmV2T2JqZWN0LFxuICAgIG5ld19vYmplY3Q6IG5ld09iamVjdCxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdXNlcjogdXNlcjJcbiAgfVxuXG4gIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2xvZ3MvJyxcbiAgICBkYXRhOiBpdGVtXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgfVxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIExvZyBkZWwgbW92aW1pZW50bywgRVJST1I6ICR7ZXJyfS5gKVxuICAgIH0pXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5FWFQgTlVNRVJJQyBDT0RFXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE51bWVyaWNDb2RlKGVsZW1lbnRzLCBmaWVsZCkge1xuXG4gIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcblxuICAgIGxldCBrZXlzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudFtmaWVsZF0pXG5cbiAgICBrZXlzID0ga2V5cy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICBjb25zdCBtYXggPSBrZXlzLnBvcCgpXG4gICAgY29uc3QgbmV4dCA9IHBhcnNlSW50KG1heCkgKyAxXG4gICAgcmV0dXJuIG5leHQudG9TdHJpbmcoKVxuXG4gIH1cblxuICByZXR1cm4gMVxuXG59XG5cbi8vIE5FWFQgUFJFVklPVVMgSVRFTVNcbmV4cG9ydCBmdW5jdGlvbiBzZXROZXh0UHJldkl0ZW0oa3dhcmdzKSB7XG5cbiAgY29uc3QgY29kZSA9IGt3YXJncy5jb2RlXG4gIGNvbnN0IGl0ZW1zID0ga3dhcmdzLml0ZW1zXG4gIGNvbnN0IGNvZGVGaWVsZCA9IGt3YXJncy5jb2RlRmllbGRcbiAgbGV0IHByZXZpb3VzID0gMFxuICBsZXQgbmV4dCA9IDBcblxuICBpdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGFbY29kZUZpZWxkXSAtIGJbY29kZUZpZWxkXVxuICB9KVxuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW1bY29kZUZpZWxkXSA9PSBjb2RlKSB7XG4gICAgICBuZXh0ID0gaW5kZXggKyAxXG4gICAgICBwcmV2aW91cyA9IGluZGV4IC0gMVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV4dENvZGUgPSBpdGVtc1tuZXh0XSA/IGl0ZW1zW25leHRdW2NvZGVGaWVsZF0gOiBpdGVtc1swXVtjb2RlRmllbGRdXG4gIGNvbnN0IHByZXZDb2RlID0gaXRlbXNbcHJldmlvdXNdID8gaXRlbXNbcHJldmlvdXNdW2NvZGVGaWVsZF0gOiBpdGVtcy5wb3AoKVtjb2RlRmllbGRdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6IHtuZXh0OiBuZXh0Q29kZSwgcHJldmlvdXM6IHByZXZDb2RlfX0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2FwaS5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hJTkdfU1RBUlRFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENISU5HX0RPTkUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogZmFsc2VcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdsb2JhOyBkaXNjb3VudCBvZiBjb21wbGV0ZSBzdG9yYWdlIG9mIGl0ZW1zLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZSwgdGhlbiB1cGRhdGluZyBET01FXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjQ2FydChpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IG5ld0NhcnQgPSBpdGVtc0luQ2FydC5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBuZXdJdGVtID0gaXRlbVxuXG4gICAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtLnByb2R1Y3QsIGl0ZW0ucXR5LCBpdGVtLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gICAgbmV3SXRlbS5zdWJ0b3RhbCA9IGRhdGEuc3VidG90YWxcbiAgICBuZXdJdGVtLnRvdGFsV2l0aEl2ID0gZGF0YS50b3RhbFdpdGhJdlxuICAgIG5ld0l0ZW0uZGlzY291bnRDdXJyZW5jeSA9IGRhdGEuZGlzY291bnRDdXJyZW5jeVxuICAgIG5ld0l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50ID0gZGF0YS5zdWJUb3RhbE5vRGlzY291bnRcbiAgICBuZXdJdGVtLnByaWNlVG9Vc2UgPSBkYXRhLnByaWNlVG9Vc2VcblxuICAgIHJldHVybiBuZXdJdGVtXG5cbiAgfSlcblxuICByZXR1cm4ge3R5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBuZXdDYXJ0fVxuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbURpc2NvdW50KGl0ZW1zSW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgaW5saW5lIGRpc2NvdW50IG9mIGFuIGl0ZW0sIGFuZCByZWZsZWN0IGl0IG9uIHN0b3JlXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbUxvdGUoaXRlbXNJbkNhcnQsIGNvZGUsIGxvdGUpIHtcbiAgY29uc3QgbG90ZU51bSA9ICFsb3RlID8gJy0nIDogbG90ZVxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9JVEVNX0xPVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb3RlOiBsb3RlTnVtLFxuICAgICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbi8vIFdoZW4gaXRlbSBpcyBzZWxlY3RlZCBpbiBjb2RlIGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBkZWZhdWx0Q29uZmlnLCB1c2VyQ29uZmlnKSB7XG5cbiAgY29uc3QgcGVyTGluZSA9IGZhbHNlXG5cbiAgY29uc3QgcHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdHMuZmluZEluZGV4KHByb2R1Y3QgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmNvZGUgPT0gY29kZSB8fCBwcm9kdWN0LmJhcmNvZGUgPT0gY29kZVxuICB9KSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAocHJvZHVjdFNlbGVjdGVkID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDogY2hlY2tJZkluQ2FydChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIHByb2R1Y3RTZWxlY3RlZCwgY2xpZW50LCBwZXJMaW5lKVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eSAoY29kZSwgcXR5LCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF0eUNvZGUgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gcGFyc2VGbG9hdChxdHkpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyBVcGRhdGVzIEFtb3VudCBiYXNlZCBvbiBxdHkgaW5wdXQgZmllbGRcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1Yk9uZSAoY29kZSwgc3ViT3JBZGQsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBzdWJPckFkZCA/IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIDEpIDogcGFyc2VGbG9hdChpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5IC0gMSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9DQUwgQVVYIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNoZWNrcyBpbiBjYXJ0IGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcbmZ1bmN0aW9uIGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSkge1xuXG4gIC8vIGNoZWNrIGlmIHByb2R1Y3QgaW4gY2FydFxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChjYXJ0ID0+IGNhcnQucHJvZHVjdC5jb2RlID09IGNvZGUgfHwgY2FydC5wcm9kdWN0LmJhcmNvZGUgPT0gY29kZSlcblxuICBjb25zdCBkYXRhTmV3UHJvZCA9IGNhY2xTdWJ0b3RhbChwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLCBxdHksIDAsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgLy8gQ0hFQ0sgSUYgQ09ORklHIEFMTE9XUyBNVUxUSVBMRSBMSU5FUyBPUiBOT1RcbiAgaWYgKHBlckxpbmUpIHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKClcbiAgICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgaW4gY2FydCBEaXNwYXRzIEFERF9UT19UQUJMRSwgaWYgZXhpc3RzIGRpc3BhdGNoIGNhcnQgdXBkYXRlZFxuICAgICAgPyB7XG4gICAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgICAgcXR5OiBxdHksXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgICBzdWJ0b3RhbDogZGF0YU5ld1Byb2Quc3VidG90YWwsXG4gICAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgICBwcmljZVRvVXNlOiBkYXRhTmV3UHJvZC5wcmljZVRvVXNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0ucXR5ICsgcXR5LFxuICAgICAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gcmVzXG5cbiAgLy8gSUdOT1JFIElGIEFMUkVBRFkgSU4gQ0FSVCBJRiBDT05GSUcgU0FZUyBUSEFUXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdHlwZTogJ0FERF9UT19DQVJUJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSxcbiAgICAgICAgcXR5OiBxdHksXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBkaXNjb3VudEN1cnJlbmN5OiBkYXRhTmV3UHJvZC5kaXNjb3VudEN1cnJlbmN5LFxuICAgICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IGRhdGFOZXdQcm9kLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICB0b3RhbFdpdGhJdjogZGF0YU5ld1Byb2QudG90YWxXaXRoSXYsXG4gICAgICAgIGxvdGU6ICctJyxcbiAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuXG4vLyBjYWxjdWxhdGVzIHRoZSBzdWJ0b3RhbCBieSBsaW5lLCBhbHNvIHRoZSB0b3RhbCB3aXRoIGl2IGluY2x1ZGVkLCB0aGUgZGlzY291bnQgaW4gY3VycmVuY3kgZm9ybWF0XG5mdW5jdGlvbiBjYWNsU3VidG90YWwocHJvZHVjdCwgcXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBwcmljZSA9IHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KVxuXG4gIGNvbnN0IHN1YlRvdGFsTm9EaXNjb3VudCA9IHByaWNlICogcXR5XG5cbiAgY29uc3Qgc3ViVG90YWwgPSBwcmljZSAqIHF0eSAqICgxIC0gKHByb2R1Y3REaXNjb3VudCAvIDEwMCkpICogKDEgLSAoZ2xvYmFsRGlzY291bnQgLyAxMDApKVxuXG4gIGNvbnN0IGl2MSA9IChwcm9kdWN0LnVzZV90YXhlcylcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgaXYyID0gKHByb2R1Y3QudXNlX3RheGVzMilcbiAgICA/IHN1YlRvdGFsICogKHByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IGl2MyA9IChwcm9kdWN0LnVzZV90YXhlczMpXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzMyAvIDEwMClcbiAgICA6IDBcblxuICBjb25zdCB0b3RhbFdpdGhJdiA9IHN1YlRvdGFsICsgaXYxICsgaXYyICsgaXYzXG5cbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUluTGluZSA9IHByaWNlICogcXR5ICogKHByb2R1Y3REaXNjb3VudCAvIDEwMClcbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeUdsb2JhbCA9ICgocHJpY2UgKiBxdHkpIC0gZGlzY291bnRDdXJyZW5jeUluTGluZSkgKiAoZ2xvYmFsRGlzY291bnQgLyAxMDApXG5cbiAgY29uc3QgZGlzY291bnRDdXJyZW5jeSA9IGRpc2NvdW50Q3VycmVuY3lJbkxpbmUgKyBkaXNjb3VudEN1cnJlbmN5R2xvYmFsXG5cbiAgcmV0dXJuIHtcbiAgICBzdWJ0b3RhbDogc3ViVG90YWwsXG4gICAgdG90YWxXaXRoSXY6IHRvdGFsV2l0aEl2LFxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRpc2NvdW50Q3VycmVuY3ksXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnQsXG4gICAgcHJpY2VUb1VzZTogcHJpY2VcbiAgfVxuXG59XG5cbi8vIHVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgY2FydCB3aXRoIG5ldyBpbmZvcm1hdGlvbiwgdGhpcyBhdXggZnVudGlvbiByZXR1cm5zIG5ldyB1cGRhdGVkIG9iamVjdCByZWFkeSBmb3IgcmVwbGFjZSB0aGUgc3RvcmVkIG9uZVxuZnVuY3Rpb24gdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleCwgbmV3UXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsIHV1aWQpIHtcblxuICBjb25zdCBkYXRhID0gY2FjbFN1YnRvdGFsKGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LCBuZXdRdHksIHByb2R1Y3REaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcblxuICByZXR1cm4ge1xuICAgIHV1aWQ6IHV1aWQsXG4gICAgcHJvZHVjdDogaXRlbXNJbkNhcnRbaW5kZXhdLnByb2R1Y3QsXG4gICAgZGlzY291bnRDdXJyZW5jeTogZGF0YS5kaXNjb3VudEN1cnJlbmN5LFxuICAgIHF0eTogbmV3UXR5LFxuICAgIGRpc2NvdW50OiBwcm9kdWN0RGlzY291bnQsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhLnN1YlRvdGFsTm9EaXNjb3VudCxcbiAgICBzdWJ0b3RhbDogZGF0YS5zdWJ0b3RhbCxcbiAgICB0b3RhbFdpdGhJdjogZGF0YS50b3RhbFdpdGhJdixcbiAgICBsb3RlOiBpdGVtc0luQ2FydFtpbmRleF0ubG90ZSxcbiAgICBwcmljZVRvVXNlOiBkYXRhLnByaWNlVG9Vc2VcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBkZXRlcm1pbiBwcmljZSB0byB1c2UgaW4gY2FsY3VsYXRpb25cbmZ1bmN0aW9uIHByaWNlVG9Vc2UocHJvZHVjdCwgY2xpZW50KSB7XG5cbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdHRU5FUkFMJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ0RJU1RSSUInICYmIHByb2R1Y3QudXNlUHJpY2UyKSByZXR1cm4gcHJvZHVjdC5wcmljZTJcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdESVNUUklCJykgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnICYmIHByb2R1Y3QudXNlUHJpY2UzKSByZXR1cm4gcHJvZHVjdC5wcmljZTNcbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJyAmJiBwcm9kdWN0LnVzZVByaWNlMikgcmV0dXJuIHByb2R1Y3QucHJpY2UyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScpIHJldHVybiBwcm9kdWN0LnByaWNlXG5cbiAgcmV0dXJuIHByb2R1Y3QucHJpY2VcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdE1vbmV5LmpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcbmZvcm1hdE1vbmV5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvYXBwLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2ZlY3RoUHJvZmlsZX0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuLy8gQ09NUE9ORU5UU1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xuaW1wb3J0IEZldGNoaW5nIGZyb20gJy4uLy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvZmV0Y2hpbmcuanN4J1xuXG4vLyBpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaGluZzogc3RvcmUuZmV0Y2hpbmcuZmV0Y2hpbmcsXG4gICAgc2lkZU1lbnVWaXNpYmxlOiBzdG9yZS5sYXlvdXQuc2lkZU1lbnVWaXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZWN0aFByb2ZpbGUoKSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGZldGNoaW5nID0gdGhpcy5wcm9wcy5mZXRjaGluZyA/IDxGZXRjaGluZyAvPiA6ICcnXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5zaWRlTWVudVZpc2libGUgPyAnbWFpbkNvbnRhaW5lcicgOiAnbWFpbkNvbnRhaW5lciBzaWRlSGlkZGVuJ1xuICAgIGNvbnN0IGNvbnRlbnQgPSA8Um91dGVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgIDxkaXYgaWQ9J21haW5Db250YWluZXInIGNsYXNzTmFtZT17bWFpbkNvbnRhaW5lckNsYXNzfT5cbiAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250YWluZXItY29udGVudCc+XG4gICAgICAgICAgICB7cm91dGVzfVxuICAgICAgICAgICAge2ZldGNoaW5nfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vbWFpbi5qc3giLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aFByb2ZpbGUoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvcHJvZmlsZS8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfRlVMRklMTEVEJywgcGF5bG9hZDoge3VzZXI6IHJlc3BvbnNlLmRhdGFbMF0uZmllbGRzLCBwcm9maWxlOiByZXNwb25zZS5kYXRhWzFdLmZpZWxkc319KVxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhJc0FkbWluTG9ja2VkKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycHJlZnMvYWRtaW5fX2lzX2FkbWluX2xvY2tlZC8nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9GVUxGSUxMRUQnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnZhbHVlfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfUkVKRUNURUQnLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG4vLyBSb3V0ZXMgQ29tcG9uZW50c1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9ob21lL2hvbWUuanN4J1xuaW1wb3J0IFNhbGUgZnJvbSAnLi4vc2FsZS9tYWluLmpzeCdcblxuY29uc3Qgcm91dGVzID0gPGRpdiBjbGFzc05hbWU9J2hlaWdoMTAwJz5cblxuICA8Um91dGUgZXhhY3QgcGF0aD0nL3NhbGVzJyBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDxSb3V0ZSBwYXRoPScvc2FsZXMvc2FsZScgY29tcG9uZW50PXtTYWxlfSAvPlxuXG48L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21haW4vcm91dGVzLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgY2hlY2tVc2VyUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGVja1Blcm1pc3Npb25zJ1xuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSE9NRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxuXG4gIH1cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nTWFpbiBoZWlnaDEwMCc+XG4gICAgICBIT01FXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2hvbWUvaG9tZS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBjaGVja1VzZXJQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoZWNrUGVybWlzc2lvbnMnXG4vLyBpbXBvcnQgeyBnZXRJdGVtRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQvY29udGVudC5qc3gnXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi9hc2lkZS9hc2lkZS5qc3gnXG5pbXBvcnQgU2VhcmNoUHJvZHVjdCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3gnXG5pbXBvcnQgU2VhcmNoQ2xpZW50IGZyb20gJy4uL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoUGFuZWwuanN4J1xuaW1wb3J0IFBheVBhbmVsIGZyb20gJy4vcGF5L3BheVBhbmVsLmpzeCdcbmltcG9ydCBJbnZvaWNlUGFuZWwgZnJvbSAnLi4vZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTQUxFX1BBTkVMX01PVU5URUQnLCBwYXlsb2FkOiAnJ30pXG5cbiAgfVxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzYWxlJz5cbiAgICAgIDxDb250ZW50IC8+XG4gICAgICA8QXNpZGUgLz5cblxuICAgICAgPFNlYXJjaFByb2R1Y3QgLz5cbiAgICAgIDxTZWFyY2hDbGllbnQgLz5cbiAgICAgIDxQYXlQYW5lbCAvPlxuICAgICAgPEludm9pY2VQYW5lbCAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvbWFpbi5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCdcbmltcG9ydCBDYXJ0IGZyb20gJy4uLy4uL2dlbmVyYWwvY2FydC9jYXJ0LmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZ1bGxXaWR0aDogc3RvcmUuc2FsZS5mdWxsV2lkdGgsXG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICB0b2dnbGVXaWR0aCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudCBmdWxsV2lkdGgnIDogJ3NhbGUtY29udGVudCdcbiAgICBjb25zdCBjYXJ0Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQtY2FydCcgOiAnc2FsZS1jb250ZW50LWNhcnQgZnVsbEhlaWdodCdcbiAgICBjb25zdCB0b3RhbENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LXRvdGFsJyA6ICdzYWxlLWNvbnRlbnQtdG90YWwgY29sbGFwc2VkJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtY29udGVudC1wcm9kdWN0JyA+XG4gICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJ0Q2xhc3N9ID5cbiAgICAgICAgPENhcnQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RvdGFsQ2xhc3N9ID5cbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1sZWZ0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9jb250ZW50L2NvbnRlbnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBpbnB1dFZhbDogc3RvcmUucHJvZHVjdHMuaW5wdXRWYWwsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlc1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb2RlSW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHRoaXMuY29kZUlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9QUk9EVUNUUycsIHBheWxvYWQ6ICcnfSlcblxuICAgIGNvbnN0IHByb2R1Y3RLd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3Byb2R1Y3RzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJyxcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX1BST0RVQ1RTX1JFSkVDVEVEJ1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0SXRlbURpc3BhdGNoKHByb2R1Y3RLd2FyZ3MpKVxuXG4gIH1cblxuICBzZWFyY2hQcm9kdWN0Q2xpY2soKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnUFJPRFVDVF9TSE9XX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGlmIChldi50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZS5zcGxpdCgnKicpWzBdIC8vIFNwbGl0IHZhbCBbMF0gaXMgY29kZSBbMV0gaXMgcXR5XG4gICAgICAgIGxldCBxdHkgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVsxXVxuICAgICAgICBxdHkgPSAoaXNOYU4ocXR5KSlcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IHBhcnNlRmxvYXQocXR5KSAvLyBpZiBubyBxdHkgc2V0cyB0byAxXG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWQoY29kZSwgcXR5LCB0aGlzLnByb3BzLnByb2R1Y3RzLCB0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LFxuICAgICAgICAgIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIHRoaXMucHJvcHMuY2xpZW50LCB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcsIHRoaXMucHJvcHMudXNlckNvbmZpZykpXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcbiAgICAgICAgLy8gICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IDB9KVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnLCBwYXlsb2FkOiBjb2RlfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgcHJvZHVjdFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGI+UHJvZHVjdG86PC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZSc+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1iYXJjb2RlJyAvPlxuICAgICAgICAgIDxpbnB1dCBpZD0ncHJvZHVjdENvZGVJbnB1dEZpZWxkJyBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dFZhbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29kZUlucHV0ID0gaW5wdXRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBlbCBDw7NkaWdvIGRlbCBQcm9kdWN0bydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZHVjdC1pbnB1dHMtY29kZS1pbnB1dCBtb3VzZXRyYXAgZm9ybS1jb250cm9sIGlucHV0LWxnJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLXNlYXJjaCc+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3giLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanNcbi8vIG1vZHVsZSBpZCA9IDYxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSAnLi9jYXJ0SXRlbXMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIGRlZmF1bHRDb25maWc6IHN0b3JlLmNvbmZpZy5kZWZhdWx0U2FsZXMsXG4gICAgLy8gdXNlckNvbmZpZzogc3RvcmUuY29uZmlnLnVzZXJTYWxlcyxcbiAgICAvLyBwcm9kdWN0U2VhcmNocGFuZWxWaXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2InLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcblxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrYycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLmZvY3VzKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnQtc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xuXG4gICAgICBNb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VBUkNIX0NMSUVOVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgdXNlTG90ZSA9IHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZ1xuICAgIC8vICAgPyB0aGlzLnByb3BzLmRlZmF1bHRDb25maWcuY2FydEl0ZW1Vc2VMb3RlXG4gICAgLy8gICA6IGZhbHNlXG5cbiAgICAvLyBjb25zdCBsb3RlRmllbGQgPSB1c2VMb3RlXG4gICAgLy8gICA/IDx0aD5Mb3RlPC90aD5cbiAgICAvLyAgIDogPHRoIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NhcnQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkFydDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLWl2YSc+XG4gICAgICAgICAgPGg1PklWPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsIElWSTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYXJ0SXRlbXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydC5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVUb3RhbHMsIHJlbW92ZUZyb21DYXJ0fSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge3VwZGF0ZUl0ZW1EaXNjb3VudCwgdXBkYXRlSXRlbUxvdGUsIHVwZGF0ZVF0eSwgYWRkU3ViT25lLCB1cGRhdGVRdHlDb2RlfSBmcm9tICcuLi9wcm9kdWN0L2FjdGlvbnMnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGluQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWQsXG4gICAgY2FydEl0ZW1BY3RpdmU6IHN0b3JlLmNhcnQuY2FydEl0ZW1BY3RpdmVcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gT24gY29tcG9uZW50IHVwZGF0ZSAoVGhlIGNhcnQgaGFzIGJlZW4gbW9kaWZpZWQpIGNhbGxzIHRoZSB1cGRhdGUgdG90YWxzIG1ldGhvZCBpbiBhY3Rpb25zIGZpbGUuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlVG90YWxzKHRoaXMucHJvcHMuaW5DYXJ0KSlcblxuICAgIC8vIEF1dG8gU2Nyb2xsIFRvIGVuZCBvZiBjb250YWluZXJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYm9keScpXG4gICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodFxuXG4gIH1cblxuICAvLyBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XG4gIC8vICAgaWYgKHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgIT0gbmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtuZXh0UHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtwbHVzJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCB0cnVlLCBfdGhpcy5wcm9wcy5pbkNhcnQsIF90aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgICBfdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2YnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcXR5JHtfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZX1gKS5mb2N1cygpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrLScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3ViT25lKF90aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlLCBmYWxzZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCsqJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgX190aGlzID0gX3RoaXNcbiAgICAgIGFsZXJ0aWZ5LnByb21wdChgTnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG9gLCAnSW5ncmVzZSBsYSBudWV2YSBjYW50aWRhZCBwYXJhIGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkbycsICcnXG4gICAgICAgICwgZnVuY3Rpb24oZXZ0LCB2YWx1ZSkge1xuICAgICAgICAgIF9fdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHlDb2RlKF9fdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdmFsdWUsIF9fdGhpcy5wcm9wcy5pbkNhcnQsXG4gICAgICAgICAgICBfX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsIF9fdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgICB9XG4gICAgICAgICwgZnVuY3Rpb24oKSB7fSlcbiAgICAgICAgLnNldCgnbGFiZWxzJywge29rOiAnT2snLCBjYW5jZWw6ICdDYW5jZWxhcid9KVxuICAgIH0pXG4gIH1cblxuICBkaXNjb3VudElucHV0S2V5UHJlc3MoY29kZSwgZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gICAgfVxuXG4gIH1cblxuICBkaXNjb3VudElucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVJdGVtRGlzY291bnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGRpc2NvdW50LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LFxuICAgICAgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dENoYW5nZShjb2RlLCBldikge1xuXG4gICAgY29uc3QgcXR5ID0gcGFyc2VGbG9hdCgoZXYudGFyZ2V0LnZhbHVlKSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVF0eShjb2RlLCBxdHksIHRoaXMucHJvcHMuaW5DYXJ0LCB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCkpXG5cbiAgfVxuXG4gIHF0eUlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJlc3Nzc3MnLCBldi5rZXkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGxvdGVJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgICA6IDBcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gICAgfVxuXG4gIH1cblxuICBsb3RlSW5wdXRPbkJsdXIoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IGxvdGUgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbUxvdGUodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUsIGxvdGUpKVxuXG4gIH1cblxuICBzZXRDYXJ0SXRlbUFjdGl2ZShjb2RlLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG5cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQodGhpcy5wcm9wcy5pbkNhcnQsIGNvZGUpKVxuXG4gIH1cblxuICBmaWVsZEZvY3VzKGV2KSB7XG4gICAgZXYudGFyZ2V0LnNlbGVjdCgpXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGl0ZW1zIGluIGNhcnQgdXNpbmcgdGFibGUgcm93c1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgaXRlbXMyID0gY2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAoaXRlbS5wcm9kdWN0LmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSB8fCBpdGVtLnByb2R1Y3QuYmFyY29kZSA9PSB0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlKVxuICAgICAgICA/ICdjYXJ0LWFjdGl2ZVJvdyBjYXJ0LWJvZHktaXRlbSdcbiAgICAgICAgOiAnY2FydC1ib2R5LWl0ZW0nXG5cbiAgICAgIGNvbnN0IHJlbW92ZUljb25DbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAncmVtb3ZlSXRlbUljb24gZGlzYWJsZWQnIDogJ3JlbW92ZUl0ZW1JY29uJ1xuXG4gICAgICBjb25zdCB0YXhlczEgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgPyBpdGVtLnByb2R1Y3QudGF4ZXNcbiAgICAgICAgOiAwXG5cbiAgICAgIGNvbnN0IHF0eUZpZWxkID0gPGlucHV0XG4gICAgICAgIGlkPXtgcXR5JHtpdGVtLnByb2R1Y3QuY29kZX1gfVxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMucXR5SW5wdXRDaGFuZ2UuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgb25LZXlVcD17dGhpcy5xdHlJbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIHZhbHVlPXtpdGVtLnF0eX1cbiAgICAgIC8+XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50RmllbGQgPSB0aGlzLnByb3BzLmNsaWVudC5zYWxlTG9hZGVkXG4gICAgICAgID8gPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFyc2VGbG9hdChpdGVtLmRpc2NvdW50KX1cbiAgICAgICAgLz5cbiAgICAgICAgOiA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmRpc2NvdW50SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRpc2NvdW50SW5wdXRPbkJsdXIuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZmllbGRGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgIC8+XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlQ2xhc3N9XG4gICAgICAgIGtleT17aXRlbS51dWlkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENhcnRJdGVtQWN0aXZlLmJpbmQodGhpcywgaXRlbS5wcm9kdWN0LmNvZGUpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tY29kZSc+XG4gICAgICAgICAgPGg1PkPDs2RpZ288L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuY29kZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kZXNjcmlwdGlvbic+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tcXR5Jz5cbiAgICAgICAgICA8aDU+Q2FudGlkYWQ8L2g1PlxuICAgICAgICAgIHtxdHlGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS11bml0UHJpY2UnPlxuICAgICAgICAgIDxoNT5QIFVuaXQ8L2g1PlxuICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1kaXNjb3VudCc+XG4gICAgICAgICAgPGg1PkRlc2M8L2g1PlxuICAgICAgICAgIHtkaXNjb3VudEZpZWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWl2YSc+XG4gICAgICAgICAgPGg1PklWQTwvaDU+XG4gICAgICAgICAge3RheGVzMX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS10b3RhbCc+XG4gICAgICAgICAgPGg1PlRvdGFsPC9oNT5cbiAgICAgICAgICAgIOKCoSB7aXRlbS50b3RhbFdpdGhJdi5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cmVtb3ZlSWNvbkNsYXNzfT5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpdGVtLnV1aWQpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzLWNpcmNsZScgLz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICA8L2Rpdj5cbiAgICB9KVxuXG4gICAgLy8gcmV0dXJuIDx0Ym9keSBjbGFzc05hbWU9J3RhYmxlLWJvZHknPlxuICAgIC8vICAge2l0ZW1zfVxuICAgIC8vIDwvdGJvZHk+XG5cbiAgICByZXR1cm4gPGRpdiBpZD0nY2FydC1ib2R5JyBjbGFzc05hbWU9J2NhcnQtYm9keSc+XG4gICAgICB7aXRlbXMyfVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvY2FydEl0ZW1zLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OUyBVU0VEIElOIENPTVBPTkVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdG90YWxzIHRoZSBjYXJ0IHN0b3JlIGl0ZW0sIGdlbmVyYXRlcyBuZXcgdmFsdWVzIGFjY29yZGluZyBjYXJ0IGl0ZW0gb2JqZWN0cywgdGhlbiBwdXNoIHRoZSB0byBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFscyhpbkNhcnQpIHtcblxuICBsZXQgc3VidG90YWwgPSAwXG4gIGxldCBzdWJUb3RhbE5vRGlzY291bnQgPSAwXG4gIGxldCB0YXhlcyA9IDBcbiAgbGV0IHRvdGFsID0gMFxuICBsZXQgZGlzY291bnRUb3RhbCA9IDBcblxuICAvLyBmb3IgRWFjaCBlbGVtZW50IGFkZHMgdGhlIHZhbHVlcyB0byBnZXQgdG90YWxzXG4gIGluQ2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG5cbiAgICBzdWJUb3RhbE5vRGlzY291bnQgPSBzdWJUb3RhbE5vRGlzY291bnQgKyBpdGVtLnN1YlRvdGFsTm9EaXNjb3VudFxuXG4gICAgc3VidG90YWwgPSBzdWJ0b3RhbCArIGl0ZW0uc3VidG90YWxcblxuICAgIGNvbnN0IHRheGVzQ2FsYyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlcyAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjMiA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzMilcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMyIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICBjb25zdCB0YXhlc0NhbGMzID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMzKVxuICAgICAgPyBpdGVtLnN1YnRvdGFsICogKGl0ZW0ucHJvZHVjdC50YXhlczMgLyAxMDApXG4gICAgICA6IDBcblxuICAgIHRheGVzID0gdGF4ZXMgKyB0YXhlc0NhbGMgKyB0YXhlc0NhbGMyICsgdGF4ZXNDYWxjM1xuXG4gICAgZGlzY291bnRUb3RhbCA9IGRpc2NvdW50VG90YWwgKyBpdGVtLmRpc2NvdW50Q3VycmVuY3kgLy8gdGhpcyBpcyB0aGUgdmFsdWUgaW4gY3VycmVuY3lcblxuICB9KVxuICAvLyBUT0RPIENvbmZpZyBmb3Igcm91bmQgb3Igbm90XG4gIC8vIHRvdGFsID0gTWF0aC5yb3VuZChzdWJ0b3RhbCArIHRheGVzKVxuICB0b3RhbCA9IHN1YnRvdGFsICsgdGF4ZXNcbiAgLy8gcmV0dXJzIGEgZGlzcGF0Y2ggd2l0aCBhIHBheWxvYWQgb2YgdGhlIG9idGFpbmVkIHZhbHVlc1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVF9UT1RBTFMnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHN1YnRvdGFsOiBzdWJ0b3RhbCxcbiAgICAgIHRheGVzOiB0YXhlcyxcbiAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgIGRpc2NvdW50VG90YWw6IGRpc2NvdW50VG90YWwsXG4gICAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN1YlRvdGFsTm9EaXNjb3VudFxuICAgIH1cbiAgfVxufVxuXG4vLyBGaW5kcyBhIGNvZGUgaW4gdGhlIGNhcnQgYW5kIHNlbmRzIGEgZGlzcGF0Y2ggdG8gcmVtb3ZlIGl0IGZyb20gY2FydCBiYXNlZCBvbiBpbmRleFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGl0ZW1zSW5DYXJ0LCBjb2RlKSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnUkVNT1ZFX0ZST01fQ0FSVCcsXG4gICAgICBwYXlsb2FkOiBpbmRleEluQ2FydFxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCdcbmltcG9ydCBUb3RhbHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCdcbmltcG9ydCBCdXR0b25zIGZyb20gJy4uL2J1dHRvbnMvYnV0dG9ucy5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHRvZ2dsZVdpZHRoICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0ZVTExfV0lEVEgnLCBwYXlsb2FkOiAnJ30pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGFzaWRlQ2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWFzaWRlIGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZSdcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lckNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZS1jb250ZW50IGNvbGxhcHNlZCcgOiAnc2FsZS1hc2lkZS1jb250ZW50J1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXNpZGVDb250YWluZXJDbGFzc30+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS1hcnJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3ctY29udGFpbmVyJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxDbGllbnQgLz5cbiAgICAgICAgPFRvdGFscyAvPlxuICAgICAgICA8QnV0dG9ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJ1dHRvbnMgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2FsZS1hc2lkZS10b3RhbCcgPlxuICAgICAgICDigqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoKX1cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jaGV2cm9uLXJpZ2h0JyBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdpZHRoLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjbGllbnRTZWxlY3RlZCwgc2VhcmNoQ2xpZW50LCB1c2VyU2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7Z2V0SXRlbURpc3BhdGNofSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge2dldENsaWVudERlYnR9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2dldENsaWVudERlYnQnXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHMsXG4gICAgY2xpZW50U2VsZWN0ZWQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgY2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnQsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHVzZXJzOiBzdG9yZS5jbGllbnRzLnVzZXJzLFxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50cyxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIGRpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jbGllbnRTZWxlY3RlZCAhPSB0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkKSB7XG4gICAgICAvLyBzZXQgdGhlIGRpc2NvdW50OiBkZWZhdWx0IHZhbHVlIG9yIDBcblxuICAgICAgaWYgKCFuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQuc2FsZUxvYWRlZCkge1xuXG4gICAgICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgICAgICBjbGllbnRfaWQ6IG5leHRQcm9wcy5jbGllbnRTZWxlY3RlZC5pZCxcbiAgICAgICAgICBzdWNjZXNzOiAnU0VUX0NMSUVOVF9ERUJUJyxcbiAgICAgICAgICBmYWlsOiAnU0VUX0NMSUVOVF9ERUJUX0ZBSUxFRCdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc2NvdW50ID0gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgPyBuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCA6IDBcblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQobmV4dFByb3BzLmNhcnQsIGRpc2NvdW50LCBuZXh0UHJvcHMuY2xpZW50KSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRDbGllbnREZWJ0KGt3YXJncykpXG5cbiAgICAgICAgLy8gU0VUUyBWQUxVRSBPRiBERUZBVUxUIERJU0NPVU5UIFRPIEZJRUxEIE9SIDBcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IGRpc2NvdW50XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gJydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9DTElFTlRTJywgcGF5bG9hZDogJyd9KVxuXG4gICAgY29uc3QgY2xpZW50S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9jbGllbnRzJyxcbiAgICAgIHN1Y2Nlc3NUeXBlOiAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnLFxuICAgICAgZXJyb3JUeXBlOiAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChjbGllbnRLd2FyZ3MpKVxuXG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgY29uc3QgY29kZSA9IGV2LnRhcmdldC52YWx1ZSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB9XG5cbiAgfVxuXG4gIHVzZXJTZWxlY3QoZXYpIHtcbiAgICBjb25zdCBfaWQgPSBldi50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVzZXJTZWxlY3RlZChfaWQsIHRoaXMucHJvcHMudXNlcnMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHVzZXJVblNlbGVjdChldikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdVU0VSX0NMRUFSJywgcGF5bG9hZDogJyd9KSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgfVxuXG4gIHNlYXJjaENsaWVudENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQoKSlcblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyBTRUxFQ1QyIERBVEFcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgY29uc3QgY2xpZW50VG9TaG93ID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQpXG4gICAgICA/IGAke3RoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQubmFtZX0gJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLmxhc3RfbmFtZX1gXG4gICAgICA6ICdDbGllbnRlIENvbnRhZG8nXG5cbiAgICAvLyBjb25zdCBjcmVkaXRJY29uID0gKHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5oYXNfY3JlZGl0KVxuICAgIC8vICAgPyAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICAgIC8vICAgOiAnZmEgZmEtdGltZXMtY2lyY2xlJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWltZyc+XG4gICAgICAgIDxpbWcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICBzcmM9Jy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YSc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPkNsaWVudGUgOjwvaDM+XG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEtcm93Jz5cbiAgICAgICAgICA8aDM+Tm9tYnJlIDo8L2gzPlxuICAgICAgICAgIDxzcGFuPntjbGllbnRUb1Nob3d9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXG5heGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFWFBPUlQgRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQ0hFQ0sgRk9SIENMSUVOVCBERUJUIEFORCBESVNQQVRDSFxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudERlYnQoa3dhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7Y2xpZW50X2lkOiBrd2FyZ3MuY2xpZW50X2lkfSlcbiAgICAvLyBjYWxscyB0aGUgZnVuY3Rpb24gaW4gYmFja2VuZCB0byBjaGVjayBwZXJtaXNzaW9uc1xuICAgIGF4aW9zLnBvc3QoJy9hcGkvZ2V0Y2xpZW50ZGVidC8nLCBkYXRhKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5zdWNjZXNzLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIGludGVudGFyIG9idGVuZXIgbGEgZGV1ZGEgZGVsIHVzdWFyaW8sIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmZhaWwsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2dldENsaWVudERlYnQuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3JlY2FsY0NhcnR9IGZyb20gJy4uLy4uL2dlbmVyYWwvcHJvZHVjdC9hY3Rpb25zLmpzJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICBjbGllbnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWQsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc2NvdW50VmFsOiAwXG4gICAgfVxuICB9XG5cbiAgc2hvd0ludm9pY2VQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgICAgY29uc3QgbWF4RGlzY291bnQgPSB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA/IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50IDogMTAwXG4gICAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjYWxjQ2FydCh0aGlzLnByb3BzLml0ZW1zSW5DYXJ0LCB0aGlzLnN0YXRlLmRpc2NvdW50VmFsLCB0aGlzLnByb3BzLmNsaWVudCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZGlzY291bnRWYWwgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA/IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgICA6IDBcbiAgICB9XG5cbiAgfVxuXG4gIGlucHV0T25CbHVyKGV2KSB7XG4gICAgLy8gaWYgS2V5IHByZXNzZWQgaWQgRW50ZXJcblxuICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICAvLyBDQUxDIFRIRSBNQVggRElTQ09VTlQgQU5EIENIRUNLUyBJVCBPTiBGSUVMRFxuICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgIGlmIChkaXNjb3VudCA8PSBtYXhEaXNjb3VudCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9HTE9CQUxfRElTQ09VTlQnLCBwYXlsb2FkOiBkaXNjb3VudH0pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRWwgZGVzY3VlbnRvIHBhcmEgZWwgY2xpZW50ZSBzZWxlY2Npb25hZG8gbm8gcHVlZGUgc2VyIG1heW9yIGFsICR7bWF4RGlzY291bnR9JWApXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgIH1cblxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3RhbHMnPlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAncGFkZGluZ1RvcCc6ICcwJyxcbiAgICAgICAgJ21hcmdpblRvcCc6ICcwJ1xuICAgICAgfX0gY2xhc3NOYW1lPSdiZy13aGl0ZSByaWdodC1pdGVtJz5cbiAgICAgICAgey8qIDxzcGFuPlxuICAgICAgICAgIDxiPlRvdGFsZXM6PC9iPlxuICAgICAgICA8L3NwYW4+PGJyIC8+ICovfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0b3RhbHMtdGFibGUnPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlN1Yi1Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzM3JSdcbiAgICAgICAgICAgICAgfX0+RGVzY3VlbnRvICU8L3RoPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwJ1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPSdkaXNjb3VudEZpZWxkJ1xuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5pbnB1dE9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzM3cHgnLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcwIDAgMCAxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnRTaXplJzogJzE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzYWxlX2dsb2JhbF9kaXNjb3VudF9pbnB1dCBmb3JtLWNvbnRyb2wnIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EZXNjdWVudG86PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5JVjo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgey8qIDx0aCBvbkNsaWNrPXt0aGlzLnNob3dJbnZvaWNlUGFuZWwuYmluZCh0aGlzKX0+VG90YWw6PC90aD4gKi99XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDo8L3RoPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwcmljZSc+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC90b3RhbHMvdG90YWxzLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Rpc2FibGVkOiBzdG9yZS5zYWxlcy5jb21wbGV0ZWR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2hvd1BheVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93SW5vaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93U2FsZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1NBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIHNob3dQcmVzYWxlc1BhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX1BSRVNBTEVTX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICB9XG4gIG5ld1NhbGUoKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NhbGVzL3NhbGUnXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ05FV19TQUxFJywgcGF5bG9hZDogLTF9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgID8gPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0lub2ljZVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgICBGYWN0dXJhXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5ld1NhbGUuYmluZCh0aGlzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICAgIE51ZXZhIFZlbnRhXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXJlZnJlc2gnIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgOiAnJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgYnV0dG9ucyc+XG5cbiAgICAgIHsvKiA8c3Bhbj5cbiAgICAgICAgPGI+UGFnbzo8YnIgLz48L2I+XG4gICAgICA8L3NwYW4+ICovfVxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQYXlQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIENvYnJhclxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93U2FsZVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgVmVudGFzIGRlbCBkw61hXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXNhbGVzUGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBQcmUtVmVudGFzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlzdCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtidXR0b25zfVxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvYnV0dG9ucy9idXR0b25zLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBhbmVsQ2xpY2soZXYpIHtcblxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZC1wYW5lbCcpKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgfVxuXG4gIH1cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgdmlzaWJsZU9yTm90ID0gKHRoaXMucHJvcHMudmlzaWJsZSlcbiAgICAgID8gJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCBpcy12aXNpYmxlJ1xuICAgICAgOiAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLXByb2R1Y3QgZnJvbS1sZWZ0J1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2aXNpYmxlT3JOb3R9IG9uQ2xpY2s9e3RoaXMucGFuZWxDbGljay5iaW5kKHRoaXMpfT5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2NkLXBhbmVsLWhlYWRlcic+XG4gICAgICAgIDxoMT5Cw7pzcXVlZGEgZGUgUHJvZHVjdG88L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaFByb2R1Y3R9IGZyb20gJy4vYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxuICAgIHNlYXJjaFZhbHVlOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5zZWFyY2hWYWx1ZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNlYXJjaFByb2R1Y3RBY3Rpb24oKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnLCBwYXlsb2FkOiBldi50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoUHJvZHVjdEFjdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaFByb2R1Y3QodGhpcy5wcm9wcy5zZWFyY2hWYWx1ZSwgdGhpcy5wcm9wcy5wcm9kdWN0cykpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBEZXNjcmlwY2nDs246PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5RG93bj17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J3Byb2R1Y3Qtc2VhcmNoLWlucHV0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnB1dC1sZyBtb3VzZXRyYXAnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0yJz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J3Byb2R1Y3Qtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9zZWFyY2hGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7cHJvZHVjdFNlbGVjdGVkVGFibGUsIGhpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hQcm9kdWN0cy5wcm9kdWN0c01hdGNoZWQsIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXN1bHRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNlbGVjdFByb2R1Y3QoY29kZSwgZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMucHJvcHMubWF0Y2hlcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdFByb2R1Y3QuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnNlbGxwcmljZX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICA8dGFibGUgaWQ9J3Byb2R1Y3RlLXNlYXJjaC10YWJsZScgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXBjacOzbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlByZWNpbzwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdwcm9kdWN0LXNlYXJjaC10YWJsZS1ib2R5Jz5cbiAgICAgICAgICAgICAge3Byb2R1Y3RzfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVzdWx0c1RhYmxlLmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7aGlkZVBhbmVsfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaEZvcm0uanN4J1xuaW1wb3J0IFJlc3VsdHNUYWJsZSBmcm9tICcuL3Jlc3VsdHNUYWJsZS5qc3gnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHt2aXNpYmxlOiBzdG9yZS5zZWFyY2hDbGllbnRzLnZpc2libGV9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1jbGllbnQgZnJvbS1yaWdodCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIENsaWVudGU8L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZC1wYW5lbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXG4gICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7c2VhcmNoQ2xpZW50fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NsaWVudHM6IHN0b3JlLmNsaWVudHMuY2xpZW50c31cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hWYWw6ICcnXG4gICAgfVxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNlYXJjaENsaWVudEFjdGlvbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgfVxuXG4gIH1cblxuICBzZWFyY2hDbGllbnRBY3Rpb24oKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5zdGF0ZS5zZWFyY2hWYWxcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlYXJjaENsaWVudCh2YWwsIHRoaXMucHJvcHMuY2xpZW50cykpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjbGllbnQtc2VhcmNoLWlucHV0Jz5Cw7pzcXVlZGEgcG9yIE5vbWJyZTo8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiByb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNyBjb2wtc20tOCc+XG4gICAgICAgICAgICA8aW5wdXQgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX0gdHlwZT0ndGV4dCcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXG4gICAgICAgICAgICB9fSBpZD0nY2xpZW50LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoQ2xpZW50QWN0aW9uLmJpbmQodGhpcyl9IHR5cGU9J2J1dHRvbicgaWQ9J2NsaWVudC1zZWFyY2gtYnRuJyBzdHlsZT17e1xuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgICAnd2lkdGgnOiAnNDhweCdcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIGZvcm0tY29udHJvbCBtYXJnaW5CdG5BZGQyJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NsaWVudFNlbGVjdGVkfSBmcm9tICcuLi8uLi9jbGllbnRzL2FjdGlvbnMuanMnXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zLmpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHttYXRjaGVzOiBzdG9yZS5zZWFyY2hDbGllbnRzLmNsaWVudHNNYXRjaGVkLCBjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzZWxlY3RDbGllbnQoY29kZSwgZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsaWVudFNlbGVjdGVkKGNvZGUsIHRoaXMucHJvcHMuY2xpZW50cykpIC8vIGRpc3BhdGNocyBhY3Rpb24gYWNjb3JkaW5nIHRvIHJlc3VsdFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIGNvbnN0IGhhc0NyZWRpdCA9IChpdGVtLmhhc19jcmVkaXQpXG4gICAgICAgID8gJ1NJJ1xuICAgICAgICA6ICdOTydcblxuICAgICAgcmV0dXJuIDx0ciBvbkRvdWJsZUNsaWNrPXt0aGlzLnNlbGVjdENsaWVudC5iaW5kKHRoaXMsIGl0ZW0uY29kZSl9IGtleT17aXRlbS5jb2RlfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmNvZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7YCR7aXRlbS5uYW1lfSAke2l0ZW0ubGFzdF9uYW1lfWB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aGFzQ3JlZGl0fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgMFxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgIH0pXG5cbiAgICByZXR1cm4gPGZvcm0gYWN0aW9uPScnIGNsYXNzTmFtZT0nY29sLXNtLTEyIGZvcm0taG9yaXpvbnRhbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgIDx0YWJsZSBpZD0nY2xpZW50ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5DcsOpZGl0bzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlNhbGRvPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9J2NsaWVudC1zZWFyY2gtdGFibGUtYm9keSc+XG4gICAgICAgICAgICAgIHtjbGllbnRzfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFBheU1ldGhvZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCdcbmltcG9ydCBQYXlDYXNoIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYWhzLmpzeCdcbmltcG9ydCBQYXlDYXJkIGZyb20gJy4vY29tcG9uZW50cy9wYXlDYXJkLmpzeCdcbmltcG9ydCBQYXlDcmVkaXQgZnJvbSAnLi9jb21wb25lbnRzL3BheUNyZWRpdC5qc3gnXG5pbXBvcnQgUGF5T3RoZXIgZnJvbSAnLi9jb21wb25lbnRzL3BheU90aGVyLmpzeCdcbmltcG9ydCBQYXlTaWRlQmFyIGZyb20gJy4vY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGFuZWxWaXNpYmxlOiBzdG9yZS5wYXkuaXNWaXNpYmxlLCBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2R9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5UGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ3BheS1wYW5lbCBpcy12aXNpYmxlJ1xuICAgICAgOiAncGF5LXBhbmVsJ1xuXG4gICAgbGV0IHBheU1ldGhvZCA9ICcnXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhc2ggLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDQVJEJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNhcmQgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gY2FzZVxuXG4gICAgICBjYXNlICdDUkVEJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheUNyZWRpdCAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyAgY2FzZVxuXG4gICAgICBjYXNlICdPVEhFJzpcbiAgICAgIHtcbiAgICAgICAgcGF5TWV0aG9kID0gPFBheU90aGVyIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgIH0gLy8gc3dpdGNoXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgICBSZWdpc3RyYXIgUGFnb1xuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UGF5TWV0aG9kIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1hcmVhLWNvbnRhaW5lcic+XG5cbiAgICAgICAgICB7cGF5TWV0aG9kfVxuXG4gICAgICAgICAgPFBheVNpZGVCYXIgLz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7cGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU1ldGhvZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY2xpY2tDaGFuZ2VQYXlNZXRob2QobWV0aG9kLCBldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NIQU5HRV9QQVlfTUVUSE9EJywgcGF5bG9hZDogbWV0aG9kfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdCc+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVNIJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVNIJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtbW9uZXknIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NBUkQnKX0gY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5wYXlNZXRob2QgPT0gJ0NBUkQnXG4gICAgICAgID8gJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0gc2VsZWN0ZWQnXG4gICAgICAgIDogJ3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0nKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2Qtc2VsZWN0LWl0ZW0taGVhZGVyJz5cbiAgICAgICAgICA8c3Bhbj5UYXJqZXRhPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ0NSRURJVCcpfSAqL31cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDUkVEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+Q3LDqWRpdG88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlcnMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnT1RIRVInKX0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdPVEhFJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+T3Rybzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zaGFyZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5TWV0aG9kLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VwZGF0ZVN0b3JlQ2FzaEFtb3VudH0gZnJvbSAnLi4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2FzaEFtb3VudDogc3RvcmUucGF5LmNhc2hBbW91bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q2FzaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGF5QW1vdW50Q2hhbmdlZChldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhc2hBbW91bnQoZXYudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5FZmVjdGl2bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkVGRUNUSVZPOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FzaEFtb3VudH0gb25DaGFuZ2U9e3RoaXMucGF5QW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VwZGF0ZVN0b3JlQ2FyZEF1dGgsIHVwZGF0ZVN0b3JlQ2FyZERpZ2l0c30gZnJvbSAnLi4vYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2FyZEF1dGg6IHN0b3JlLnBheS5jYXJkQXV0aCwgY2FyZERpZ2l0czogc3RvcmUucGF5LmNhcmREaWdpdHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGF5Q2FyZEF1dGhDaGFuZ2VkKGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZEF1dGgoZXYudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIHBheUNhcmREaWdpdHNDaGFuZ2VkKGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0b3JlQ2FyZERpZ2l0cyhldi50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPlRhcmpldGE8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz40IERJR0lUT1M6PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkRGlnaXRzfSBvbkNoYW5nZT17dGhpcy5wYXlDYXJkRGlnaXRzQ2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkFVVE9SSVpBQ0nDk046PC9kaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy5jYXJkQXV0aH0gb25DaGFuZ2U9e3RoaXMucGF5Q2FyZEF1dGhDaGFuZ2VkLmJpbmQodGhpcyl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7Y2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLCBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlDcmVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdmFpbGFibGUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZGVidClcbiAgICBjb25zdCBjbGllbnRMaW1pdCA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke3BhcnNlRmxvYXQodGhpcy5wcm9wcy5jbGllbnQuY3JlZGl0X2xpbWl0KS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuICAgIGNvbnN0IGNsaWVudEF2YWlsYWJsZSA9IHRoaXMucHJvcHMuY2xpZW50Lmhhc19jcmVkaXRcbiAgICAgID8gYOKCoSAke2F2YWlsYWJsZS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9YFxuICAgICAgOiAnU0lOIENSw4lESVRPJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+XG4gICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+TMONTUlURTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRMaW1pdH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+RElTUE9OSUJMRTo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIHtjbGllbnRBdmFpbGFibGV9PC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5T3RoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz4gPHNwYW4+T3Rybzwvc3Bhbj4gPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5T3RoZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtzYXZlSXRlbSwgbG9hZFNhbGV9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgeyBzYXZlSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU2F2ZUJ0biBmcm9tICcuLi8uLi9zYXZlL3NhdmUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydDogc3RvcmUuY2FydCxcbiAgICBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2QsXG4gICAgcGF5OiBzdG9yZS5wYXksXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XG4gICAgLy8gc2FsZXM6IHN0b3JlLnNhbGVzLnNhbGVzLFxuICAgIC8vIHNhbGVJZDogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZUlkLFxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzYXZlQnRuKCkge1xuICAgIC8vIGNvbnN0IHNhbGVzID0gdGhpcy5wcm9wcy5zYWxlc1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcbiAgICBjb25zdCBzYWxlID0ge1xuICAgICAgY2FydDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jYXJ0KSxcbiAgICAgIGNsaWVudDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpLFxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcbiAgICAgIHBheTogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5wYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJykge1xuICAgICAgc2FsZS5wYXkuZGVidCA9IHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWxcbiAgICAgIHNhbGUucGF5LnBheWVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBrd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3NhbGVzLycsXG4gICAgICBpdGVtOiBzYWxlLFxuICAgICAgbG9nQ29kZTogJ1NBTEVfQ1JFQVRFJyxcbiAgICAgIGxvZ0Rlc2NyaXB0aW9uOiAnQ3JlYWNpw7NuIGRlIG51ZXZhIFZlbnRhJyxcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgaXRlbU9sZDogJycsXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcbiAgICAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgVmVudGEsIGludGVudGUgZGUgbnVldm8uJyxcbiAgICAgIGRpc3BhdGNoVHlwZTogJ0NMRUFSX1NBTEUnLFxuICAgICAgaXNTYWxlOiB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX1NUQVJURUQnLCBwYXlsb2FkOiAnJ30pXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzYXZlSXRlbShrd2FyZ3MpKVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcblxuICAgIE1vdXNldHJhcC5yZXNldCgpXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBjaGFuZ2UgPSAwXG4gICAgbGV0IHBheUJ1dHRvbkNsYXNzID0gJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbClcbiAgICBjb25zdCBjYXNoID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnBheS5jYXNoQW1vdW50KVxuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBheU1ldGhvZCkge1xuXG4gICAgICBjYXNlICdDQVNIJzpcbiAgICAgIHtcbiAgICAgICAgY2hhbmdlID0gY2FzaCAtIHRvdGFsXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBjaGFuZ2UgPj0gMClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnByb3BzLnBheS5jYXJkQXV0aFxuICAgICAgICBjb25zdCBkaWdpdHMgPSB0aGlzLnByb3BzLnBheS5jYXJkRGlnaXRzXG4gICAgICAgIGNoYW5nZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMudG90YWwpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiBhdXRoICYmIGRpZ2l0cylcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0NSRUQnOlxuICAgICAge1xuICAgICAgICBjb25zdCBhdmFpbGFibGUgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkgLSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuZGVidClcbiAgICAgICAgcGF5QnV0dG9uQ2xhc3MgPSAodG90YWwgPiAwICYmIHRvdGFsIDw9IGF2YWlsYWJsZSAmJiB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0KVxuICAgICAgICAgID8gJ3BheS10YWcgdGFnLWJ1dHRvbiBlbmFibGUnXG4gICAgICAgICAgOiAncGF5LXRhZyB0YWctYnV0dG9uJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktc2lkZS1iYXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5QYWdvPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+XG4gICAgICAgICAgVE9UQUwgOjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XG4gICAgICAgICAg4oKhIHt0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5WVUVMVE8gOjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyByaWdodCc+XG4gICAgICAgICAg4oKhIHtjaGFuZ2UuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvZGl2PlxuXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxTYXZlQnRuIHBheUJ1dHRvbkNsYXNzPXtwYXlCdXR0b25DbGFzc30gLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlTaWRlQmFyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydDogc3RvcmUuY2FydCxcbiAgICBwYXlNZXRob2Q6IHN0b3JlLnBheS5wYXlNZXRob2QsXG4gICAgcGF5OiBzdG9yZS5wYXksXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHVzZXI6IHN0b3JlLmNsaWVudHMudXNlclNlbGVjdGVkLFxuICAgIGRlYnQ6IHN0b3JlLmNsaWVudHMuY2xpZW50U2VsZWN0ZWREZWJ0XG4gICAgLy8gc2FsZXM6IHN0b3JlLnNhbGVzLnNhbGVzLFxuICAgIC8vIHNhbGVJZDogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZUlkLFxuICAgIC8vIHNhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmUsXG4gICAgLy8gbW92ZW1lbnRzOiBzdG9yZS5jbGllbnRtb3ZlbWVudHMubW92ZW1lbnRzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlQnRuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzYXZlQnRuKCkge1xuICAgIC8vIGNvbnN0IHNhbGVzID0gdGhpcy5wcm9wcy5zYWxlc1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcbiAgICBjb25zdCBwYXllZCA9ICEodGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kID09ICdDUkVEJylcblxuICAgIGNvbnN0IHNhbGUgPSB7XG4gICAgICBjYXJ0OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNhcnQpLFxuICAgICAgY2xpZW50OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCksXG4gICAgICB1c2VyOiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnVzZXIpLFxuICAgICAgcGF5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnBheSksXG4gICAgICBwYXlfdHlwZTogdGhpcy5wcm9wcy5wYXkucGF5TWV0aG9kLFxuICAgICAgcGF5ZWQ6IHBheWVkLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLnByb3BzLmNsaWVudC5pZCxcbiAgICAgIG1vdmVtZW50X3R5cGU6ICdDUkVEJyxcbiAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbFxuICAgIH1cblxuICAgIGNvbnN0IGt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvc2FsZXMvJyxcbiAgICAgIGl0ZW06IHNhbGUsXG4gICAgICBsb2dDb2RlOiAnU0FMRV9DUkVBVEUnLFxuICAgICAgbG9nRGVzY3JpcHRpb246ICdDcmVhY2nDs24gZGUgbnVldmEgVmVudGEnLFxuICAgICAgbG9nTW9kZWw6ICdTQUxFJyxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBpdGVtT2xkOiAnJyxcbiAgICAgIHN1Y2Vzc01lc3NhZ2U6ICdWZW50YSBjcmVhZGEgQ29ycmVjdGFtZW50ZS4nLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnSHVibyB1biBlcnJvciBhbCBjcmVhciBsYSBWZW50YSwgaW50ZW50ZSBkZSBudWV2by4nLFxuICAgICAgY3JlZGl0TW92ZW1lbnQ6IGNyZWRpdE1vdmVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG5cbiAgICBjb25zdCB1cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzLCByZXNvbHZlLCByZWplY3QpKVxuICAgIH0pXG5cbiAgICB1cGRhdGVQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuICAgICAgTW91c2V0cmFwLnJlc2V0KClcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17dGhpcy5zYXZlQnRuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYXlCdXR0b25DbGFzc30+XG4gICAgICBSZWdpc3RyYXJcbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY3JlZGl0LWNhcmQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvc2F2ZS5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBJTVBPUlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBzYXZlTG9nIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgRlVOQ1RJT04gKENSRUFURSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBkZWxldGUgaXRlbVsnaWQnXVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcblxuICAgICAgICAvLyBJRiBUSEUgU0FMRSBJUyBBIENSRURJVCBPTkUgU0FWRSBDUkVESVQgTU9WRU1FTlRcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucGF5X3R5cGUgPT0gJ0NSRUQnKSB7XG4gICAgICAgICAgY29uc3QgY3JlZGl0TW92ZW1lbnQgPSBrd2FyZ3MuY3JlZGl0TW92ZW1lbnRcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5iaWxsX2lkID0gcmVzcG9uc2UuZGF0YS5pZFxuICAgICAgICAgIGNyZWRpdE1vdmVtZW50LmRlc2NyaXB0aW9uID0gYFZlbnRhIGRlIGNyw6lkaXRvICMke3Jlc3BvbnNlLmRhdGEuYmlsbF9udW1iZXJ9YFxuICAgICAgICAgIHNhdmVDcmVkaXRNb3ZlbWVudChjcmVkaXRNb3ZlbWVudCwgcmVzcG9uc2UuZGF0YSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KVxuXG4gICAgICAgIC8vIElGIElTIENBU0ggVEhFTiBKVVNUIFJFU09MVkVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHJlamVjdCgpXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICB9KVxuXG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZUNyZWRpdE1vdmVtZW50KG1vdmVtZW50LCBzYWxlLCBrd2FyZ3MsIGRpc3BhdGNoLCByZXNvbHZlLCByZWplY3QpIHtcbiAgYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvY3JlZGl0bW92ZW1lbnRzLycsXG4gICAgZGF0YTogbW92ZW1lbnRcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfU0FMRScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiBzYWxlfSlcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywga3dhcmdzLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgJHtrd2FyZ3MuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICByZWplY3QoKVxuICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvc2F2ZS9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7bG9hZEdsb2JhbENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IEZ1bGxJbnZvaWNlIGZyb20gJy4uL2Z1bGxJbnZvaWNlL2Z1bGxJbnZvaWNlLmpzeCdcbmltcG9ydCBDb21wYWN0SW52b2ljZSBmcm9tICcuLi9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUuaW52b2ljZS5pc1Zpc2libGUsIGlzRnVsbDogc3RvcmUuaW52b2ljZS5pc0Z1bGx9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9hZEdsb2JhbENvbmZpZygnY29tcGFueScsIGZhbHNlLCAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCcsICdGRVRDSF9DT05GSUdfUkVKRUNURUQnKSlcbiAgfVxuXG4gIGhpZGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgLy8gcHJpbnREaXYoJ2Z1bGwtaW52b2ljZS1wcmludCcpXG4gIH1cblxuICB0b2dnbGVQYW5lbCgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgdG9nZ2xlSW52b2ljZSgpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHByaW50UGFuZWwoKSB7XG4gICAgd2luZG93LnByaW50RGl2KCdpbnZvaWNlLXByaW50JylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICh0aGlzLnByb3BzLnBhbmVsVmlzaWJsZSlcbiAgICAgID8gJ2ludm9pY2UtcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2ludm9pY2UtcGFuZWwnXG4gICAgY29uc3QgaXNGdWxsQ2xhc3MgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/ICcnXG4gICAgICA6ICcgY29tcGFjdC1pbnZvaWNlLW9uJ1xuXG4gICAgY29uc3QgY29tcG9uZW50VG9Nb3VudCA9ICh0aGlzLnByb3BzLmlzRnVsbClcbiAgICAgID8gPEZ1bGxJbnZvaWNlIC8+XG4gICAgICA6IDxDb21wYWN0SW52b2ljZSAvPlxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2ludm9pY2UtcGFuZWwtbWFpbicgKyBpc0Z1bGxDbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlLXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEZhY3R1cmEgZGUgVmVudGFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5oaWRlUGFuZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtZmlsZS10ZXh0LW8nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy5wcmludFBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtcHJpbnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgey8qIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW52b2ljZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWNvZmZlZScgYXJpYS1oaWRkZW49J3RydWUnIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdpbnZvaWNlLXByaW50JyBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLWNvbnRhaW5lcicgKyBpc0Z1bGxDbGFzc30+XG5cbiAgICAgICAgICB7Y29tcG9uZW50VG9Nb3VudH1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2ludm9pY2VQYW5lbC9pbnZvaWNlUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZSc+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxEYXRhIC8+XG4gICAgICA8VGFibGUgLz5cbiAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDxOb3RlcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIGNvbXBhbnk6IHN0b3JlLmNvbmZpZy5jb21wYW55XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBDcmVkaXQgb3IgY2FzaFxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSB0aGlzLnByb3BzLnNhbGUucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJyA/ICdGYWN0dXJhIGRlIGNyw6lkaXRvJyA6ICdGYWN0dXJhIGRlIGNvbnRhZG8nXG4gICAgLy8gTE9HT1xuICAgIGNvbnN0IGxvZ28gPSB0aGlzLnByb3BzLmNvbXBhbnkubG9nbyB8fCAnJ1xuICAgIGNvbnN0IGxvZ29XaWR0aCA9IHRoaXMucHJvcHMuY29tcGFueS5sb2dvV2lkdGggfHwgJzEzMHB4J1xuICAgIGNvbnN0IGxvZ29VcmwgPSBgL21lZGlhL2xvZ29zLyR7bG9nb31gXG5cbiAgICAvLyBCSUxMIERBVEFcbiAgICBjb25zdCBoZWFkZXJOYW1lID0gdGhpcy5wcm9wcy5jb21wYW55LmNvbWVyY2lhbF9uYW1lIHx8ICcnXG4gICAgY29uc3QgaGVhZGVyTmFtZTIgPSB0aGlzLnByb3BzLmNvbXBhbnkubGVnYWxfbmFtZSB8fCAnJ1xuXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMuY29tcGFueS50ZWxlcGhvbmVzIHx8ICcnXG4gICAgY29uc3QgdGVsc1RleHQgPSB0ZWxzLnNwbGl0KCcvJykubGVuZ3RoID4gMSA/IGBUZWxzOiAke3RlbHN9YCA6IGBUZWw6ICR7dGVsc31gXG5cbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWRUeXBlIHx8ICdQRVJTT04nXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWQgfHwgJydcbiAgICBjb25zdCBpZFRleHQgPSBpZFR5cGUgPT0gJ0pVUklESScgPyBgQ8OpZCBKdXJpZCBObyAke2lkfWAgOiBgQ8OpZCBObyAke2lkfWBcblxuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWhlYWRlcic+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItbG9nbyc+XG4gICAgICAgICAgPGltZyBzdHlsZT17eyd3aWR0aCc6IGAke2xvZ29XaWR0aH1gfX0gc3JjPXtsb2dvVXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXItaW5mbyc+XG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgICA8aDM+e2hlYWRlck5hbWUyfTwvaDM+XG4gICAgICAgICAgPGgzPntpZFRleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MyIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuY291bnRyeSB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGVsc1RleHR9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5lbWFpbCB8fCAnJ308L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2Utc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gLz5cblxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cbiAgICAgICAgPHNwYW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7c2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZX1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0nY2xpZW50QWRyZXNzJz5ESVJFQ0NJw5NOOiB7c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiA8dHIgLz5cbiAgICBjb25zdCBpZCA9IHNhbGUuYmlsbF9udW1iZXIgPyBzYWxlLmJpbGxfbnVtYmVyIDogJzAwMDAxJ1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtZGF0YSc+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2NsaWVudC10YWJsZSc+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q0xJRU5URTo8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAge2NsaWVudEFkcmVzc31cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2RhdGVudW0tdGFibGUnPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Ti4gZGUgZmFjdHVyYTo8L3RoPlxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZlY2hhOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL2RhdGEuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7aW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcywgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMuaW5DYXJ0XG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnQgPSAodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICAgID8gPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPnt0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50fTwvdGQ+XG4gICAgICA6IDx0ZCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RkPlxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLmxlbmd0aFxuICAgICAgPyBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRheGVzVGV4dCA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzKVxuICAgICAgICAgID8gYEdgXG4gICAgICAgICAgOiBgRWBcblxuICAgICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge2l0ZW0ucXR5fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAg4oKhIHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2VUb1VzZSkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge2l0ZW0uZGlzY291bnR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnR9XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgICAge3RheGVzVGV4dH1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7aXRlbS5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB9KVxuICAgICAgOiA8dHI+XG4gICAgICAgIDx0ZD4tLTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgY29uc3QgZ2xvYmFsRGlzY291bnRSb3cgPSB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50ID8gPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlczIgJTwvdGg+XG4gICAgICA6IDx0aCBzdHlsZT17eydkaXNwbGF5JzogJ25vbmUnfX0gPi08L3RoPlxuXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS10YWJsZSB0YWJsZSc+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+Q8OzZGlnbzwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24tcm93Jz5EZXNjcmlwY2nDs248L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5DYW50aWRhZDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlAuVTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPkRlcyU8L3RoPlxuICAgICAgICAgIHtnbG9iYWxEaXNjb3VudFJvd31cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QcmVjaW88L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT57aXRlbXN9PC90Ym9keT5cbiAgICA8L3RhYmxlPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdG90YWxzJz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG5cbiAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuanN4J1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS5qc3gnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbHMuanN4J1xuaW1wb3J0IE5vdGVzIGZyb20gJy4vY29tcG9uZW50cy9ub3Rlcy5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhY3RJbnZvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZSc+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxEYXRhIC8+XG4gICAgICA8VGFibGUgLz5cbiAgICAgIDxUb3RhbHMgLz5cbiAgICAgIDxOb3RlcyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wYWN0SW52b2ljZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIGNvbXBhbnk6IHN0b3JlLmNvbmZpZy5jb21wYW55XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGhlYWRlcnRleHQgPSB0aGlzLnByb3BzLnNhbGUucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJyA/ICdGYWN0dXJhIGRlIGNyw6lkaXRvJyA6ICdGYWN0dXJhIGRlIGNvbnRhZG8nXG5cbiAgICAvLyBCSUxMIERBVEFcbiAgICBjb25zdCBoZWFkZXJOYW1lID0gdGhpcy5wcm9wcy5jb21wYW55LmNvbWVyY2lhbE5hbWUgfHwgJydcblxuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsTmFtZSB8fCAnJ1xuXG4gICAgY29uc3QgdGVscyA9IHRoaXMucHJvcHMuY29tcGFueS50ZWxlcGhvbmVzIHx8ICcnXG4gICAgY29uc3QgdGVsc1RleHQgPSB0ZWxzLnNwbGl0KCcvJykubGVuZ3RoID4gMSA/IGBUZWxzOiAke3RlbHN9YCA6IGBUZWw6ICR7dGVsc31gXG5cbiAgICBjb25zdCBpZFR5cGUgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWRUeXBlIHx8ICcnXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmNvbXBhbnkuaWQgfHwgJ1BFUlNPTidcbiAgICBjb25zdCBpZFRleHQgPSBpZFR5cGUgPT0gJ0pVUklESScgPyBgQ8OpZCBKdXJpZCBObyAke2lkfWAgOiBgQ8OpZCBObyAke2lkfWBcblxuICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWhlYWRlcic+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1oZWFkZXItaW5mbyc+XG4gICAgICAgICAgPGgyPntoZWFkZXJOYW1lfTwvaDI+XG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxuICAgICAgICAgIDxoMz57aWRUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmNvdW50cnkgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1zZXBhcmF0b3InPlxuICAgICAgICA8c3BhbiAvPlxuXG4gICAgICAgIDxoMT57aGVhZGVydGV4dH08L2gxPlxuXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZVRheGVzKVxuICAgICAgICA/IGBHYFxuICAgICAgICA6IGBFYFxuXG4gICAgICByZXR1cm4gPHRyIGtleT17aXRlbS51dWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLnByb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICB7dGF4ZXNUZXh0fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAg4oKhIHtpdGVtLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIH0pXG5cbiAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLXRhYmxlIHRhYmxlJz5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5DYW50PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1yb3cnPkFydGljdWxvPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+SVY8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5Ub3RhbDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0nJz5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC90Ym9keT5cblxuICAgIDwvdGFibGU+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3NhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmV9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNhbGUgPSB0aGlzLnByb3BzLnNhbGVcbiAgICBjb25zdCBkYXRlID0gc2FsZS5jcmVhdGVkXG4gICAgICA/IGAkeygnMCcgKyBzYWxlLmNyZWF0ZWQuZ2V0RGF0ZSgpKS5zbGljZSgtMil9L1xuICAgICAgJHsoJzAnICsgKHNhbGUuY3JlYXRlZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0vXG4gICAgICAke3NhbGUuY3JlYXRlZC5nZXRGdWxsWWVhcigpfWBcbiAgICAgIDogJzAxLzAxLzE5NzAnXG4gICAgY29uc3QgY2xpZW50ID0gc2FsZS5jbGllbnQgPyBgJHtzYWxlLmNsaWVudC5jb2RlfSAtICR7c2FsZS5jbGllbnQubmFtZX0gJHtzYWxlLmNsaWVudC5sYXN0X25hbWV9YCA6ICcwMCAtIENsaWVudGUgZGUgQ29udGFkbydcbiAgICBjb25zdCBpZCA9IHNhbGUuYmlsbF9udW1iZXIgPyBzYWxlLmJpbGxfbnVtYmVyIDogJzAwMDEnXG4gICAgY29uc3QgY2xpZW50QWRyZXNzID0gc2FsZS5jbGllbnQuYWRyZXNzXG4gICAgICA/IDx0cj5cbiAgICAgICAgPHRoPkRpcmVjOjwvdGg+XG4gICAgICAgIDx0ZD57c2FsZS5jbGllbnQuYWRyZXNzfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgOiA8dHIgLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLWRhdGEnPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlbnVtLXRhYmxlJz5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWNoYTo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmFjdHVyYTo8L3RoPlxuICAgICAgICAgICAgPHRkPnsoJzAwMDAwJyArIGlkKS5zbGljZSgtNSl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNsaWVudGU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57Y2xpZW50fTwvdGQ+XG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XG5cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbCxcbiAgICB0YXhlczogc3RvcmUuY2FydC5jYXJ0VGF4ZXMsXG4gICAgZGlzY291bnRUb3RhbDogc3RvcmUuY2FydC5kaXNjb3VudFRvdGFsLFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3RvcmUuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LFxuICAgIGl0ZW1zSW5DYXJ0OiBzdG9yZS5jYXJ0LmNhcnRJdGVtcyxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10b3RhbHMnPlxuXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U3ViLXRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGVzY3VlbnRvPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JVjwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRheGVzLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndG90YWwtcm93Jz5cbiAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1ub3Rlcyc+XG4gICAgICA8aDE+Tm90YXM6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMtY29udGVudCc+XG4gICAgICAgIDxkaXY+RmFjdHVyYSBhdXRvcml6YWRhIG1lZGlhbnRlIGxhIHJlc29sdWNpb24gTjExOTcgZGVsIDEyLzA4LzE5OTcgZGVsIERHRFQuPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmltcG9ydCB7dG9nZ2xlTGF5b3V0fSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBzdG9yZS5sYXlvdXQudG9wQmFyVG9nZ2xlVmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBtZW51Q2xpY2soZXYpIHtcblxuICAgIHRvZ2dsZUxheW91dCgpXG5cbiAgfVxuXG4gIGxvZ091dENsaWNrKCkge1xuXG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0NlcnJhciBTZXNpw7NuJywgYMK/RGVzZWEgQ2VycmFyIHN1IHNlc2nDs24gZW4gZWwgc2lzdGVtYT9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9nb3V0JylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0NlcnJhcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICBob21lQ2xpY2soKSB7XG4gICAgLy8gQUxFUlRJRlkgQ09ORklSTVxuICAgIGFsZXJ0aWZ5LmNvbmZpcm0oJ0lyIGFsIG1lbsO6IFByaW5jaXBhbCcsIGDCv0Rlc2VhIGlyIGFsIG1lbsO6IHByaW5jaXBhbD9gLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJylcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuc2V0KCdsYWJlbHMnLCB7XG4gICAgICBvazogJ0lyJyxcbiAgICAgIGNhbmNlbDogJ1Blcm1hbmVjZXInXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b25DbGFzcyA9IHRoaXMucHJvcHMudG9wQmFyVG9nZ2xlVmlzaWJsZVxuICAgICAgPyAndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWNvbGxhcHNlIHZpc2libGUnIDogJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyJz5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWJhcnMnIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BCYXItcmlnaHQnPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaG9tZUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWl0ZW0gdG9wQmFyLWl0ZW0tY29uZmlnJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWhvbWUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubG9nT3V0Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tbG9nb3V0Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3RvcEJhci90b3BCYXIuanN4IiwiXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5b3V0KCkge1xuXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpXG4gIGNvbnN0IHNpZGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVNZW51JylcblxuICBpZiAobWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3B1bGxlZCcpKSB7XG5cbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgc2lkZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgncHVsbGVkJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxuICBzaWRlTWVudS5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDb25maWdCYXIoKSB7XG5cbiAgY29uc3QgY29uZmlnQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0JhcicpXG5cbiAgaWYgKGNvbmZpZ0Jhci5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC12aXNpYmxlJykpIHtcblxuICAgIGNvbmZpZ0Jhci5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmlzaWJsZScpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbmZpZ0Jhci5jbGFzc0xpc3QuYWRkKCdub3QtdmlzaWJsZScpXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3RvcEJhci9hY3Rpb25zLmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3gnXG5pbXBvcnQgVXNlciBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCdcbi8vIGltcG9ydCBDb21wb3NlZEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW1zL2NvbXBvc2VkLmpzeCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc3QgY2hpbGRQcm9kdWN0cyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogJ1Byb2R1Y3RvcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtZ2lmdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHMnXG4gICAgLy8gICB9LCB7XG4gICAgLy8gICAgIHRleHQ6ICdGYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtbGlzdCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdGRlcGFydG1lbnRzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnU3ViLUZhbWlsaWFzJyxcbiAgICAvLyAgICAgY2xhc3M6ICdmYS1vdXRkZW50JyxcbiAgICAvLyAgICAgaHJlZjogJy9hZG1pbi9wcm9kdWN0c3ViZGVwYXJ0bWVudHMnXG4gICAgLy8gICB9XG4gICAgLy8gXVxuXG4gICAgLy8gY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnVzZXJDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0Q29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8ICdBUFAnXG4gICAgY29uc3Qgc2lkZU1lbnVDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ3NpZGVNZW51JyA6ICdzaWRlTWVudSBoaWRkZW5CeUFwcCdcbiAgICByZXR1cm4gPGRpdiBpZD0nc2lkZU1lbnUnIGNsYXNzTmFtZT17c2lkZU1lbnVDbGFzc30+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtd3JhcHBlciBjb2wteHMtMTInPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzaWRlTWVudS1pdGVtcyc+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcyc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgSW5pY2lvPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9zYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1hcmVhLWNoYXJ0JyAvPlxuICAgICAgICAgICAgICBOdWV2YSBWZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJvZm9ybWEnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXVzZXInIC8+XG4gICAgICAgICAgICAgIE51ZXZhIENvdGl6YWNpw7NuPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9zYWxlcy9wcmVzYWxlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBQcmV2ZW50YTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4IiwiLyogTW9kdWxlIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtc2VhcmNoIGNvbC14cy0xMic+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQnVzY2FyLi4uJyAvPlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9zaWRlTWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RvcmUudXNlci51c2VyLFxuICAgIHByb2ZpbGU6IHN0b3JlLnVzZXIucHJvZmlsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgYXZhdGFyID0gdGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhciA/IGAvbWVkaWEvJHt0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyfWAgOiAnL21lZGlhL2RlZmF1bHQvcHJvZmlsZS5qcGcnXG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy51c2VyLmZpcnN0X25hbWVcbiAgICAgID8gdGhpcy5wcm9wcy51c2VyLmZpcnN0X25hbWVcbiAgICAgIDogKHRoaXMucHJvcHMudXNlci51c2VybmFtZVxuICAgICAgICA/IHRoaXMucHJvcHMudXNlci51c2VybmFtZSA6ICcnKVxuXG4gICAgY29uc3QgbGFzdE5hbWUgPSB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lID8gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA6ICcnXG5cbiAgICBsZXQgZnVsbE5hbWUgPSBgJHtuYW1lfSAke2xhc3ROYW1lfWBcbiAgICBpZiAoZnVsbE5hbWUubGVuZ3RoID4gMjIpIGZ1bGxOYW1lID0gZnVsbE5hbWUuc3Vic3RyaW5nKDAsIDIyKVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyIGNvbC14cy0xMiAnPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1hdmF0YXInPlxuICAgICAgICA8aW1nIHNyYz17YXZhdGFyfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLW5hbWUnPlxuICAgICAgICA8c3Bhbj57ZnVsbE5hbWV9PC9zcGFuPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmssIGxvZ2dlcilcblxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgZmV0Y2hpbmcgZnJvbSAnLi4vLi4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyL3JlZHVjZXIuanMnXG5pbXBvcnQgY2FydCBmcm9tICcuL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNsaWVudHMgZnJvbSAnLi9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcydcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL2dlbmVyYWwvcHJvZHVjdC9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNhbGUgZnJvbSAnLi9zYWxlL3JlZHVjZXIuanMnXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaENsaWVudHMgZnJvbSAnLi9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgc2VhcmNoUHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHBheSBmcm9tICcuL3NhbGUvcGF5L3JlZHVjZXIuanMnXG5pbXBvcnQgaW52b2ljZSBmcm9tICcuL2dlbmVyYWwvaW52b2ljZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNhbGVzIGZyb20gJy4vZ2VuZXJhbC9zYWxlcy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9yZWR1Y2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmZXRjaGluZyxcbiAgbGF5b3V0LFxuICB1c2VyLFxuICBjYXJ0LFxuICBjbGllbnRzLFxuICBwcm9kdWN0cyxcbiAgc2FsZSxcbiAgbWVzc2FnZXMsXG4gIHNlYXJjaENsaWVudHMsXG4gIHNlYXJjaFByb2R1Y3RzLFxuICBwYXksXG4gIGludm9pY2UsXG4gIHNhbGVzLFxuICBjb25maWdcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBmYWxzZSxcbiAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTQUxFX1BBTkVMX01PVU5URUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiB0cnVlLFxuICAgICAgICBzaWRlTWVudVZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdIT01FX1BBTkVMX01PVU5URUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b3BCYXJUb2dnbGVWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdXNlcjoge30sXG4gIHByb2ZpbGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBwcm9maWxlOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3VzZXIvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGVkaXRhYmxlOiB0cnVlLFxuICBjcmVhdGVkOiAnJyxcbiAgdXBkYXRlZDogJycsXG4gIGlzTnVsbDogZmFsc2UsXG4gIGNhcnRIYXNJdGVtczogZmFsc2UsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICBjYXJ0SXRlbXM6IFtdLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IDAsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gIGNhcnRTdWJ0b3RhbDogMCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICBjYXJ0VGF4ZXM6IDAsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gIGNhcnRUb3RhbDogMCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgZ2xvYmFsRGlzY291bnQ6IDAsIC8vIGRpc2NvdW50ICVcbiAgZGlzY291bnRUb3RhbDogMCwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgY2FydEl0ZW1BY3RpdmU6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogJycsXG4gICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICBpc051bGw6IGZhbHNlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0FERF9UT19DQVJUJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IHRydWUsXG4gICAgICAgIGNhcnRJdGVtczogW1xuICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIC4uLnN0YXRlLmNhcnRJdGVtcyxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdSRU1PVkVfRlJPTV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuXG4gICAgICBuZXdDYXJ0LnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSlcblxuICAgICAgY29uc3QgaXRlbXNMZWZ0SW5DYXJ0ID0gKG5ld0NhcnQubGVuZ3RoID4gMClcbiAgICAgIC8vID8gdHJ1ZVxuICAgICAgLy8gOiBmYWxzZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBpdGVtc0xlZnRJbkNhcnQsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlQnOlxuICAgIHtcblxuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XSA9IGFjdGlvbi5wYXlsb2FkLml0ZW1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF1bJ2xvdGUnXSA9IGFjdGlvbi5wYXlsb2FkLmxvdGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUlRfVE9UQUxTJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLnN1YnRvdGFsLFxuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLnRheGVzLFxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5kaXNjb3VudFRvdGFsLFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5zdWJUb3RhbE5vRGlzY291bnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9HTE9CQUxfRElTQ09VTlQnOlxuICAgIHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVQTEFDRV9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9MSU5FX0RJU0NPVU5UJzpcbiAgICB7XG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdLmRpc2NvdW50ID0gYWN0aW9uLnBheWxvYWQudmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogbmV3Q2FydFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3JlYXRlZDogYWN0aW9uLnBheWxvYWQuY2FydC5jcmVhdGVkLFxuICAgICAgICBpc051bGw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuaXNOdWxsLFxuICAgICAgICBjYXJ0SGFzSXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEhhc0l0ZW1zLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgICAgICAgY2FydEl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRJdGVtcywgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICAgICAgICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsIC8vIHN1YnRvdGFsIHdpdGhvdXQgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGNhcnRTdWJ0b3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWwsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUYXhlcywgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRUb3RhbCwgLy8gY2FydCB0b3RhbCBhZnRlciBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgZ2xvYmFsRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZ2xvYmFsRGlzY291bnQsIC8vIGRpc2NvdW50ICVcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5kaXNjb3VudFRvdGFsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfQUNUSVZFX0lOX0NBUlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L3JlZHVjZXIuanMiLCJjb25zdCBjbGllbnRTZWxlY3RlZE1vZGVsID0ge1xuICBjb2RlOiAnMDAwMCcsXG4gIGNsaWVudFR5cGU6ICdHRU5FUkFMJyxcbiAgY3JlYXRlZDogJycsXG4gIGNyZWRpdF9kYXlzOiAwLFxuICBjcmVkaXRfbGltaXQ6IDAsXG4gIGRvY1R5cGU6ICdDTElFTlQnLFxuICBoYXNfY3JlZGl0OiBmYWxzZSxcbiAgaWQ6ICcwMDAwMDAwMDAnLFxuICBsYXN0X25hbWU6ICdDb250YWRvJyxcbiAgbmFtZTogJ0NsaWVudGUnLFxuICB1cGRhdGVkOiAnJyxcbiAgc2FsZUxvYWRlZDogZmFsc2UsXG4gIF9pZDogMFxufVxuXG5jb25zdCB1c2VyU2VsZWN0ZWRNb2RlbCA9IHtcbiAgdXNlcjogJzAwMDAnLFxuICBuYW1lOiAnJyxcbiAgbGFzdF9uYW1lOiAnJyxcbiAgaWQ6ICcwMDAwJyxcbiAgX2lkOiAwXG59XG5cbmNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXG4gIGNsaWVudHNGZWN0ZWQ6IGZhbHNlLFxuICBjbGllbnRzRmV0Y2hFcnJvcjogJycsXG4gIGNsaWVudHM6IFtdLFxuICB1c2VyczogW10sXG4gIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxuICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsLFxuICBjbGllbnRTZWxlY3RlZERlYnQ6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0NMRUFSX0FMTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRTZWxlY3RlZE1vZGVsLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGNsaWVudHNGZXRjaEVycm9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfQ0xJRU5UU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmVjdGVkOiB0cnVlLFxuICAgICAgICBjbGllbnRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX1NFTEVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgLy8gKioqKioqKiogVVNFUlMgKioqKioqKipcbiAgICBjYXNlICdGRVRDSF9VU0VSU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1VTRVJTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVNFUl9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVNFUl9DTEVBUic6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogdXNlclNlbGVjdGVkTW9kZWxcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG5cbiAgICBjYXNlICdTRVRfQ0xJRU5UX0RFQlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZERlYnQ6IHBhcnNlRmxvYXQoYWN0aW9uLnBheWxvYWQuZGVidClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50cyA9IHN0YXRlLmNsaWVudHNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIGNsaWVudHM6IGNsaWVudHNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC51c2VyXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BSRVNBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9UUlVFJzpcbiAgICB7XG4gICAgICBjb25zdCBjbGllbnQgPSBzdGF0ZS5jbGllbnRTZWxlY3RlZFxuICAgICAgY2xpZW50LnNhbGVMb2FkZWQgPSB0cnVlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9GQUxTRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gZmFsc2VcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50XG4gICAgICB9XG4gICAgfVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHByb2R1Y3RzOiB7fSxcbiAgaW5wdXRWYWw6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiB7fVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlucHV0VmFsOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHNcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGZ1bGxXaWR0aDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1RPR0dMRV9GVUxMX1dJRFRIJzpcbiAgICB7XG4gICAgICBjb25zdCB3aWR0aCA9ICFzdGF0ZS5mdWxsV2lkdGhcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmdWxsV2lkdGg6IHdpZHRoXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcmVkdWNlci5qcyIsImltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBtZXNzYWdlczogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1BST0RVQ1RfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBQUk9EVUNUTyEnLCAnRWwgY8OzZGlnbyBpbmdyZXNhZG8gbm8gZXhpc3RlIGVuIGVsIHNpc3RlbWEsIGluZ3Jlc2UgdW4gY8OzZGlnbyB2w6FsaWRvJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTk9UX0ZPVU5EX1NBTEUnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIExBIFZFTlRBIScsIGBMYSB2ZW50YSAjJHthY3Rpb24ucGF5bG9hZH0gbm8gZXhpc3RlLCBvIGhheSB1biBwcm9ibGVtYSBwYXJhIGNhcmdhcmxhLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2by5gKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IhJywgJ0h1Ym8gdW4gZXJyb3IgYWwgZW5jb250cmFyIGVsIHByb2R1Y3RvIGVuIGxhIGxpc3RhIGRlIHByb2R1Y3RvcyBhZ3JlZ2Fkb3MscG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby4nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIEFMIENBUkdBUiBMT1MgUFJPRFVDVE9TIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgcHJvZHVjdG9zLCBwb3IgZmF2b3IgaW50ZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9OT1RfRk9VTkQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUjogTk8gRVhJU1RFIENMSUVOVEUhJywgJ0VsIGNsaWVudGUgY29uIGVsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIENMSUVOVEVTIScsIGBIdWJvIHVuIGVycm9yIGFsIGNhcmdhciBsb3MgY2xpZW50ZXMsIHBvciBmYXZvciBpbnRlbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAke2FjdGlvbi5wYXlsb2FkfWApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWVzc2FnZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBjbGllbnRzTWF0Y2hlZDogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdDTElFTlRfSElERV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX1NFQVJDSF9GQUlMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHByb2R1Y3RzTWF0Y2hlZDogW10sXG4gIHNlYXJjaFZhbHVlOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTEVBUl9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VBUkNIX1BST0RVQ1RfVE9HR0xFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gIXN0YXRlLnZpc2libGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1BST0RVQ1RfU0hPV19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX0hJREVfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9TRUFSQ0hfRkFJTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTWF0Y2hlZDogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBpc1Zpc2libGU6IGZhbHNlLFxuICBwYXlNZXRob2Q6ICdDQVNIJyxcbiAgY2FzaEFtb3VudDogMCxcbiAgY2FyZERpZ2l0czogJycsXG4gIGNhcmRBdXRoOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19QQVlfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUEFZX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0hBTkdFX1BBWV9NRVRIT0QnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdVUERBVEVfQ0FTSF9BTU9VTlQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXNoQW1vdW50OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9DQVJEX0FVVEgnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ0FSRF9ESUdJVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheU1ldGhvZDogYWN0aW9uLnBheWxvYWQucGF5LnBheU1ldGhvZCxcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWQucGF5LmNhc2hBbW91bnQsXG4gICAgICAgIGNhcmREaWdpdHM6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkRGlnaXRzLFxuICAgICAgICBjYXJkQXV0aDogYWN0aW9uLnBheWxvYWQucGF5LmNhcmRBdXRoXG4gICAgICB9XG4gICAgfVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgaXNGdWxsOiB0cnVlLFxuICBkZWZhdWx0RGVzaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTSE9XX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICBjb25zdCBmdWxsT3JOb3QgPSBzdGF0ZS5pc0Z1bGxcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0Z1bGw6ICFmdWxsT3JOb3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1RPR0dMRV9JTlZPSUNFX0RFU0lORyc6XG4gICAge1xuICAgICAgY29uc3QgZGVzaW5nT3JOb3QgPSBzdGF0ZS5kZWZhdWx0RGVzaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVmYXVsdERlc2luZzogIWRlc2luZ09yTm90XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsImNvbnN0IHNhbGVBY3RpdmVNb2RlbCA9IHtcbiAgaWQ6IDAsXG4gIGJpbGxfbnVtYmVyOiAnJyxcbiAgY2FydDoge30sXG4gIGNsaWVudDogJycsXG4gIHVzZXI6ICcnLFxuICBjbGllbnRfaWQ6ICcnLFxuICBwYXk6IHt9LFxuICBwYXllZDogZmFsc2UsXG4gIHBheV90eXBlOiAnQ0FTSCdcblxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBzYWxlczogW10sXG4gIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcbiAgY29tcGxldGVkOiBmYWxzZSxcbiAgc2FsZUFjdGl2ZUlkOiAwLFxuICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZU1vZGVsLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzYWxlQWN0aXZlSWQ6IDAsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0hPV19TQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NIT1dfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1NBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0hJREVfUFJFU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1ByZXNhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfU0FMRVNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlczogW11cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNhcnQpXG4gICAgICBjb25zdCBjbGllbnQgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLmNsaWVudClcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnVzZXIpXG4gICAgICBjb25zdCBwYXkgPSBKU09OLnBhcnNlKGFjdGlvbi5wYXlsb2FkLnBheSlcblxuICAgICAgY29uc3Qgc2FsZSA9IHtcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICBiaWxsX251bWJlcjogYWN0aW9uLnBheWxvYWQuYmlsbF9udW1iZXIsXG4gICAgICAgIGNhcnQ6IGNhcnQsXG4gICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBwYXk6IHBheSxcbiAgICAgICAgcGF5ZWQ6IGFjdGlvbi5wYXlsb2FkLnBheWVkLFxuICAgICAgICBwYXlfdHlwZTogYWN0aW9uLnBheWxvYWQucGF5X3R5cGUsXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKGFjdGlvbi5wYXlsb2FkLmNyZWF0ZWQpLFxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC51cGRhdGVkKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1NBTEVfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9QUkVTQUxFX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJPRk9STUFfSUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlcyA9IHN0YXRlLnNhbGVzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBzYWxlczogc2FsZXNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0xPQURFRF9TQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHNhbGVBY3RpdmVJZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxuICAgICAgc2FsZS5jbGllbnQgPSBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BST0ZPUk1BJzpcbiAgICB7XG4gICAgICBjb25zdCBzYWxlID0gc2FsZUFjdGl2ZU1vZGVsXG4gICAgICBzYWxlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZC5jYXJ0XG4gICAgICBzYWxlLmNsaWVudCA9IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVcbiAgICAgIH1cbiAgICB9XG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGNvbXBhbnk6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9DT05GSUdfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnNlY3Rpb25dOiBhY3Rpb24ucGF5bG9hZC5kYXRhXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NPTkZJR19SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXToge31cbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX0NPTkZJRyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfVxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9jb25maWcvcmVkdWNlci5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnUFJPRFVDVF9ISURFX1BBTkVMJywgcGF5bG9hZDogLTF9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHZhbCwgcHJvZHVjdHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvZHVjdC5kZXNjcmlwdGlvbi50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBjb250cm9sID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBtYXRjaHMucHVzaChwcm9kdWN0KVxuICAgIH1cblxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFNlbGVjdGVkVGFibGUoY29kZSkge1xuXG4gIHJldHVybiB7dHlwZTogJ1NFVF9QUk9EVUNUX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogY29kZX1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9hY3Rpb25zLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYW5lbCgpIHtcblxuICByZXR1cm4ge3R5cGU6ICdDTElFTlRfSElERV9QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ2xpZW50KHZhbCwgY2xpZW50cykge1xuXG4gIGNvbnN0IHRleHQgPSB2YWwuc3BsaXQoJyUnKVxuICBjb25zdCBtYXRjaHMgPSBbXVxuXG4gIGNvbnNvbGUubG9nKGNsaWVudHMpXG5cbiAgY2xpZW50cy5mb3JFYWNoKGNsaWVudCA9PiB7XG4gICAgbGV0IGNvbnRyb2wgPSB0cnVlXG4gICAgY29uc3QgbmFtZSA9IGNsaWVudC5uYW1lLnRvU3RyaW5nKCkgKyAnICcgKyBjbGllbnQubGFzdF9uYW1lLnRvU3RyaW5nKClcblxuICAgIHRleHQuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgY29udHJvbCA9IGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgbWF0Y2hzLnB1c2goY2xpZW50KVxuICAgIH1cblxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IChtYXRjaHMubGVuZ3RoKVxuICAgID8ge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUycsXG4gICAgICBwYXlsb2FkOiBtYXRjaHNcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnQ0xJRU5UX1NFQVJDSF9GQUlMJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==