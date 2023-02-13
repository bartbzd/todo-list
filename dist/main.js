/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: #100f14; }\n  body h2 {\n    color: #d2d8f7;\n    font-size: 20px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: #d2d8f7c6; }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: #24222d;\n    color: #d2d8f7;\n    resize: none; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  body input[type='date'] {\n    padding: 0 5px 0 10px; }\n    body input[type='date']::-webkit-calendar-picker-indicator {\n      filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%) contrast(93%); }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n    font-size: 18px; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5vw; }\n  header h1 {\n    color: #d2d8f7;\n    font-size: 48px;\n    width: 250px; }\n  header span {\n    color: #e87070; }\n  header div {\n    width: 600px; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 0 5vw; }\n  .cards .sidebar,\n  .cards .content {\n    background-color: #141319;\n    border-radius: 20px;\n    padding: 30px;\n    height: 60vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; }\n  .cards .section-header {\n    margin-bottom: 20px; }\n  .cards .sidebar {\n    background-color: #141319;\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 30px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      margin-bottom: 10px; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 10px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 600px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper,\n    .cards .content .e-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .task {\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        padding: 5px 15px;\n        margin-bottom: 10px;\n        display: flex;\n        background-color: #24222d;\n        transition: 0.2s; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0; }\n        .cards .content .t-wrapper .task p {\n          height: 25px;\n          border: none;\n          border-radius: 10px;\n          line-height: 25px;\n          font-size: 14px;\n          font-weight: 300;\n          padding-left: 10px;\n          outline-width: 0;\n          user-select: none;\n          background-color: #24222d;\n          color: #d2d8f7; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover .actions .options {\n          opacity: 1;\n          transition: 0.2s; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s; }\n          .cards .content .t-wrapper .task .actions .options {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions i {\n            color: #8a7fa2; }\n    .cards .content .f-wrapper,\n    .cards .content .e-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form,\n      .cards .content .e-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header,\n        .cards .content .e-wrapper .task-form .form-header {\n          margin-top: 30px; }\n        .cards .content .f-wrapper .task-form .extras-wrapper,\n        .cards .content .e-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 10px; }\n        .cards .content .f-wrapper .task-form .extras,\n        .cards .content .e-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form .fa-star,\n        .cards .content .e-wrapper .task-form .fa-star {\n          font-size: 20px;\n          margin-top: auto;\n          margin-bottom: 8px;\n          transition: 0.2s; }\n          .cards .content .f-wrapper .task-form .fa-star:hover,\n          .cards .content .e-wrapper .task-form .fa-star:hover {\n            color: #e87070;\n            transform: scale(1.1); }\n        .cards .content .f-wrapper .task-form .starred,\n        .cards .content .e-wrapper .task-form .starred {\n          color: #e87070; }\n        .cards .content .f-wrapper .task-form .btn-group,\n        .cards .content .e-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn,\n        .cards .content .e-wrapper .task-form .back-btn {\n          background-color: #141319;\n          border: none;\n          color: #d2d8f7;\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn,\n        .cards .content .e-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: #100f14;\n          background-color: #e87070;\n          transition: 0.2s; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover,\n          .cards .content .e-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active,\n          .cards .content .e-wrapper .task-form .submit-btn:active {\n            transform: scale(0.98); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%; }\n        .cards .content .o-wrapper .expand-view h2 {\n          margin-bottom: 20px; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          display: flex;\n          justify-content: space-between; }\n          .cards .content .o-wrapper .expand-view .expand-header p {\n            margin-bottom: 20px; }\n          .cards .content .o-wrapper .expand-view .expand-header .fa-star {\n            font-size: 22px; }\n        .cards .content .o-wrapper .expand-view .form-header {\n          margin: 30px 0; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 10px; }\n        .cards .content .o-wrapper .expand-view .extras {\n          width: 45%; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: #141319;\n            border: none;\n            color: #d2d8f7;\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 30px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: #100f14;\n      background-color: #e87070;\n      transition: 0.2s; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$bg-color: #100f14;\n$primary: #e87070;\n$dk-text: #d2d8f7;\n$dk-subtext: #d2d8f7c6;\n$card-1: #1a181d;\n$card-2: #141319;\n$card-3: #23212b;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n}\nbody {\n  background-color: $bg-color;\n  //   background-color: #151319;\n  //   background-color: #1a181d;\n  h2 {\n    color: $dk-text;\n    font-size: 20px;\n  }\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext;\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: #24222d;\n    color: $dk-text;\n    resize: none;\n  }\n  input {\n    height: 35px;\n  }\n  textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  input[type='date'] {\n    // width: 100%;\n    padding: 0 5px 0 10px;\n    &::-webkit-calendar-picker-indicator {\n      filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%)\n        contrast(93%);\n    }\n  }\n\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n    font-size: 18px;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5vw;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 250px;\n  }\n  span {\n    color: $primary;\n  }\n  div {\n    width: 600px;\n  }\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 0 5vw;\n  .sidebar,\n  .content {\n    background-color: $card-2;\n    border-radius: 20px;\n    padding: 30px;\n    height: 60vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n  }\n  .section-header {\n    margin-bottom: 20px;\n  }\n  .sidebar {\n    background-color: $card-2;\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 30px;\n    .filter,\n    .project {\n      margin-bottom: 10px;\n      i {\n        margin-right: 10px;\n      }\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 600px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper,\n    .e-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .task {\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        padding: 5px 15px;\n        margin-bottom: 10px;\n        display: flex;\n        background-color: #24222d;\n        transition: 0.2s;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n        }\n        p {\n          height: 25px;\n          border: none;\n          border-radius: 10px;\n          line-height: 25px;\n          font-size: 14px;\n          font-weight: 300;\n          padding-left: 10px;\n          outline-width: 0;\n          user-select: none;\n          background-color: #24222d;\n          color: $dk-text;\n        }\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          .actions {\n            .options {\n              opacity: 1;\n              transition: 0.2s;\n            }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s;\n          .options {\n            opacity: 0;\n          }\n          span {\n            display: flex;\n          }\n          i {\n            color: #8a7fa2;\n          }\n        }\n      }\n    }\n    .f-wrapper,\n    .e-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 30px;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 10px;\n        }\n        .extras {\n          width: 45%;\n        }\n        .fa-star {\n          font-size: 20px;\n          margin-top: auto;\n          margin-bottom: 8px;\n          transition: 0.2s;\n          &:hover {\n            color: $primary;\n            transform: scale(1.1);\n          }\n        }\n        .starred {\n          color: $primary;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card-2;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $bg-color;\n          background-color: $primary;\n          transition: 0.2s;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.98);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        h2 {\n          margin-bottom: 20px;\n        }\n        // q {}\n        .expand-header {\n          display: flex;\n          justify-content: space-between;\n          p {\n            margin-bottom: 20px;\n          }\n          .fa-star {\n            font-size: 22px;\n          }\n        }\n        .form-header {\n          margin: 30px 0;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 10px;\n        }\n        .extras {\n          width: 45%;\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card-2;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 30px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $bg-color;\n      background-color: $primary;\n      transition: 0.2s;\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n// .cards .content .t-wrapper,\n// .cards .content .f-wrapper {\n//   display: none;\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appController)
/* harmony export */ });
/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/taskModel */ "./src/modules/models/taskModel.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/taskView */ "./src/modules/views/taskView.js");
/* eslint-disable no-console */



function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editWrapper = document.querySelector('.e-wrapper');

  const showForm = () => {
    formWrapper.style.animation = 'ease-out formRight 0.1s';
    formWrapper.style.display = 'flex';
    setTimeout(() => {
      formWrapper.style.animation = '';
    }, 100);
  };
  const hideForm = () => {
    formWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      formWrapper.style.display = 'none';
      formWrapper.style.animation = '';
    }, 100);
  };
  const showEdit = () => {
    editWrapper.style.animation = 'ease-out formRight 0.1s';
    editWrapper.style.display = 'flex';
    setTimeout(() => {
      editWrapper.style.animation = '';
    }, 100);
  };
  const hideEdit = () => {
    editWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      editWrapper.style.display = 'none';
      editWrapper.style.animation = '';
    }, 100);
  };

  const showTasksRight = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    setTimeout(() => {
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const hideTasksRight = () => {
    tasksWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const showTasksLeft = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out formRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const hideTasksLeft = () => {
    tasksWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
      tasksWrapper.style.animation = '';
    }, 100);
  };

  const formStar = document.querySelector('.add-star');
  const openTask = (e) => {
    // e.stopImmediatePropagation();
    console.log(_models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks);
    openWrapper.style.display = 'flex';
    openWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    const title = document.querySelector('#open-title');
    console.log(title);
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#projects');
    // const date = document.querySelector('#date');
    const isStarred = formStar.classList.contains('starred');
    const taskId = e.target.dataset.id;
    console.log(title.textContent);
    title.textContent = _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks[taskId].title;
    console.log(title.textContent);
    note.textContent = _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks[taskId].note;

    setTimeout(() => {
      openWrapper.style.animation = '';
    }, 100);
  };
  const closeTask = () => {
    openWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      openWrapper.style.display = 'none';
      openWrapper.style.animation = '';
    }, 100);
  };

  const renderFormView = () => {
    hideTasksRight();
    setTimeout(() => {
      showForm();
    }, 100);
  };
  const renderEditView = (e) => {
    e.stopImmediatePropagation();
    hideTasksRight();
    setTimeout(() => {
      showEdit();
    }, 100);
  };
  const renderTasksView = () => {
    if (editWrapper.style.display === 'flex') {
      hideEdit();
      setTimeout(() => {
        showTasksRight();
      }, 100);
      return;
    }
    if (formWrapper.style.display === 'flex') {
      hideForm();
      setTimeout(() => {
        showTasksRight();
      }, 100);
      return;
    }
    if (openWrapper.style.display === 'flex') {
      closeTask();
      setTimeout(() => {
        showTasksLeft();
      }, 100);
    }
  };
  const renderTasksOpenView = (e) => {
    console.log('im here');
    hideTasksLeft();
    // e.stopImmediatePropagation();

    setTimeout(() => {
      openTask(e);
    }, 100);
  };

  const editBtn = document.querySelector('.edit');
  const checkmark = document.querySelector('.fa-regular');
  const backBtn = document.querySelectorAll('.back-btn');
  // const taskBox = document.querySelectorAll('.task');
  const addBtn = document.querySelector('.add-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');

  const toggleCheckmark = (e) => {
    e.stopImmediatePropagation();
    checkmark.classList.toggle('fa-solid');
    checkmark.classList.toggle('fa-circle');
    checkmark.classList.toggle('fa-circle-check');
  };
  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };

  function addTaskHandlers() {
    const taskBox = document.querySelectorAll('.task');
    taskBox.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
  }
  addTaskHandlers();

  function storeInput() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](title, note, project, date, isStarred);
  }

  const tasksView = document.querySelector('.tasks');
  const form = document.querySelector('form');
  function resetTasks() {
    tasksView.innerHTML = '';
    form.reset();
  }
  function renderTasks() {
    resetTasks();
    _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
      (0,_views_taskView__WEBPACK_IMPORTED_MODULE_1__["default"])(task);
    });
    addTaskHandlers();
  }
  function addTask(e) {
    const title = document.querySelector('#task');
    if (!title.checkValidity()) {
      title.innerHTML = title.validationMessage;
      return;
    }
    e.preventDefault();
    const newTask = storeInput();
    const existingTask = _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks.find((t) => t.title === newTask.title);
    if (!existingTask) {
      _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks.push(newTask);
      console.log(_models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks);
      renderTasks();
      renderTasksView(e);
    }
  }
  document.addEventListener('DOMContentLoaded', (e) => {
    console.log('test');
    const introTask = new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Click to expand me!',
      'Tasks can be expanded to view more detailed information about them. You can add notes, projects and due dates from the task form pane.',
      'Introduction'
    );
    _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks.push(introTask);
    renderTasks();
    renderTasksView(e);

    // addTaskHandlers();
  });
  formStar.addEventListener('click', toggleStar);
  checkmark.addEventListener('click', toggleCheckmark);
  editBtn.addEventListener('click', renderEditView);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', addTask);
  backBtn.forEach((button) => {
    button.addEventListener('click', renderTasksView);
  });
}


/***/ }),

/***/ "./src/modules/models/taskModel.js":
/*!*****************************************!*\
  !*** ./src/modules/models/taskModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
const tasks = [
  // {
  // title: 'Click to expand me!',
  // note: 'Each task can be expanded to view more detailed information about it here. You can add notes, projects and due dates from the task form pane.',
  // project: 'Introduction',
  // date: '',
  // isStarred: true,
  // },
];

class Task {
  constructor(title, note, project, date, isStarred = false) {
    this.title = title;
    this.note = note;
    this.project = project;
    this.date = date;
    this.isStarred = isStarred;
  }
  //   let tasks = []

  //   editTask(title, note, project, date) {
  //     this.title = title;
  //     this.note = note;
  //     this.project = project;
  //     this.date = date;
  //     this.isStarred = false;
  //   }
}


/***/ }),

/***/ "./src/modules/views/taskView.js":
/*!***************************************!*\
  !*** ./src/modules/views/taskView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/taskModel */ "./src/modules/models/taskModel.js");


function createTask(task) {
  const taskWrapper = document.createElement('div');
  const checkmark = document.createElement('div');
  const title = document.createElement('p');

  const actions = document.createElement('div');
  const edit = document.createElement('i');
  const trash = document.createElement('i');
  const star = document.createElement('i');

  taskWrapper.setAttribute('data-id', _models_taskModel__WEBPACK_IMPORTED_MODULE_0__.tasks.indexOf(task));
  taskWrapper.classList.add('task');
  checkmark.classList.add('checkmark');
  title.classList.add('task-title');
  title.textContent = task.title;
  actions.classList.add('actions');
  edit.classList.add('options', 'edit', 'material-symbols-rounded');
  edit.textContent = 'edit';
  trash.classList.add('options', 'material-symbols-rounded');
  trash.textContent = 'delete';
  star.classList.add('fa-solid', 'fa-star');

  document.querySelector('.tasks').append(taskWrapper);
  taskWrapper.append(checkmark, title, actions);
  actions.append(edit, trash, star);
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ "./src/modules/app.js");



(0,_modules_app__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDcE9PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0Qzs7QUFFN0I7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLDREQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ21COztBQUUxQyx3REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMGYxNDsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGNvbG9yOiAjZDJkOGY3O1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgcCxcXG4gIGJvZHkgc3BhbixcXG4gIGJvZHkgaSxcXG4gIGJvZHkgcSB7XFxuICAgIGNvbG9yOiAjZDJkOGY3YzY7IH1cXG4gIGJvZHkgaW5wdXQsXFxuICBib2R5IHRleHRhcmVhLFxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjIyZDtcXG4gICAgY29sb3I6ICNkMmQ4Zjc7XFxuICAgIHJlc2l6ZTogbm9uZTsgfVxcbiAgYm9keSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDsgfVxcbiAgYm9keSB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuICBib2R5IHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG4gIGJvZHkgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgcGFkZGluZzogMCA1cHggMCAxMHB4OyB9XFxuICAgIGJvZHkgaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoNTY1MCUpIGh1ZS1yb3RhdGUoMTc5ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDkzJSk7IH1cXG4gIGJvZHkgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDMwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4O1xcbiAgICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDV2dzsgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgY29sb3I6ICNkMmQ4Zjc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDI1MHB4OyB9XFxuICBoZWFkZXIgc3BhbiB7XFxuICAgIGNvbG9yOiAjZTg3MDcwOyB9XFxuICBoZWFkZXIgZGl2IHtcXG4gICAgd2lkdGg6IDYwMHB4OyB9XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7IH1cXG4gIC5jYXJkcyAuc2lkZWJhcixcXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7IH1cXG4gIC5jYXJkcyAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMzE5O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Qge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgLmNhcmRzIC50YXNrLFxcbiAgLmNhcmRzIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIsXFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayB7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMjJkO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmhpZGUtY2hlY2sge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuY2hlY2ttYXJrIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjIyZDtcXG4gICAgICAgICAgY29sb3I6ICNkMmQ4Zjc7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgaSB7XFxuICAgICAgICAgICAgY29sb3I6ICM4YTdmYTI7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIsXFxuICAgIC5jYXJkcyAuY29udGVudCAuZS13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSxcXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mb3JtLWhlYWRlcixcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZS13cmFwcGVyIC50YXNrLWZvcm0gLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzLXdyYXBwZXIsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyLFxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5lLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6aG92ZXIsXFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZS13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZTg3MDcwO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3RhcnJlZCxcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZS13cmFwcGVyIC50YXNrLWZvcm0gLnN0YXJyZWQge1xcbiAgICAgICAgICBjb2xvcjogI2U4NzA3MDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuYnRuLWdyb3VwLFxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5lLXdyYXBwZXIgLnRhc2stZm9ybSAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuYmFjay1idG4sXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTk7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICNkMmQ4Zjc7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0bixcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZS13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogIzEwMGYxNDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4NzA3MDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyLFxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46YWN0aXZlLFxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmUtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgaDIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIHAge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJ0bi1ncm91cCAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMTk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZDJkOGY3O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG4ge1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6ICMxMDBmMTQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4NzA3MDtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG46YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cXG5cXG4uc2xpZGUtdGFza3MtaW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzOyB9XFxuXFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzOyB9XFxuXFxuQGtleWZyYW1lcyB0YXNrUmlnaHQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7IH0gfVxcblxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7IH1cXG5cXG4uc2xpZGUtZm9ybS1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzOyB9XFxuXFxuQGtleWZyYW1lcyBmb3JtUmlnaHQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UseUJBaEJnQixFQUFBO0VBZWxCO0lBS0ksY0FsQmE7SUFtQmIsZUFBZSxFQUFBO0VBTm5COzs7O0lBWUksZ0JBeEJrQixFQUFBO0VBWXRCOzs7SUFpQkksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQW5DYTtJQW9DYixZQUFZLEVBQUE7RUF2QmhCO0lBMEJJLFlBQVksRUFBQTtFQTFCaEI7SUE2QkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQS9CckI7SUFrQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtFQXZDcEI7SUEyQ0kscUJBQXFCLEVBQUE7SUEzQ3pCO01BNkNNLGlHQUNlLEVBQUE7RUE5Q3JCO0lBbURJLG9FQUFvRTtJQUNwRSxlQUFlLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtFQUxoQjtJQU9JLGNBM0VhO0lBNkViLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFWaEI7SUFhSSxjQWxGYSxFQUFBO0VBcUVqQjtJQWdCSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNi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QUNuQixTQUFTLEVBQUE7UUE3TW5CO1VBZ05VLFVBQVUsRUFBQTtRQWhOcEI7VUFtTlUsZ0JBQWdCLEVBQUE7VUFuTjFCO1lBcU5ZLHlCQXpTSTtZQTBTSixZQUFZO1lBQ1osY0E5U0s7WUErU0wsZUFBZSxFQUFBO0lBeE4zQjtNQThOTSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0E5VFk7TUErVFoseUJBOVRXO01BK1RYLGdCQUFnQixFQUFBO01Bdk90QjtRQXlPUSxzQkFBc0IsRUFBQTtNQXpPOUI7UUE0T1Esc0JBQXNCLEVBQUE7O0FBTTlCO0VBQ0UsMENBQTBDLEVBQUE7O0FBRTVDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0U7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDJCQUEyQixFQUFBLEVBQUE7O0FBRy9CO0VBQ0Usa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0UsMENBQTBDLEVBQUE7O0FBRTVDO0VBQ0U7SUFDRSw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLHdCQUF3QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJnLWNvbG9yOiAjMTAwZjE0O1xcbiRwcmltYXJ5OiAjZTg3MDcwO1xcbiRkay10ZXh0OiAjZDJkOGY3O1xcbiRkay1zdWJ0ZXh0OiAjZDJkOGY3YzY7XFxuJGNhcmQtMTogIzFhMTgxZDtcXG4kY2FyZC0yOiAjMTQxMzE5O1xcbiRjYXJkLTM6ICMyMzIxMmI7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMxNTEzMTk7XFxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MWQ7XFxuICBoMiB7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgcCxcXG4gIHNwYW4sXFxuICBpLFxcbiAgcSB7XFxuICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gIH1cXG4gIGlucHV0LFxcbiAgdGV4dGFyZWEsXFxuICBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjIyZDtcXG4gICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG4gIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgLy8gd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg1NCUpIHNhdHVyYXRlKDU2NTAlKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcygxMDElKVxcbiAgICAgICAgY29udHJhc3QoOTMlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDMwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgaDEge1xcbiAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgIC8vIHBhZGRpbmctbGVmdDogNXZ3O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG4gIHNwYW4ge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICB9XFxuICBkaXYge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICB9XFxufVxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgLnNpZGViYXIsXFxuICAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC0yO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLmZhLWdpdGh1YiB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAudGFzayxcXG4gIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLnQtd3JhcHBlcixcXG4gICAgLmYtd3JhcHBlcixcXG4gICAgLm8td3JhcHBlcixcXG4gICAgLmUtd3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC50LXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAudGFzayB7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMjJkO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgIH1cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjIyZDtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgfVxcbiAgICAgICAgJiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICAgICAgICB9XFxuICAgICAgICBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaSB7XFxuICAgICAgICAgICAgY29sb3I6ICM4YTdmYTI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmYtd3JhcHBlcixcXG4gICAgLmUtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICB9XFxuICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc3RhcnJlZCB7XFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtMjtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIHEge31cXG4gICAgICAgIC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzIHtcXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLTI7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmFkZC1idG4ge1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi8vIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyLFxcbi8vIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIHtcXG4vLyAgIGRpc3BsYXk6IG5vbmU7XFxuLy8gfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBUYXNrLCB7IHRhc2tzIH0gZnJvbSAnLi9tb2RlbHMvdGFza01vZGVsJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBDb250cm9sbGVyKCkge1xuICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudC13cmFwcGVyJyk7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmYtd3JhcHBlcicpO1xuICBjb25zdCBvcGVuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdyYXBwZXInKTtcbiAgY29uc3QgZWRpdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZS13cmFwcGVyJyk7XG5cbiAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCAwLjFzJztcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dFZGl0ID0gKCkgPT4ge1xuICAgIGVkaXRXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgMC4xcyc7XG4gICAgZWRpdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVkaXRXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVFZGl0ID0gKCkgPT4ge1xuICAgIGVkaXRXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVkaXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBlZGl0V3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dUYXNrc1JpZ2h0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBzaG93VGFza3NMZWZ0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybVN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKTtcbiAgY29uc3Qgb3BlblRhc2sgPSAoZSkgPT4ge1xuICAgIC8vIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tdGl0bGUnKTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW5vdGUnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgLy8gY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gICAgY29uc3QgaXNTdGFycmVkID0gZm9ybVN0YXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFycmVkJyk7XG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zb2xlLmxvZyh0aXRsZS50ZXh0Q29udGVudCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc1t0YXNrSWRdLnRpdGxlO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlLnRleHRDb250ZW50KTtcbiAgICBub3RlLnRleHRDb250ZW50ID0gdGFza3NbdGFza0lkXS5ub3RlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZvcm1WaWV3ID0gKCkgPT4ge1xuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93Rm9ybSgpO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckVkaXRWaWV3ID0gKGUpID0+IHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93RWRpdCgpO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHJlbmRlclRhc2tzVmlldyA9ICgpID0+IHtcbiAgICBpZiAoZWRpdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBoaWRlRWRpdCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dUYXNrc1JpZ2h0KCk7XG4gICAgICB9LCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBoaWRlRm9ybSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dUYXNrc1JpZ2h0KCk7XG4gICAgICB9LCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3BlbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBjbG9zZVRhc2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NMZWZ0KCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyVGFza3NPcGVuVmlldyA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2ltIGhlcmUnKTtcbiAgICBoaWRlVGFza3NMZWZ0KCk7XG4gICAgLy8gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlblRhc2soZSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXJlZ3VsYXInKTtcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrLWJ0bicpO1xuICAvLyBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcblxuICBjb25zdCB0b2dnbGVDaGVja21hcmsgPSAoZSkgPT4ge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXNvbGlkJyk7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWNpcmNsZScpO1xuICAgIGNoZWNrbWFyay5jbGFzc0xpc3QudG9nZ2xlKCdmYS1jaXJjbGUtY2hlY2snKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlU3RhciA9ICgpID0+IHtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdzdGFycmVkJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuICAgIHRhc2tCb3guZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgIH0pO1xuICB9XG4gIGFkZFRhc2tIYW5kbGVycygpO1xuXG4gIGZ1bmN0aW9uIHN0b3JlSW5wdXQoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBmb3JtU3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJyZWQnKTtcblxuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tzVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmdW5jdGlvbiByZXNldFRhc2tzKCkge1xuICAgIHRhc2tzVmlldy5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNyZWF0ZVRhc2sodGFzayk7XG4gICAgfSk7XG4gICAgYWRkVGFza0hhbmRsZXJzKCk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkVGFzayhlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgIGlmICghdGl0bGUuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZS52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yZUlucHV0KCk7XG4gICAgY29uc3QgZXhpc3RpbmdUYXNrID0gdGFza3MuZmluZCgodCkgPT4gdC50aXRsZSA9PT0gbmV3VGFzay50aXRsZSk7XG4gICAgaWYgKCFleGlzdGluZ1Rhc2spIHtcbiAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGNvbnN0IGludHJvVGFzayA9IG5ldyBUYXNrKFxuICAgICAgJ0NsaWNrIHRvIGV4cGFuZCBtZSEnLFxuICAgICAgJ1Rhc2tzIGNhbiBiZSBleHBhbmRlZCB0byB2aWV3IG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlbS4gWW91IGNhbiBhZGQgbm90ZXMsIHByb2plY3RzIGFuZCBkdWUgZGF0ZXMgZnJvbSB0aGUgdGFzayBmb3JtIHBhbmUuJyxcbiAgICAgICdJbnRyb2R1Y3Rpb24nXG4gICAgKTtcbiAgICB0YXNrcy5wdXNoKGludHJvVGFzayk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG5cbiAgICAvLyBhZGRUYXNrSGFuZGxlcnMoKTtcbiAgfSk7XG4gIGZvcm1TdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU3Rhcik7XG4gIGNoZWNrbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNoZWNrbWFyayk7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJFZGl0Vmlldyk7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJGb3JtVmlldyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuICBiYWNrQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzVmlldyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IHRhc2tzID0gW1xuICAvLyB7XG4gIC8vIHRpdGxlOiAnQ2xpY2sgdG8gZXhwYW5kIG1lIScsXG4gIC8vIG5vdGU6ICdFYWNoIHRhc2sgY2FuIGJlIGV4cGFuZGVkIHRvIHZpZXcgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCBpdCBoZXJlLiBZb3UgY2FuIGFkZCBub3RlcywgcHJvamVjdHMgYW5kIGR1ZSBkYXRlcyBmcm9tIHRoZSB0YXNrIGZvcm0gcGFuZS4nLFxuICAvLyBwcm9qZWN0OiAnSW50cm9kdWN0aW9uJyxcbiAgLy8gZGF0ZTogJycsXG4gIC8vIGlzU3RhcnJlZDogdHJ1ZSxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkID0gZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5pc1N0YXJyZWQgPSBpc1N0YXJyZWQ7XG4gIH1cbiAgLy8gICBsZXQgdGFza3MgPSBbXVxuXG4gIC8vICAgZWRpdFRhc2sodGl0bGUsIG5vdGUsIHByb2plY3QsIGRhdGUpIHtcbiAgLy8gICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgLy8gICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gIC8vICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAvLyAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgLy8gICAgIHRoaXMuaXNTdGFycmVkID0gZmFsc2U7XG4gIC8vICAgfVxufVxuIiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuLi9tb2RlbHMvdGFza01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tzLmluZGV4T2YodGFzaykpO1xuICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1zdGFyJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kKHRhc2tXcmFwcGVyKTtcbiAgdGFza1dyYXBwZXIuYXBwZW5kKGNoZWNrbWFyaywgdGl0bGUsIGFjdGlvbnMpO1xuICBhY3Rpb25zLmFwcGVuZChlZGl0LCB0cmFzaCwgc3Rhcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGFwcENvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5cbmFwcENvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==