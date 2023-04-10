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
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='light'] {\n  --bg-color: #e4f0fa;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%); }\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-color: var(--bg-color);\n  transition: 0.2s ease-out;\n  height: 100vh; }\n  body h2,\n  body h3 {\n    color: var(--primary); }\n  body h2 {\n    font-size: 20px; }\n  body h3 {\n    font-size: 16px;\n    color: var(--dk-subtext);\n    display: flex;\n    align-items: end;\n    height: 25px; }\n  body p,\n  body span,\n  body i,\n  body q {\n    color: var(--dk-subtext); }\n  body input,\n  body textarea,\n  body select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: var(--component);\n    color: var(--dk-text);\n    resize: none;\n    transition: 0.2s ease-out; }\n  body input {\n    height: 35px; }\n  body textarea {\n    height: 120px;\n    padding-top: 10px; }\n  body select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none; }\n  body button {\n    transition: 0.2s ease-out; }\n  body .material-symbols-rounded,\n  body .material-symbols-outlined {\n    font-size: 18px; }\n  body .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48; }\n\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: 0.2s ease-out;\n  user-select: none; }\n  header h1 {\n    color: var(--dk-text);\n    font-size: 48px;\n    width: 285px;\n    transition: 0.2s ease-out; }\n  header span {\n    background: var(--grad-base);\n    background: linear-gradient(130deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: 0.2s ease-out; }\n  header div {\n    width: 510px; }\n\n.hidden {\n  display: none; }\n\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw; }\n  .cards .options:hover {\n    color: var(--primary);\n    transform: scale(1.2);\n    transition: 0.2s ease-out; }\n  .cards .options:active {\n    transform: scale(0.9); }\n  .cards .sidebar,\n  .cards .content {\n    background-color: var(--card);\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px; }\n  .cards .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: 0.2s ease-out; }\n  .cards .sidebar {\n    background-color: var(--card);\n    width: 270px;\n    display: flex;\n    flex-direction: column; }\n    .cards .sidebar .filters {\n      margin-bottom: 40px; }\n    .cards .sidebar .filters-title-grp {\n      display: flex;\n      justify-content: space-between; }\n    .cards .sidebar .theme {\n      height: 26px;\n      font-size: 24px;\n      color: var(--component-s);\n      user-select: none;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .theme:hover {\n        transform: scale(1.03);\n        color: var(--primary); }\n      .cards .sidebar .theme:active {\n        transform: scale(0.97); }\n    .cards .sidebar .filter {\n      height: 32px; }\n      .cards .sidebar .filter .fa-star {\n        padding: 1px;\n        width: 18px; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none; }\n      .cards .sidebar .filter i,\n      .cards .sidebar .project i {\n        margin-right: 6px; }\n      .cards .sidebar .filter p,\n      .cards .sidebar .project p {\n        user-select: none;\n        pointer-events: none; }\n    .cards .sidebar .filter,\n    .cards .sidebar .project-name {\n      font-size: 14px; }\n    .cards .sidebar .projects-header {\n      display: flex;\n      justify-content: space-between; }\n      .cards .sidebar .projects-header i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: 0.2s ease-out;\n        color: var(--component-s); }\n      .cards .sidebar .projects-header .plus:hover {\n        color: var(--primary);\n        transform: scale(1.1); }\n      .cards .sidebar .projects-header .rotated {\n        transform: rotate(45deg);\n        transition: 0.2s ease-out; }\n        .cards .sidebar .projects-header .rotated:hover {\n          color: var(--primary); }\n    .cards .sidebar .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto; }\n    .cards .sidebar .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%; }\n      .cards .sidebar .project-grp i {\n        font-size: 14px; }\n    .cards .sidebar .project {\n      display: flex;\n      height: 32px;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      transition: 0.2s ease-out; }\n      .cards .sidebar .project .folder {\n        pointer-events: none; }\n      .cards .sidebar .project .project-name {\n        width: 10vw;\n        overflow-x: hidden; }\n      .cards .sidebar .project .project-btn-grp {\n        margin-left: auto;\n        display: flex; }\n        .cards .sidebar .project .project-btn-grp i {\n          font-size: 16px; }\n        .cards .sidebar .project .project-btn-grp .options {\n          opacity: 0; }\n        .cards .sidebar .project .project-btn-grp .edit-p {\n          margin-right: 8px; }\n        .cards .sidebar .project .project-btn-grp .delete-p {\n          margin-right: 0px; }\n      .cards .sidebar .project:hover .project-btn-grp .options {\n        opacity: 1; }\n    .cards .sidebar #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px; }\n    .cards .sidebar .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto; }\n      .cards .sidebar .github .fa-github {\n        font-size: 25px; }\n  .cards .task,\n  .cards p {\n    display: flex; }\n  .cards .content {\n    width: 510px;\n    overflow-x: hidden; }\n    .cards .content .t-wrapper,\n    .cards .content .f-wrapper,\n    .cards .content .o-wrapper {\n      height: 100%; }\n    .cards .content .t-wrapper {\n      display: flex;\n      flex-direction: column; }\n      .cards .content .t-wrapper .title-grp {\n        display: flex;\n        justify-content: space-between; }\n        .cards .content .t-wrapper .title-grp .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254; }\n      .cards .content .t-wrapper .no-tasks {\n        color: var(--dk-subtext);\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none; }\n      .cards .content .t-wrapper .tasks {\n        overflow-x: hidden;\n        height: 40vh; }\n      .cards .content .t-wrapper .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 10px;\n        background-color: var(--component);\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 8px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: 0.2s ease-out; }\n        .cards .content .t-wrapper .task .hide-check {\n          display: none; }\n        .cards .content .t-wrapper .task .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .checkmark:active {\n            transform: scale(0.8); }\n        .cards .content .t-wrapper .task .fa-circle,\n        .cards .content .t-wrapper .task .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center; }\n        .cards .content .t-wrapper .task p {\n          height: 35px;\n          width: 80%;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: var(--dk-text);\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        .cards .content .t-wrapper .task input[type='checkbox'] {\n          margin-right: 1vw; }\n        .cards .content .t-wrapper .task div:last-of-type {\n          margin-left: auto; }\n        .cards .content .t-wrapper .task:hover {\n          background-color: var(--component-s); }\n          .cards .content .t-wrapper .task:hover .actions .edit,\n          .cards .content .t-wrapper .task:hover .actions .fa-regular {\n            transition: 0.2s ease-out;\n            opacity: 1; }\n        .cards .content .t-wrapper .task .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: 0.2s ease-out;\n          gap: 4px; }\n          .cards .content .t-wrapper .task .actions .options {\n            height: 100%;\n            display: flex;\n            align-items: center; }\n          .cards .content .t-wrapper .task .actions i {\n            transition: 0.2s ease-out; }\n          .cards .content .t-wrapper .task .actions .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center; }\n          .cards .content .t-wrapper .task .actions span {\n            display: flex; }\n          .cards .content .t-wrapper .task .actions .fa-regular {\n            opacity: 0; }\n          .cards .content .t-wrapper .task .actions .fa-solid {\n            color: var(--dk-subtext); }\n    .cards .content .f-wrapper {\n      display: none; }\n      .cards .content .f-wrapper .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column; }\n        .cards .content .f-wrapper .task-form .form-header {\n          margin-top: 24px; }\n        .cards .content .f-wrapper .task-form #task {\n          height: 36px; }\n        .cards .content .f-wrapper .task-form #note {\n          height: 15vh;\n          padding: 10px; }\n        .cards .content .f-wrapper .task-form .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px; }\n        .cards .content .f-wrapper .task-form .extras {\n          width: 45%; }\n        .cards .content .f-wrapper .task-form input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: 0.2s ease-out;\n            filter: var(--cal-indicator); }\n          .cards .content .f-wrapper .task-form input[type='date']::-webkit-calendar-picker-indicator:hover {\n            scale: 1.1;\n            filter: var(--cal-indicator); }\n        .cards .content .f-wrapper .task-form .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: 0.2s ease-out;\n          color: var(--primary); }\n          .cards .content .f-wrapper .task-form .fa-star:hover {\n            transform: scale(1.1); }\n          .cards .content .f-wrapper .task-form .fa-star:active {\n            transform: scale(0.9) rotate(72deg); }\n        .cards .content .f-wrapper .task-form .fa-regular {\n          font-size: 20px; }\n        .cards .content .f-wrapper .task-form .starred {\n          transition: 0.2s ease-out; }\n        .cards .content .f-wrapper .task-form .btn-group {\n          margin-top: auto;\n          display: flex; }\n        .cards .content .f-wrapper .task-form .back-btn {\n          background-color: var(--card);\n          border: none;\n          color: var(--dk-text);\n          font-size: 30px; }\n        .cards .content .f-wrapper .task-form .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: var(--dk-text);\n          background: var(--grad-base);\n          background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: 0.2s ease-out;\n          user-select: none; }\n          .cards .content .f-wrapper .task-form .submit-btn:hover {\n            transform: scale(1.02); }\n          .cards .content .f-wrapper .task-form .submit-btn:active {\n            transform: scale(0.97); }\n    .cards .content .o-wrapper {\n      display: none; }\n      .cards .content .o-wrapper .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none; }\n        .cards .content .o-wrapper .expand-view .expand-header {\n          margin-bottom: 24px; }\n          .cards .content .o-wrapper .expand-view .expand-header .project-grp {\n            display: flex;\n            margin-top: 2px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp i {\n              font-size: 20px;\n              margin-right: 6px; }\n            .cards .content .o-wrapper .expand-view .expand-header .project-grp p {\n              font-size: 16px; }\n        .cards .content .o-wrapper .expand-view .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: 0.2s ease-out; }\n          .cards .content .o-wrapper .expand-view .open-title-header .fa-star {\n            font-size: 24px;\n            color: var(--primary); }\n        .cards .content .o-wrapper .expand-view .note-wrapper {\n          margin: 8px 16px 0 16px; }\n        .cards .content .o-wrapper .expand-view hr {\n          height: 4px;\n          background: var(--primary);\n          border: none;\n          border-radius: 2px; }\n        .cards .content .o-wrapper .expand-view #open-title {\n          font-size: 18px;\n          color: var(--dk-text);\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .cards .content .o-wrapper .expand-view #open-note {\n          color: var(--dk-subtext);\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: scroll;\n          padding-top: 8px; }\n          .cards .content .o-wrapper .expand-view #open-note::-webkit-scrollbar-corner {\n            color: transparent; }\n        .cards .content .o-wrapper .expand-view .bot-note-line {\n          display: none;\n          width: 20px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0; }\n        .cards .content .o-wrapper .expand-view .visible {\n          display: block; }\n        .cards .content .o-wrapper .expand-view .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between; }\n        .cards .content .o-wrapper .expand-view .extras {\n          display: flex;\n          align-items: center; }\n          .cards .content .o-wrapper .expand-view .extras .open-date {\n            color: var(--primary);\n            font-weight: 500; }\n        .cards .content .o-wrapper .expand-view .btn-group {\n          margin-top: auto; }\n          .cards .content .o-wrapper .expand-view .btn-group .back-btn {\n            background-color: var(--card);\n            border: none;\n            color: var(--dk-text);\n            font-size: 30px; }\n    .cards .content .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: var(--dk-text);\n      background: var(--grad-base);\n      background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);\n      transition: 0.2s ease-out;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none; }\n      .cards .content .add-btn:hover {\n        transform: scale(1.02); }\n      .cards .content .add-btn:active {\n        transform: scale(0.98); }\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s; }\n\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s; }\n\n@keyframes taskRight {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(120%); } }\n\n.slide-form-in {\n  animation: ease-out formRight 0.1s; }\n\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s; }\n\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes appearForm {\n  0% {\n    transform: scale(0.95);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes textclip {\n  100% {\n    background-position: left; } }\n\n.side-menu {\n  display: none; }\n\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer; }\n    .side-menu .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0; }\n    .side-menu .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px; }\n      .side-menu .menu-grp .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: var(--component);\n        background-color: var(--primary);\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965); }\n        .side-menu .menu-grp .menu-line:first-of-type {\n          top: 0; }\n        .side-menu .menu-grp .menu-line:last-of-type {\n          bottom: 0; }\n    .side-menu.active .menu-line:first-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:first-of-type {\n      transform: rotate(45deg);\n      top: 5px; }\n    .side-menu.active .menu-line:last-of-type,\n    .side-menu .menu-icon:checked + div .menu-line:last-of-type {\n      transform: rotate(-45deg);\n      bottom: 5px; }\n  .blurred {\n    filter: blur(4px); }\n  header {\n    height: 110px; }\n  select {\n    font-size: 11px; }\n  input[type='date'] {\n    font-size: 11px; }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px; }\n  .section-header {\n    font-size: 18px; }\n  .form-header,\n  .form-title-header {\n    font-size: 16px; }\n  .cards .sidebar .filter,\n  .cards .sidebar .project {\n    font-size: 13px; }\n  .cards .sidebar .projects-header {\n    overflow-x: hidden; }\n  .cards .sidebar .project .project-name {\n    font-size: 13px;\n    width: 140px; }\n  .cards .content .f-wrapper .task-form .form-header {\n    margin-top: 14px;\n    margin-bottom: 10px; }\n  .cards .content .f-wrapper .task-form .fa-star {\n    margin-top: 50px; }\n  .cards .content .f-wrapper .task-form #note {\n    height: 20vh;\n    font-size: 12px; }\n  .cards .content .f-wrapper .task-form .extras-wrapper {\n    margin-bottom: 20px; }\n  .cards .content .f-wrapper .task-form .fa-regular {\n    font-size: 24px; }\n  .cards .content .f-wrapper .expand-view .expand-header {\n    margin-bottom: 8px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp p {\n      font-size: 14px;\n      margin-top: 1px; }\n    .cards .content .f-wrapper .expand-view .expand-header .project-grp i {\n      font-size: 18px; }\n  .cards .content .t-wrapper .task p {\n    font-size: 12px; }\n  .cards .content .t-wrapper .no-tasks {\n    font-size: 16px; }\n  .cards .content .o-wrapper .expand-view #open-title {\n    width: 215px;\n    font-size: 16px;\n    margin-top: 4px; }\n  .cards .content .o-wrapper .expand-view #open-note {\n    font-size: 14px;\n    height: 40vh; }\n  .cards .sidebar,\n  .cards .content {\n    transition: 0s;\n    height: 70vh; }\n  .cards .mobile-stretch {\n    transition: 0s;\n    margin-top: 5vh;\n    height: 90vh; }\n  .cards .sidebar {\n    display: none; }\n  .header {\n    opacity: 0;\n    height: 0; }\n  .filtersHide {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["html[data-theme='light'] {\n  --bg-color: #e4f0fa; //#f3ede394;\n  --primary: #ff7c7c;\n  --dk-text: #2b3c5b;\n  --dk-subtext: #7a8aa3;\n  --card: #e6eef8; //#f3f0e384;\n  --component-s: #c4cdd1;\n  --component: #d3dee3;\n  --grad-base: rgb(250, 177, 135);\n  --gradient-1: rgb(250, 177, 135);\n  --gradient-2: rgb(246, 117, 117);\n  --cal-indicator: invert(72%) sepia(40%) saturate(5103%) hue-rotate(314deg)\n    brightness(110%) contrast(105%);\n}\n\nhtml[data-theme='dark'] {\n  --bg-color: #121215;\n  --primary: #8d8fd2;\n  --dk-text: #dfe0fb; //#d9d9e8;\n  --dk-subtext: #84849d;\n  --card: #18181c;\n  --component-s: #454254;\n  --component: #2f2d36;\n  --grad-base: rgb(125, 90, 242);\n  --gradient-1: rgb(145, 114, 247);\n  --gradient-2: rgb(104, 61, 247);\n  --cal-indicator: invert(57%) sepia(96%) saturate(184%) hue-rotate(200deg)\n    brightness(85%) contrast(93%);\n}\n\n$bg-color: var(--bg-color);\n$primary: var(--primary);\n$dk-text: var(--dk-text);\n$dk-subtext: var(--dk-subtext);\n$card: var(--card);\n$component-s: var(--component-s);\n$component: var(--component);\n$grad-base: var(--grad-base);\n$gradient-1: var(--gradient-1);\n$gradient-2: var(--gradient-2);\n$cal-indicator: var(--cal-indicator);\n$transition: 0.2s ease-out;\n// $bg-color: #d2d8f7a6;\n// $primary: #e87070;\n// $dk-text: #d2d8f7;\n// $dk-subtext: #d2d8f7a6;\n// $card: #141319;\n// $component-s: #353240;\n// $component: #24222d;\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lexend Deca', sans-serif;\n  font-weight: 400;\n\n  // border: 1px solid red;\n}\nbody {\n  background-color: $bg-color;\n  // background-color: #151319;\n  // background-color: #1a181d;\n  transition: $transition;\n  height: 100vh;\n  h2,\n  h3 {\n    color: $primary;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 16px;\n    color: $dk-subtext;\n    display: flex;\n    align-items: end;\n    // line-height: 25px;\n    height: 25px;\n  }\n  p,\n  span,\n  i,\n  q {\n    color: $dk-subtext; //$primary\n  }\n  input,\n  textarea,\n  select {\n    border: none;\n    border-radius: 10px;\n    padding-left: 10px;\n    outline-width: 0;\n    background-color: $component;\n    color: $dk-text;\n    resize: none;\n    transition: $transition;\n  }\n  input {\n    height: 35px;\n    // transition: 0.2s ease-out !important;\n  }\n  textarea {\n    height: 120px;\n    // margin-bottom: 10px;\n    padding-top: 10px;\n  }\n  select {\n    height: 35px;\n    width: 100%;\n    padding: 0 10px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    user-select: none;\n  }\n  button {\n    transition: $transition;\n  }\n  .material-symbols-rounded,\n  .material-symbols-outlined {\n    font-size: 18px;\n  }\n  .material-symbols-rounded {\n    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 200, 'opsz' 48;\n  }\n}\nheader {\n  height: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10vw;\n  transition: $transition;\n  user-select: none;\n  h1 {\n    color: $dk-text;\n    // padding-left: 5vw;\n    font-size: 48px;\n    width: 285px;\n    transition: $transition;\n  }\n  span {\n    background: $grad-base;\n    background: linear-gradient(130deg, $gradient-1 0%, $gradient-2 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: $transition;\n  }\n  div {\n    width: 510px;\n  }\n}\n.hidden {\n  display: none;\n}\n.cards {\n  display: flex;\n  flex-wrap: nowrap;\n  // flex-direction: row-reverse;\n  justify-content: center;\n  gap: 24px;\n  padding: 0 8vw;\n  .options {\n    &:hover {\n      color: $primary;\n      transform: scale(1.2);\n      transition: $transition;\n    }\n    &:active {\n      transform: scale(0.9);\n    }\n  }\n  .sidebar,\n  .content {\n    background-color: $card;\n    border-radius: 24px;\n    padding: 24px;\n    height: 50vh;\n    transition: 0.2s ease-out;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    //   rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;\n    // box-shadow: rgba(0, 0, 0, 0.1) 0px 13px 27px -5px,\n    //   rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;\n  }\n  .section-header {\n    margin-bottom: 16px;\n    user-select: none;\n    transition: $transition;\n  }\n  .sidebar {\n    background-color: $card;\n    width: 270px;\n    display: flex;\n    flex-direction: column;\n    .filters {\n      margin-bottom: 40px;\n    }\n    .filters-title-grp {\n      display: flex;\n      justify-content: space-between;\n    }\n    .theme {\n      height: 26px;\n      font-size: 24px;\n      color: $component-s;\n      user-select: none;\n      transition: $transition;\n      // pointer-events: none;\n      // padding-right: 10px;\n      &:hover {\n        transform: scale(1.03);\n        color: $primary;\n      }\n      &:active {\n        transform: scale(0.97);\n      }\n    }\n    .filter {\n      height: 32px;\n      // background-color: $card;\n      .fa-star {\n        // height: 18px;\n        padding: 1px;\n        width: 18px;\n      }\n    }\n    .filter,\n    .project {\n      padding: 8px;\n      margin-bottom: 8px;\n      border-radius: 8px;\n      user-select: none;\n\n      i {\n        margin-right: 6px;\n      }\n\n      p {\n        user-select: none;\n        pointer-events: none;\n      }\n    }\n    .filter,\n    .project-name {\n      font-size: 14px;\n    }\n    .projects-header {\n      display: flex;\n      justify-content: space-between;\n\n      i {\n        height: 24px;\n        line-height: 24px;\n        font-size: 24px;\n        transition: $transition;\n        color: $component-s;\n      }\n\n      .plus:hover {\n        color: $primary;\n        transform: scale(1.1);\n      }\n      .rotated {\n        transform: rotate(45deg);\n        transition: $transition;\n        &:hover {\n          color: $primary;\n        }\n      }\n    }\n    .projects {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      overflow: auto;\n    }\n    .project-grp {\n      overflow-x: hidden;\n      margin-bottom: 16px;\n      width: 100%;\n      i {\n        font-size: 14px;\n      }\n    }\n    .project {\n      display: flex;\n      height: 32px;\n      // width: 100%;\n      padding: 8px;\n      overflow: hidden;\n      align-items: center;\n      opacity: 1;\n      // user-select: none;\n      transition: $transition;\n      .folder {\n        pointer-events: none;\n      }\n      .project-name {\n        width: 10vw;\n        overflow-x: hidden;\n      }\n      .project-btn-grp {\n        margin-left: auto;\n        display: flex;\n        i {\n          font-size: 16px;\n        }\n        .options {\n          opacity: 0;\n        }\n        .edit-p {\n          margin-right: 8px;\n        }\n        .delete-p {\n          margin-right: 0px;\n        }\n      }\n      &:hover {\n        .project-btn-grp {\n          .options {\n            opacity: 1;\n          }\n        }\n      }\n    }\n    #project-name {\n      width: 100%;\n      height: 32px;\n      margin-bottom: 8px;\n    }\n    .github {\n      height: 24px;\n      display: flex;\n      justify-content: center;\n      margin-top: auto;\n      .fa-github {\n        font-size: 25px;\n      }\n    }\n  }\n  .task,\n  p {\n    display: flex;\n  }\n  .content {\n    width: 510px;\n    overflow-x: hidden;\n    // transition: 0.2s ease-out;\n    .t-wrapper,\n    .f-wrapper,\n    .o-wrapper {\n      height: 100%;\n    }\n    .t-wrapper {\n      display: flex;\n      flex-direction: column;\n      .title-grp {\n        display: flex;\n        justify-content: space-between;\n        // gap: 6px;\n        .current-title {\n          margin-top: 6px;\n          margin-right: 12px;\n          font-size: 14px;\n          color: #454254;\n        }\n      }\n\n      .no-tasks {\n        color: $dk-subtext;\n        display: flex;\n        justify-content: center;\n        margin-top: 16px;\n        font-size: 18px;\n        user-select: none;\n      }\n      .tasks {\n        overflow-x: hidden;\n        height: 40vh;\n      }\n      .task {\n        user-select: none;\n        z-index: 0;\n        border-radius: 10px;\n        height: 35px;\n        margin-bottom: 8px;\n        display: flex;\n        padding-right: 10px;\n        background-color: $component;\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 8px 0px,\n          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        transition: $transition;\n        .hide-check {\n          display: none;\n        }\n        .checkmark {\n          margin: auto 0;\n          height: 32px;\n          transition: $transition;\n          &:active {\n            transform: scale(0.8);\n          }\n        }\n        .fa-circle,\n        .fa-circle-check {\n          height: 32px;\n          padding: 0 14px;\n          display: flex;\n          align-items: center;\n        }\n        p {\n          height: 35px;\n          width: 80%;\n          border: none;\n          line-height: 35px;\n          font-size: 14px;\n          font-weight: 300;\n          user-select: none;\n          pointer-events: none;\n          color: $dk-text;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        & input[type='checkbox'] {\n          margin-right: 1vw;\n        }\n        div:last-of-type {\n          margin-left: auto;\n        }\n        &:hover {\n          background-color: $component-s;\n          .actions {\n            .edit,\n            .fa-regular {\n              transition: $transition;\n              opacity: 1;\n            }\n          }\n        }\n        .actions {\n          z-index: 2;\n          display: flex;\n          align-items: center;\n          transition: $transition;\n          gap: 4px;\n          .options {\n            height: 100%;\n\n            display: flex;\n            align-items: center;\n          }\n          i {\n            transition: $transition;\n          }\n          .edit {\n            opacity: 0;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n          }\n          span {\n            display: flex;\n          }\n          .fa-regular {\n            opacity: 0;\n          }\n\n          .fa-solid {\n            color: $dk-subtext;\n          }\n        }\n      }\n    }\n    .f-wrapper {\n      display: none;\n      .task-form {\n        border-radius: 20px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        .form-header {\n          margin-top: 24px;\n        }\n        #task {\n          height: 36px;\n        }\n        #note {\n          height: 15vh;\n          padding: 10px;\n        }\n        .extras-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 16px;\n        }\n        .extras {\n          width: 45%;\n        }\n\n        input[type='date'] {\n          width: 100%;\n          padding: 0 5px 0 10px;\n          // transition: 0.3s ease-in;\n          user-select: none;\n          // pointer-events: none;\n          &::-webkit-calendar-picker-indicator {\n            font-size: 16px;\n            transition: $transition;\n            filter: $cal-indicator;\n          }\n          &::-webkit-calendar-picker-indicator:hover {\n            scale: (1.1);\n            filter: $cal-indicator;\n          }\n        }\n\n        .fa-star {\n          font-size: 24px;\n          margin-top: 70px;\n          margin-bottom: 6px;\n          width: 30px;\n          display: flex;\n          justify-content: center;\n          transition: $transition;\n          color: $primary;\n          &:hover {\n            transform: scale(1.1);\n          }\n          &:active {\n            transform: scale(0.9) rotate(72deg);\n          }\n        }\n        .fa-regular {\n          font-size: 20px;\n        }\n        .starred {\n          transition: $transition;\n        }\n\n        .btn-group {\n          margin-top: auto;\n          display: flex;\n        }\n        .back-btn {\n          background-color: $card;\n          border: none;\n          color: $dk-text;\n          font-size: 30px;\n          // transition: 0.3s ease-in-out;\n        }\n\n        .submit-btn {\n          width: 130px;\n          height: 40px;\n          border-radius: 30px;\n          border: none;\n          margin-left: auto;\n          font-size: 16px;\n          color: $dk-text;\n          background: $grad-base;\n          background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n          box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n          transition: $transition;\n          user-select: none;\n          &:hover {\n            transform: scale(1.02);\n          }\n          &:active {\n            transform: scale(0.97);\n          }\n        }\n      }\n    }\n    .o-wrapper {\n      display: none;\n\n      .expand-view {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        user-select: none;\n        .expand-header {\n          margin-bottom: 24px;\n\n          .project-grp {\n            display: flex;\n            margin-top: 2px;\n            // margin-left: 12px;\n            i {\n              font-size: 20px;\n              margin-right: 6px;\n              // margin-top: 1px;\n            }\n            p {\n              font-size: 16px;\n            }\n          }\n        }\n\n        .open-title-header {\n          display: flex;\n          justify-content: space-between;\n          margin: 8px 16px;\n          transition: $transition;\n          .fa-star {\n            font-size: 24px;\n            color: $primary;\n          }\n        }\n        .note-wrapper {\n          margin: 8px 16px 0 16px;\n        }\n        hr {\n          height: 4px;\n          background: $primary;\n\n          border: none;\n          border-radius: 2px;\n          // margin-bottom: 16px;\n        }\n        #open-title {\n          font-size: 18px;\n          color: $dk-text;\n          width: 90%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        #open-note {\n          color: $dk-subtext;\n          display: block;\n          font-size: 16px;\n          white-space: pre-line;\n          height: 27vh;\n          overflow: scroll;\n          padding-top: 8px;\n          &::-webkit-scrollbar-corner {\n            color: transparent;\n          }\n        }\n        // #open-note::-webkit-scrollbar {\n        //   background-color: red;\n        // }\n        .bot-note-line {\n          // margin-top: 16px;\n          display: none;\n          width: 20px;\n          // height: 15px;\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 14px;\n          margin-bottom: 0;\n        }\n        .visible {\n          display: block;\n        }\n        .extras-wrapper {\n          margin-top: auto;\n          padding: 0 16px 8px 8px;\n          display: flex;\n          justify-content: space-between;\n        }\n        .extras {\n          display: flex;\n          align-items: center;\n          .open-date {\n            color: $primary;\n            font-weight: 500;\n          }\n        }\n        .btn-group {\n          margin-top: auto;\n          .back-btn {\n            background-color: $card;\n            border: none;\n            color: $dk-text;\n            font-size: 30px;\n          }\n        }\n      }\n    }\n    .add-btn {\n      margin-top: auto;\n      width: 130px;\n      height: 40px;\n      border-radius: 24px;\n      border: none;\n      margin-left: auto;\n      font-size: 16px;\n      color: $dk-text;\n      background: $grad-base;\n      background: linear-gradient(160deg, $gradient-1 0%, $gradient-2 100%);\n      transition: $transition;\n      box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 15px 0px;\n      user-select: none;\n      &:hover {\n        transform: scale(1.02);\n      }\n      &:active {\n        transform: scale(0.98);\n      }\n    }\n  }\n}\n\n.slide-tasks-in {\n  animation: ease-out taskRight reverse 0.1s;\n}\n.slide-tasks-out {\n  animation: ease-out taskRight 0.1s;\n}\n@keyframes taskRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n.slide-form-in {\n  animation: ease-out formRight 0.1s;\n}\n.slide-form-out {\n  animation: ease-out formRight reverse 0.1s;\n}\n@keyframes formRight {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes formVertical {\n  0% {\n    transform: translateY(-80%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes formVerticall {\n  0% {\n    transform: translateY(20%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes appearForm {\n  0% {\n    // transform-origin: top;\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes textclip {\n  100% {\n    background-position: left;\n  }\n}\n\n.side-menu {\n  display: none;\n}\n@media screen and (max-width: 480px) {\n  .side-menu {\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n    width: 80px;\n    height: 45px;\n    cursor: pointer;\n    .menu-icon {\n      width: 40px;\n      height: 45px;\n      position: relative;\n      cursor: pointer;\n      z-index: 2;\n      -webkit-touch-callout: none;\n      position: absolute;\n      opacity: 0;\n    }\n    .menu-grp {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      width: 25px;\n      height: 13px;\n\n      .menu-line {\n        position: absolute;\n        display: block;\n        width: 25px;\n        height: 3px;\n        background: $component;\n        background-color: $primary;\n        border-radius: 1px;\n        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);\n\n        &:first-of-type {\n          top: 0;\n        }\n        &:last-of-type {\n          bottom: 0;\n        }\n      }\n    }\n\n    &.active,\n    .menu-icon:checked + div {\n      .menu-line {\n        &:first-of-type {\n          transform: rotate(45deg);\n          top: 5px;\n        }\n        &:last-of-type {\n          transform: rotate(-45deg);\n          bottom: 5px;\n        }\n      }\n    }\n\n    // &.active:hover .menu-line:first-of-type,\n    // &.active:hover .menu-line:last-of-type,\n    // &:hover .menu-icon:checked + div.menu-grp .menu-line:first-of-type,\n    // &:hover .menu-icon:checked + div.menu-grp .menu-line:last-of-type {\n    //   width: 25px;\n    // }\n  }\n  .blurred {\n    filter: blur(4px);\n  }\n  header {\n    height: 110px;\n  }\n  select {\n    font-size: 11px;\n  }\n  input[type='date'] {\n    font-size: 11px;\n  }\n  .cards .content .f-wrapper .task-form #task,\n  select#projects,\n  input[type='date'] {\n    height: 32px;\n    font-size: 12px;\n  }\n  .section-header {\n    font-size: 18px;\n  }\n  .form-header,\n  .form-title-header {\n    font-size: 16px;\n  }\n\n  .cards {\n    .sidebar {\n      .filter,\n      .project {\n        font-size: 13px;\n      }\n      .projects-header {\n        overflow-x: hidden;\n      }\n      .project {\n        .project-name {\n          font-size: 13px;\n          width: 140px;\n        }\n      }\n    }\n    .content {\n      .f-wrapper {\n        .task-form {\n          .form-header {\n            margin-top: 14px;\n            margin-bottom: 10px;\n          }\n          .fa-star {\n            margin-top: 50px;\n          }\n          #note {\n            height: 20vh;\n            font-size: 12px;\n          }\n          .extras-wrapper {\n            margin-bottom: 20px;\n          }\n          .fa-regular {\n            font-size: 24px;\n          }\n        }\n        .expand-view {\n          .expand-header {\n            margin-bottom: 8px;\n            .project-grp p {\n              font-size: 14px;\n              margin-top: 1px;\n            }\n            .project-grp i {\n              font-size: 18px;\n            }\n          }\n        }\n      }\n      .t-wrapper {\n        .task p {\n          font-size: 12px;\n        }\n        .no-tasks {\n          font-size: 16px;\n        }\n      }\n      .o-wrapper {\n        .expand-view {\n          #open-title {\n            width: 215px;\n            font-size: 16px;\n            margin-top: 4px;\n          }\n          #open-note {\n            font-size: 14px;\n            height: 40vh;\n          }\n        }\n      }\n    }\n    .sidebar,\n    .content {\n      transition: 0s;\n      height: 70vh;\n    }\n\n    .mobile-stretch {\n      transition: 0s;\n      margin-top: 5vh;\n      height: 90vh;\n    }\n    .sidebar {\n      display: none;\n    }\n  }\n\n  .header {\n    opacity: 0;\n    height: 0;\n  }\n  .filtersHide {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies, object-curly-newline







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

  let componentColor = window
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
  let primaryColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');

  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let lastProject;
  let selected = '';
  // let { allTasksList } = storage();

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
  };
  const toggleFormStar = () => {
    formStar.classList.toggle('starred');
    formStar.classList.toggle('fa-regular');
    formStar.classList.toggle('fa-solid');
  };
  const togglePlusBtn = () => {
    addProjectBtn.classList.toggle('plus');
    addProjectBtn.classList.toggle('rotated');
  };
  const toggleAddProject = () => {
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
      // projectForm.style.animation = 'ease-out reverse formVertical 0.2s';
      filters.classList.remove('filtersHide');
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
      updateSelectedFilter();
    }
  };
  function toggleEditProject(e) {
    projectForm.hidden = !projectForm.hidden;
    console.log(input);
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
      // input.style.display = 'block';
      input.value = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex].name;
      input.focus();

      selected = e.target.closest('.project');
      selected.classList.toggle('edited');
      selected.style.display = 'none';

      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex];
      // renderTasksView(e);
      // renderTasks(currProject);
    }
    togglePlusBtn();
    console.log(currProject);
    console.log(projectIndex);
  }
  function toggleOverflow() {
    const note = document.querySelector('#open-note');
    const botLine = document.querySelector('.bot-note-line');
    console.log(note.scrollWidth > note.clientWidth);
    if (note.scrollHeight > note.clientHeight) {
      botLine.classList.add('visible');
    } else botLine.classList.remove('visible');
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
    const project = document.querySelector('#open-project');
    const folder = document.querySelector('.open-folder');
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const date = document.querySelector('.open-date');
    const star = document.querySelector('.open-star');
    const id = e.target.closest('.task').getAttribute('data-id');
    const isStarred = currProject.tasks[id].getIsStarred();

    title.textContent = currProject.tasks[id].title;
    title.maxlength;

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
    resetFilters();
    // console.log(currProject);
    const projectsList = document.querySelectorAll('.project');
    let foundProject = false;
    // console.log(projectsList);
    projectsList.forEach((project, index) => {
      if (foundProject) return;
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      // console.log(index);
      if (p.textContent === currProject.name && index === currProject.index) {
        p.closest('.project').style.backgroundColor = componentColor;
        i.closest('.folder').className = 'folder fa-solid fa-folder';
        foundProject = true;
        // tasksTitle.textContent = `${currProject.name}`;
        // tasksTitle.className = 'current-title fa-solid fa-folder';
      }
    });
  }
  function updateSelectedFilter() {
    console.log(currProject);

    const filters = ['All', 'Starred', 'Today', 'Week'];
    const arr = [selectAll, selectStarred, selectToday, selectWeek];
    for (let i = 0; i < filters.length; i++) {
      // console.log(filters[0]);
      // console.log(currProject.name);
      // console.log(arr[0]);
      if (filters[i] === currProject.name) {
        arr[i].style.transition = '0.2s ease-out';
        arr[i].style.backgroundColor = componentColor;
        // return true;
      }
    }
    // return false;
  }

  function renderTasksOpenView(e) {
    hideTasksLeft();

    setTimeout(() => {
      openTask();
      updateOpenTask(e);
      toggleOverflow();
    }, 100);
  }
  const renderFormView = () => {
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
  };
  const renderEditView = (e, project) => {
    console.log(currProject);
    e.stopImmediatePropagation();
    if (!projectForm.hidden) {
      toggleAddProject();
    }
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');

    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    dateInput.value = project.getTasks()[taskIndex].date;
    console.log(project.name);

    const projectName = e.currentTarget
      .closest('.task')
      .getAttribute('data-project-name');
    document.querySelector('select').value = projectName;
    lastProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.find(({ name }) => name === projectName);
    console.log(projectName);
    console.log(lastProject);
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
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.2s';
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
      const taskWrapper = (0,_views_taskView__WEBPACK_IMPORTED_MODULE_3__["default"])(task, project.getTasks());
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

    projectIndex = Number(project.getAttribute('data-id'));
    currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects[projectIndex];

    //testing icon or folder name
    // tasksTitle.textContent = `· ${currProject.name}`;
    // tasksTitle.className = 'material-symbols-rounded theme';
    // tasksTitle.textContent = 'toggle_on';

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
      console.log('test');
      toggleSideBarFocus();
    }
  }
  function handleDeleteProjectClick(e) {
    e.stopPropagation();
    e.target.closest('.project').style.animation = 'ease-in formRight reverse 0.2s';
    e.target.closest('.project').style.opacity = '0.7';
    setTimeout(() => {
      console.log(currProject);
      deleteProject(e);
      resetProjects();
      renderProjects();

      // showAll(e);

      if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length === 0 || currProject === _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList) {
        getAllTasks();
        currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
        resetFilters();
        updateSelectedFilter();
        // resetTasks();
      } else if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.length > 0) {
        console.log('tester');
        // currProject.index = 0;
        updateSelectedProject();
        // getAllTasks();
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
    // resetProjects();
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
    // e.stopImmediatePropagation();
    // if (!isProjectValid()) return;
    const name = document.querySelector('#project-name');
    if (!name.value) {
      name.setCustomValidity('Task cannot be empty');
      name.reportValidity();
      return;
    }
    console.log(projectIndex);
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
    // currProject = projects[0];
    // updateSelectedProject();

    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
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
    // console.log(temp);

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
    // resetProjects();
    // renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    // updateSelectedProject();
    // updateSelectedFilter();

    resetForm();
    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function editTask(e, project) {
    console.log(currProject);
    if (!isTaskValid()) return;
    e.preventDefault();
    const editedTask = storeTask();
    const temp = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.find(({ name }) => name === formInput.value);
    console.log('hello');
    console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList);
    console.log(temp);
    if (
      currProject.name === 'Starred' ||
      currProject.name === 'Today' ||
      currProject.name === 'Week'
    ) {
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    }
    console.log(currProject);
    if (
      formInput.value !== project.name &&
      formInput.value !== '' &&
      currProject === _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList
    ) {
      console.log('test1'); //from allTasksList to target project while deleting from original project

      // temp.getTasks().splice(taskIndex, 1, editedTask);
      temp.getTasks().push(editedTask);
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().splice(taskIndex, 1);
      currProject = temp;

      if (lastProject !== undefined) {
        lastProject.getTasks().splice(taskIndex, 1);
        lastProject = undefined;
      }
    } else if (formInput.value !== project.name && formInput.value !== '') {
      //transfer from project to project and update allTasksList
      console.log('test2');
      temp.getTasks().push(editedTask);
      project.getTasks().splice(taskIndex, 1);
      _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else {
      console.log('test3'); //edit within same project
      project.getTasks().splice(taskIndex, 1, editedTask);
    }

    if (!projectForm.hidden) {
      toggleAddProject();
    }

    resetProjects();
    renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    // if (updateSelectedFilter() === false) {
    //   resetFilters();
    //   updateSelectedProject();
    // } else updateSelectedFilter();
    updateProjectsIndex();
    updateSelectedProject();

    (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().saveData();
  }
  function deleteTask(e, project) {
    e.stopImmediatePropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const taskToDelete = project.getTasks()[taskIndex];

    // Find project task originally came from
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
    // storage().saveAllTasks();
    console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList);
  }

  function getAllTasks() {
    if (_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().length === 0 || _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks() !== currProject) {
      const allTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.projects.flatMap((project) => project.tasks);
      const unassignedTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
        .filter((task) => task.project === '');
      const combinedTasks = allTasks.concat(unassignedTasks);
      (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().setAllTasksList(combinedTasks);
      // console.log(allTasksList);
      // currProject = allTasksList;
    } else {
      console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().length === 0);
      console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks() !== currProject);
      console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList);
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
    }
  }
  function showAll(e) {
    resetFilters();
    getAllTasks();
    currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;

    console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList);
    selectAll.style.backgroundColor = componentColor;
    resetSelectedProject();
    resetProjects();

    renderProjects();
    // currProject = allTasksList;
    renderTasksView(e);
    renderTasks(currProject);

    closeSideBarModal();
  }

  function getStarredTasks() {
    const starredTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks().filter((task) => task.isStarred);
    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Starred', starredTasks);
  }
  function showStarred(e) {
    resetFilters();
    getAllTasks();
    getStarredTasks();
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

  function getTodayTasks() {
    const todayTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
      .filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(task.date)));

    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Today', todayTasks);
  }
  function showToday(e) {
    resetFilters();
    getAllTasks();
    getTodayTasks();
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

  function getWeekTasks() {
    const weekTasks = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList.getTasks()
      .filter((task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(task.date)));

    currProject = new _models_projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('Week', weekTasks);
  }
  function showWeek(e) {
    resetFilters();
    getAllTasks();
    getWeekTasks();
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
  function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    const temp = themeIcon.textContent;
    themeIcon.textContent = temp === 'toggle_on' ? 'toggle_off' : 'toggle_on';

    componentColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--component');
    primaryColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--primary');
    // updateOpenTask(e);

    // if (document.querySelector('.open-date')) {
    const date = document.querySelector('.open-date');
    if (date.textContent === 'Past Due') {
      date.style.color = '#E34A4A';
    } else {
      date.style.color = primaryColor;
    }
    // }

    updateSelectedProject();
    updateSelectedFilter();
    // renderTasksView(e);
  }

  //mobile
  function toggleMobileFocus() {
    const header = document.querySelector('header');
    // const content = document.querySelector('.content');
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
      togglePlusBtn();
      projectForm.hidden = true;
      document.querySelector('form').reset();
      // toggleEditProject();
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
  function resetMobileAnimations() {
    content.style.animation = '';
    sidebar.style.animation = '';
  }

  function toggleSideBarModal() {
    console.log(currProject);
    // updateSelectedProject();
    mobileMenu.classList.toggle('active');
    const body = document.querySelector('header h1');
    if (mobileMenu.classList.contains('active')) {
      sidebar.style.animation = '0.2s formRight ease-out';
      sidebar.style.display = 'flex';
      content.style.display = 'none';

      body.classList.add('blurred');
      updateSelectedFilter();

      setTimeout(() => {
        resetMobileAnimations();
      }, 200);
    } else {
      sidebar.style.animation = '0.2s reverse formRight ease-out';
      body.classList.remove('blurred');
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
  //local storage
  //save todos?
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
    console.log(localStorage.getItem('data'));
    console.log(_models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList);
    if (!localStorage.getItem('data')) {
      console.log('test');
      // allTasksList = new Project('All');
      initIntro();
      getAllTasks();
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
      // storage().saveData();
    } else {
      console.log('test');
      console.log(lastProject);
      (0,_models_storageModel__WEBPACK_IMPORTED_MODULE_2__["default"])().getData();
      // storage().getAllTasks();
      getAllTasks();
      // console.table(projects);
      // console.log(localStorage.data);
      // console.log(allTasksList);
      currProject = _models_storageModel__WEBPACK_IMPORTED_MODULE_2__.allTasksList;
      // console.log(currProject);
      // resetTasks();

      renderTasks(currProject);
      // resetFilters();
      // selectAll.style.backgroundColor = componentColor;
      // updateSelectedProject();
      // console.log(currProject.name);
      // console.log(selectAll);
    }
    updateSelectedFilter();
  }
  projectInput.addEventListener('focus', toggleSideBarFocus);
  projectInput.addEventListener('blur', toggleSideBarFocus);
  mobileMenu.addEventListener('click', toggleSideBarModal);
  titleInput.addEventListener('focus', toggleMobileFocus);
  titleInput.addEventListener('blur', toggleMobileFocus);
  noteInput.addEventListener('focus', toggleMobileFocus);
  noteInput.addEventListener('blur', toggleMobileFocus);
  themeIcon.addEventListener('click', toggleTheme);
  selectAll.addEventListener('click', showAll);
  selectStarred.addEventListener('click', showStarred);
  selectToday.addEventListener('click', showToday);
  selectWeek.addEventListener('click', showWeek);
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
          // togglePlusBtn();
          projectForm.hidden = true;
        } else {
          editProject();
          togglePlusBtn();
          // projectForm.hidden = true;
          console.log(selected);
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



let projects = [];
let allTasksList = new _projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All');

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
    projects = storedProjects;
    allTasksList = new _projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', allTasks);
  }

  function setAllTasksList(tasks) {
    allTasksList = new _projectModel__WEBPACK_IMPORTED_MODULE_1__["default"]('All', tasks);
  }

  return {
    getData,
    saveData,
    projects,
    allTasksList,
    setAllTasksList,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUI7QUFDbUI7O0FBRTFDLHdEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzUGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9wcm9qZWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3N0b3JhZ2VNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvdGFza01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWxbZGF0YS10aGVtZT0nbGlnaHQnXSB7XFxuICAtLWJnLWNvbG9yOiAjZTRmMGZhO1xcbiAgLS1wcmltYXJ5OiAjZmY3YzdjO1xcbiAgLS1kay10ZXh0OiAjMmIzYzViO1xcbiAgLS1kay1zdWJ0ZXh0OiAjN2E4YWEzO1xcbiAgLS1jYXJkOiAjZTZlZWY4O1xcbiAgLS1jb21wb25lbnQtczogI2M0Y2RkMTtcXG4gIC0tY29tcG9uZW50OiAjZDNkZWUzO1xcbiAgLS1ncmFkLWJhc2U6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMjQ2LCAxMTcsIDExNyk7XFxuICAtLWNhbC1pbmRpY2F0b3I6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNTEwMyUpIGh1ZS1yb3RhdGUoMzE0ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpOyB9XFxuXFxuaHRtbFtkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1iZy1jb2xvcjogIzEyMTIxNTtcXG4gIC0tcHJpbWFyeTogIzhkOGZkMjtcXG4gIC0tZGstdGV4dDogI2RmZTBmYjtcXG4gIC0tZGstc3VidGV4dDogIzg0ODQ5ZDtcXG4gIC0tY2FyZDogIzE4MTgxYztcXG4gIC0tY29tcG9uZW50LXM6ICM0NTQyNTQ7XFxuICAtLWNvbXBvbmVudDogIzJmMmQzNjtcXG4gIC0tZ3JhZC1iYXNlOiByZ2IoMTI1LCA5MCwgMjQyKTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDE0NSwgMTE0LCAyNDcpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMTA0LCA2MSwgMjQ3KTtcXG4gIC0tY2FsLWluZGljYXRvcjogaW52ZXJ0KDU3JSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSgxODQlKSBodWUtcm90YXRlKDIwMGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NSUpIGNvbnRyYXN0KDkzJSk7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQgRGVjYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgYm9keSBoMixcXG4gIGJvZHkgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gIGJvZHkgaDIge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNXB4OyB9XFxuICBib2R5IHAsXFxuICBib2R5IHNwYW4sXFxuICBib2R5IGksXFxuICBib2R5IHEge1xcbiAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gIGJvZHkgaW5wdXQsXFxuICBib2R5IHRleHRhcmVhLFxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcG9uZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIGJvZHkgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDM1cHg7IH1cXG4gIGJvZHkgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxcbiAgYm9keSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgYm9keSBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBib2R5IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODsgfVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTB2dztcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiAyODVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgaGVhZGVyIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgaGVhZGVyIGRpdiB7XFxuICAgIHdpZHRoOiA1MTBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOHZ3OyB9XFxuICAuY2FyZHMgLm9wdGlvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgLmNhcmRzIC5vcHRpb25zOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyLFxcbiAgLmNhcmRzIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4OyB9XFxuICAuY2FyZHMgLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gIC5jYXJkcyAuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXJzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVycy10aXRsZS1ncnAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAudGhlbWUge1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbXBvbmVudC1zKTtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC50aGVtZTpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC50aGVtZTphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgLmZhLXN0YXIge1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICAgICAgd2lkdGg6IDE4cHg7IH1cXG4gICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIsXFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlciBpLFxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5maWx0ZXIgcCxcXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAuZmlsdGVyLFxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QtbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIGkge1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbXBvbmVudC1zKTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5wbHVzOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5yb3RhdGVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIC5yb3RhdGVkOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdHMge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvOyB9XFxuICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdC1ncnAge1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0LWdycCBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5mb2xkZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0IC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAuY2FyZHMgLnNpZGViYXIgLnByb2plY3QgLnByb2plY3QtYnRuLWdycCAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1idG4tZ3JwIC5kZWxldGUtcCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyB9XFxuICAgICAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuY2FyZHMgLnNpZGViYXIgLmdpdGh1YiB7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgIC5jYXJkcyAuc2lkZWJhciAuZ2l0aHViIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICAuY2FyZHMgLnRhc2ssXFxuICAuY2FyZHMgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIHdpZHRoOiA1MTBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyLFxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlcixcXG4gICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRpdGxlLWdycCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGl0bGUtZ3JwIC5jdXJyZW50LXRpdGxlIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgY29sb3I6ICM0NTQyNTQ7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAubm8tdGFza3Mge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRrLXN1YnRleHQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2tzIHtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIGhlaWdodDogNDB2aDsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBvbmVudCk7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcmsge1xcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0OyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5jaGVja21hcms6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5mYS1jaXJjbGUsXFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIHAge1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wb25lbnQtcyk7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2s6aG92ZXIgLmFjdGlvbnMgLmVkaXQsXFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrOmhvdmVyIC5hY3Rpb25zIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgZ2FwOiA0cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgaSB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayAuYWN0aW9ucyAuZWRpdCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAudC13cmFwcGVyIC50YXNrIC5hY3Rpb25zIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC50LXdyYXBwZXIgLnRhc2sgLmFjdGlvbnMgLmZhLXNvbGlkIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstc3VidGV4dCk7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mb3JtLWhlYWRlciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI3Rhc2sge1xcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI25vdGUge1xcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmV4dHJhcy13cmFwcGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmV4dHJhcyB7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1jYWwtaW5kaWNhdG9yKTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIGlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogMS4xO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tY2FsLWluZGljYXRvcik7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3Rhcjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZhLXN0YXI6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKDcyZGVnKTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuc3RhcnJlZCB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJ0bi1ncm91cCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmJhY2stYnRuIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRrLXRleHQpO1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmFzZSk7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWdyYWRpZW50LTEpIDAlLCB2YXIoLS1ncmFkaWVudC0yKSAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpOyB9XFxuICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLnN1Ym1pdC1idG46YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpOyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIgLnByb2plY3QtZ3JwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgICAgICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAub3Blbi10aXRsZS1oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5vcGVuLXRpdGxlLWhlYWRlciAuZmEtc3RhciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5ub3RlLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IGhyIHtcXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgI29wZW4tbm90ZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBoZWlnaHQ6IDI3dmg7XFxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3ICNvcGVuLW5vdGU6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJvdC1ub3RlLWxpbmUge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC52aXNpYmxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDhweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLmNhcmRzIC5jb250ZW50IC5vLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHRyYXMgLm9wZW4tZGF0ZSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgICAgIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAuY2FyZHMgLmNvbnRlbnQgLm8td3JhcHBlciAuZXhwYW5kLXZpZXcgLmJ0bi1ncm91cCAuYmFjay1idG4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogdmFyKC0tZGstdGV4dCk7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1iYXNlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1ncmFkaWVudC0xKSAwJSwgdmFyKC0tZ3JhZGllbnQtMikgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDVweCA1cHggMTVweCAwcHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgICAuY2FyZHMgLmNvbnRlbnQgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxcbiAgICAgIC5jYXJkcyAuY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxcblxcbi5zbGlkZS10YXNrcy1pbiB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG4uc2xpZGUtdGFza3Mtb3V0IHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKTsgfSB9XFxuXFxuLnNsaWRlLWZvcm0taW4ge1xcbiAgYW5pbWF0aW9uOiBlYXNlLW91dCBmb3JtUmlnaHQgMC4xczsgfVxcblxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1SaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZvcm1WZXJ0aWNhbGwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhcHBlYXJGb3JtIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgdGV4dGNsaXAge1xcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7IH0gfVxcblxcbi5zaWRlLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuc2lkZS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNpZGUtbWVudSAubWVudS1pY29uIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuc2lkZS1tZW51IC5tZW51LWdycCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgaGVpZ2h0OiAxM3B4OyB9XFxuICAgICAgLnNpZGUtbWVudSAubWVudS1ncnAgLm1lbnUtbGluZSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb21wb25lbnQpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xLCAwLjgyLCAwLjc2LCAwLjk2NSk7IH1cXG4gICAgICAgIC5zaWRlLW1lbnUgLm1lbnUtZ3JwIC5tZW51LWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIHRvcDogMDsgfVxcbiAgICAgICAgLnNpZGUtbWVudSAubWVudS1ncnAgLm1lbnUtbGluZTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgICBib3R0b206IDA7IH1cXG4gICAgLnNpZGUtbWVudS5hY3RpdmUgLm1lbnUtbGluZTpmaXJzdC1vZi10eXBlLFxcbiAgICAuc2lkZS1tZW51IC5tZW51LWljb246Y2hlY2tlZCArIGRpdiAubWVudS1saW5lOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0b3A6IDVweDsgfVxcbiAgICAuc2lkZS1tZW51LmFjdGl2ZSAubWVudS1saW5lOmxhc3Qtb2YtdHlwZSxcXG4gICAgLnNpZGUtbWVudSAubWVudS1pY29uOmNoZWNrZWQgKyBkaXYgLm1lbnUtbGluZTpsYXN0LW9mLXR5cGUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgYm90dG9tOiA1cHg7IH1cXG4gIC5ibHVycmVkIHtcXG4gICAgZmlsdGVyOiBibHVyKDRweCk7IH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTEwcHg7IH1cXG4gIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDsgfVxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgZm9udC1zaXplOiAxMXB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrLFxcbiAgc2VsZWN0I3Byb2plY3RzLFxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7IH1cXG4gIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgLmZvcm0taGVhZGVyLFxcbiAgLmZvcm0tdGl0bGUtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAuY2FyZHMgLnNpZGViYXIgLmZpbHRlcixcXG4gIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDsgfVxcbiAgLmNhcmRzIC5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIC5jYXJkcyAuc2lkZWJhciAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB3aWR0aDogMTQwcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gLmZvcm0taGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZmEtc3RhciB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC50YXNrLWZvcm0gI25vdGUge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLnRhc2stZm9ybSAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtIC5mYS1yZWd1bGFyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAuZXhwYW5kLXZpZXcgLmV4cGFuZC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gICAgLmNhcmRzIC5jb250ZW50IC5mLXdyYXBwZXIgLmV4cGFuZC12aWV3IC5leHBhbmQtaGVhZGVyIC5wcm9qZWN0LWdycCBwIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMXB4OyB9XFxuICAgIC5jYXJkcyAuY29udGVudCAuZi13cmFwcGVyIC5leHBhbmQtdmlldyAuZXhwYW5kLWhlYWRlciAucHJvamVjdC1ncnAgaSB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAudGFzayBwIHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLnQtd3JhcHBlciAubm8tdGFza3Mge1xcbiAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi10aXRsZSB7XFxuICAgIHdpZHRoOiAyMTVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7IH1cXG4gIC5jYXJkcyAuY29udGVudCAuby13cmFwcGVyIC5leHBhbmQtdmlldyAjb3Blbi1ub3RlIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDQwdmg7IH1cXG4gIC5jYXJkcyAuc2lkZWJhcixcXG4gIC5jYXJkcyAuY29udGVudCB7XFxuICAgIHRyYW5zaXRpb246IDBzO1xcbiAgICBoZWlnaHQ6IDcwdmg7IH1cXG4gIC5jYXJkcyAubW9iaWxlLXN0cmV0Y2gge1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDkwdmg7IH1cXG4gIC5jYXJkcyAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5oZWFkZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7IH1cXG4gIC5maWx0ZXJzSGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFXO0VBQ1gsa0JBQVU7RUFDVixrQkFBVTtFQUNWLHFCQUFhO0VBQ2IsZUFBTztFQUNQLHNCQUFjO0VBQ2Qsb0JBQVk7RUFDWiwrQkFBWTtFQUNaLGdDQUFhO0VBQ2IsZ0NBQWE7RUFDYjttQ0FBZ0IsRUFBQTs7QUFJbEI7RUFDRSxtQkFBVztFQUNYLGtCQUFVO0VBQ1Ysa0JBQVU7RUFDVixxQkFBYTtFQUNiLGVBQU87RUFDUCxzQkFBYztFQUNkLG9CQUFZO0VBQ1osOEJBQVk7RUFDWixnQ0FBYTtFQUNiLCtCQUFhO0VBQ2I7aUNBQWdCLEVBQUE7O0FBdUJsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxpQ0E3QndCO0VBZ0N4Qix5QkFyQndC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akI7SUFDRSxVQUFVO0lBQ1YsU0FBUyxFQUFBO0VBRVg7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbiAgLS1iZy1jb2xvcjogI2U0ZjBmYTsgLy8jZjNlZGUzOTQ7XFxuICAtLXByaW1hcnk6ICNmZjdjN2M7XFxuICAtLWRrLXRleHQ6ICMyYjNjNWI7XFxuICAtLWRrLXN1YnRleHQ6ICM3YThhYTM7XFxuICAtLWNhcmQ6ICNlNmVlZjg7IC8vI2YzZjBlMzg0O1xcbiAgLS1jb21wb25lbnQtczogI2M0Y2RkMTtcXG4gIC0tY29tcG9uZW50OiAjZDNkZWUzO1xcbiAgLS1ncmFkLWJhc2U6IHJnYigyNTAsIDE3NywgMTM1KTtcXG4gIC0tZ3JhZGllbnQtMTogcmdiKDI1MCwgMTc3LCAxMzUpO1xcbiAgLS1ncmFkaWVudC0yOiByZ2IoMjQ2LCAxMTcsIDExNyk7XFxuICAtLWNhbC1pbmRpY2F0b3I6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNTEwMyUpIGh1ZS1yb3RhdGUoMzE0ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG5odG1sW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLWJnLWNvbG9yOiAjMTIxMjE1O1xcbiAgLS1wcmltYXJ5OiAjOGQ4ZmQyO1xcbiAgLS1kay10ZXh0OiAjZGZlMGZiOyAvLyNkOWQ5ZTg7XFxuICAtLWRrLXN1YnRleHQ6ICM4NDg0OWQ7XFxuICAtLWNhcmQ6ICMxODE4MWM7XFxuICAtLWNvbXBvbmVudC1zOiAjNDU0MjU0O1xcbiAgLS1jb21wb25lbnQ6ICMyZjJkMzY7XFxuICAtLWdyYWQtYmFzZTogcmdiKDEyNSwgOTAsIDI0Mik7XFxuICAtLWdyYWRpZW50LTE6IHJnYigxNDUsIDExNCwgMjQ3KTtcXG4gIC0tZ3JhZGllbnQtMjogcmdiKDEwNCwgNjEsIDI0Nyk7XFxuICAtLWNhbC1pbmRpY2F0b3I6IGludmVydCg1NyUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoMTg0JSkgaHVlLXJvdGF0ZSgyMDBkZWcpXFxuICAgIGJyaWdodG5lc3MoODUlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cXG4kYmctY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4kcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XFxuJGRrLXRleHQ6IHZhcigtLWRrLXRleHQpO1xcbiRkay1zdWJ0ZXh0OiB2YXIoLS1kay1zdWJ0ZXh0KTtcXG4kY2FyZDogdmFyKC0tY2FyZCk7XFxuJGNvbXBvbmVudC1zOiB2YXIoLS1jb21wb25lbnQtcyk7XFxuJGNvbXBvbmVudDogdmFyKC0tY29tcG9uZW50KTtcXG4kZ3JhZC1iYXNlOiB2YXIoLS1ncmFkLWJhc2UpO1xcbiRncmFkaWVudC0xOiB2YXIoLS1ncmFkaWVudC0xKTtcXG4kZ3JhZGllbnQtMjogdmFyKC0tZ3JhZGllbnQtMik7XFxuJGNhbC1pbmRpY2F0b3I6IHZhcigtLWNhbC1pbmRpY2F0b3IpO1xcbiR0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbi8vICRiZy1jb2xvcjogI2QyZDhmN2E2O1xcbi8vICRwcmltYXJ5OiAjZTg3MDcwO1xcbi8vICRkay10ZXh0OiAjZDJkOGY3O1xcbi8vICRkay1zdWJ0ZXh0OiAjZDJkOGY3YTY7XFxuLy8gJGNhcmQ6ICMxNDEzMTk7XFxuLy8gJGNvbXBvbmVudC1zOiAjMzUzMjQwO1xcbi8vICRjb21wb25lbnQ6ICMyNDIyMmQ7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIERlY2EnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxMzE5O1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxZDtcXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICB9XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICB9XFxuICBwLFxcbiAgc3BhbixcXG4gIGksXFxuICBxIHtcXG4gICAgY29sb3I6ICRkay1zdWJ0ZXh0OyAvLyRwcmltYXJ5XFxuICB9XFxuICBpbnB1dCxcXG4gIHRleHRhcmVhLFxcbiAgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQ7XFxuICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAvLyB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsXFxuICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDEsICd3Z2h0JyAzMDAsICdHUkFEJyAyMDAsICdvcHN6JyA0ODtcXG4gIH1cXG59XFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHZ3O1xcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGgxIHtcXG4gICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDV2dztcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogMjg1cHg7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbiAgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiA1MTBweDtcXG4gIH1cXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLy8gZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDh2dztcXG4gIC5vcHRpb25zIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICB9XFxuICB9XFxuICAuc2lkZWJhcixcXG4gIC5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAyMHB4IDI1cHggLTVweCxcXG4gICAgLy8gICByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAxMHB4IDEwcHggLTVweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxMnB4IDI4cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDJweCA0cHggMHB4O1xcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEzcHggMjdweCAtNXB4LFxcbiAgICAvLyAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggOHB4IDE2cHggLThweDtcXG4gIH1cXG4gIC5zZWN0aW9uLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQ7XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLmZpbHRlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIH1cXG4gICAgLmZpbHRlcnMtdGl0bGUtZ3JwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbiAgICAudGhlbWUge1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmZpbHRlciB7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgIC5mYS1zdGFyIHtcXG4gICAgICAgIC8vIGhlaWdodDogMThweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZmlsdGVyLFxcbiAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICB9XFxuXFxuICAgICAgLnBsdXM6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgIH1cXG4gICAgICAucm90YXRlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG4gICAgLnByb2plY3QtZ3JwIHtcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAuZm9sZGVyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZWRpdC1wIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlLXAge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICAucHJvamVjdC1idG4tZ3JwIHtcXG4gICAgICAgICAgLm9wdGlvbnMge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgI3Byb2plY3QtbmFtZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcbiAgICAuZ2l0aHViIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgIC5mYS1naXRodWIge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLnRhc2ssXFxuICBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgd2lkdGg6IDUxMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIC8vIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxuICAgIC50LXdyYXBwZXIsXFxuICAgIC5mLXdyYXBwZXIsXFxuICAgIC5vLXdyYXBwZXIge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAudC13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLnRpdGxlLWdycCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgLy8gZ2FwOiA2cHg7XFxuICAgICAgICAuY3VycmVudC10aXRsZSB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGNvbG9yOiAjNDU0MjU0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubm8tdGFza3Mge1xcbiAgICAgICAgY29sb3I6ICRkay1zdWJ0ZXh0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIH1cXG4gICAgICAudGFza3Mge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcbiAgICAgIH1cXG4gICAgICAudGFzayB7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDhweCAwcHgsXFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAuaGlkZS1jaGVjayB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuY2hlY2ttYXJrIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5mYS1jaXJjbGUsXFxuICAgICAgICAuZmEtY2lyY2xlLWNoZWNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wb25lbnQtcztcXG4gICAgICAgICAgLmFjdGlvbnMge1xcbiAgICAgICAgICAgIC5lZGl0LFxcbiAgICAgICAgICAgIC5mYS1yZWd1bGFyIHtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hY3Rpb25zIHtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICAgIGdhcDogNHB4O1xcbiAgICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZWRpdCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmZhLXNvbGlkIHtcXG4gICAgICAgICAgICBjb2xvcjogJGRrLXN1YnRleHQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLmZvcm0taGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgICAgIH1cXG4gICAgICAgICN0YXNrIHtcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI25vdGUge1xcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5leHRyYXMge1xcbiAgICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcXG4gICAgICAgICAgLy8gdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgICAgICAgIGZpbHRlcjogJGNhbC1pbmRpY2F0b3I7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogKDEuMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiAkY2FsLWluZGljYXRvcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZhLXN0YXIge1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSByb3RhdGUoNzJkZWcpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZmEtcmVndWxhciB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdGFycmVkIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5iYWNrLWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGNvbG9yOiAkZGstdGV4dDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1idG4ge1xcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRncmFkLWJhc2U7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICRncmFkaWVudC0xIDAlLCAkZ3JhZGllbnQtMiAxMDAlKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggNXB4IDE1cHggMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLm8td3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAuZXhwYW5kLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcbiAgICAgICAgICAucHJvamVjdC1ncnAge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm9wZW4tdGl0bGUtaGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gICAgICAgICAgLmZhLXN0YXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5ub3RlLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGhyIHtcXG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xcblxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcbiAgICAgICAgI29wZW4tbm90ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkZGstc3VidGV4dDtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICAgICAgICBoZWlnaHQ6IDI3dmg7XFxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAvLyAjb3Blbi1ub3RlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIC8vIH1cXG4gICAgICAgIC5ib3Qtbm90ZS1saW5lIHtcXG4gICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgIC8vIGhlaWdodDogMTVweDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC52aXNpYmxlIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDhweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmV4dHJhcyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIC5vcGVuLWRhdGUge1xcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuLWdyb3VwIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgICAgLmJhY2stYnRuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6ICRkay10ZXh0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJ0biB7XFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjb2xvcjogJGRrLXRleHQ7XFxuICAgICAgYmFja2dyb3VuZDogJGdyYWQtYmFzZTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAkZ3JhZGllbnQtMSAwJSwgJGdyYWRpZW50LTIgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSA1cHggNXB4IDE1cHggMHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgICB9XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlLXRhc2tzLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcztcXG59XFxuLnNsaWRlLXRhc2tzLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IHRhc2tSaWdodCAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRhc2tSaWdodCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTIwJSk7XFxuICB9XFxufVxcbi5zbGlkZS1mb3JtLWluIHtcXG4gIGFuaW1hdGlvbjogZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXM7XFxufVxcbi5zbGlkZS1mb3JtLW91dCB7XFxuICBhbmltYXRpb246IGVhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgZm9ybVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZm9ybVZlcnRpY2FsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmb3JtVmVydGljYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhckZvcm0ge1xcbiAgMCUge1xcbiAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0ZXh0Y2xpcCB7XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gIH1cXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnNpZGUtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAubWVudS1pY29uIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAubWVudS1ncnAge1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgIGhlaWdodDogMTNweDtcXG5cXG4gICAgICAubWVudS1saW5lIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb21wb25lbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjEsIDAuODIsIDAuNzYsIDAuOTY1KTtcXG5cXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmFjdGl2ZSxcXG4gICAgLm1lbnUtaWNvbjpjaGVja2VkICsgZGl2IHtcXG4gICAgICAubWVudS1saW5lIHtcXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAmLmFjdGl2ZTpob3ZlciAubWVudS1saW5lOmZpcnN0LW9mLXR5cGUsXFxuICAgIC8vICYuYWN0aXZlOmhvdmVyIC5tZW51LWxpbmU6bGFzdC1vZi10eXBlLFxcbiAgICAvLyAmOmhvdmVyIC5tZW51LWljb246Y2hlY2tlZCArIGRpdi5tZW51LWdycCAubWVudS1saW5lOmZpcnN0LW9mLXR5cGUsXFxuICAgIC8vICY6aG92ZXIgLm1lbnUtaWNvbjpjaGVja2VkICsgZGl2Lm1lbnUtZ3JwIC5tZW51LWxpbmU6bGFzdC1vZi10eXBlIHtcXG4gICAgLy8gICB3aWR0aDogMjVweDtcXG4gICAgLy8gfVxcbiAgfVxcbiAgLmJsdXJyZWQge1xcbiAgICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG4gIH1cXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuICBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICAuY2FyZHMgLmNvbnRlbnQgLmYtd3JhcHBlciAudGFzay1mb3JtICN0YXNrLFxcbiAgc2VsZWN0I3Byb2plY3RzLFxcbiAgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAuZm9ybS1oZWFkZXIsXFxuICAuZm9ybS10aXRsZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY2FyZHMge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgLmZpbHRlcixcXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgfVxcbiAgICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgIH1cXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAuZi13cmFwcGVyIHtcXG4gICAgICAgIC50YXNrLWZvcm0ge1xcbiAgICAgICAgICAuZm9ybS1oZWFkZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZmEtc3RhciB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAjbm90ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZXh0cmFzLXdyYXBwZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmZhLXJlZ3VsYXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmV4cGFuZC12aWV3IHtcXG4gICAgICAgICAgLmV4cGFuZC1oZWFkZXIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgICAgICAucHJvamVjdC1ncnAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5wcm9qZWN0LWdycCBpIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLnQtd3JhcHBlciB7XFxuICAgICAgICAudGFzayBwIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLm5vLXRhc2tzIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuby13cmFwcGVyIHtcXG4gICAgICAgIC5leHBhbmQtdmlldyB7XFxuICAgICAgICAgICNvcGVuLXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogMjE1cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAjb3Blbi1ub3RlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5zaWRlYmFyLFxcbiAgICAuY29udGVudCB7XFxuICAgICAgdHJhbnNpdGlvbjogMHM7XFxuICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUtc3RyZXRjaCB7XFxuICAgICAgdHJhbnNpdGlvbjogMHM7XFxuICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgfVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIC5maWx0ZXJzSGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMsIG9iamVjdC1jdXJseS1uZXdsaW5lXG5pbXBvcnQgeyBwYXJzZUlTTywgaXNUb2RheSwgaXNQYXN0LCBpc1RoaXNXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2RlbHMvdGFza01vZGVsJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kZWxzL3Byb2plY3RNb2RlbCc7XG5pbXBvcnQgc3RvcmFnZSwgeyBwcm9qZWN0cywgYWxsVGFza3NMaXN0IH0gZnJvbSAnLi9tb2RlbHMvc3RvcmFnZU1vZGVsJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi92aWV3cy9wcm9qZWN0Vmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuICBjb25zdCB0YXNrc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudC13cmFwcGVyJyk7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmYtd3JhcHBlcicpO1xuICBjb25zdCBvcGVuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXdyYXBwZXInKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtcGx1cycpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgY29uc3Qgbm90ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gIGNvbnN0IGZvcm1TdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zdGFyJyk7XG4gIGNvbnN0IHByb2plY3RHcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gIGNvbnN0IHNlbGVjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgY29uc3Qgc2VsZWN0U3RhcnJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFycmVkJyk7XG4gIGNvbnN0IHNlbGVjdFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHNlbGVjdFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuICBjb25zdCB0aGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKTtcbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcnMnKTtcblxuICBsZXQgY29tcG9uZW50Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tY29tcG9uZW50Jyk7XG4gIGNvbnN0IHRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay10ZXh0Jyk7XG4gIGNvbnN0IHN1YnRleHRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kay1zdWJ0ZXh0Jyk7XG4gIGNvbnN0IGNhcmRDb2xvciA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jYXJkJyk7XG4gIGxldCBwcmltYXJ5Q29sb3IgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpO1xuXG4gIGxldCB0YXNrSW5kZXggPSAwO1xuICBsZXQgcHJvamVjdEluZGV4O1xuICBsZXQgY3VyclByb2plY3Q7XG4gIGxldCBsYXN0UHJvamVjdDtcbiAgbGV0IHNlbGVjdGVkID0gJyc7XG4gIC8vIGxldCB7IGFsbFRhc2tzTGlzdCB9ID0gc3RvcmFnZSgpO1xuXG4gIC8vIGFuaW1hdGlvbnNcbiAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCAwLjFzJztcbiAgICBmb3JtV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1SaWdodCByZXZlcnNlIDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybVdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm1XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHNob3dUYXNrc1JpZ2h0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgdGFza1JpZ2h0IHJldmVyc2UgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgaGlkZVRhc2tzUmlnaHQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCBzaG93VGFza3NMZWZ0ID0gKCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhc2tzV3JhcHBlci5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVJpZ2h0IDAuMXMnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IGhpZGVUYXNrc0xlZnQgPSAoKSA9PiB7XG4gICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBmb3JtUmlnaHQgcmV2ZXJzZSAwLjFzJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2tzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFza3NXcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IG9wZW5UYXNrID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICBvcGVuV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgcmV2ZXJzZSAwLjFzJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xuICAgIG9wZW5XcmFwcGVyLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCB0YXNrUmlnaHQgMC4xcyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3BlbldyYXBwZXIuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICAvLyB2YWxpZGl0eVxuICBmdW5jdGlvbiBpc1Byb2plY3RWYWxpZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGlmICghcHJvamVjdC52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgIHByb2plY3Quc2V0Q3VzdG9tVmFsaWRpdHkoJ1Byb2plY3QgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICBwcm9qZWN0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGlzVGFza1ZhbGlkKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpO1xuICAgIGlmICghdGFzay52YWx1ZSkge1xuICAgICAgdGFzay5zZXRDdXN0b21WYWxpZGl0eSgnVGFzayBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICAgIHRhc2sucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0b2dnbGVzXG4gIGNvbnN0IHRvZ2dsZUJ0blRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10aXRsZS1oZWFkZXInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IChlLCBwcm9qZWN0KSA9PiB7XG4gICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcbiAgICB0YXNrSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBlLnRhcmdldDtcbiAgICAvLyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuXG4gICAgaWYgKCF0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICB9XG4gICAgdGFzay5pc0NvbXBsZXRlID0gIXRhc2suaXNDb21wbGV0ZTtcbiAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICB3cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3NPcGVuVmlldyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2ttYXJrQ2xhc3NlcyA9IFsnZmEtcmVndWxhcicsICdmYS1zb2xpZCcsICdmYS1jaXJjbGUnLCAnZmEtY2lyY2xlLWNoZWNrJ107XG4gICAgY2hlY2ttYXJrQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgIHNlbGVjdGVkVGFzay5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgLy8gY29uc3QgYWN0aW9ucyA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmFjdGlvbnMnKTtcbiAgICBjb25zdCBlZGl0ID0gc2VsZWN0ZWRUYXNrLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCB0cmFzaCA9IHNlbGVjdGVkVGFzay5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcbiAgICBjb25zdCBzdGFyID0gc2VsZWN0ZWRUYXNrLmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLmZhLXN0YXInKTtcblxuICAgIHRpdGxlLnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLWluLW91dCc7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIGVkaXQuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICB0cmFzaC5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMgZWFzZS1pbi1vdXQnO1xuICAgIHN0YXIuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2UtaW4tb3V0JztcbiAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09ICcnICYmIHRpdGxlLnN0eWxlLmNvbG9yICE9PSAnI2QyZDhmN2E2Jykge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdGl0bGUuc3R5bGUuY29sb3IgPSBzdWJ0ZXh0Q29sb3I7XG4gICAgICBlZGl0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB0cmFzaC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgc3Rhci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgZWRpdC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgdHJhc2guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHN0YXIuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdG9nZ2xlRm9ybVN0YXIgPSAoKSA9PiB7XG4gICAgZm9ybVN0YXIuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhcnJlZCcpO1xuICAgIGZvcm1TdGFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXJlZ3VsYXInKTtcbiAgICBmb3JtU3Rhci5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpO1xuICB9O1xuICBjb25zdCB0b2dnbGVQbHVzQnRuID0gKCkgPT4ge1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncGx1cycpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlZCcpO1xuICB9O1xuICBjb25zdCB0b2dnbGVBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgIHNlbGVjdGVkID0gJyc7XG4gICAgdG9nZ2xlUGx1c0J0bigpO1xuXG4gICAgcHJvamVjdEZvcm0uaGlkZGVuID0gIXByb2plY3RGb3JtLmhpZGRlbjtcblxuICAgIGlmICghcHJvamVjdEZvcm0uaGlkZGVuKSB7XG4gICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5hbmltYXRpb24gPSAnZWFzZS1vdXQgZm9ybVZlcnRpY2FsIDAuMnMnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0R3JwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RHcnAuY2hpbGRyZW5baV0uc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2Utb3V0IGZvcm1WZXJ0aWNhbCAwLjJzJztcbiAgICAgIH1cbiAgICAgIHByb2plY3RHcnAuaW5zZXJ0QmVmb3JlKHByb2plY3RGb3JtLCBwcm9qZWN0R3JwLmZpcnN0Q2hpbGQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ0bi1ncnAgLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICAgIGlmIChwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIC8vIHByb2plY3RGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCByZXZlcnNlIGZvcm1WZXJ0aWNhbCAwLjJzJztcbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyc0hpZGUnKTtcbiAgICAgIHNlbGVjdGVkID0gJyc7XG4gICAgICByZXNldFByb2plY3RzKCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gdG9nZ2xlRWRpdFByb2plY3QoZSkge1xuICAgIHByb2plY3RGb3JtLmhpZGRlbiA9ICFwcm9qZWN0Rm9ybS5oaWRkZW47XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYnRuLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLW91dCBhcHBlYXJGb3JtIDAuMnMnO1xuXG4gICAgICBwcm9qZWN0SW5kZXggPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gcHJvamVjdEdycC5jaGlsZHJlbi5pdGVtKHByb2plY3RJbmRleCk7XG4gICAgICBwcm9qZWN0R3JwLmluc2VydEJlZm9yZShwcm9qZWN0Rm9ybSwgc2VsZWN0ZWRJbmRleCk7XG4gICAgICAvLyBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGlucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgc2VsZWN0ZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpO1xuICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGVkJyk7XG4gICAgICBzZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBjdXJyUHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgICAvLyByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgICAvLyByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgfVxuICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVPdmVyZmxvdygpIHtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbm90ZScpO1xuICAgIGNvbnN0IGJvdExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90LW5vdGUtbGluZScpO1xuICAgIGNvbnNvbGUubG9nKG5vdGUuc2Nyb2xsV2lkdGggPiBub3RlLmNsaWVudFdpZHRoKTtcbiAgICBpZiAobm90ZS5zY3JvbGxIZWlnaHQgPiBub3RlLmNsaWVudEhlaWdodCkge1xuICAgICAgYm90TGluZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIGJvdExpbmUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9XG4gIC8vIHJlc2V0c1xuICBmdW5jdGlvbiByZXNldFN0YXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zdGFyJykuY2xhc3NOYW1lID0gJ2FkZC1zdGFyIGZhLXJlZ3VsYXIgZmEtc3Rhcic7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ncnAnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5pbm5lckhUTUwgPSAnJztcbiAgfVxuICBmdW5jdGlvbiByZXNldFRhc2tzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBpZiAoZWRpdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJykucmVzZXQoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZXNldEZpbHRlcnMoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKTtcbiAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgZmlsdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgY29uc3QgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2xkZXInKTtcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtcmVndWxhciBmYS1mb2xkZXInO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZXNcbiAgZnVuY3Rpb24gdXBkYXRlT3BlblRhc2soZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tZm9sZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi10aXRsZScpO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1ub3RlJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWRhdGUnKTtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tc3RhcicpO1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBpc1N0YXJyZWQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0uZ2V0SXNTdGFycmVkKCk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJQcm9qZWN0LnRhc2tzW2lkXS50aXRsZTtcbiAgICB0aXRsZS5tYXhsZW5ndGg7XG5cbiAgICBpZiAoY3VyclByb2plY3QubmFtZSA9PT0gJ0FsbCcpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnQWxsJztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIG9wZW4tZm9sZGVyJztcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICdpbmJveCc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnU3RhcnJlZCcpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnU3RhcnJlZCc7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXN0YXIgb3Blbi1mb2xkZXInO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnVG9kYXknKSB7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgIGZvbGRlci5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJztcbiAgICAgIGZvbGRlci50ZXh0Q29udGVudCA9ICd0b2RheSc7XG4gICAgfSBlbHNlIGlmIChjdXJyUHJvamVjdC5uYW1lID09PSAnV2VlaycpIHtcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnO1xuICAgICAgZm9sZGVyLnRleHRDb250ZW50ID0gJ2RhdGVfcmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb2xkZXIuY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCBvcGVuLWZvbGRlcic7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gY3VyclByb2plY3QudGFza3NbaWRdLnByb2plY3Q7XG4gICAgICBmb2xkZXIudGV4dENvbnRlbnQgPSAnZm9sZGVyJztcbiAgICB9XG5cbiAgICBpZiAoaXNTdGFycmVkID09PSBmYWxzZSkge1xuICAgICAgc3Rhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBzdGFyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuICAgIGlmIChjdXJyUHJvamVjdC50YXNrc1tpZF0ubm90ZSA9PT0gJycpIHtcbiAgICAgIG5vdGUudGV4dENvbnRlbnQgPSAnTm8gbm90ZSc7XG4gICAgICBub3RlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RlLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgIG5vdGUudGV4dENvbnRlbnQgPSBjdXJyUHJvamVjdC50YXNrc1tpZF0ubm90ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBwYXJzZUlTTyhjdXJyUHJvamVjdC50YXNrc1tpZF0uZGF0ZSk7XG4gICAgaWYgKGN1cnJQcm9qZWN0LnRhc2tzW2lkXS5kYXRlID09PSAnJykge1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoaXNQYXN0KHNlbGVjdGVkRGF0ZSkgJiYgIWlzVG9kYXkoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9ICdQYXN0IER1ZSc7XG4gICAgICBkYXRlLnN0eWxlLmNvbG9yID0gJyNFMzRBNEEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gc2VsZWN0ZWREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzSW5kZXgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHNbaV0uaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgbGV0IGZvdW5kUHJvamVjdCA9IGZhbHNlO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdCk7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZm91bmRQcm9qZWN0KSByZXR1cm47XG4gICAgICBjb25zdCBpID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdpJyk7XG4gICAgICBjb25zdCBwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICBpZiAocC50ZXh0Q29udGVudCA9PT0gY3VyclByb2plY3QubmFtZSAmJiBpbmRleCA9PT0gY3VyclByb2plY3QuaW5kZXgpIHtcbiAgICAgICAgcC5jbG9zZXN0KCcucHJvamVjdCcpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgICBpLmNsb3Nlc3QoJy5mb2xkZXInKS5jbGFzc05hbWUgPSAnZm9sZGVyIGZhLXNvbGlkIGZhLWZvbGRlcic7XG4gICAgICAgIGZvdW5kUHJvamVjdCA9IHRydWU7XG4gICAgICAgIC8vIHRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBgJHtjdXJyUHJvamVjdC5uYW1lfWA7XG4gICAgICAgIC8vIHRhc2tzVGl0bGUuY2xhc3NOYW1lID0gJ2N1cnJlbnQtdGl0bGUgZmEtc29saWQgZmEtZm9sZGVyJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZEZpbHRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gWydBbGwnLCAnU3RhcnJlZCcsICdUb2RheScsICdXZWVrJ107XG4gICAgY29uc3QgYXJyID0gW3NlbGVjdEFsbCwgc2VsZWN0U3RhcnJlZCwgc2VsZWN0VG9kYXksIHNlbGVjdFdlZWtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyc1swXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyUHJvamVjdC5uYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFyclswXSk7XG4gICAgICBpZiAoZmlsdGVyc1tpXSA9PT0gY3VyclByb2plY3QubmFtZSkge1xuICAgICAgICBhcnJbaV0uc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzIGVhc2Utb3V0JztcbiAgICAgICAgYXJyW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3NPcGVuVmlldyhlKSB7XG4gICAgaGlkZVRhc2tzTGVmdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvcGVuVGFzaygpO1xuICAgICAgdXBkYXRlT3BlblRhc2soZSk7XG4gICAgICB0b2dnbGVPdmVyZmxvdygpO1xuICAgIH0sIDEwMCk7XG4gIH1cbiAgY29uc3QgcmVuZGVyRm9ybVZpZXcgPSAoKSA9PiB7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgcmVzZXRTdGFyKCk7XG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWUgPSBjdXJyUHJvamVjdC5uYW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGhpZGVUYXNrc1JpZ2h0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzaG93Rm9ybSgpO1xuICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH0sIDEwMCk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckVkaXRWaWV3ID0gKGUsIHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cbiAgICB0YXNrSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnRhc2snKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS50aXRsZTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5ub3RlO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdLmRhdGU7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAuY2xvc2VzdCgnLnRhc2snKVxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgIGxhc3RQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2cobGFzdFByb2plY3QpO1xuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKClbdGFza0luZGV4XS5nZXRJc1N0YXJyZWQoKSkge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnJlZCcpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicpO1xuICAgICAgZm9ybVN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc29saWQnKTtcbiAgICB9XG5cbiAgICBoaWRlVGFza3NSaWdodCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9LCAxMDApO1xuICB9O1xuICBjb25zdCByZW5kZXJUYXNrc1ZpZXcgPSAoZSkgPT4ge1xuICAgIC8vIHJlc2V0Rm9ybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWRkQnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRvZ2dsZUJ0blRleHQoKTtcbiAgICB9XG4gICAgaWYgKGZvcm1XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93VGFza3NSaWdodCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wZW5XcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VUYXNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tzTGVmdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBjb25zdCBjaGVja21hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNpcmNsZSwgLmZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZScpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFjay1idG4nKTtcblxuICAgIGJhY2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc1ZpZXcpO1xuICAgIH0pO1xuICAgIHRhc2tXcmFwcGVyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRhc2tzT3BlblZpZXcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNoZWNrbWFya3MuZm9yRWFjaCgoY2hlY2ttYXJrKSA9PiB7XG4gICAgICBjaGVja21hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZShlLCBjdXJyUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0QnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHJlbmRlckVkaXRWaWV3KGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLmFuaW1hdGlvbiA9ICdlYXNlLWluIGZvcm1SaWdodCByZXZlcnNlIDAuMnMnO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlQ29tcGxldGUoZSwgY3VyclByb2plY3QpOyAvLz8/P1xuICAgICAgICAgIGRlbGV0ZVRhc2soZSwgY3VyclByb2plY3QpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCwgc2VsZWN0ZWRUYXNrKSB7XG4gICAgcmVzZXRUYXNrcygpO1xuICAgIGlmIChwcm9qZWN0LmdldFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHAnKS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyBmb3VuZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MgcCcpLmNsYXNzTmFtZSA9ICduby10YXNrcyc7XG4gICAgfVxuXG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kKHRhc2tXcmFwcGVyKTtcbiAgICAgIHRhc2tXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCB0YXNrLnByb2plY3QpO1xuXG4gICAgICBpZiAodGFzay5pc1N0YXJyZWQpIHtcbiAgICAgICAgLy8vLyB0YXNrLmlzU3RhcnJlZFxuICAgICAgICB0YXNrV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZmEtc3RhcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS1yZWd1bGFyJywgJ2ZhLXNvbGlkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgJiYgdGFzayAhPT0gc2VsZWN0ZWRUYXNrKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICBjb25zdCBjaGVja21hcmsgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaXJjbGUtY2hlY2snKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJyk7XG4gICAgICAgIC8vIGNvbnN0IGFjdGlvbnMgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgICAgIGNvbnN0IHRyYXNoID0gdGFza1dyYXBwZXIuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIGNvbnN0IHN0YXIgPSB0YXNrV3JhcHBlci5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zdGFyJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cod3JhcHBlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbWFyayk7XG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRpdGxlLnN0eWxlLmNvbG9yID0gc3VidGV4dENvbG9yO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUYXNrc09wZW5WaWV3KTtcbiAgICAgICAgLy8gYWN0aW9ucy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHN0YXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRUYXNrSGFuZGxlcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9KTtcbiAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbXBvbmVudENvbG9yO1xuXG4gICAgY29uc3QgZm9sZGVyID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyJyk7XG4gICAgZm9sZGVyLmNsYXNzTmFtZSA9ICdmb2xkZXIgZmEtc29saWQgZmEtZm9sZGVyJztcblxuICAgIHByb2plY3RJbmRleCA9IE51bWJlcihwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICBjdXJyUHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG5cbiAgICAvL3Rlc3RpbmcgaWNvbiBvciBmb2xkZXIgbmFtZVxuICAgIC8vIHRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBgwrcgJHtjdXJyUHJvamVjdC5uYW1lfWA7XG4gICAgLy8gdGFza3NUaXRsZS5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHRoZW1lJztcbiAgICAvLyB0YXNrc1RpdGxlLnRleHRDb250ZW50ID0gJ3RvZ2dsZV9vbic7XG5cbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuXG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdENsaWNrKGUpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0KGUpO1xuICAgIHJlbmRlclRhc2tzKGN1cnJQcm9qZWN0KTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICB0b2dnbGVTaWRlQmFyRm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdENsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0Jykuc3R5bGUuYW5pbWF0aW9uID0gJ2Vhc2UtaW4gZm9ybVJpZ2h0IHJldmVyc2UgMC4ycyc7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5zdHlsZS5vcGFjaXR5ID0gJzAuNyc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgICBkZWxldGVQcm9qZWN0KGUpO1xuICAgICAgcmVzZXRQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcblxuICAgICAgLy8gc2hvd0FsbChlKTtcblxuICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCB8fCBjdXJyUHJvamVjdCA9PT0gYWxsVGFza3NMaXN0KSB7XG4gICAgICAgIGdldEFsbFRhc2tzKCk7XG4gICAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgICAgICByZXNldEZpbHRlcnMoKTtcbiAgICAgICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICAgICAgLy8gcmVzZXRUYXNrcygpO1xuICAgICAgfSBlbHNlIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0ZXInKTtcbiAgICAgICAgLy8gY3VyclByb2plY3QuaW5kZXggPSAwO1xuICAgICAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgICAgLy8gZ2V0QWxsVGFza3MoKTtcbiAgICAgIH0gZWxzZSB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgfSwgMTAwKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRQcm9qZWN0SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXAnKTtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wJyk7XG5cbiAgICBwcm9qZWN0V3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDbGljayk7XG4gICAgfSk7XG5cbiAgICBlZGl0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVkaXRQcm9qZWN0Q2xpY2spO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURlbGV0ZVByb2plY3RDbGljayk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgLy8gcmVzZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG4gICAgYWRkUHJvamVjdEhhbmRsZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVByb2plY3QoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBpZiAoIWlzUHJvamVjdFZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gc3RvcmVQcm9qZWN0KCk7XG4gICAgcHJvamVjdHMudW5zaGlmdChuZXdQcm9qZWN0KTtcbiAgICBjdXJyUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgY3VyclByb2plY3QuaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKG5ld1Byb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RzSW5kZXgoKTtcblxuICAgIHJlc2V0Rm9ybSgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG5cbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgICAvLyBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIC8vIGlmICghaXNQcm9qZWN0VmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgaWYgKCFuYW1lLnZhbHVlKSB7XG4gICAgICBuYW1lLnNldEN1c3RvbVZhbGlkaXR5KCdUYXNrIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgbmFtZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZSA9IG5hbWUudmFsdWU7XG4gICAgY3VyclByb2plY3QuaW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgcmVzZXRGb3JtKCk7XG4gICAgdG9nZ2xlRWRpdFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcblxuICAgIGNsb3NlU2lkZUJhck1vZGFsKCk7XG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBwcm9qZWN0SW5kZXggPSBOdW1iZXIoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgdXBkYXRlUHJvamVjdHNJbmRleCgpO1xuICAgIC8vIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbMF07XG4gICAgLy8gdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGlzU3RhcnJlZCA9IGZvcm1TdGFyLmNsYXNzTGlzdC5jb250YWlucygnc3RhcnJlZCcpO1xuXG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBub3RlLCBwcm9qZWN0LCBkYXRlLCBpc1N0YXJyZWQpO1xuICB9XG4gIGZ1bmN0aW9uIGFkZFRhc2soZSwgcHJvamVjdCkge1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBzdG9yZVRhc2soKTtcbiAgICBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGZvcm1JbnB1dC52YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2codGVtcCk7XG5cbiAgICBpZiAoZm9ybUlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgYWxsVGFza3NMaXN0LmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkucHVzaChuZXdUYXNrKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBpZiAoIXByb2plY3RGb3JtLmhpZGRlbikge1xuICAgICAgdG9nZ2xlQWRkUHJvamVjdCgpO1xuICAgIH1cbiAgICAvLyByZXNldFByb2plY3RzKCk7XG4gICAgLy8gcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIC8vIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgIC8vIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG5cbiAgICByZXNldEZvcm0oKTtcbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBlZGl0VGFzayhlLCBwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICAgIGlmICghaXNUYXNrVmFsaWQoKSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gc3RvcmVUYXNrKCk7XG4gICAgY29uc3QgdGVtcCA9IHByb2plY3RzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBmb3JtSW5wdXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG4gICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgaWYgKFxuICAgICAgY3VyclByb2plY3QubmFtZSA9PT0gJ1N0YXJyZWQnIHx8XG4gICAgICBjdXJyUHJvamVjdC5uYW1lID09PSAnVG9kYXknIHx8XG4gICAgICBjdXJyUHJvamVjdC5uYW1lID09PSAnV2VlaydcbiAgICApIHtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgaWYgKFxuICAgICAgZm9ybUlucHV0LnZhbHVlICE9PSBwcm9qZWN0Lm5hbWUgJiZcbiAgICAgIGZvcm1JbnB1dC52YWx1ZSAhPT0gJycgJiZcbiAgICAgIGN1cnJQcm9qZWN0ID09PSBhbGxUYXNrc0xpc3RcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0MScpOyAvL2Zyb20gYWxsVGFza3NMaXN0IHRvIHRhcmdldCBwcm9qZWN0IHdoaWxlIGRlbGV0aW5nIGZyb20gb3JpZ2luYWwgcHJvamVjdFxuXG4gICAgICAvLyB0ZW1wLmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG4gICAgICB0ZW1wLmdldFRhc2tzKCkucHVzaChlZGl0ZWRUYXNrKTtcbiAgICAgIGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY3VyclByb2plY3QgPSB0ZW1wO1xuXG4gICAgICBpZiAobGFzdFByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXN0UHJvamVjdC5nZXRUYXNrcygpLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICBsYXN0UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1JbnB1dC52YWx1ZSAhPT0gcHJvamVjdC5uYW1lICYmIGZvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIC8vdHJhbnNmZXIgZnJvbSBwcm9qZWN0IHRvIHByb2plY3QgYW5kIHVwZGF0ZSBhbGxUYXNrc0xpc3RcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0MicpO1xuICAgICAgdGVtcC5nZXRUYXNrcygpLnB1c2goZWRpdGVkVGFzayk7XG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gdGVtcDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QzJyk7IC8vZWRpdCB3aXRoaW4gc2FtZSBwcm9qZWN0XG4gICAgICBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG4gICAgfVxuXG4gICAgaWYgKCFwcm9qZWN0Rm9ybS5oaWRkZW4pIHtcbiAgICAgIHRvZ2dsZUFkZFByb2plY3QoKTtcbiAgICB9XG5cbiAgICByZXNldFByb2plY3RzKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgIC8vIGlmICh1cGRhdGVTZWxlY3RlZEZpbHRlcigpID09PSBmYWxzZSkge1xuICAgIC8vICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgLy8gICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICAvLyB9IGVsc2UgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICB1cGRhdGVQcm9qZWN0c0luZGV4KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgICBzdG9yYWdlKCkuc2F2ZURhdGEoKTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHByb2plY3QpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRhc2tJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gcHJvamVjdC5nZXRUYXNrcygpW3Rhc2tJbmRleF07XG5cbiAgICAvLyBGaW5kIHByb2plY3QgdGFzayBvcmlnaW5hbGx5IGNhbWUgZnJvbVxuICAgIGxldCBwcm9qZWN0VG9EZWxldGVGcm9tO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXRUYXNrcygpLmluY2x1ZGVzKHRhc2tUb0RlbGV0ZSkpIHtcbiAgICAgICAgcHJvamVjdFRvRGVsZXRlRnJvbSA9IHByb2plY3RzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9qZWN0VG9EZWxldGVGcm9tLnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFRvRGVsZXRlRnJvbSAhPT0gY3VyclByb2plY3QpIHtcbiAgICAgIGFsbFRhc2tzTGlzdC5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QsIHRhc2tUb0RlbGV0ZSk7XG5cbiAgICB1cGRhdGVTZWxlY3RlZFByb2plY3QoKTtcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuXG4gICAgc3RvcmFnZSgpLnNhdmVEYXRhKCk7XG4gICAgLy8gc3RvcmFnZSgpLnNhdmVBbGxUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICBpZiAoYWxsVGFza3NMaXN0LmdldFRhc2tzKCkubGVuZ3RoID09PSAwIHx8IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpICE9PSBjdXJyUHJvamVjdCkge1xuICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRhc2tzKTtcbiAgICAgIGNvbnN0IHVuYXNzaWduZWRUYXNrcyA9IGFsbFRhc2tzTGlzdFxuICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09ICcnKTtcbiAgICAgIGNvbnN0IGNvbWJpbmVkVGFza3MgPSBhbGxUYXNrcy5jb25jYXQodW5hc3NpZ25lZFRhc2tzKTtcbiAgICAgIHN0b3JhZ2UoKS5zZXRBbGxUYXNrc0xpc3QoY29tYmluZWRUYXNrcyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QpO1xuICAgICAgLy8gY3VyclByb2plY3QgPSBhbGxUYXNrc0xpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCk7XG4gICAgICBjb25zb2xlLmxvZyhhbGxUYXNrc0xpc3QuZ2V0VGFza3MoKSAhPT0gY3VyclByb2plY3QpO1xuICAgICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzaG93QWxsKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICBzZWxlY3RBbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29tcG9uZW50Q29sb3I7XG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIC8vIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG5cbiAgICBjbG9zZVNpZGVCYXJNb2RhbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhcnJlZFRhc2tzKCkge1xuICAgIGNvbnN0IHN0YXJyZWRUYXNrcyA9IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gdGFzay5pc1N0YXJyZWQpO1xuICAgIGN1cnJQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1N0YXJyZWQnLCBzdGFycmVkVGFza3MpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dTdGFycmVkKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIGdldFN0YXJyZWRUYXNrcygpO1xuICAgIGNvbnN0IHN0YXJyZWRQcm9qZWN0ID0gY3VyclByb2plY3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKHN0YXJyZWRQcm9qZWN0KTtcbiAgICBjdXJyUHJvamVjdCA9IHN0YXJyZWRQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRvZGF5VGFza3MoKSB7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IGFsbFRhc2tzTGlzdFxuICAgICAgLmdldFRhc2tzKClcbiAgICAgIC5maWx0ZXIoKHRhc2spID0+IGlzVG9kYXkocGFyc2VJU08odGFzay5kYXRlKSkpO1xuXG4gICAgY3VyclByb2plY3QgPSBuZXcgUHJvamVjdCgnVG9kYXknLCB0b2RheVRhc2tzKTtcbiAgfVxuICBmdW5jdGlvbiBzaG93VG9kYXkoZSkge1xuICAgIHJlc2V0RmlsdGVycygpO1xuICAgIGdldEFsbFRhc2tzKCk7XG4gICAgZ2V0VG9kYXlUYXNrcygpO1xuICAgIGNvbnN0IHRvZGF5UHJvamVjdCA9IGN1cnJQcm9qZWN0O1xuXG4gICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICByZXNldFByb2plY3RzKCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRhc2tzVmlldyhlKTtcbiAgICByZW5kZXJUYXNrcyh0b2RheVByb2plY3QpO1xuICAgIGN1cnJQcm9qZWN0ID0gdG9kYXlQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdlZWtUYXNrcygpIHtcbiAgICBjb25zdCB3ZWVrVGFza3MgPSBhbGxUYXNrc0xpc3RcbiAgICAgIC5nZXRUYXNrcygpXG4gICAgICAuZmlsdGVyKCh0YXNrKSA9PiBpc1RoaXNXZWVrKHBhcnNlSVNPKHRhc2suZGF0ZSkpKTtcblxuICAgIGN1cnJQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1dlZWsnLCB3ZWVrVGFza3MpO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dXZWVrKGUpIHtcbiAgICByZXNldEZpbHRlcnMoKTtcbiAgICBnZXRBbGxUYXNrcygpO1xuICAgIGdldFdlZWtUYXNrcygpO1xuICAgIGNvbnN0IHdlZWtQcm9qZWN0ID0gY3VyclByb2plY3Q7XG5cbiAgICByZXNldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIHJlc2V0UHJvamVjdHMoKTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgIHJlbmRlclRhc2tzKHdlZWtQcm9qZWN0KTtcbiAgICBjdXJyUHJvamVjdCA9IHdlZWtQcm9qZWN0O1xuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgY2xvc2VTaWRlQmFyTW9kYWwoKTtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBuZXdUaGVtZSk7XG5cbiAgICBjb25zdCB0ZW1wID0gdGhlbWVJY29uLnRleHRDb250ZW50O1xuICAgIHRoZW1lSWNvbi50ZXh0Q29udGVudCA9IHRlbXAgPT09ICd0b2dnbGVfb24nID8gJ3RvZ2dsZV9vZmYnIDogJ3RvZ2dsZV9vbic7XG5cbiAgICBjb21wb25lbnRDb2xvciA9IHdpbmRvd1xuICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoJy0tY29tcG9uZW50Jyk7XG4gICAgcHJpbWFyeUNvbG9yID0gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5Jyk7XG4gICAgLy8gdXBkYXRlT3BlblRhc2soZSk7XG5cbiAgICAvLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tZGF0ZScpKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWRhdGUnKTtcbiAgICBpZiAoZGF0ZS50ZXh0Q29udGVudCA9PT0gJ1Bhc3QgRHVlJykge1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9ICcjRTM0QTRBJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IHByaW1hcnlDb2xvcjtcbiAgICB9XG4gICAgLy8gfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgdXBkYXRlU2VsZWN0ZWRGaWx0ZXIoKTtcbiAgICAvLyByZW5kZXJUYXNrc1ZpZXcoZSk7XG4gIH1cblxuICAvL21vYmlsZVxuICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVGb2N1cygpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLW91dCc7XG5cbiAgICBpZiAodGl0bGVJbnB1dC5tYXRjaGVzKCc6Zm9jdXMnKSB8fCBub3RlSW5wdXQubWF0Y2hlcygnOmZvY3VzJykpIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXN0cmV0Y2gnKTtcbiAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyJyk7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vYmlsZS1zdHJldGNoJyk7XG4gICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyBlYXNlLW91dCc7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXJGb2N1cygpIHtcbiAgICBpZiAocHJvamVjdElucHV0Lm1hdGNoZXMoJzpmb2N1cycpKSB7XG4gICAgICBmaWx0ZXJzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnNIaWRlJyk7XG4gICAgICByZXNldEZpbHRlcnMoKTtcbiAgICB9IGVsc2UgaWYgKCFhZGRQcm9qZWN0QnRuLm1hdGNoZXMoJzphY3RpdmUnKSkge1xuICAgICAgdG9nZ2xlUGx1c0J0bigpO1xuICAgICAgcHJvamVjdEZvcm0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xuICAgICAgLy8gdG9nZ2xlRWRpdFByb2plY3QoKTtcbiAgICAgIHJlc2V0UHJvamVjdHMoKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcnNBcnIgPSBbJ0FsbCcsICdTdGFycmVkJywgJ1RvZGF5JywgJ1dlZWsnXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VyclByb2plY3QubmFtZSA9PT0gZmlsdGVyc0FycltpXSkge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyc0hpZGUnKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRNb2JpbGVBbmltYXRpb25zKCkge1xuICAgIGNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gJyc7XG4gICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXJNb2RhbCgpIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdCk7XG4gICAgLy8gdXBkYXRlU2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XG4gICAgaWYgKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgc2lkZWJhci5zdHlsZS5hbmltYXRpb24gPSAnMC4ycyBmb3JtUmlnaHQgZWFzZS1vdXQnO1xuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JsdXJyZWQnKTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVyKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNldE1vYmlsZUFuaW1hdGlvbnMoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXIuc3R5bGUuYW5pbWF0aW9uID0gJzAuMnMgcmV2ZXJzZSBmb3JtUmlnaHQgZWFzZS1vdXQnO1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdibHVycmVkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXNldE1vYmlsZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgbW9iaWxlTWVudS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbG9zZVNpZGVCYXJNb2RhbCgpIHtcbiAgICBpZiAobW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICB0b2dnbGVTaWRlQmFyTW9kYWwoKTtcbiAgICB9XG4gIH1cbiAgLy9sb2NhbCBzdG9yYWdlXG4gIC8vc2F2ZSB0b2Rvcz9cbiAgZnVuY3Rpb24gaW5pdEludHJvKCkge1xuICAgIGNvbnN0IGludHJvVGFzayA9IG5ldyBUYXNrKFxuICAgICAgJ0NsaWNrIG1lIHRvIGxlYXJuIG1vcmUhJyxcbiAgICAgICcgLSBFeHBhbmQgdGFza3MgdG8gdmlldyBhZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlbS4gXFxuXFxuIC0gV3JpdGUgbm90ZXMsIGFkZCBkYXRlcyBhbmQgc3RhciB0YXNrcyBmcm9tIHRoZSBmb3JtIHBhbmUuIFxcblxcbiAtIFRoYW5rIHlvdSBmb3IgY2hlY2tpbmcgb3V0IG15IHByb2plY3QhJyxcbiAgICAgICdEZWZhdWx0JyxcbiAgICAgICcnLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgY29uc3QgaW50cm9UYXNrVHdvID0gbmV3IFRhc2soXG4gICAgICAnU2lkZWJhciBJbmZvJyxcbiAgICAgICcgLSBGaWx0ZXIgY3JlYXRlZCB0YXNrcyBieSBBbGwsIFN0YXJyZWQsIFRvZGF5IG9yIFdlZWsuIFxcblxcbiAtIEFkZCAgcHJvamVjdHMgYnkgY2xpY2tpbmcgKCspIGFuZCBwcmVzc2luZyBFbnRlci4gXFxuXFxuIC0gSG92ZXIgb3ZlciBleGlzdGluZyBwcm9qZWN0cyB0byBlZGl0IG9yIGRlbGV0ZSB0aGVtLicsXG4gICAgICAnRGVmYXVsdCcsXG4gICAgICAnJyxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGNvbnN0IGludHJvUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XG4gICAgaW50cm9Qcm9qZWN0LmluZGV4ID0gMDtcbiAgICBjdXJyUHJvamVjdCA9IGludHJvUHJvamVjdDtcbiAgICBwcm9qZWN0cy5wdXNoKGludHJvUHJvamVjdCk7XG4gICAgaW50cm9Qcm9qZWN0LmdldFRhc2tzKCkucHVzaChpbnRyb1Rhc2spO1xuICAgIGludHJvUHJvamVjdC5nZXRUYXNrcygpLnB1c2goaW50cm9UYXNrVHdvKTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kUHJvamVjdHMoKSB7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSk7XG4gICAgY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAvLyBhbGxUYXNrc0xpc3QgPSBuZXcgUHJvamVjdCgnQWxsJyk7XG4gICAgICBpbml0SW50cm8oKTtcbiAgICAgIGdldEFsbFRhc2tzKCk7XG4gICAgICBjdXJyUHJvamVjdCA9IGFsbFRhc2tzTGlzdDtcbiAgICAgIC8vIHN0b3JhZ2UoKS5zYXZlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgY29uc29sZS5sb2cobGFzdFByb2plY3QpO1xuICAgICAgc3RvcmFnZSgpLmdldERhdGEoKTtcbiAgICAgIC8vIHN0b3JhZ2UoKS5nZXRBbGxUYXNrcygpO1xuICAgICAgZ2V0QWxsVGFza3MoKTtcbiAgICAgIC8vIGNvbnNvbGUudGFibGUocHJvamVjdHMpO1xuICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmRhdGEpO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsVGFza3NMaXN0KTtcbiAgICAgIGN1cnJQcm9qZWN0ID0gYWxsVGFza3NMaXN0O1xuICAgICAgLy8gY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuICAgICAgLy8gcmVzZXRUYXNrcygpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgICAvLyByZXNldEZpbHRlcnMoKTtcbiAgICAgIC8vIHNlbGVjdEFsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb21wb25lbnRDb2xvcjtcbiAgICAgIC8vIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coY3VyclByb2plY3QubmFtZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RBbGwpO1xuICAgIH1cbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcigpO1xuICB9XG4gIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZVNpZGVCYXJGb2N1cyk7XG4gIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdG9nZ2xlU2lkZUJhckZvY3VzKTtcbiAgbW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGVCYXJNb2RhbCk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVNb2JpbGVGb2N1cyk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgbm90ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlTW9iaWxlRm9jdXMpO1xuICBub3RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZU1vYmlsZUZvY3VzKTtcbiAgdGhlbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVGhlbWUpO1xuICBzZWxlY3RBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsKTtcbiAgc2VsZWN0U3RhcnJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTdGFycmVkKTtcbiAgc2VsZWN0VG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kYXkpO1xuICBzZWxlY3RXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1dlZWspO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWRkUHJvamVjdCk7XG4gIGZvcm1TdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRm9ybVN0YXIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyRm9ybVZpZXcpO1xuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGluY29ycmVjdElucHV0ID0gZmFsc2U7XG4gICAgYWRkVGFzayhlLCBjdXJyUHJvamVjdCk7XG4gIH0pO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBpbmNvcnJlY3RJbnB1dCA9IGZhbHNlO1xuICAgIGVkaXRUYXNrKGUsIGN1cnJQcm9qZWN0KTtcbiAgfSk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XG4gICAgICBjb25zb2xlLmxvZyhpc1Byb2plY3RWYWxpZCgpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRvZXNQcm9qZWN0RXhpc3QoKSk7XG5cbiAgICAgIGlmIChpc1Byb2plY3RWYWxpZCgpKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0FkZCByYW4nKTtcbiAgICAgICAgICAvLyB0b2dnbGVQbHVzQnRuKCk7XG4gICAgICAgICAgcHJvamVjdEZvcm0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0UHJvamVjdCgpO1xuICAgICAgICAgIHRvZ2dsZVBsdXNCdG4oKTtcbiAgICAgICAgICAvLyBwcm9qZWN0Rm9ybS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcbiAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHJhbicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdCgpO1xuICAgICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICAgICAgcmVuZGVyVGFza3MoY3VyclByb2plY3QpO1xuICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAvLyByZXNldFByb2plY3RzKCk7XG4gICAgICAvLyByZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICBmaW5kUHJvamVjdHMoKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlc2V0VGFza3MoKTtcbiAgICByZW5kZXJUYXNrcyhjdXJyUHJvamVjdCk7XG4gICAgcmVuZGVyVGFza3NWaWV3KGUpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIHJlbW92ZVRhc2soc2VsZWN0ZWRUYXNrKSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSBzZWxlY3RlZFRhc2sudGl0bGVcbiAgICApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFza01vZGVsJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdE1vZGVsJztcblxubGV0IHByb2plY3RzID0gW107XG5sZXQgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlKCkge1xuICBsZXQgZGF0YSA9IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrczogcHJvamVjdHMuZmxhdE1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUYXNrcygpKSxcbiAgICBhbGw6IGFsbFRhc2tzTGlzdC5nZXRUYXNrcygpLFxuICB9O1xuXG4gIGZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcblxuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlZFRhc2tzID0gcHJvamVjdC50YXNrcy5tYXAoXG4gICAgICAgICh0YXNrKSA9PlxuICAgICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICAgIHRhc2subm90ZSxcbiAgICAgICAgICAgIHRhc2sucHJvamVjdCxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaXNTdGFycmVkLFxuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHN0b3JlZFRhc2tzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZGF0YS5hbGwubWFwKFxuICAgICAgKHRhc2spID0+XG4gICAgICAgIG5ldyBUYXNrKFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5ub3RlLFxuICAgICAgICAgIHRhc2sucHJvamVjdCxcbiAgICAgICAgICB0YXNrLmRhdGUsXG4gICAgICAgICAgdGFzay5pc1N0YXJyZWQsXG4gICAgICAgICAgdGFzay5pc0NvbXBsZXRlXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZGF0YS5wcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzO1xuICAgIGRhdGEudGFza3MgPSBzdG9yZWRQcm9qZWN0cy5mbGF0TWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgIGRhdGEuYWxsID0gYWxsVGFza3M7XG4gICAgcHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0cztcbiAgICBhbGxUYXNrc0xpc3QgPSBuZXcgUHJvamVjdCgnQWxsJywgYWxsVGFza3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWxsVGFza3NMaXN0KHRhc2tzKSB7XG4gICAgYWxsVGFza3NMaXN0ID0gbmV3IFByb2plY3QoJ0FsbCcsIHRhc2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YSxcbiAgICBzYXZlRGF0YSxcbiAgICBwcm9qZWN0cyxcbiAgICBhbGxUYXNrc0xpc3QsXG4gICAgc2V0QWxsVGFza3NMaXN0LFxuICB9O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgYWxsVGFza3NMaXN0IH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUsIHByb2plY3QsIGRhdGUsIGlzU3RhcnJlZCA9IGZhbHNlLCBpc0NvbXBsZXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5pc1N0YXJyZWQgPSBpc1N0YXJyZWQ7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICB9XG5cbiAgZ2V0SXNTdGFycmVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3RhcnJlZDtcbiAgfVxuXG4gIGdldElzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi9tb2RlbHMvc3RvcmFnZU1vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGRpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpY29uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkaXYoKTtcbiAgd3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSk7XG4gIHRleHQuY2xhc3NOYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4gIHRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIGNvbnN0IGZvbGRlciA9IGljb24oKTtcbiAgZm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcicsICdmYS1yZWd1bGFyJywgJ2ZhLWZvbGRlcicpO1xuICBjb25zdCBncm91cCA9IGRpdigpO1xuICBncm91cC5jbGFzc05hbWUgPSAncHJvamVjdC1idG4tZ3JwJztcbiAgY29uc3QgZWRpdCA9IGljb24oKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJywgJ2VkaXQtcCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgY29uc3QgdHJhc2ggPSBpY29uKCk7XG4gIHRyYXNoLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZGVsZXRlLXAnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIHRyYXNoLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG5cbiAgY29uc3Qgb3B0aW9uID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHBpY2sgPSBvcHRpb24oKTtcbiAgcGljay52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgcGljay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hcHBlbmRDaGlsZChwaWNrKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ3JwJykuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kKGZvbGRlciwgdGV4dCwgZ3JvdXApO1xuICBncm91cC5hcHBlbmQoZWRpdCwgdHJhc2gpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNoZWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICB0YXNrV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LmluZGV4T2YodGFzaykpO1xuICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGNoZWNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUtY2hlY2snKTtcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jaXJjbGUtY2hlY2snKTtcbiAgfSBlbHNlIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLWNpcmNsZScpO1xuICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnLCAnZWRpdCcsICdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgdHJhc2guY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycsICdkZWxldGUnLCAnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gIHRyYXNoLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1zdGFyJyk7XG5cbiAgdGFza1dyYXBwZXIuYXBwZW5kKGNoZWNrV3JhcHBlciwgdGl0bGUsIGFjdGlvbnMpO1xuICBjaGVja1dyYXBwZXIuYXBwZW5kKGlucHV0LCBjaGVja21hcmspO1xuICBhY3Rpb25zLmFwcGVuZChlZGl0LCB0cmFzaCwgc3Rhcik7XG5cbiAgcmV0dXJuIHRhc2tXcmFwcGVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCBhcHBDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9hcHAnO1xuXG5hcHBDb250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=