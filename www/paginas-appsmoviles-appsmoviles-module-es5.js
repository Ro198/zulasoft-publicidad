(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-appsmoviles-appsmoviles-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/appsmoviles/appsmoviles.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/appsmoviles/appsmoviles.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasAppsmovilesAppsmovilesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n   \n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\" slot=\"start\">Aplicaciones móviles</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"llamada()\" class=\"bordered\" fill=\"solid\" color=\"secondary\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"slides ion-margin-bottom\">\n    <ion-slides [options]=\"slidesOptions\">\n      <ion-slide>\n        <div>\n          <img src=\"../assets/img/A1.png\">\n          <p style=\"font-size: 10px;\">Desarrollamos ideas sensacionales</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n            <div >\n              <img src=\"../assets/img/A31.png\">\n              <p style=\"font-size: 10px;\">Tu idea, tu futuro</p>\n            </div>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  <div class=\"container\">\n\n  <h2>Cualidades</h2>\n  \n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"ribbon-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Calidad</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"headset-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Servicio</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Funcionalidad</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"lock-closed-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Seguridad</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"people-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Marketing optimizado</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"3\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"repeat-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-label>\n\t\t\t\t\t\t\t<h4>Actualizaciones</h4>\n\t\t\t\t\t\t</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <h2>¿Como lo hago?</h2>\n\n    <ion-slides [options]=\"slidesOptions\" style=\"width: 350px;\">\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/c1.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>1. Contactanos</p>\n            <p>2. Cuéntanos tu idea</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/c2.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>3. Te creamos una propuesta</p>\n            <p>4. Desarrollamos tu idea</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/c3.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>5. Probamos tu proyecto</p>\n            <p>6. Aplicación Terminada</p>\n          </ion-card-content> \n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n\n    <br>\n\n    <div style=\"text-align: center;\">\n      <ion-button (click)=\"mensaje()\" class=\"bordered\" color=\"secondary\">\n        <p style=\"text-transform: capitalize;\">Envianos un mensaje</p>\n      </ion-button>\n    </div>\n\n    <br>\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/paginas/appsmoviles/appsmoviles-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/paginas/appsmoviles/appsmoviles-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AppsmovilesPageRoutingModule */

    /***/
    function srcAppPaginasAppsmovilesAppsmovilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsmovilesPageRoutingModule", function () {
        return AppsmovilesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _appsmoviles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./appsmoviles.page */
      "./src/app/paginas/appsmoviles/appsmoviles.page.ts");

      var routes = [{
        path: '',
        component: _appsmoviles_page__WEBPACK_IMPORTED_MODULE_3__["AppsmovilesPage"]
      }];

      var AppsmovilesPageRoutingModule = function AppsmovilesPageRoutingModule() {
        _classCallCheck(this, AppsmovilesPageRoutingModule);
      };

      AppsmovilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppsmovilesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/appsmoviles/appsmoviles.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/appsmoviles/appsmoviles.module.ts ***!
      \***********************************************************/

    /*! exports provided: AppsmovilesPageModule */

    /***/
    function srcAppPaginasAppsmovilesAppsmovilesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsmovilesPageModule", function () {
        return AppsmovilesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _appsmoviles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./appsmoviles-routing.module */
      "./src/app/paginas/appsmoviles/appsmoviles-routing.module.ts");
      /* harmony import */


      var _appsmoviles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./appsmoviles.page */
      "./src/app/paginas/appsmoviles/appsmoviles.page.ts");

      var AppsmovilesPageModule = function AppsmovilesPageModule() {
        _classCallCheck(this, AppsmovilesPageModule);
      };

      AppsmovilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _appsmoviles_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppsmovilesPageRoutingModule"]],
        declarations: [_appsmoviles_page__WEBPACK_IMPORTED_MODULE_6__["AppsmovilesPage"]]
      })], AppsmovilesPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/appsmoviles/appsmoviles.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/appsmoviles/appsmoviles.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasAppsmovilesAppsmovilesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-content {\n  --background: linear-gradient(90deg, rgba(1,135,138,1) 0%, rgba(0,156,173,1) 35%, rgba(125,188,213,1) 100%);\n}\nion-content .slides {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  text-align: -webkit-center;\n  box-shadow: none;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\nion-content ion-card .main {\n  width: 100px;\n  height: 100px;\n  /*         border-radius: 50px;\n          background: #FFFFFF;\n          box-shadow:  7px 7px 20px #dbdfe2, \n                 -7px -7px 20px #ffffff; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-card .main img {\n  width: 100px;\n}\nion-content ion-card .files {\n  padding-top: 14px;\n}\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 14px;\n}\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\nion-content .container h2 {\n  padding-bottom: 8px;\n}\nion-content .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hcHBzbW92aWxlcy9hcHBzbW92aWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBSFI7QUFRTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQU5SO0FBWUU7RUFDRSwyR0FBQTtBQVRKO0FBV0k7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFUTjtBQVlJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBVk47QUFXTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ1I7OzswQ0FBQTtFQUtRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVlI7QUFZUTtFQUNFLFlBQUE7QUFWVjtBQWVNO0VBQ0ksaUJBQUE7QUFiVjtBQWtCSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWhCTjtBQWtCTTtFQUNFLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQWtCUTtFQUNFLGNBQUE7QUFoQlY7QUFrQlU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFoQlo7QUFrQlU7RUFDRSxnQ0FBQTtBQWhCWjtBQXNCTTtFQUNFLG1CQUFBO0FBcEJSO0FBeUJJO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQXZCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYXBwc21vdmlsZXMvYXBwc21vdmlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblxyXG4gIFxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAuYm9yZGVyZWQge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxLDEzNSwxMzgsMSkgMCUsIHJnYmEoMCwxNTYsMTczLDEpIDM1JSwgcmdiYSgxMjUsMTg4LDIxMywxKSAxMDAlKTtcclxuICBcclxuICAgIC5zbGlkZXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDsgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgICAubWFpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8qICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICA3cHggN3B4IDIwcHggI2RiZGZlMiwgXHJcbiAgICAgICAgICAgICAgIC03cHggLTdweCAyMHB4ICNmZmZmZmY7ICovXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIFxyXG4gICAgICAuZmlsZXMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgXHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAxNHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gIFxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42Nik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgLmJvcmRlcmVkIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/paginas/appsmoviles/appsmoviles.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/appsmoviles/appsmoviles.page.ts ***!
      \*********************************************************/

    /*! exports provided: AppsmovilesPage */

    /***/
    function srcAppPaginasAppsmovilesAppsmovilesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsmovilesPage", function () {
        return AppsmovilesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");

      var AppsmovilesPage = /*#__PURE__*/function () {
        function AppsmovilesPage(callNumber, emailComposer) {
          _classCallCheck(this, AppsmovilesPage);

          this.callNumber = callNumber;
          this.emailComposer = emailComposer;
          this.slidesOptions = {
            slidesPerView: 1.5
          };
        }

        _createClass(AppsmovilesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "llamada",
          value: function llamada() {
            this.callNumber.callNumber("3521531486", true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          }
        }, {
          key: "mensaje",
          value: function mensaje() {
            this.emailComposer.addAlias("gmail", "com.google.android.gm");
            this.emailComposer.isAvailable().then(function (available) {
              if (available) {//Now we know we can send
              }
            });
            var email = {
              to: "contacto@zulasoft.com",
              //from: 'mipet@grandpet.com',
              //cc: 'info@grandpet.com',
              attachments: [
                /* "file://img/mipet.png" */
                //'res://petchico.png',
                //'base64:pet.png//iVBORw0KGgoAAAANSUhEUg...',
              ],
              subject: "Asunto",
              body: "Hola buen día. <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> ¡Este mensaje se ha enviado desde la aplicación de Zulasoft!",
              isHtml: true
            }; // Send a text message using default options

            this.emailComposer.open(email);
          }
        }]);

        return AppsmovilesPage;
      }();

      AppsmovilesPage.ctorParameters = function () {
        return [{
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]
        }];
      };

      AppsmovilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appsmoviles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./appsmoviles.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/appsmoviles/appsmoviles.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./appsmoviles.page.scss */
        "./src/app/paginas/appsmoviles/appsmoviles.page.scss"))["default"]]
      })], AppsmovilesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-appsmoviles-appsmoviles-module-es5.js.map