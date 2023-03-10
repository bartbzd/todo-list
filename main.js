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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(244, 124, 124);\n  --gradient-1: rgb(246, 118, 118);\n  --gradient-2: rgb(250, 177, 135); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(90, 51, 217);\n  --gradient-1: rgb(88, 44, 232);\n  --gradient-2: rgba(119, 81, 246, 1); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: var(--bg-color);\n  height: 100vh; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 325px; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(60deg, var(--gradient-1) 0%, var(--gradient-2) 75%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n  header div {\n    width: 600px; }\n\n.hidden {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-in-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 300px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out; }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i:before {\n        display: none; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 600px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: var(--component);\n        transition: 0.2s ease-in-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .options,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-in-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s;\n          padding-left: 8px; }\n          .cards .content .t-wrapper .task .actions .options {\n            opacity: 0;\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%) contrast(93%); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-in-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(60deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.98); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px;\n          border-radius: 24px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 30vh;\n          overflow: scroll; }\n        .cards .content .o-wrapper .expand-view .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(60deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes textclip {\n  100% {\n    background-position: left; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// html[data-theme='light'] {\n//   --bg-color: #100f14;\n//   --primary: #e87070;\n//   --dk-text: #d2d8f7;\n//   --dk-subtext: #d2d8f7a6;\n//   --card: #141319;\n//   --component-s: #353240;\n//   --component: #24222d;\n// }\nhtml[data-theme='light'] {\n  --bg-color: #e4f0fa; //#f3ede394;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8; //#f3f0e384;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(244, 124, 124);\n  --gradient-1: rgb(246, 118, 118);\n  --gradient-2: rgb(250, 177, 135);\n}\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb; //#d9d9e8;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(90, 51, 217);\n  --gradient-1: rgb(88, 44, 232);\n  --gradient-2: rgba(119, 81, 246, 1);\n}\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n// $bg-color: #d2d8f7a6;\n// $primary: #e87070;\n// $dk-text: #d2d8f7;\n// $dk-subtext: #d2d8f7a6;\n// $card: #141319;\n// $component-s: #353240;\n// $component: #24222d;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n  // border: 1px solid red;\n}\nbody {\n  background-color: $bg-color;\n  // background-color: #151319;\n  // background-color: #1a181d;\n  height: 100vh;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    // line-height: 25px;\n    height: 25px;\n  }\n\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext; //$primary\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n  }\n  input {\n    height: 35px;\n  }\n  textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 325px;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(60deg, $gradient-1 0%, $gradient-2 75%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  div {\n    width: 600px;\n  }\n}\n.hidden {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: 0.2s ease-in-out;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    //   rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n    // box-shadow: 0px 60px 60px rgba(0, 0, 0, 0.18);\n    // box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,\n    //   rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;\n    // box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n    //   rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filter {\n      height: 32px;\n      // background-color: $card;\n      .fa-star {\n        // height: 18px;\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n      i {\n        margin-right: 6px;\n      }\n\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out;\n      }\n\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i:before {\n        display: none;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      // width: 100%;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      // user-select: none;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 600px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: $component;\n        // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n        transition: 0.2s ease-in-out;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          // background-color: $component;\n          color: $dk-text;\n          overflow: hidden;\n        }\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .options,\n            .fa-regular {\n              transition: 0.2s ease-in-out;\n              opacity: 1;\n            }\n            // .fa-regular {\n            //   width: 18px;\n            //   display: flex;\n            //   justify-content: center;\n\n            // }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s;\n          padding-left: 8px;\n          .options {\n            opacity: 0;\n            height: 100%;\n            display: flex;\n            align-items: center;\n          }\n          span {\n            display: flex;\n          }\n          // i {\n          //   color: #8a7fa2;\n          // }\n          .fa-regular {\n            opacity: 0;\n          }\n          .fa-solid {\n            // font-size: 24px;\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #note {\n          height: 15vh;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          &::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg)\n              brightness(101%) contrast(93%);\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          // margin-left: auto;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            // color: $primary;\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          // color: $dk-subtext;\n          transition: 0.2s ease-in-out;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text; //$bg-color;\n          background: $grad-base;\n          background: linear-gradient(60deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.98);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            i {\n              margin-right: 6px;\n              // color: $primary;\n            }\n            p {\n              font-size: 16px;\n              // color: $primary;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n\n          .fa-star {\n            font-size: 24px;\n            color: $dk-text;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n          // padding: 16px;\n          // background-color: $component;\n          // border-radius: 16px;\n          // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n          border-radius: 24px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px;\n        }\n        #open-title {\n          color: $dk-text;\n        }\n        #open-note {\n          // margin-top: 16px;\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          // line-height: 1.5;\n          height: 30vh;\n          overflow: scroll;\n          // padding: 0px 16px;\n        }\n        .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n            // padding: 0 0 8px 8px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text; //$bg-color;\n      // background-color: $primary;\n      background: $grad-base;\n      background: linear-gradient(60deg, $gradient-1 0%, $gradient-2 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes textclip {\n  100% {\n    background-position: left;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _models_projectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/projectModel */ "./src/modules/models/projectModel.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/taskView */ "./src/modules/views/taskView.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projectView */ "./src/modules/views/projectView.js");
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */





function appController() {
  const projectForm = document.querySelector('#project-form');
  const taskForm = document.querySelector('.task-form');
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editBtn = document.querySelector('.edit-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');
  const addBtn = document.querySelector('.add-task-btn');
  const addProjectBtn = document.querySelector('.fa-plus');
  const titleInput = document.querySelector('#task');
  const noteInput = document.querySelector('#note');
  const projectsFormInput = document.querySelector('#projects');
  const formStar = document.querySelector('.add-star');
  const projectGrp = document.querySelector('.project-grp');
  const input = document.querySelector('#project-name');
  const selectAll = document.querySelector('.all');

  const componentColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--component');
  const textColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-text');
  const subtextColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-subtext');
  const cardColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--card');

  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let allTasksList;
  let selected = '';

  // animations
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
  const openTask = () => {
    // console.log(tasks);
    openWrapper.style.display = 'flex';
    openWrapper.style.animation = 'ease-out taskRight reverse 0.1s';

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

  // validity
  function isProjectValid() {
    const name = document.querySelector('#project-name');
    if (!name.value) {
      console.log('test');
      name.setCustomValidity('Project cannot be empty');
      name.reportValidity();
      return false;
    }
    if (_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find((project) => project.name === name.value)) {
      name.setCustomValidity('Project exists');
      name.reportValidity();
      return false;
    }
    return true;
  }
  function isTaskValid() {
    const task = document.querySelector('#task');
    console.log(task);
    if (!task.value) {
      console.log('test');
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      return false;
    }

    // if (project.getTasks().find(({ title }) => title === task.value)) {
    //   task.setCustomValidity('Task already exists');
    //   task.reportValidity();
    //   return false;
    // }
    return true;
  }

  // toggles
  const toggleBtnText = () => {
    const title = document.querySelector('.form-title-header');
    title.textContent = 'Edit Task';
    editBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
  };
  const toggleComplete = (e, project) => {
    e.stopPropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const task = project.getTasks()[taskIndex];
    task.isComplete = !task.isComplete;

    const checkmarkClasses = ['fa-regular', 'fa-solid', 'fa-circle', 'fa-circle-check'];
    checkmarkClasses.forEach((className) => {
      console.log(e.target.classList.contains('.delete'));
      if (e.target.classList.contains('check')) {
        e.target.classList.toggle(className);
      }
    });

    const title = e.target.closest('.task').querySelector('.task-title');
    const wrapper = e.target.closest('.task');
    const actions = e.target.closest('.task').querySelector('.actions');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.2s ease-in-out';
      title.style.textDecoration = 'line-through';
      title.style.color = subtextColor;

      wrapper.style.transition = '0.2s ease-in-out';
      wrapper.style.backgroundColor = 'transparent';

      actions.style.transition = '0.2s ease-in-out';
      actions.style.opacity = '0';
    } else {
      title.style.textDecoration = '';
      title.style.color = textColor;
      actions.style.opacity = '1';
      wrapper.style.backgroundColor = componentColor;
    }
  };
  const toggleFormStar = () => {
    formStar.classList.toggle('starred');
    formStar.classList.toggle('fa-regular');
    formStar.classList.toggle('fa-solid');
  };
  const togglePlusBtn = () => {
    resetForm();
    addProjectBtn.classList.toggle('plus');
    addProjectBtn.classList.toggle('rotated');
  };
  const toggleAddProject = () => {
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      input.focus();
    }

    const projectBtns = document.querySelectorAll('.options');
    projectBtns.forEach((btn) => {
      btn.style.opacity = '0';
    });
    if (projectForm.hidden) {
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
    }
  };
  function toggleEditProject(e) {
    console.log(currProject);
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    const projectBtns = document.querySelectorAll('.options');
    projectBtns.forEach((btn) => {
      // btn.style.display = 'none';
      btn.style.opacity = '0';
    });
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      projectIndex = e.target.closest('.project').getAttribute('data-id');
      console.log(projectIndex);
      input.value = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex].name;
      input.focus();
      console.log(input);
      selected = e.target.closest('.project');
      selected.classList.toggle('edited');
      selected.style.display = 'none';
    }
  }

  // resets
  function resetStar() {
    document.querySelector('.add-star').className = 'add-star fa-regular fa-star';
  }
  function resetProjects() {
    document.querySelector('.project-grp').innerHTML = '';
    document.querySelector('select').innerHTML = '';
  }
  function resetTasks() {
    document.querySelector('.tasks').innerHTML = '';
  }
  function resetForm() {
    document.querySelector('form').reset();
    document.querySelector('.task-form').reset();
  }
  function resetFilters() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach((filter) => {
      filter.style.backgroundColor = 'transparent';
    });
  }
  function resetSelectedProject() {
    const folders = document.querySelectorAll('.folder');
    folders.forEach((folder) => {
      // folder.textContent = '';
      folder.className = 'folder material-symbols-outlined';
      // folder.textContent = 'folder';
    });
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      project.style.backgroundColor = 'transparent';
    });
  }

  // updates
  const updateOpenTask = (e) => {
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#open-project');
    // const date = document.querySelector('#date');

    const star = document.querySelector('.open-star');
    const id = e.target.closest('.task').getAttribute('data-id');
    const isStarred = currProject.tasks[id].getIsStarred();
    console.log(isStarred);
    title.textContent = currProject.tasks[id].title;
    note.textContent = currProject.tasks[id].note;
    project.textContent = currProject.tasks[id].project;
    if (isStarred === false) {
      star.style.display = 'none';
    } else star.style.display = 'inline-block';
  };
  function updateSelectedProject() {
    resetFilters();
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name) {
        p.closest('.project').style.backgroundColor = '#2F2D35';
        i.closest('.folder').className = 'folder material-symbols-rounded';
      }
    });
  }
  function updateSelectedFilter() {
    if (currProject.name === 'All') {
      const allTab = document.querySelector('.all');
      // e.target.closest('.filter').style.backgroundColor = componentColor;
      allTab.style.backgroundColor = componentColor;
    }
  }

  const renderTasksOpenView = (e) => {
    hideTasksLeft();

    setTimeout(() => {
      openTask();
      updateOpenTask(e);
    }, 100);
  };
  const renderFormView = () => {
    resetForm();
    resetStar();
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';

    // document.querySelector('select').addEventListener('change', (e) => {
    //   const project = projects.find((item) => item.name === e.target.value);

    //   // currProject = project;

    //   // tempProject = project;
    // });

    hideTasksRight();
    setTimeout(() => {
      showForm();
      titleInput.focus();
    }, 100);
  };
  const renderEditView = (e, project) => {
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    console.log(project.name);
    // console.log(projectIndex);
    // projectIndex = project.getAttribute('data-id');

    const projectName = e.currentTarget
      .closest('.task')
      .getAttribute('data-project-name');

    // Find the index of the project in the `projects` array
    // projectIndex = projects.findIndex((project) => project.id === projectId);
    document.querySelector('select').value = projectName;

    console.log(project.getTasks()[taskIndex].getIsStarred());
    if (project.getTasks()[taskIndex].getIsStarred()) {
      formStar.classList.add('starred');
      formStar.classList.remove('fa-regular');
      formStar.classList.add('fa-solid');
      // console.log('test');
    } else {
      formStar.classList.remove('starred');
      formStar.classList.add('fa-regular');
      formStar.classList.remove('fa-solid');
    }
    // document.querySelector('select').addEventListener('change', () => {
    //   tempProject = projects.find((item) => item.name === e.target.value);
    // });
    e.stopImmediatePropagation();
    hideTasksRight();

    setTimeout(() => {
      showForm();
      titleInput.focus();
      toggleBtnText();
    }, 100);
  };
  const renderTasksView = (e) => {
    resetForm();
    e.preventDefault();
    if (addBtn.classList.contains('hidden')) {
      toggleBtnText();
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

  function addTaskHandlers() {
    const taskWrapper = document.querySelectorAll('.task');
    const checkmarks = document.querySelectorAll('.fa-circle, .fa-circle-check');
    const editBtns = document.querySelectorAll('.edit');
    const deleteBtns = document.querySelectorAll('.delete');
    const backBtn = document.querySelectorAll('.back-btn');

    backBtn.forEach((button) => {
      button.addEventListener('click', renderTasksView);
    });
    taskWrapper.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
    checkmarks.forEach((checkmark) => {
      checkmark.addEventListener('click', (e) => {
        toggleComplete(e, currProject);
      });
    });
    editBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        renderEditView(e, currProject);
      });
    });
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.3s';
        toggleComplete(e, currProject);
        setTimeout(() => {
          deleteTask(e, currProject);
        }, 200);
      });
    });
  }
  function renderTasks(project) {
    resetTasks();
    if (project.getTasks().length === 0) {
      document.querySelector('.tasks').appendChild(document.createElement('p'));
      document.querySelector('.tasks p').textContent = 'No tasks found';
      document.querySelector('.tasks p').className = 'no-tasks';
    }

    project.getTasks().forEach((task) => {
      const taskWrapper = (0,_views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"])(task, project.getTasks());
      document.querySelector('.tasks').append(taskWrapper);
      ////
      // taskWrapper.setAttribute('data-project-id', projects.indexOf(project));
      taskWrapper.setAttribute('data-project-name', task.project);
      ////
      if (task.getIsStarred()) {
        taskWrapper.querySelector('.fa-star').classList.replace('fa-regular', 'fa-solid');
      }

      if (task.isComplete) {
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        const wrapper = taskWrapper.closest('.task');
        const actions = taskWrapper.closest('.task').querySelector('.actions');
        const checkmark = taskWrapper.closest('.task').querySelector('.fa-circle-check');
        console.log(checkmark);
        //add selector for closest checkmark, toggle status

        title.style.transition = '0.2s ease-in-out';
        title.style.textDecoration = 'line-through';
        title.style.color = subtextColor;

        wrapper.style.transition = '0.2s ease-in-out';
        wrapper.style.backgroundColor = cardColor;

        actions.style.transition = '0.2s ease-in-out';
        actions.style.opacity = '0';
      }
    });
    addTaskHandlers();
  }

  function handleProjectClick(e) {
    resetFilters();
    resetSelectedProject();
    const projectWrappers = document.querySelectorAll('.project');
    const project = e.currentTarget.closest('.project');
    projectWrappers.forEach((wrapper) => {
      wrapper.style.backgroundColor = '';
    });
    project.style.backgroundColor = componentColor;

    const folder = project.querySelector('.folder');
    folder.className = 'folder material-symbols-rounded';

    projectIndex = project.getAttribute('data-id');
    currProject = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex];

    renderTasks(currProject);
    renderTasksView(e);
  }
  function handleEditProjectClick(e) {
    e.stopPropagation();
    renderTasks(currProject);
    renderTasksView(e);
    toggleEditProject(e);
  }
  function addProjectHandlers() {
    const projectWrappers = document.querySelectorAll('.project');
    const editBtns = document.querySelectorAll('.edit-p');

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', handleProjectClick);
    });

    editBtns.forEach((button) => {
      button.addEventListener('click', handleEditProjectClick);
    });
  }
  function renderProjects() {
    // resetProjects();
    _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
      (0,_views_projectView__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
    });
    addProjectHandlers();
  }

  function storeProject() {
    const name = document.querySelector('#project-name').value;
    return new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"](name);
  }
  function addProject() {
    if (!isProjectValid()) return;
    const newProject = storeProject();
    const existingProject = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find((project) => project.name === newProject.name);
    if (!existingProject) {
      _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.unshift(newProject);
      currProject = newProject;
      resetForm();
    }
    resetProjects();
    renderProjects();
    toggleAddProject();
  }
  function editProject() {
    const name = document.querySelector('#project-name');
    if (!name.value) {
      console.log('test');
      name.setCustomValidity('Task cannot be empty');
      name.reportValidity();
      return;
    }

    _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex].name = name.value;
    resetForm();
    toggleEditProject();
    renderProjects();
  }

  function storeTask() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](title, note, project, date, isStarred);
  }
  function addTask(e, project) {
    if (!isTaskValid()) return;
    e.preventDefault();

    const newTask = storeTask();
    const temp = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find(({ name }) => name === projectsFormInput.value);
    if (projectsFormInput.value !== project.name && projectsFormInput.value !== '') {
      temp.getTasks().push(newTask);
      currProject = temp;
    } else project.getTasks().push(newTask);

    renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    updateSelectedProject();
    updateSelectedFilter();
    resetForm();
  }
  function editTask(e, project) {
    if (!isTaskValid()) return;
    e.preventDefault();
    console.log(currProject.name);
    const editedTask = storeTask();
    const temp = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find(({ name }) => name === projectsFormInput.value);
    console.log(temp);
    console.log(currProject.name);
    if (projectsFormInput.value !== project.name && projectsFormInput.value !== '') {
      console.log(taskIndex);
      temp.getTasks().splice(taskIndex, 1, editedTask); //push(editedTask)
      project.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

    // resetProjects();
    renderProjects();
    renderTasksView(e);
    updateSelectedProject();
    renderTasks(currProject);
  }

  function deleteTask(e, project) {
    e.stopImmediatePropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const taskToDelete = project.getTasks()[taskIndex];

    // Find project task originally came from
    let projectToDeleteFrom;
    for (let i = 0; i < _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++) {
      if (_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[i].getTasks().includes(taskToDelete)) {
        projectToDeleteFrom = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[i];
        break;
      }
    }
    if (projectToDeleteFrom !== undefined) {
      projectToDeleteFrom.removeTask(taskToDelete);
    }
    project.removeTask(taskToDelete);

    renderTasksView(e);
    renderTasks(currProject);
  }

  function showAll(e) {
    resetFilters();

    const allTab = document.querySelector('.all');
    allTab.style.backgroundColor = componentColor;

    const allTasks = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.flatMap((project) => project.tasks);
    if (allTasksList === undefined) {
      allTasksList = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', allTasks);
    } else {
      const newTasks = allTasks.filter((task) => !allTasksList.getTasks().includes(task));
      console.log(newTasks);
      allTasksList.getTasks().push(...newTasks);
    }
    // updateSelectedProject();
    resetSelectedProject();
    resetProjects();
    renderProjects();
    currProject = allTasksList;
    renderTasksView(e);
    renderTasks(currProject);
  }
  selectAll.addEventListener('click', showAll);
  addProjectBtn.addEventListener('click', toggleAddProject);
  formStar.addEventListener('click', toggleFormStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', (e) => {
    // incorrectInput = false;
    addTask(e, currProject);
  });
  editBtn.addEventListener('click', (e) => {
    // incorrectInput = false;
    editTask(e, currProject);
  });

  projectForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (selected === '' && isProjectValid()) {
        addProject();
      } else {
        editProject();
        selected.classList.toggle('edited');
        selected = '';
      }

      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
    }
  });
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  taskForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    const introTask = new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Click me to learn more!',
      ' - Tasks can be expanded to view more detailed information about them. \n\n - Add notes, due dates and favorite status from the task form pane. \n\n - Thank you for checking out my project!',
      'Default',
      '',
      'true'
    );
    const introTaskTwo = new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Sidebar Info',
      ' - Tasks can be filtered by All, Today or Week. \n\n - Add new projects by pressing the (+) button. \n\n - Hover over existing projects to edit or delete them.',
      'Default',
      '',
      'true'
    );
    const introProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Default');
    currProject = introProject;
    _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.push(introProject);
    introProject.getTasks().push(introTask);
    introProject.getTasks().push(introTaskTwo);
    renderProjects();
    resetTasks();
    renderTasks(currProject);
    renderTasksView(e);
    // console.log(projects);
    updateSelectedProject();
    // document.querySelector('.project').style.backgroundColor = componentColor;
    // document.querySelector('.folder').className = 'folder material-symbols-rounded';
  });
}

//showAll function - After page reload and initiating All project, editing a task in original project adds a project to All (fix)
// Cannot add star when editing All
// Add Filter name on open task and remove folder icon


/***/ }),

/***/ "./src/modules/models/projectModel.js":
/*!********************************************!*\
  !*** ./src/modules/models/projectModel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = [];

class Project {
  constructor(name, tasks = []) {
    this.name = name;
    this.tasks = tasks;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(taskToDelete) {
    const index = this.tasks.findIndex((task) => task.title === taskToDelete.title);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}


/***/ }),

/***/ "./src/modules/models/taskModel.js":
/*!*****************************************!*\
  !*** ./src/modules/models/taskModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, note, project, date, isStarred = false, isComplete = false) {
    this.title = title;
    this.note = note;
    this.project = project;
    this.date = date;
    this.isStarred = isStarred;
    this.isComplete = isComplete;
  }

  getTitle() {
    return this.title;
  }

  getProject() {
    return this.project;
  }

  getIsStarred() {
    return this.isStarred;
  }

  getIsComplete() {
    return this.isComplete;
  }
}


/***/ }),

/***/ "./src/modules/views/projectView.js":
/*!******************************************!*\
  !*** ./src/modules/views/projectView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _models_projectModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/projectModel */ "./src/modules/models/projectModel.js");


function createProject(project) {
  const div = () => document.createElement('div');
  const text = document.createElement('p');
  const icon = () => document.createElement('i');

  const wrapper = div();
  wrapper.className = 'project';
  wrapper.setAttribute('data-id', _models_projectModel__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project));
  text.className = 'project-name';
  text.textContent = project.name;
  const folder = icon();
  folder.classList.add('fa-regular', 'fa-folder');
  // folder.textContent = 'folder';
  const group = div();
  group.className = 'project-btn-grp';
  const edit = icon();
  edit.classList.add('options', 'edit-p', 'material-symbols-rounded');
  edit.textContent = 'edit';
  const trash = icon();
  trash.classList.add('options', 'delete-p', 'material-symbols-rounded');
  trash.textContent = 'delete';

  const option = () => document.createElement('option');
  const pick = option();
  pick.value = project.name;
  pick.textContent = project.name;

  document.querySelector('select').appendChild(pick);
  document.querySelector('.project-grp').appendChild(wrapper);
  wrapper.append(folder, text, group);
  group.append(edit, trash);
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
function createTask(task, project) {
  const taskWrapper = document.createElement('div');
  const checkWrapper = document.createElement('div');
  const input = document.createElement('input');
  const checkmark = document.createElement('i');
  const title = document.createElement('p');

  const actions = document.createElement('div');
  const edit = document.createElement('i');
  const trash = document.createElement('i');
  const star = document.createElement('i');

  taskWrapper.setAttribute('data-id', project.indexOf(task));
  taskWrapper.classList.add('task');
  checkWrapper.classList.add('checkmark');
  input.type = 'checkbox';
  input.classList.add('hide-check');
  if (task.isComplete) {
    checkmark.classList.add('fa-solid', 'fa-circle-check');
  } else checkmark.classList.add('fa-regular', 'fa-circle');
  checkmark.classList.add('check');
  title.classList.add('task-title');
  title.textContent = task.title;
  actions.classList.add('actions');
  edit.classList.add('options', 'edit', 'material-symbols-rounded');
  edit.textContent = 'edit';
  trash.classList.add('options', 'delete', 'material-symbols-rounded');
  trash.textContent = 'delete';
  star.classList.add('fa-regular', 'fa-star');

  taskWrapper.append(checkWrapper, title, actions);
  checkWrapper.append(input, checkmark);
  actions.append(edit, trash, star);

  return taskWrapper;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLHdCQUF3Qix1QkFBdUIsdUJBQXVCLDBCQUEwQixvQkFBb0IsMkJBQTJCLHlCQUF5QixvQ0FBb0MscUNBQXFDLHVDQUF1Qyw2QkFBNkIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLG9CQUFvQiwyQkFBMkIseUJBQXlCLGtDQUFrQyxtQ0FBbUMsMENBQTBDLE9BQU8sY0FBYyxlQUFlLDJCQUEyQiwyQ0FBMkMsdUJBQXVCLFVBQVUsc0NBQXNDLG9CQUFvQix5QkFBeUIsOEJBQThCLGFBQWEsd0JBQXdCLGFBQWEsc0JBQXNCLCtCQUErQixvQkFBb0IsdUJBQXVCLHFCQUFxQixnREFBZ0QsaUNBQWlDLGtEQUFrRCxtQkFBbUIsMEJBQTBCLHlCQUF5Qix1QkFBdUIseUNBQXlDLDRCQUE0QixxQkFBcUIsZ0JBQWdCLHFCQUFxQixtQkFBbUIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsaUJBQWlCLG1CQUFtQixrQkFBa0Isc0JBQXNCLCtCQUErQiw0QkFBNEIseUJBQXlCLHdFQUF3RSx3QkFBd0Isb0NBQW9DLDZFQUE2RSxZQUFZLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsZUFBZSw0QkFBNEIsc0JBQXNCLHFCQUFxQixpQkFBaUIsbUNBQW1DLHNGQUFzRiw0QkFBNEIsb0NBQW9DLDZDQUE2QyxnQkFBZ0IscUJBQXFCLGFBQWEsb0JBQW9CLFlBQVksa0JBQWtCLHNCQUFzQiw0QkFBNEIsY0FBYyxxQkFBcUIsMkJBQTJCLDRCQUE0Qiw0QkFBNEIscUNBQXFDLDRCQUE0Qiw4QkFBOEIseUNBQXlDLG9DQUFvQywwQkFBMEIsb0JBQW9CLG1CQUFtQix3RkFBd0YsNEJBQTRCLDBCQUEwQiwwQkFBMEIscUJBQXFCLG9DQUFvQyxtQkFBbUIsb0JBQW9CLCtCQUErQixnQ0FBZ0MsOEJBQThCLCtCQUErQix1QkFBdUIsMENBQTBDLHVCQUF1Qix3QkFBd0IsOERBQThELHFCQUFxQiwyQkFBMkIsMkJBQTJCLDRCQUE0QixzRUFBc0UsOEJBQThCLHNFQUFzRSw0QkFBNEIsaUNBQWlDLG1FQUFtRSwwQkFBMEIsd0NBQXdDLHNCQUFzQix5Q0FBeUMsNENBQTRDLHVCQUF1Qiw0QkFBNEIsMEJBQTBCLHlDQUF5QyxzREFBc0QsZ0NBQWdDLGtDQUFrQyxtREFBbUQsbUNBQW1DLHlDQUF5QywyREFBMkQsb0NBQW9DLGlDQUFpQyxnQkFBZ0Isc0JBQXNCLCtCQUErQix5QkFBeUIsb0NBQW9DLDJCQUEyQiw0QkFBNEIsc0JBQXNCLCtDQUErQywwQkFBMEIsZ0NBQWdDLHNCQUFzQixxQkFBcUIscUJBQXFCLHlCQUF5Qiw4QkFBOEIsMENBQTBDLGlDQUFpQyxnREFBZ0Qsc0JBQXNCLCtCQUErQixtREFBbUQsNEJBQTRCLDBCQUEwQix1REFBdUQsOEJBQThCLDhEQUE4RCx5QkFBeUIsNkRBQTZELGdDQUFnQywrREFBK0QsZ0NBQWdDLGtFQUFrRSx1QkFBdUIscUNBQXFDLG9CQUFvQixxQkFBcUIsNkJBQTZCLCtCQUErQixxQkFBcUIsc0JBQXNCLGdDQUFnQywyQkFBMkIsNENBQTRDLDRCQUE0QiwrQkFBK0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsMkJBQTJCLG9HQUFvRyx1QkFBdUIsa0NBQWtDLHNCQUFzQixpQ0FBaUMsOENBQThDLG1DQUFtQyx3QkFBd0Isa0NBQWtDLDJCQUEyQiwwQkFBMEIsOEJBQThCLDBDQUEwQyw0QkFBNEIscUJBQXFCLDhCQUE4Qix1QkFBdUIsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsNkNBQTZDLHlDQUF5Qyx3REFBd0QsNEJBQTRCLHVEQUF1RCwyQkFBMkIseUJBQXlCLDJDQUEyQyxnRUFBZ0Usc0NBQXNDLG1IQUFtSCx5QkFBeUIsNEJBQTRCLDBCQUEwQixrQ0FBa0MsOENBQThDLHlCQUF5Qix5QkFBeUIsOEJBQThCLDRCQUE0Qiw2QkFBNkIsOEJBQThCLGlDQUFpQyxrQ0FBa0MsK0JBQStCLG1FQUFtRSxnQ0FBZ0MsNkRBQTZELGdDQUFnQyxrREFBa0QsbURBQW1ELDhJQUE4SSwyQ0FBMkMsMkJBQTJCLHFEQUFxRCx1QkFBdUIsMEJBQTBCLGdDQUFnQyxzQkFBc0IsNkJBQTZCLGdDQUFnQyxnRUFBZ0UseUJBQXlCLDJCQUEyQiw0QkFBNEIsb0NBQW9DLDREQUE0RCw4QkFBOEIsbUVBQW1FLDJCQUEyQixpRUFBaUUseUNBQXlDLGtDQUFrQyx3QkFBd0IsK0NBQStDLDhCQUE4QixzQkFBc0Isd0JBQXdCLG1DQUFtQyw4REFBOEQsK0JBQStCLHVEQUF1RCwyQkFBMkIsaUVBQWlFLDBCQUEwQiwyQ0FBMkMsZ0NBQWdDLHdCQUF3Qix5REFBeUQseUJBQXlCLG9FQUFvRSx3QkFBd0Isb0NBQW9DLHlHQUF5RyxrSEFBa0gsMERBQTBELDRCQUE0Qiw2QkFBNkIsK0JBQStCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLDJDQUEyQyxrRUFBa0Usc0NBQXNDLG1FQUFtRSxvREFBb0QsNkRBQTZELDhCQUE4QiwwREFBMEQsMkNBQTJDLDREQUE0RCw2QkFBNkIsNEJBQTRCLDJEQUEyRCwwQ0FBMEMseUJBQXlCLGtDQUFrQyw4QkFBOEIsNkRBQTZELHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHlCQUF5Qiw4QkFBOEIsNEJBQTRCLGtDQUFrQyx5Q0FBeUMsNkZBQTZGLDZEQUE2RCwyQ0FBMkMscUVBQXFFLHVDQUF1QyxzRUFBc0UsdUNBQXVDLGtDQUFrQyx3QkFBd0IsaURBQWlELHdCQUF3QixpQ0FBaUMsc0JBQXNCLDhCQUE4QixrRUFBa0Usa0NBQWtDLGlGQUFpRiw4QkFBOEIscUZBQXFGLG9DQUFvQyxxRkFBcUYsa0NBQWtDLHNFQUFzRSwwQkFBMEIsMkNBQTJDLCtCQUErQixpRkFBaUYsOEJBQThCLHNDQUFzQyxpRUFBaUUsb0NBQW9DLGtDQUFrQyxzREFBc0Qsd0JBQXdCLHVDQUF1Qyx5QkFBeUIsK0JBQStCLGtDQUFrQywrREFBK0Qsb0NBQW9DLDhEQUE4RCxxQ0FBcUMsMkJBQTJCLDRCQUE0QixrQ0FBa0MseUJBQXlCLCtCQUErQiwyREFBMkQsNkJBQTZCLHdCQUF3QixnQ0FBZ0MsbUVBQW1FLDZCQUE2QixxQ0FBcUMsMEJBQTBCLDZDQUE2QywyREFBMkQsMEJBQTBCLGtDQUFrQyx3RUFBd0Usc0NBQXNDLDhEQUE4RCwrQkFBK0IsMEVBQTBFLDRDQUE0QywyQkFBMkIsb0NBQW9DLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLHFCQUFxQixxQkFBcUIsNEJBQTRCLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDhCQUE4QixxQ0FBcUMseUZBQXlGLHFDQUFxQywyREFBMkQsd0NBQXdDLG1DQUFtQyx5Q0FBeUMsbUNBQW1DLHFCQUFxQixpREFBaUQsc0JBQXNCLHlDQUF5QywwQkFBMEIsUUFBUSxpQ0FBaUMsVUFBVSxzQ0FBc0Msb0JBQW9CLHlDQUF5QyxxQkFBcUIsaURBQWlELDBCQUEwQixRQUFRLHFDQUFxQyxVQUFVLG1DQUFtQyx5QkFBeUIsVUFBVSxvQ0FBb0MsU0FBUyxrRkFBa0YsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsaUJBQWlCLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxhQUFhLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLGVBQWUsTUFBTSxVQUFVLGFBQWEsWUFBWSxZQUFZLGdCQUFnQixVQUFVLG1CQUFtQixTQUFTLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLFFBQVEsZ0JBQWdCLE9BQU8sbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsTUFBTSxhQUFhLFlBQVksZUFBZSxNQUFNLGFBQWEsY0FBYyxhQUFhLGFBQWEsa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxlQUFlLE1BQU0sYUFBYSxjQUFjLGtCQUFrQixNQUFNLGlCQUFpQixPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLGVBQWUsUUFBUSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsUUFBUSxrQkFBa0IsUUFBUSxhQUFhLGtCQUFrQixRQUFRLGdCQUFnQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sV0FBVyxZQUFZLFdBQVcsaUJBQWlCLE9BQU8sY0FBYyxtQkFBbUIsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sV0FBVyxVQUFVLFlBQVksa0JBQWtCLE9BQU8sZ0JBQWdCLFFBQVEsZ0JBQWdCLE9BQU8sV0FBVyxpQkFBaUIsU0FBUyxnQkFBZ0IsT0FBTyxXQUFXLGlCQUFpQixPQUFPLGNBQWMsWUFBWSxZQUFZLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsbUJBQW1CLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLGlCQUFpQixPQUFPLGtCQUFrQixRQUFRLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxtQkFBbUIsUUFBUSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxpQkFBaUIsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTyxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLGlCQUFpQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsZ0JBQWdCLE9BQU8sYUFBYSxXQUFXLFlBQVksZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGNBQWMsYUFBYSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksV0FBVyxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksa0JBQWtCLE9BQU8sV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGtCQUFrQixPQUFPLFdBQVcsYUFBYSxZQUFZLFlBQVksa0JBQWtCLE9BQU8sbUJBQW1CLE9BQU8sZUFBZSxhQUFhLFVBQVUsWUFBWSxXQUFXLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxXQUFXLGlCQUFpQixPQUFPLG1CQUFtQixPQUFPLGtCQUFrQixPQUFPLGNBQWMsWUFBWSxhQUFhLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsY0FBYyxpQkFBaUIsZUFBZSxhQUFhLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxLQUFLLHVFQUF1RSwyQkFBMkIsMEJBQTBCLDBCQUEwQiwrQkFBK0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsTUFBTSw0QkFBNEIseUJBQXlCLFlBQVksdUJBQXVCLHVCQUF1QiwwQkFBMEIscUJBQXFCLFlBQVksMkJBQTJCLHlCQUF5QixvQ0FBb0MscUNBQXFDLHFDQUFxQyxHQUFHLDZCQUE2Qix3QkFBd0IsdUJBQXVCLHdCQUF3QixVQUFVLDBCQUEwQixvQkFBb0IsMkJBQTJCLHlCQUF5QixrQ0FBa0MsbUNBQW1DLHdDQUF3QyxHQUFHLDZCQUE2QiwyQkFBMkIsMkJBQTJCLGlDQUFpQyxxQkFBcUIsbUNBQW1DLCtCQUErQiwrQkFBK0IsaUNBQWlDLGlDQUFpQywwQkFBMEIsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsb0JBQW9CLDJCQUEyQix5QkFBeUIsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLDJDQUEyQyxxQkFBcUIsNkJBQTZCLEdBQUcsUUFBUSxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxrQkFBa0IsZUFBZSxzQkFBc0IsS0FBSyxRQUFRLHNCQUFzQixLQUFLLFFBQVEsc0JBQXNCLHlCQUF5QixvQkFBb0IsdUJBQXVCLDJCQUEyQixtQkFBbUIsS0FBSyw4QkFBOEIsMEJBQTBCLGVBQWUsbUNBQW1DLG1CQUFtQiwwQkFBMEIseUJBQXlCLHVCQUF1QixtQ0FBbUMsc0JBQXNCLG1CQUFtQixLQUFLLFdBQVcsbUJBQW1CLEtBQUssY0FBYyxvQkFBb0IsMEJBQTBCLHdCQUF3QixLQUFLLFlBQVksbUJBQW1CLGtCQUFrQixzQkFBc0IsK0JBQStCLDRCQUE0Qix1QkFBdUIsS0FBSyxnRUFBZ0Usc0JBQXNCLEtBQUssK0JBQStCLDJFQUEyRSxLQUFLLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsbUJBQW1CLFFBQVEsc0JBQXNCLDJCQUEyQixzQkFBc0IsbUJBQW1CLEtBQUssVUFBVSw2QkFBNkIsMEVBQTBFLDRCQUE0QixvQ0FBb0MsMkNBQTJDLEtBQUssU0FBUyxtQkFBbUIsS0FBSyxHQUFHLFdBQVcsa0JBQWtCLEdBQUcsVUFBVSxrQkFBa0Isc0JBQXNCLDRCQUE0QixjQUFjLG1CQUFtQixjQUFjLGVBQWUsd0JBQXdCLDhCQUE4QixxQ0FBcUMsT0FBTyxnQkFBZ0IsOEJBQThCLE9BQU8sS0FBSywyQkFBMkIsOEJBQThCLDBCQUEwQixvQkFBb0IsbUJBQW1CLHNGQUFzRiw2R0FBNkcsdURBQXVELHlKQUF5SiwrR0FBK0csS0FBSyxxQkFBcUIsMEJBQTBCLHdCQUF3QixLQUFLLGNBQWMsOEJBQThCLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQiw0QkFBNEIsT0FBTyxlQUFlLHFCQUFxQixtQ0FBbUMsa0JBQWtCLDBCQUEwQix1QkFBdUIsc0JBQXNCLFNBQVMsT0FBTyw4QkFBOEIscUJBQXFCLDJCQUEyQiwyQkFBMkIsMEJBQTBCLFdBQVcsNEJBQTRCLFNBQVMsYUFBYSw0QkFBNEIsK0JBQStCLFNBQVMsT0FBTyxtQ0FBbUMsd0JBQXdCLE9BQU8sd0JBQXdCLHNCQUFzQix1Q0FBdUMsYUFBYSx1QkFBdUIsNEJBQTRCLDBCQUEwQix1Q0FBdUMsU0FBUyx1QkFBdUIsMEJBQTBCLGdDQUFnQyxTQUFTLGtCQUFrQixtQ0FBbUMsdUNBQXVDLG1CQUFtQiw0QkFBNEIsV0FBVyxTQUFTLE9BQU8saUJBQWlCLGdCQUFnQixzQkFBc0IsK0JBQStCLHVCQUF1QixPQUFPLG9CQUFvQiwyQkFBMkIsNEJBQTRCLG9CQUFvQixrQkFBa0Isd0JBQXdCLFNBQVMsT0FBTyxnQkFBZ0Isc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLGlCQUFpQiwrQkFBK0IsU0FBUyx1QkFBdUIsc0JBQXNCLDZCQUE2QixTQUFTLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGFBQWEsNEJBQTRCLFdBQVcsb0JBQW9CLHVCQUF1QixXQUFXLG1CQUFtQiw4QkFBOEIsV0FBVyxxQkFBcUIsOEJBQThCLFdBQVcsU0FBUyxpQkFBaUIsNEJBQTRCLHNCQUFzQix5QkFBeUIsYUFBYSxXQUFXLFNBQVMsT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsT0FBTyxlQUFlLHFCQUFxQixzQkFBc0IsZ0NBQWdDLHlCQUF5QixvQkFBb0IsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxjQUFjLG1CQUFtQix5QkFBeUIsb0RBQW9ELHFCQUFxQixPQUFPLGtCQUFrQixzQkFBc0IsK0JBQStCLG1CQUFtQiw2QkFBNkIsd0JBQXdCLGtDQUFrQywyQkFBMkIsMEJBQTBCLDRCQUE0QixTQUFTLGVBQWUsNEJBQTRCLHFCQUFxQiw4QkFBOEIsdUJBQXVCLDZCQUE2Qix3QkFBd0IsOEJBQThCLHVDQUF1QywwRkFBMEYsdUNBQXVDLHVCQUF1QiwwQkFBMEIsV0FBVyxzQkFBc0IsMkJBQTJCLHlCQUF5Qix5Q0FBeUMsc0JBQXNCLG9DQUFvQyxhQUFhLFdBQVcsaURBQWlELHlCQUF5Qiw0QkFBNEIsMEJBQTBCLGdDQUFnQyxXQUFXLGFBQWEseUJBQXlCLHlCQUF5Qiw4QkFBOEIsNEJBQTRCLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLDRDQUE0Qyw0QkFBNEIsNkJBQTZCLFdBQVcsb0NBQW9DLDhCQUE4QixXQUFXLDRCQUE0Qiw4QkFBOEIsV0FBVyxtQkFBbUIsMkNBQTJDLHNCQUFzQixrREFBa0QsNkNBQTZDLDJCQUEyQixlQUFlLDhCQUE4QiwrQkFBK0IsaUNBQWlDLDJDQUEyQyxvQkFBb0IsYUFBYSxXQUFXLG9CQUFvQix1QkFBdUIsMEJBQTBCLGdDQUFnQyxzQkFBc0IsNkJBQTZCLDhCQUE4QixzQkFBc0IseUJBQXlCLDJCQUEyQiw0QkFBNEIsa0NBQWtDLGFBQWEsa0JBQWtCLDRCQUE0QixhQUFhLGtCQUFrQixnQ0FBZ0MsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsYUFBYSx1QkFBdUIsaUNBQWlDLGlDQUFpQyxhQUFhLFdBQVcsU0FBUyxPQUFPLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QixzQkFBc0Isd0JBQXdCLGlDQUFpQyx3QkFBd0IsNkJBQTZCLFdBQVcsaUJBQWlCLHlCQUF5QixXQUFXLDJCQUEyQiwwQkFBMEIsMkNBQTJDLGdDQUFnQyxzQkFBc0IsV0FBVyxtQkFBbUIsdUJBQXVCLFdBQVcsOEJBQThCLHdCQUF3QixrQ0FBa0Msa0RBQWtELCtIQUErSCxhQUFhLFdBQVcsc0JBQXNCLDRCQUE0Qiw2QkFBNkIsK0JBQStCLGlDQUFpQyx3QkFBd0IsMEJBQTBCLG9DQUFvQyx5Q0FBeUMscUJBQXFCLGlDQUFpQyxvQ0FBb0MsYUFBYSxzQkFBc0Isa0RBQWtELGFBQWEsV0FBVyx1QkFBdUIsNEJBQTRCLFdBQVcsb0JBQW9CLGtDQUFrQyx5Q0FBeUMsV0FBVyx3QkFBd0IsNkJBQTZCLDBCQUEwQixXQUFXLHFCQUFxQixvQ0FBb0MseUJBQXlCLDRCQUE0Qiw0QkFBNEIsV0FBVyx5QkFBeUIseUJBQXlCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLDhCQUE4Qiw0QkFBNEIsNkJBQTZCLFlBQVksbUNBQW1DLGlGQUFpRiw2REFBNkQseUNBQXlDLHFCQUFxQixxQ0FBcUMsYUFBYSxzQkFBc0IscUNBQXFDLGFBQWEsV0FBVyxTQUFTLE9BQU8sa0JBQWtCLHNCQUFzQix3QkFBd0Isd0JBQXdCLGlDQUFpQyxzQkFBc0IsNEJBQTRCLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLDRCQUE0QixpQkFBaUIsa0NBQWtDLG1DQUFtQyxlQUFlLGlCQUFpQixnQ0FBZ0MsbUNBQW1DLGVBQWUsYUFBYSxXQUFXLGdDQUFnQywwQkFBMEIsMkNBQTJDLDZCQUE2Qix3QkFBd0IsOEJBQThCLDhCQUE4QixhQUFhLFdBQVcseUJBQXlCLG9DQUFvQyw2QkFBNkIsNENBQTRDLG1DQUFtQyw0RkFBNEYsZ0NBQWdDLFdBQVcsY0FBYyx3QkFBd0IsaUNBQWlDLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLFdBQVcsdUJBQXVCLDRCQUE0QixXQUFXLHNCQUFzQixnQ0FBZ0MsK0JBQStCLDJCQUEyQiw0QkFBNEIsa0NBQWtDLGdDQUFnQyx5QkFBeUIsNkJBQTZCLGlDQUFpQyxXQUFXLG1CQUFtQiw2QkFBNkIsd0JBQXdCLDhCQUE4QixXQUFXLDJCQUEyQiw2QkFBNkIscUNBQXFDLDBCQUEwQiwyQ0FBMkMsV0FBVyxtQkFBbUIsMEJBQTBCLGdDQUFnQyx3QkFBd0IsOEJBQThCLGFBQWEsV0FBVyxzQkFBc0IsNkJBQTZCLHVCQUF1QixzQ0FBc0MsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsc0NBQXNDLGFBQWEsV0FBVyxTQUFTLE9BQU8sZ0JBQWdCLHlCQUF5QixxQkFBcUIscUJBQXFCLDRCQUE0QixxQkFBcUIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsWUFBWSxzQ0FBc0MsK0JBQStCLDZFQUE2RSxxQ0FBcUMseURBQXlELG1CQUFtQixpQ0FBaUMsU0FBUyxrQkFBa0IsaUNBQWlDLFNBQVMsT0FBTyxLQUFLLEdBQUcscUJBQXFCLCtDQUErQyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyx3QkFBd0IsUUFBUSwrQkFBK0IsS0FBSyxVQUFVLGtDQUFrQyxLQUFLLEdBQUcsa0JBQWtCLHVDQUF1QyxHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyx3QkFBd0IsUUFBUSxtQ0FBbUMsS0FBSyxVQUFVLCtCQUErQixLQUFLLEdBQUcsdUJBQXVCLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxxQkFBcUI7QUFDOTdsQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNkk7QUFDN0k7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUl1RjtBQUMvRyxPQUFPLGlFQUFlLDZIQUFPLElBQUksb0lBQWMsR0FBRyxvSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNzQztBQUNvQjtBQUNoQjtBQUNNOztBQUVqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMkRBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBEQUFROztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFnQjtBQUNwQixNQUFNLDhEQUFhO0FBQ25CLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDREQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFhO0FBQ3pDO0FBQ0EsTUFBTSxrRUFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMERBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSx5REFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwrREFBYSxJQUFJLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQWEsSUFBSSxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksaUVBQWUsRUFBRTtBQUN6QyxVQUFVLDBEQUFRO0FBQ2xCLDhCQUE4QiwwREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixrRUFBZ0I7QUFDckM7QUFDQSx5QkFBeUIsNERBQU87QUFDaEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwwQkFBMEIseURBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBTztBQUNwQztBQUNBLElBQUksK0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcHNCTzs7QUFFUTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmtEOztBQUVuQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLGtFQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNtQjs7QUFFMUMsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdE1vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNlNGYwZmE7XFxuICAtLXByaW1hcnk6ICNmZjdjN2M7XFxuICAtLWRrLXRleHQ6ICMzMzQ2Njk7XFxuICAtLWRrLXN1YnRleHQ6ICM3YThhYTM7XFxuICAtLWNhcmQ6ICNlNmVlZjg7XFxuICAtLWNvbXBvbmVudC1zOiAjYzRjZGQxO1xcbiAgLS1jb21wb25lbnQ6ICNkM2RlZTM7XFxuICAtLWdyYWQtYmFzZTogcmdiKDI0NCwgMTI0LCAxMjQpO1xcbiAgLS1ncmFkaWVudC0xOiByZ2IoMjQ2LCAxMTgsIDExOCk7XFxuICAtLWdyYWRpZW50LTI6IHJnYigyNTAsIDE3NywgMTM1KTsgfVxcblxcbmh0bWxbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tYmctY29sb3I6ICMxMjEyMTU7XFxuICAtLXByaW1hcnk6ICM4ZDhmZDI7XFxuICAtLWRrLXRleHQ6ICNkZmUwZmI7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMxODE4MWM7XFxuICAtLWNvbXBvbmVudC1zOiAjNDU0MjU0O1xcbiAgLS1jb21wb25lbnQ6ICMyZjJkMzY7XFxuICAtLWdyYWQtYmFzZTogcmdiKDkwLCA1MSwgMjE3KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDg4LCA0NCwgMjMyKTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiYSgxMTksIDgxLCAyNDYsIDEpOyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgYm9keSBoMixcXG4gIGJvZHkgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gIGJvZHkgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNXB4OyB9XFxuICBib2R5IHAsXFxuICBib2R5IHNwYW4sXFxuICBib2R5IGksXFxuICBib2R5IHEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gIGJvZHkgaW5wdXQsXFxuICBib2R5IHRleHRhcmVhLFxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICByZXNpemU6IG5vbmU7IH1cXG4gIGJvZHkgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7IH1cXG4gIGJvZHkgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lOyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODsgfVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDMyNXB4OyB9XFxuICBoZWFkZXIgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgdmFyKC0tZ3JhZGllbnQtMSkgMCUsIHZhcigtLWdyYWRpZW50LTIpIDc1JSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgaGVhZGVyIGRpdiB7XFxuICAgIHdpZHRoOiA2MDBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgLmNhcmRzIC5vcHRpb25zOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyLFxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTV2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDsgfVxcbiAgLmNhcmRzIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgLmZhLXN0YXIge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgd2lkdGg6IDE4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIsXFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgcCxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtZ3JwIGk6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5mb2xkZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5kZWxldGUtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAuY2FyZHMgLnRhc2ssXFxuICAuY2FyZHMgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLm5vLXRhc2tzIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcms6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudC1zKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAub3B0aW9ucyxcXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIgLmFjdGlvbnMgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMge1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgc3BhbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZmEtc29saWQge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAjbm90ZSB7XFxuICAgICAgICAgIGhlaWdodDogMTV2aDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzIHtcXG4gICAgICAgICAgd2lkdGg6IDQ1JTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCA1cHggMCAxMHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoNTY1MCUpIGh1ZS1yb3RhdGUoMTc5ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDkzJSk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSg3MmRlZyk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN0YXJyZWQge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0bjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIgLmZhLXN0YXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGUge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJvdC1ociB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICAgIHdpZHRoOiA4OHB4O1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCA4cHggMTZweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMgLm9wZW4tZGF0ZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5idG4tZ3JvdXAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG4ge1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDVweCA1cHggMTVweCAwcHg7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcblxcbi5zbGlkZS10YXNrcy1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG4uc2xpZGUtdGFza3Mtb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKTsgfSB9XFxuXFxuLnNsaWRlLWZvcm0taW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgMC4xczsgfVxcblxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1SaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgdGV4dGNsaXAge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLG1CQUFXO0VBQ1gsa0JBQVU7RUFDVixrQkFBVTtFQUNWLHFCQUFhO0VBQ2IsZUFBTztFQUNQLHNCQUFjO0VBQ2Qsb0JBQVk7RUFDWiwrQkFBWTtFQUNaLGdDQUFhO0VBQ2IsZ0NBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFXO0VBQ1gsa0JBQVU7RUFDVixrQkFBVTtFQUNWLHFCQUFhO0VBQ2IsZUFBTztFQUNQLHNCQUFjO0VBQ2Qsb0JBQVk7RUFDWiw2QkFBWTtFQUNaLDhCQUFhO0VBQ2IsbUNBQWEsRUFBQTs7QUFvQmY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUNBM0J3QjtFQThCeEIsYUFBYSxFQUFBO0VBSmY7O0lBT0kscUJBaENvQixFQUFBO0VBeUJ4QjtJQVVJLGVBQWUsRUFBQTtFQVZuQjtJQWFJLGVBQWU7SUFDZix3QkFyQzBCO0lBc0MxQixhQUFhO0lBQ2IsZ0JBQWdCO0lBRWhCLFlBQVksRUFBQTtFQWxCaEI7Ozs7SUF5Qkksd0JBaEQwQixFQUFBO0VBdUI5Qjs7O0lBOEJJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0F0RHdCO0lBdUR4QixxQkEzRG9CO0lBNERwQixZQUFZLEVBQUE7RUFwQ2hCO0lBdUNJLFlBQVksRUFBQTtFQXZDaEI7SUEwQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNu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QUNFLHlCQUF5QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4vLyAgIC0tYmctY29sb3I6ICMxMDBmMTQ7XFxuLy8gICAtLXByaW1hcnk6ICNlODcwNzA7XFxuLy8gICAtLWRrLXRleHQ6ICNkMmQ4Zjc7XFxuLy8gICAtLWRrLXN1YnRleHQ6ICNkMmQ4ZjdhNjtcXG4vLyAgIC0tY2FyZDogIzE0MTMxOTtcXG4vLyAgIC0tY29tcG9uZW50LXM6ICMzNTMyNDA7XFxuLy8gICAtLWNvbXBvbmVudDogIzI0MjIyZDtcXG4vLyB9XFxuaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNlNGYwZmE7IC8vI2YzZWRlMzk0O1xcbiAgLS1wcmltYXJ5OiAjZmY3YzdjO1xcbiAgLS1kay10ZXh0OiAjMzM0NjY5O1xcbiAgLS1kay1zdWJ0ZXh0OiAjN2E4YWEzO1xcbiAgLS1jYXJkOiAjZTZlZWY4OyAvLyNmM2YwZTM4NDtcXG4gIC0tY29tcG9uZW50LXM6ICNjNGNkZDE7XFxuICAtLWNvbXBvbmVudDogI2QzZGVlMztcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMjQ0LCAxMjQsIDEyNCk7XFxuICAtLWdyYWRpZW50LTE6IHJnYigyNDYsIDExOCwgMTE4KTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbn1cXG5cXG5odG1sW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWJnLWNvbG9yOiAjMTIxMjE1O1xcbiAgLS1wcmltYXJ5OiAjOGQ4ZmQyO1xcbiAgLS1kay10ZXh0OiAjZGZlMGZiOyAvLyNkOWQ5ZTg7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMxODE4MWM7XFxuICAtLWNvbXBvbmVudC1zOiAjNDU0MjU0O1xcbiAgLS1jb21wb25lbnQ6ICMyZjJkMzY7XFxuICAtLWdyYWQtYmFzZTogcmdiKDkwLCA1MSwgMjE3KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDg4LCA0NCwgMjMyKTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiYSgxMTksIDgxLCAyNDYsIDEpO1xcbn1cXG4kYmctY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4kcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XFxuJGRrLXRleHQ6IHZhcigtLWRrLXRleHQpO1xcbiRkay1zdWJ0ZXh0OiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4kY2FyZDogdmFyKC0tY2FyZCk7XFxuJGNvbXBvbmVudC1zOiB2YXIoLS1jb21wb25lbnQtcyk7XFxuJGNvbXBvbmVudDogdmFyKC0tY29tcG9uZW50KTtcXG4kZ3JhZC1iYXNlOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiRncmFkaWVudC0xOiB2YXIoLS1ncmFkaWVudC0xKTtcXG4kZ3JhZGllbnQtMjogdmFyKC0tZ3JhZGllbnQtMik7XFxuLy8gJGJnLWNvbG9yOiAjZDJkOGY3YTY7XFxuLy8gJHByaW1hcnk6ICNlODcwNzA7XFxuLy8gJGRrLXRleHQ6ICNkMmQ4Zjc7XFxuLy8gJGRrLXN1YnRleHQ6ICNkMmQ4ZjdhNjtcXG4vLyAkY2FyZDogIzE0MTMxOTtcXG4vLyAkY29tcG9uZW50LXM6ICMzNTMyNDA7XFxuLy8gJGNvbXBvbmVudDogIzI0MjIyZDtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNTEzMTk7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODFkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICB9XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICB9XFxuXFxuICBwLFxcbiAgc3BhbixcXG4gIGksXFxuICBxIHtcXG4gICAgY29sb3I6ICRkay1zdWJ0ZXh0OyAvLyRwcmltYXJ5XFxuICB9XFxuICBpbnB1dCxcXG4gIHRleHRhcmVhLFxcbiAgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgfVxcbiAgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODtcXG4gIH1cXG59XFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA4dnc7XFxuICBoMSB7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1dnc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDMyNXB4O1xcbiAgfVxcbiAgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgJGdyYWRpZW50LTEgMCUsICRncmFkaWVudC0yIDc1JSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gIH1cXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDh2dztcXG4gIC5vcHRpb25zIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIH1cXG4gIH1cXG4gIC5zaWRlYmFyLFxcbiAgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgaGVpZ2h0OiA1NXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDIwcHggMjVweCAtNXB4LFxcbiAgICAvLyAgIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDEwcHggMTBweCAtNXB4O1xcbiAgICAvLyBib3gtc2hhZG93OiAwcHggNjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweCxcXG4gICAgLy8gICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDBweCAwcHggMHB4IDFweCBpbnNldDtcXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMTNweCAyN3B4IC01cHgsXFxuICAgIC8vICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA4cHggMTZweCAtOHB4O1xcbiAgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC5maWx0ZXJzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB9XFxuICAgIC5maWx0ZXIge1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAuZmEtc3RhciB7XFxuICAgICAgICAvLyBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlcixcXG4gICAgLnByb2plY3Qge1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIGkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlcixcXG4gICAgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIH1cXG5cXG4gICAgICAucGx1czpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgfVxcbiAgICAgIC5yb3RhdGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdHMge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaTpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLy8gdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLmZvbGRlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB9XFxuICAgICAgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICB9XFxuICAgICAgLnByb2plY3QtYnRuLWdycCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmVkaXQtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZS1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgLnByb2plY3QtYnRuLWdycCB7XFxuICAgICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgICNwcm9qZWN0LW5hbWUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIH1cXG4gICAgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAuZmEtZ2l0aHViIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC50YXNrLFxcbiAgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuY29udGVudCB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAudC13cmFwcGVyLFxcbiAgICAuZi13cmFwcGVyLFxcbiAgICAuby13cmFwcGVyIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC5uby10YXNrcyB7XFxuICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgICAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAzcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAycHggMnB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZmEtY2lyY2xlLFxcbiAgICAgICAgLmZhLWNpcmNsZS1jaGVjayB7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgcGFkZGluZzogMCAxNHB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgcCB7XFxuICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgICAgICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICAgIC5vcHRpb25zLFxcbiAgICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAvLyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgLy8gICB3aWR0aDogMThweDtcXG4gICAgICAgICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAvLyB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC8vIGkge1xcbiAgICAgICAgICAvLyAgIGNvbG9yOiAjOGE3ZmEyO1xcbiAgICAgICAgICAvLyB9XFxuICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZi13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIC50YXNrLWZvcm0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI25vdGUge1xcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgfVxcbiAgICAgICAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgICAgICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg1NCUpIHNhdHVyYXRlKDU2NTAlKSBodWUtcm90YXRlKDE3OWRlZylcXG4gICAgICAgICAgICAgIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoOTMlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLy8gY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSg3MmRlZyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnN0YXJyZWQge1xcbiAgICAgICAgICAvLyBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7IC8vJGJnLWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JhZC1iYXNlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG5cXG4gICAgICAgICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgICAvLyBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgLy8gY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xcblxcbiAgICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm5vdGUtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHggMCAxNnB4O1xcbiAgICAgICAgICAvLyBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAzcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAycHggMnB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgaHIge1xcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XFxuXFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI29wZW4tdGl0bGUge1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICB9XFxuICAgICAgICAjb3Blbi1ub3RlIHtcXG4gICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgICAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgICAgLy8gcGFkZGluZzogMHB4IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuYm90LWhyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgICAgd2lkdGg6IDg4cHg7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDhweCAxNnB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgLm9wZW4tZGF0ZSB7XFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDAgOHB4IDhweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogJGRrLXRleHQ7IC8vJGJnLWNvbG9yO1xcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDVweCA1cHggMTVweCAwcHg7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgIH1cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2xpZGUtdGFza3MtaW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzO1xcbn1cXG4uc2xpZGUtdGFza3Mtb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgdGFza1JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKTtcXG4gIH1cXG59XFxuLnNsaWRlLWZvcm0taW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgMC4xcztcXG59XFxuLnNsaWRlLWZvcm0tb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuQGtleWZyYW1lcyBmb3JtUmlnaHQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0ZXh0Y2xpcCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgVGFzayBmcm9tICcuL21vZGVscy90YXNrTW9kZWwnO1xuaW1wb3J0IFByb2plY3QsIHsgcHJvamVjdHMgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0TW9kZWwnO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi92aWV3cy90YXNrVmlldyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3ZpZXdzL3Byb2plY3RWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwQ29udHJvbGxlcigpIHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudC13cmFwcGVyJyk7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmYtd3JhcHBlcicpO1xuICBjb25zdCBvcGVuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdyYXBwZXInKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtcGx1cycpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKTtcbiAgY29uc3QgcHJvamVjdHNGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgY29uc3QgZm9ybVN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKTtcbiAgY29uc3QgcHJvamVjdEdycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgY29uc3Qgc2VsZWN0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuXG4gIGNvbnN0IGNvbXBvbmVudENvbG9yID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbXBvbmVudCcpO1xuICBjb25zdCB0ZXh0Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tZGstdGV4dCcpO1xuICBjb25zdCBzdWJ0ZXh0Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tZGstc3VidGV4dCcpO1xuICBjb25zdCBjYXJkQ29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tY2FyZCcpO1xuXG4gIGxldCB0YXNrSW5kZXggPSAwO1xuICBsZXQgcHJvamVjdEluZGV4O1xuICBsZXQgY3VyclByb2plY3Q7XG4gIGxldCBhbGxUYXNrc0xpc3Q7XG4gIGxldCBzZWxlY3RlZCA9ICcnO1xuXG4gIC8vIGFuaW1hdGlvbnNcbiAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCAwLjFzJztcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc1JpZ2h0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBzaG93VGFza3NMZWZ0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IG9wZW5UYXNrID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICBvcGVuV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICAvLyB2YWxpZGl0eVxuICBmdW5jdGlvbiBpc1Byb2plY3RWYWxpZCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghbmFtZS52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Byb2plY3QgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUudmFsdWUpKSB7XG4gICAgICBuYW1lLnNldEN1c3RvbVZhbGlkaXR5KCdQcm9qZWN0IGV4aXN0cycpO1xuICAgICAgbmFtZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBpc1Rhc2tWYWxpZCgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBpZiAoIXRhc2sudmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICB0YXNrLnNldEN1c3RvbVZhbGlkaXR5KCdUYXNrIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgdGFzay5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGlmIChwcm9qZWN0LmdldFRhc2tzKCkuZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gdGFzay52YWx1ZSkpIHtcbiAgICAvLyAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAvLyAgIHRhc2sucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0b2dnbGVzXG4gIGNvbnN0IHRvZ2dsZUJ0blRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10aXRsZS1oZWFkZXInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IChlLCBwcm9qZWN0KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0YXNrSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcbiAgICB0YXNrLmlzQ29tcGxldGUgPSAhdGFzay5pc0NvbXBsZXRlO1xuXG4gICAgY29uc3QgY2hlY2ttYXJrQ2xhc3NlcyA9IFsnZmEtcmVndWxhcicsICdmYS1zb2xpZCcsICdmYS1jaXJjbGUnLCAnZmEtY2lyY2xlLWNoZWNrJ107XG4gICAgY2hlY2ttYXJrQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnLmRlbGV0ZScpKTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmFjdGlvbnMnKTtcblxuICAgIGlmICh0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gJycgJiYgdGl0bGUuc3R5bGUuY29sb3IgIT09ICcjZDJkOGY3YTYnKSB7XG4gICAgICB0aXRsZS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgIGFjdGlvbnMuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgIGFjdGlvbnMuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgYWN0aW9ucy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUZvcm1TdGFyID0gKCkgPT4ge1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJyZWQnKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJyk7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtc29saWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlUGx1c0J0biA9ICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3BsdXMnKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgcHJvamVjdEZvcm0uaGlkZGVuID0gIXByb2plY3RGb3JtLmhpZGRlbjtcbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHByb2plY3RHcnAuZmlyc3RDaGlsZCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICAgIGlmIChwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHNlbGVjdGVkID0gJyc7XG4gICAgICByZXNldFByb2plY3RzKCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiB0b2dnbGVFZGl0UHJvamVjdChlKSB7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSAhcHJvamVjdEZvcm0uaGlkZGVuO1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIC8vIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYnRuLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RHcnAuaW5zZXJ0QmVmb3JlKHByb2plY3RGb3JtLCBwcm9qZWN0R3JwLmZpcnN0Q2hpbGQpO1xuICAgICAgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICBzZWxlY3RlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgIHNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXRzXG4gIGZ1bmN0aW9uIHJlc2V0U3RhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKS5jbGFzc05hbWUgPSAnYWRkLXN0YXIgZmEtcmVndWxhciBmYS1zdGFyJztcbiAgfVxuICBmdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5yZXNldCgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICBjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpO1xuICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICAvLyBmb2xkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuICAgICAgLy8gZm9sZGVyLnRleHRDb250ZW50ID0gJ2ZvbGRlcic7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlc1xuICBjb25zdCB1cGRhdGVPcGVuVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi10aXRsZScpO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1ub3RlJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKTtcbiAgICAvLyBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcblxuICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1zdGFyJyk7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5nZXRJc1N0YXJyZWQoKTtcbiAgICBjb25zb2xlLmxvZyhpc1N0YXJyZWQpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY3VyclByb2plY3QudGFza3NbaWRdLnRpdGxlO1xuICAgIG5vdGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0ubm90ZTtcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gY3VyclByb2plY3QudGFza3NbaWRdLnByb2plY3Q7XG4gICAgaWYgKGlzU3RhcnJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Ugc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH07XG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBpID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpJyk7XG4gICAgICBjb25zdCBwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICBpZiAocC50ZXh0Q29udGVudCA9PT0gY3VyclByb2plY3QubmFtZSkge1xuICAgICAgICBwLmNsb3Nlc3QoJy5wcm9qZWN0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyRjJEMzUnO1xuICAgICAgICBpLmNsb3Nlc3QoJy5mb2xkZXInKS5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKSB7XG4gICAgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdBbGwnKSB7XG4gICAgICBjb25zdCBhbGxUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgICAvLyBlLnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgICBhbGxUYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza3NPcGVuVmlldyA9IChlKSA9PiB7XG4gICAgaGlkZVRhc2tzTGVmdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuVGFzaygpO1xuICAgICAgdXBkYXRlT3BlblRhc2soZSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyRm9ybVZpZXcgPSAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgLy8gICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAvLyAgIC8vIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIC8vICAgLy8gdGVtcFByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIH0pO1xuXG4gICAgaGlkZVRhc2tzUmlnaHQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNob3dGb3JtKCk7XG4gICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyRWRpdFZpZXcgPSAoZSwgcHJvamVjdCkgPT4ge1xuICAgIHRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS50aXRsZTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5ub3RlO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QubmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgICAvLyBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgIC5jbG9zZXN0KCcudGFzaycpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScpO1xuXG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgaW4gdGhlIGBwcm9qZWN0c2AgYXJyYXlcbiAgICAvLyBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBwcm9qZWN0TmFtZTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdLmdldElzU3RhcnJlZCgpKTtcbiAgICBpZiAocHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0uZ2V0SXNTdGFycmVkKCkpIHtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXJyZWQnKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXJlZ3VsYXInKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdzdGFycmVkJyk7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zb2xpZCcpO1xuICAgIH1cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gICB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH0pO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaGlkZVRhc2tzUmlnaHQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCByZW5kZXJUYXNrc1ZpZXcgPSAoZSkgPT4ge1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICB9KTtcbiAgICBjaGVja21hcmtzLmZvckVhY2goKGNoZWNrbWFyaykgPT4ge1xuICAgICAgY2hlY2ttYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW5kZXJFZGl0VmlldyhlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjNzJztcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkZWxldGVUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QpIHtcbiAgICByZXNldFRhc2tzKCk7XG4gICAgaWYgKHByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MgcCcpLnRleHRDb250ZW50ID0gJ05vIHRhc2tzIGZvdW5kJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyBwJykuY2xhc3NOYW1lID0gJ25vLXRhc2tzJztcbiAgICB9XG5cbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBjcmVhdGVUYXNrKHRhc2ssIHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmQodGFza1dyYXBwZXIpO1xuICAgICAgLy8vL1xuICAgICAgLy8gdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgICAgIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCB0YXNrLnByb2plY3QpO1xuICAgICAgLy8vL1xuICAgICAgaWYgKHRhc2suZ2V0SXNTdGFycmVkKCkpIHtcbiAgICAgICAgdGFza1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmZhLXN0YXInKS5jbGFzc0xpc3QucmVwbGFjZSgnZmEtcmVndWxhcicsICdmYS1zb2xpZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKTtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmFjdGlvbnMnKTtcbiAgICAgICAgY29uc3QgY2hlY2ttYXJrID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlLWNoZWNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbWFyayk7XG4gICAgICAgIC8vYWRkIHNlbGVjdG9yIGZvciBjbG9zZXN0IGNoZWNrbWFyaywgdG9nZ2xlIHN0YXR1c1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYXJkQ29sb3I7XG5cbiAgICAgICAgYWN0aW9ucy5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgICAgICBhY3Rpb25zLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkVGFza0hhbmRsZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfSk7XG4gICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcblxuICAgIGNvbnN0IGZvbGRlciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmZvbGRlcicpO1xuICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG5cbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcblxuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KGUpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFByb2plY3RIYW5kbGVycygpIHtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtcCcpO1xuXG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuXG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0UHJvamVjdENsaWNrKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAvLyByZXNldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGlmICghaXNQcm9qZWN0VmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBzdG9yZVByb2plY3QoKTtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSk7XG4gICAgaWYgKCFleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgIHByb2plY3RzLnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgICBjdXJyUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgICByZXNldEZvcm0oKTtcbiAgICB9XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICB9XG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFuYW1lLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgbmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIG5hbWUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWUgPSBuYW1lLnZhbHVlO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGZvcm1TdGFyLmNsYXNzTGlzdC5jb250YWlucygnc3RhcnJlZCcpO1xuXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yZVRhc2soKTtcbiAgICBjb25zdCB0ZW1wID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHByb2plY3RzRm9ybUlucHV0LnZhbHVlKTtcbiAgICBpZiAocHJvamVjdHNGb3JtSW5wdXQudmFsdWUgIT09IHByb2plY3QubmFtZSAmJiBwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRlbXAuZ2V0VGFza3MoKS5wdXNoKG5ld1Rhc2spO1xuICAgICAgY3VyclByb2plY3QgPSB0ZW1wO1xuICAgIH0gZWxzZSBwcm9qZWN0LmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG4gIGZ1bmN0aW9uIGVkaXRUYXNrKGUsIHByb2plY3QpIHtcbiAgICBpZiAoIWlzVGFza1ZhbGlkKCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QubmFtZSk7XG4gICAgY29uc3QgZWRpdGVkVGFzayA9IHN0b3JlVGFzaygpO1xuICAgIGNvbnN0IHRlbXAgPSBwcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdHNGb3JtSW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgIGNvbnNvbGUubG9nKGN1cnJQcm9qZWN0Lm5hbWUpO1xuICAgIGlmIChwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSAhPT0gcHJvamVjdC5uYW1lICYmIHByb2plY3RzRm9ybUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc29sZS5sb2codGFza0luZGV4KTtcbiAgICAgIHRlbXAuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTsgLy9wdXNoKGVkaXRlZFRhc2spXG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBjdXJyUHJvamVjdCA9IHRlbXA7XG4gICAgfSBlbHNlIHByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTtcblxuICAgIC8vIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF07XG5cbiAgICAvLyBGaW5kIHByb2plY3QgdGFzayBvcmlnaW5hbGx5IGNhbWUgZnJvbVxuICAgIGxldCBwcm9qZWN0VG9EZWxldGVGcm9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXRUYXNrcygpLmluY2x1ZGVzKHRhc2tUb0RlbGV0ZSkpIHtcbiAgICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbSA9IHByb2plY3RzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZUZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbS5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgfVxuICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpO1xuXG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dBbGwoZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuXG4gICAgY29uc3QgYWxsVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICAgIGFsbFRhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcblxuICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC50YXNrcyk7XG4gICAgaWYgKGFsbFRhc2tzTGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxUYXNrc0xpc3QgPSBuZXcgUHJvamVjdCgnQWxsJywgYWxsVGFza3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gIWFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLmluY2x1ZGVzKHRhc2spKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2tzKTtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnB1c2goLi4ubmV3VGFza3MpO1xuICAgIH1cbiAgICAvLyB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gIH1cbiAgc2VsZWN0QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0KTtcbiAgZm9ybVN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtU3Rhcik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJGb3JtVmlldyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gaW5jb3JyZWN0SW5wdXQgPSBmYWxzZTtcbiAgICBhZGRUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgfSk7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGluY29ycmVjdElucHV0ID0gZmFsc2U7XG4gICAgZWRpdFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcblxuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHNlbGVjdGVkID09PSAnJyAmJiBpc1Byb2plY3RWYWxpZCgpKSB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRQcm9qZWN0KCk7XG4gICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRlZCcpO1xuICAgICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gICAgY29uc3QgaW50cm9UYXNrID0gbmV3IFRhc2soXG4gICAgICAnQ2xpY2sgbWUgdG8gbGVhcm4gbW9yZSEnLFxuICAgICAgJyAtIFRhc2tzIGNhbiBiZSBleHBhbmRlZCB0byB2aWV3IG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlbS4gXFxuXFxuIC0gQWRkIG5vdGVzLCBkdWUgZGF0ZXMgYW5kIGZhdm9yaXRlIHN0YXR1cyBmcm9tIHRoZSB0YXNrIGZvcm0gcGFuZS4gXFxuXFxuIC0gVGhhbmsgeW91IGZvciBjaGVja2luZyBvdXQgbXkgcHJvamVjdCEnLFxuICAgICAgJ0RlZmF1bHQnLFxuICAgICAgJycsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIGNvbnN0IGludHJvVGFza1R3byA9IG5ldyBUYXNrKFxuICAgICAgJ1NpZGViYXIgSW5mbycsXG4gICAgICAnIC0gVGFza3MgY2FuIGJlIGZpbHRlcmVkIGJ5IEFsbCwgVG9kYXkgb3IgV2Vlay4gXFxuXFxuIC0gQWRkIG5ldyBwcm9qZWN0cyBieSBwcmVzc2luZyB0aGUgKCspIGJ1dHRvbi4gXFxuXFxuIC0gSG92ZXIgb3ZlciBleGlzdGluZyBwcm9qZWN0cyB0byBlZGl0IG9yIGRlbGV0ZSB0aGVtLicsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgY29uc3QgaW50cm9Qcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBjdXJyUHJvamVjdCA9IGludHJvUHJvamVjdDtcbiAgICBwcm9qZWN0cy5wdXNoKGludHJvUHJvamVjdCk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2spO1xuICAgIGludHJvUHJvamVjdC5nZXRUYXNrcygpLnB1c2goaW50cm9UYXNrVHdvKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXInKS5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG4gIH0pO1xufVxuXG4vL3Nob3dBbGwgZnVuY3Rpb24gLSBBZnRlciBwYWdlIHJlbG9hZCBhbmQgaW5pdGlhdGluZyBBbGwgcHJvamVjdCwgZWRpdGluZyBhIHRhc2sgaW4gb3JpZ2luYWwgcHJvamVjdCBhZGRzIGEgcHJvamVjdCB0byBBbGwgKGZpeClcbi8vIENhbm5vdCBhZGQgc3RhciB3aGVuIGVkaXRpbmcgQWxsXG4vLyBBZGQgRmlsdGVyIG5hbWUgb24gb3BlbiB0YXNrIGFuZCByZW1vdmUgZm9sZGVyIGljb25cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGFza3MgPSBbXSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUb0RlbGV0ZS50aXRsZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQgPSBmYWxzZSwgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNTdGFycmVkID0gaXNTdGFycmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIGdldElzU3RhcnJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N0YXJyZWQ7XG4gIH1cblxuICBnZXRJc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3RNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBkaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaWNvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBjb25zdCB3cmFwcGVyID0gZGl2KCk7XG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xuICB0ZXh0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW5hbWUnO1xuICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBjb25zdCBmb2xkZXIgPSBpY29uKCk7XG4gIGZvbGRlci5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLWZvbGRlcicpO1xuICAvLyBmb2xkZXIudGV4dENvbnRlbnQgPSAnZm9sZGVyJztcbiAgY29uc3QgZ3JvdXAgPSBkaXYoKTtcbiAgZ3JvdXAuY2xhc3NOYW1lID0gJ3Byb2plY3QtYnRuLWdycCc7XG4gIGNvbnN0IGVkaXQgPSBpY29uKCk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdlZGl0LXAnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIGNvbnN0IHRyYXNoID0gaWNvbigpO1xuICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2RlbGV0ZS1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gIGNvbnN0IG9wdGlvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBwaWNrID0gb3B0aW9uKCk7XG4gIHBpY2sudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIHBpY2sudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQocGljayk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB3cmFwcGVyLmFwcGVuZChmb2xkZXIsIHRleHQsIGdyb3VwKTtcbiAgZ3JvdXAuYXBwZW5kKGVkaXQsIHRyYXNoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaywgcHJvamVjdCkge1xuICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGVja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pbmRleE9mKHRhc2spKTtcbiAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBjaGVja1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlLWNoZWNrJyk7XG4gIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLWNoZWNrJyk7XG4gIH0gZWxzZSBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1jaXJjbGUnKTtcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2VkaXQnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZGVsZXRlJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtc3RhcicpO1xuXG4gIHRhc2tXcmFwcGVyLmFwcGVuZChjaGVja1dyYXBwZXIsIHRpdGxlLCBhY3Rpb25zKTtcbiAgY2hlY2tXcmFwcGVyLmFwcGVuZChpbnB1dCwgY2hlY2ttYXJrKTtcbiAgYWN0aW9ucy5hcHBlbmQoZWRpdCwgdHJhc2gsIHN0YXIpO1xuXG4gIHJldHVybiB0YXNrV3JhcHBlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgYXBwQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvYXBwJztcblxuYXBwQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9