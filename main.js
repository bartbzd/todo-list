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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(119, 81, 246);\n  --gradient-1: rgb(119, 81, 246);\n  --gradient-2: rgb(88, 44, 232); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: var(--bg-color);\n  height: 100vh; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 285px; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 75%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n  header div {\n    width: 600px; }\n\n.hidden {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-in-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 300px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out; }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i {\n        font-size: 14px; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 560px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none; }\n      .cards .content .t-wrapper .tasks {\n        overflow-x: hidden;\n        height: 40vh; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: var(--component);\n        transition: 0.2s ease-in-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .edit,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-in-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.2s;\n          padding-left: 8px; }\n          .cards .content .t-wrapper .task .actions .options {\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions .edit {\n            transition: 0.1s ease-in-out;\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%) contrast(93%); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-in-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.98); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px;\n          border-radius: 24px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 30vh;\n          overflow: scroll; }\n        .cards .content .o-wrapper .expand-view .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary);\n            font-weight: 500; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes textclip {\n  100% {\n    background-position: left; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// html[data-theme='light'] {\n//   --bg-color: #100f14;\n//   --primary: #e87070;\n//   --dk-text: #d2d8f7;\n//   --dk-subtext: #d2d8f7a6;\n//   --card: #141319;\n//   --component-s: #353240;\n//   --component: #24222d;\n// }\nhtml[data-theme='light'] {\n  --bg-color: #e4f0fa; //#f3ede394;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8; //#f3f0e384;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n}\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb; //#d9d9e8;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(119, 81, 246);\n  --gradient-1: rgb(119, 81, 246);\n  --gradient-2: rgb(88, 44, 232);\n}\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n// $bg-color: #d2d8f7a6;\n// $primary: #e87070;\n// $dk-text: #d2d8f7;\n// $dk-subtext: #d2d8f7a6;\n// $card: #141319;\n// $component-s: #353240;\n// $component: #24222d;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n  // border: 1px solid red;\n}\nbody {\n  background-color: $bg-color;\n  // background-color: #151319;\n  // background-color: #1a181d;\n  height: 100vh;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    // line-height: 25px;\n    height: 25px;\n  }\n\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext; //$primary\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n  }\n  input {\n    height: 35px;\n  }\n  textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 285px;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 75%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  div {\n    width: 600px;\n  }\n}\n.hidden {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  // flex-direction: row-reverse;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: 0.2s ease-in-out;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    //   rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n    // box-shadow: 0px 60px 60px rgba(0, 0, 0, 0.18);\n    // box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,\n    //   rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;\n    // box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n    //   rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filter {\n      height: 32px;\n      // background-color: $card;\n      .fa-star {\n        // height: 18px;\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n      i {\n        margin-right: 6px;\n      }\n\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out;\n      }\n\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i {\n        font-size: 14px;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      // width: 100%;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      // user-select: none;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 560px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none;\n      }\n      .tasks {\n        overflow-x: hidden;\n        height: 40vh;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: $component;\n        // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n        transition: 0.2s ease-in-out;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          // background-color: $component;\n          color: $dk-text;\n          overflow: hidden;\n        }\n\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .edit,\n            .fa-regular {\n              transition: 0.2s ease-in-out;\n              opacity: 1;\n            }\n            // .fa-regular {\n            //   width: 18px;\n            //   display: flex;\n            //   justify-content: center;\n\n            // }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.2s;\n          padding-left: 8px;\n          .options {\n            height: 100%;\n            display: flex;\n            align-items: center;\n          }\n          .edit {\n            transition: 0.1s ease-in-out;\n            opacity: 0;\n          }\n          span {\n            display: flex;\n          }\n          // i {\n          //   color: #8a7fa2;\n          // }\n          .fa-regular {\n            opacity: 0;\n          }\n          .fa-solid {\n            // font-size: 24px;\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #note {\n          height: 15vh;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          &::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg)\n              brightness(101%) contrast(93%);\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          // margin-left: auto;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            // color: $primary;\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          // color: $dk-subtext;\n          transition: 0.2s ease-in-out;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text; //$bg-color;\n          background: $grad-base;\n          background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.98);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            i {\n              margin-right: 6px;\n              // color: $primary;\n            }\n            p {\n              font-size: 16px;\n              // color: $primary;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n\n          .fa-star {\n            font-size: 24px;\n            color: $dk-text;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n          // padding: 16px;\n          // background-color: $component;\n          // border-radius: 16px;\n          // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n          border-radius: 24px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px;\n        }\n        #open-title {\n          color: $dk-text;\n        }\n        #open-note {\n          // margin-top: 16px;\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          // line-height: 1.5;\n          height: 30vh;\n          overflow: scroll;\n          // padding: 0px 16px;\n        }\n        .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n            font-weight: 500;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n            // padding: 0 0 8px 8px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text; //$bg-color;\n      // background-color: $primary;\n      background: $grad-base;\n      background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes textclip {\n  100% {\n    background-position: left;\n  }\n}\n"],"sourceRoot":""}]);
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
      if (e.target.classList.contains('check')) {
        e.target.classList.toggle(className);
      }
    });

    const title = e.target.closest('.task').querySelector('.task-title');
    const wrapper = e.target.closest('.task');
    const actions = e.target.closest('.task').querySelector('.actions');
    const edit = e.target.closest('.task').querySelector('.edit');
    const trash = e.target.closest('.task').querySelector('.delete');
    const star = e.target.closest('.task').querySelector('.fa-star');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.1s ease-in-out';
      wrapper.style.transition = '0.2s ease-in-out';
      edit.style.transition = '0.1s ease-in-out';
      trash.style.transition = '0.1s ease-in-out';
      star.style.transition = '0.1s ease-in-out';

      wrapper.style.backgroundColor = 'transparent';
      title.style.textDecoration = 'line-through';
      title.style.color = subtextColor;
      edit.style.opacity = '0';
      trash.style.opacity = '1';
      star.style.opacity = '0';

      setTimeout(() => {
        edit.style.display = 'none';
        trash.style.display = 'flex';
        star.style.display = 'none';
      }, 100);
    } else {
      wrapper.style.backgroundColor = componentColor;
      title.style.textDecoration = '';
      title.style.color = textColor;
      edit.style.opacity = '1';
      trash.style.opacity = '0';
      star.style.opacity = '1';

      setTimeout(() => {
        edit.style.display = 'flex';
        trash.style.display = 'none';
        star.style.display = 'flex';
      }, 100);
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
    // if (taskForm.hidden === true) {
    //   return;
    // }
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      input.focus();
    }

    const projectBtns = document.querySelectorAll('.project-btn-grp .options');
    projectBtns.forEach((btn) => {
      btn.style.opacity = '0';
    });
    if (projectForm.hidden) {
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
      updateSelectedFilter();
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
    console.log(!editBtn.classList.contains('hidden'));
    if (editBtn.classList.contains('hidden')) {
      document.querySelector('.task-form').reset();
      document.querySelector('form').reset();
    }
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
      folder.className = 'folder fa-regular fa-folder';
    });
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      project.style.backgroundColor = 'transparent';
    });
  }

  // updates
  function updateOpenTask(e) {
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
  }
  function updateSelectedProject() {
    resetFilters();
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name) {
        p.closest('.project').style.backgroundColor = componentColor;
        i.closest('.folder').className = 'folder fa-solid fa-folder';
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
    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';

    hideTasksRight();
    setTimeout(() => {
      showForm();
      titleInput.focus();
    }, 100);
  };
  const renderEditView = (e, project) => {
    e.stopImmediatePropagation();
    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    console.log(project.name);

    const projectName = e.currentTarget
      .closest('.task')
      .getAttribute('data-project-name');
    document.querySelector('select').value = projectName;

    if (project.getTasks()[taskIndex].getIsStarred()) {
      formStar.classList.add('starred');
      formStar.classList.remove('fa-regular');
      formStar.classList.add('fa-solid');
    } else {
      formStar.classList.remove('starred');
      formStar.classList.add('fa-regular');
      formStar.classList.remove('fa-solid');
    }

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
        e.stopPropagation();
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.3s';
        e.target.closest('.task').style.opacity = '0';
        // toggleComplete(e, currProject);
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
        const wrapper = taskWrapper.closest('.task');
        const checkmark = taskWrapper.closest('.task').querySelector('.fa-circle-check');
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        // const actions = taskWrapper.closest('.task').querySelector('.actions');
        const edit = taskWrapper.closest('.task').querySelector('.edit');
        const trash = taskWrapper.closest('.task').querySelector('.delete');
        const star = taskWrapper.closest('.task').querySelector('.fa-star');

        console.log(checkmark);

        title.style.textDecoration = 'line-through';
        title.style.color = subtextColor;

        wrapper.style.backgroundColor = cardColor;

        // actions.style.opacity = '0';
        edit.style.display = 'none';
        trash.style.display = 'flex';
        star.style.display = 'none';
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
    folder.className = 'folder fa-solid fa-folder';

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
  function handleDeleteProjectClick(e) {
    e.stopPropagation();
    deleteProject(e);
    renderTasksView(e);
    //rerender projects;
    //display new project if deleted project was current
  }
  function addProjectHandlers() {
    const projectWrappers = document.querySelectorAll('.project');
    const editBtns = document.querySelectorAll('.edit-p');
    const deleteBtns = document.querySelectorAll('.delete-p');

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', handleProjectClick);
    });

    editBtns.forEach((btn) => {
      btn.addEventListener('click', handleEditProjectClick);
    });

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', handleDeleteProjectClick);
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
  //delete project
  function deleteProject(e) {
    projectIndex = e.target.closest('.project').getAttribute('data-id');
    console.log(projectIndex);
    _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.splice(projectIndex, 1);
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

    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    resetProjects();
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

    if (!projectForm.hidden) {
      toggleAddProject();
    }
    resetProjects();
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
    console.log(projectToDeleteFrom);
    if (projectToDeleteFrom !== undefined) {
      projectToDeleteFrom.removeTask(taskToDelete);
    }

    if (projectToDeleteFrom !== currProject) {
      project.removeTask(taskToDelete);
    }

    renderTasksView(e);
    renderTasks(currProject);
  }

  function showAll(e) {
    resetFilters();
    console.log(_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects);
    const allTab = document.querySelector('.all');
    allTab.style.backgroundColor = componentColor;

    const allTasks = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.flatMap((project) => project.tasks);
    const unassignedTasks = [];
    if (allTasksList !== undefined) {
      allTasksList.getTasks().forEach((task) => {
        if (task.project === '') {
          unassignedTasks.push(task);
        }
      });

      allTasksList = undefined;
    }
    allTasksList = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', allTasks);
    allTasksList.getTasks().push(...unassignedTasks);
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
  folder.classList.add('folder', 'fa-regular', 'fa-folder');
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
  trash.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ21COztBQUUxQyx3REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9wcm9qZWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3Rhc2tNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9wcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbiAgLS1iZy1jb2xvcjogI2U0ZjBmYTtcXG4gIC0tcHJpbWFyeTogI2ZmN2M3YztcXG4gIC0tZGstdGV4dDogIzMzNDY2OTtcXG4gIC0tZGstc3VidGV4dDogIzdhOGFhMztcXG4gIC0tY2FyZDogI2U2ZWVmODtcXG4gIC0tY29tcG9uZW50LXM6ICNjNGNkZDE7XFxuICAtLWNvbXBvbmVudDogI2QzZGVlMztcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMjUwLCAxNzcsIDEzNSk7XFxuICAtLWdyYWRpZW50LTE6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiKDI0NiwgMTE3LCAxMTcpOyB9XFxuXFxuaHRtbFtkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1iZy1jb2xvcjogIzEyMTIxNTtcXG4gIC0tcHJpbWFyeTogIzhkOGZkMjtcXG4gIC0tZGstdGV4dDogI2RmZTBmYjtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzE4MTgxYztcXG4gIC0tY29tcG9uZW50LXM6ICM0NTQyNTQ7XFxuICAtLWNvbXBvbmVudDogIzJmMmQzNjtcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMTE5LCA4MSwgMjQ2KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDExOSwgODEsIDI0Nik7XFxuICAtLWdyYWRpZW50LTI6IHJnYig4OCwgNDQsIDIzMik7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuICBib2R5IGgyLFxcbiAgYm9keSBoMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgYm9keSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBoZWlnaHQ6IDI1cHg7IH1cXG4gIGJvZHkgcCxcXG4gIGJvZHkgc3BhbixcXG4gIGJvZHkgaSxcXG4gIGJvZHkgcSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTsgfVxcbiAgYm9keSBpbnB1dCxcXG4gIGJvZHkgdGV4dGFyZWEsXFxuICBib2R5IHNlbGVjdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wb25lbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIHJlc2l6ZTogbm9uZTsgfVxcbiAgYm9keSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDsgfVxcbiAgYm9keSB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuICBib2R5IHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG4gIGJvZHkgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCxcXG4gIGJvZHkgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gIGJvZHkgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDMwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA4dnc7IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogMjg1cHg7IH1cXG4gIGhlYWRlciBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgdmFyKC0tZ3JhZGllbnQtMSkgMCUsIHZhcigtLWdyYWRpZW50LTIpIDc1JSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgaGVhZGVyIGRpdiB7XFxuICAgIHdpZHRoOiA2MDBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgLmNhcmRzIC5vcHRpb25zOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyLFxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTV2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDsgfVxcbiAgLmNhcmRzIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgLmZhLXN0YXIge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgd2lkdGg6IDE4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIsXFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgcCxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLmVkaXQtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdDpob3ZlciAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyICNwcm9qZWN0LW5hbWUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5naXRodWIge1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgLmNhcmRzIC50YXNrLFxcbiAgLmNhcmRzIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIsXFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC5uby10YXNrcyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA0MHZoOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyayB7XFxuICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyazphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgcCB7XFxuICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50LXMpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIC5hY3Rpb25zIC5lZGl0LFxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyB7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmVkaXQge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICNub3RlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxNXZoOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNTQlKSBzYXR1cmF0ZSg1NjUwJSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoOTMlKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3Rhcjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3RhcnJlZCB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJhY2stYnRuIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0bjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIgLmZhLXN0YXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGUge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJvdC1ociB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICAgIHdpZHRoOiA4OHB4O1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCA4cHggMTZweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMgLm9wZW4tZGF0ZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJ0bi1ncm91cCAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDVweCA1cHggMTVweCAwcHg7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcblxcbi5zbGlkZS10YXNrcy1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG4uc2xpZGUtdGFza3Mtb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKTsgfSB9XFxuXFxuLnNsaWRlLWZvcm0taW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgMC4xczsgfVxcblxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1SaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgdGV4dGNsaXAge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLG1C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QixFQUFBO1FBbmIxQjtVQXViVSxnQkFBZ0I7VUFDaEIsV0FBVztVQUNYLGlCQUFpQixFQUFBO1FBemIzQjtVQTRiVSxnQkFBZ0I7VUFDaEIsd0JBQXdCO1VBQ3hCLGFBQWE7VUFDYiw4QkFBOEIsRUFBQTtRQS9ieEM7VUFrY1UsYUFBYTtVQUNiLG1CQUFtQixFQUFBO1VBbmM3QjtZQXFjWSxxQkF2akJZO1lBd2pCWixnQkFBZ0IsRUFBQTtRQXRjNUI7VUEwY1UsZ0JBQWdCLEVBQUE7VUExYzFCO1lBNGNZLDZCQTNqQk07WUE0akJOLFlBQVk7WUFDWixxQkEvakJZO1lBZ2tCWixlQUFlLEVBQUE7SUEvYzNCO01Bc2RNLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixxQkE5a0JrQjtNQWdsQmxCLDRCQTNrQnNCO01BNGtCdEIsaUZBQXFFO01BQ3JFLDRCQUE0QjtNQUM1QixnREFBZ0QsRUFBQTtNQWxldEQ7UUFxZVEsc0JBQXNCLEVBQUE7TUFyZTlCO1FBd2VRLHNCQUFzQixFQUFBOztBQU05QjtFQUNFLDBDQUEwQyxFQUFBOztBQUU1QztFQUNFLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFO0lBQ0Usd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSwyQkFBMkIsRUFBQSxFQUFBOztBQUcvQjtFQUNFLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFLDBDQUEwQyxFQUFBOztBQUU1QztFQUNFO0lBQ0UsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSx3QkFBd0IsRUFBQSxFQUFBOztBQUc1QjtFQUNFO0lBQ0UseUJBQXlCLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBodG1sW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbi8vICAgLS1iZy1jb2xvcjogIzEwMGYxNDtcXG4vLyAgIC0tcHJpbWFyeTogI2U4NzA3MDtcXG4vLyAgIC0tZGstdGV4dDogI2QyZDhmNztcXG4vLyAgIC0tZGstc3VidGV4dDogI2QyZDhmN2E2O1xcbi8vICAgLS1jYXJkOiAjMTQxMzE5O1xcbi8vICAgLS1jb21wb25lbnQtczogIzM1MzI0MDtcXG4vLyAgIC0tY29tcG9uZW50OiAjMjQyMjJkO1xcbi8vIH1cXG5odG1sW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbiAgLS1iZy1jb2xvcjogI2U0ZjBmYTsgLy8jZjNlZGUzOTQ7XFxuICAtLXByaW1hcnk6ICNmZjdjN2M7XFxuICAtLWRrLXRleHQ6ICMzMzQ2Njk7XFxuICAtLWRrLXN1YnRleHQ6ICM3YThhYTM7XFxuICAtLWNhcmQ6ICNlNmVlZjg7IC8vI2YzZjBlMzg0O1xcbiAgLS1jb21wb25lbnQtczogI2M0Y2RkMTtcXG4gIC0tY29tcG9uZW50OiAjZDNkZWUzO1xcbiAgLS1ncmFkLWJhc2U6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMjQ2LCAxMTcsIDExNyk7XFxufVxcblxcbmh0bWxbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tYmctY29sb3I6ICMxMjEyMTU7XFxuICAtLXByaW1hcnk6ICM4ZDhmZDI7XFxuICAtLWRrLXRleHQ6ICNkZmUwZmI7IC8vI2Q5ZDllODtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzE4MTgxYztcXG4gIC0tY29tcG9uZW50LXM6ICM0NTQyNTQ7XFxuICAtLWNvbXBvbmVudDogIzJmMmQzNjtcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMTE5LCA4MSwgMjQ2KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDExOSwgODEsIDI0Nik7XFxuICAtLWdyYWRpZW50LTI6IHJnYig4OCwgNDQsIDIzMik7XFxufVxcbiRiZy1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiRwcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcXG4kZGstdGV4dDogdmFyKC0tZGstdGV4dCk7XFxuJGRrLXN1YnRleHQ6IHZhcigtLWRrLXN1YnRleHQpO1xcbiRjYXJkOiB2YXIoLS1jYXJkKTtcXG4kY29tcG9uZW50LXM6IHZhcigtLWNvbXBvbmVudC1zKTtcXG4kY29tcG9uZW50OiB2YXIoLS1jb21wb25lbnQpO1xcbiRncmFkLWJhc2U6IHZhcigtLWdyYWQtYmFzZSk7XFxuJGdyYWRpZW50LTE6IHZhcigtLWdyYWRpZW50LTEpO1xcbiRncmFkaWVudC0yOiB2YXIoLS1ncmFkaWVudC0yKTtcXG4vLyAkYmctY29sb3I6ICNkMmQ4ZjdhNjtcXG4vLyAkcHJpbWFyeTogI2U4NzA3MDtcXG4vLyAkZGstdGV4dDogI2QyZDhmNztcXG4vLyAkZGstc3VidGV4dDogI2QyZDhmN2E2O1xcbi8vICRjYXJkOiAjMTQxMzE5O1xcbi8vICRjb21wb25lbnQtczogIzM1MzI0MDtcXG4vLyAkY29tcG9uZW50OiAjMjQyMjJkO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0xleGVuZCBEZWNhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE1MTMxOTtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgaDIsXFxuICBoMyB7XFxuICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gIH1cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgLy8gbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIHAsXFxuICBzcGFuLFxcbiAgaSxcXG4gIHEge1xcbiAgICBjb2xvcjogJGRrLXN1YnRleHQ7IC8vJHByaW1hcnlcXG4gIH1cXG4gIGlucHV0LFxcbiAgdGV4dGFyZWEsXFxuICBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudDtcXG4gICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG4gIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcblxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCxcXG4gIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDMwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4O1xcbiAgfVxcbn1cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDh2dztcXG4gIGgxIHtcXG4gICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDV2dztcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogMjg1cHg7XFxuICB9XFxuICBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogJGdyYWQtYmFzZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgJGdyYWRpZW50LTEgMCUsICRncmFkaWVudC0yIDc1JSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gIH1cXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLy8gZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDh2dztcXG4gIC5vcHRpb25zIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIH1cXG4gIH1cXG4gIC5zaWRlYmFyLFxcbiAgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgaGVpZ2h0OiA1NXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDIwcHggMjVweCAtNXB4LFxcbiAgICAvLyAgIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDEwcHggMTBweCAtNXB4O1xcbiAgICAvLyBib3gtc2hhZG93OiAwcHggNjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweCxcXG4gICAgLy8gICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDBweCAwcHggMHB4IDFweCBpbnNldDtcXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMTNweCAyN3B4IC01cHgsXFxuICAgIC8vICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA4cHggMTZweCAtOHB4O1xcbiAgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC5maWx0ZXJzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB9XFxuICAgIC5maWx0ZXIge1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAuZmEtc3RhciB7XFxuICAgICAgICAvLyBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlcixcXG4gICAgLnByb2plY3Qge1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIGkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlcixcXG4gICAgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIH1cXG5cXG4gICAgICAucGx1czpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgfVxcbiAgICAgIC5yb3RhdGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdHMge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAvLyB3aWR0aDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC8vIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC5mb2xkZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0LWJ0bi1ncnAge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5lZGl0LXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kZWxldGUtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIC5wcm9qZWN0LWJ0bi1ncnAge1xcbiAgICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjcHJvamVjdC1uYW1lIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICB9XFxuICAgIC5naXRodWIge1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgLmZhLWdpdGh1YiB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAudGFzayxcXG4gIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLnQtd3JhcHBlcixcXG4gICAgLmYtd3JhcHBlcixcXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC50LXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAubm8tdGFza3Mge1xcbiAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIH1cXG4gICAgICAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcbiAgICAgIH1cXG4gICAgICAudGFzayB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICAgICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggM3B4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMnB4IDJweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50LXM7XFxuICAgICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgICAuZWRpdCxcXG4gICAgICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLy8gLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIC8vICAgd2lkdGg6IDE4cHg7XFxuICAgICAgICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIC8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgLy8gfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYWN0aW9ucyB7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5lZGl0IHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAvLyBpIHtcXG4gICAgICAgICAgLy8gICBjb2xvcjogIzhhN2ZhMjtcXG4gICAgICAgICAgLy8gfVxcbiAgICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZmEtc29saWQge1xcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNub3RlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxNXZoO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzIHtcXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XFxuICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNTQlKSBzYXR1cmF0ZSg1NjUwJSkgaHVlLXJvdGF0ZSgxNzlkZWcpXFxuICAgICAgICAgICAgICBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDkzJSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIC8vIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSByb3RhdGUoNzJkZWcpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdGFycmVkIHtcXG4gICAgICAgICAgLy8gY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuICAgICAgICAuYmFjay1idG4ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0OyAvLyRiZy1jb2xvcjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogJGdyYWQtYmFzZTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgJGdyYWRpZW50LTEgMCUsICRncmFkaWVudC0yIDEwMCUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA1cHggMTVweCAwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcbiAgICAgICAgICAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICAgICAgICAgIC8vIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAvLyBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAub3Blbi10aXRsZS1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XFxuXFxuICAgICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7XFxuICAgICAgICAgIC8vIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDNweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDJweCAycHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcXG5cXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgIH1cXG4gICAgICAgICNvcGVuLW5vdGUge1xcbiAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib3QtaHIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICB3aWR0aDogODhweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDE2cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAub3Blbi1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICAgICAgLy8gcGFkZGluZzogMCAwIDhweCA4cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmFkZC1idG4ge1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6ICRkay10ZXh0OyAvLyRiZy1jb2xvcjtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JhZC1iYXNlO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgNXB4IDVweCAxNXB4IDBweDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgfVxcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5zbGlkZS10YXNrcy1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbi5zbGlkZS10YXNrcy1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgMC4xcztcXG59XFxuQGtleWZyYW1lcyB0YXNrUmlnaHQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpO1xcbiAgfVxcbn1cXG4uc2xpZGUtZm9ybS1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCAwLjFzO1xcbn1cXG4uc2xpZGUtZm9ybS1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZvcm1SaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRleHRjbGlwIHtcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBUYXNrIGZyb20gJy4vbW9kZWxzL3Rhc2tNb2RlbCc7XG5pbXBvcnQgUHJvamVjdCwgeyBwcm9qZWN0cyB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3RNb2RlbCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vdmlld3MvcHJvamVjdFZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBDb250cm9sbGVyKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gIGNvbnN0IHRhc2tzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50LXdyYXBwZXInKTtcbiAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZi13cmFwcGVyJyk7XG4gIGNvbnN0IG9wZW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm8td3JhcHBlcicpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1idG4nKTtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuJyk7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1wbHVzJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpO1xuICBjb25zdCBwcm9qZWN0c0Zvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICBjb25zdCBmb3JtU3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc3RhcicpO1xuICBjb25zdCBwcm9qZWN0R3JwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ3JwJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICBjb25zdCBzZWxlY3RBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG5cbiAgY29uc3QgY29tcG9uZW50Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tY29tcG9uZW50Jyk7XG4gIGNvbnN0IHRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay10ZXh0Jyk7XG4gIGNvbnN0IHN1YnRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay1zdWJ0ZXh0Jyk7XG4gIGNvbnN0IGNhcmRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jYXJkJyk7XG5cbiAgbGV0IHRhc2tJbmRleCA9IDA7XG4gIGxldCBwcm9qZWN0SW5kZXg7XG4gIGxldCBjdXJyUHJvamVjdDtcbiAgbGV0IGFsbFRhc2tzTGlzdDtcbiAgbGV0IHNlbGVjdGVkID0gJyc7XG5cbiAgLy8gYW5pbWF0aW9uc1xuICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1Rhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlVGFza3NSaWdodCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzTGVmdCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgb3BlblRhc2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXMnO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIC8vIHZhbGlkaXR5XG4gIGZ1bmN0aW9uIGlzUHJvamVjdFZhbGlkKCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFuYW1lLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgbmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnUHJvamVjdCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIG5hbWUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZS52YWx1ZSkpIHtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Byb2plY3QgZXhpc3RzJyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGlzVGFza1ZhbGlkKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIGlmICghdGFzay52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICB0YXNrLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgKHByb2plY3QuZ2V0VGFza3MoKS5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXNrLnZhbHVlKSkge1xuICAgIC8vICAgdGFzay5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBhbHJlYWR5IGV4aXN0cycpO1xuICAgIC8vICAgdGFzay5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRvZ2dsZXNcbiAgY29uc3QgdG9nZ2xlQnRuVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKGUsIHByb2plY3QpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdO1xuICAgIHRhc2suaXNDb21wbGV0ZSA9ICF0YXNrLmlzQ29tcGxldGU7XG5cbiAgICBjb25zdCBjaGVja21hcmtDbGFzc2VzID0gWydmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZScsICdmYS1jaXJjbGUtY2hlY2snXTtcbiAgICBjaGVja21hcmtDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcbiAgICBjb25zdCBhY3Rpb25zID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuYWN0aW9ucycpO1xuICAgIGNvbnN0IGVkaXQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgdHJhc2ggPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcbiAgICBjb25zdCBzdGFyID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpO1xuXG4gICAgaWYgKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSAnJyAmJiB0aXRsZS5zdHlsZS5jb2xvciAhPT0gJyNkMmQ4ZjdhNicpIHtcbiAgICAgIHRpdGxlLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4xcyBlYXNlLWluLW91dCc7XG4gICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICBlZGl0LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4xcyBlYXNlLWluLW91dCc7XG4gICAgICB0cmFzaC5zdHlsZS50cmFuc2l0aW9uID0gJzAuMXMgZWFzZS1pbi1vdXQnO1xuICAgICAgc3Rhci5zdHlsZS50cmFuc2l0aW9uID0gJzAuMXMgZWFzZS1pbi1vdXQnO1xuXG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSBzdWJ0ZXh0Q29sb3I7XG4gICAgICBlZGl0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB0cmFzaC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgc3Rhci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgZWRpdC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgdHJhc2guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHN0YXIuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUZvcm1TdGFyID0gKCkgPT4ge1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJyZWQnKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJyk7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtc29saWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlUGx1c0J0biA9ICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3BsdXMnKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAvLyBpZiAodGFza0Zvcm0uaGlkZGVuID09PSB0cnVlKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSAhcHJvamVjdEZvcm0uaGlkZGVuO1xuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBwcm9qZWN0R3JwLmluc2VydEJlZm9yZShwcm9qZWN0Rm9ybSwgcHJvamVjdEdycC5maXJzdENoaWxkKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zJyk7XG4gICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcbiAgICBpZiAocHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgcmVzZXRQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHRvZ2dsZUVkaXRQcm9qZWN0KGUpIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgdG9nZ2xlUGx1c0J0bigpO1xuICAgIHByb2plY3RGb3JtLmhpZGRlbiA9ICFwcm9qZWN0Rm9ybS5oaWRkZW47XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9ucycpO1xuICAgIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgLy8gYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBidG4uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHByb2plY3RHcnAuZmlyc3RDaGlsZCk7XG4gICAgICBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgICAgIGlucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAgIHNlbGVjdGVkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRlZCcpO1xuICAgICAgc2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICAvLyByZXNldHNcbiAgZnVuY3Rpb24gcmVzZXRTdGFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc3RhcicpLmNsYXNzTmFtZSA9ICdhZGQtc3RhciBmYS1yZWd1bGFyIGZhLXN0YXInO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0UHJvamVjdHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ3JwJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUYXNrcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5pbm5lckhUTUwgPSAnJztcbiAgfVxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coIWVkaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSk7XG4gICAgaWYgKGVkaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpLnJlc2V0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJyk7XG4gICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXJlZ3VsYXIgZmEtZm9sZGVyJztcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1cGRhdGVzXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wZW5UYXNrKGUpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXRpdGxlJyk7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW5vdGUnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tcHJvamVjdCcpO1xuICAgIC8vIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuXG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXN0YXInKTtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgaXNTdGFycmVkID0gY3VyclByb2plY3QudGFza3NbaWRdLmdldElzU3RhcnJlZCgpO1xuICAgIGNvbnNvbGUubG9nKGlzU3RhcnJlZCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0udGl0bGU7XG4gICAgbm90ZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5ub3RlO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0ucHJvamVjdDtcbiAgICBpZiAoaXNTdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgaSA9IHByb2plY3QucXVlcnlTZWxlY3RvcignaScpO1xuICAgICAgY29uc3QgcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgaWYgKHAudGV4dENvbnRlbnQgPT09IGN1cnJQcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgcC5jbG9zZXN0KCcucHJvamVjdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgICBpLmNsb3Nlc3QoJy5mb2xkZXInKS5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXNvbGlkIGZhLWZvbGRlcic7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKSB7XG4gICAgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdBbGwnKSB7XG4gICAgICBjb25zdCBhbGxUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgICAvLyBlLnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgICBhbGxUYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza3NPcGVuVmlldyA9IChlKSA9PiB7XG4gICAgaGlkZVRhc2tzTGVmdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuVGFzaygpO1xuICAgICAgdXBkYXRlT3BlblRhc2soZSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyRm9ybVZpZXcgPSAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgaWYgKHByb2plY3RGb3JtLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93Rm9ybSgpO1xuICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckVkaXRWaWV3ID0gKGUsIHByb2plY3QpID0+IHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmIChwcm9qZWN0Rm9ybS5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgfVxuICAgIHRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS50aXRsZTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5ub3RlO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QubmFtZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldFxuICAgICAgLmNsb3Nlc3QoJy50YXNrJylcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBwcm9qZWN0TmFtZTtcblxuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc29saWQnKTtcbiAgICB9XG5cbiAgICBoaWRlVGFza3NSaWdodCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCByZW5kZXJUYXNrc1ZpZXcgPSAoZSkgPT4ge1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICB9KTtcbiAgICBjaGVja21hcmtzLmZvckVhY2goKGNoZWNrbWFyaykgPT4ge1xuICAgICAgY2hlY2ttYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW5kZXJFZGl0VmlldyhlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjNzJztcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAvLyB0b2dnbGVDb21wbGV0ZShlLCBjdXJyUHJvamVjdCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRlbGV0ZVRhc2soZSwgY3VyclByb2plY3QpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICBpZiAocHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyBwJykudGV4dENvbnRlbnQgPSAnTm8gdGFza3MgZm91bmQnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHAnKS5jbGFzc05hbWUgPSAnbm8tdGFza3MnO1xuICAgIH1cblxuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGNyZWF0ZVRhc2sodGFzaywgcHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZCh0YXNrV3JhcHBlcik7XG4gICAgICAvLy8vXG4gICAgICAvLyB0YXNrV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xuICAgICAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHRhc2sucHJvamVjdCk7XG4gICAgICAvLy8vXG4gICAgICBpZiAodGFzay5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgICB0YXNrV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgICAgICAgLy8gY29uc3QgYWN0aW9ucyA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmFjdGlvbnMnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICAgICAgY29uc3QgdHJhc2ggPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcbiAgICAgICAgY29uc3Qgc3RhciA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmZhLXN0YXInKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja21hcmspO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2FyZENvbG9yO1xuXG4gICAgICAgIC8vIGFjdGlvbnMuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkVGFza0hhbmRsZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfSk7XG4gICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcblxuICAgIGNvbnN0IGZvbGRlciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmZvbGRlcicpO1xuICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXNvbGlkIGZhLWZvbGRlcic7XG5cbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcblxuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KGUpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVByb2plY3RDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBkZWxldGVQcm9qZWN0KGUpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICAvL3JlcmVuZGVyIHByb2plY3RzO1xuICAgIC8vZGlzcGxheSBuZXcgcHJvamVjdCBpZiBkZWxldGVkIHByb2plY3Qgd2FzIGN1cnJlbnRcbiAgfVxuICBmdW5jdGlvbiBhZGRQcm9qZWN0SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXAnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wJyk7XG5cbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDbGljayk7XG4gICAgfSk7XG5cbiAgICBlZGl0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVByb2plY3RDbGljayk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgLy8gcmVzZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdEhhbmRsZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBpZiAoIWlzUHJvamVjdFZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gc3RvcmVQcm9qZWN0KCk7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpO1xuICAgIGlmICghZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0cy51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgICAgY3VyclByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfVxuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghbmFtZS52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lID0gbmFtZS52YWx1ZTtcbiAgICByZXNldEZvcm0oKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gIH1cbiAgLy9kZWxldGUgcHJvamVjdFxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBmb3JtU3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJyZWQnKTtcblxuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRUYXNrKGUsIHByb2plY3QpIHtcbiAgICBpZiAoIWlzVGFza1ZhbGlkKCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgY29uc3QgdGVtcCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSk7XG4gICAgaWYgKHByb2plY3RzRm9ybUlucHV0LnZhbHVlICE9PSBwcm9qZWN0Lm5hbWUgJiYgcHJvamVjdHNGb3JtSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICB0ZW1wLmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gdGVtcDtcbiAgICB9IGVsc2UgcHJvamVjdC5nZXRUYXNrcygpLnB1c2gobmV3VGFzayk7XG5cbiAgICBpZiAocHJvamVjdEZvcm0uaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cbiAgZnVuY3Rpb24gZWRpdFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdC5uYW1lKTtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgY29uc3QgdGVtcCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QubmFtZSk7XG4gICAgaWYgKHByb2plY3RzRm9ybUlucHV0LnZhbHVlICE9PSBwcm9qZWN0Lm5hbWUgJiYgcHJvamVjdHNGb3JtSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrSW5kZXgpO1xuICAgICAgdGVtcC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEsIGVkaXRlZFRhc2spOyAvL3B1c2goZWRpdGVkVGFzaylcbiAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gdGVtcDtcbiAgICB9IGVsc2UgcHJvamVjdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEsIGVkaXRlZFRhc2spO1xuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF07XG5cbiAgICAvLyBGaW5kIHByb2plY3QgdGFzayBvcmlnaW5hbGx5IGNhbWUgZnJvbVxuICAgIGxldCBwcm9qZWN0VG9EZWxldGVGcm9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXRUYXNrcygpLmluY2x1ZGVzKHRhc2tUb0RlbGV0ZSkpIHtcbiAgICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbSA9IHByb2plY3RzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvRGVsZXRlRnJvbSk7XG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZUZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbS5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZUZyb20gIT09IGN1cnJQcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0FsbChlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIGNvbnN0IGFsbFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBhbGxUYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG5cbiAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IHByb2plY3QudGFza3MpO1xuICAgIGNvbnN0IHVuYXNzaWduZWRUYXNrcyA9IFtdO1xuICAgIGlmIChhbGxUYXNrc0xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxsVGFza3NMaXN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSAnJykge1xuICAgICAgICAgIHVuYXNzaWduZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWxsVGFza3NMaXN0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhbGxUYXNrc0xpc3QgPSBuZXcgUHJvamVjdCgnQWxsJywgYWxsVGFza3MpO1xuICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnB1c2goLi4udW5hc3NpZ25lZFRhc2tzKTtcbiAgICAvLyB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gIH1cbiAgc2VsZWN0QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0KTtcbiAgZm9ybVN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtU3Rhcik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJGb3JtVmlldyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gaW5jb3JyZWN0SW5wdXQgPSBmYWxzZTtcbiAgICBhZGRUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgfSk7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGluY29ycmVjdElucHV0ID0gZmFsc2U7XG4gICAgZWRpdFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcblxuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHNlbGVjdGVkID09PSAnJyAmJiBpc1Byb2plY3RWYWxpZCgpKSB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRQcm9qZWN0KCk7XG4gICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRlZCcpO1xuICAgICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gICAgY29uc3QgaW50cm9UYXNrID0gbmV3IFRhc2soXG4gICAgICAnQ2xpY2sgbWUgdG8gbGVhcm4gbW9yZSEnLFxuICAgICAgJyAtIFRhc2tzIGNhbiBiZSBleHBhbmRlZCB0byB2aWV3IG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlbS4gXFxuXFxuIC0gQWRkIG5vdGVzLCBkdWUgZGF0ZXMgYW5kIGZhdm9yaXRlIHN0YXR1cyBmcm9tIHRoZSB0YXNrIGZvcm0gcGFuZS4gXFxuXFxuIC0gVGhhbmsgeW91IGZvciBjaGVja2luZyBvdXQgbXkgcHJvamVjdCEnLFxuICAgICAgJ0RlZmF1bHQnLFxuICAgICAgJycsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIGNvbnN0IGludHJvVGFza1R3byA9IG5ldyBUYXNrKFxuICAgICAgJ1NpZGViYXIgSW5mbycsXG4gICAgICAnIC0gVGFza3MgY2FuIGJlIGZpbHRlcmVkIGJ5IEFsbCwgVG9kYXkgb3IgV2Vlay4gXFxuXFxuIC0gQWRkIG5ldyBwcm9qZWN0cyBieSBwcmVzc2luZyB0aGUgKCspIGJ1dHRvbi4gXFxuXFxuIC0gSG92ZXIgb3ZlciBleGlzdGluZyBwcm9qZWN0cyB0byBlZGl0IG9yIGRlbGV0ZSB0aGVtLicsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgY29uc3QgaW50cm9Qcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBjdXJyUHJvamVjdCA9IGludHJvUHJvamVjdDtcbiAgICBwcm9qZWN0cy5wdXNoKGludHJvUHJvamVjdCk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2spO1xuICAgIGludHJvUHJvamVjdC5nZXRUYXNrcygpLnB1c2goaW50cm9UYXNrVHdvKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXInKS5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza1RvRGVsZXRlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RvRGVsZXRlLnRpdGxlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUsIHByb2plY3QsIGRhdGUsIGlzU3RhcnJlZCA9IGZhbHNlLCBpc0NvbXBsZXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5pc1N0YXJyZWQgPSBpc1N0YXJyZWQ7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICB9XG5cbiAgZ2V0SXNTdGFycmVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3RhcnJlZDtcbiAgfVxuXG4gIGdldElzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdE1vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGRpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpY29uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkaXYoKTtcbiAgd3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSk7XG4gIHRleHQuY2xhc3NOYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4gIHRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIGNvbnN0IGZvbGRlciA9IGljb24oKTtcbiAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcicsICdmYS1yZWd1bGFyJywgJ2ZhLWZvbGRlcicpO1xuICAvLyBmb2xkZXIudGV4dENvbnRlbnQgPSAnZm9sZGVyJztcbiAgY29uc3QgZ3JvdXAgPSBkaXYoKTtcbiAgZ3JvdXAuY2xhc3NOYW1lID0gJ3Byb2plY3QtYnRuLWdycCc7XG4gIGNvbnN0IGVkaXQgPSBpY29uKCk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdlZGl0LXAnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIGNvbnN0IHRyYXNoID0gaWNvbigpO1xuICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2RlbGV0ZS1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gIGNvbnN0IG9wdGlvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBwaWNrID0gb3B0aW9uKCk7XG4gIHBpY2sudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIHBpY2sudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQocGljayk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB3cmFwcGVyLmFwcGVuZChmb2xkZXIsIHRleHQsIGdyb3VwKTtcbiAgZ3JvdXAuYXBwZW5kKGVkaXQsIHRyYXNoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaywgcHJvamVjdCkge1xuICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGVja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pbmRleE9mKHRhc2spKTtcbiAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBjaGVja1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlLWNoZWNrJyk7XG4gIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLWNoZWNrJyk7XG4gIH0gZWxzZSBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1jaXJjbGUnKTtcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2VkaXQnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZGVsZXRlJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtc3RhcicpO1xuXG4gIHRhc2tXcmFwcGVyLmFwcGVuZChjaGVja1dyYXBwZXIsIHRpdGxlLCBhY3Rpb25zKTtcbiAgY2hlY2tXcmFwcGVyLmFwcGVuZChpbnB1dCwgY2hlY2ttYXJrKTtcbiAgYWN0aW9ucy5hcHBlbmQoZWRpdCwgdHJhc2gsIHN0YXIpO1xuXG4gIHJldHVybiB0YXNrV3JhcHBlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgYXBwQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvYXBwJztcblxuYXBwQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9