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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #d8dbeb;\n  --primary: #e87070;\n  --dk-text: #31313b;\n  --dk-subtext: #31313b;\n  --card: #cacad6;\n  --component-s: #d2d8f7a6;\n  --component: #dcdee8; }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #21212862;\n  --component-s: #353240;\n  --component: #3d3a4998; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: var(--bg-color);\n  height: 100vh; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 325px; }\n  header span {\n    background: #5a33d9;\n    background: linear-gradient(90deg, #582ce8 0%, #7751f6 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n  header div {\n    width: 600px; }\n\n.hidden {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-in-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 300px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out; }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 600px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: var(--component);\n        transition: 0.2s ease-in-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .options,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-in-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s;\n          padding-left: 8px; }\n          .cards .content .t-wrapper .task .actions .options {\n            opacity: 0;\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg) brightness(101%) contrast(93%); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-in-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: #5a33d9;\n          background: linear-gradient(90deg, #5a33d9 0%, #7751f6 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.98); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px;\n          border-radius: 24px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background-color: var(--dk-subtext);\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          color: var(--dk-text); }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--primary);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 30vh;\n          overflow: scroll; }\n        .cards .content .o-wrapper .expand-view .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: #5a33d9;\n      background: linear-gradient(90deg, #5a33d9 0%, #7751f6 100%);\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes textclip {\n  100% {\n    background-position: left; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// html[data-theme='light'] {\n//   --bg-color: #100f14;\n//   --primary: #e87070;\n//   --dk-text: #d2d8f7;\n//   --dk-subtext: #d2d8f7a6;\n//   --card: #141319;\n//   --component-s: #353240;\n//   --component: #24222d;\n// }\nhtml[data-theme='light'] {\n  --bg-color: #d8dbeb;\n  --primary: #e87070;\n  --dk-text: #31313b;\n  --dk-subtext: #31313b;\n  --card: #cacad6;\n  --component-s: #d2d8f7a6;\n  --component: #dcdee8;\n}\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb; //#d9d9e8;\n  --dk-subtext: #84849d;\n  --card: #21212862;\n  --component-s: #353240;\n  --component: #3d3a4998;\n}\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n// $bg-color: #d2d8f7a6;\n// $primary: #e87070;\n// $dk-text: #d2d8f7;\n// $dk-subtext: #d2d8f7a6;\n// $card: #141319;\n// $component-s: #353240;\n// $component: #24222d;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n  // border: 1px solid red;\n}\nbody {\n  background-color: $bg-color;\n  // background-color: #151319;\n  // background-color: #1a181d;\n  height: 100vh;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    // line-height: 25px;\n    height: 25px;\n  }\n\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext; //$primary\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n  }\n  input {\n    height: 35px;\n  }\n  textarea {\n    height: 120px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8vw;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 325px;\n  }\n  span {\n    // color: $primary;\n\n    background: rgb(90, 51, 217);\n    background: linear-gradient(90deg, rgb(88, 44, 232) 0%, rgba(119, 81, 246, 1) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  div {\n    width: 600px;\n  }\n}\n.hidden {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: 0.2s ease-in-out;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filter {\n      height: 32px;\n      // background-color: $card;\n      .fa-star {\n        // height: 18px;\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n      i {\n        margin-right: 6px;\n      }\n\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-in-out;\n      }\n\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-in-out;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      // width: 100%;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      // user-select: none;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 600px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 20px;\n        user-select: none;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 12px;\n        background-color: $component;\n        // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n        transition: 0.2s ease-in-out;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-in-out;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        p {\n          height: 35px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          // background-color: $component;\n          color: $dk-text;\n          overflow: hidden;\n        }\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .options,\n            .fa-regular {\n              transition: 0.2s ease-in-out;\n              opacity: 1;\n            }\n            // .fa-regular {\n            //   width: 18px;\n            //   display: flex;\n            //   justify-content: center;\n\n            // }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          transition: 0.1s;\n          padding-left: 8px;\n          .options {\n            opacity: 0;\n            height: 100%;\n            display: flex;\n            align-items: center;\n          }\n          span {\n            display: flex;\n          }\n          // i {\n          //   color: #8a7fa2;\n          // }\n          .fa-regular {\n            opacity: 0;\n          }\n          .fa-solid {\n            // font-size: 24px;\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #note {\n          height: 15vh;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          &::-webkit-calendar-picker-indicator {\n            filter: invert(100%) sepia(54%) saturate(5650%) hue-rotate(179deg)\n              brightness(101%) contrast(93%);\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          // margin-left: auto;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            // color: $primary;\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          // color: $dk-subtext;\n          transition: 0.2s ease-in-out;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text; //$bg-color;\n          background: rgb(90, 51, 217);\n          background: linear-gradient(\n            90deg,\n            rgba(90, 51, 217, 1) 0%,\n            rgba(119, 81, 246, 1) 100%\n          );\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-in-out;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.98);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            i {\n              margin-right: 6px;\n              // color: $primary;\n            }\n            p {\n              font-size: 16px;\n              // color: $primary;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n\n          .fa-star {\n            font-size: 24px;\n            color: $dk-text;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n          // padding: 16px;\n          // background-color: $component;\n          // border-radius: 16px;\n          // box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px, rgba(0, 0, 0, 0.22) 0px 2px 2px;\n          border-radius: 24px;\n        }\n        hr {\n          height: 4px;\n          background-color: $dk-subtext;\n          border: none;\n          border-radius: 2px;\n          margin-bottom: 16px;\n        }\n        #open-title {\n          color: $dk-text;\n        }\n        #open-note {\n          // margin-top: 16px;\n          color: $primary;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          // line-height: 1.5;\n          height: 30vh;\n          overflow: scroll;\n          // padding: 0px 16px;\n        }\n        .bot-hr {\n          margin-top: 16px;\n          width: 88px;\n          margin-left: auto;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n            // padding: 0 0 8px 8px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text; //$bg-color;\n      // background-color: $primary;\n      background: rgb(90, 51, 217);\n      background: linear-gradient(\n        90deg,\n        rgba(90, 51, 217, 1) 0%,\n        rgba(119, 81, 246, 1) 100%\n      );\n      transition: 0.2s ease-in-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes textclip {\n  100% {\n    background-position: left;\n  }\n}\n"],"sourceRoot":""}]);
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
    project.getTasks()[taskIndex].isComplete = true;

    const checkmarkClasses = ['fa-regular', 'fa-solid', 'fa-circle', 'fa-circle-check'];
    checkmarkClasses.forEach((className) => e.target.classList.toggle(className));

    const title = e.target.closest('.task').querySelector('.task-title');
    const wrapper = e.target.closest('.task');
    const actions = e.target.closest('.task').querySelector('.actions');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.2s ease-in-out';
      title.style.textDecoration = 'line-through';
      title.style.color = '#d2d8f7a6';

      wrapper.style.transition = '0.2s ease-in-out';
      wrapper.style.backgroundColor = '#151319';

      actions.style.transition = '0.2s ease-in-out';
      actions.style.opacity = '0';
    } else {
      title.style.textDecoration = '';
      title.style.color = '#d2d8f7';
      actions.style.opacity = '1';
      wrapper.style.backgroundColor = '#24222d'; //card-4
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
      filter.style.backgroundColor = '#141319';
    });
  }
  function resetSelectedProject() {
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      project.style.backgroundColor = '#24222d';
    });
  }

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
        p.closest('.project').style.backgroundColor = '#24222d';
        i.closest('.folder').className = 'folder material-symbols-rounded';
      }
    });
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

    document.querySelector('select').addEventListener('change', (e) => {
      const project = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find((item) => item.name === e.target.value);

      // currProject = project;

      // tempProject = project;
    });

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
    document.querySelector('select').value = currProject.name;

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
        title.style.color = '#d2d8f7a6';

        wrapper.style.transition = '0.2s ease-in-out';
        wrapper.style.backgroundColor = '#151319';

        actions.style.transition = '0.2s ease-in-out';
        actions.style.opacity = '0';
      }
    });
    addTaskHandlers();
  }

  function handleProjectClick(e) {
    resetFilters();
    const projectWrappers = document.querySelectorAll('.project');
    const project = e.currentTarget.closest('.project');
    projectWrappers.forEach((wrapper) => {
      wrapper.style.backgroundColor = '';
    });
    project.style.backgroundColor = '#24222d';

    const folders = document.querySelectorAll('.folder');
    folders.forEach((folder) => {
      folder.className = 'folder material-symbols-outlined';
    });
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
    resetProjects();
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
    // const existingTask = project.getTasks().find((task) => task.title === newTask.title);
    // if (!existingTask) {
    project.getTasks().push(newTask);
    resetProjects();
    renderProjects();
    updateSelectedProject();
    renderTasksView(e);
    renderTasks(currProject);
    resetForm();
    // }
  }
  function editTask(e, project) {
    e.preventDefault();
    const editedTask = storeTask();
    const temp = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.find(({ name }) => name === projectsFormInput.value);

    const task = document.querySelector('#task');
    if (!task.value) {
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      return;
    }

    if (projectsFormInput.value !== project.name) {
      temp.getTasks().push(editedTask);
      project.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

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
    project.removeTask(taskToDelete);
    projectToDeleteFrom.removeTask(taskToDelete);

    renderTasksView(e);
    renderTasks(currProject);
    // toggleComplete(e, currProject);
    console.log(_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects);
  }

  function showAll(e) {
    // resetProjects();
    resetFilters();
    resetSelectedProject();

    e.target.closest('.filter').style.backgroundColor = '#24222d';

    const allTasks = _models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projects.flatMap((project) => project.tasks);
    allTasksList = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', allTasks);
    console.log(currProject);
    console.log(allTasksList);

    // updateSelectedProject();
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
    document.querySelector('.project').style.backgroundColor = componentColor;
    document.querySelector('.folder').className = 'folder material-symbols-rounded';
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
  folder.className = 'folder material-symbols-outlined';
  folder.textContent = 'folder';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNzQztBQUNvQjtBQUNoQjtBQUNNOztBQUVqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsK0RBQWE7O0FBRW5DOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNtQjs7QUFFMUMsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdE1vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNkOGRiZWI7XFxuICAtLXByaW1hcnk6ICNlODcwNzA7XFxuICAtLWRrLXRleHQ6ICMzMTMxM2I7XFxuICAtLWRrLXN1YnRleHQ6ICMzMTMxM2I7XFxuICAtLWNhcmQ6ICNjYWNhZDY7XFxuICAtLWNvbXBvbmVudC1zOiAjZDJkOGY3YTY7XFxuICAtLWNvbXBvbmVudDogI2RjZGVlODsgfVxcblxcbmh0bWxbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tYmctY29sb3I6ICMxMjEyMTU7XFxuICAtLXByaW1hcnk6ICM4ZDhmZDI7XFxuICAtLWRrLXRleHQ6ICNkZmUwZmI7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMyMTIxMjg2MjtcXG4gIC0tY29tcG9uZW50LXM6ICMzNTMyNDA7XFxuICAtLWNvbXBvbmVudDogIzNkM2E0OTk4OyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgYm9keSBoMixcXG4gIGJvZHkgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gIGJvZHkgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNXB4OyB9XFxuICBib2R5IHAsXFxuICBib2R5IHNwYW4sXFxuICBib2R5IGksXFxuICBib2R5IHEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gIGJvZHkgaW5wdXQsXFxuICBib2R5IHRleHRhcmVhLFxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICByZXNpemU6IG5vbmU7IH1cXG4gIGJvZHkgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7IH1cXG4gIGJvZHkgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lOyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODsgfVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDMyNXB4OyB9XFxuICBoZWFkZXIgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICM1YTMzZDk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU4MmNlOCAwJSwgIzc3NTFmNiAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICBoZWFkZXIgZGl2IHtcXG4gICAgd2lkdGg6IDYwMHB4OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMCA4dnc7IH1cXG4gIC5jYXJkcyAub3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAuY2FyZHMgLnNpZGViYXIsXFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDsgfVxcbiAgLmNhcmRzIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgLmZhLXN0YXIge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgd2lkdGg6IDE4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIsXFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgcCxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5mb2xkZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5kZWxldGUtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAuY2FyZHMgLnRhc2ssXFxuICAuY2FyZHMgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLm5vLXRhc2tzIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcms6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudC1zKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAub3B0aW9ucyxcXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIgLmFjdGlvbnMgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMge1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgc3BhbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZmEtc29saWQge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAjbm90ZSB7XFxuICAgICAgICAgIGhlaWdodDogMTV2aDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzIHtcXG4gICAgICAgICAgd2lkdGg6IDQ1JTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCA1cHggMCAxMHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoNTY1MCUpIGh1ZS1yb3RhdGUoMTc5ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDkzJSk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSg3MmRlZyk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN0YXJyZWQge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWEzM2Q5O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1YTMzZDkgMCUsICM3NzUxZjYgMTAwJSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCBpIHtcXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCBwIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5vcGVuLXRpdGxlLWhlYWRlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLm9wZW4tdGl0bGUtaGVhZGVyIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLm5vdGUtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHggMCAxNnB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgaHIge1xcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tdGl0bGUge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi1ub3RlIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgICAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5ib3QtaHIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICB3aWR0aDogODhweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDE2cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzIC5vcGVuLWRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIC5iYWNrLWJ0biB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuIHtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNWEzM2Q5O1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVhMzNkOSAwJSwgIzc3NTFmNiAxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbi5zbGlkZS10YXNrcy1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgdGFza1JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpOyB9IH1cXG5cXG4uc2xpZGUtZm9ybS1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCAwLjFzOyB9XFxuXFxuLnNsaWRlLWZvcm0tb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0ZXh0Y2xpcCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UsbUJBQVc7RUFDWCxrQkFBVTtFQUNWLGtCQUFVO0VBQ1YscUJBQWE7RUFDYixlQUFPO0VBQ1Asd0JBQWM7RUFDZCxvQkFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQVc7RUFDWCxrQkFBVTtFQUNWLGtCQUFVO0VBQ1YscUJBQWE7RUFDYixpQkFBTztFQUNQLHNCQUFjO0VBQ2Qsc0JBQVksRUFBQTs7QUFpQmQ7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUNBeEJ3QjtFQTJCeEIsYUFBYSxFQUFBO0VBSmY7O0lBT0kscUJBN0JvQixFQUFBO0VBc0J4QjtJQVVJLGVBQWUsRUFBQTtFQVZuQjtJQWFJLGVBQWU7SUFDZix3QkFsQzBCO0lBbUMxQixhQUFhO0lBQ2IsZ0JBQWdCO0lBRWhCLFlBQVksRUFBQTtFQWxCaEI7Ozs7SUF5Qkksd0JBN0MwQixFQUFBO0VBb0I5Qjs7O0lBOEJJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FuRHdCO0lBb0R4QixxQkF4RG9CO0lBeURwQixZQUFZLEVBQUE7RUFwQ2hCO0lBdUNJLFlBQVksRUFBQTtFQXZDaEI7SUEwQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFB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IGh0bWxbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuLy8gICAtLWJnLWNvbG9yOiAjMTAwZjE0O1xcbi8vICAgLS1wcmltYXJ5OiAjZTg3MDcwO1xcbi8vICAgLS1kay10ZXh0OiAjZDJkOGY3O1xcbi8vICAgLS1kay1zdWJ0ZXh0OiAjZDJkOGY3YTY7XFxuLy8gICAtLWNhcmQ6ICMxNDEzMTk7XFxuLy8gICAtLWNvbXBvbmVudC1zOiAjMzUzMjQwO1xcbi8vICAgLS1jb21wb25lbnQ6ICMyNDIyMmQ7XFxuLy8gfVxcbmh0bWxbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuICAtLWJnLWNvbG9yOiAjZDhkYmViO1xcbiAgLS1wcmltYXJ5OiAjZTg3MDcwO1xcbiAgLS1kay10ZXh0OiAjMzEzMTNiO1xcbiAgLS1kay1zdWJ0ZXh0OiAjMzEzMTNiO1xcbiAgLS1jYXJkOiAjY2FjYWQ2O1xcbiAgLS1jb21wb25lbnQtczogI2QyZDhmN2E2O1xcbiAgLS1jb21wb25lbnQ6ICNkY2RlZTg7XFxufVxcbmh0bWxbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tYmctY29sb3I6ICMxMjEyMTU7XFxuICAtLXByaW1hcnk6ICM4ZDhmZDI7XFxuICAtLWRrLXRleHQ6ICNkZmUwZmI7IC8vI2Q5ZDllODtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzIxMjEyODYyO1xcbiAgLS1jb21wb25lbnQtczogIzM1MzI0MDtcXG4gIC0tY29tcG9uZW50OiAjM2QzYTQ5OTg7XFxufVxcbiRiZy1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiRwcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcXG4kZGstdGV4dDogdmFyKC0tZGstdGV4dCk7XFxuJGRrLXN1YnRleHQ6IHZhcigtLWRrLXN1YnRleHQpO1xcbiRjYXJkOiB2YXIoLS1jYXJkKTtcXG4kY29tcG9uZW50LXM6IHZhcigtLWNvbXBvbmVudC1zKTtcXG4kY29tcG9uZW50OiB2YXIoLS1jb21wb25lbnQpO1xcbi8vICRiZy1jb2xvcjogI2QyZDhmN2E2O1xcbi8vICRwcmltYXJ5OiAjZTg3MDcwO1xcbi8vICRkay10ZXh0OiAjZDJkOGY3O1xcbi8vICRkay1zdWJ0ZXh0OiAjZDJkOGY3YTY7XFxuLy8gJGNhcmQ6ICMxNDEzMTk7XFxuLy8gJGNvbXBvbmVudC1zOiAjMzUzMjQwO1xcbi8vICRjb21wb25lbnQ6ICMyNDIyMmQ7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxMzE5O1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBoMixcXG4gIGgzIHtcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICAvLyBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcblxcbiAgcCxcXG4gIHNwYW4sXFxuICBpLFxcbiAgcSB7XFxuICAgIGNvbG9yOiAkZGstc3VidGV4dDsgLy8kcHJpbWFyeVxcbiAgfVxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSxcXG4gIHNlbGVjdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gIH1cXG4gIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG4gIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB9XFxuXFxuICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLFxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAxLCAnd2dodCcgMzAwLCAnR1JBRCcgMjAwLCAnb3BzeicgNDg7XFxuICB9XFxufVxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgOHZ3O1xcbiAgaDEge1xcbiAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgIC8vIHBhZGRpbmctbGVmdDogNXZ3O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiAzMjVweDtcXG4gIH1cXG4gIHNwYW4ge1xcbiAgICAvLyBjb2xvcjogJHByaW1hcnk7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgNTEsIDIxNyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDg4LCA0NCwgMjMyKSAwJSwgcmdiYSgxMTksIDgxLCAyNDYsIDEpIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBkaXYge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICB9XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMCA4dnc7XFxuICAub3B0aW9ucyB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICB9XFxuICB9XFxuICAuc2lkZWJhcixcXG4gIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLmZpbHRlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIH1cXG4gICAgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgIC8vIGhlaWdodDogMThweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5wbHVzOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICB9XFxuICAgICAgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAucHJvamVjdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgLy8gd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcbiAgICAuZ2l0aHViIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLnRhc2ssXFxuICBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIC50LXdyYXBwZXIsXFxuICAgIC5mLXdyYXBwZXIsXFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAudC13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLm5vLXRhc2tzIHtcXG4gICAgICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB9XFxuICAgICAgLnRhc2sge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudDtcXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDNweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDJweCAycHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLmhpZGUtY2hlY2sge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNoZWNrbWFyayB7XFxuICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mYS1jaXJjbGUsXFxuICAgICAgICAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudDtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgJiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICAgICAgICB9XFxuICAgICAgICBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudC1zO1xcbiAgICAgICAgICAuYWN0aW9ucyB7XFxuICAgICAgICAgICAgLm9wdGlvbnMsXFxuICAgICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC8vIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICAvLyAgIHdpZHRoOiAxOHB4O1xcbiAgICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgIC8vIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLy8gaSB7XFxuICAgICAgICAgIC8vICAgY29sb3I6ICM4YTdmYTI7XFxuICAgICAgICAgIC8vIH1cXG4gICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmZhLXNvbGlkIHtcXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5mLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjbm90ZSB7XFxuICAgICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICB9XFxuICAgICAgICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xcbiAgICAgICAgICAmOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoNTY1MCUpIGh1ZS1yb3RhdGUoMTc5ZGVnKVxcbiAgICAgICAgICAgICAgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCg5MyUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAvLyBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuc3RhcnJlZCB7XFxuICAgICAgICAgIC8vIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LWJ0biB7XFxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDsgLy8kYmctY29sb3I7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5MCwgNTEsIDIxNyk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgICAgICA5MGRlZyxcXG4gICAgICAgICAgICByZ2JhKDkwLCA1MSwgMjE3LCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDExOSwgODEsIDI0NiwgMSkgMTAwJVxcbiAgICAgICAgICApO1xcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA1cHggMTVweCAwcHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcbiAgICAgICAgICAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICAgICAgICAgIC8vIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAvLyBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAub3Blbi10aXRsZS1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XFxuXFxuICAgICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7XFxuICAgICAgICAgIC8vIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDNweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDJweCAycHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgIH1cXG4gICAgICAgICNvcGVuLW5vdGUge1xcbiAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5ib3QtaHIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgICB3aWR0aDogODhweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDE2cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAub3Blbi1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgMCA4cHggOHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5hZGQtYnRuIHtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiAkZGstdGV4dDsgLy8kYmctY29sb3I7XFxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxuICAgICAgYmFja2dyb3VuZDogcmdiKDkwLCA1MSwgMjE3KTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICA5MGRlZyxcXG4gICAgICAgIHJnYmEoOTAsIDUxLCAyMTcsIDEpIDAlLFxcbiAgICAgICAgcmdiYSgxMTksIDgxLCAyNDYsIDEpIDEwMCVcXG4gICAgICApO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdGV4dGNsaXAge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2RlbHMvdGFza01vZGVsJztcbmltcG9ydCBQcm9qZWN0LCB7IHByb2plY3RzIH0gZnJvbSAnLi9tb2RlbHMvcHJvamVjdE1vZGVsJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi92aWV3cy9wcm9qZWN0Vmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbiAgY29uc3QgdGFza3NXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnQtd3JhcHBlcicpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mLXdyYXBwZXInKTtcbiAgY29uc3Qgb3BlbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby13cmFwcGVyJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWJ0bicpO1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXBsdXMnKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gIGNvbnN0IG5vdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJyk7XG4gIGNvbnN0IHByb2plY3RzRm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gIGNvbnN0IGZvcm1TdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zdGFyJyk7XG4gIGNvbnN0IHByb2plY3RHcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gIGNvbnN0IHNlbGVjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcblxuICBjb25zdCBjb21wb25lbnRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb21wb25lbnQnKTtcbiAgbGV0IHRhc2tJbmRleCA9IDA7XG4gIGxldCBwcm9qZWN0SW5kZXg7XG4gIGxldCBjdXJyUHJvamVjdDtcbiAgbGV0IGFsbFRhc2tzTGlzdDtcbiAgbGV0IHNlbGVjdGVkID0gJyc7XG5cbiAgLy8gYW5pbWF0aW9uc1xuICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1Rhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlVGFza3NSaWdodCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzTGVmdCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgb3BlblRhc2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codGFza3MpO1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXMnO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIC8vIHZhbGlkaXR5XG4gIGZ1bmN0aW9uIGlzUHJvamVjdFZhbGlkKCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFuYW1lLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgbmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnUHJvamVjdCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIG5hbWUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZS52YWx1ZSkpIHtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Byb2plY3QgZXhpc3RzJyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGlzVGFza1ZhbGlkKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIGlmICghdGFzay52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICB0YXNrLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgKHByb2plY3QuZ2V0VGFza3MoKS5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSB0YXNrLnZhbHVlKSkge1xuICAgIC8vICAgdGFzay5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBhbHJlYWR5IGV4aXN0cycpO1xuICAgIC8vICAgdGFzay5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRvZ2dsZXNcbiAgY29uc3QgdG9nZ2xlQnRuVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKGUsIHByb2plY3QpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0uaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICBjb25zdCBjaGVja21hcmtDbGFzc2VzID0gWydmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZScsICdmYS1jaXJjbGUtY2hlY2snXTtcbiAgICBjaGVja21hcmtDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XG5cbiAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICcnICYmIHRpdGxlLnN0eWxlLmNvbG9yICE9PSAnI2QyZDhmN2E2Jykge1xuICAgICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICB0aXRsZS5zdHlsZS5jb2xvciA9ICcjZDJkOGY3YTYnO1xuXG4gICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTUxMzE5JztcblxuICAgICAgYWN0aW9ucy5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgICAgYWN0aW9ucy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSAnI2QyZDhmNyc7XG4gICAgICBhY3Rpb25zLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjQyMjJkJzsgLy9jYXJkLTRcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUZvcm1TdGFyID0gKCkgPT4ge1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJyZWQnKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJyk7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtc29saWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlUGx1c0J0biA9ICgpID0+IHtcbiAgICByZXNldEZvcm0oKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3BsdXMnKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZWQnKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgcHJvamVjdEZvcm0uaGlkZGVuID0gIXByb2plY3RGb3JtLmhpZGRlbjtcbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHByb2plY3RHcnAuZmlyc3RDaGlsZCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICAgIGlmIChwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHNlbGVjdGVkID0gJyc7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiB0b2dnbGVFZGl0UHJvamVjdChlKSB7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSAhcHJvamVjdEZvcm0uaGlkZGVuO1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIC8vIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYnRuLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RHcnAuaW5zZXJ0QmVmb3JlKHByb2plY3RGb3JtLCBwcm9qZWN0R3JwLmZpcnN0Q2hpbGQpO1xuICAgICAgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICBzZWxlY3RlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgIHNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXRzXG4gIGZ1bmN0aW9uIHJlc2V0U3RhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKS5jbGFzc05hbWUgPSAnYWRkLXN0YXIgZmEtcmVndWxhciBmYS1zdGFyJztcbiAgfVxuICBmdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5yZXNldCgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxNDEzMTknO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyNDIyMmQnO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlT3BlblRhc2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tdGl0bGUnKTtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbm90ZScpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0Jyk7XG4gICAgLy8gY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5cbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tc3RhcicpO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0uZ2V0SXNTdGFycmVkKCk7XG4gICAgY29uc29sZS5sb2coaXNTdGFycmVkKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS50aXRsZTtcbiAgICBub3RlLnRleHRDb250ZW50ID0gY3VyclByb2plY3QudGFza3NbaWRdLm5vdGU7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5wcm9qZWN0O1xuICAgIGlmIChpc1N0YXJyZWQgPT09IGZhbHNlKSB7XG4gICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9O1xuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgaSA9IHByb2plY3QucXVlcnlTZWxlY3RvcignaScpO1xuICAgICAgY29uc3QgcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgaWYgKHAudGV4dENvbnRlbnQgPT09IGN1cnJQcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgcC5jbG9zZXN0KCcucHJvamVjdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjQyMjJkJztcbiAgICAgICAgaS5jbG9zZXN0KCcuZm9sZGVyJykuY2xhc3NOYW1lID0gJ2ZvbGRlciBtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza3NPcGVuVmlldyA9IChlKSA9PiB7XG4gICAgaGlkZVRhc2tzTGVmdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuVGFzaygpO1xuICAgICAgdXBkYXRlT3BlblRhc2soZSk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyRm9ybVZpZXcgPSAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgIC8vIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgICAgLy8gdGVtcFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH0pO1xuXG4gICAgaGlkZVRhc2tzUmlnaHQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNob3dGb3JtKCk7XG4gICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyRWRpdFZpZXcgPSAoZSwgcHJvamVjdCkgPT4ge1xuICAgIHRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS50aXRsZTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5ub3RlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLnZhbHVlID0gY3VyclByb2plY3QubmFtZTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdLmdldElzU3RhcnJlZCgpKTtcbiAgICBpZiAocHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0uZ2V0SXNTdGFycmVkKCkpIHtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXJyZWQnKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXJlZ3VsYXInKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdzdGFycmVkJyk7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XG4gICAgICBmb3JtU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zb2xpZCcpO1xuICAgIH1cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gICB0ZW1wUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH0pO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaGlkZVRhc2tzUmlnaHQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCByZW5kZXJUYXNrc1ZpZXcgPSAoZSkgPT4ge1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICB9KTtcbiAgICBjaGVja21hcmtzLmZvckVhY2goKGNoZWNrbWFyaykgPT4ge1xuICAgICAgY2hlY2ttYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW5kZXJFZGl0VmlldyhlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjNzJztcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkZWxldGVUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QpIHtcbiAgICByZXNldFRhc2tzKCk7XG4gICAgaWYgKHByb2plY3QuZ2V0VGFza3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MgcCcpLnRleHRDb250ZW50ID0gJ05vIHRhc2tzIGZvdW5kJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyBwJykuY2xhc3NOYW1lID0gJ25vLXRhc2tzJztcbiAgICB9XG5cbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBjcmVhdGVUYXNrKHRhc2ssIHByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmQodGFza1dyYXBwZXIpO1xuXG4gICAgICBpZiAodGFzay5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgICB0YXNrV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuYWN0aW9ucycpO1xuICAgICAgICBjb25zdCBjaGVja21hcmsgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaXJjbGUtY2hlY2snKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2ttYXJrKTtcbiAgICAgICAgLy9hZGQgc2VsZWN0b3IgZm9yIGNsb3Nlc3QgY2hlY2ttYXJrLCB0b2dnbGUgc3RhdHVzXG5cbiAgICAgICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSAnI2QyZDhmN2E2JztcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxNTEzMTknO1xuXG4gICAgICAgIGFjdGlvbnMuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICAgICAgYWN0aW9ucy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFkZFRhc2tIYW5kbGVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9KTtcbiAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjQyMjJkJztcblxuICAgIGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvbGRlciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmZvbGRlcicpO1xuICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIG1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG5cbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcblxuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG5cbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgdG9nZ2xlRWRpdFByb2plY3QoZSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHByb2plY3RXcmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1wJyk7XG5cbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDbGljayk7XG4gICAgfSk7XG5cbiAgICBlZGl0QnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3RIYW5kbGVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgaWYgKCFpc1Byb2plY3RWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHN0b3JlUHJvamVjdCgpO1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdC5uYW1lKTtcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgcHJvamVjdHMudW5zaGlmdChuZXdQcm9qZWN0KTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH1cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghbmFtZS52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lID0gbmFtZS52YWx1ZTtcbiAgICByZXNldEZvcm0oKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBmb3JtU3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJyZWQnKTtcblxuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRUYXNrKGUsIHByb2plY3QpIHtcbiAgICBpZiAoIWlzVGFza1ZhbGlkKCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgLy8gY29uc3QgZXhpc3RpbmdUYXNrID0gcHJvamVjdC5nZXRUYXNrcygpLmZpbmQoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IG5ld1Rhc2sudGl0bGUpO1xuICAgIC8vIGlmICghZXhpc3RpbmdUYXNrKSB7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLnB1c2gobmV3VGFzayk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZXNldEZvcm0oKTtcbiAgICAvLyB9XG4gIH1cbiAgZnVuY3Rpb24gZWRpdFRhc2soZSwgcHJvamVjdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgY29uc3QgdGVtcCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBwcm9qZWN0c0Zvcm1JbnB1dC52YWx1ZSk7XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICBpZiAoIXRhc2sudmFsdWUpIHtcbiAgICAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICB0YXNrLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RzRm9ybUlucHV0LnZhbHVlICE9PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgIHRlbXAuZ2V0VGFza3MoKS5wdXNoKGVkaXRlZFRhc2spO1xuICAgICAgcHJvamVjdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY3VyclByb2plY3QgPSB0ZW1wO1xuICAgIH0gZWxzZSBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG5cbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSwgcHJvamVjdCkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGFza0luZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcblxuICAgIC8vIEZpbmQgcHJvamVjdCB0YXNrIG9yaWdpbmFsbHkgY2FtZSBmcm9tXG4gICAgbGV0IHByb2plY3RUb0RlbGV0ZUZyb207XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLmdldFRhc2tzKCkuaW5jbHVkZXModGFza1RvRGVsZXRlKSkge1xuICAgICAgICBwcm9qZWN0VG9EZWxldGVGcm9tID0gcHJvamVjdHNbaV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICBwcm9qZWN0VG9EZWxldGVGcm9tLnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcblxuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgLy8gdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dBbGwoZSkge1xuICAgIC8vIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLmZpbHRlcicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjQyMjJkJztcblxuICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC50YXNrcyk7XG4gICAgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcsIGFsbFRhc2tzKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcblxuICAgIC8vIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgfVxuICBzZWxlY3RBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFkZFByb2plY3QpO1xuICBmb3JtU3Rhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm1TdGFyKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckZvcm1WaWV3KTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBpbmNvcnJlY3RJbnB1dCA9IGZhbHNlO1xuICAgIGFkZFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gaW5jb3JyZWN0SW5wdXQgPSBmYWxzZTtcbiAgICBlZGl0VGFzayhlLCBjdXJyUHJvamVjdCk7XG4gIH0pO1xuXG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnICYmIGlzUHJvamVjdFZhbGlkKCkpIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdFByb2plY3QoKTtcbiAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGVkJyk7XG4gICAgICAgIHNlbGVjdGVkID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICBjb25zdCBpbnRyb1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICdDbGljayBtZSB0byBsZWFybiBtb3JlIScsXG4gICAgICAnIC0gVGFza3MgY2FuIGJlIGV4cGFuZGVkIHRvIHZpZXcgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCB0aGVtLiBcXG5cXG4gLSBBZGQgbm90ZXMsIGR1ZSBkYXRlcyBhbmQgZmF2b3JpdGUgc3RhdHVzIGZyb20gdGhlIHRhc2sgZm9ybSBwYW5lLiBcXG5cXG4gLSBUaGFuayB5b3UgZm9yIGNoZWNraW5nIG91dCBteSBwcm9qZWN0IScsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgY29uc3QgaW50cm9UYXNrVHdvID0gbmV3IFRhc2soXG4gICAgICAnU2lkZWJhciBJbmZvJyxcbiAgICAgICcgLSBUYXNrcyBjYW4gYmUgZmlsdGVyZWQgYnkgQWxsLCBUb2RheSBvciBXZWVrLiBcXG5cXG4gLSBBZGQgbmV3IHByb2plY3RzIGJ5IHByZXNzaW5nIHRoZSAoKykgYnV0dG9uLiBcXG5cXG4gLSBIb3ZlciBvdmVyIGV4aXN0aW5nIHByb2plY3RzIHRvIGVkaXQgb3IgZGVsZXRlIHRoZW0uJyxcbiAgICAgICdEZWZhdWx0JyxcbiAgICAgICcnLFxuICAgICAgJ3RydWUnXG4gICAgKTtcbiAgICBjb25zdCBpbnRyb1Byb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuICAgIGN1cnJQcm9qZWN0ID0gaW50cm9Qcm9qZWN0O1xuICAgIHByb2plY3RzLnB1c2goaW50cm9Qcm9qZWN0KTtcbiAgICBpbnRyb1Byb2plY3QuZ2V0VGFza3MoKS5wdXNoKGludHJvVGFzayk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2tUd28pO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcicpLmNsYXNzTmFtZSA9ICdmb2xkZXIgbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJztcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzID0gW10pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVG9EZWxldGUudGl0bGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkID0gZmFsc2UsIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmlzU3RhcnJlZCA9IGlzU3RhcnJlZDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gIH1cblxuICBnZXRJc1N0YXJyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdGFycmVkO1xuICB9XG5cbiAgZ2V0SXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0TW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgZGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGljb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRpdigpO1xuICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgdGV4dC5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lJztcbiAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgY29uc3QgZm9sZGVyID0gaWNvbigpO1xuICBmb2xkZXIuY2xhc3NOYW1lID0gJ2ZvbGRlciBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcbiAgZm9sZGVyLnRleHRDb250ZW50ID0gJ2ZvbGRlcic7XG4gIGNvbnN0IGdyb3VwID0gZGl2KCk7XG4gIGdyb3VwLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJ0bi1ncnAnO1xuICBjb25zdCBlZGl0ID0gaWNvbigpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdC1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICBjb25zdCB0cmFzaCA9IGljb24oKTtcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdkZWxldGUtcCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICBjb25zdCBvcHRpb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcGljayA9IG9wdGlvbigpO1xuICBwaWNrLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICBwaWNrLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFwcGVuZENoaWxkKHBpY2spO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmQoZm9sZGVyLCB0ZXh0LCBncm91cCk7XG4gIGdyb3VwLmFwcGVuZChlZGl0LCB0cmFzaCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIHByb2plY3QpIHtcbiAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaW5kZXhPZih0YXNrKSk7XG4gIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xuICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1jaGVjaycpO1xuICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZS1jaGVjaycpO1xuICB9IGVsc2UgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtY2lyY2xlJyk7XG5cbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdkZWxldGUnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIHRyYXNoLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1zdGFyJyk7XG5cbiAgdGFza1dyYXBwZXIuYXBwZW5kKGNoZWNrV3JhcHBlciwgdGl0bGUsIGFjdGlvbnMpO1xuICBjaGVja1dyYXBwZXIuYXBwZW5kKGlucHV0LCBjaGVja21hcmspO1xuICBhY3Rpb25zLmFwcGVuZChlZGl0LCB0cmFzaCwgc3Rhcik7XG5cbiAgcmV0dXJuIHRhc2tXcmFwcGVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCBhcHBDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9hcHAnO1xuXG5hcHBDb250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=