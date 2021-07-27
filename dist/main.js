/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n_modules_ui_js__WEBPACK_IMPORTED_MODULE_0__.default.loadAllEventListener();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar noteData = /*#__PURE__*/function () {\n  function noteData() {\n    _classCallCheck(this, noteData);\n\n    _defineProperty(this, \"note\", _store__WEBPACK_IMPORTED_MODULE_0__.default.getDataFromLocalStorage());\n\n    _defineProperty(this, \"itemLength\", 0);\n  }\n\n  _createClass(noteData, [{\n    key: \"generateNodeId\",\n    value: function generateNodeId() {\n      var id = 0;\n\n      if (this.note.length === 0) {\n        id = 0;\n      } else {\n        id = this.note[this.note.length - 1].id + 1;\n      }\n\n      return id;\n    }\n  }, {\n    key: \"pushDataToNoteArray\",\n    value: function pushDataToNoteArray(dateTime, time, timeFromNow, id, title, description) {\n      var data = {\n        id: id,\n        title: title,\n        description: description,\n        dateTime: dateTime,\n        timeFromNow: timeFromNow\n      };\n      this.note.push(data);\n    }\n  }, {\n    key: \"deleteProductData\",\n    value: function deleteProductData(id) {\n      var result = this.note.filter(function (noteItem) {\n        return noteItem.id !== id;\n      });\n      this.note = result;\n    }\n  }, {\n    key: \"findNote\",\n    value: function findNote(id) {\n      var foundNote = this.note.find(function (noteItem) {\n        return noteItem.id === id;\n      });\n\n      if (!foundNote) {\n        alert('Your note is not found');\n        return;\n      }\n\n      return foundNote;\n    }\n  }, {\n    key: \"updateNoteData\",\n    value: function updateNoteData(id) {\n      var _ui$selectors = ui.selectors(),\n          titleElm = _ui$selectors.titleElm,\n          descriptionElm = _ui$selectors.descriptionElm;\n\n      var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');\n      var time = moment().format();\n      var timeFromNow = moment(time).format('m');\n      this.note = this.note.map(function (noteItem) {\n        if (noteItem.id === id) {\n          return _objectSpread(_objectSpread({}, noteItem), {}, {\n            title: titleElm.value,\n            description: descriptionElm.value,\n            dateTime: dateTime,\n            timeFromNow: timeFromNow\n          });\n        } else {\n          return noteItem;\n        }\n      });\n    }\n  }]);\n\n  return noteData;\n}();\n\nvar data = new noteData();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Store = /*#__PURE__*/function () {\n  function Store() {\n    _classCallCheck(this, Store);\n  }\n\n  _createClass(Store, [{\n    key: \"getDataFromLocalStorage\",\n    value: function getDataFromLocalStorage() {\n      var items = '';\n\n      if (localStorage.getItem('notesItem') === null) {\n        items = [];\n      } else {\n        items = JSON.parse(localStorage.getItem('notesItem'));\n      }\n\n      return items;\n    }\n  }, {\n    key: \"saveDataLocalStorage\",\n    value: function saveDataLocalStorage(item) {\n      var items = '';\n\n      if (localStorage.getItem('notesItem') === null) {\n        items = [];\n        items.push(item);\n        localStorage.setItem('notesItem', JSON.stringify(items));\n      } else {\n        items = JSON.parse(localStorage.getItem('notesItem'));\n        items.push(item);\n        localStorage.setItem('notesItem', JSON.stringify(items));\n      }\n    }\n  }, {\n    key: \"deleteItemFromLocalStorage\",\n    value: function deleteItemFromLocalStorage(id) {\n      var items = JSON.parse(localStorage.getItem('notesItem'));\n      var result = items.filter(function (noteItem) {\n        return noteItem.id !== id;\n      });\n      localStorage.setItem('notesItem', JSON.stringify(result));\n\n      if (result.length === 0) {\n        location.reload();\n      }\n    }\n  }]);\n\n  return Store;\n}();\n\nvar storage = new Store();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/store.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // show on ui\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, [{\n    key: \"selectors\",\n    value: // all selectors\n    function selectors() {\n      var header_3ELm = document.querySelector('#header_3');\n      var cNBtnElm = document.querySelector('#cBtn');\n      var titleElm = document.querySelector('#title');\n      var descriptionElm = document.querySelector('#description');\n      var sBtnELm = document.querySelector('#sBtn');\n      var formElm = document.querySelector('form');\n      var dFormElm = document.querySelector('#dForm');\n      var wrMsgElm = document.querySelector('#wrMsg');\n      var insertElm = document.querySelector('#insert');\n      var searchElm = document.querySelector('#search');\n      var msgElm = document.querySelector('#msg');\n      var showMsgElm = document.querySelector('#showMsg');\n      var gbBtnElm = document.querySelector('#gbBtn');\n      var newNoteTitleElm = document.querySelector('#newNoteTitle');\n      var noNoteMsgElm = document.querySelector('#noNoteMsg');\n      return {\n        header_3ELm: header_3ELm,\n        cNBtnElm: cNBtnElm,\n        titleElm: titleElm,\n        descriptionElm: descriptionElm,\n        sBtnELm: sBtnELm,\n        formElm: formElm,\n        dFormElm: dFormElm,\n        wrMsgElm: wrMsgElm,\n        insertElm: insertElm,\n        searchElm: searchElm,\n        msgElm: msgElm,\n        showMsgElm: showMsgElm,\n        gbBtnElm: gbBtnElm,\n        newNoteTitleElm: newNoteTitleElm,\n        noNoteMsgElm: noNoteMsgElm\n      };\n    } // initial state from here\n\n  }, {\n    key: \"loadAllEventListener\",\n    value: function loadAllEventListener() {\n      var _this = this;\n\n      var _this$selectors = this.selectors(),\n          sBtnELm = _this$selectors.sBtnELm,\n          insertElm = _this$selectors.insertElm,\n          cNBtnElm = _this$selectors.cNBtnElm,\n          searchElm = _this$selectors.searchElm;\n\n      sBtnELm.addEventListener('click', function (e) {\n        return _this.addNote(e);\n      });\n      window.addEventListener('DOMContentLoaded', function (e) {\n        return _this.getData(_data__WEBPACK_IMPORTED_MODULE_0__.default.note);\n      });\n      insertElm.addEventListener('click', function (e) {\n        return _this.deleteOrModifyNoteData(e);\n      });\n      cNBtnElm.addEventListener('click', function () {\n        return _this.otherItemRemove();\n      });\n      searchElm.addEventListener('keyup', function (e) {\n        return _this.searchNoteItem(e);\n      });\n    }\n  }, {\n    key: \"invalidInput\",\n    value: function invalidInput() {\n      var _this$selectors2 = this.selectors(),\n          wrMsgElm = _this$selectors2.wrMsgElm,\n          newNoteTitleElm = _this$selectors2.newNoteTitleElm;\n\n      newNoteTitleElm.style.display = 'none';\n      wrMsgElm.style.display = 'block';\n      wrMsgElm.style.color = 'red';\n      setTimeout(function () {\n        wrMsgElm.style.display = 'none';\n        newNoteTitleElm.style.display = 'block';\n      }, 2000);\n    } // show error msg and \n\n  }, {\n    key: \"showMessage\",\n    value: function showMessage() {\n      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n      var _this$selectors3 = this.selectors(),\n          msgElm = _this$selectors3.msgElm,\n          showMsgElm = _this$selectors3.showMsgElm;\n\n      msgElm.style.display = 'block';\n      showMsgElm.textContent = msg;\n      showMsgElm.style.color = 'red';\n    } // create box\n\n  }, {\n    key: \"getData\",\n    value: function getData(notes) {\n      var _this$selectors4 = this.selectors(),\n          insertElm = _this$selectors4.insertElm,\n          noNoteMsgElm = _this$selectors4.noNoteMsgElm;\n\n      var elm = '';\n      notes.forEach(function (element) {\n        elm = \"<div class=\\\"p-2 find\\\" id=note-\".concat(element.id, \">\\n            <span class=\\\"titleCl\\\" id=\\\"nTitle\\\">\").concat(element.title, \"</span>\\n            <p class=\\\"text-center box mb-2\\\" id=\\\"nDes\\\">\\n                \").concat(element.description, \"\\n            </p>\\n            <a class=\\\"btn btn-primary btn-sm\\\" id=\\\"note-edit\\\" title=\\\"Edit\\\">Edit</a>\\n            <a class=\\\"btn btn-danger  btn-sm\\\" id=\\\"note-delete\\\" title=\\\"Delete\\\">Delete</a>\\n                \").concat(element.dateTime, \" \").concat(element.timeFromNow, \"\\n        </div>\");\n        insertElm.insertAdjacentHTML('beforeend', elm);\n        noNoteMsgElm.style.display = 'none';\n      });\n    }\n  }, {\n    key: \"resetValue\",\n    value: function resetValue() {\n      var _this$selectors5 = this.selectors(),\n          titleElm = _this$selectors5.titleElm,\n          descriptionElm = _this$selectors5.descriptionElm;\n\n      titleElm.value = '';\n      descriptionElm.value = '';\n    } // adding note\n\n  }, {\n    key: \"addNote\",\n    value: function addNote(e) {\n      var _this$selectors6 = this.selectors(),\n          titleElm = _this$selectors6.titleElm,\n          descriptionElm = _this$selectors6.descriptionElm,\n          insertElm = _this$selectors6.insertElm;\n\n      e.preventDefault();\n      var title = titleElm.value;\n      var description = descriptionElm.value;\n      var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');\n      var time = moment().format();\n      var timeFromNow = moment(time).format('m');\n      var id = _data__WEBPACK_IMPORTED_MODULE_0__.default.generateNodeId();\n\n      if (title === '' || description === '') {\n        this.invalidInput();\n      } else {\n        _data__WEBPACK_IMPORTED_MODULE_0__.default.pushDataToNoteArray(dateTime, time, timeFromNow, id, title, description);\n        insertElm.innerHTML = '';\n        this.getData(_data__WEBPACK_IMPORTED_MODULE_0__.default.note);\n        _store__WEBPACK_IMPORTED_MODULE_1__.default.saveDataLocalStorage({\n          dateTime: dateTime,\n          time: time,\n          timeFromNow: timeFromNow,\n          id: id,\n          title: title,\n          description: description\n        });\n        this.resetValue();\n      }\n    } // edit noteItem\n\n  }, {\n    key: \"populateEditItem\",\n    value: function populateEditItem(foundNote) {\n      var _this$selectors7 = this.selectors(),\n          titleElm = _this$selectors7.titleElm,\n          descriptionElm = _this$selectors7.descriptionElm,\n          formElm = _this$selectors7.formElm,\n          cNBtnElm = _this$selectors7.cNBtnElm,\n          gbBtnElm = _this$selectors7.gbBtnElm,\n          header_3ELm = _this$selectors7.header_3ELm,\n          dFormElm = _this$selectors7.dFormElm,\n          sBtnELm = _this$selectors7.sBtnELm;\n\n      titleElm.value = foundNote.title;\n      descriptionElm.value = foundNote.description;\n      dFormElm.style.display = 'block';\n      sBtnELm.style.display = 'none';\n      var updateBtn = \"<button type='button' class='btn btn-primary update-note'>update</button>\";\n      formElm.insertAdjacentHTML('beforeend', updateBtn);\n      header_3ELm.style.display = 'none';\n      cNBtnElm.style.display = 'none';\n      gbBtnElm.style.display = 'block';\n\n      gbBtnElm.onclick = function () {\n        location.reload();\n      };\n    } // update noteItem\n\n  }, {\n    key: \"updateNoteItem\",\n    value: function updateNoteItem(id) {\n      var _this2 = this;\n\n      var _this$selectors8 = this.selectors(),\n          titleElm = _this$selectors8.titleElm,\n          descriptionElm = _this$selectors8.descriptionElm,\n          insertElm = _this$selectors8.insertElm,\n          sBtnELm = _this$selectors8.sBtnELm;\n\n      document.querySelector('.update-note').addEventListener('click', function (e) {\n        e.preventDefault();\n        var title = titleElm.value;\n        var description = descriptionElm.value;\n\n        if (title === '' || description === '') {\n          _this2.invalidInput();\n        } else {\n          _data__WEBPACK_IMPORTED_MODULE_0__.default.updateNoteData(id);\n        }\n\n        insertElm.innerHTML = '';\n\n        _this2.getData(_data__WEBPACK_IMPORTED_MODULE_0__.default.note);\n\n        titleElm.value = '';\n        descriptionElm.value = '';\n        sBtnELm.style.display = '';\n        document.querySelector('.update-note').remove(); //save updated array to localStorage\n\n        localStorage.setItem('notesItem', JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.default.note));\n      });\n    } // delete or modify note data\n\n  }, {\n    key: \"deleteOrModifyNoteData\",\n    value: function deleteOrModifyNoteData(e) {\n      var target = e.target.parentElement;\n      var id = Number(target.id.split('-')[1]);\n\n      if (e.target.id === 'note-delete') {\n        e.target.parentElement.remove();\n        _data__WEBPACK_IMPORTED_MODULE_0__.default.deleteProductData(id);\n        _store__WEBPACK_IMPORTED_MODULE_1__.default.deleteItemFromLocalStorage(id);\n      } else if (e.target.id === 'note-edit') {\n        var foundNote = _data__WEBPACK_IMPORTED_MODULE_0__.default.findNote(id);\n        this.populateEditItem(foundNote);\n        e.target.style.display = 'none';\n        this.updateNoteItem(foundNote.id);\n      }\n    }\n  }, {\n    key: \"otherItemRemove\",\n    value: function otherItemRemove() {\n      var _this$selectors9 = this.selectors(),\n          dFormElm = _this$selectors9.dFormElm,\n          header_3ELm = _this$selectors9.header_3ELm,\n          cNBtnElm = _this$selectors9.cNBtnElm,\n          gbBtnElm = _this$selectors9.gbBtnElm;\n\n      dFormElm.style.display = 'block';\n      header_3ELm.remove();\n      cNBtnElm.remove();\n      gbBtnElm.style.display = 'block';\n\n      gbBtnElm.onclick = function () {\n        location.reload();\n      };\n    }\n  }, {\n    key: \"searchNoteItem\",\n    value: function searchNoteItem(e) {\n      var text = e.target.value.toLowerCase();\n      var itemLength = 0;\n      document.querySelectorAll('#insert .find').forEach(function (item) {\n        var nameOfNote = item.firstElementChild.textContent.toLowerCase();\n        console.log(nameOfNote);\n\n        if (nameOfNote.indexOf(text) === -1) {\n          item.style.display = 'none';\n        } else {\n          item.style.display = 'block';\n          itemLength++;\n        }\n      });\n\n      if (itemLength > 0) {\n        this.showMessage();\n      } else {\n        this.showMessage('No note item found');\n      }\n    }\n  }]);\n\n  return UI;\n}();\n\nvar ui = new UI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ui.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    background-color: bisque;\\r\\n}\\r\\n.note{\\r\\n   background-color: chocolate;\\r\\n   box-shadow: 4px 4px 8px black,6px 6px 16px crimson;\\r\\n   height: 50px;\\r\\n}\\r\\n.box{\\r\\n    min-height: 20px;\\r\\n    min-width: 20px;\\r\\n    margin: 3px;\\r\\n    padding: 3px;\\r\\n    border: 1px solid green;\\r\\n    border-radius: 3% 3% 3% 3%;\\r\\n    background-color: black;\\r\\n    color: darkkhaki;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n.text{\\r\\n    font-size: 20px;\\r\\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\r\\n    font-weight: 400;\\r\\n    color: black;\\r\\n}\\r\\n.titleCl{\\r\\n    font-size: 18px;\\r\\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\r\\n    font-weight: 400;\\r\\n    color: black;\\r\\n}\\r\\n.newNote{\\r\\n    font-family: 'Times New Roman', Times, serif;\\r\\n    color: green;\\r\\n}\\r\\n.fromTop{\\r\\n   margin-top: 33%;\\r\\n   margin-left: 27%;\\r\\n   color:red;\\r\\n   font-size: 25px;\\r\\n   font-weight: 400;\\r\\n   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;