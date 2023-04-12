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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nhtml {\n  height: -webkit-fill-available; }\n\nbody {\n  background-color: var(--bg-color);\n  transition: 0.2s ease-out;\n  min-height: 100vh;\n  /* mobile viewport bug fix */\n  min-height: -webkit-fill-available; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p {\n    display: flex; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding: 0 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none;\n    transition: 0.2s ease-out; }\n  body input {\n    height: 35px; }\n    body input:focus {\n      outline: none; }\n  body textarea {\n    height: 120px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none; }\n  body button {\n    transition: 0.2s ease-out; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\n.container {\n  min-height: 100vh; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: 0.2s ease-out;\n  user-select: none; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 285px;\n    transition: 0.2s ease-out; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(130deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: 0.2s ease-out; }\n  header div {\n    width: 510px; }\n\n.hidden {\n  display: none; }\n\n.side-menu {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: 0.2s ease-out; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 270px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filters-title-grp {\n      display: flex;\n      justify-content: space-between; }\n    .cards .sidebar .theme {\n      height: 26px;\n      font-size: 24px;\n      color: var(--component-s);\n      user-select: none;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .theme:hover {\n        transform: scale(1.03);\n        color: var(--primary); }\n      .cards .sidebar .theme:active {\n        transform: scale(0.97); }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-out;\n        color: var(--component-s); }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i {\n        font-size: 14px; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px;\n        transition: 0.2s ease-out; }\n        .cards .sidebar .github .fa-github:hover {\n          color: var(--primary); }\n        .cards .sidebar .github .fa-github:active {\n          transform: scale(0.95); }\n  .cards .content {\n    width: 510px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .title-grp {\n        display: flex;\n        justify-content: space-between; }\n        .cards .content .t-wrapper .title-grp .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none; }\n      .cards .content .t-wrapper .tasks {\n        overflow-x: hidden;\n        height: 35vh;\n        padding: 2px; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        width: 99.5%;\n        margin-bottom: 8px;\n        display: flex;\n        min-width: 0;\n        padding-right: 10px;\n        background-color: var(--component);\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: 0.2s ease-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task .task-title {\n          display: block;\n          height: 35px;\n          width: 75%;\n          padding-right: 8px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .edit,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: 0.2s ease-out;\n          gap: 4px; }\n          .cards .content .t-wrapper .task .actions .options {\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions i {\n            transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .actions .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #task {\n          height: 36px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh;\n          padding: 10px; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: 0.2s ease-out;\n            filter: var(--cal-indicator); }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator:hover {\n            scale: 1.1;\n            filter: var(--cal-indicator); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-out;\n          color: var(--primary); }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-out;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.97); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex;\n            margin-top: 2px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              font-size: 20px;\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: 0.2s ease-out; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          font-size: 18px;\n          color: var(--dk-text);\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: scroll;\n          padding-top: 8px; }\n          .cards .content .o-wrapper .expand-view #open-note::-webkit-scrollbar-corner {\n            color: transparent; }\n        .cards .content .o-wrapper .expand-view .bot-note-line {\n          display: none;\n          width: 20px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0; }\n        .cards .content .o-wrapper .expand-view .visible {\n          display: block; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary);\n            font-weight: 500; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer; }\n    .side-menu .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0; }\n    .side-menu .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px; }\n      .side-menu .menu-grp .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: var(--component);\n        background-color: var(--primary);\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965); }\n        .side-menu .menu-grp .menu-line:first-of-type {\n          top: 0; }\n        .side-menu .menu-grp .menu-line:last-of-type {\n          bottom: 0; }\n    .side-menu.active .menu-line:first-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:first-of-type {\n      transform: rotate(45deg);\n      top: 5px; }\n    .side-menu.active .menu-line:last-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:last-of-type {\n      transform: rotate(-45deg);\n      bottom: 5px; }\n  .blurred {\n    filter: blur(4px); }\n  html,\n  body,\n  .container {\n    overflow: hidden;\n    min-height: -webkit-fill-available; }\n  header {\n    height: 110px; }\n  select {\n    font-size: 11px; }\n  input[type='date'] {\n    font-size: 11px; }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px; }\n  .section-header {\n    font-size: 18px; }\n  .form-header,\n  .form-title-header {\n    font-size: 16px; }\n  .cards .sidebar .filter,\n  .cards .sidebar .project {\n    font-size: 13px; }\n  .cards .sidebar .projects-header {\n    overflow-x: hidden; }\n  .cards .sidebar .project .project-name {\n    font-size: 13px;\n    width: 140px; }\n  .cards .content .f-wrapper .task-form .form-header {\n    margin-top: 14px;\n    margin-bottom: 10px; }\n  .cards .content .f-wrapper .task-form .fa-star {\n    margin-top: 50px; }\n  .cards .content .f-wrapper .task-form #note {\n    height: 20vh;\n    font-size: 12px; }\n  .cards .content .f-wrapper .task-form .extras-wrapper {\n    margin-bottom: 20px; }\n  .cards .content .f-wrapper .task-form .fa-regular {\n    font-size: 24px; }\n  .cards .content .f-wrapper .expand-view .expand-header {\n    margin-bottom: 8px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp p {\n      font-size: 14px;\n      margin-top: 1px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp i {\n      font-size: 18px; }\n  .cards .content .t-wrapper .task .task-title {\n    font-size: 11px; }\n  .cards .content .t-wrapper .no-tasks {\n    font-size: 16px; }\n  .cards .content .o-wrapper .expand-view #open-title {\n    width: 215px;\n    font-size: 16px;\n    margin-top: 4px; }\n  .cards .content .o-wrapper .expand-view #open-note {\n    font-size: 14px;\n    height: 35vh; }\n  .cards .sidebar,\n  .cards .content {\n    height: 70vh; }\n  .cards .mobile-stretch {\n    transition: 0s;\n    margin-top: 5vh;\n    height: 60vh; }\n  .cards .sidebar {\n    display: none; }\n  .header {\n    opacity: 0;\n    height: 0; }\n  .filtersHide {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%);\n}\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%);\n}\n\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n$cal-indicator: var(--cal-indicator);\n$transition: 0.2s ease-out;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n}\nhtml {\n  height: -webkit-fill-available;\n}\nbody {\n  background-color: $bg-color;\n  transition: $transition;\n  // height: 100vh;\n  min-height: 100vh;\n  /* mobile viewport bug fix */\n  min-height: -webkit-fill-available;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    height: 25px;\n  }\n  p {\n    display: flex;\n  }\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext;\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding: 0 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n    transition: $transition;\n  }\n  input {\n    height: 35px;\n    &:focus {\n      outline: none;\n    }\n  }\n  textarea {\n    height: 120px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none;\n  }\n  button {\n    transition: $transition;\n  }\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\n.container {\n  min-height: 100vh;\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: $transition;\n  user-select: none;\n  h1 {\n    color: $dk-text;\n    font-size: 48px;\n    width: 285px;\n    transition: $transition;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(130deg, $gradient-1 0%, $gradient-2 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: $transition;\n  }\n  div {\n    width: 510px;\n  }\n}\n.hidden {\n  display: none;\n}\n.side-menu {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: $transition;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: $transition;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 270px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filters-title-grp {\n      display: flex;\n      justify-content: space-between;\n    }\n    .theme {\n      height: 26px;\n      font-size: 24px;\n      color: $component-s;\n      user-select: none;\n      transition: $transition;\n      &:hover {\n        transform: scale(1.03);\n        color: $primary;\n      }\n      &:active {\n        transform: scale(0.97);\n      }\n    }\n    .filter {\n      height: 32px;\n      .fa-star {\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n      i {\n        margin-right: 6px;\n      }\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: $transition;\n        color: $component-s;\n      }\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: $transition;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i {\n        font-size: 14px;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      transition: $transition;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n        transition: $transition;\n        &:hover {\n          color: $primary;\n        }\n        &:active {\n          transform: scale(0.95);\n        }\n      }\n    }\n  }\n\n  .content {\n    width: 510px;\n    overflow-x: hidden;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .title-grp {\n        display: flex;\n        justify-content: space-between;\n        .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254;\n        }\n      }\n\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none;\n      }\n      .tasks {\n        overflow-x: hidden;\n        height: 35vh;\n        padding: 2px;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        width: 99.5%;\n        margin-bottom: 8px;\n        display: flex;\n        min-width: 0;\n        padding-right: 10px;\n        background-color: $component;\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px 0px,\n          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: $transition;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: $transition;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        .task-title {\n          display: block;\n          height: 35px;\n          width: 75%;\n          padding-right: 8px;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: $dk-text;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .edit,\n            .fa-regular {\n              transition: $transition;\n              opacity: 1;\n            }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: $transition;\n          gap: 4px;\n          .options {\n            height: 100%;\n            display: flex;\n            align-items: center;\n          }\n          i {\n            transition: $transition;\n          }\n          .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n          }\n          span {\n            display: flex;\n          }\n          .fa-regular {\n            opacity: 0;\n          }\n\n          .fa-solid {\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #task {\n          height: 36px;\n        }\n        #note {\n          height: 15vh;\n          padding: 10px;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          user-select: none;\n          &::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: $transition;\n            filter: $cal-indicator;\n          }\n          &::-webkit-calendar-picker-indicator:hover {\n            scale: (1.1);\n            filter: $cal-indicator;\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: $transition;\n          color: $primary;\n          &:hover {\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          transition: $transition;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text;\n          background: $grad-base;\n          background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: $transition;\n          user-select: none;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.97);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            margin-top: 2px;\n            i {\n              font-size: 20px;\n              margin-right: 6px;\n            }\n            p {\n              font-size: 16px;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: $transition;\n          .fa-star {\n            font-size: 24px;\n            color: $primary;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n        }\n        #open-title {\n          font-size: 18px;\n          color: $dk-text;\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        #open-note {\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: scroll;\n          padding-top: 8px;\n          &::-webkit-scrollbar-corner {\n            color: transparent;\n          }\n        }\n        .bot-note-line {\n          display: none;\n          width: 20px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0;\n        }\n        .visible {\n          display: block;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n            font-weight: 500;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text;\n      background: $grad-base;\n      background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n      transition: $transition;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none;\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer;\n\n    .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0;\n    }\n    .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px;\n      .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: $component;\n        background-color: $primary;\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);\n        &:first-of-type {\n          top: 0;\n        }\n        &:last-of-type {\n          bottom: 0;\n        }\n      }\n    }\n    &.active,\n    .menu-icon:checked + div {\n      .menu-line {\n        &:first-of-type {\n          transform: rotate(45deg);\n          top: 5px;\n        }\n        &:last-of-type {\n          transform: rotate(-45deg);\n          bottom: 5px;\n        }\n      }\n    }\n  }\n  .blurred {\n    filter: blur(4px);\n  }\n  html,\n  body,\n  .container {\n    overflow: hidden;\n    min-height: -webkit-fill-available;\n  }\n  header {\n    height: 110px;\n  }\n  select {\n    font-size: 11px;\n  }\n  input[type='date'] {\n    font-size: 11px;\n  }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px;\n  }\n  .section-header {\n    font-size: 18px;\n  }\n  .form-header,\n  .form-title-header {\n    font-size: 16px;\n  }\n\n  .cards {\n    .sidebar {\n      .filter,\n      .project {\n        font-size: 13px;\n      }\n      .projects-header {\n        overflow-x: hidden;\n      }\n      .project {\n        .project-name {\n          font-size: 13px;\n          width: 140px;\n        }\n      }\n    }\n    .content {\n      .f-wrapper {\n        .task-form {\n          .form-header {\n            margin-top: 14px;\n            margin-bottom: 10px;\n          }\n          .fa-star {\n            margin-top: 50px;\n          }\n          #note {\n            height: 20vh;\n            font-size: 12px;\n          }\n          .extras-wrapper {\n            margin-bottom: 20px;\n          }\n          .fa-regular {\n            font-size: 24px;\n          }\n        }\n        .expand-view {\n          .expand-header {\n            margin-bottom: 8px;\n            .project-grp p {\n              font-size: 14px;\n              margin-top: 1px;\n            }\n            .project-grp i {\n              font-size: 18px;\n            }\n          }\n        }\n      }\n      .t-wrapper {\n        .task {\n          .task-title {\n            font-size: 11px;\n          }\n        }\n\n        .no-tasks {\n          font-size: 16px;\n        }\n      }\n      .o-wrapper {\n        .expand-view {\n          #open-title {\n            width: 215px;\n            font-size: 16px;\n            margin-top: 4px;\n          }\n          #open-note {\n            font-size: 14px;\n            height: 35vh;\n          }\n        }\n      }\n    }\n    .sidebar,\n    .content {\n      height: 70vh;\n    }\n    .mobile-stretch {\n      transition: 0s;\n      margin-top: 5vh;\n      height: 60vh;\n    }\n    .sidebar {\n      display: none;\n    }\n  }\n  .header {\n    opacity: 0;\n    height: 0;\n  }\n  .filtersHide {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sbUJBQW1CLFFBQVEsYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxjQUFjLGlCQUFpQixPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxpQkFBaUIsT0FBTyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTyxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLGVBQWUsT0FBTyxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksa0JBQWtCLE9BQU8sV0FBVyxZQUFZLG1CQUFtQixPQUFPLFdBQVcsa0JBQWtCLE9BQU8sV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxtQkFBbUIsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxtQkFBbUIsT0FBTyxhQUFhLGdCQUFnQixPQUFPLGFBQWEsV0FBVyxhQUFhLGlCQUFpQixPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsZ0JBQWdCLGVBQWUsYUFBYSxlQUFlLG9CQUFvQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxXQUFXLGlCQUFpQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsZUFBZSxPQUFPLFdBQVcsaUJBQWlCLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxZQUFZLGFBQWEsb0JBQW9CLE9BQU8sV0FBVyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLGFBQWEsWUFBWSxpQkFBaUIsT0FBTyxXQUFXLGFBQWEsWUFBWSxZQUFZLGFBQWEsa0JBQWtCLE9BQU8sZUFBZSxhQUFhLFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxXQUFXLGlCQUFpQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sY0FBYyxtQkFBbUIsT0FBTyxrQkFBa0IsT0FBTyxjQUFjLFlBQVksYUFBYSxpQkFBaUIsT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGNBQWMsaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGtCQUFrQixRQUFRLG1CQUFtQixRQUFRLG9CQUFvQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLHVCQUF1QixNQUFNLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0sS0FBSyxZQUFZLGdCQUFnQixLQUFLLFlBQVksc0JBQXNCLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsZUFBZSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxlQUFlLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxjQUFjLGlCQUFpQixlQUFlLGtCQUFrQixPQUFPLGdCQUFnQixNQUFNLGdCQUFnQixRQUFRLGFBQWEsZ0JBQWdCLFFBQVEsYUFBYSxnQkFBZ0IsTUFBTSxpQkFBaUIsUUFBUSxZQUFZLGtCQUFrQixNQUFNLGVBQWUsS0FBSyxlQUFlLE1BQU0sZUFBZSxRQUFRLFVBQVUsZUFBZSxNQUFNLGVBQWUsT0FBTyxlQUFlLE9BQU8sZUFBZSxNQUFNLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxNQUFNLGFBQWEsa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxlQUFlLE9BQU8sa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxlQUFlLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLGVBQWUsT0FBTyxXQUFXLGVBQWUsUUFBUSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsZUFBZSxPQUFPLGdCQUFnQixNQUFNLFVBQVUsZUFBZSxLQUFLLGtFQUFrRSx3QkFBd0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDJCQUEyQix5QkFBeUIsb0NBQW9DLHFDQUFxQyxxQ0FBcUMsb0hBQW9ILEdBQUcsMkJBQTJCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLDBCQUEwQixvQkFBb0IsMkJBQTJCLHlCQUF5QixtQ0FBbUMscUNBQXFDLG9DQUFvQyxpSEFBaUgsR0FBRywrQkFBK0IsMkJBQTJCLDJCQUEyQixpQ0FBaUMscUJBQXFCLG1DQUFtQywrQkFBK0IsK0JBQStCLGlDQUFpQyxpQ0FBaUMsdUNBQXVDLDZCQUE2QixPQUFPLGNBQWMsZUFBZSwyQkFBMkIsMkNBQTJDLHFCQUFxQixHQUFHLFFBQVEsbUNBQW1DLEdBQUcsUUFBUSxnQ0FBZ0MsNEJBQTRCLHFCQUFxQixzQkFBc0Isd0VBQXdFLGVBQWUsc0JBQXNCLEtBQUssUUFBUSxzQkFBc0IsS0FBSyxRQUFRLHNCQUFzQix5QkFBeUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsS0FBSyxPQUFPLG9CQUFvQixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyxtQ0FBbUMsbUJBQW1CLDBCQUEwQixzQkFBc0IsdUJBQXVCLG1DQUFtQyxzQkFBc0IsbUJBQW1CLDhCQUE4QixLQUFLLFdBQVcsbUJBQW1CLGVBQWUsc0JBQXNCLE9BQU8sS0FBSyxjQUFjLG9CQUFvQix3QkFBd0IsS0FBSyxZQUFZLG1CQUFtQixrQkFBa0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixLQUFLLFlBQVksOEJBQThCLEtBQUssOERBQThELHNCQUFzQixLQUFLLCtCQUErQiwyRUFBMkUsS0FBSyxHQUFHLGNBQWMsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLDRCQUE0QixzQkFBc0IsUUFBUSxzQkFBc0Isc0JBQXNCLG1CQUFtQiw4QkFBOEIsS0FBSyxVQUFVLDZCQUE2Qiw0RUFBNEUsNEJBQTRCLG9DQUFvQywyQ0FBMkMsOEJBQThCLEtBQUssU0FBUyxtQkFBbUIsS0FBSyxHQUFHLFdBQVcsa0JBQWtCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxVQUFVLGtCQUFrQixzQkFBc0IsNEJBQTRCLGNBQWMsbUJBQW1CLGNBQWMsZUFBZSx3QkFBd0IsOEJBQThCLGdDQUFnQyxPQUFPLGdCQUFnQiw4QkFBOEIsT0FBTyxLQUFLLDJCQUEyQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLDJGQUEyRixLQUFLLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDhCQUE4QixLQUFLLGNBQWMsOEJBQThCLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQiw0QkFBNEIsT0FBTywwQkFBMEIsc0JBQXNCLHVDQUF1QyxPQUFPLGNBQWMscUJBQXFCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLGdDQUFnQyxpQkFBaUIsaUNBQWlDLDBCQUEwQixTQUFTLGtCQUFrQixpQ0FBaUMsU0FBUyxPQUFPLGVBQWUscUJBQXFCLGtCQUFrQix1QkFBdUIsc0JBQXNCLFNBQVMsT0FBTyw4QkFBOEIscUJBQXFCLDJCQUEyQiwyQkFBMkIsMEJBQTBCLFdBQVcsNEJBQTRCLFNBQVMsV0FBVyw0QkFBNEIsK0JBQStCLFNBQVMsT0FBTyxtQ0FBbUMsd0JBQXdCLE9BQU8sd0JBQXdCLHNCQUFzQix1Q0FBdUMsV0FBVyx1QkFBdUIsNEJBQTRCLDBCQUEwQixrQ0FBa0MsOEJBQThCLFNBQVMscUJBQXFCLDBCQUEwQixnQ0FBZ0MsU0FBUyxrQkFBa0IsbUNBQW1DLGtDQUFrQyxtQkFBbUIsNEJBQTRCLFdBQVcsU0FBUyxPQUFPLGlCQUFpQixnQkFBZ0Isc0JBQXNCLCtCQUErQix1QkFBdUIsT0FBTyxvQkFBb0IsMkJBQTJCLDRCQUE0QixvQkFBb0IsV0FBVywwQkFBMEIsU0FBUyxPQUFPLGdCQUFnQixzQkFBc0IscUJBQXFCLHFCQUFxQix5QkFBeUIsNEJBQTRCLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLCtCQUErQixTQUFTLHVCQUF1QixzQkFBc0IsNkJBQTZCLFNBQVMsMEJBQTBCLDRCQUE0Qix3QkFBd0IsYUFBYSw0QkFBNEIsV0FBVyxvQkFBb0IsdUJBQXVCLFdBQVcsbUJBQW1CLDhCQUE4QixXQUFXLHFCQUFxQiw4QkFBOEIsV0FBVyxTQUFTLGlCQUFpQiw0QkFBNEIsc0JBQXNCLHlCQUF5QixhQUFhLFdBQVcsU0FBUyxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLDJCQUEyQixPQUFPLGVBQWUscUJBQXFCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLG1CQUFtQiw0QkFBNEIsV0FBVyxvQkFBb0IsbUNBQW1DLFdBQVcsU0FBUyxPQUFPLEtBQUssZ0JBQWdCLG1CQUFtQix5QkFBeUIsb0RBQW9ELHFCQUFxQixPQUFPLGtCQUFrQixzQkFBc0IsK0JBQStCLG9CQUFvQix3QkFBd0IseUNBQXlDLDBCQUEwQiw0QkFBNEIsK0JBQStCLDRCQUE0QiwyQkFBMkIsV0FBVyxTQUFTLHFCQUFxQiw2QkFBNkIsd0JBQXdCLGtDQUFrQywyQkFBMkIsMEJBQTBCLDRCQUE0QixTQUFTLGdCQUFnQiw2QkFBNkIsdUJBQXVCLHVCQUF1QixTQUFTLGVBQWUsNEJBQTRCLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLHVCQUF1Qiw4QkFBOEIsdUNBQXVDLDBHQUEwRyxrQ0FBa0MsdUJBQXVCLDBCQUEwQixXQUFXLHNCQUFzQiwyQkFBMkIseUJBQXlCLG9DQUFvQyxzQkFBc0Isb0NBQW9DLGFBQWEsV0FBVyxpREFBaUQseUJBQXlCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLFdBQVcsdUJBQXVCLDJCQUEyQix5QkFBeUIsdUJBQXVCLCtCQUErQix5QkFBeUIsOEJBQThCLDRCQUE0Qiw2QkFBNkIsOEJBQThCLGlDQUFpQyw0QkFBNEIsNkJBQTZCLGdDQUFnQyxvQ0FBb0MsV0FBVyxzQ0FBc0MsOEJBQThCLFdBQVcsNEJBQTRCLDhCQUE4QixXQUFXLG1CQUFtQiwyQ0FBMkMsc0JBQXNCLCtDQUErQyx3Q0FBd0MsMkJBQTJCLGVBQWUsYUFBYSxXQUFXLG9CQUFvQix1QkFBdUIsMEJBQTBCLGdDQUFnQyxvQ0FBb0MscUJBQXFCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLGtDQUFrQyxhQUFhLGVBQWUsc0NBQXNDLGFBQWEsbUJBQW1CLHlCQUF5QiwwQkFBMEIsNEJBQTRCLHNDQUFzQyxhQUFhLGtCQUFrQiw0QkFBNEIsYUFBYSx5QkFBeUIseUJBQXlCLGFBQWEseUJBQXlCLGlDQUFpQyxhQUFhLFdBQVcsU0FBUyxPQUFPLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QixzQkFBc0Isd0JBQXdCLGlDQUFpQyx3QkFBd0IsNkJBQTZCLFdBQVcsaUJBQWlCLHlCQUF5QixXQUFXLGlCQUFpQix5QkFBeUIsMEJBQTBCLFdBQVcsMkJBQTJCLDBCQUEwQiwyQ0FBMkMsZ0NBQWdDLHNCQUFzQixXQUFXLG1CQUFtQix1QkFBdUIsV0FBVyxnQ0FBZ0Msd0JBQXdCLGtDQUFrQyw4QkFBOEIsa0RBQWtELDhCQUE4QixzQ0FBc0MscUNBQXFDLGFBQWEsd0RBQXdELDJCQUEyQixxQ0FBcUMsYUFBYSxXQUFXLHNCQUFzQiw0QkFBNEIsNkJBQTZCLCtCQUErQix3QkFBd0IsMEJBQTBCLG9DQUFvQyxvQ0FBb0MsNEJBQTRCLHFCQUFxQixvQ0FBb0MsYUFBYSxzQkFBc0Isa0RBQWtELGFBQWEsV0FBVyx1QkFBdUIsNEJBQTRCLFdBQVcsb0JBQW9CLG9DQUFvQyxXQUFXLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLFdBQVcscUJBQXFCLG9DQUFvQyx5QkFBeUIsNEJBQTRCLDRCQUE0QixXQUFXLHlCQUF5Qix5QkFBeUIseUJBQXlCLGdDQUFnQyx5QkFBeUIsOEJBQThCLDRCQUE0Qiw0QkFBNEIsbUNBQW1DLGtGQUFrRiw2REFBNkQsb0NBQW9DLDhCQUE4QixxQkFBcUIscUNBQXFDLGFBQWEsc0JBQXNCLHFDQUFxQyxhQUFhLFdBQVcsU0FBUyxPQUFPLGtCQUFrQixzQkFBc0Isd0JBQXdCLHdCQUF3QixpQ0FBaUMsc0JBQXNCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsOEJBQThCLGlCQUFpQixnQ0FBZ0Msa0NBQWtDLGVBQWUsaUJBQWlCLGdDQUFnQyxlQUFlLGFBQWEsV0FBVyxnQ0FBZ0MsMEJBQTBCLDJDQUEyQyw2QkFBNkIsb0NBQW9DLHNCQUFzQiw4QkFBOEIsOEJBQThCLGFBQWEsV0FBVyx5QkFBeUIsb0NBQW9DLFdBQVcsY0FBYyx3QkFBd0IsaUNBQWlDLDJCQUEyQiwrQkFBK0IsV0FBVyx1QkFBdUIsNEJBQTRCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLDZCQUE2QixvQ0FBb0MsV0FBVyxzQkFBc0IsK0JBQStCLDJCQUEyQiw0QkFBNEIsa0NBQWtDLHlCQUF5Qiw2QkFBNkIsNkJBQTZCLHlDQUF5QyxpQ0FBaUMsYUFBYSxXQUFXLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDhCQUE4QiwrQkFBK0IsNkJBQTZCLDZCQUE2QixXQUFXLG9CQUFvQiwyQkFBMkIsV0FBVywyQkFBMkIsNkJBQTZCLG9DQUFvQywwQkFBMEIsMkNBQTJDLFdBQVcsbUJBQW1CLDBCQUEwQixnQ0FBZ0Msd0JBQXdCLDhCQUE4QiwrQkFBK0IsYUFBYSxXQUFXLHNCQUFzQiw2QkFBNkIsdUJBQXVCLHNDQUFzQywyQkFBMkIsOEJBQThCLDhCQUE4QixhQUFhLFdBQVcsU0FBUyxPQUFPLGdCQUFnQix5QkFBeUIscUJBQXFCLHFCQUFxQiw0QkFBNEIscUJBQXFCLDBCQUEwQix3QkFBd0Isd0JBQXdCLCtCQUErQiw4RUFBOEUsZ0NBQWdDLHlEQUF5RCwwQkFBMEIsaUJBQWlCLGlDQUFpQyxTQUFTLGtCQUFrQixpQ0FBaUMsU0FBUyxPQUFPLEtBQUssR0FBRyxxQkFBcUIsK0NBQStDLEdBQUcsb0JBQW9CLHVDQUF1QyxHQUFHLHdCQUF3QixRQUFRLCtCQUErQixLQUFLLFVBQVUsa0NBQWtDLEtBQUssR0FBRyxrQkFBa0IsdUNBQXVDLEdBQUcsbUJBQW1CLCtDQUErQyxHQUFHLHdCQUF3QixRQUFRLG1DQUFtQyxLQUFLLFVBQVUsK0JBQStCLEtBQUssR0FBRywyQkFBMkIsUUFBUSxrQ0FBa0MsS0FBSyxVQUFVLCtCQUErQixLQUFLLEdBQUcsNEJBQTRCLFFBQVEsaUNBQWlDLEtBQUssVUFBVSwrQkFBK0IsS0FBSyxHQUFHLHlCQUF5QixRQUFRLDZCQUE2QixpQkFBaUIsS0FBSyxVQUFVLDBCQUEwQixpQkFBaUIsS0FBSyxHQUFHLDBDQUEwQyxnQkFBZ0Isb0JBQW9CLGdDQUFnQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixzQkFBc0Isb0JBQW9CLG9CQUFvQixxQkFBcUIsMkJBQTJCLHdCQUF3QixtQkFBbUIsb0NBQW9DLDJCQUEyQixtQkFBbUIsT0FBTyxpQkFBaUIscUJBQXFCLDJCQUEyQixlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsc0JBQXNCLHNCQUFzQixpQ0FBaUMscUNBQXFDLDZCQUE2QixvRUFBb0UsMkJBQTJCLG1CQUFtQixXQUFXLDBCQUEwQixzQkFBc0IsV0FBVyxTQUFTLE9BQU8sK0NBQStDLG9CQUFvQiwyQkFBMkIscUNBQXFDLHFCQUFxQixXQUFXLDBCQUEwQixzQ0FBc0Msd0JBQXdCLFdBQVcsU0FBUyxPQUFPLEtBQUssY0FBYyx3QkFBd0IsS0FBSyxrQ0FBa0MsdUJBQXVCLHlDQUF5QyxLQUFLLFlBQVksb0JBQW9CLEtBQUssWUFBWSxzQkFBc0IsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUssNEZBQTRGLG1CQUFtQixzQkFBc0IsS0FBSyxxQkFBcUIsc0JBQXNCLEtBQUsseUNBQXlDLHNCQUFzQixLQUFLLGNBQWMsZ0JBQWdCLGtDQUFrQywwQkFBMEIsU0FBUywwQkFBMEIsNkJBQTZCLFNBQVMsa0JBQWtCLHlCQUF5Qiw0QkFBNEIseUJBQXlCLFdBQVcsU0FBUyxPQUFPLGdCQUFnQixvQkFBb0Isc0JBQXNCLDBCQUEwQiwrQkFBK0Isa0NBQWtDLGFBQWEsc0JBQXNCLCtCQUErQixhQUFhLG1CQUFtQiwyQkFBMkIsOEJBQThCLGFBQWEsNkJBQTZCLGtDQUFrQyxhQUFhLHlCQUF5Qiw4QkFBOEIsYUFBYSxXQUFXLHdCQUF3Qiw0QkFBNEIsaUNBQWlDLDhCQUE4QixnQ0FBZ0MsZ0NBQWdDLGVBQWUsOEJBQThCLGdDQUFnQyxlQUFlLGFBQWEsV0FBVyxTQUFTLG9CQUFvQixpQkFBaUIseUJBQXlCLDhCQUE4QixhQUFhLFdBQVcsdUJBQXVCLDRCQUE0QixXQUFXLFNBQVMsb0JBQW9CLHdCQUF3Qix5QkFBeUIsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsYUFBYSx3QkFBd0IsOEJBQThCLDJCQUEyQixhQUFhLFdBQVcsU0FBUyxPQUFPLCtCQUErQixxQkFBcUIsT0FBTyx1QkFBdUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsT0FBTyxnQkFBZ0Isc0JBQXNCLE9BQU8sS0FBSyxhQUFhLGlCQUFpQixnQkFBZ0IsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssR0FBRyxxQkFBcUI7QUFDcDJpRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMaUM7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsNERBQU07QUFDZjs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0Q7QUFDUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDJCQUEyQixnRUFBVTtBQUNyQyw0QkFBNEIsZ0VBQVU7QUFDdEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDa0Q7QUFDTzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCw0QkFBNEIsaUVBQVc7QUFDdkMsNkJBQTZCLGlFQUFXO0FBQ3hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2dEO0FBQ1M7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGlCQUFpQjtBQUN2RTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyxnRUFBVTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDOEM7QUFDVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUywrREFBUztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmlGO0FBQ3hCO0FBQ047QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZCx5QkFBeUIsbUVBQVM7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDeEUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUU7QUFDMUUsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLEVBQUUsU0FBUywrQkFBK0IsT0FBTyxFQUFFLFNBQVMsK0JBQStCO0FBQzlILDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUVBQWtCLGFBQWEscUVBQW9CO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLG1FQUFrQixhQUFhLHFFQUFvQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDelF3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0M7QUFDVztBQUNNO0FBQ1c7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsaUVBQWlFO0FBQ3BGLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkLHVCQUF1QiwrRUFBaUI7QUFDeEMscUJBQXFCLG1FQUFTLDIyQkFBMjJCOztBQUV6NEI7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqREEsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRTNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE2STtBQUM3STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSXVGO0FBQy9HLE9BQU8saUVBQWUsNkhBQU8sSUFBSSxvSUFBYyxHQUFHLG9JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ2lFO0FBQzNCO0FBQ007QUFDNEI7QUFDOUI7QUFDTTs7QUFFakM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0NB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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNtQjs7QUFFMUMsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3Byb2plY3RNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvc3RvcmFnZU1vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gIC0tYmctY29sb3I6ICNlNGYwZmE7XFxuICAtLXByaW1hcnk6ICNmZjdjN2M7XFxuICAtLWRrLXRleHQ6ICMyYjNjNWI7XFxuICAtLWRrLXN1YnRleHQ6ICM3YThhYTM7XFxuICAtLWNhcmQ6ICNlNmVlZjg7XFxuICAtLWNvbXBvbmVudC1zOiAjYzRjZGQxO1xcbiAgLS1jb21wb25lbnQ6ICNkM2RlZTM7XFxuICAtLWdyYWQtYmFzZTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0xOiByZ2IoMjUwLCAxNzcsIDEzNSk7XFxuICAtLWdyYWRpZW50LTI6IHJnYigyNDYsIDExNywgMTE3KTtcXG4gIC0tY2FsLWluZGljYXRvcjogaW52ZXJ0KDcyJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg1MTAzJSkgaHVlLXJvdGF0ZSgzMTRkZWcpXFxuICAgIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7IH1cXG5cXG5odG1sW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWJnLWNvbG9yOiAjMTIxMjE1O1xcbiAgLS1wcmltYXJ5OiAjOGQ4ZmQyO1xcbiAgLS1kay10ZXh0OiAjZGZlMGZiO1xcbiAgLS1kay1zdWJ0ZXh0OiAjODQ4NDlkO1xcbiAgLS1jYXJkOiAjMTgxODFjO1xcbiAgLS1jb21wb25lbnQtczogIzQ1NDI1NDtcXG4gIC0tY29tcG9uZW50OiAjMmYyZDM2O1xcbiAgLS1ncmFkLWJhc2U6IHJnYigxMjUsIDkwLCAyNDIpO1xcbiAgLS1ncmFkaWVudC0xOiByZ2IoMTQ1LCAxMTQsIDI0Nyk7XFxuICAtLWdyYWRpZW50LTI6IHJnYigxMDQsIDYxLCAyNDcpO1xcbiAgLS1jYWwtaW5kaWNhdG9yOiBpbnZlcnQoNTclKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDE4NCUpIGh1ZS1yb3RhdGUoMjAwZGVnKVxcbiAgICBicmlnaHRuZXNzKDg1JSkgY29udHJhc3QoOTMlKTsgfVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0xleGVuZCBEZWNhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogbW9iaWxlIHZpZXdwb3J0IGJ1ZyBmaXggKi9cXG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IH1cXG4gIGJvZHkgaDIsXFxuICBib2R5IGgzIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICBib2R5IGgyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICBib2R5IGgzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGhlaWdodDogMjVweDsgfVxcbiAgYm9keSBwIHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgYm9keSBwLFxcbiAgYm9keSBzcGFuLFxcbiAgYm9keSBpLFxcbiAgYm9keSBxIHtcXG4gICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpOyB9XFxuICBib2R5IGlucHV0LFxcbiAgYm9keSB0ZXh0YXJlYSxcXG4gIGJvZHkgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICBib2R5IGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzNXB4OyB9XFxuICAgIGJvZHkgaW5wdXQ6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIGJvZHkgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgYm9keSBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODsgfVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwdnc7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kay10ZXh0KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogMjg1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIGhlYWRlciBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgdmFyKC0tZ3JhZGllbnQtMSkgMCUsIHZhcigtLWdyYWRpZW50LTIpIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIGhlYWRlciBkaXYge1xcbiAgICB3aWR0aDogNTEwcHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc2lkZS1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDh2dzsgfVxcbiAgLmNhcmRzIC5vcHRpb25zOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIC5jYXJkcyAub3B0aW9uczphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IH1cXG4gIC5jYXJkcyAuc2lkZWJhcixcXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMTJweCAyOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAycHggNHB4IDBweDsgfVxcbiAgLmNhcmRzIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAuY2FyZHMgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcnMtdGl0bGUtZ3JwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnRoZW1lIHtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb21wb25lbnQtcyk7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAudGhlbWU6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAudGhlbWU6YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIge1xcbiAgICAgIGhlaWdodDogMzJweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyIC5mYS1zdGFyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Qge1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgaSxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyIHAsXFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHAge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcixcXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciBpIHtcXG4gICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb21wb25lbnQtcyk7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciAucGx1czpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciAucm90YXRlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciAucm90YXRlZDpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3RzIHtcXG4gICAgICBmbGV4OiAxO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBvdmVyZmxvdzogYXV0bzsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtZ3JwIHtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLmVkaXQtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdDpob3ZlciAucHJvamVjdC1idG4tZ3JwIC5vcHRpb25zIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyICNwcm9qZWN0LW5hbWUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5naXRodWIge1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiAuZmEtZ2l0aHViIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIC5mYS1naXRodWI6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIC5mYS1naXRodWI6YWN0aXZlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgd2lkdGg6IDUxMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIsXFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGl0bGUtZ3JwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50aXRsZS1ncnAgLmN1cnJlbnQtdGl0bGUge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBjb2xvcjogIzQ1NDI1NDsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC5uby10YXNrcyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgcGFkZGluZzogMnB4OyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHdpZHRoOiA5OS41JTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDRweCA0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5oaWRlLWNoZWNrIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyayB7XFxuICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmNoZWNrbWFyazphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmZhLWNpcmNsZSxcXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUtY2hlY2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLnRhc2stdGl0bGUge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wb25lbnQtcyk7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIgLmFjdGlvbnMgLmVkaXQsXFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIC5hY3Rpb25zIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgZ2FwOiA0cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgaSB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZWRpdCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmZhLXNvbGlkIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI3Rhc2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI25vdGUge1xcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1jYWwtaW5kaWNhdG9yKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIGlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogMS4xO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tY2FsLWluZGljYXRvcik7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3Rhcjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3RhcnJlZCB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJhY2stYnRuIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5vcGVuLXRpdGxlLWhlYWRlciAuZmEtc3RhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5ub3RlLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IGhyIHtcXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tbm90ZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBoZWlnaHQ6IDI3dmg7XFxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJvdC1ub3RlLWxpbmUge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC52aXNpYmxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDhweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMgLm9wZW4tZGF0ZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJ0bi1ncm91cCAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDVweCA1cHggMTVweCAwcHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcblxcbi5zbGlkZS10YXNrcy1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG4uc2xpZGUtdGFza3Mtb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKTsgfSB9XFxuXFxuLnNsaWRlLWZvcm0taW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgMC4xczsgfVxcblxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1SaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1WZXJ0aWNhbGwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhcHBlYXJGb3JtIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNpZGUtbWVudSAubWVudS1pY29uIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuc2lkZS1tZW51IC5tZW51LWdycCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgaGVpZ2h0OiAxM3B4OyB9XFxuICAgICAgLnNpZGUtbWVudSAubWVudS1ncnAgLm1lbnUtbGluZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb21wb25lbnQpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xLCAwLjgyLCAwLjc2LCAwLjk2NSk7IH1cXG4gICAgICAgIC5zaWRlLW1lbnUgLm1lbnUtZ3JwIC5tZW51LWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIHRvcDogMDsgfVxcbiAgICAgICAgLnNpZGUtbWVudSAubWVudS1ncnAgLm1lbnUtbGluZTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBib3R0b206IDA7IH1cXG4gICAgLnNpZGUtbWVudS5hY3RpdmUgLm1lbnUtbGluZTpmaXJzdC1vZi10eXBlLFxcbiAgICAuc2lkZS1tZW51IC5tZW51LWljb246Y2hlY2tlZCArIGRpdiAubWVudS1saW5lOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0b3A6IDVweDsgfVxcbiAgICAuc2lkZS1tZW51LmFjdGl2ZSAubWVudS1saW5lOmxhc3Qtb2YtdHlwZSxcXG4gICAgLnNpZGUtbWVudSAubWVudS1pY29uOmNoZWNrZWQgKyBkaXYgLm1lbnUtbGluZTpsYXN0LW9mLXR5cGUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgYm90dG9tOiA1cHg7IH1cXG4gIC5ibHVycmVkIHtcXG4gICAgZmlsdGVyOiBibHVyKDRweCk7IH1cXG4gIGh0bWwsXFxuICBib2R5LFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTEwcHg7IH1cXG4gIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDsgfVxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgZm9udC1zaXplOiAxMXB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrLFxcbiAgc2VsZWN0I3Byb2plY3RzLFxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7IH1cXG4gIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgLmZvcm0taGVhZGVyLFxcbiAgLmZvcm0tdGl0bGUtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcixcXG4gIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB3aWR0aDogMTQwcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZvcm0taGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI25vdGUge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1yZWd1bGFyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCBwIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMXB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAudGFzay10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLm5vLXRhc2tzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tdGl0bGUge1xcbiAgICB3aWR0aDogMjE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tbm90ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAzNXZoOyB9XFxuICAuY2FyZHMgLnNpZGViYXIsXFxuICAuY2FyZHMgLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDcwdmg7IH1cXG4gIC5jYXJkcyAubW9iaWxlLXN0cmV0Y2gge1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDYwdmg7IH1cXG4gIC5jYXJkcyAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5oZWFkZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7IH1cXG4gIC5maWx0ZXJzSGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFXO0VBQ1gsa0JBQVU7RUFDVixrQkFBVTtFQUNWLHFCQUFhO0VBQ2IsZUFBTztFQUNQLHNCQUFjO0VBQ2Qsb0JBQVk7RUFDWiwrQkFBWTtFQUNaLGdDQUFhO0VBQ2IsZ0NBQWE7RUFDYjttQ0FBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBVztFQUNYLGtCQUFVO0VBQ1Ysa0JBQVU7RUFDVixxQkFBYTtFQUNiLGVBQU87RUFDUCxzQkFBYztFQUNkLG9CQUFZO0VBQ1osOEJBQVk7RUFDWixnQ0FBYTtFQUNiLCtCQUFhO0VBQ2I7aUNBQWdCLEVBQUE7O0FBaUJsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxpQ0F4QndCO0VBeUJ4Qix5QkFkd0I7RUFnQnhCLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLGtDQUFrQyxFQUFBO0VBTnBDOztJQVNJLHFCQS9Cb0IsRUFBQTtFQXNCeEI7SUFZSSxlQUFlLEVBQUE7RUFabkI7SUFlSSxlQUFlO0lBQ2Ysd0JBcEMwQjtJQXFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFuQmhCO0lBc0JJLGFBQWEsRUFBQTtFQXRCakI7Ozs7SUE0Qkksd0JBaEQwQixFQUFBO0VBb0I5Qjs7O0lBaUNJ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IjpbXCJodG1sW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbiAgLS1iZy1jb2xvcjogI2U0ZjBmYTtcXG4gIC0tcHJpbWFyeTogI2ZmN2M3YztcXG4gIC0tZGstdGV4dDogIzJiM2M1YjtcXG4gIC0tZGstc3VidGV4dDogIzdhOGFhMztcXG4gIC0tY2FyZDogI2U2ZWVmODtcXG4gIC0tY29tcG9uZW50LXM6ICNjNGNkZDE7XFxuICAtLWNvbXBvbmVudDogI2QzZGVlMztcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMjUwLCAxNzcsIDEzNSk7XFxuICAtLWdyYWRpZW50LTE6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiKDI0NiwgMTE3LCAxMTcpO1xcbiAgLS1jYWwtaW5kaWNhdG9yOiBpbnZlcnQoNzIlKSBzZXBpYSg0MCUpIHNhdHVyYXRlKDUxMDMlKSBodWUtcm90YXRlKDMxNGRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuaHRtbFtkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1iZy1jb2xvcjogIzEyMTIxNTtcXG4gIC0tcHJpbWFyeTogIzhkOGZkMjtcXG4gIC0tZGstdGV4dDogI2RmZTBmYjtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzE4MTgxYztcXG4gIC0tY29tcG9uZW50LXM6ICM0NTQyNTQ7XFxuICAtLWNvbXBvbmVudDogIzJmMmQzNjtcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMTI1LCA5MCwgMjQyKTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDE0NSwgMTE0LCAyNDcpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMTA0LCA2MSwgMjQ3KTtcXG4gIC0tY2FsLWluZGljYXRvcjogaW52ZXJ0KDU3JSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSgxODQlKSBodWUtcm90YXRlKDIwMGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NSUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbiRiZy1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiRwcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcXG4kZGstdGV4dDogdmFyKC0tZGstdGV4dCk7XFxuJGRrLXN1YnRleHQ6IHZhcigtLWRrLXN1YnRleHQpO1xcbiRjYXJkOiB2YXIoLS1jYXJkKTtcXG4kY29tcG9uZW50LXM6IHZhcigtLWNvbXBvbmVudC1zKTtcXG4kY29tcG9uZW50OiB2YXIoLS1jb21wb25lbnQpO1xcbiRncmFkLWJhc2U6IHZhcigtLWdyYWQtYmFzZSk7XFxuJGdyYWRpZW50LTE6IHZhcigtLWdyYWRpZW50LTEpO1xcbiRncmFkaWVudC0yOiB2YXIoLS1ncmFkaWVudC0yKTtcXG4kY2FsLWluZGljYXRvcjogdmFyKC0tY2FsLWluZGljYXRvcik7XFxuJHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAvLyBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAvKiBtb2JpbGUgdmlld3BvcnQgYnVnIGZpeCAqL1xcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICB9XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG4gIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgcCxcXG4gIHNwYW4sXFxuICBpLFxcbiAgcSB7XFxuICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gIH1cXG4gIGlucHV0LFxcbiAgdGV4dGFyZWEsXFxuICBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBvbmVudDtcXG4gICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG4gIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCxcXG4gIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMSwgJ3dnaHQnIDMwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4O1xcbiAgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwdnc7XFxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgaDEge1xcbiAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDI4NXB4O1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kOiAkZ3JhZC1iYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICB9XFxuICBkaXYge1xcbiAgICB3aWR0aDogNTEwcHg7XFxuICB9XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDh2dztcXG4gIC5vcHRpb25zIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICB9XFxuICB9XFxuICAuc2lkZWJhcixcXG4gIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4O1xcbiAgfVxcbiAgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAuZmlsdGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgfVxcbiAgICAuZmlsdGVycy10aXRsZS1ncnAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuICAgIC50aGVtZSB7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjb2xvcjogJGNvbXBvbmVudC1zO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICB9XFxuICAgICAgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgaSB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICB9XFxuICAgICAgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgIH1cXG4gICAgICAucm90YXRlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcbiAgICAuZ2l0aHViIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgfVxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNTEwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLnQtd3JhcHBlcixcXG4gICAgLmYtd3JhcHBlcixcXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC50LXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAudGl0bGUtZ3JwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAuY3VycmVudC10aXRsZSB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGNvbG9yOiAjNDU0MjU0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubm8tdGFza3Mge1xcbiAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIH1cXG4gICAgICAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgIH1cXG4gICAgICAudGFzayB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgd2lkdGg6IDk5LjUlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDRweCAwcHgsXFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mYS1jaXJjbGUsXFxuICAgICAgICAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAudGFzay10aXRsZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50LXM7XFxuICAgICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgICAuZWRpdCxcXG4gICAgICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYWN0aW9ucyB7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgICBnYXA6IDRweDtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaSB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmVkaXQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5mYS1zb2xpZCB7XFxuICAgICAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5mLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgLnRhc2stZm9ybSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjdGFzayB7XFxuICAgICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNub3RlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxNXZoO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzIHtcXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAmOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgICBmaWx0ZXI6ICRjYWwtaW5kaWNhdG9yO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgICAgICAgICAgc2NhbGU6ICgxLjEpO1xcbiAgICAgICAgICAgIGZpbHRlcjogJGNhbC1pbmRpY2F0b3I7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuc3RhcnJlZCB7XFxuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuICAgICAgICAuYmFjay1idG4ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JhZC1iYXNlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDVweCAxNXB4IDBweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICAgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG5cXG4gICAgICAgICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgICAgICAgICBpIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5vcGVuLXRpdGxlLWhlYWRlciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAubm90ZS13cmFwcGVyIHtcXG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICBociB7XFxuICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcXG5cXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICB9XFxuICAgICAgICAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG4gICAgICAgICNvcGVuLW5vdGUge1xcbiAgICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgICAgICAgaGVpZ2h0OiAyN3ZoO1xcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJvdC1ub3RlLWxpbmUge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC52aXNpYmxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDhweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIC5vcGVuLWRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgYmFja2dyb3VuZDogJGdyYWQtYmFzZTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSA1cHggNXB4IDE1cHggMHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIC5tZW51LWljb24ge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIC5tZW51LWdycCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgaGVpZ2h0OiAxM3B4O1xcbiAgICAgIC5tZW51LWxpbmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbXBvbmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMSwgMC44MiwgMC43NiwgMC45NjUpO1xcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYuYWN0aXZlLFxcbiAgICAubWVudS1pY29uOmNoZWNrZWQgKyBkaXYge1xcbiAgICAgIC5tZW51LWxpbmUge1xcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAuYmx1cnJlZCB7XFxuICAgIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgfVxcbiAgaHRtbCxcXG4gIGJvZHksXFxuICAuY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gIH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrLFxcbiAgc2VsZWN0I3Byb2plY3RzLFxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAuZm9ybS1oZWFkZXIsXFxuICAuZm9ybS10aXRsZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY2FyZHMge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgLmZpbHRlcixcXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAuZi13cmFwcGVyIHtcXG4gICAgICAgIC50YXNrLWZvcm0ge1xcbiAgICAgICAgICAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAjbm90ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgICAgICAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5wcm9qZWN0LWdycCBpIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLnQtd3JhcHBlciB7XFxuICAgICAgICAudGFzayB7XFxuICAgICAgICAgIC50YXNrLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5uby10YXNrcyB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLm8td3JhcHBlciB7XFxuICAgICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgICAjb3Blbi10aXRsZSB7XFxuICAgICAgICAgICAgd2lkdGg6IDIxNXB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgI29wZW4tbm90ZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzV2aDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuc2lkZWJhcixcXG4gICAgLmNvbnRlbnQge1xcbiAgICAgIGhlaWdodDogNzB2aDtcXG4gICAgfVxcbiAgICAubW9iaWxlLXN0cmV0Y2gge1xcbiAgICAgIHRyYW5zaXRpb246IDBzO1xcbiAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIH1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICAuZmlsdGVyc0hpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IHsgcGFyc2VJU08sIGlzVG9kYXksIGlzUGFzdCwgaXNUaGlzV2VlayB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBUYXNrIGZyb20gJy4vbW9kZWxzL3Rhc2tNb2RlbCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZGVscy9wcm9qZWN0TW9kZWwnO1xuaW1wb3J0IHN0b3JhZ2UsIHsgcHJvamVjdHMsIGFsbFRhc2tzTGlzdCB9IGZyb20gJy4vbW9kZWxzL3N0b3JhZ2VNb2RlbCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vdmlld3MvcHJvamVjdFZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBDb250cm9sbGVyKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbiAgY29uc3QgdGFza3NXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnQtd3JhcHBlcicpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mLXdyYXBwZXInKTtcbiAgY29uc3Qgb3BlbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby13cmFwcGVyJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWJ0bicpO1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXBsdXMnKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gIGNvbnN0IG5vdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJyk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICBjb25zdCBmb3JtU3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc3RhcicpO1xuICBjb25zdCBwcm9qZWN0R3JwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ3JwJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICBjb25zdCBzZWxlY3RBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gIGNvbnN0IHNlbGVjdFN0YXJyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnJlZCcpO1xuICBjb25zdCBzZWxlY3RUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICBjb25zdCBzZWxlY3RXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcbiAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzJyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKTtcblxuICBsZXQgY29tcG9uZW50Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tY29tcG9uZW50Jyk7XG4gIGxldCBwcmltYXJ5Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpO1xuICBjb25zdCB0ZXh0Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tZGstdGV4dCcpO1xuICBjb25zdCBzdWJ0ZXh0Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tZGstc3VidGV4dCcpO1xuXG4gIGxldCB0YXNrSW5kZXggPSAwO1xuICBsZXQgcHJvamVjdEluZGV4O1xuICBsZXQgY3VyclByb2plY3Q7XG4gIGxldCBsYXN0UHJvamVjdDtcbiAgbGV0IHNlbGVjdGVkID0gJyc7XG5cbiAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCAwLjFzJztcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc1JpZ2h0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBzaG93VGFza3NMZWZ0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IG9wZW5UYXNrID0gKCkgPT4ge1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBmdW5jdGlvbiBpc1Byb2plY3RWYWxpZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghcHJvamVjdC52YWx1ZSkge1xuICAgICAgcHJvamVjdC5zZXRDdXN0b21WYWxpZGl0eSgnUHJvamVjdCBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIHByb2plY3QucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gaXNUYXNrVmFsaWQoKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgaWYgKCF0YXNrLnZhbHVlKSB7XG4gICAgICB0YXNrLnNldEN1c3RvbVZhbGlkaXR5KCdUYXNrIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgdGFzay5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUJ0blRleHQoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10aXRsZS1oZWFkZXInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKGUsIHByb2plY3QpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcbiAgICB0YXNrSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBlLnRhcmdldDtcblxuICAgIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NPcGVuVmlldyk7XG4gICAgfVxuICAgIHRhc2suaXNDb21wbGV0ZSA9ICF0YXNrLmlzQ29tcGxldGU7XG4gICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrbWFya0NsYXNzZXMgPSBbJ2ZhLXJlZ3VsYXInLCAnZmEtc29saWQnLCAnZmEtY2lyY2xlJywgJ2ZhLWNpcmNsZS1jaGVjayddO1xuICAgIGNoZWNrbWFya0NsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRUYXNrLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBzZWxlY3RlZFRhc2suY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgIGNvbnN0IGVkaXQgPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgIGNvbnN0IHRyYXNoID0gc2VsZWN0ZWRUYXNrLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHN0YXIgPSBzZWxlY3RlZFRhc2suY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpO1xuXG4gICAgdGl0bGUuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgZWRpdC5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIHRyYXNoLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgc3Rhci5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIGlmICh0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gJycgJiYgdGl0bGUuc3R5bGUuY29sb3IgIT09ICcjZDJkOGY3YTYnKSB7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICB0aXRsZS5zdHlsZS5jb2xvciA9IHN1YnRleHRDb2xvcjtcbiAgICAgIGVkaXQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHRyYXNoLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICBzdGFyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSB0ZXh0Q29sb3I7XG4gICAgICBlZGl0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB0cmFzaC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgc3Rhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUZvcm1TdGFyKCkge1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJyZWQnKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJyk7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtc29saWQnKTtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVQbHVzQnRuKCkge1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncGx1cycpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlZCcpO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gICAgc2VsZWN0ZWQgPSAnJztcbiAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgcHJvamVjdEZvcm0uaGlkZGVuID0gIXByb2plY3RGb3JtLmhpZGRlbjtcblxuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVZlcnRpY2FsIDAuMnMnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0R3JwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RHcnAuY2hpbGRyZW5baV0uc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1WZXJ0aWNhbCAwLjJzJztcbiAgICAgIH1cbiAgICAgIHByb2plY3RHcnAuaW5zZXJ0QmVmb3JlKHByb2plY3RGb3JtLCBwcm9qZWN0R3JwLmZpcnN0Q2hpbGQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJzSGlkZScpO1xuICAgICAgc2VsZWN0ZWQgPSAnJztcbiAgICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUVkaXRQcm9qZWN0KGUpIHtcbiAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSAhcHJvamVjdEZvcm0uaGlkZGVuO1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcblxuICAgIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBidG4uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcblxuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgYXBwZWFyRm9ybSAwLjJzJztcbiAgICAgIHByb2plY3RJbmRleCA9IE51bWJlcihlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwcm9qZWN0R3JwLmNoaWxkcmVuLml0ZW0ocHJvamVjdEluZGV4KTtcblxuICAgICAgcHJvamVjdEdycC5pbnNlcnRCZWZvcmUocHJvamVjdEZvcm0sIHNlbGVjdGVkSW5kZXgpO1xuICAgICAgaW5wdXQudmFsdWUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICBzZWxlY3RlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgIHNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB9XG4gICAgdG9nZ2xlUGx1c0J0bigpO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZU92ZXJmbG93KCkge1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1ub3RlJyk7XG4gICAgY29uc3QgYm90TGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3Qtbm90ZS1saW5lJyk7XG4gICAgaWYgKG5vdGUuc2Nyb2xsSGVpZ2h0ID4gbm90ZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIGJvdExpbmUuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0gZWxzZSBib3RMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0U3RhcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXN0YXInKS5jbGFzc05hbWUgPSAnYWRkLXN0YXIgZmEtcmVndWxhciBmYS1zdGFyJztcbiAgfVxuICBmdW5jdGlvbiByZXNldFByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdycCcpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIGlmIChlZGl0QnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5yZXNldCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKTtcbiAgICBmaWx0ZXJzTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXJlZ3VsYXIgZmEtZm9sZGVyJztcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRNb2JpbGVBbmltYXRpb25zKCkge1xuICAgIGNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wZW5UYXNrKGUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tcHJvamVjdCcpO1xuICAgIGNvbnN0IGZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWZvbGRlcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tdGl0bGUnKTtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbm90ZScpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1kYXRlJyk7XG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXN0YXInKTtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgaXNTdGFycmVkID0gY3VyclByb2plY3QudGFza3NbaWRdLmdldElzU3RhcnJlZCgpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0udGl0bGU7XG5cbiAgICBpZiAoY3VyclByb2plY3QubmFtZSA9PT0gJ0FsbCcpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnQWxsJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIG9wZW4tZm9sZGVyJztcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICdpbmJveCc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnU3RhcnJlZCcpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnU3RhcnJlZCc7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXN0YXIgb3Blbi1mb2xkZXInO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnVG9kYXknKSB7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJztcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICd0b2RheSc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnV2VlaycpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJ2RhdGVfcmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBvcGVuLWZvbGRlcic7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gY3VyclByb2plY3QudGFza3NbaWRdLnByb2plY3Q7XG4gICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSAnZm9sZGVyJztcbiAgICB9XG5cbiAgICBpZiAoaXNTdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgIGlmIChjdXJyUHJvamVjdC50YXNrc1tpZF0ubm90ZSA9PT0gJycpIHtcbiAgICAgIG5vdGUudGV4dENvbnRlbnQgPSAnTm8gbm90ZSc7XG4gICAgICBub3RlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RlLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgIG5vdGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0ubm90ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwYXJzZUlTTyhjdXJyUHJvamVjdC50YXNrc1tpZF0uZGF0ZSk7XG4gICAgaWYgKGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5kYXRlID09PSAnJykge1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoaXNQYXN0KHNlbGVjdGVkRGF0ZSkgJiYgIWlzVG9kYXkoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9ICdQYXN0IER1ZSc7XG4gICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNFMzRBNEEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gc2VsZWN0ZWREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0luZGV4KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzW2ldLmluZGV4ID0gaTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIHVwZGF0ZVByb2plY3RzSW5kZXgoKTtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGxldCBmb3VuZFByb2plY3QgPSBmYWxzZTtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmb3VuZFByb2plY3QpIHJldHVybjtcbiAgICAgIGNvbnN0IGkgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgIGNvbnN0IHAgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICAgIGlmIChwLnRleHRDb250ZW50ID09PSBjdXJyUHJvamVjdC5uYW1lICYmIGluZGV4ID09PSBjdXJyUHJvamVjdC5pbmRleCkge1xuICAgICAgICBwLmNsb3Nlc3QoJy5wcm9qZWN0Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgICAgIGkuY2xvc2VzdCgnLmZvbGRlcicpLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtc29saWQgZmEtZm9sZGVyJztcbiAgICAgICAgZm91bmRQcm9qZWN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZEZpbHRlcigpIHtcbiAgICBjb25zdCBmaWx0ZXJzTGlzdCA9IFsnQWxsJywgJ1N0YXJyZWQnLCAnVG9kYXknLCAnV2VlayddO1xuICAgIGNvbnN0IGFyciA9IFtzZWxlY3RBbGwsIHNlbGVjdFN0YXJyZWQsIHNlbGVjdFRvZGF5LCBzZWxlY3RXZWVrXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcnNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmlsdGVyc0xpc3RbaV0gPT09IGN1cnJQcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgYXJyW2ldLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLW91dCc7XG4gICAgICAgIGFycltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQ29sb3JzKCkge1xuICAgIGNvbXBvbmVudENvbG9yID0gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb21wb25lbnQnKTtcbiAgICBwcmltYXJ5Q29sb3IgPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzT3BlblZpZXcoZSkge1xuICAgIGhpZGVUYXNrc0xlZnQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlblRhc2soKTtcbiAgICAgIHVwZGF0ZU9wZW5UYXNrKGUpO1xuICAgICAgdG9nZ2xlT3ZlcmZsb3coKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlckZvcm1WaWV3KCkge1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHJlc2V0U3RhcigpO1xuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLnZhbHVlID0gY3VyclByb2plY3QubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10aXRsZS1oZWFkZXInKS50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICBoaWRlVGFza3NSaWdodCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlckVkaXRWaWV3KGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICB0b2dnbGVBZGRQcm9qZWN0KCk7XG4gICAgfVxuICAgIHRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdLnRpdGxlO1xuICAgIG5vdGVJbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdLm5vdGU7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0uZGF0ZTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAuY2xvc2VzdCgnLnRhc2snKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgIGxhc3RQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBpZiAocHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF0uZ2V0SXNTdGFycmVkKCkpIHtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXJyZWQnKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXJlZ3VsYXInKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJyZWQnKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInKTtcbiAgICAgIGZvcm1TdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNvbGlkJyk7XG4gICAgfVxuXG4gICAgaGlkZVRhc2tzUmlnaHQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNob3dGb3JtKCk7XG4gICAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICB0b2dnbGVCdG5UZXh0KCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJUYXNrc1ZpZXcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfSk7XG4gICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcblxuICAgIGNvbnN0IGZvbGRlciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmZvbGRlcicpO1xuICAgIGZvbGRlci5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXNvbGlkIGZhLWZvbGRlcic7XG5cbiAgICBwcm9qZWN0SW5kZXggPSBOdW1iZXIocHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgY3VyclByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuXG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RDbGljayhlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdChlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0b2dnbGVTaWRlQmFyRm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jykuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2UtaW4gZm9ybVJpZ2h0IHJldmVyc2UgMC4ycyc7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5vcGFjaXR5ID0gJzAuNyc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZSk7XG4gICAgICByZXNldFByb2plY3RzKCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuXG4gICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwIHx8IGN1cnJQcm9qZWN0ID09PSBhbGxUYXNrc0xpc3QpIHtcbiAgICAgICAgdXBkYXRlQWxsVGFza3MoKTtcbiAgICAgICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgICAgIHJlc2V0RmlsdGVycygpO1xuICAgICAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgICAgfSBlbHNlIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgfSBlbHNlIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG5cbiAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFByb2plY3RIYW5kbGVycygpIHtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtcCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXAnKTtcblxuICAgIHByb2plY3RXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdENsaWNrKTtcbiAgICB9KTtcblxuICAgIGVkaXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdFByb2plY3RDbGljayk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuICAgIGFkZFByb2plY3RIYW5kbGVycygpO1xuICB9XG4gIGZ1bmN0aW9uIHN0b3JlUHJvamVjdCgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGlmICghaXNQcm9qZWN0VmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBzdG9yZVByb2plY3QoKTtcbiAgICBwcm9qZWN0cy51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICBjdXJyUHJvamVjdC5pbmRleCA9IHByb2plY3RzLmluZGV4T2YobmV3UHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdHNJbmRleCgpO1xuXG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRQcm9qZWN0cygpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gIH1cbiAgZnVuY3Rpb24gZWRpdFByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBpZiAoIW5hbWUudmFsdWUpIHtcbiAgICAgIG5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICBuYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lID0gbmFtZS52YWx1ZTtcbiAgICBjdXJyUHJvamVjdC5pbmRleCA9IHByb2plY3RJbmRleDtcbiAgICByZXNldEZvcm0oKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gICAgcHJvamVjdEluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHVwZGF0ZVByb2plY3RzSW5kZXgoKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2tIYW5kbGVycygpIHtcbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgY29uc3QgY2hlY2ttYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1jaXJjbGUsIC5mYS1jaXJjbGUtY2hlY2snKTtcbiAgICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2stYnRuJyk7XG5cbiAgICBiYWNrQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NWaWV3KTtcbiAgICB9KTtcbiAgICB0YXNrV3JhcHBlci5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoIXRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NPcGVuVmlldyk7XG4gICAgICB9XG4gICAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGVja21hcmtzLmZvckVhY2goKGNoZWNrbWFyaykgPT4ge1xuICAgICAgY2hlY2ttYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICByZW5kZXJFZGl0VmlldyhlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1pbiBmb3JtUmlnaHQgcmV2ZXJzZSAwLjJzJztcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlKGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgICBkZWxldGVUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QsIHNlbGVjdGVkVGFzaykge1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICBpZiAocHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyBwJykudGV4dENvbnRlbnQgPSAnTm8gdGFza3MgZm91bmQnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHAnKS5jbGFzc05hbWUgPSAnbm8tdGFza3MnO1xuICAgIH1cblxuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGNyZWF0ZVRhc2sodGFzaywgcHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZCh0YXNrV3JhcHBlcik7XG4gICAgICB0YXNrV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJywgdGFzay5wcm9qZWN0KTtcblxuICAgICAgaWYgKHRhc2suaXNTdGFycmVkKSB7XG4gICAgICAgIHRhc2tXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJykuY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLXJlZ3VsYXInLCAnZmEtc29saWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSAmJiB0YXNrICE9PSBzZWxlY3RlZFRhc2spIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0ID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBjb25zdCB0cmFzaCA9IHRhc2tXcmFwcGVyLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgICAgICBjb25zdCBzdGFyID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpO1xuXG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcblxuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRUYXNrSGFuZGxlcnMoKTtcbiAgfVxuICBmdW5jdGlvbiBzdG9yZVRhc2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBmb3JtU3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJyZWQnKTtcblxuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRUYXNrKGUsIHByb2plY3QpIHtcbiAgICBpZiAoIWlzVGFza1ZhbGlkKCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBuZXdUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBmb3JtSW5wdXQudmFsdWUpO1xuXG4gICAgaWYgKGZvcm1JbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnB1c2gobmV3VGFzayk7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5nZXRUYXNrcygpLnB1c2gobmV3VGFzayk7XG4gICAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHN0b3JhZ2UoKS5zYXZlRGF0YSgpO1xuICB9XG4gIGZ1bmN0aW9uIGVkaXRUYXNrKGUsIHByb2plY3QpIHtcbiAgICBpZiAoIWlzVGFza1ZhbGlkKCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWRpdGVkVGFzayA9IHN0b3JlVGFzaygpO1xuICAgIGNvbnN0IHRlbXAgPSBwcm9qZWN0cy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gZm9ybUlucHV0LnZhbHVlKTtcblxuICAgIGlmIChcbiAgICAgIGN1cnJQcm9qZWN0Lm5hbWUgPT09ICdTdGFycmVkJyB8fFxuICAgICAgY3VyclByb2plY3QubmFtZSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgY3VyclByb2plY3QubmFtZSA9PT0gJ1dlZWsnXG4gICAgKSB7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBmb3JtSW5wdXQudmFsdWUgIT09IHByb2plY3QubmFtZSAmJlxuICAgICAgZm9ybUlucHV0LnZhbHVlICE9PSAnJyAmJlxuICAgICAgY3VyclByb2plY3QgPT09IGFsbFRhc2tzTGlzdFxuICAgICkge1xuICAgICAgdGVtcC5nZXRUYXNrcygpLnB1c2goZWRpdGVkVGFzayk7XG4gICAgICBhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gdGVtcDtcblxuICAgICAgaWYgKGxhc3RQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGFzdFByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgbGFzdFByb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtSW5wdXQudmFsdWUgIT09IHByb2plY3QubmFtZSAmJiBmb3JtSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICB0ZW1wLmdldFRhc2tzKCkucHVzaChlZGl0ZWRUYXNrKTtcbiAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY3VyclByb2plY3QgPSB0ZW1wO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG4gICAgfVxuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG5cbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RzSW5kZXgoKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF07XG5cbiAgICBsZXQgcHJvamVjdFRvRGVsZXRlRnJvbTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdHNbaV0uZ2V0VGFza3MoKS5pbmNsdWRlcyh0YXNrVG9EZWxldGUpKSB7XG4gICAgICAgIHByb2plY3RUb0RlbGV0ZUZyb20gPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZUZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbS5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZUZyb20gIT09IGN1cnJQcm9qZWN0KSB7XG4gICAgICBhbGxUYXNrc0xpc3QucmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpO1xuICAgICAgY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0LCB0YXNrVG9EZWxldGUpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQWxsVGFza3MoKSB7XG4gICAgaWYgKGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCB8fCBhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKSAhPT0gY3VyclByb2plY3QpIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC50YXNrcyk7XG4gICAgICBjb25zdCB1bmFzc2lnbmVkVGFza3MgPSBhbGxUYXNrc0xpc3RcbiAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSAnJyk7XG4gICAgICBjb25zdCBjb21iaW5lZFRhc2tzID0gYWxsVGFza3MuY29uY2F0KHVuYXNzaWduZWRUYXNrcyk7XG4gICAgICBhbGxUYXNrc0xpc3QudGFza3MubGVuZ3RoID0gMDtcbiAgICAgIGFsbFRhc2tzTGlzdC50YXNrcy5wdXNoKC4uLmNvbWJpbmVkVGFza3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU3RhcnJlZFRhc2tzKCkge1xuICAgIGNvbnN0IHN0YXJyZWRUYXNrcyA9IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gdGFzay5pc1N0YXJyZWQpO1xuICAgIGN1cnJQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1N0YXJyZWQnLCBzdGFycmVkVGFza3MpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZGF5VGFza3MoKSB7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IGFsbFRhc2tzTGlzdFxuICAgICAgLmdldFRhc2tzKClcbiAgICAgIC5maWx0ZXIoKHRhc2spID0+IGlzVG9kYXkocGFyc2VJU08odGFzay5kYXRlKSkpO1xuXG4gICAgY3VyclByb2plY3QgPSBuZXcgUHJvamVjdCgnVG9kYXknLCB0b2RheVRhc2tzKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVXZWVrVGFza3MoKSB7XG4gICAgY29uc3Qgd2Vla1Rhc2tzID0gYWxsVGFza3NMaXN0XG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZpbHRlcigodGFzaykgPT4gaXNUaGlzV2VlayhwYXJzZUlTTyh0YXNrLmRhdGUpKSk7XG5cbiAgICBjdXJyUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdXZWVrJywgd2Vla1Rhc2tzKTtcbiAgfVxuICBmdW5jdGlvbiBzaG93QWxsKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICB1cGRhdGVBbGxUYXNrcygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuXG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICBjbG9zZVNpZGVCYXJNb2RhbCgpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dTdGFycmVkKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICB1cGRhdGVBbGxUYXNrcygpO1xuICAgIHVwZGF0ZVN0YXJyZWRUYXNrcygpO1xuICAgIGNvbnN0IHN0YXJyZWRQcm9qZWN0ID0gY3VyclByb2plY3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKHN0YXJyZWRQcm9qZWN0KTtcbiAgICBjdXJyUHJvamVjdCA9IHN0YXJyZWRQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuICBmdW5jdGlvbiBzaG93VG9kYXkoZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIHVwZGF0ZUFsbFRhc2tzKCk7XG4gICAgdXBkYXRlVG9kYXlUYXNrcygpO1xuICAgIGNvbnN0IHRvZGF5UHJvamVjdCA9IGN1cnJQcm9qZWN0O1xuXG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyh0b2RheVByb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gdG9kYXlQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuICBmdW5jdGlvbiBzaG93V2VlayhlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgdXBkYXRlQWxsVGFza3MoKTtcbiAgICB1cGRhdGVXZWVrVGFza3MoKTtcbiAgICBjb25zdCB3ZWVrUHJvamVjdCA9IGN1cnJQcm9qZWN0O1xuXG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyh3ZWVrUHJvamVjdCk7XG4gICAgY3VyclByb2plY3QgPSB3ZWVrUHJvamVjdDtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVGb2N1cygpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLW91dCc7XG5cbiAgICBpZiAodGl0bGVJbnB1dC5tYXRjaGVzKCc6Zm9jdXMnKSB8fCBub3RlSW5wdXQubWF0Y2hlcygnOmZvY3VzJykpIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXN0cmV0Y2gnKTtcbiAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyJyk7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vYmlsZS1zdHJldGNoJyk7XG4gICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLW91dCc7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXJGb2N1cygpIHtcbiAgICBpZiAocHJvamVjdElucHV0Lm1hdGNoZXMoJzpmb2N1cycpKSB7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnNIaWRlJyk7XG4gICAgICByZXNldEZpbHRlcnMoKTtcbiAgICB9IGVsc2UgaWYgKCFhZGRQcm9qZWN0QnRuLm1hdGNoZXMoJzphY3RpdmUnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gICAgICBwcm9qZWN0Rm9ybS5oaWRkZW4gPSB0cnVlO1xuICAgICAgdG9nZ2xlUGx1c0J0bigpO1xuICAgICAgcmVzZXRQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcblxuICAgICAgY29uc3QgZmlsdGVyc0FyciA9IFsnQWxsJywgJ1N0YXJyZWQnLCAnVG9kYXknLCAnV2VlayddO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSBmaWx0ZXJzQXJyW2ldKSB7XG4gICAgICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmlsdGVycy5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJzSGlkZScpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVTaWRlQmFyTW9kYWwoKSB7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgIGlmIChtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIHNpZGViYXIuc3R5bGUuYW5pbWF0aW9uID0gJzAuMnMgZm9ybVJpZ2h0IGVhc2Utb3V0JztcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnYmx1cnJlZCcpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc2V0TW9iaWxlQW5pbWF0aW9ucygpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnMC4ycyByZXZlcnNlIGZvcm1SaWdodCBlYXNlLW91dCc7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXJyZWQnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVzZXRNb2JpbGVBbmltYXRpb25zKCk7XG4gICAgICAgIG1vYmlsZU1lbnUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2xvc2VTaWRlQmFyTW9kYWwoKSB7XG4gICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgdG9nZ2xlU2lkZUJhck1vZGFsKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzTW9iaWxlVmlldygpIHtcbiAgICBpZiAod2luZG93LmNsaWVudFdpZHRoID49IDQ4MCkge1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5jbGllbnRXaWR0aCA8IDQ4MCkge1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXJyZWQnKTtcbiAgICAgIG1vYmlsZU1lbnUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5ld1RoZW1lKTtcblxuICAgIGNvbnN0IHRlbXAgPSB0aGVtZUljb24udGV4dENvbnRlbnQ7XG4gICAgdGhlbWVJY29uLnRleHRDb250ZW50ID0gdGVtcCA9PT0gJ3RvZ2dsZV9vbicgPyAndG9nZ2xlX29mZicgOiAndG9nZ2xlX29uJztcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1kYXRlJyk7XG4gICAgaWYgKGRhdGUudGV4dENvbnRlbnQgPT09ICdQYXN0IER1ZScpIHtcbiAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSAnI0UzNEE0QSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSBwcmltYXJ5Q29sb3I7XG4gICAgfVxuICAgIHVwZGF0ZUNvbG9ycygpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdEludHJvKCkge1xuICAgIGNvbnN0IGludHJvVGFzayA9IG5ldyBUYXNrKFxuICAgICAgJ0NsaWNrIG1lIHRvIGxlYXJuIG1vcmUhJyxcbiAgICAgICcgLSBFeHBhbmQgdGFza3MgdG8gdmlldyBhZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlbS4gXFxuXFxuIC0gV3JpdGUgbm90ZXMsIGFkZCBkYXRlcyBhbmQgc3RhciB0YXNrcyBmcm9tIHRoZSBmb3JtIHBhbmUuIFxcblxcbiAtIFRoYW5rIHlvdSBmb3IgY2hlY2tpbmcgb3V0IG15IHByb2plY3QhJyxcbiAgICAgICdEZWZhdWx0JyxcbiAgICAgICcnLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgY29uc3QgaW50cm9UYXNrVHdvID0gbmV3IFRhc2soXG4gICAgICAnU2lkZWJhciBJbmZvJyxcbiAgICAgICcgLSBGaWx0ZXIgY3JlYXRlZCB0YXNrcyBieSBBbGwsIFN0YXJyZWQsIFRvZGF5IG9yIFdlZWsuIFxcblxcbiAtIEFkZCAgcHJvamVjdHMgYnkgY2xpY2tpbmcgKCspIGFuZCBwcmVzc2luZyBFbnRlci4gXFxuXFxuIC0gSG92ZXIgb3ZlciBleGlzdGluZyBwcm9qZWN0cyB0byBlZGl0IG9yIGRlbGV0ZSB0aGVtLicsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGNvbnN0IGludHJvUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XG4gICAgaW50cm9Qcm9qZWN0LmluZGV4ID0gMDtcbiAgICBjdXJyUHJvamVjdCA9IGludHJvUHJvamVjdDtcbiAgICBwcm9qZWN0cy5wdXNoKGludHJvUHJvamVjdCk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2spO1xuICAgIGludHJvUHJvamVjdC5nZXRUYXNrcygpLnB1c2goaW50cm9UYXNrVHdvKTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kUHJvamVjdHMoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKSB7XG4gICAgICBpbml0SW50cm8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmFnZSgpLmdldERhdGEoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBbGxUYXNrcygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICB9XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpc01vYmlsZVZpZXcpO1xuICBwcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVTaWRlQmFyRm9jdXMpO1xuICBwcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZVNpZGVCYXJGb2N1cyk7XG4gIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvZ2dsZVNpZGVCYXJGb2N1cyk7XG4gIG1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlQmFyTW9kYWwpO1xuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlTW9iaWxlRm9jdXMpO1xuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVNb2JpbGVGb2N1cyk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b2dnbGVNb2JpbGVGb2N1cyk7XG4gIG5vdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgbm90ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVNb2JpbGVGb2N1cyk7XG4gIG5vdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgdGhlbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVGhlbWUpO1xuICBzZWxlY3RBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsKTtcbiAgc2VsZWN0U3RhcnJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTdGFycmVkKTtcbiAgc2VsZWN0VG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kYXkpO1xuICBzZWxlY3RXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1dlZWspO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWRkUHJvamVjdCk7XG4gIGZvcm1TdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRm9ybVN0YXIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyRm9ybVZpZXcpO1xuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFkZFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZWRpdFRhc2soZSwgY3VyclByb2plY3QpO1xuICB9KTtcbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaXNQcm9qZWN0VmFsaWQoKSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICAgIHByb2plY3RGb3JtLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFByb2plY3QoKTtcbiAgICAgICAgICB0b2dnbGVQbHVzQnRuKCk7XG4gICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICBmaW5kUHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHJlbW92ZVRhc2soc2VsZWN0ZWRUYXNrKSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSBzZWxlY3RlZFRhc2sudGl0bGVcbiAgICApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFza01vZGVsJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdE1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XG5leHBvcnQgY29uc3QgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlKCkge1xuICBsZXQgZGF0YSA9IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrczogcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUYXNrcygpKSxcbiAgICBhbGw6IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLFxuICB9O1xuXG4gIGZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcblxuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlZFRhc2tzID0gcHJvamVjdC50YXNrcy5tYXAoXG4gICAgICAgICh0YXNrKSA9PlxuICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICAgIHRhc2subm90ZSxcbiAgICAgICAgICAgIHRhc2sucHJvamVjdCxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaXNTdGFycmVkLFxuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHN0b3JlZFRhc2tzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZGF0YS5hbGwubWFwKFxuICAgICAgKHRhc2spID0+XG4gICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5ub3RlLFxuICAgICAgICAgIHRhc2sucHJvamVjdCxcbiAgICAgICAgICB0YXNrLmRhdGUsXG4gICAgICAgICAgdGFzay5pc1N0YXJyZWQsXG4gICAgICAgICAgdGFzay5pc0NvbXBsZXRlXG4gICAgICAgIClcbiAgICApO1xuICAgIGRhdGEucHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0cztcbiAgICBkYXRhLnRhc2tzID0gc3RvcmVkUHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICBkYXRhLmFsbCA9IGFsbFRhc2tzO1xuXG4gICAgcHJvamVjdHMubGVuZ3RoID0gMDtcbiAgICBwcm9qZWN0cy5wdXNoKC4uLnN0b3JlZFByb2plY3RzKTtcbiAgICBhbGxUYXNrc0xpc3QudGFza3MubGVuZ3RoID0gMDtcbiAgICBhbGxUYXNrc0xpc3QudGFza3MucHVzaCguLi5hbGxUYXNrcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldERhdGEsXG4gICAgc2F2ZURhdGEsXG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH0sXG4gICAgZ2V0IGFsbFRhc2tzTGlzdCgpIHtcbiAgICAgIHJldHVybiBhbGxUYXNrc0xpc3Q7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbm90ZSwgcHJvamVjdCwgZGF0ZSwgaXNTdGFycmVkID0gZmFsc2UsIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmlzU3RhcnJlZCA9IGlzU3RhcnJlZDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gIH1cblxuICBnZXRJc1N0YXJyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdGFycmVkO1xuICB9XG5cbiAgZ2V0SXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uL21vZGVscy9zdG9yYWdlTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgZGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGljb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRpdigpO1xuICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgdGV4dC5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lJztcbiAgdGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgY29uc3QgZm9sZGVyID0gaWNvbigpO1xuICBmb2xkZXIuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJywgJ2ZhLXJlZ3VsYXInLCAnZmEtZm9sZGVyJyk7XG4gIGNvbnN0IGdyb3VwID0gZGl2KCk7XG4gIGdyb3VwLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJ0bi1ncnAnO1xuICBjb25zdCBlZGl0ID0gaWNvbigpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdC1wJywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICBjb25zdCB0cmFzaCA9IGljb24oKTtcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdkZWxldGUtcCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICBjb25zdCBvcHRpb24gPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcGljayA9IG9wdGlvbigpO1xuICBwaWNrLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICBwaWNrLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFwcGVuZENoaWxkKHBpY2spO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmQoZm9sZGVyLCB0ZXh0LCBncm91cCk7XG4gIGdyb3VwLmFwcGVuZChlZGl0LCB0cmFzaCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIHByb2plY3QpIHtcbiAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3QuaW5kZXhPZih0YXNrKSk7XG4gIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xuICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1jaGVjaycpO1xuICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNpcmNsZS1jaGVjaycpO1xuICB9IGVsc2UgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtY2lyY2xlJyk7XG4gIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdlZGl0JywgJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICB0cmFzaC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2RlbGV0ZScsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgdHJhc2gudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgdHJhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXN0YXInKTtcblxuICB0YXNrV3JhcHBlci5hcHBlbmQoY2hlY2tXcmFwcGVyLCB0aXRsZSwgYWN0aW9ucyk7XG4gIGNoZWNrV3JhcHBlci5hcHBlbmQoaW5wdXQsIGNoZWNrbWFyayk7XG4gIGFjdGlvbnMuYXBwZW5kKGVkaXQsIHRyYXNoLCBzdGFyKTtcblxuICByZXR1cm4gdGFza1dyYXBwZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGFwcENvbnRyb2xsZXIgZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5cbmFwcENvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==