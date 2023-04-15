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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nhtml {\n  height: -webkit-fill-available; }\n\nbody {\n  background-color: var(--bg-color);\n  transition: 0.2s ease-out;\n  min-height: 100vh;\n  /* mobile viewport bug fix */\n  min-height: -webkit-fill-available; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p {\n    display: flex; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding: 0 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none;\n    transition: 0.2s ease-out; }\n  body input {\n    height: 35px; }\n    body input:focus {\n      outline: none; }\n  body textarea {\n    height: 120px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none; }\n  body button {\n    transition: 0.2s ease-out; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\n.container {\n  min-height: 100vh; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: 0.2s ease-out;\n  user-select: none; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 285px;\n    transition: 0.2s ease-out; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(130deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: 0.2s ease-out; }\n  header div {\n    width: 510px; }\n\n.hidden {\n  display: none; }\n\n.side-menu {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .filter,\n  .cards .project,\n  .cards .task,\n  .cards button,\n  .cards .fa-plus,\n  .cards .theme,\n  .cards .add-star {\n    cursor: pointer; }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: 0.2s ease-out; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 270px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filters-title-grp {\n      display: flex;\n      justify-content: space-between; }\n    .cards .sidebar .theme {\n      height: 26px;\n      font-size: 24px;\n      color: var(--component-s);\n      user-select: none;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .theme:hover {\n        transform: scale(1.03);\n        color: var(--primary); }\n      .cards .sidebar .theme:active {\n        transform: scale(0.97); }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between;\n      overflow: hidden; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-out;\n        color: var(--component-s); }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i {\n        font-size: 14px; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px;\n        transition: 0.2s ease-out; }\n        .cards .sidebar .github .fa-github:hover {\n          color: var(--primary); }\n        .cards .sidebar .github .fa-github:active {\n          transform: scale(0.95); }\n  .cards .content {\n    width: 510px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .title-grp {\n        display: flex;\n        justify-content: space-between; }\n        .cards .content .t-wrapper .title-grp .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none; }\n      .cards .content .t-wrapper .tasks {\n        overflow-x: hidden;\n        height: 35vh;\n        padding: 2px; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        width: 99.5%;\n        margin-bottom: 8px;\n        display: flex;\n        min-width: 0;\n        padding-right: 10px;\n        background-color: var(--component);\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: 0.2s ease-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task .task-title {\n          display: block;\n          height: 35px;\n          width: 75%;\n          padding-right: 8px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .edit,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: 0.2s ease-out;\n          gap: 4px; }\n          .cards .content .t-wrapper .task .actions .options {\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions i {\n            transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .actions .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #task {\n          height: 36px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh;\n          padding: 10px; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: 0.2s ease-out;\n            filter: var(--cal-indicator); }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator:hover {\n            scale: 1.1;\n            filter: var(--cal-indicator); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-out;\n          color: var(--primary); }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-out;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.97); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex;\n            margin-top: 2px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              font-size: 20px;\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: 0.2s ease-out; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          font-size: 18px;\n          color: var(--dk-text);\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: auto;\n          padding-top: 8px; }\n          .cards .content .o-wrapper .expand-view #open-note::-webkit-scrollbar-corner {\n            color: transparent; }\n        .cards .content .o-wrapper .expand-view .bot-note-line {\n          display: none;\n          width: 20px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0; }\n        .cards .content .o-wrapper .expand-view .visible {\n          display: block; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary);\n            font-weight: 500; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer; }\n    .side-menu .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0; }\n    .side-menu .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px; }\n      .side-menu .menu-grp .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: var(--component);\n        background-color: var(--primary);\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965); }\n        .side-menu .menu-grp .menu-line:first-of-type {\n          top: 0; }\n        .side-menu .menu-grp .menu-line:last-of-type {\n          bottom: 0; }\n    .side-menu.active .menu-line:first-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:first-of-type {\n      transform: rotate(45deg);\n      top: 5px; }\n    .side-menu.active .menu-line:last-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:last-of-type {\n      transform: rotate(-45deg);\n      bottom: 5px; }\n  .blurred {\n    filter: blur(4px); }\n  html,\n  body,\n  .container {\n    overflow: hidden;\n    min-height: -webkit-fill-available; }\n  header {\n    height: 110px; }\n  select {\n    font-size: 11px; }\n  input[type='date'] {\n    font-size: 11px; }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px; }\n  .section-header {\n    font-size: 18px; }\n  .form-header,\n  .form-title-header {\n    font-size: 16px; }\n  .cards .sidebar .filter,\n  .cards .sidebar .project {\n    font-size: 13px; }\n  .cards .sidebar .projects-header {\n    overflow-x: hidden; }\n  .cards .sidebar .project .project-name {\n    font-size: 13px;\n    width: 140px; }\n  .cards .content .add-btn {\n    font-size: 14px; }\n  .cards .content .f-wrapper .task-form .form-header {\n    margin-top: 14px;\n    margin-bottom: 10px; }\n  .cards .content .f-wrapper .task-form .fa-star {\n    margin-top: 50px; }\n  .cards .content .f-wrapper .task-form #note {\n    height: 20vh;\n    font-size: 12px; }\n  .cards .content .f-wrapper .task-form .extras-wrapper {\n    margin-bottom: 20px; }\n  .cards .content .f-wrapper .task-form .fa-regular {\n    font-size: 24px; }\n  .cards .content .f-wrapper .expand-view .expand-header {\n    margin-bottom: 8px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp p {\n      font-size: 14px;\n      margin-top: 1px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp i {\n      font-size: 18px; }\n  .cards .content .t-wrapper .task .task-title {\n    font-size: 11px; }\n  .cards .content .t-wrapper .no-tasks {\n    font-size: 16px; }\n  .cards .content .o-wrapper .expand-view #open-title {\n    width: 215px;\n    font-size: 16px;\n    margin-top: 4px; }\n  .cards .content .o-wrapper .expand-view #open-note {\n    font-size: 14px;\n    height: 35vh; }\n  .cards .sidebar,\n  .cards .content {\n    height: 70vh; }\n  .cards .mobile-stretch {\n    transition: 0s;\n    margin-top: 5vh;\n    height: 60vh; }\n  .cards .sidebar {\n    display: none; }\n  .header {\n    opacity: 0;\n    height: 0; }\n  .filtersHide {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%);\n}\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%);\n}\n\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n$cal-indicator: var(--cal-indicator);\n$transition: 0.2s ease-out;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n}\nhtml {\n  height: -webkit-fill-available;\n}\nbody {\n  background-color: $bg-color;\n  transition: $transition;\n  // height: 100vh;\n  min-height: 100vh;\n  /* mobile viewport bug fix */\n  min-height: -webkit-fill-available;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    height: 25px;\n  }\n  p {\n    display: flex;\n  }\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext;\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding: 0 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n    transition: $transition;\n  }\n  input {\n    height: 35px;\n    &:focus {\n      outline: none;\n    }\n  }\n  textarea {\n    height: 120px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none;\n  }\n  button {\n    transition: $transition;\n  }\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\n.container {\n  min-height: 100vh;\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: $transition;\n  user-select: none;\n  h1 {\n    color: $dk-text;\n    font-size: 48px;\n    width: 285px;\n    transition: $transition;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(130deg, $gradient-1 0%, $gradient-2 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: $transition;\n  }\n  div {\n    width: 510px;\n  }\n}\n.hidden {\n  display: none;\n}\n.side-menu {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: $transition;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .filter,\n  .project,\n  .task,\n  button,\n  .fa-plus,\n  .theme,\n  .add-star {\n    cursor: pointer;\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: $transition;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 270px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filters-title-grp {\n      display: flex;\n      justify-content: space-between;\n    }\n    .theme {\n      height: 26px;\n      font-size: 24px;\n      color: $component-s;\n      user-select: none;\n      transition: $transition;\n      &:hover {\n        transform: scale(1.03);\n        color: $primary;\n      }\n      &:active {\n        transform: scale(0.97);\n      }\n    }\n    .filter {\n      height: 32px;\n      .fa-star {\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n      i {\n        margin-right: 6px;\n      }\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n      overflow: hidden;\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: $transition;\n        color: $component-s;\n      }\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: $transition;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i {\n        font-size: 14px;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      transition: $transition;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n        transition: $transition;\n        &:hover {\n          color: $primary;\n        }\n        &:active {\n          transform: scale(0.95);\n        }\n      }\n    }\n  }\n\n  .content {\n    width: 510px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .title-grp {\n        display: flex;\n        justify-content: space-between;\n        .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254;\n        }\n      }\n\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none;\n      }\n      .tasks {\n        overflow-x: hidden;\n        height: 35vh;\n        padding: 2px;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        width: 99.5%;\n        margin-bottom: 8px;\n        display: flex;\n        min-width: 0;\n        padding-right: 10px;\n        background-color: $component;\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px 0px,\n          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: $transition;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: $transition;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        .task-title {\n          display: block;\n          height: 35px;\n          width: 75%;\n          padding-right: 8px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: $dk-text;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .edit,\n            .fa-regular {\n              transition: $transition;\n              opacity: 1;\n            }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: $transition;\n          gap: 4px;\n          .options {\n            height: 100%;\n            display: flex;\n            align-items: center;\n          }\n          i {\n            transition: $transition;\n          }\n          .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n          }\n          span {\n            display: flex;\n          }\n          .fa-regular {\n            opacity: 0;\n          }\n\n          .fa-solid {\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #task {\n          height: 36px;\n        }\n        #note {\n          height: 15vh;\n          padding: 10px;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          user-select: none;\n          &::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: $transition;\n            filter: $cal-indicator;\n          }\n          &::-webkit-calendar-picker-indicator:hover {\n            scale: (1.1);\n            filter: $cal-indicator;\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: $transition;\n          color: $primary;\n          &:hover {\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          transition: $transition;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text;\n          background: $grad-base;\n          background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: $transition;\n          user-select: none;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.97);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            margin-top: 2px;\n            i {\n              font-size: 20px;\n              margin-right: 6px;\n            }\n            p {\n              font-size: 16px;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: $transition;\n          .fa-star {\n            font-size: 24px;\n            color: $primary;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n        }\n        #open-title {\n          font-size: 18px;\n          color: $dk-text;\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        #open-note {\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: auto;\n          padding-top: 8px;\n          &::-webkit-scrollbar-corner {\n            color: transparent;\n          }\n        }\n        .bot-note-line {\n          display: none;\n          width: 20px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0;\n        }\n        .visible {\n          display: block;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n            font-weight: 500;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text;\n      background: $grad-base;\n      background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n      transition: $transition;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none;\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer;\n\n    .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0;\n    }\n    .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px;\n      .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: $component;\n        background-color: $primary;\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);\n        &:first-of-type {\n          top: 0;\n        }\n        &:last-of-type {\n          bottom: 0;\n        }\n      }\n    }\n    &.active,\n    .menu-icon:checked + div {\n      .menu-line {\n        &:first-of-type {\n          transform: rotate(45deg);\n          top: 5px;\n        }\n        &:last-of-type {\n          transform: rotate(-45deg);\n          bottom: 5px;\n        }\n      }\n    }\n  }\n  .blurred {\n    filter: blur(4px);\n  }\n  html,\n  body,\n  .container {\n    overflow: hidden;\n    min-height: -webkit-fill-available;\n  }\n  header {\n    height: 110px;\n  }\n  select {\n    font-size: 11px;\n  }\n  input[type='date'] {\n    font-size: 11px;\n  }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px;\n  }\n  .section-header {\n    font-size: 18px;\n  }\n  .form-header,\n  .form-title-header {\n    font-size: 16px;\n  }\n\n  .cards {\n    .sidebar {\n      .filter,\n      .project {\n        font-size: 13px;\n      }\n      .projects-header {\n        overflow-x: hidden;\n      }\n      .project {\n        .project-name {\n          font-size: 13px;\n          width: 140px;\n        }\n      }\n    }\n    .content {\n      .add-btn {\n        font-size: 14px;\n      }\n      .f-wrapper {\n        .task-form {\n          .form-header {\n            margin-top: 14px;\n            margin-bottom: 10px;\n          }\n          .fa-star {\n            margin-top: 50px;\n          }\n          #note {\n            height: 20vh;\n            font-size: 12px;\n          }\n          .extras-wrapper {\n            margin-bottom: 20px;\n          }\n          .fa-regular {\n            font-size: 24px;\n          }\n        }\n        .expand-view {\n          .expand-header {\n            margin-bottom: 8px;\n            .project-grp p {\n              font-size: 14px;\n              margin-top: 1px;\n            }\n            .project-grp i {\n              font-size: 18px;\n            }\n          }\n        }\n      }\n      .t-wrapper {\n        .task {\n          .task-title {\n            font-size: 11px;\n          }\n        }\n\n        .no-tasks {\n          font-size: 16px;\n        }\n      }\n      .o-wrapper {\n        .expand-view {\n          #open-title {\n            width: 215px;\n            font-size: 16px;\n            margin-top: 4px;\n          }\n          #open-note {\n            font-size: 14px;\n            height: 35vh;\n          }\n        }\n      }\n    }\n    .sidebar,\n    .content {\n      height: 70vh;\n    }\n    .mobile-stretch {\n      transition: 0s;\n      margin-top: 5vh;\n      height: 60vh;\n    }\n    .sidebar {\n      display: none;\n    }\n  }\n  .header {\n    opacity: 0;\n    height: 0;\n  }\n  .filtersHide {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/taskModel */ "./src/modules/models/taskModel.js");
/* harmony import */ var _models_projectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/projectModel */ "./src/modules/models/projectModel.js");
/* harmony import */ var _models_storageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/storageModel */ "./src/modules/models/storageModel.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/taskView */ "./src/modules/views/taskView.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/projectView */ "./src/modules/views/projectView.js");
/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */







function appController() {
  const projectForm = document.querySelector('#project-form');
  const projectInput = document.querySelector('#project-name');
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
  const dateInput = document.querySelector('#date');
  const formInput = document.querySelector('#projects');
  const formStar = document.querySelector('.add-star');
  const projectGrp = document.querySelector('.project-grp');
  const input = document.querySelector('#project-name');
  const selectAll = document.querySelector('.all');
  const selectStarred = document.querySelector('.starred');
  const selectToday = document.querySelector('.today');
  const selectWeek = document.querySelector('.week');
  const themeIcon = document.querySelector('.theme');
  const mobileMenu = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const filters = document.querySelector('.filters');
  const logo = document.querySelector('header h1');

  let componentColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--component');
  let primaryColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
  const textColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-text');
  const subtextColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-subtext');

  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let lastProject;
  let selected = '';

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

  function isProjectValid() {
    const project = document.querySelector('#project-name');
    if (!project.value) {
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

  function toggleBtnText() {
    const title = document.querySelector('.form-title-header');
    title.textContent = 'Edit Task';
    editBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
  }
  function toggleComplete(e, project) {
    const wrapper = e.target.closest('.task');
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const task = project.getTasks()[taskIndex];
    const selectedTask = e.target;

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
    const edit = selectedTask.closest('.task').querySelector('.edit');
    const trash = selectedTask.closest('.task').querySelector('.delete');
    const star = selectedTask.closest('.task').querySelector('.fa-star');

    title.style.transition = '0.2s ease-in-out';
    wrapper.style.transition = '0.2s ease-in-out';
    edit.style.transition = '0.2s ease-in-out';
    trash.style.transition = '0.2s ease-in-out';
    star.style.transition = '0.2s ease-in-out';
    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
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
  }
  function toggleFormStar() {
    formStar.classList.toggle('starred');
    formStar.classList.toggle('fa-regular');
    formStar.classList.toggle('fa-solid');
  }
  function togglePlusBtn() {
    addProjectBtn.classList.toggle('plus');
    addProjectBtn.classList.toggle('rotated');
  }
  function toggleAddProject() {
    document.querySelector('form').reset();
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
      filters.classList.remove('filtersHide');
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
      updateSelectedFilter();
    }
  }
  function toggleEditProject(e) {
    projectForm.hidden = !projectForm.hidden;
    const projectBtns = document.querySelectorAll('.options');

    projectBtns.forEach((btn) => {
      btn.style.display = 'none';
      btn.style.opacity = '0';
    });

    if (!projectForm.hidden) {
      projectForm.style.animation = 'ease-out appearForm 0.2s';
      projectIndex = Number(e.target.closest('.project').getAttribute('data-id'));
      const selectedIndex = projectGrp.children.item(projectIndex);

      projectGrp.insertBefore(projectForm, selectedIndex);
      input.value = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].name;
      input.focus();

      selected = e.target.closest('.project');
      selected.classList.toggle('edited');
      selected.style.display = 'none';

      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex];
    }
    togglePlusBtn();
  }
  function toggleOverflow() {
    const note = document.querySelector('#open-note');
    const botLine = document.querySelector('.bot-note-line');
    if (note.scrollHeight > note.clientHeight) {
      botLine.classList.add('visible');
    } else botLine.classList.remove('visible');
  }

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
    const filtersList = document.querySelectorAll('.filter');
    filtersList.forEach((filter) => {
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
  function resetMobileAnimations() {
    content.style.animation = '';
    sidebar.style.animation = '';
  }

  function updateOpenTask(e) {
    const project = document.querySelector('#open-project');
    const folder = document.querySelector('.open-folder');
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const date = document.querySelector('.open-date');
    const star = document.querySelector('.open-star');
    const id = e.target.closest('.task').getAttribute('data-id');
    const isStarred = currProject.tasks[id].getIsStarred();

    title.textContent = currProject.tasks[id].title;

    if (currProject.name === 'All') {
      project.textContent = 'All';
      folder.className = 'material-symbols-rounded open-folder';
      folder.textContent = 'inbox';
    } else if (currProject.name === 'Starred') {
      project.textContent = 'Starred';
      folder.className = 'fa-solid fa-star open-folder';
      folder.textContent = '';
    } else if (currProject.name === 'Today') {
      project.textContent = 'Today';
      folder.className = 'material-symbols-rounded';
      folder.textContent = 'today';
    } else if (currProject.name === 'Week') {
      project.textContent = 'Today';
      folder.className = 'material-symbols-rounded';
      folder.textContent = 'date_range';
    } else {
      folder.className = 'material-symbols-rounded open-folder';
      project.textContent = currProject.tasks[id].project;
      folder.textContent = 'folder';
    }

    if (isStarred === false) {
      star.style.display = 'none';
    } else star.style.display = 'inline-block';

    if (currProject.tasks[id].note === '') {
      note.textContent = 'No note';
      note.style.textAlign = 'center';
    } else {
      note.style.textAlign = 'left';
      note.textContent = currProject.tasks[id].note;
    }

    const selectedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(currProject.tasks[id].date);
    if (currProject.tasks[id].date === '') {
      date.textContent = '';
    } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(selectedDate) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(selectedDate)) {
      date.textContent = 'Past Due';
      date.style.color = '#E34A4A';
    } else {
      date.textContent = selectedDate.toLocaleDateString();
    }
  }
  function updateProjectsIndex() {
    for (let i = 0; i < _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[i].index = i;
    }
  }
  function updateSelectedProject() {
    updateProjectsIndex();
    resetFilters();
    const projectsList = document.querySelectorAll('.project');
    let foundProject = false;
    projectsList.forEach((project, index) => {
      if (foundProject) return;
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name && index === currProject.index) {
        p.closest('.project').style.backgroundColor = componentColor;
        i.closest('.folder').className = 'folder fa-solid fa-folder';
        foundProject = true;
      }
    });
  }
  function updateSelectedFilter() {
    const filtersList = ['All', 'Starred', 'Today', 'Week'];
    const arr = [selectAll, selectStarred, selectToday, selectWeek];
    for (let i = 0; i < filtersList.length; i++) {
      if (filtersList[i] === currProject.name) {
        arr[i].style.transition = '0.2s ease-out';
        arr[i].style.backgroundColor = componentColor;
      }
    }
  }
  function updateColors() {
    componentColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--component');
    primaryColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--primary');
  }

  function renderTasksOpenView(e) {
    hideTasksLeft();

    setTimeout(() => {
      openTask();
      updateOpenTask(e);
      toggleOverflow();
    }, 100);
  }
  function renderFormView() {
    resetForm();
    resetStar();
    if (!projectForm.hidden) {
      toggleAddProject();
    }
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';

    hideTasksRight();
    setTimeout(() => {
      showForm();
      titleInput.focus();
    }, 100);
  }
  function renderEditView(e, project) {
    e.stopImmediatePropagation();
    if (!projectForm.hidden) {
      toggleAddProject();
    }
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');

    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    dateInput.value = project.getTasks()[taskIndex].date;

    const projectName = e.currentTarget
      .closest('.task')
      .getAttribute('data-project-name');
    document.querySelector('select').value = projectName;
    lastProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.find(({ name }) => name === projectName);
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
  }
  function renderTasksView(e) {
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

    projectIndex = Number(project.getAttribute('data-id'));
    currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex];

    renderTasks(currProject);
    renderTasksView(e);
    updateSelectedProject();

    closeSideBarModal();
  }
  function handleEditProjectClick(e) {
    e.stopImmediatePropagation();
    toggleEditProject(e);
    renderTasks(currProject);
    renderTasksView(e);

    if (content.style.display === 'none') {
      toggleSideBarFocus();
    }
  }
  function handleDeleteProjectClick(e) {
    e.stopPropagation();
    e.target.closest('.project').style.animation = 'ease-in formRight reverse 0.2s';
    e.target.closest('.project').style.opacity = '0.7';

    setTimeout(() => {
      deleteProject(e);
      resetProjects();
      renderProjects();

      if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length === 0 || currProject === _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList) {
        updateAllTasks();
        currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
        resetFilters();
        updateSelectedFilter();
      } else if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length > 0) {
        updateSelectedProject();
      } else updateSelectedFilter();

      renderTasks(currProject);
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
    _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
      (0,_views_projectView__WEBPACK_IMPORTED_MODULE_4__["default"])(project);
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
    _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.unshift(newProject);
    currProject = newProject;
    currProject.index = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.indexOf(newProject);
    updateProjectsIndex();

    resetForm();
    resetProjects();
    renderProjects();
    toggleAddProject();
    updateSelectedProject();
    closeSideBarModal();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function editProject() {
    const name = document.querySelector('#project-name');
    if (!name.value) {
      name.setCustomValidity('Task cannot be empty');
      name.reportValidity();
      return;
    }

    _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].name = name.value;
    currProject.index = projectIndex;
    resetForm();
    toggleEditProject();
    resetProjects();
    renderProjects();
    updateSelectedProject();
    closeSideBarModal();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function deleteProject(e) {
    projectIndex = Number(e.target.closest('.project').getAttribute('data-id'));
    _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.splice(projectIndex, 1);
    updateProjectsIndex();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }

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
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.2s';
        e.target.closest('.task').style.opacity = '0';

        setTimeout(() => {
          toggleComplete(e, currProject);
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
      const taskWrapper = (0,_views_taskView__WEBPACK_IMPORTED_MODULE_3__["default"])(task, project.getTasks());
      document.querySelector('.tasks').append(taskWrapper);
      taskWrapper.setAttribute('data-project-name', task.project);

      if (task.isStarred) {
        taskWrapper.querySelector('.fa-star').classList.replace('fa-regular', 'fa-solid');
      }

      if (task.isComplete && task !== selectedTask) {
        const wrapper = taskWrapper.closest('.task');
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        const edit = taskWrapper.closest('.task').querySelector('.edit');
        const trash = taskWrapper.closest('.task').querySelector('.delete');
        const star = taskWrapper.closest('.task').querySelector('.fa-star');

        title.style.textDecoration = 'line-through';
        title.style.color = subtextColor;

        wrapper.style.backgroundColor = 'transparent';
        wrapper.style.boxShadow = 'none';
        wrapper.removeEventListener('click', renderTasksOpenView);

        edit.style.display = 'none';
        trash.style.display = 'flex';
        star.style.display = 'none';
      }
    });
    addTaskHandlers();
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
    project = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.find(({ name }) => name === formInput.value);

    if (formInput.value === '') {
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().push(newTask);
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    } else {
      project.getTasks().push(newTask);
      currProject = project;
    }

    if (!projectForm.hidden) {
      toggleAddProject();
    }

    renderTasksView(e);
    renderTasks(currProject);
    resetForm();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function editTask(e, project) {
    if (!isTaskValid()) return;
    e.preventDefault();
    const editedTask = storeTask();
    const temp = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.find(({ name }) => name === formInput.value);

    if (
      currProject.name === 'Starred' ||
      currProject.name === 'Today' ||
      currProject.name === 'Week'
    ) {
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    }

    if (
      formInput.value !== project.name &&
      formInput.value !== '' &&
      currProject === _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList
    ) {
      temp.getTasks().push(editedTask);
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().splice(taskIndex, 1);
      currProject = temp;

      if (lastProject !== undefined) {
        lastProject.getTasks().splice(taskIndex, 1);
        lastProject = undefined;
      }
    } else if (formInput.value !== project.name && formInput.value !== '') {
      temp.getTasks().push(editedTask);
      project.getTasks().splice(taskIndex, 1);
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else {
      project.getTasks().splice(taskIndex, 1, editedTask);
    }

    if (!projectForm.hidden) {
      toggleAddProject();
    }

    resetProjects();
    renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    updateProjectsIndex();
    updateSelectedProject();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function deleteTask(e, project) {
    e.stopImmediatePropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const taskToDelete = project.getTasks()[taskIndex];

    let projectToDeleteFrom;
    for (let i = 0; i < _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[i].getTasks().includes(taskToDelete)) {
        projectToDeleteFrom = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[i];
        break;
      }
    }

    if (projectToDeleteFrom !== undefined) {
      projectToDeleteFrom.removeTask(taskToDelete);
    }

    if (projectToDeleteFrom !== currProject) {
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.removeTask(taskToDelete);
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    }

    renderTasksView(e);
    renderTasks(currProject, taskToDelete);
    updateSelectedProject();
    updateSelectedFilter();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function updateAllTasks() {
    if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().length === 0 || _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks() !== currProject) {
      const allTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.flatMap((project) => project.tasks);
      const unassignedTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
        .filter((task) => task.project === '');
      const combinedTasks = allTasks.concat(unassignedTasks);
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.tasks.length = 0;
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.tasks.push(...combinedTasks);
    } else {
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    }
  }
  function updateStarredTasks() {
    const starredTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().filter((task) => task.isStarred);
    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Starred', starredTasks);
  }
  function updateTodayTasks() {
    const todayTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
      .filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(task.date)));

    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Today', todayTasks);
  }
  function updateWeekTasks() {
    const weekTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
      .filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(task.date)));

    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Week', weekTasks);
  }
  function showAll(e) {
    resetFilters();
    updateAllTasks();
    currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;

    resetSelectedProject();
    resetProjects();

    renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    updateSelectedFilter();
    closeSideBarModal();
  }
  function showStarred(e) {
    resetFilters();
    updateAllTasks();
    updateStarredTasks();
    const starredProject = currProject;

    resetSelectedProject();
    resetProjects();

    renderProjects();
    renderTasksView(e);
    renderTasks(starredProject);
    currProject = starredProject;
    updateSelectedFilter();
    closeSideBarModal();
  }
  function showToday(e) {
    resetFilters();
    updateAllTasks();
    updateTodayTasks();
    const todayProject = currProject;

    resetSelectedProject();
    resetProjects();

    renderProjects();
    renderTasksView(e);
    renderTasks(todayProject);
    currProject = todayProject;
    updateSelectedFilter();
    closeSideBarModal();
  }
  function showWeek(e) {
    resetFilters();
    updateAllTasks();
    updateWeekTasks();
    const weekProject = currProject;

    resetSelectedProject();
    resetProjects();

    renderProjects();
    renderTasksView(e);
    renderTasks(weekProject);
    currProject = weekProject;
    updateSelectedFilter();
    closeSideBarModal();
  }

  function toggleMobileFocus() {
    const header = document.querySelector('header');
    content.style.transition = '0.2s ease-out';

    if (titleInput.matches(':focus') || noteInput.matches(':focus')) {
      header.classList.add('header');
      content.classList.add('mobile-stretch');
      content.style.transition = '';
    } else {
      header.classList.remove('header');
      content.classList.remove('mobile-stretch');
      content.style.transition = '0.2s ease-out';
    }
  }
  function toggleSideBarFocus() {
    if (projectInput.matches(':focus')) {
      filters.classList.add('filtersHide');
      resetFilters();
    } else if (!addProjectBtn.matches(':active')) {
      document.querySelector('form').reset();
      projectForm.hidden = true;
      togglePlusBtn();
      resetProjects();
      renderProjects();

      const filtersArr = ['All', 'Starred', 'Today', 'Week'];
      for (let i = 0; i < filtersArr.length; i++) {
        if (currProject.name === filtersArr[i]) {
          updateSelectedFilter();
          break;
        } else {
          updateSelectedProject();
        }
      }
      filters.classList.remove('filtersHide');
    }
  }
  function toggleSideBarModal() {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      sidebar.style.animation = '0.2s formRight ease-out';
      sidebar.style.display = 'flex';
      content.style.display = 'none';
      logo.classList.add('blurred');
      updateSelectedFilter();

      setTimeout(() => {
        resetMobileAnimations();
      }, 200);
    } else {
      sidebar.style.animation = '0.2s reverse formRight ease-out';
      logo.classList.remove('blurred');

      setTimeout(() => {
        content.style.display = 'block';
        sidebar.style.display = 'none';
        resetMobileAnimations();
        mobileMenu.checked = false;
      }, 100);
    }
  }
  function closeSideBarModal() {
    if (mobileMenu.classList.contains('active')) {
      toggleSideBarModal();
    }
  }
  function isMobileView() {
    if (window.clientWidth >= 480) {
      sidebar.style.display = 'flex';
      content.style.display = 'block';
    } else if (window.clientWidth < 480) {
      sidebar.style.display = 'none';
      content.style.display = 'block';
      mobileMenu.classList.remove('active');
      logo.classList.remove('blurred');
      mobileMenu.checked = false;
    }
  }

  function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    const temp = themeIcon.textContent;
    themeIcon.textContent = temp === 'toggle_on' ? 'toggle_off' : 'toggle_on';

    const date = document.querySelector('.open-date');
    if (date.textContent === 'Past Due') {
      date.style.color = '#E34A4A';
    } else {
      date.style.color = primaryColor;
    }
    updateColors();
    updateSelectedProject();
    updateSelectedFilter();
  }
  function initIntro() {
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
    introProject.index = 0;
    currProject = introProject;
    _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.push(introProject);
    introProject.getTasks().push(introTask);
    introProject.getTasks().push(introTaskTwo);
  }
  function findProjects() {
    if (!localStorage.getItem('data')) {
      initIntro();
    } else {
      (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().getData();
    }

    updateAllTasks();
    currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    renderTasks(currProject);
    updateSelectedFilter();
  }
  window.addEventListener('resize', isMobileView);
  projectInput.addEventListener('focus', toggleSideBarFocus);
  projectInput.addEventListener('blur', toggleSideBarFocus);
  projectInput.addEventListener('touchend', toggleSideBarFocus);
  mobileMenu.addEventListener('click', toggleSideBarModal);
  titleInput.addEventListener('focus', toggleMobileFocus);
  titleInput.addEventListener('blur', toggleMobileFocus);
  titleInput.addEventListener('touchend', toggleMobileFocus);
  noteInput.addEventListener('focus', toggleMobileFocus);
  noteInput.addEventListener('blur', toggleMobileFocus);
  noteInput.addEventListener('touchend', toggleMobileFocus);
  themeIcon.addEventListener('click', toggleTheme);
  selectAll.addEventListener('click', showAll);
  selectStarred.addEventListener('click', showStarred);
  selectToday.addEventListener('click', showToday);
  selectWeek.addEventListener('click', showWeek);
  addProjectBtn.addEventListener('click', toggleAddProject);
  formStar.addEventListener('click', toggleFormStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', (e) => {
    addTask(e, currProject);
  });
  editBtn.addEventListener('click', (e) => {
    editTask(e, currProject);
  });
  projectForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isProjectValid()) {
        if (selected === '') {
          addProject();
          projectForm.hidden = true;
        } else {
          editProject();
          togglePlusBtn();
          selected.classList.toggle('edited');
          selected = '';
        }
      }

      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
      resetForm();
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
    findProjects();
    renderProjects();
    resetTasks();
    renderTasks(currProject);
    renderTasksView(e);
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
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
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
    // prettier-ignore
    const index = this.tasks.findIndex(
      (task) => task.title === selectedTask.title
    );
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}


/***/ }),

/***/ "./src/modules/models/storageModel.js":
/*!********************************************!*\
  !*** ./src/modules/models/storageModel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksList": () => (/* binding */ allTasksList),
/* harmony export */   "default": () => (/* binding */ storage),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModel */ "./src/modules/models/taskModel.js");
/* harmony import */ var _projectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModel */ "./src/modules/models/projectModel.js");



const projects = [];
const allTasksList = new _projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All');

function storage() {
  let data = {
    projects,
    tasks: projects.flatMap((project) => project.getTasks()),
    all: allTasksList.getTasks(),
  };

  function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  function getData() {
    const storedData = localStorage.getItem('data');
    data = JSON.parse(storedData);

    const storedProjects = data.projects.map((project) => {
      const storedTasks = project.tasks.map(
        (task) =>
          new _taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
            task.title,
            task.note,
            task.project,
            task.date,
            task.isStarred,
            task.isComplete
          )
      );
      return new _projectModel__WEBPACK_IMPORTED_MODULE_1__["default"](project.name, storedTasks);
    });

    const allTasks = data.all.map(
      (task) =>
        new _taskModel__WEBPACK_IMPORTED_MODULE_0__["default"](
          task.title,
          task.note,
          task.project,
          task.date,
          task.isStarred,
          task.isComplete
        )
    );
    data.projects = storedProjects;
    data.tasks = storedProjects.flatMap((project) => project.getTasks());
    data.all = allTasks;

    projects.length = 0;
    projects.push(...storedProjects);
    allTasksList.tasks.length = 0;
    allTasksList.tasks.push(...allTasks);
  }

  return {
    getData,
    saveData,
    get projects() {
      return projects;
    },
    get allTasksList() {
      return allTasksList;
    },
  };
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
/* harmony import */ var _models_storageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/storageModel */ "./src/modules/models/storageModel.js");


function createProject(project) {
  const div = () => document.createElement('div');
  const text = document.createElement('p');
  const icon = () => document.createElement('i');

  const wrapper = div();
  wrapper.className = 'project';
  wrapper.setAttribute('data-id', _models_storageModel__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project));
  text.className = 'project-name';
  text.textContent = project.name;
  const folder = icon();
  folder.classList.add('folder', 'fa-regular', 'fa-folder');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsbUJBQW1CLE9BQU8sYUFBYSxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxpQkFBaUIsT0FBTyxXQUFXLFVBQVUsYUFBYSxjQUFjLG1CQUFtQixPQUFPLGFBQWEsbUJBQW1CLE9BQU8sa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxlQUFlLFFBQVEsV0FBVyxZQUFZLGFBQWEsa0JBQWtCLFFBQVEsa0JBQWtCLFFBQVEsYUFBYSxrQkFBa0IsUUFBUSxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksa0JBQWtCLE9BQU8sV0FBVyxZQUFZLFdBQVcsYUFBYSxvQkFBb0IsT0FBTyxjQUFjLG1CQUFtQixPQUFPLGFBQWEsbUJBQW1CLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGdCQUFnQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sV0FBVyxVQUFVLFlBQVksa0JBQWtCLE9BQU8sV0FBVyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLGlCQUFpQixTQUFTLGdCQUFnQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sV0FBVyxpQkFBaUIsT0FBTyxXQUFXLFlBQVksV0FBVyxlQUFlLE9BQU8sY0FBYyxZQUFZLFlBQVksYUFBYSxXQUFXLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxlQUFlLE9BQU8sYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxjQUFjLG1CQUFtQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxrQkFBa0IsT0FBTyxr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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9B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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUI7QUFDbUI7O0FBRTFDLHdEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzUGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9wcm9qZWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3N0b3JhZ2VNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvdGFza01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWxbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuICAtLWJnLWNvbG9yOiAjZTRmMGZhO1xcbiAgLS1wcmltYXJ5OiAjZmY3YzdjO1xcbiAgLS1kay10ZXh0OiAjMmIzYzViO1xcbiAgLS1kay1zdWJ0ZXh0OiAjN2E4YWEzO1xcbiAgLS1jYXJkOiAjZTZlZWY4O1xcbiAgLS1jb21wb25lbnQtczogI2M0Y2RkMTtcXG4gIC0tY29tcG9uZW50OiAjZDNkZWUzO1xcbiAgLS1ncmFkLWJhc2U6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMjQ2LCAxMTcsIDExNyk7XFxuICAtLWNhbC1pbmRpY2F0b3I6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNTEwMyUpIGh1ZS1yb3RhdGUoMzE0ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpOyB9XFxuXFxuaHRtbFtkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1iZy1jb2xvcjogIzEyMTIxNTtcXG4gIC0tcHJpbWFyeTogIzhkOGZkMjtcXG4gIC0tZGstdGV4dDogI2RmZTBmYjtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzE4MTgxYztcXG4gIC0tY29tcG9uZW50LXM6ICM0NTQyNTQ7XFxuICAtLWNvbXBvbmVudDogIzJmMmQzNjtcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMTI1LCA5MCwgMjQyKTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDE0NSwgMTE0LCAyNDcpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMTA0LCA2MSwgMjQ3KTtcXG4gIC0tY2FsLWluZGljYXRvcjogaW52ZXJ0KDU3JSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSgxODQlKSBodWUtcm90YXRlKDIwMGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NSUpIGNvbnRyYXN0KDkzJSk7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIG1vYmlsZSB2aWV3cG9ydCBidWcgZml4ICovXFxuICBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyB9XFxuICBib2R5IGgyLFxcbiAgYm9keSBoMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgYm9keSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBoZWlnaHQ6IDI1cHg7IH1cXG4gIGJvZHkgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIGJvZHkgcCxcXG4gIGJvZHkgc3BhbixcXG4gIGJvZHkgaSxcXG4gIGJvZHkgcSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTsgfVxcbiAgYm9keSBpbnB1dCxcXG4gIGJvZHkgdGV4dGFyZWEsXFxuICBib2R5IHNlbGVjdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wb25lbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgYm9keSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDsgfVxcbiAgICBib2R5IGlucHV0OmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IH1cXG4gIGJvZHkgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGJvZHkgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgYm9keSAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLFxcbiAgYm9keSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgYm9keSAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAxLCAnd2dodCcgMzAwLCAnR1JBRCcgMjAwLCAnb3BzeicgNDg7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHZ3O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDI4NXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICBoZWFkZXIgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICBoZWFkZXIgZGl2IHtcXG4gICAgd2lkdGg6IDUxMHB4OyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMCA4dnc7IH1cXG4gIC5jYXJkcyAub3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAuY2FyZHMgLmZpbHRlcixcXG4gIC5jYXJkcyAucHJvamVjdCxcXG4gIC5jYXJkcyAudGFzayxcXG4gIC5jYXJkcyBidXR0b24sXFxuICAuY2FyZHMgLmZhLXBsdXMsXFxuICAuY2FyZHMgLnRoZW1lLFxcbiAgLmNhcmRzIC5hZGQtc3RhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyLFxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4OyB9XFxuICAuY2FyZHMgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIC5jYXJkcyAuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXJzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycy10aXRsZS1ncnAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAudGhlbWUge1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbXBvbmVudC1zKTtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC50aGVtZTpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC50aGVtZTphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgLmZhLXN0YXIge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgd2lkdGg6IDE4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIsXFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgcCxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgaSB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29tcG9uZW50LXMpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIgLnJvdGF0ZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLmZvbGRlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCBpIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5lZGl0LXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLmRlbGV0ZS1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Q6aG92ZXIgLnByb2plY3QtYnRuLWdycCAub3B0aW9ucyB7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAjcHJvamVjdC1uYW1lIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5naXRodWIgLmZhLWdpdGh1YiB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIHdpZHRoOiA1MTBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRpdGxlLWdycCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGl0bGUtZ3JwIC5jdXJyZW50LXRpdGxlIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgY29sb3I6ICM0NTQyNTQ7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAubm8tdGFza3Mge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2tzIHtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIGhlaWdodDogMzV2aDtcXG4gICAgICAgIHBhZGRpbmc6IDJweDsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICB3aWR0aDogOTkuNSU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0cHggNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcms6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC50YXNrLXRpdGxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50LXMpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIC5hY3Rpb25zIC5lZGl0LFxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzazpob3ZlciAuYWN0aW9ucyAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyB7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgIGdhcDogNHB4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5vcHRpb25zIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIGkge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmVkaXQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICNub3RlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxNXZoO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tY2FsLWluZGljYXRvcik7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgICAgICAgICAgc2NhbGU6IDEuMTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWNhbC1pbmRpY2F0b3IpOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1zdGFyOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSg3MmRlZyk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN0YXJyZWQge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cXG4gICAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIgLmZhLXN0YXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGUge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgaGVpZ2h0OiAyN3ZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tbm90ZTo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYm90LW5vdGUtbGluZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLnZpc2libGUge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCA4cHggOHB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyAub3Blbi1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5idG4tZ3JvdXAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIC5iYWNrLWJ0biB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuIHtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgNXB4IDVweCAxNXB4IDBweDtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbi5zbGlkZS10YXNrcy1vdXQge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCB0YXNrUmlnaHQgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgdGFza1JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpOyB9IH1cXG5cXG4uc2xpZGUtZm9ybS1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCAwLjFzOyB9XFxuXFxuLnNsaWRlLWZvcm0tb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xczsgfVxcblxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsbCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5zaWRlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuc2lkZS1tZW51IC5tZW51LWljb24ge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5zaWRlLW1lbnUgLm1lbnUtZ3JwIHtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB3aWR0aDogMjVweDtcXG4gICAgICBoZWlnaHQ6IDEzcHg7IH1cXG4gICAgICAuc2lkZS1tZW51IC5tZW51LWdycCAubWVudS1saW5lIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjEsIDAuODIsIDAuNzYsIDAuOTY1KTsgfVxcbiAgICAgICAgLnNpZGUtbWVudSAubWVudS1ncnAgLm1lbnUtbGluZTpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdG9wOiAwOyB9XFxuICAgICAgICAuc2lkZS1tZW51IC5tZW51LWdycCAubWVudS1saW5lOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIGJvdHRvbTogMDsgfVxcbiAgICAuc2lkZS1tZW51LmFjdGl2ZSAubWVudS1saW5lOmZpcnN0LW9mLXR5cGUsXFxuICAgIC5zaWRlLW1lbnUgLm1lbnUtaWNvbjpjaGVja2VkICsgZGl2IC5tZW51LWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHRvcDogNXB4OyB9XFxuICAgIC5zaWRlLW1lbnUuYWN0aXZlIC5tZW51LWxpbmU6bGFzdC1vZi10eXBlLFxcbiAgICAuc2lkZS1tZW51IC5tZW51LWljb246Y2hlY2tlZCArIGRpdiAubWVudS1saW5lOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICBib3R0b206IDVweDsgfVxcbiAgLmJsdXJyZWQge1xcbiAgICBmaWx0ZXI6IGJsdXIoNHB4KTsgfVxcbiAgaHRtbCxcXG4gIGJvZHksXFxuICAuY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMTBweDsgfVxcbiAgc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiAxMXB4OyB9XFxuICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBmb250LXNpemU6IDExcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI3Rhc2ssXFxuICBzZWxlY3QjcHJvamVjdHMsXFxuICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAuZm9ybS1oZWFkZXIsXFxuICAuZm9ybS10aXRsZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxM3B4OyB9XFxuICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHdpZHRoOiAxNDBweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5hZGQtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mb3JtLWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXIge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICNub3RlIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBmb250LXNpemU6IDEycHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtcmVndWxhciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDFweDsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDExcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC5uby10YXNrcyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLXRpdGxlIHtcXG4gICAgd2lkdGg6IDIxNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDRweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMzV2aDsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyLFxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA3MHZoOyB9XFxuICAuY2FyZHMgLm1vYmlsZS1zdHJldGNoIHtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgaGVpZ2h0OiA2MHZoOyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuaGVhZGVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwOyB9XFxuICAuZmlsdGVyc0hpZGUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBVztFQUNYLGtCQUFVO0VBQ1Ysa0JBQVU7RUFDVixxQkFBYTtFQUNiLGVBQU87RUFDUCxzQkFBYztFQUNkLG9CQUFZO0VBQ1osK0JBQVk7RUFDWixnQ0FBYTtFQUNiLGdDQUFhO0VBQ2I7bUNBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQVc7RUFDWCxrQkFBVTtFQUNWLGtCQUFVO0VBQ1YscUJBQWE7RUFDYixlQUFPO0VBQ1Asc0JBQWM7RUFDZCxvQkFBWTtFQUNaLDhCQUFZO0VBQ1osZ0NBQWE7RUFDYiwrQkFBYTtFQUNiO2lDQUFnQixFQUFB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LEVBQUE7RUEvQnpCO0lBa0NVLG1CQUFtQixFQUFBO0VBbEM3QjtJQXFDVSxlQUFlLEVBQUE7RUFyQ3pCO0lBMENVLGtCQUFrQixFQUFBO0lBMUM1QjtNQTRDWSxlQUFlO01BQ2YsZUFBZSxFQUFBO0lBN0MzQjtNQWdEWSxlQUFlLEVBQUE7RUFoRDNCO0lBd0RVLGVBQWUsRUFBQTtFQXhEekI7SUE2RFEsZUFBZSxFQUFBO0VBN0R2QjtJQW1FVSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWUsRUFBQTtFQXJFekI7SUF3RVUsZUFBZTtJQUNmLFlBQVksRUFBQTtFQXpFdEI7O0lBZ0ZJLFlBQVksRUFBQTtFQWhGaEI7SUFtRkksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFyRmhCO0lBd0ZJLGFBQWEsRUFBQTtFQUdqQjtJQUNFLFVBQVU7SUFDVixTQUFTLEVBQUE7RUFFWDtJQUNFLGFBQWEsRUFBQSxFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWxbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuICAtLWJnLWNvbG9yOiAjZTRmMGZhO1xcbiAgLS1wcmltYXJ5OiAjZmY3YzdjO1xcbiAgLS1kay10ZXh0OiAjMmIzYzViO1xcbiAgLS1kay1zdWJ0ZXh0OiAjN2E4YWEzO1xcbiAgLS1jYXJkOiAjZTZlZWY4O1xcbiAgLS1jb21wb25lbnQtczogI2M0Y2RkMTtcXG4gIC0tY29tcG9uZW50OiAjZDNkZWUzO1xcbiAgLS1ncmFkLWJhc2U6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMjQ2LCAxMTcsIDExNyk7XFxuICAtLWNhbC1pbmRpY2F0b3I6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNTEwMyUpIGh1ZS1yb3RhdGUoMzE0ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5odG1sW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWJnLWNvbG9yOiAjMTIxMjE1O1xcbiAgLS1wcmltYXJ5OiAjOGQ4ZmQyO1xcbiAgLS1kay10ZXh0OiAjZGZlMGZiO1xcbiAgLS1kay1zdWJ0ZXh0OiAjODQ4NDlkO1xcbiAgLS1jYXJkOiAjMTgxODFjO1xcbiAgLS1jb21wb25lbnQtczogIzQ1NDI1NDtcXG4gIC0tY29tcG9uZW50OiAjMmYyZDM2O1xcbiAgLS1ncmFkLWJhc2U6IHJnYigxMjUsIDkwLCAyNDIpO1xcbiAgLS1ncmFkaWVudC0xOiByZ2IoMTQ1LCAxMTQsIDI0Nyk7XFxuICAtLWdyYWRpZW50LTI6IHJnYigxMDQsIDYxLCAyNDcpO1xcbiAgLS1jYWwtaW5kaWNhdG9yOiBpbnZlcnQoNTclKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDE4NCUpIGh1ZS1yb3RhdGUoMjAwZGVnKVxcbiAgICBicmlnaHRuZXNzKDg1JSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuJGJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuJHByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xcbiRkay10ZXh0OiB2YXIoLS1kay10ZXh0KTtcXG4kZGstc3VidGV4dDogdmFyKC0tZGstc3VidGV4dCk7XFxuJGNhcmQ6IHZhcigtLWNhcmQpO1xcbiRjb21wb25lbnQtczogdmFyKC0tY29tcG9uZW50LXMpO1xcbiRjb21wb25lbnQ6IHZhcigtLWNvbXBvbmVudCk7XFxuJGdyYWQtYmFzZTogdmFyKC0tZ3JhZC1iYXNlKTtcXG4kZ3JhZGllbnQtMTogdmFyKC0tZ3JhZGllbnQtMSk7XFxuJGdyYWRpZW50LTI6IHZhcigtLWdyYWRpZW50LTIpO1xcbiRjYWwtaW5kaWNhdG9yOiB2YXIoLS1jYWwtaW5kaWNhdG9yKTtcXG4kdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5odG1sIHtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIC8vIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIG1vYmlsZSB2aWV3cG9ydCBidWcgZml4ICovXFxuICBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgaDIsXFxuICBoMyB7XFxuICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gIH1cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBwLFxcbiAgc3BhbixcXG4gIGksXFxuICBxIHtcXG4gICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgfVxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSxcXG4gIHNlbGVjdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG4gIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICB9XFxuICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLFxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAxLCAnd2dodCcgMzAwLCAnR1JBRCcgMjAwLCAnb3BzeicgNDg7XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTB2dztcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoMSB7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogMjg1cHg7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiA1MTBweDtcXG4gIH1cXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOHZ3O1xcbiAgLm9wdGlvbnMge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIH1cXG4gIH1cXG4gIC5maWx0ZXIsXFxuICAucHJvamVjdCxcXG4gIC50YXNrLFxcbiAgYnV0dG9uLFxcbiAgLmZhLXBsdXMsXFxuICAudGhlbWUsXFxuICAuYWRkLXN0YXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAuc2lkZWJhcixcXG4gIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4O1xcbiAgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgfVxcbiAgICAuZmlsdGVycy10aXRsZS1ncnAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuICAgIC50aGVtZSB7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjb2xvcjogJGNvbXBvbmVudC1zO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICB9XFxuICAgICAgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBpIHtcXG4gICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICBjb2xvcjogJGNvbXBvbmVudC1zO1xcbiAgICAgIH1cXG4gICAgICAucGx1czpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgfVxcbiAgICAgIC5yb3RhdGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICBmbGV4OiAxO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdC1ncnAge1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGkge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgIC5mb2xkZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0LWJ0bi1ncnAge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5vcHRpb25zIHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5lZGl0LXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kZWxldGUtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIC5wcm9qZWN0LWJ0bi1ncnAge1xcbiAgICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjcHJvamVjdC1uYW1lIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICB9XFxuICAgIC5naXRodWIge1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgLmZhLWdpdGh1YiB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB9XFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuY29udGVudCB7XFxuICAgIHdpZHRoOiA1MTBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAudC13cmFwcGVyLFxcbiAgICAuZi13cmFwcGVyLFxcbiAgICAuby13cmFwcGVyIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC50aXRsZS1ncnAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIC5jdXJyZW50LXRpdGxlIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgY29sb3I6ICM0NTQyNTQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5uby10YXNrcyB7XFxuICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgIC50YXNrcyB7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICBoZWlnaHQ6IDM1dmg7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgfVxcbiAgICAgIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICB3aWR0aDogOTkuNSU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0cHggNHB4IDBweCxcXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrLXRpdGxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICAgIC5lZGl0LFxcbiAgICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIGdhcDogNHB4O1xcbiAgICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZWRpdCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmZhLXNvbGlkIHtcXG4gICAgICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgICAgIH1cXG4gICAgICAgICN0YXNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI25vdGUge1xcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgICAgIGZpbHRlcjogJGNhbC1pbmRpY2F0b3I7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogKDEuMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiAkY2FsLWluZGljYXRvcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSByb3RhdGUoNzJkZWcpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdGFycmVkIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcbiAgICAgICAgICAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgLmZhLXN0YXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5ub3RlLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGhyIHtcXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xcblxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcbiAgICAgICAgI29wZW4tbm90ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBoZWlnaHQ6IDI3dmg7XFxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJvdC1ub3RlLWxpbmUge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC52aXNpYmxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDhweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIC5vcGVuLWRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgYmFja2dyb3VuZDogJGdyYWQtYmFzZTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSA1cHggNXB4IDE1cHggMHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIC5tZW51LWljb24ge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5tZW51LWdycCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgaGVpZ2h0OiAxM3B4O1xcbiAgICAgIC5tZW51LWxpbmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbXBvbmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMSwgMC44MiwgMC43NiwgMC45NjUpO1xcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYuYWN0aXZlLFxcbiAgICAubWVudS1pY29uOmNoZWNrZWQgKyBkaXYge1xcbiAgICAgIC5tZW51LWxpbmUge1xcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAuYmx1cnJlZCB7XFxuICAgIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgfVxcbiAgaHRtbCxcXG4gIGJvZHksXFxuICAuY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrLFxcbiAgc2VsZWN0I3Byb2plY3RzLFxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAuZm9ybS1oZWFkZXIsXFxuICAuZm9ybS10aXRsZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY2FyZHMge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgLmZpbHRlcixcXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAuYWRkLWJ0biB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgfVxcbiAgICAgIC5mLXdyYXBwZXIge1xcbiAgICAgICAgLnRhc2stZm9ybSB7XFxuICAgICAgICAgIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICNub3RlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5leHRyYXMtd3JhcHBlciB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgICAuZXhwYW5kLWhlYWRlciB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgICAgIC5wcm9qZWN0LWdycCBwIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QtZ3JwIGkge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAudC13cmFwcGVyIHtcXG4gICAgICAgIC50YXNrIHtcXG4gICAgICAgICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5vLXRhc2tzIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuby13cmFwcGVyIHtcXG4gICAgICAgIC5leHBhbmQtdmlldyB7XFxuICAgICAgICAgICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogMjE1cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAjb3Blbi1ub3RlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5zaWRlYmFyLFxcbiAgICAuY29udGVudCB7XFxuICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB9XFxuICAgIC5tb2JpbGUtc3RyZXRjaCB7XFxuICAgICAgdHJhbnNpdGlvbjogMHM7XFxuICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgfVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIC5maWx0ZXJzSGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgeyBwYXJzZUlTTywgaXNUb2RheSwgaXNQYXN0LCBpc1RoaXNXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2RlbHMvdGFza01vZGVsJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kZWxzL3Byb2plY3RNb2RlbCc7XG5pbXBvcnQgc3RvcmFnZSwgeyBwcm9qZWN0cywgYWxsVGFza3NMaXN0IH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZU1vZGVsJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi92aWV3cy9wcm9qZWN0Vmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudC13cmFwcGVyJyk7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmYtd3JhcHBlcicpO1xuICBjb25zdCBvcGVuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdyYXBwZXInKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtcGx1cycpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gIGNvbnN0IGZvcm1TdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zdGFyJyk7XG4gIGNvbnN0IHByb2plY3RHcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gIGNvbnN0IHNlbGVjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgY29uc3Qgc2VsZWN0U3RhcnJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFycmVkJyk7XG4gIGNvbnN0IHNlbGVjdFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHNlbGVjdFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuICBjb25zdCB0aGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcnMnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpO1xuXG4gIGxldCBjb21wb25lbnRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb21wb25lbnQnKTtcbiAgbGV0IHByaW1hcnlDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5Jyk7XG4gIGNvbnN0IHRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay10ZXh0Jyk7XG4gIGNvbnN0IHN1YnRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay1zdWJ0ZXh0Jyk7XG5cbiAgbGV0IHRhc2tJbmRleCA9IDA7XG4gIGxldCBwcm9qZWN0SW5kZXg7XG4gIGxldCBjdXJyUHJvamVjdDtcbiAgbGV0IGxhc3RQcm9qZWN0O1xuICBsZXQgc2VsZWN0ZWQgPSAnJztcblxuICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1Rhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBoaWRlVGFza3NSaWdodCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzTGVmdCA9ICgpID0+IHtcbiAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3Qgb3BlblRhc2sgPSAoKSA9PiB7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzUHJvamVjdFZhbGlkKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFwcm9qZWN0LnZhbHVlKSB7XG4gICAgICBwcm9qZWN0LnNldEN1c3RvbVZhbGlkaXR5KCdQcm9qZWN0IGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgcHJvamVjdC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBpc1Rhc2tWYWxpZCgpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICBpZiAoIXRhc2sudmFsdWUpIHtcbiAgICAgIHRhc2suc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICB0YXNrLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQnRuVGV4dCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUoZSwgcHJvamVjdCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKCF0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICB9XG4gICAgdGFzay5pc0NvbXBsZXRlID0gIXRhc2suaXNDb21wbGV0ZTtcbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NPcGVuVmlldyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2ttYXJrQ2xhc3NlcyA9IFsnZmEtcmVndWxhcicsICdmYS1zb2xpZCcsICdmYS1jaXJjbGUnLCAnZmEtY2lyY2xlLWNoZWNrJ107XG4gICAgY2hlY2ttYXJrQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgIHNlbGVjdGVkVGFzay5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgZWRpdCA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgdHJhc2ggPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgY29uc3Qgc3RhciA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJyk7XG5cbiAgICB0aXRsZS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICBlZGl0LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgdHJhc2guc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICBzdGFyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgaWYgKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSAnJyAmJiB0aXRsZS5zdHlsZS5jb2xvciAhPT0gJyNkMmQ4ZjdhNicpIHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIHdyYXBwZXIuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuICAgICAgZWRpdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgdHJhc2guc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIHN0YXIuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG4gICAgICB0aXRsZS5zdHlsZS5jb2xvciA9IHRleHRDb2xvcjtcbiAgICAgIGVkaXQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHRyYXNoLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBzdGFyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlRm9ybVN0YXIoKSB7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnJlZCcpO1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXJlZ3VsYXInKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZVBsdXNCdG4oKSB7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdwbHVzJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGVkJyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICBzZWxlY3RlZCA9ICcnO1xuICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSAhcHJvamVjdEZvcm0uaGlkZGVuO1xuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtVmVydGljYWwgMC4ycyc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RHcnAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdEdycC5jaGlsZHJlbltpXS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVZlcnRpY2FsIDAuMnMnO1xuICAgICAgfVxuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHByb2plY3RHcnAuZmlyc3RDaGlsZCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuLWdycCAub3B0aW9ucycpO1xuICAgIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSk7XG5cbiAgICBpZiAocHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcnNIaWRlJyk7XG4gICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgcmVzZXRQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlRWRpdFByb2plY3QoZSkge1xuICAgIHByb2plY3RGb3JtLmhpZGRlbiA9ICFwcm9qZWN0Rm9ybS5oaWRkZW47XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9ucycpO1xuXG4gICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBhcHBlYXJGb3JtIDAuMnMnO1xuICAgICAgcHJvamVjdEluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHByb2plY3RHcnAuY2hpbGRyZW4uaXRlbShwcm9qZWN0SW5kZXgpO1xuXG4gICAgICBwcm9qZWN0R3JwLmluc2VydEJlZm9yZShwcm9qZWN0Rm9ybSwgc2VsZWN0ZWRJbmRleCk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgIHNlbGVjdGVkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRlZCcpO1xuICAgICAgc2VsZWN0ZWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgY3VyclByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIH1cbiAgICB0b2dnbGVQbHVzQnRuKCk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlT3ZlcmZsb3coKSB7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW5vdGUnKTtcbiAgICBjb25zdCBib3RMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdC1ub3RlLWxpbmUnKTtcbiAgICBpZiAobm90ZS5zY3JvbGxIZWlnaHQgPiBub3RlLmNsaWVudEhlaWdodCkge1xuICAgICAgYm90TGluZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIGJvdExpbmUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRTdGFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc3RhcicpLmNsYXNzTmFtZSA9ICdhZGQtc3RhciBmYS1yZWd1bGFyIGZhLXN0YXInO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0UHJvamVjdHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ3JwJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUYXNrcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5pbm5lckhUTUwgPSAnJztcbiAgfVxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgaWYgKGVkaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpLnJlc2V0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuICAgIGZpbHRlcnNMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgZmlsdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgY29uc3QgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2xkZXInKTtcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtcmVndWxhciBmYS1mb2xkZXInO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldE1vYmlsZUFuaW1hdGlvbnMoKSB7XG4gICAgY29udGVudC5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlT3BlblRhc2soZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tZm9sZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi10aXRsZScpO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1ub3RlJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWRhdGUnKTtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tc3RhcicpO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0uZ2V0SXNTdGFycmVkKCk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS50aXRsZTtcblxuICAgIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnQWxsJykge1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdBbGwnO1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQgb3Blbi1mb2xkZXInO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJ2luYm94JztcbiAgICB9IGVsc2UgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdTdGFycmVkJykge1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdTdGFycmVkJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtc3RhciBvcGVuLWZvbGRlcic7XG4gICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICB9IGVsc2UgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdUb2RheScpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJ3RvZGF5JztcbiAgICB9IGVsc2UgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdXZWVrJykge1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCc7XG4gICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSAnZGF0ZV9yYW5nZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIG9wZW4tZm9sZGVyJztcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0ucHJvamVjdDtcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICdmb2xkZXInO1xuICAgIH1cblxuICAgIGlmIChpc1N0YXJyZWQgPT09IGZhbHNlKSB7XG4gICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG4gICAgaWYgKGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5ub3RlID09PSAnJykge1xuICAgICAgbm90ZS50ZXh0Q29udGVudCA9ICdObyBub3RlJztcbiAgICAgIG5vdGUuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGUuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgbm90ZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5ub3RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IHBhcnNlSVNPKGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5kYXRlKTtcbiAgICBpZiAoY3VyclByb2plY3QudGFza3NbaWRdLmRhdGUgPT09ICcnKSB7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSBlbHNlIGlmIChpc1Bhc3Qoc2VsZWN0ZWREYXRlKSAmJiAhaXNUb2RheShzZWxlY3RlZERhdGUpKSB7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gJ1Bhc3QgRHVlJztcbiAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSAnI0UzNEE0QSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzSW5kZXgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHNbaV0uaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgdXBkYXRlUHJvamVjdHNJbmRleCgpO1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgbGV0IGZvdW5kUHJvamVjdCA9IGZhbHNlO1xuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZvdW5kUHJvamVjdCkgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9IHByb2plY3QucXVlcnlTZWxlY3RvcignaScpO1xuICAgICAgY29uc3QgcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgaWYgKHAudGV4dENvbnRlbnQgPT09IGN1cnJQcm9qZWN0Lm5hbWUgJiYgaW5kZXggPT09IGN1cnJQcm9qZWN0LmluZGV4KSB7XG4gICAgICAgIHAuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAgICAgaS5jbG9zZXN0KCcuZm9sZGVyJykuY2xhc3NOYW1lID0gJ2ZvbGRlciBmYS1zb2xpZCBmYS1mb2xkZXInO1xuICAgICAgICBmb3VuZFByb2plY3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCkge1xuICAgIGNvbnN0IGZpbHRlcnNMaXN0ID0gWydBbGwnLCAnU3RhcnJlZCcsICdUb2RheScsICdXZWVrJ107XG4gICAgY29uc3QgYXJyID0gW3NlbGVjdEFsbCwgc2VsZWN0U3RhcnJlZCwgc2VsZWN0VG9kYXksIHNlbGVjdFdlZWtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmaWx0ZXJzTGlzdFtpXSA9PT0gY3VyclByb2plY3QubmFtZSkge1xuICAgICAgICBhcnJbaV0uc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2Utb3V0JztcbiAgICAgICAgYXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVDb2xvcnMoKSB7XG4gICAgY29tcG9uZW50Q29sb3IgPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbXBvbmVudCcpO1xuICAgIHByaW1hcnlDb2xvciA9IHdpbmRvd1xuICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3NPcGVuVmlldyhlKSB7XG4gICAgaGlkZVRhc2tzTGVmdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuVGFzaygpO1xuICAgICAgdXBkYXRlT3BlblRhc2soZSk7XG4gICAgICB0b2dnbGVPdmVyZmxvdygpO1xuICAgIH0sIDEwMCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyRm9ybVZpZXcoKSB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93Rm9ybSgpO1xuICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0sIDEwMCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyRWRpdFZpZXcoZSwgcHJvamVjdCkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgdGFza0luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0udGl0bGU7XG4gICAgbm90ZUlucHV0LnZhbHVlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0ubm90ZTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5kYXRlO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgIC5jbG9zZXN0KCcudGFzaycpXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gICAgbGFzdFByb2plY3QgPSBwcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc29saWQnKTtcbiAgICB9XG5cbiAgICBoaWRlVGFza3NSaWdodCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzVmlldyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChhZGRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgdG9nZ2xlQnRuVGV4dCgpO1xuICAgIH1cbiAgICBpZiAoZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBoaWRlRm9ybSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dUYXNrc1JpZ2h0KCk7XG4gICAgICB9LCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3BlbldyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICBjbG9zZVRhc2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NMZWZ0KCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9KTtcbiAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuXG4gICAgY29uc3QgZm9sZGVyID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtc29saWQgZmEtZm9sZGVyJztcblxuICAgIHByb2plY3RJbmRleCA9IE51bWJlcihwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICBjdXJyUHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG5cbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdENsaWNrKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRvZ2dsZVNpZGVCYXJGb2N1cygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0Q2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjJzJztcbiAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnN0eWxlLm9wYWNpdHkgPSAnMC43JztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGVsZXRlUHJvamVjdChlKTtcbiAgICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG5cbiAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDAgfHwgY3VyclByb2plY3QgPT09IGFsbFRhc2tzTGlzdCkge1xuICAgICAgICB1cGRhdGVBbGxUYXNrcygpO1xuICAgICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICAgICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICB9IGVsc2UgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcblxuICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIH0sIDEwMCk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHByb2plY3RXcmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1wJyk7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcCcpO1xuXG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuXG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0UHJvamVjdENsaWNrKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEZWxldGVQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdEhhbmRsZXJzKCk7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgaWYgKCFpc1Byb2plY3RWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHN0b3JlUHJvamVjdCgpO1xuICAgIHByb2plY3RzLnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgY3VyclByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIGN1cnJQcm9qZWN0LmluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihuZXdQcm9qZWN0KTtcbiAgICB1cGRhdGVQcm9qZWN0c0luZGV4KCk7XG5cbiAgICByZXNldEZvcm0oKTtcbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghbmFtZS52YWx1ZSkge1xuICAgICAgbmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIG5hbWUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWUgPSBuYW1lLnZhbHVlO1xuICAgIGN1cnJQcm9qZWN0LmluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KCk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBwcm9qZWN0SW5kZXggPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgdXBkYXRlUHJvamVjdHNJbmRleCgpO1xuICAgIHN0b3JhZ2UoKS5zYXZlRGF0YSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNoZWNrbWFya3MuZm9yRWFjaCgoY2hlY2ttYXJrKSA9PiB7XG4gICAgICBjaGVja21hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZShlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0QnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHJlbmRlckVkaXRWaWV3KGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLWluIGZvcm1SaWdodCByZXZlcnNlIDAuMnMnO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgICAgIGRlbGV0ZVRhc2soZSwgY3VyclByb2plY3QpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCwgc2VsZWN0ZWRUYXNrKSB7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHAnKS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyBmb3VuZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MgcCcpLmNsYXNzTmFtZSA9ICduby10YXNrcyc7XG4gICAgfVxuXG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kKHRhc2tXcmFwcGVyKTtcbiAgICAgIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCB0YXNrLnByb2plY3QpO1xuXG4gICAgICBpZiAodGFzay5pc1N0YXJyZWQpIHtcbiAgICAgICAgdGFza1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmZhLXN0YXInKS5jbGFzc0xpc3QucmVwbGFjZSgnZmEtcmVndWxhcicsICdmYS1zb2xpZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFzay5pc0NvbXBsZXRlICYmIHRhc2sgIT09IHNlbGVjdGVkVGFzaykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgICAgIGNvbnN0IHRyYXNoID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IHN0YXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJyk7XG5cbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSBzdWJ0ZXh0Q29sb3I7XG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuXG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFkZFRhc2tIYW5kbGVycygpO1xuICB9XG4gIGZ1bmN0aW9uIHN0b3JlVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGZvcm1TdGFyLmNsYXNzTGlzdC5jb250YWlucygnc3RhcnJlZCcpO1xuXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yZVRhc2soKTtcbiAgICBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGZvcm1JbnB1dC52YWx1ZSk7XG5cbiAgICBpZiAoZm9ybUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgYWxsVGFza3NMaXN0LmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cblxuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gIH1cbiAgZnVuY3Rpb24gZWRpdFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgY29uc3QgdGVtcCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBmb3JtSW5wdXQudmFsdWUpO1xuXG4gICAgaWYgKFxuICAgICAgY3VyclByb2plY3QubmFtZSA9PT0gJ1N0YXJyZWQnIHx8XG4gICAgICBjdXJyUHJvamVjdC5uYW1lID09PSAnVG9kYXknIHx8XG4gICAgICBjdXJyUHJvamVjdC5uYW1lID09PSAnV2VlaydcbiAgICApIHtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGZvcm1JbnB1dC52YWx1ZSAhPT0gcHJvamVjdC5uYW1lICYmXG4gICAgICBmb3JtSW5wdXQudmFsdWUgIT09ICcnICYmXG4gICAgICBjdXJyUHJvamVjdCA9PT0gYWxsVGFza3NMaXN0XG4gICAgKSB7XG4gICAgICB0ZW1wLmdldFRhc2tzKCkucHVzaChlZGl0ZWRUYXNrKTtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY3VyclByb2plY3QgPSB0ZW1wO1xuXG4gICAgICBpZiAobGFzdFByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXN0UHJvamVjdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICBsYXN0UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1JbnB1dC52YWx1ZSAhPT0gcHJvamVjdC5uYW1lICYmIGZvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRlbXAuZ2V0VGFza3MoKS5wdXNoKGVkaXRlZFRhc2spO1xuICAgICAgcHJvamVjdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgYWxsVGFza3NMaXN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBjdXJyUHJvamVjdCA9IHRlbXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTtcbiAgICB9XG5cbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cblxuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdHNJbmRleCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHN0b3JhZ2UoKS5zYXZlRGF0YSgpO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSwgcHJvamVjdCkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGFza0luZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcblxuICAgIGxldCBwcm9qZWN0VG9EZWxldGVGcm9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXRUYXNrcygpLmluY2x1ZGVzKHRhc2tUb0RlbGV0ZSkpIHtcbiAgICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbSA9IHByb2plY3RzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9qZWN0VG9EZWxldGVGcm9tLnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gY3VyclByb2plY3QpIHtcbiAgICAgIGFsbFRhc2tzTGlzdC5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QsIHRhc2tUb0RlbGV0ZSk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVBbGxUYXNrcygpIHtcbiAgICBpZiAoYWxsVGFza3NMaXN0LmdldFRhc2tzKCkubGVuZ3RoID09PSAwIHx8IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpICE9PSBjdXJyUHJvamVjdCkge1xuICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRhc2tzKTtcbiAgICAgIGNvbnN0IHVuYXNzaWduZWRUYXNrcyA9IGFsbFRhc2tzTGlzdFxuICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09ICcnKTtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGFza3MgPSBhbGxUYXNrcy5jb25jYXQodW5hc3NpZ25lZFRhc2tzKTtcbiAgICAgIGFsbFRhc2tzTGlzdC50YXNrcy5sZW5ndGggPSAwO1xuICAgICAgYWxsVGFza3NMaXN0LnRhc2tzLnB1c2goLi4uY29tYmluZWRUYXNrcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTdGFycmVkVGFza3MoKSB7XG4gICAgY29uc3Qgc3RhcnJlZFRhc2tzID0gYWxsVGFza3NMaXN0LmdldFRhc2tzKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlzU3RhcnJlZCk7XG4gICAgY3VyclByb2plY3QgPSBuZXcgUHJvamVjdCgnU3RhcnJlZCcsIHN0YXJyZWRUYXNrcyk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlVG9kYXlUYXNrcygpIHtcbiAgICBjb25zdCB0b2RheVRhc2tzID0gYWxsVGFza3NMaXN0XG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZpbHRlcigodGFzaykgPT4gaXNUb2RheShwYXJzZUlTTyh0YXNrLmRhdGUpKSk7XG5cbiAgICBjdXJyUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdUb2RheScsIHRvZGF5VGFza3MpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVdlZWtUYXNrcygpIHtcbiAgICBjb25zdCB3ZWVrVGFza3MgPSBhbGxUYXNrc0xpc3RcbiAgICAgIC5nZXRUYXNrcygpXG4gICAgICAuZmlsdGVyKCh0YXNrKSA9PiBpc1RoaXNXZWVrKHBhcnNlSVNPKHRhc2suZGF0ZSkpKTtcblxuICAgIGN1cnJQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1dlZWsnLCB3ZWVrVGFza3MpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dBbGwoZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHVwZGF0ZUFsbFRhc2tzKCk7XG4gICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvd1N0YXJyZWQoZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHVwZGF0ZUFsbFRhc2tzKCk7XG4gICAgdXBkYXRlU3RhcnJlZFRhc2tzKCk7XG4gICAgY29uc3Qgc3RhcnJlZFByb2plY3QgPSBjdXJyUHJvamVjdDtcblxuICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3Moc3RhcnJlZFByb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gc3RhcnJlZFByb2plY3Q7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICBjbG9zZVNpZGVCYXJNb2RhbCgpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dUb2RheShlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgdXBkYXRlQWxsVGFza3MoKTtcbiAgICB1cGRhdGVUb2RheVRhc2tzKCk7XG4gICAgY29uc3QgdG9kYXlQcm9qZWN0ID0gY3VyclByb2plY3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKHRvZGF5UHJvamVjdCk7XG4gICAgY3VyclByb2plY3QgPSB0b2RheVByb2plY3Q7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICBjbG9zZVNpZGVCYXJNb2RhbCgpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dXZWVrKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICB1cGRhdGVBbGxUYXNrcygpO1xuICAgIHVwZGF0ZVdlZWtUYXNrcygpO1xuICAgIGNvbnN0IHdlZWtQcm9qZWN0ID0gY3VyclByb2plY3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKHdlZWtQcm9qZWN0KTtcbiAgICBjdXJyUHJvamVjdCA9IHdlZWtQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZUZvY3VzKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2Utb3V0JztcblxuICAgIGlmICh0aXRsZUlucHV0Lm1hdGNoZXMoJzpmb2N1cycpIHx8IG5vdGVJbnB1dC5tYXRjaGVzKCc6Zm9jdXMnKSkge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc3RyZXRjaCcpO1xuICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXInKTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLXN0cmV0Y2gnKTtcbiAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2Utb3V0JztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlU2lkZUJhckZvY3VzKCkge1xuICAgIGlmIChwcm9qZWN0SW5wdXQubWF0Y2hlcygnOmZvY3VzJykpIHtcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnZmlsdGVyc0hpZGUnKTtcbiAgICAgIHJlc2V0RmlsdGVycygpO1xuICAgIH0gZWxzZSBpZiAoIWFkZFByb2plY3RCdG4ubWF0Y2hlcygnOmFjdGl2ZScpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcbiAgICAgIHByb2plY3RGb3JtLmhpZGRlbiA9IHRydWU7XG4gICAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgICByZXNldFByb2plY3RzKCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuXG4gICAgICBjb25zdCBmaWx0ZXJzQXJyID0gWydBbGwnLCAnU3RhcnJlZCcsICdUb2RheScsICdXZWVrJ107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN1cnJQcm9qZWN0Lm5hbWUgPT09IGZpbHRlcnNBcnJbaV0pIHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcnNIaWRlJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXJNb2RhbCgpIHtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXG4gICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnMC4ycyBmb3JtUmlnaHQgZWFzZS1vdXQnO1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdibHVycmVkJyk7XG4gICAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzZXRNb2JpbGVBbmltYXRpb25zKCk7XG4gICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyLnN0eWxlLmFuaW1hdGlvbiA9ICcwLjJzIHJldmVyc2UgZm9ybVJpZ2h0IGVhc2Utb3V0JztcbiAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cnJlZCcpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXNldE1vYmlsZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgbW9iaWxlTWVudS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbG9zZVNpZGVCYXJNb2RhbCgpIHtcbiAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICB0b2dnbGVTaWRlQmFyTW9kYWwoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNNb2JpbGVWaWV3KCkge1xuICAgIGlmICh3aW5kb3cuY2xpZW50V2lkdGggPj0gNDgwKSB7XG4gICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmNsaWVudFdpZHRoIDwgNDgwKSB7XG4gICAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cnJlZCcpO1xuICAgICAgbW9iaWxlTWVudS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVGhlbWUoKSB7XG4gICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgY29uc3QgbmV3VGhlbWUgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgbmV3VGhlbWUpO1xuXG4gICAgY29uc3QgdGVtcCA9IHRoZW1lSWNvbi50ZXh0Q29udGVudDtcbiAgICB0aGVtZUljb24udGV4dENvbnRlbnQgPSB0ZW1wID09PSAndG9nZ2xlX29uJyA/ICd0b2dnbGVfb2ZmJyA6ICd0b2dnbGVfb24nO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWRhdGUnKTtcbiAgICBpZiAoZGF0ZS50ZXh0Q29udGVudCA9PT0gJ1Bhc3QgRHVlJykge1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9ICcjRTM0QTRBJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IHByaW1hcnlDb2xvcjtcbiAgICB9XG4gICAgdXBkYXRlQ29sb3JzKCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0SW50cm8oKSB7XG4gICAgY29uc3QgaW50cm9UYXNrID0gbmV3IFRhc2soXG4gICAgICAnQ2xpY2sgbWUgdG8gbGVhcm4gbW9yZSEnLFxuICAgICAgJyAtIEV4cGFuZCB0YXNrcyB0byB2aWV3IGFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGVtLiBcXG5cXG4gLSBXcml0ZSBub3RlcywgYWRkIGRhdGVzIGFuZCBzdGFyIHRhc2tzIGZyb20gdGhlIGZvcm0gcGFuZS4gXFxuXFxuIC0gVGhhbmsgeW91IGZvciBjaGVja2luZyBvdXQgbXkgcHJvamVjdCEnLFxuICAgICAgJ0RlZmF1bHQnLFxuICAgICAgJycsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBpbnRyb1Rhc2tUd28gPSBuZXcgVGFzayhcbiAgICAgICdTaWRlYmFyIEluZm8nLFxuICAgICAgJyAtIEZpbHRlciBjcmVhdGVkIHRhc2tzIGJ5IEFsbCwgU3RhcnJlZCwgVG9kYXkgb3IgV2Vlay4gXFxuXFxuIC0gQWRkICBwcm9qZWN0cyBieSBjbGlja2luZyAoKykgYW5kIHByZXNzaW5nIEVudGVyLiBcXG5cXG4gLSBIb3ZlciBvdmVyIGV4aXN0aW5nIHByb2plY3RzIHRvIGVkaXQgb3IgZGVsZXRlIHRoZW0uJyxcbiAgICAgICdEZWZhdWx0JyxcbiAgICAgICcnLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgY29uc3QgaW50cm9Qcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICBpbnRyb1Byb2plY3QuaW5kZXggPSAwO1xuICAgIGN1cnJQcm9qZWN0ID0gaW50cm9Qcm9qZWN0O1xuICAgIHByb2plY3RzLnB1c2goaW50cm9Qcm9qZWN0KTtcbiAgICBpbnRyb1Byb2plY3QuZ2V0VGFza3MoKS5wdXNoKGludHJvVGFzayk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2tUd28pO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0cygpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpIHtcbiAgICAgIGluaXRJbnRybygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yYWdlKCkuZ2V0RGF0YSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFsbFRhc2tzKCk7XG4gICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gIH1cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGlzTW9iaWxlVmlldyk7XG4gIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZVNpZGVCYXJGb2N1cyk7XG4gIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdG9nZ2xlU2lkZUJhckZvY3VzKTtcbiAgcHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG9nZ2xlU2lkZUJhckZvY3VzKTtcbiAgbW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGVCYXJNb2RhbCk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVNb2JpbGVGb2N1cyk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgbm90ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlTW9iaWxlRm9jdXMpO1xuICBub3RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgbm90ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG9nZ2xlTW9iaWxlRm9jdXMpO1xuICB0aGVtZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVUaGVtZSk7XG4gIHNlbGVjdEFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGwpO1xuICBzZWxlY3RTdGFycmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1N0YXJyZWQpO1xuICBzZWxlY3RUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RheSk7XG4gIHNlbGVjdFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93V2Vlayk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0KTtcbiAgZm9ybVN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtU3Rhcik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJGb3JtVmlldyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYWRkVGFzayhlLCBjdXJyUHJvamVjdCk7XG4gIH0pO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlZGl0VGFzayhlLCBjdXJyUHJvamVjdCk7XG4gIH0pO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChpc1Byb2plY3RWYWxpZCgpKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgICAgcHJvamVjdEZvcm0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0UHJvamVjdCgpO1xuICAgICAgICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfVxuICB9KTtcbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgIGZpbmRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzID0gW10pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhzZWxlY3RlZFRhc2spIHtcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KFxuICAgICAgKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHNlbGVjdGVkVGFzay50aXRsZVxuICAgICk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrTW9kZWwnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0TW9kZWwnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcbmV4cG9ydCBjb25zdCBhbGxUYXNrc0xpc3QgPSBuZXcgUHJvamVjdCgnQWxsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2UoKSB7XG4gIGxldCBkYXRhID0ge1xuICAgIHByb2plY3RzLFxuICAgIHRhc2tzOiBwcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRhc2tzKCkpLFxuICAgIGFsbDogYWxsVGFza3NMaXN0LmdldFRhc2tzKCksXG4gIH07XG5cbiAgZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgc3RvcmVkVGFza3MgPSBwcm9qZWN0LnRhc2tzLm1hcChcbiAgICAgICAgKHRhc2spID0+XG4gICAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgICAgdGFzay5ub3RlLFxuICAgICAgICAgICAgdGFzay5wcm9qZWN0LFxuICAgICAgICAgICAgdGFzay5kYXRlLFxuICAgICAgICAgICAgdGFzay5pc1N0YXJyZWQsXG4gICAgICAgICAgICB0YXNrLmlzQ29tcGxldGVcbiAgICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgc3RvcmVkVGFza3MpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsVGFza3MgPSBkYXRhLmFsbC5tYXAoXG4gICAgICAodGFzaykgPT5cbiAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICB0YXNrLm5vdGUsXG4gICAgICAgICAgdGFzay5wcm9qZWN0LFxuICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICB0YXNrLmlzU3RhcnJlZCxcbiAgICAgICAgICB0YXNrLmlzQ29tcGxldGVcbiAgICAgICAgKVxuICAgICk7XG4gICAgZGF0YS5wcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzO1xuICAgIGRhdGEudGFza3MgPSBzdG9yZWRQcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgIGRhdGEuYWxsID0gYWxsVGFza3M7XG5cbiAgICBwcm9qZWN0cy5sZW5ndGggPSAwO1xuICAgIHByb2plY3RzLnB1c2goLi4uc3RvcmVkUHJvamVjdHMpO1xuICAgIGFsbFRhc2tzTGlzdC50YXNrcy5sZW5ndGggPSAwO1xuICAgIGFsbFRhc2tzTGlzdC50YXNrcy5wdXNoKC4uLmFsbFRhc2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YSxcbiAgICBzYXZlRGF0YSxcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfSxcbiAgICBnZXQgYWxsVGFza3NMaXN0KCkge1xuICAgICAgcmV0dXJuIGFsbFRhc2tzTGlzdDtcbiAgICB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQgPSBmYWxzZSwgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNTdGFycmVkID0gaXNTdGFycmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIGdldElzU3RhcnJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N0YXJyZWQ7XG4gIH1cblxuICBnZXRJc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vbW9kZWxzL3N0b3JhZ2VNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBkaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaWNvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBjb25zdCB3cmFwcGVyID0gZGl2KCk7XG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xuICB0ZXh0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LW5hbWUnO1xuICB0ZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBjb25zdCBmb2xkZXIgPSBpY29uKCk7XG4gIGZvbGRlci5jbGFzc0xpc3QuYWRkKCdmb2xkZXInLCAnZmEtcmVndWxhcicsICdmYS1mb2xkZXInKTtcbiAgY29uc3QgZ3JvdXAgPSBkaXYoKTtcbiAgZ3JvdXAuY2xhc3NOYW1lID0gJ3Byb2plY3QtYnRuLWdycCc7XG4gIGNvbnN0IGVkaXQgPSBpY29uKCk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdlZGl0LXAnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIGNvbnN0IHRyYXNoID0gaWNvbigpO1xuICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2RlbGV0ZS1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuXG4gIGNvbnN0IG9wdGlvbiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBwaWNrID0gb3B0aW9uKCk7XG4gIHBpY2sudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIHBpY2sudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQocGljayk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB3cmFwcGVyLmFwcGVuZChmb2xkZXIsIHRleHQsIGdyb3VwKTtcbiAgZ3JvdXAuYXBwZW5kKGVkaXQsIHRyYXNoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaywgcHJvamVjdCkge1xuICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGVja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5pbmRleE9mKHRhc2spKTtcbiAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBjaGVja1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRlLWNoZWNrJyk7XG4gIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2lyY2xlLWNoZWNrJyk7XG4gIH0gZWxzZSBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1jaXJjbGUnKTtcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2VkaXQnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZGVsZXRlJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICB0cmFzaC50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtc3RhcicpO1xuXG4gIHRhc2tXcmFwcGVyLmFwcGVuZChjaGVja1dyYXBwZXIsIHRpdGxlLCBhY3Rpb25zKTtcbiAgY2hlY2tXcmFwcGVyLmFwcGVuZChpbnB1dCwgY2hlY2ttYXJrKTtcbiAgYWN0aW9ucy5hcHBlbmQoZWRpdCwgdHJhc2gsIHN0YXIpO1xuXG4gIHJldHVybiB0YXNrV3JhcHBlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgYXBwQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvYXBwJztcblxuYXBwQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9