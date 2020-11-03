(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-aplicaciones-web-aplicaciones-web-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/aplicaciones-web/aplicaciones-web.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/aplicaciones-web/aplicaciones-web.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasAplicacionesWebAplicacionesWebPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n   \n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\" slot=\"start\">Aplicaciones Web</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"llamada()\" class=\"bordered\" fill=\"solid\" color=\"secondary\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n \n<ion-content>\n  <div class=\"slides ion-margin-bottom\">\n    <ion-slides [options]=\"slidesOptions\">\n      <ion-slide>\n        <div>\n          <img src=\"../assets/img/aw1.png\">\n          <p style=\"font-size: 10px;\">Una aplicación móvil con una aplicación web, te imaginas</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n            <div >\n              <img src=\"../assets/img/aw2.png\">\n              <p style=\"font-size: 10px;\">Finanzas controladas, dinero seguro</p>\n            </div>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  <div class=\"container\">\n\n  <h2 style=\"text-align: center;\">¿Porque una aplicación web?</h2>\n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"../assets/img/appw.jpg\" style=\"width:80%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p>Lo hacemos seguro</p>\n    <p>Menos fugas de dinero</p>\n    <p>Más ganancias</p>\n    <p>Más control en tus productos</p>\n  </div>\n\n  <br>\n\n    <h2 style=\"text-align: center;\">¡Accede en cualquier dispositivo!</h2>\n\n    <div style=\"text-align: center;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"../assets/img/aw3.jpg\">\n          </ion-col>\n          <ion-col>\n            <p style=\"font-size: 15px;\">Ya sea desde tu negocio o desde tu hogar</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-grid> \n        <ion-row>\n          <ion-col>\n            <p style=\"font-size: 15px;\">Entra y verifica tus datos desde cualquier dispositivo portatil</p>\n          </ion-col>\n          <ion-col>\n            <img src=\"../assets/img/aw4.jpg\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </div>\n\n    <br>\n\n    <div style=\"text-align: center;\">\n      <ion-button (click)=\"mensaje()\" class=\"bordered\" color=\"secondary\">\n        <p style=\"text-transform: capitalize;\">Envianos un mensaje</p>\n      </ion-button>\n    </div>\n\n    <br>\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/paginas/aplicaciones-web/aplicaciones-web-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/paginas/aplicaciones-web/aplicaciones-web-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AplicacionesWebPageRoutingModule */

    /***/
    function srcAppPaginasAplicacionesWebAplicacionesWebRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AplicacionesWebPageRoutingModule", function () {
        return AplicacionesWebPageRoutingModule;
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


      var _aplicaciones_web_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aplicaciones-web.page */
      "./src/app/paginas/aplicaciones-web/aplicaciones-web.page.ts");

      var routes = [{
        path: '',
        component: _aplicaciones_web_page__WEBPACK_IMPORTED_MODULE_3__["AplicacionesWebPage"]
      }];

      var AplicacionesWebPageRoutingModule = function AplicacionesWebPageRoutingModule() {
        _classCallCheck(this, AplicacionesWebPageRoutingModule);
      };

      AplicacionesWebPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AplicacionesWebPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/aplicaciones-web/aplicaciones-web.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/paginas/aplicaciones-web/aplicaciones-web.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AplicacionesWebPageModule */

    /***/
    function srcAppPaginasAplicacionesWebAplicacionesWebModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AplicacionesWebPageModule", function () {
        return AplicacionesWebPageModule;
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


      var _aplicaciones_web_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aplicaciones-web-routing.module */
      "./src/app/paginas/aplicaciones-web/aplicaciones-web-routing.module.ts");
      /* harmony import */


      var _aplicaciones_web_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./aplicaciones-web.page */
      "./src/app/paginas/aplicaciones-web/aplicaciones-web.page.ts");

      var AplicacionesWebPageModule = function AplicacionesWebPageModule() {
        _classCallCheck(this, AplicacionesWebPageModule);
      };

      AplicacionesWebPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aplicaciones_web_routing_module__WEBPACK_IMPORTED_MODULE_5__["AplicacionesWebPageRoutingModule"]],
        declarations: [_aplicaciones_web_page__WEBPACK_IMPORTED_MODULE_6__["AplicacionesWebPage"]]
      })], AplicacionesWebPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/aplicaciones-web/aplicaciones-web.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/paginas/aplicaciones-web/aplicaciones-web.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasAplicacionesWebAplicacionesWebPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-content {\n  --background: linear-gradient(90deg, rgba(1,135,138,1) 0%, rgba(0,156,173,1) 35%, rgba(125,188,213,1) 100%);\n}\nion-content .slides {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  text-align: -webkit-center;\n  box-shadow: none;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\nion-content ion-card .main {\n  width: 100px;\n  height: 100px;\n  /*         border-radius: 50px;\n          background: #FFFFFF;\n          box-shadow:  7px 7px 20px #dbdfe2, \n                 -7px -7px 20px #ffffff; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-card .main img {\n  width: 100px;\n}\nion-content ion-card .files {\n  padding-top: 14px;\n}\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 14px;\n}\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\nion-content .container h2 {\n  padding-bottom: 8px;\n}\nion-content .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hcGxpY2FjaW9uZXMtd2ViL2FwbGljYWNpb25lcy13ZWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQUhSO0FBUU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVlFO0VBQ0UsMkdBQUE7QUFUSjtBQVdJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBVE47QUFZSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQVZOO0FBV007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNSOzs7MENBQUE7RUFLUSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZSO0FBWVE7RUFDRSxZQUFBO0FBVlY7QUFlTTtFQUNJLGlCQUFBO0FBYlY7QUFrQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFoQk47QUFrQk07RUFDRSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7QUFrQlE7RUFDRSxjQUFBO0FBaEJWO0FBa0JVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBaEJaO0FBa0JVO0VBQ0UsZ0NBQUE7QUFoQlo7QUFzQk07RUFDRSxtQkFBQTtBQXBCUjtBQXlCSTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUF2Qk4iLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2FwbGljYWNpb25lcy13ZWIvYXBsaWNhY2lvbmVzLXdlYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHJcbiAgXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEsMTM1LDEzOCwxKSAwJSwgcmdiYSgwLDE1NiwxNzMsMSkgMzUlLCByZ2JhKDEyNSwxODgsMjEzLDEpIDEwMCUpO1xyXG4gIFxyXG4gICAgLnNsaWRlcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4OyBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgIC5tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLyogICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIDdweCA3cHggMjBweCAjZGJkZmUyLCBcclxuICAgICAgICAgICAgICAgLTdweCAtN3B4IDIwcHggI2ZmZmZmZjsgKi9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcbiAgICAgIC5maWxlcyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyZWQge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/paginas/aplicaciones-web/aplicaciones-web.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/paginas/aplicaciones-web/aplicaciones-web.page.ts ***!
      \*******************************************************************/

    /*! exports provided: AplicacionesWebPage */

    /***/
    function srcAppPaginasAplicacionesWebAplicacionesWebPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AplicacionesWebPage", function () {
        return AplicacionesWebPage;
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

      var AplicacionesWebPage = /*#__PURE__*/function () {
        function AplicacionesWebPage(callNumber, emailComposer) {
          _classCallCheck(this, AplicacionesWebPage);

          this.callNumber = callNumber;
          this.emailComposer = emailComposer;
          this.slidesOptions = {
            slidesPerView: 1.5
          };
        }

        _createClass(AplicacionesWebPage, [{
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

        return AplicacionesWebPage;
      }();

      AplicacionesWebPage.ctorParameters = function () {
        return [{
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]
        }];
      };

      AplicacionesWebPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aplicaciones-web',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./aplicaciones-web.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/aplicaciones-web/aplicaciones-web.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./aplicaciones-web.page.scss */
        "./src/app/paginas/aplicaciones-web/aplicaciones-web.page.scss"))["default"]]
      })], AplicacionesWebPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-aplicaciones-web-aplicaciones-web-module-es5.js.map