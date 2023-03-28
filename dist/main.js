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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(119, 81, 246);\n  --gradient-1: rgb(119, 81, 246);\n  --gradient-2: rgb(88, 44, 232); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: var(--bg-color);\n  height: 100vh; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 285px; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(130deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n  header div {\n    width: 600px; }\n\n.hidden {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-in-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 300px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out; }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i {\n        font-size: 14px; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 560px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none; }\n      .cards .content .t-wrapper .tasks {\n        overflow-x: hidden;\n        height: 40vh; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 10px;\n        background-color: var(--component);\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 8px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: 0.2s ease-in-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .edit,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-in-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: 0.2s;\n          gap: 4px; }\n          .cards .content .t-wrapper .task .actions .options {\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions i {\n            transition: 0.2s ease-in-out; }\n          .cards .content .t-wrapper .task .actions .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%) contrast(93%); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out;\n          color: var(--primary); }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-in-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.98); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 30vh;\n          overflow: scroll; }\n        .cards .content .o-wrapper .expand-view .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary);\n            font-weight: 500; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes formVertical {\n  0% {\n    transform: translateY(-30%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes textclip {\n  100% {\n    background-position: left; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// html[data-theme='light'] {\n//   --bg-color: #100f14;\n//   --primary: #e87070;\n//   --dk-text: #d2d8f7;\n//   --dk-subtext: #d2d8f7a6;\n//   --card: #141319;\n//   --component-s: #353240;\n//   --component: #24222d;\n// }\nhtml[data-theme='light'] {\n  --bg-color: #e4f0fa; //#f3ede394;\n  --primary: #ff7c7c;\n  --dk-text: #334669;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8; //#f3f0e384;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n}\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb; //#d9d9e8;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(119, 81, 246);\n  --gradient-1: rgb(119, 81, 246);\n  --gradient-2: rgb(88, 44, 232);\n}\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n// $bg-color: #d2d8f7a6;\n// $primary: #e87070;\n// $dk-text: #d2d8f7;\n// $dk-subtext: #d2d8f7a6;\n// $card: #141319;\n// $component-s: #353240;\n// $component: #24222d;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n  // border: 1px solid red;\n}\nbody {\n  background-color: $bg-color;\n  // background-color: #151319;\n  // background-color: #1a181d;\n  height: 100vh;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    // line-height: 25px;\n    height: 25px;\n  }\n\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext; //$primary\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n  }\n  input {\n    height: 35px;\n  }\n  textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 285px;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(130deg, $gradient-1 0%, $gradient-2 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  div {\n    width: 600px;\n  }\n}\n.hidden {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  // flex-direction: row-reverse;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: 0.2s ease-in-out;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 55vh;\n\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    //   rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 13px 27px -5px,\n    //   rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filter {\n      height: 32px;\n      // background-color: $card;\n      .fa-star {\n        // height: 18px;\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n\n      i {\n        margin-right: 6px;\n      }\n\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out;\n      }\n\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i {\n        font-size: 14px;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      // width: 100%;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      // user-select: none;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 560px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none;\n      }\n      .tasks {\n        overflow-x: hidden;\n        height: 40vh;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 10px;\n        background-color: $component;\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 8px 0px,\n          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: 0.2s ease-in-out;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: $dk-text;\n          overflow: hidden;\n        }\n\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .edit,\n            .fa-regular {\n              transition: 0.2s ease-in-out;\n              opacity: 1;\n            }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: 0.2s;\n          gap: 4px;\n          .options {\n            height: 100%;\n\n            display: flex;\n            align-items: center;\n          }\n          i {\n            transition: 0.2s ease-in-out;\n          }\n          .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n          }\n          span {\n            display: flex;\n          }\n          .fa-regular {\n            opacity: 0;\n          }\n\n          .fa-solid {\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #note {\n          height: 15vh;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          &::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg)\n              brightness(101%) contrast(93%);\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out;\n          color: $primary;\n          &:hover {\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          transition: 0.2s ease-in-out;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text;\n          background: $grad-base;\n          background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.98);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            i {\n              margin-right: 6px;\n            }\n            p {\n              font-size: 16px;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n\n          .fa-star {\n            font-size: 24px;\n            color: $primary;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px;\n        }\n        #open-title {\n          color: $dk-text;\n        }\n        #open-note {\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 30vh;\n          overflow: scroll;\n        }\n        .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n            font-weight: 500;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text;\n      background: $grad-base;\n      background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes formVertical {\n  0% {\n    transform: translateY(-30%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes appearForm {\n  0% {\n    // transform-origin: top;\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes textclip {\n  100% {\n    background-position: left;\n  }\n}\n"],"sourceRoot":""}]);
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
  const selectStarred = document.querySelector('.starred');

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
  const primaryColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');

  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let allTasksList = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All');
  console.log(allTasksList);
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
    const project = document.querySelector('#project-name');
    if (!project.value) {
      console.log('test');
      project.setCustomValidity('Project cannot be empty');
      project.reportValidity();
      return false;
    }
    return true;
  }
  function isTaskValid() {
    const task = document.querySelector('#task');
    if (!task.value) {
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      return false;
    }
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
    // e.stopPropagation();
    const wrapper = e.target.closest('.task');
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const task = project.getTasks()[taskIndex];
    const selectedTask = e.target;
    // || document.querySelector('.task');

    if (!task.isComplete) {
      wrapper.addEventListener('click', renderTasksOpenView);
    }
    task.isComplete = !task.isComplete;
    if (task.isComplete) {
      wrapper.removeEventListener('click', renderTasksOpenView);
    }

    const checkmarkClasses = ['fa-regular', 'fa-solid', 'fa-circle', 'fa-circle-check'];
    checkmarkClasses.forEach((className) => {
      if (selectedTask.classList.contains('check')) {
        selectedTask.classList.toggle(className);
      }
    });

    const title = selectedTask.closest('.task').querySelector('.task-title');
    // const actions = e.target.closest('.task').querySelector('.actions');
    const edit = selectedTask.closest('.task').querySelector('.edit');
    const trash = selectedTask.closest('.task').querySelector('.delete');
    const star = selectedTask.closest('.task').querySelector('.fa-star');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.2s ease-in-out';
      wrapper.style.transition = '0.2s ease-in-out';
      edit.style.transition = '0.2s ease-in-out';
      trash.style.transition = '0.2s ease-in-out';
      star.style.transition = '0.2s ease-in-out';

      wrapper.style.backgroundColor = 'transparent';
      wrapper.style.boxShadow = 'none';

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
      edit.style.opacity = '0';
      trash.style.opacity = '0';
      star.style.opacity = '1';

      setTimeout(() => {
        renderTasks(currProject);
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
    // resetForm();
    addProjectBtn.classList.toggle('plus');
    addProjectBtn.classList.toggle('rotated');
  };
  const toggleAddProject = () => {
    selected = '';
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;

    if (!projectForm.hidden) {
      projectForm.style.animation = 'ease-out formVertical 0.2s';
      for (let i = 0; i < projectGrp.children.length; i++) {
        projectGrp.children[i].style.animation = 'ease-out formVertical 0.2s';
      }
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      input.focus();
    }

    const projectBtns = document.querySelectorAll('.project-btn-grp .options');
    projectBtns.forEach((btn) => {
      btn.style.opacity = '0';
    });
    if (projectForm.hidden) {
      // projectForm.style.animation = 'ease-out reverse formVertical 0.2s';
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
      updateSelectedFilter();
    }
  };
  function toggleEditProject(e) {
    // e.stopPropagation();
    console.log(currProject);
    console.log(currProject);
    console.log(input);
    projectForm.hidden = !projectForm.hidden;
    console.log(input);
    const projectBtns = document.querySelectorAll('.options');
    projectBtns.forEach((btn) => {
      btn.style.display = 'none';
      btn.style.opacity = '0';
    });
    if (!projectForm.hidden) {
      projectForm.style.animation = 'ease-out appearForm 0.2s';

      projectIndex = e.target.closest('.project').getAttribute('data-id');
      const selectedIndex = projectGrp.children.item(projectIndex);
      projectGrp.insertBefore(projectForm, selectedIndex);
      // input.style.display = 'block';
      input.value = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex].name;
      input.focus();

      selected = e.target.closest('.project');
      selected.classList.toggle('edited');
      selected.style.display = 'none';

      currProject = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects[projectIndex];
      // renderTasksView(e);
      // renderTasks(currProject);
    }
    togglePlusBtn();
    console.log(currProject);
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
    const folder = document.querySelector('.open-folder');
    // const date = document.querySelector('#date');

    const star = document.querySelector('.open-star');
    const id = e.target.closest('.task').getAttribute('data-id');
    const isStarred = currProject.tasks[id].getIsStarred();
    console.log(currProject);
    title.textContent = currProject.tasks[id].title;
    note.textContent = currProject.tasks[id].note;

    // console.log(componentColor);
    // console.log(selectStarred.style.backgroundColor);
    // if (selectStarred.style.color === componentColor) {
    //   getStarredTasks();
    // }
    if (currProject.name === 'All') {
      project.textContent = 'All';
      folder.className = 'material-symbols-rounded open-folder';
      folder.textContent = 'inbox';
      console.log(folder.className);
    } else if (currProject.name === 'Starred') {
      project.textContent = 'Starred';
      folder.className = 'fa-solid fa-star open-folder';
      folder.textContent = '';
    }
    //Add updates to Today
    //Add updates to Week
    else {
      folder.className = 'material-symbols-rounded open-folder';
      project.textContent = currProject.tasks[id].project;
      folder.textContent = 'folder';
    }
    if (isStarred === false) {
      star.style.display = 'none';
    } else star.style.display = 'inline-block';
  }
  function updateSelectedProject() {
    resetFilters();
    console.log(currProject);
    const projectsList = document.querySelectorAll('.project');
    let foundProject = false;
    projectsList.forEach((project) => {
      if (foundProject) return;
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name) {
        p.closest('.project').style.backgroundColor = componentColor;
        i.closest('.folder').className = 'folder fa-solid fa-folder';
        foundProject = true;
      }
    });
  }
  function updateSelectedFilter() {
    if (currProject.name === 'All') {
      selectAll.style.backgroundColor = componentColor;
    }
  }

  function renderTasksOpenView(e) {
    hideTasksLeft();

    setTimeout(() => {
      openTask();
      updateOpenTask(e);
    }, 100);
  }
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
    console.log(currProject);
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
    // resetForm();
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
      if (!task.isComplete) {
        task.addEventListener('click', renderTasksOpenView);
      }
      if (task.isComplete) {
        task.removeEventListener('click', renderTasksOpenView);
      }
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

        setTimeout(() => {
          toggleComplete(e, currProject); //???
          deleteTask(e, currProject);
        }, 200);
      });
    });
  }
  function renderTasks(project, selectedTask) {
    resetTasks();
    if (project.getTasks().length === 0) {
      document.querySelector('.tasks').appendChild(document.createElement('p'));
      document.querySelector('.tasks p').textContent = 'No tasks found';
      document.querySelector('.tasks p').className = 'no-tasks';
    }

    project.getTasks().forEach((task) => {
      const taskWrapper = (0,_views_taskView__WEBPACK_IMPORTED_MODULE_2__["default"])(task, project.getTasks());
      document.querySelector('.tasks').append(taskWrapper);
      taskWrapper.setAttribute('data-project-name', task.project);

      if (task.isStarred) {
        //// task.isStarred
        taskWrapper.querySelector('.fa-star').classList.replace('fa-regular', 'fa-solid');
      }

      if (task.isComplete && task !== selectedTask) {
        const wrapper = taskWrapper.closest('.task');
        const checkmark = taskWrapper.closest('.task').querySelector('.fa-circle-check');
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        // const actions = taskWrapper.closest('.task').querySelector('.actions');
        const edit = taskWrapper.closest('.task').querySelector('.edit');
        const trash = taskWrapper.closest('.task').querySelector('.delete');
        const star = taskWrapper.closest('.task').querySelector('.fa-star');

        console.log(wrapper);
        console.log(checkmark);
        title.style.textDecoration = 'line-through';
        title.style.color = subtextColor;

        wrapper.style.backgroundColor = 'transparent';
        wrapper.style.boxShadow = 'none';
        wrapper.removeEventListener('click', renderTasksOpenView);
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
    // e.stopPropagation();
    console.log(currProject);
    console.log(_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects);
    toggleEditProject(e);
    renderTasks(currProject);
    renderTasksView(e);
  }
  function handleDeleteProjectClick(e) {
    e.stopPropagation();
    e.target.closest('.project').style.animation = 'ease-in formRight reverse 0.3s';
    e.target.closest('.project').style.opacity = '0.7';
    setTimeout(() => {
      deleteProject(e);
      resetProjects();
      renderProjects();
      showAll(e);
      renderTasksView(e);
    }, 100);
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
    // const existingProject = projects.find((project) => project.name === newProject.name);
    // if (!existingProject) {
    _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.unshift(newProject);
    currProject = newProject;
    resetForm();
    // }
    resetProjects();
    renderProjects();
    toggleAddProject();
    updateSelectedProject();
  }
  function editProject() {
    // if (!isProjectValid()) return;
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
    resetProjects();
    renderProjects();
  }
  function deleteProject(e) {
    projectIndex = e.target.closest('.project').getAttribute('data-id');
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
    project = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find(({ name }) => name === projectsFormInput.value);
    console.log(currProject);
    console.log(project);
    // console.log(temp);

    if (projectsFormInput.value === '') {
      allTasksList.getTasks().push(newTask);
      currProject = allTasksList;
    } else {
      project.getTasks().push(newTask);
      currProject = project;
    }

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

    const editedTask = storeTask();
    const temp = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find(({ name }) => name === projectsFormInput.value);
    console.log(temp);
    console.log(project);
    console.log(taskIndex);
    // project = temp;

    if (
      currProject.name === 'Starred' ||
      currProject.name === 'Today' ||
      currProject.name === 'Week'
    ) {
      currProject = allTasksList;
    }

    //the index of the task is wrong when moving to new project
    if (projectsFormInput.value !== project.name && projectsFormInput.value !== '') {
      temp.getTasks().splice(taskIndex, 1, editedTask);
      // temp.getTasks().push(editedTask);
      console.log(project.getTasks());
      allTasksList.getTasks().splice(taskIndex, 1);
      // currProject.getTasks().splice(taskIndex, 1); //deletes task from current project
      console.log(project.getTasks());
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

    if (!projectForm.hidden) {
      toggleAddProject();
    }
    resetProjects();
    renderProjects();
    renderTasksView(e);
    updateSelectedProject();
    updateSelectedFilter();
    renderTasks(currProject);
    // currProject = allTasksList; //uncomment line if things break
  }
  function deleteTask(e, project) {
    e.stopImmediatePropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    console.log(taskIndex);
    const taskToDelete = project.getTasks()[taskIndex];
    console.log(taskToDelete);
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
      //or currproject equals starred

      allTasksList.removeTask(taskToDelete);
      // if (currProject !== allTasksList) {
      //   project.removeTask(taskToDelete);
      // }
    }

    renderTasksView(e);
    renderTasks(currProject, taskToDelete);
  }

  function getAllTasks() {
    if (allTasksList.getTasks().length === 0 || allTasksList.getTasks() !== currProject) {
      const allTasks = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.flatMap((project) => project.tasks);
      const unassignedTasks = allTasksList
        .getTasks()
        .filter((task) => task.project === '');
      const combinedTasks = allTasks.concat(unassignedTasks);
      allTasksList = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', combinedTasks);
      console.log(allTasksList);
      // currProject = allTasksList;
    } else {
      console.log(allTasksList.getTasks().length === 0);
      console.log(allTasksList.getTasks() !== currProject);
      console.log(allTasksList);
      currProject = allTasksList;
    }
  }

  function showAll(e) {
    resetFilters();
    getAllTasks();
    currProject = allTasksList;

    console.log(allTasksList);
    selectAll.style.backgroundColor = componentColor;
    resetSelectedProject();
    resetProjects();

    renderProjects();
    currProject = allTasksList;
    renderTasksView(e);
    renderTasks(currProject);
  }

  function getStarredTasks() {
    const starredTasks = allTasksList.getTasks().filter((task) => task.isStarred);
    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Starred', starredTasks);
    console.log(currProject);
  }
  function showStarred(e) {
    resetFilters();
    getAllTasks();
    selectStarred.style.backgroundColor = componentColor;
    getStarredTasks();
    const starredProject = currProject;

    resetSelectedProject();
    resetProjects();

    renderProjects();
    renderTasksView(e);
    renderTasks(starredProject);
    currProject = starredProject;
    console.log(currProject);
  }

  selectAll.addEventListener('click', showAll);
  selectStarred.addEventListener('click', showStarred);
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

      console.log(selected);
      console.log(isProjectValid());
      // console.log(doesProjectExist());

      if (isProjectValid()) {
        if (selected === '') {
          addProject();
          console.log('Add ran');
        } else {
          editProject();
          selected.classList.toggle('edited');
          selected = '';
          console.log('Edit ran');
        }
      }

      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
      resetForm();
      // resetProjects();
      // renderProjects();
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
      ' - Expand tasks to view additional details about them. \n\n - Write notes, add dates and star tasks from the form pane. \n\n - Thank you for checking out my project!',
      'Default',
      '',
      true
    );
    const introTaskTwo = new _models_taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Sidebar Info',
      ' - Filter created tasks by All, Starred, Today or Week. \n\n - Add  projects by clicking (+) and pressing Enter. \n\n - Hover over existing projects to edit or delete them.',
      'Default',
      '',
      true
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

  removeTask(selectedTask) {
    const index = this.tasks.findIndex((task) => task.title === selectedTask.title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDJEQUFVO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwREFBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNtQjs7QUFFMUMsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdE1vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNlNGYwZmE7XFxuICAtLXByaW1hcnk6ICNmZjdjN2M7XFxuICAtLWRrLXRleHQ6ICMzMzQ2Njk7XFxuICAtLWRrLXN1YnRleHQ6ICM3YThhYTM7XFxuICAtLWNhcmQ6ICNlNmVlZjg7XFxuICAtLWNvbXBvbmVudC1zOiAjYzRjZGQxO1xcbiAgLS1jb21wb25lbnQ6ICNkM2RlZTM7XFxuICAtLWdyYWQtYmFzZTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0xOiByZ2IoMjUwLCAxNzcsIDEzNSk7XFxuICAtLWdyYWRpZW50LTI6IHJnYigyNDYsIDExNywgMTE3KTsgfVxcblxcbmh0bWxbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tYmctY29sb3I6ICMxMjEyMTU7XFxuICAtLXByaW1hcnk6ICM4ZDhmZDI7XFxuICAtLWRrLXRleHQ6ICNkZmUwZmI7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMxODE4MWM7XFxuICAtLWNvbXBvbmVudC1zOiAjNDU0MjU0O1xcbiAgLS1jb21wb25lbnQ6ICMyZjJkMzY7XFxuICAtLWdyYWQtYmFzZTogcmdiKDExOSwgODEsIDI0Nik7XFxuICAtLWdyYWRpZW50LTE6IHJnYigxMTksIDgxLCAyNDYpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoODgsIDQ0LCAyMzIpOyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgYm9keSBoMixcXG4gIGJvZHkgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gIGJvZHkgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNXB4OyB9XFxuICBib2R5IHAsXFxuICBib2R5IHNwYW4sXFxuICBib2R5IGksXFxuICBib2R5IHEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gIGJvZHkgaW5wdXQsXFxuICBib2R5IHRleHRhcmVhLFxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICByZXNpemU6IG5vbmU7IH1cXG4gIGJvZHkgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7IH1cXG4gIGJvZHkgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lOyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODsgfVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDI4NXB4OyB9XFxuICBoZWFkZXIgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICBoZWFkZXIgZGl2IHtcXG4gICAgd2lkdGg6IDYwMHB4OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMCA4dnc7IH1cXG4gIC5jYXJkcyAub3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAuY2FyZHMgLnNpZGViYXIsXFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgaGVpZ2h0OiA1NXZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEycHggMjhweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMnB4IDRweCAwcHg7IH1cXG4gIC5jYXJkcyAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIge1xcbiAgICAgIGhlaWdodDogMzJweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyIC5mYS1zdGFyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Qge1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgaSxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyIHAsXFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHAge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcixcXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBpIHtcXG4gICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5wbHVzOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5yb3RhdGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5yb3RhdGVkOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdC1ncnAge1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLmVkaXQtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdDpob3ZlciAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyICNwcm9qZWN0LW5hbWUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5naXRodWIge1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgLmNhcmRzIC50YXNrLFxcbiAgLmNhcmRzIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIsXFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC5uby10YXNrcyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA0MHZoOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCA4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyayB7XFxuICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyazphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgcCB7XFxuICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50LXMpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIC5hY3Rpb25zIC5lZGl0LFxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyB7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgICAgICAgIGdhcDogNHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIGkge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmVkaXQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICNub3RlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxNXZoOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNTQlKSBzYXR1cmF0ZSg1NjUwJSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoOTMlKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhcjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSByb3RhdGUoNzJkZWcpOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdGFycmVkIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuYmFjay1idG4ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0biB7XFxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgdmFyKC0tZ3JhZGllbnQtMSkgMCUsIHZhcigtLWdyYWRpZW50LTIpIDEwMCUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA1cHggMTVweCAwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5vcGVuLXRpdGxlLWhlYWRlciAuZmEtc3RhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5ub3RlLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IGhyIHtcXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tbm90ZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBoZWlnaHQ6IDMwdmg7XFxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYm90LWhyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgICAgd2lkdGg6IDg4cHg7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDhweCAxNnB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyAub3Blbi1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIC5iYWNrLWJ0biB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuIHtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgNXB4IDVweCAxNXB4IDBweDsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbi5zbGlkZS10YXNrcy1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgdGFza1JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpOyB9IH1cXG5cXG4uc2xpZGUtZm9ybS1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCAwLjFzOyB9XFxuXFxuLnNsaWRlLWZvcm0tb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsbCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0ZXh0Y2xpcCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UsbUJBQVc7RUFDWCxrQkFBVTtFQUNWLGtCQUFVO0VBQ1YscUJBQWE7RUFDYixlQUFPO0VBQ1Asc0JBQWM7RUFDZCxvQkFBWTtFQUNaLCtCQUFZO0VBQ1osZ0NBQWE7RUFDYixnQ0FBYSxFQUFBOztBQUdmO0VBQ0UsbUJBQVc7RUFDWCxrQkFBVTtFQUNWLGtCQUFVO0VBQ1YscUJBQWE7RUFDYixlQUFPO0VBQ1Asc0JBQWM7RUFDZCxvQkFBWTtFQUNaLDhCQUFZO0VBQ1osK0JBQWE7RUFDYiw4QkFBYSxFQUFBOztBQW9CZjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQ0EzQndCO0VBOEJ4QixhQUFhLEVBQUE7RUFKZjs7SUFPSSxxQkFoQ29CLEVBQUE7RUF5QnhCO0lBVUksZUFBZSxFQUFBO0VBVm5CO0lBYUksZUFBZTtJQUNmLHdCQXJDMEI7SUFzQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFFaEIsWUFBWSxFQUFBO0VBbEJoQjs7OztJQXlCSSx3QkFoRDBCLEVBQUE7RUF1QjlCOzs7SUE4QkksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQXREd0I7SUF1RHhCLHFCQTNEb0I7SUE0RHBCLFlBQVksRUFBQTtFQXBDaEI7SUF1Q0ksWUFBWSxFQUFBO0VBdkNoQjtJQTBDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBNUNyQjtJQStDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBcERwQjs7SUF5REksZUFBZSxFQUFBO0VBekRuQjtJQTRESSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYyxFQUFBO0VBTGhCO0lBT0kscUJBOUZvQjtJQWdHcEIsZUFBZTtJQUNmLFlBQVksRUFBQTtFQVZoQjtJQWFJLDRCQS9Gd0I7SUFnR3hCLGlGQUFxRTtJQUNyRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG9DQUFvQyxFQUFBO0VBakJ4QztJQW9CSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUVqQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGNBQWMsRUFBQTtFQU5oQjtJQVNNLHFCQTNIa0I7SUE0SGxCLHFCQUFxQjtJQUNyQiw0QkFBNEIsRUFBQTtFQVhsQztJQWNNLHFCQUFxQixFQUFBO0VBZDNCOztJQW1CSSw2QkFsSWM7SUFtSWQsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBRVosK0VBQStFO0lBRy9FLG9GQUFvRixFQUFBO0VBM0J4RjtJQWdDSSxtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUFqQ3JCO0lBb0NJLDZCQW5KYztJQW9KZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQixFQUFBO0lBdkMxQjtNQXlDTSxtQkFBbUIsRUFBQTtJQXpDekI7TUE0Q00sWUFBWSxFQUFBO01BNUNsQjtRQWdEUSxZQUFZO1FBQ1osV0FBVyxFQUFBO0lBakRuQjs7TUFzRE0sWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7TUF6RHZCOztRQTREUSxpQkFBaUIsRUFBQTtNQTVEekI7O1FBZ0VRLGlCQUFpQjtRQUNqQixvQkFBb0IsRUFBQTtJQWpFNUI7O01Bc0VNLGVBQWUsRUFBQTtJQXRFckI7TUF5RU0sYUFBYTtNQUNiLDhCQUE4QixFQUFBO01BMUVwQztRQTZFUSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZiw0QkFBNEIsRUFBQTtNQWhGcEM7UUFvRlEscUJBdE1nQjtRQXVNaEIscUJBQXFCLEVBQUE7TUFyRjdCO1FBd0ZRLHdCQUF3QjtRQUN4Qiw0QkFBNEIsRUFBQTtRQXpGcEM7VUEyRlUscUJBN01jLEVBQUE7SUFrSHhCO01BZ0dNLE9BQU87TUFDUCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGNBQWMsRUFBQTtJQW5HcEI7TUFzR00sa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixXQUFXLEVBQUE7TUF4R2pCO1FBMEdRLGVBQWUsRUFBQTtJQTFHdkI7TUE4R00sYUFBYTtNQUNiLFlBQVk7TUFFWixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixVQUFVLEVBQUE7TUFwSGhCO1FBdUhRLG9CQUFvQixFQUFBO01Bdkg1QjtRQTBIUSxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7TUEzSDFCO1FBOEhRLGlCQUFpQjtRQUNqQixhQUFhLEVBQUE7UUEvSHJCO1VBaUlVLGVBQWUsRUFBQTtRQWpJekI7VUFvSVUsVUFBVSxFQUFBO1FBcElwQjtVQXVJVSxpQkFBaUIsRUFBQTtRQXZJM0I7VUEwSVUsaUJBQWlCLEVBQUE7TUExSTNCO1FBZ0pZLFVBQVUsRUFBQTtJQWhKdEI7TUFzSk0sV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtJQXhKeEI7TUEySk0sWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsZ0JBQWdCLEVBQUE7TUE5SnRCO1FBZ0tRLGVBQWUsRUFBQTtFQWhLdkI7O0lBc0tJLGFBQWEsRUFBQTtFQXRLakI7SUF5S0ksWUFBWTtJQUNaLGtCQUFrQixFQUFBO0lBMUt0Qjs7O01BOEtNLFlBQVksRUFBQTtJQTlLbEI7TUFpTE0sYUFBYTtNQUNiLHNCQUFzQixFQUFBO01BbEw1QjtRQW9MUSx3QkFwU3NCO1FBcVN0QixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCLEVBQUE7TUF6THpCO1FBNExRLGtCQUFrQjtRQUNsQixZQUFZLEVBQUE7TUE3THBCO1FBZ01RLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQ0FwVG9CO1FBcVRwQixvRkFDcUM7UUFDckMsNEJBQTRCLEVBQUE7UUExTXBDO1VBNE1VLGFBQWEsRUFBQTtRQTVNdkI7VUErTVUsY0FBYztVQUNkLFlBQVk7VUFDWiw0QkFBNEIsRUFBQTtVQWpOdEM7WUFtTlkscUJBQXFCLEVBQUE7UUFuTmpDOztVQXdOVSxZQUFZO1VBQ1osZUFBZTtVQUNmLGFBQWE7VUFDYixtQkFBbUIsRUFBQTtRQTNON0I7VUE4TlUsWUFBWTtVQUNaLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsb0JBQW9CO1VBQ3BCLHFCQXRWYztVQXVWZCxnQkFBZ0IsRUFBQTtRQXRPMUI7VUEwT1UsaUJBQWlCLEVBQUE7UUExTzNCO1VBNk9VLGlCQUFpQixFQUFBO1FBN08zQjtVQWdQVSxvQ0E5VnNCLEVBQUE7VUE4R2hDOztZQW9QYyw0QkFBNEI7WUFDNUIsVUFBVSxFQUFBO1FBclB4QjtVQTBQVSxVQUFVO1VBQ1YsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsUUFBUSxFQUFBO1VBOVBsQjtZQWdRWSxZQUFZO1lBRVosYUFBYTtZQUNiLG1CQUFtQixFQUFBO1VBblEvQjtZQXNRWSw0QkFBNEIsRUFBQTtVQXRReEM7WUF5UVksVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsdUJBQXVCLEVBQUE7VUE1UW5DO1lBK1FZLGFBQWEsRUFBQTtVQS9RekI7WUFrUlksVUFBVSxFQUFBO1VBbFJ0QjtZQXNSWSx3QkF0WWtCLEVBQUE7SUFnSDlCO01BNFJNLGFBQWEsRUFBQTtNQTVSbkI7UUE4UlEsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCLEVBQUE7UUFqUzlCO1VBbVNVLGdCQUFnQixFQUFBO1FBblMxQjtVQXNTVSxZQUFZLEVBQUE7UUF0U3RCO1VBeVNVLGFBQWE7VUFDYiw4QkFBOEI7VUFDOUIsbUJBQW1CO1VBQ25CLFNBQVMsRUFBQTtRQTVTbkI7VUErU1UsVUFBVSxFQUFBO1FBL1NwQjtVQWtUVSxXQUFXO1VBQ1gscUJBQXFCLEVBQUE7VUFuVC9CO1lBcVRZLGlHQUNnQyxFQUFBO1FBdFQ1QztVQTJUVSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsYUFBYTtVQUNiLHVCQUF1QjtVQUN2Qiw0QkFBNEI7VUFDNUIscUJBcGJjLEVBQUE7VUFrSHhCO1lBb1VZLHFCQUFxQixFQUFBO1VBcFVqQztZQXVVWSxtQ0FBbUMsRUFBQTtRQXZVL0M7VUEyVVUsZUFBZSxFQUFBO1FBM1V6QjtVQThVVSw0QkFBNEIsRUFBQTtRQTlVdEM7VUFrVlUsZ0JBQWdCO1VBQ2hCLGFBQWEsRUFBQTtRQW5WdkI7VUFzVlUsNkJBcmNRO1VBc2NSLFlBQVk7VUFDWixxQkF6Y2M7VUEwY2QsZUFBZSxFQUFBO1FBelZ6QjtVQTZWVSxZQUFZO1VBQ1osWUFBWTtVQUNaLG1CQUFtQjtVQUNuQixZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixxQkFwZGM7VUFxZGQsNEJBaGRrQjtVQWlkbEIsaUZBQXFFO1VBQ3JFLGdEQUFnRDtVQUNoRCw0QkFBNEIsRUFBQTtVQXZXdEM7WUF5V1ksc0JBQXNCLEVBQUE7VUF6V2xDO1lBNFdZLHNCQUFzQixFQUFBO0lBNVdsQztNQWtYTSxhQUFhLEVBQUE7TUFsWG5CO1FBcVhRLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGlCQUFpQixFQUFBO1FBeFh6QjtVQTBYVSxtQkFBbUIsRUFBQTtVQTFYN0I7WUE2WFksYUFBYSxFQUFBO1lBN1h6QjtjQStYYyxpQkFBaUIsRUFBQTtZQS9YL0I7Y0FrWWMsZUFBZSxFQUFBO1FBbFk3QjtVQXdZVSxhQUFhO1VBQ2IsOEJBQThCO1VBQzlCLGdCQUFnQixFQUFBO1VBMVkxQjtZQTZZWSxlQUFlO1lBQ2YscUJBaGdCWSxFQUFBO1FBa0h4QjtVQWtaVSx1QkFBdUIsRUFBQTtRQWxaakM7VUFxWlUsV0FBVztVQUNYLDBCQXhnQmM7VUEwZ0JkLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsbUJBQW1CLEVBQUE7UUExWjdCO1VBNlpVLHFCQTlnQmMsRUFBQTtRQWlIeEI7VUFnYVUsd0JBaGhCb0I7VUFpaEJwQixjQUFjO1VBQ2QsZUFBZTtVQUNmLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osZ0JBQWdCLEVBQUE7UUFyYTFCO1VBd2FVLGdCQUFnQjtVQUNoQixXQUFXO1VBQ1gsaUJBQWlCLEVBQUE7UUExYTNCO1VBNmFVLGdCQUFnQjtVQUNoQix3QkFBd0I7VUFDeEIsYUFBYTtVQUNiLDhCQUE4QixFQUFBO1FBaGJ4QztVQW1iVSxhQUFhO1VBQ2IsbUJBQW1CLEVBQUE7VUFwYjdCO1lBc2JZLHFCQXhpQlk7WUF5aUJaLGdCQUFnQixFQUFBO1FBdmI1QjtVQTJiVSxnQkFBZ0IsRUFBQTtVQTNiMUI7WUE2YlksNkJBNWlCTTtZQTZpQk4sWUFBWTtZQUNaLHFCQWhqQlk7WUFpakJaLGVBQWUsRUFBQTtJQWhjM0I7TUFzY00sZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHFCQTlqQmtCO01BK2pCbEIsNEJBMWpCc0I7TUEyakJ0QixpRkFBcUU7TUFDckUsNEJBQTRCO01BQzVCLGdEQUFnRCxFQUFBO01BamR0RDtRQW9kUSxzQkFBc0IsRUFBQTtNQXBkOUI7UUF1ZFEsc0JBQXNCLEVBQUE7O0FBTTlCO0VBQ0UsMENBQTBDLEVBQUE7O0FBRTVDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0U7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDJCQUEyQixFQUFBLEVBQUE7O0FBRy9CO0VBQ0Usa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0UsMENBQTBDLEVBQUE7O0FBRTVDO0VBQ0U7SUFDRSw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLHdCQUF3QixFQUFBLEVBQUE7O0FBRzVCO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLHdCQUF3QixFQUFBLEVBQUE7O0FBRzVCO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLHdCQUF3QixFQUFBLEVBQUE7O0FBRzVCO0VBQ0U7SUFFRSxzQkFBc0I7SUFDdEIsVUFBVSxFQUFBO0VBRVo7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVSxFQUFBLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLHlCQUF5QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4vLyAgIC0tYmctY29sb3I6ICMxMDBmMTQ7XFxuLy8gICAtLXByaW1hcnk6ICNlODcwNzA7XFxuLy8gICAtLWRrLXRleHQ6ICNkMmQ4Zjc7XFxuLy8gICAtLWRrLXN1YnRleHQ6ICNkMmQ4ZjdhNjtcXG4vLyAgIC0tY2FyZDogIzE0MTMxOTtcXG4vLyAgIC0tY29tcG9uZW50LXM6ICMzNTMyNDA7XFxuLy8gICAtLWNvbXBvbmVudDogIzI0MjIyZDtcXG4vLyB9XFxuaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNlNGYwZmE7IC8vI2YzZWRlMzk0O1xcbiAgLS1wcmltYXJ5OiAjZmY3YzdjO1xcbiAgLS1kay10ZXh0OiAjMzM0NjY5O1xcbiAgLS1kay1zdWJ0ZXh0OiAjN2E4YWEzO1xcbiAgLS1jYXJkOiAjZTZlZWY4OyAvLyNmM2YwZTM4NDtcXG4gIC0tY29tcG9uZW50LXM6ICNjNGNkZDE7XFxuICAtLWNvbXBvbmVudDogI2QzZGVlMztcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMjUwLCAxNzcsIDEzNSk7XFxuICAtLWdyYWRpZW50LTE6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiKDI0NiwgMTE3LCAxMTcpO1xcbn1cXG5cXG5odG1sW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWJnLWNvbG9yOiAjMTIxMjE1O1xcbiAgLS1wcmltYXJ5OiAjOGQ4ZmQyO1xcbiAgLS1kay10ZXh0OiAjZGZlMGZiOyAvLyNkOWQ5ZTg7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMxODE4MWM7XFxuICAtLWNvbXBvbmVudC1zOiAjNDU0MjU0O1xcbiAgLS1jb21wb25lbnQ6ICMyZjJkMzY7XFxuICAtLWdyYWQtYmFzZTogcmdiKDExOSwgODEsIDI0Nik7XFxuICAtLWdyYWRpZW50LTE6IHJnYigxMTksIDgxLCAyNDYpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoODgsIDQ0LCAyMzIpO1xcbn1cXG4kYmctY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4kcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XFxuJGRrLXRleHQ6IHZhcigtLWRrLXRleHQpO1xcbiRkay1zdWJ0ZXh0OiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4kY2FyZDogdmFyKC0tY2FyZCk7XFxuJGNvbXBvbmVudC1zOiB2YXIoLS1jb21wb25lbnQtcyk7XFxuJGNvbXBvbmVudDogdmFyKC0tY29tcG9uZW50KTtcXG4kZ3JhZC1iYXNlOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiRncmFkaWVudC0xOiB2YXIoLS1ncmFkaWVudC0xKTtcXG4kZ3JhZGllbnQtMjogdmFyKC0tZ3JhZGllbnQtMik7XFxuLy8gJGJnLWNvbG9yOiAjZDJkOGY3YTY7XFxuLy8gJHByaW1hcnk6ICNlODcwNzA7XFxuLy8gJGRrLXRleHQ6ICNkMmQ4Zjc7XFxuLy8gJGRrLXN1YnRleHQ6ICNkMmQ4ZjdhNjtcXG4vLyAkY2FyZDogIzE0MTMxOTtcXG4vLyAkY29tcG9uZW50LXM6ICMzNTMyNDA7XFxuLy8gJGNvbXBvbmVudDogIzI0MjIyZDtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNTEzMTk7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODFkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICB9XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICB9XFxuXFxuICBwLFxcbiAgc3BhbixcXG4gIGksXFxuICBxIHtcXG4gICAgY29sb3I6ICRkay1zdWJ0ZXh0OyAvLyRwcmltYXJ5XFxuICB9XFxuICBpbnB1dCxcXG4gIHRleHRhcmVhLFxcbiAgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgfVxcbiAgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODtcXG4gIH1cXG59XFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCA4dnc7XFxuICBoMSB7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1dnc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDI4NXB4O1xcbiAgfVxcbiAgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgZGl2IHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgfVxcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvLyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOHZ3O1xcbiAgLm9wdGlvbnMge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgfVxcbiAgfVxcbiAgLnNpZGViYXIsXFxuICAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDU1dmg7XFxuXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMjBweCAyNXB4IC01cHgsXFxuICAgIC8vICAgcmdiYSgwLCAwLCAwLCAwLjA0KSAwcHggMTBweCAxMHB4IC01cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweDtcXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxM3B4IDI3cHggLTVweCxcXG4gICAgLy8gICByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDhweCAxNnB4IC04cHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLmZpbHRlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIH1cXG4gICAgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgIC8vIGhlaWdodDogMThweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5wbHVzOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICB9XFxuICAgICAgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcbiAgICAuZ2l0aHViIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLnRhc2ssXFxuICBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgd2lkdGg6IDU2MHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIC50LXdyYXBwZXIsXFxuICAgIC5mLXdyYXBwZXIsXFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAudC13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLm5vLXRhc2tzIHtcXG4gICAgICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB9XFxuICAgICAgLnRhc2tzIHtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXG4gICAgICB9XFxuICAgICAgLnRhc2sge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCA4cHggMHB4LFxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50LXM7XFxuICAgICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgICAuZWRpdCxcXG4gICAgICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgICAgZ2FwOiA0cHg7XFxuICAgICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGkge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmVkaXQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5mLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjbm90ZSB7XFxuICAgICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICB9XFxuICAgICAgICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xcbiAgICAgICAgICAmOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoNTY1MCUpIGh1ZS1yb3RhdGUoMTc5ZGVnKVxcbiAgICAgICAgICAgICAgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCg5MyUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuc3RhcnJlZCB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG5cXG4gICAgICAgICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xcblxcbiAgICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLm5vdGUtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHggMCAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgaHIge1xcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XFxuXFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI29wZW4tdGl0bGUge1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICB9XFxuICAgICAgICAjb3Blbi1ub3RlIHtcXG4gICAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgICAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib3QtaHIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICB3aWR0aDogODhweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDE2cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAub3Blbi1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmFkZC1idG4ge1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgJGdyYWRpZW50LTEgMCUsICRncmFkaWVudC0yIDEwMCUpO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSA1cHggNXB4IDE1cHggMHB4O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0ZXh0Y2xpcCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgVGFzayBmcm9tICcuL21vZGVscy90YXNrTW9kZWwnO1xuaW1wb3J0IFByb2plY3QsIHsgcHJvamVjdHMgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0TW9kZWwnO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi92aWV3cy90YXNrVmlldyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3ZpZXdzL3Byb2plY3RWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwQ29udHJvbGxlcigpIHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudC13cmFwcGVyJyk7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmYtd3JhcHBlcicpO1xuICBjb25zdCBvcGVuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdyYXBwZXInKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtcGx1cycpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKTtcbiAgY29uc3QgcHJvamVjdHNGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgY29uc3QgZm9ybVN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKTtcbiAgY29uc3QgcHJvamVjdEdycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgY29uc3Qgc2VsZWN0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICBjb25zdCBzZWxlY3RTdGFycmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJyZWQnKTtcblxuICBjb25zdCBjb21wb25lbnRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb21wb25lbnQnKTtcbiAgY29uc3QgdGV4dENvbG9yID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWRrLXRleHQnKTtcbiAgY29uc3Qgc3VidGV4dENvbG9yID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWRrLXN1YnRleHQnKTtcbiAgY29uc3QgY2FyZENvbG9yID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWNhcmQnKTtcbiAgY29uc3QgcHJpbWFyeUNvbG9yID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKTtcblxuICBsZXQgdGFza0luZGV4ID0gMDtcbiAgbGV0IHByb2plY3RJbmRleDtcbiAgbGV0IGN1cnJQcm9qZWN0O1xuICBsZXQgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcpO1xuICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuICBsZXQgc2VsZWN0ZWQgPSAnJztcblxuICAvLyBhbmltYXRpb25zXG4gIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgMC4xcyc7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBzaG93VGFza3NSaWdodCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVUYXNrc1JpZ2h0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1Rhc2tzTGVmdCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlVGFza3NMZWZ0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBvcGVuVGFzayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGNsb3NlVGFzayA9ICgpID0+IHtcbiAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgLy8gdmFsaWRpdHlcbiAgZnVuY3Rpb24gaXNQcm9qZWN0VmFsaWQoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBpZiAoIXByb2plY3QudmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICBwcm9qZWN0LnNldEN1c3RvbVZhbGlkaXR5KCdQcm9qZWN0IGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgcHJvamVjdC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBpc1Rhc2tWYWxpZCgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICBpZiAoIXRhc2sudmFsdWUpIHtcbiAgICAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICB0YXNrLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdG9nZ2xlc1xuICBjb25zdCB0b2dnbGVCdG5UZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGl0bGUtaGVhZGVyJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoZSwgcHJvamVjdCkgPT4ge1xuICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgdGFza0luZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF07XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gZS50YXJnZXQ7XG4gICAgLy8gfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcblxuICAgIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NPcGVuVmlldyk7XG4gICAgfVxuICAgIHRhc2suaXNDb21wbGV0ZSA9ICF0YXNrLmlzQ29tcGxldGU7XG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrbWFya0NsYXNzZXMgPSBbJ2ZhLXJlZ3VsYXInLCAnZmEtc29saWQnLCAnZmEtY2lyY2xlJywgJ2ZhLWNpcmNsZS1jaGVjayddO1xuICAgIGNoZWNrbWFya0NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRUYXNrLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBzZWxlY3RlZFRhc2suY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgIC8vIGNvbnN0IGFjdGlvbnMgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XG4gICAgY29uc3QgZWRpdCA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgdHJhc2ggPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgY29uc3Qgc3RhciA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJyk7XG5cbiAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICcnICYmIHRpdGxlLnN0eWxlLmNvbG9yICE9PSAnI2QyZDhmN2E2Jykge1xuICAgICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgIGVkaXQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgIHRyYXNoLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICBzdGFyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG5cbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIHdyYXBwZXIuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSBzdWJ0ZXh0Q29sb3I7XG4gICAgICBlZGl0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB0cmFzaC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgc3Rhci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgZWRpdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgdHJhc2guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHN0YXIuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdG9nZ2xlRm9ybVN0YXIgPSAoKSA9PiB7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnJlZCcpO1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXJlZ3VsYXInKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpO1xuICB9O1xuICBjb25zdCB0b2dnbGVQbHVzQnRuID0gKCkgPT4ge1xuICAgIC8vIHJlc2V0Rm9ybSgpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncGx1cycpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlZCcpO1xuICB9O1xuICBjb25zdCB0b2dnbGVBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkID0gJyc7XG4gICAgdG9nZ2xlUGx1c0J0bigpO1xuICAgIHByb2plY3RGb3JtLmhpZGRlbiA9ICFwcm9qZWN0Rm9ybS5oaWRkZW47XG5cbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgcHJvamVjdEZvcm0uc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1WZXJ0aWNhbCAwLjJzJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEdycC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9qZWN0R3JwLmNoaWxkcmVuW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtVmVydGljYWwgMC4ycyc7XG4gICAgICB9XG4gICAgICBwcm9qZWN0R3JwLmluc2VydEJlZm9yZShwcm9qZWN0Rm9ybSwgcHJvamVjdEdycC5maXJzdENoaWxkKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zJyk7XG4gICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcbiAgICBpZiAocHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICAvLyBwcm9qZWN0Rm9ybS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgcmV2ZXJzZSBmb3JtVmVydGljYWwgMC4ycyc7XG4gICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgcmVzZXRQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHRvZ2dsZUVkaXRQcm9qZWN0KGUpIHtcbiAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIHByb2plY3RGb3JtLmhpZGRlbiA9ICFwcm9qZWN0Rm9ybS5oaWRkZW47XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYnRuLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBhcHBlYXJGb3JtIDAuMnMnO1xuXG4gICAgICBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHByb2plY3RHcnAuY2hpbGRyZW4uaXRlbShwcm9qZWN0SW5kZXgpO1xuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHNlbGVjdGVkSW5kZXgpO1xuICAgICAgLy8gaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBpbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgIHNlbGVjdGVkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRlZCcpO1xuICAgICAgc2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgY3VyclByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgICAgLy8gcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgICAgLy8gcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIH1cbiAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICB9XG5cbiAgLy8gcmVzZXRzXG4gIGZ1bmN0aW9uIHJlc2V0U3RhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKS5jbGFzc05hbWUgPSAnYWRkLXN0YXIgZmEtcmVndWxhciBmYS1zdGFyJztcbiAgfVxuICBmdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGlmIChlZGl0QnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5yZXNldCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICBjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcicpO1xuICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ2ZvbGRlciBmYS1yZWd1bGFyIGZhLWZvbGRlcic7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlc1xuICBmdW5jdGlvbiB1cGRhdGVPcGVuVGFzayhlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi10aXRsZScpO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1ub3RlJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKTtcbiAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1mb2xkZXInKTtcbiAgICAvLyBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcblxuICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1zdGFyJyk7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5nZXRJc1N0YXJyZWQoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0udGl0bGU7XG4gICAgbm90ZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5ub3RlO1xuXG4gICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50Q29sb3IpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdFN0YXJyZWQuc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgICAvLyBpZiAoc2VsZWN0U3RhcnJlZC5zdHlsZS5jb2xvciA9PT0gY29tcG9uZW50Q29sb3IpIHtcbiAgICAvLyAgIGdldFN0YXJyZWRUYXNrcygpO1xuICAgIC8vIH1cbiAgICBpZiAoY3VyclByb2plY3QubmFtZSA9PT0gJ0FsbCcpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnQWxsJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIG9wZW4tZm9sZGVyJztcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICdpbmJveCc7XG4gICAgICBjb25zb2xlLmxvZyhmb2xkZXIuY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdTdGFycmVkJykge1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdTdGFycmVkJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtc3RhciBvcGVuLWZvbGRlcic7XG4gICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgLy9BZGQgdXBkYXRlcyB0byBUb2RheVxuICAgIC8vQWRkIHVwZGF0ZXMgdG8gV2Vla1xuICAgIGVsc2Uge1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgb3Blbi1mb2xkZXInO1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5wcm9qZWN0O1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJ2ZvbGRlcic7XG4gICAgfVxuICAgIGlmIChpc1N0YXJyZWQgPT09IGZhbHNlKSB7XG4gICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBsZXQgZm91bmRQcm9qZWN0ID0gZmFsc2U7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChmb3VuZFByb2plY3QpIHJldHVybjtcbiAgICAgIGNvbnN0IGkgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgIGNvbnN0IHAgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICAgIGlmIChwLnRleHRDb250ZW50ID09PSBjdXJyUHJvamVjdC5uYW1lKSB7XG4gICAgICAgIHAuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAgICAgaS5jbG9zZXN0KCcuZm9sZGVyJykuY2xhc3NOYW1lID0gJ2ZvbGRlciBmYS1zb2xpZCBmYS1mb2xkZXInO1xuICAgICAgICBmb3VuZFByb2plY3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCkge1xuICAgIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnQWxsJykge1xuICAgICAgc2VsZWN0QWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzT3BlblZpZXcoZSkge1xuICAgIGhpZGVUYXNrc0xlZnQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlblRhc2soKTtcbiAgICAgIHVwZGF0ZU9wZW5UYXNrKGUpO1xuICAgIH0sIDEwMCk7XG4gIH1cbiAgY29uc3QgcmVuZGVyRm9ybVZpZXcgPSAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgaWYgKHByb2plY3RGb3JtLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93Rm9ybSgpO1xuICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckVkaXRWaWV3ID0gKGUsIHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAocHJvamVjdEZvcm0uaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cbiAgICB0YXNrSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS50aXRsZTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5ub3RlO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QubmFtZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldFxuICAgICAgLmNsb3Nlc3QoJy50YXNrJylcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBwcm9qZWN0TmFtZTtcblxuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc29saWQnKTtcbiAgICB9XG5cbiAgICBoaWRlVGFza3NSaWdodCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCByZW5kZXJUYXNrc1ZpZXcgPSAoZSkgPT4ge1xuICAgIC8vIHJlc2V0Rm9ybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNoZWNrbWFya3MuZm9yRWFjaCgoY2hlY2ttYXJrKSA9PiB7XG4gICAgICBjaGVja21hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZShlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0QnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHJlbmRlckVkaXRWaWV3KGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLWluIGZvcm1SaWdodCByZXZlcnNlIDAuM3MnO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpOyAvLz8/P1xuICAgICAgICAgIGRlbGV0ZVRhc2soZSwgY3VyclByb2plY3QpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCwgc2VsZWN0ZWRUYXNrKSB7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHAnKS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyBmb3VuZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MgcCcpLmNsYXNzTmFtZSA9ICduby10YXNrcyc7XG4gICAgfVxuXG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kKHRhc2tXcmFwcGVyKTtcbiAgICAgIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCB0YXNrLnByb2plY3QpO1xuXG4gICAgICBpZiAodGFzay5pc1N0YXJyZWQpIHtcbiAgICAgICAgLy8vLyB0YXNrLmlzU3RhcnJlZFxuICAgICAgICB0YXNrV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgJiYgdGFzayAhPT0gc2VsZWN0ZWRUYXNrKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICBjb25zdCBjaGVja21hcmsgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaXJjbGUtY2hlY2snKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIC8vIGNvbnN0IGFjdGlvbnMgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgICAgIGNvbnN0IHRyYXNoID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IHN0YXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cod3JhcHBlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbWFyayk7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgICAgLy8gYWN0aW9ucy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRUYXNrSGFuZGxlcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9KTtcbiAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuXG4gICAgY29uc3QgZm9sZGVyID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtc29saWQgZmEtZm9sZGVyJztcblxuICAgIHByb2plY3RJbmRleCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY3VyclByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuXG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdENsaWNrKGUpIHtcbiAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgdG9nZ2xlRWRpdFByb2plY3QoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0Q2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjNzJztcbiAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnN0eWxlLm9wYWNpdHkgPSAnMC43JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZSk7XG4gICAgICByZXNldFByb2plY3RzKCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgc2hvd0FsbChlKTtcbiAgICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFByb2plY3RIYW5kbGVycygpIHtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtcCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXAnKTtcblxuICAgIHByb2plY3RXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdENsaWNrKTtcbiAgICB9KTtcblxuICAgIGVkaXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdFByb2plY3RDbGljayk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAvLyByZXNldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGlmICghaXNQcm9qZWN0VmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBzdG9yZVByb2plY3QoKTtcbiAgICAvLyBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSk7XG4gICAgLy8gaWYgKCFleGlzdGluZ1Byb2plY3QpIHtcbiAgICBwcm9qZWN0cy51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICByZXNldEZvcm0oKTtcbiAgICAvLyB9XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICB9XG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuICAgIC8vIGlmICghaXNQcm9qZWN0VmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFuYW1lLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgbmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIG5hbWUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWUgPSBuYW1lLnZhbHVlO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KCk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gICAgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGZvcm1TdGFyLmNsYXNzTGlzdC5jb250YWlucygnc3RhcnJlZCcpO1xuXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yZVRhc2soKTtcbiAgICBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHByb2plY3RzRm9ybUlucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcCk7XG5cbiAgICBpZiAocHJvamVjdHNGb3JtSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICBhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKS5wdXNoKG5ld1Rhc2spO1xuICAgICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5wdXNoKG5ld1Rhc2spO1xuICAgICAgY3VyclByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0Rm9ybS5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgfVxuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICByZXNldEZvcm0oKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0VGFzayhlLCBwcm9qZWN0KSB7XG4gICAgaWYgKCFpc1Rhc2tWYWxpZCgpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZWRpdGVkVGFzayA9IHN0b3JlVGFzaygpO1xuICAgIGNvbnN0IHRlbXAgPSBwcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdHNGb3JtSW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tJbmRleCk7XG4gICAgLy8gcHJvamVjdCA9IHRlbXA7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyUHJvamVjdC5uYW1lID09PSAnU3RhcnJlZCcgfHxcbiAgICAgIGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdUb2RheScgfHxcbiAgICAgIGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdXZWVrJ1xuICAgICkge1xuICAgICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgfVxuXG4gICAgLy90aGUgaW5kZXggb2YgdGhlIHRhc2sgaXMgd3Jvbmcgd2hlbiBtb3ZpbmcgdG8gbmV3IHByb2plY3RcbiAgICBpZiAocHJvamVjdHNGb3JtSW5wdXQudmFsdWUgIT09IHByb2plY3QubmFtZSAmJiBwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRlbXAuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTtcbiAgICAgIC8vIHRlbXAuZ2V0VGFza3MoKS5wdXNoKGVkaXRlZFRhc2spO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgLy8gY3VyclByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTsgLy9kZWxldGVzIHRhc2sgZnJvbSBjdXJyZW50IHByb2plY3RcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgICBjdXJyUHJvamVjdCA9IHRlbXA7XG4gICAgfSBlbHNlIHByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTtcblxuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgfVxuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICAvLyBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDsgLy91bmNvbW1lbnQgbGluZSBpZiB0aGluZ3MgYnJlYWtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc29sZS5sb2codGFza0luZGV4KTtcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcbiAgICBjb25zb2xlLmxvZyh0YXNrVG9EZWxldGUpO1xuICAgIC8vIEZpbmQgcHJvamVjdCB0YXNrIG9yaWdpbmFsbHkgY2FtZSBmcm9tXG4gICAgbGV0IHByb2plY3RUb0RlbGV0ZUZyb207XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLmdldFRhc2tzKCkuaW5jbHVkZXModGFza1RvRGVsZXRlKSkge1xuICAgICAgICBwcm9qZWN0VG9EZWxldGVGcm9tID0gcHJvamVjdHNbaV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9EZWxldGVGcm9tKTtcbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9qZWN0VG9EZWxldGVGcm9tLnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gY3VyclByb2plY3QpIHtcbiAgICAgIC8vb3IgY3VycnByb2plY3QgZXF1YWxzIHN0YXJyZWRcblxuICAgICAgYWxsVGFza3NMaXN0LnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICAgIC8vIGlmIChjdXJyUHJvamVjdCAhPT0gYWxsVGFza3NMaXN0KSB7XG4gICAgICAvLyAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpO1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCwgdGFza1RvRGVsZXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgIGlmIChhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKS5sZW5ndGggPT09IDAgfHwgYWxsVGFza3NMaXN0LmdldFRhc2tzKCkgIT09IGN1cnJQcm9qZWN0KSB7XG4gICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RzLmZsYXRNYXAoKHByb2plY3QpID0+IHByb2plY3QudGFza3MpO1xuICAgICAgY29uc3QgdW5hc3NpZ25lZFRhc2tzID0gYWxsVGFza3NMaXN0XG4gICAgICAgIC5nZXRUYXNrcygpXG4gICAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gJycpO1xuICAgICAgY29uc3QgY29tYmluZWRUYXNrcyA9IGFsbFRhc2tzLmNvbmNhdCh1bmFzc2lnbmVkVGFza3MpO1xuICAgICAgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcsIGNvbWJpbmVkVGFza3MpO1xuICAgICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICAgIC8vIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKS5sZW5ndGggPT09IDApO1xuICAgICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0LmdldFRhc2tzKCkgIT09IGN1cnJQcm9qZWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93QWxsKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICBzZWxlY3RBbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGFycmVkVGFza3MoKSB7XG4gICAgY29uc3Qgc3RhcnJlZFRhc2tzID0gYWxsVGFza3NMaXN0LmdldFRhc2tzKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlzU3RhcnJlZCk7XG4gICAgY3VyclByb2plY3QgPSBuZXcgUHJvamVjdCgnU3RhcnJlZCcsIHN0YXJyZWRUYXNrcyk7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dTdGFycmVkKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIHNlbGVjdFN0YXJyZWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgZ2V0U3RhcnJlZFRhc2tzKCk7XG4gICAgY29uc3Qgc3RhcnJlZFByb2plY3QgPSBjdXJyUHJvamVjdDtcblxuICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3Moc3RhcnJlZFByb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gc3RhcnJlZFByb2plY3Q7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICB9XG5cbiAgc2VsZWN0QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG4gIHNlbGVjdFN0YXJyZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U3RhcnJlZCk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0KTtcbiAgZm9ybVN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtU3Rhcik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJGb3JtVmlldyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gaW5jb3JyZWN0SW5wdXQgPSBmYWxzZTtcbiAgICBhZGRUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgfSk7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGluY29ycmVjdElucHV0ID0gZmFsc2U7XG4gICAgZWRpdFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcblxuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuICAgICAgY29uc29sZS5sb2coaXNQcm9qZWN0VmFsaWQoKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkb2VzUHJvamVjdEV4aXN0KCkpO1xuXG4gICAgICBpZiAoaXNQcm9qZWN0VmFsaWQoKSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgcmFuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFByb2plY3QoKTtcbiAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHJhbicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAvLyByZXNldFByb2plY3RzKCk7XG4gICAgICAvLyByZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICBjb25zdCBpbnRyb1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICdDbGljayBtZSB0byBsZWFybiBtb3JlIScsXG4gICAgICAnIC0gRXhwYW5kIHRhc2tzIHRvIHZpZXcgYWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZW0uIFxcblxcbiAtIFdyaXRlIG5vdGVzLCBhZGQgZGF0ZXMgYW5kIHN0YXIgdGFza3MgZnJvbSB0aGUgZm9ybSBwYW5lLiBcXG5cXG4gLSBUaGFuayB5b3UgZm9yIGNoZWNraW5nIG91dCBteSBwcm9qZWN0IScsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGNvbnN0IGludHJvVGFza1R3byA9IG5ldyBUYXNrKFxuICAgICAgJ1NpZGViYXIgSW5mbycsXG4gICAgICAnIC0gRmlsdGVyIGNyZWF0ZWQgdGFza3MgYnkgQWxsLCBTdGFycmVkLCBUb2RheSBvciBXZWVrLiBcXG5cXG4gLSBBZGQgIHByb2plY3RzIGJ5IGNsaWNraW5nICgrKSBhbmQgcHJlc3NpbmcgRW50ZXIuIFxcblxcbiAtIEhvdmVyIG92ZXIgZXhpc3RpbmcgcHJvamVjdHMgdG8gZWRpdCBvciBkZWxldGUgdGhlbS4nLFxuICAgICAgJ0RlZmF1bHQnLFxuICAgICAgJycsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBpbnRyb1Byb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuICAgIGN1cnJQcm9qZWN0ID0gaW50cm9Qcm9qZWN0O1xuICAgIHByb2plY3RzLnB1c2goaW50cm9Qcm9qZWN0KTtcbiAgICBpbnRyb1Byb2plY3QuZ2V0VGFza3MoKS5wdXNoKGludHJvVGFzayk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2tUd28pO1xuXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZXNldFRhc2tzKCk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyJykuY2xhc3NOYW1lID0gJ2ZvbGRlciBtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGFza3MgPSBbXSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICByZW1vdmVUYXNrKHNlbGVjdGVkVGFzaykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHNlbGVjdGVkVGFzay50aXRsZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQgPSBmYWxzZSwgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNTdGFycmVkID0gaXNTdGFycmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIGdldElzU3RhcnJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N0YXJyZWQ7XG4gIH1cblxuICBnZXRJc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3RNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBkaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaWNvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBjb25zdCB3cmFwcGVyID0gZGl2KCk7XG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xuICB0ZXh0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW5hbWUnO1xuICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBjb25zdCBmb2xkZXIgPSBpY29uKCk7XG4gIGZvbGRlci5jbGFzc0xpc3QuYWRkKCdmb2xkZXInLCAnZmEtcmVndWxhcicsICdmYS1mb2xkZXInKTtcbiAgLy8gZm9sZGVyLnRleHRDb250ZW50ID0gJ2ZvbGRlcic7XG4gIGNvbnN0IGdyb3VwID0gZGl2KCk7XG4gIGdyb3VwLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJ0bi1ncnAnO1xuICBjb25zdCBlZGl0ID0gaWNvbigpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdC1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICBjb25zdCB0cmFzaCA9IGljb24oKTtcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdkZWxldGUtcCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICBjb25zdCBvcHRpb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcGljayA9IG9wdGlvbigpO1xuICBwaWNrLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICBwaWNrLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFwcGVuZENoaWxkKHBpY2spO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmQoZm9sZGVyLCB0ZXh0LCBncm91cCk7XG4gIGdyb3VwLmFwcGVuZChlZGl0LCB0cmFzaCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIHByb2plY3QpIHtcbiAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaW5kZXhPZih0YXNrKSk7XG4gIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xuICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1jaGVjaycpO1xuICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZS1jaGVjaycpO1xuICB9IGVsc2UgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtY2lyY2xlJyk7XG4gIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdlZGl0JywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2RlbGV0ZScsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXN0YXInKTtcblxuICB0YXNrV3JhcHBlci5hcHBlbmQoY2hlY2tXcmFwcGVyLCB0aXRsZSwgYWN0aW9ucyk7XG4gIGNoZWNrV3JhcHBlci5hcHBlbmQoaW5wdXQsIGNoZWNrbWFyayk7XG4gIGFjdGlvbnMuYXBwZW5kKGVkaXQsIHRyYXNoLCBzdGFyKTtcblxuICByZXR1cm4gdGFza1dyYXBwZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGFwcENvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5cbmFwcENvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==