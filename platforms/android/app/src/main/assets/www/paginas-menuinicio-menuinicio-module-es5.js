(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-menuinicio-menuinicio-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menuinicio/menuinicio.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menuinicio/menuinicio.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasMenuinicioMenuinicioPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <div style=\"text-align: left; margin-top: 10px;\">\n      <img src=\"../assets/img/zulasoft2.png\" style=\"width:45%;\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge class=\"btnfloat\">\n    <ion-fab-button>\n      <ion-icon name=\"cloudy-outline\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"start\">\n      <ion-fab-button onclick=\"window.open('https:www.facebook.com/zulasoft','_system','location=yes')\">\n                   <ion-icon name=\"logo-facebook\" style=\"color: blue;\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n  <!--  <ion-segment>\n    <ion-segment-button >\n      <ion-label>Servicios</ion-label>\n    </ion-segment-button>\n    <ion-segment-button >\n      <ion-label>Nosotros</ion-label>\n    </ion-segment-button>\n    <ion-segment-button >\n      <ion-label>Box Office</ion-label>\n    </ion-segment-button>\n  </ion-segment>  -->\n  \n<div style=\"text-align: center;\"> \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"bordered\" routerLink=\"/nosotros\" color=\"secondary\">\n          <p style=\"text-transform: capitalize;\">Nosotros</p>\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"bordered\" routerLink=\"/politicas\" color=\"secondary\">\n          <p style=\"text-transform: capitalize;\">Politicas</p>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-button class=\"bordered\" fill=\"solid\" routerLink=\"/notificaciones\" color=\"warning\">\n              <ion-icon name=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          <p style=\"font-size: 10px;\">Notifcaciones</p>\n        </ion-col>\n        <ion-col>\n            <ion-button (click)=\"mensaje()\" color=\"primary\" class=\"bordered\" fill=\"solid\">\n              <ion-icon name=\"mail-outline\"></ion-icon>\n            </ion-button>\n          <p style=\"font-size: 10px;\">Enviar mensaje</p>\n        </ion-col>\n        <ion-col>\n            <ion-button (click)=\"llamada()\" color=\"success\" class=\"bordered\" fill=\"solid\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-button>\n          <p style=\"font-size: 10px;\">Hacer llamada</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-slides [options]=\"options\">   \n    <ion-slide>     \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"../assets/img/movil.png\" alt=\"\" routerLink=\"/appsmoviles\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\" style=\"color: teal;\">Aplicaciones Móviles</h5>\n            <p class=\"ion-no-margin rate\">\n              Tu idea, es nuestra motivación.\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"../assets/img/web.jpg\" alt=\"\" routerLink=\"/paginasweb\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\" style=\"color: teal;\">Paginas Web</h5>\n            <p class=\"ion-no-margin rate\">\n              Tienes muchas probabilidades de ganar.\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    \n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"../assets/img/soporte.png\" alt=\"\" routerLink=\"/soporte\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\" style=\"color: teal;\">Soporte</h5>\n            <p class=\"ion-no-margin rate\">\n              Larga vida a tu equipo de computo.\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    \n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"../assets/img/appsweb.png\" alt=\"\" routerLink=\"/aplicaciones-web\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\" style=\"color: teal;\">Aplicaciones Web</h5>\n            <p class=\"ion-no-margin rate\">\n              Todo conectado en un mismo lugar.\n            </p>\n          </ion-col>\n        </ion-row>  \n      </ion-grid> \n    </ion-slide>\n    \n  </ion-slides>\n\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/paginas/menuinicio/menuinicio-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/paginas/menuinicio/menuinicio-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MenuinicioPageRoutingModule */

    /***/
    function srcAppPaginasMenuinicioMenuinicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuinicioPageRoutingModule", function () {
        return MenuinicioPageRoutingModule;
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


      var _menuinicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menuinicio.page */
      "./src/app/paginas/menuinicio/menuinicio.page.ts");

      var routes = [{
        path: '',
        component: _menuinicio_page__WEBPACK_IMPORTED_MODULE_3__["MenuinicioPage"]
      }];

      var MenuinicioPageRoutingModule = function MenuinicioPageRoutingModule() {
        _classCallCheck(this, MenuinicioPageRoutingModule);
      };

      MenuinicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuinicioPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/menuinicio/menuinicio.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/menuinicio/menuinicio.module.ts ***!
      \*********************************************************/

    /*! exports provided: MenuinicioPageModule */

    /***/
    function srcAppPaginasMenuinicioMenuinicioModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuinicioPageModule", function () {
        return MenuinicioPageModule;
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


      var _menuinicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menuinicio-routing.module */
      "./src/app/paginas/menuinicio/menuinicio-routing.module.ts");
      /* harmony import */


      var _menuinicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menuinicio.page */
      "./src/app/paginas/menuinicio/menuinicio.page.ts");

      var MenuinicioPageModule = function MenuinicioPageModule() {
        _classCallCheck(this, MenuinicioPageModule);
      };

      MenuinicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menuinicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuinicioPageRoutingModule"]],
        declarations: [_menuinicio_page__WEBPACK_IMPORTED_MODULE_6__["MenuinicioPage"]]
      })], MenuinicioPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/menuinicio/menuinicio.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/menuinicio/menuinicio.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasMenuinicioMenuinicioPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment {\n  margin: 0 10px;\n}\n\nion-segment-button {\n  text-transform: capitalize;\n  transform: scale(0.8, 0.8);\n  --indicator-color: transparent;\n  color: #969696;\n}\n\nion-segment-button ion-label {\n  position: relative;\n  left: -17px;\n  font-weight: bolder;\n}\n\n.segment-button-checked {\n  color: #333;\n}\n\n.segment-button-checked:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50%;\n  border-bottom: 4px solid #333;\n}\n\n/*  ion-badge {\n   padding: 8px 0;\n   border-radius: 18px;\n   color: #8c8c8c;\n   border: 1px solid #8c8c8c;\n   width: 100%;\n   text-align: center;\n } */\n\n.poster-col {\n  height: 350px;\n}\n\n.poster-col img {\n  border-radius: 40px;\n}\n\n.rate {\n  font-size: 14px;\n  padding-top: 4px;\n  /* ion-icon {\n    color: gold;\n  } */\n}\n\nh5 {\n  margin-top: 4px;\n}\n\n.swiper-slide-prev {\n  opacity: 0.5;\n  transform: rotate(-8deg);\n}\n\n.swiper-slide-next {\n  opacity: 0.5;\n  transform: rotate(8deg);\n}\n\n.swiper-slide {\n  transition: 0.4s all;\n}\n\n.bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n\n.btnfloat {\n  margin-top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZW51aW5pY2lvL21lbnVpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBSUM7Ozs7Ozs7SUFBQTs7QUFTQztFQUNFLGFBQUE7QUFGSjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQTs7S0FBQTtBQURKOztBQU1FO0VBQ0UsZUFBQTtBQUhKOztBQVFFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRRTtFQUNFLG9CQUFBO0FBTEo7O0FBUUU7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBTEo7O0FBUUU7RUFDRSxpQkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9tZW51aW5pY2lvL21lbnVpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgsLjgpO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xN3B4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMzMzO1xyXG4gIFxyXG4gIH1cclxuICBcclxuIC8qICBpb24tYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC5wb3N0ZXItY29sIHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIFxyXG4gICAgLyogaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgIH0gKi9cclxuICB9XHJcbiAgXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuc3dpcGVyLXNsaWRlLXByZXYge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2lwZXItc2xpZGUtbmV4dCB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gIH1cclxuICBcclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIHRyYW5zaXRpb246IC40cyBhbGw7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyZWQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIC5idG5mbG9hdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/paginas/menuinicio/menuinicio.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/menuinicio/menuinicio.page.ts ***!
      \*******************************************************/

    /*! exports provided: MenuinicioPage */

    /***/
    function srcAppPaginasMenuinicioMenuinicioPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuinicioPage", function () {
        return MenuinicioPage;
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

      var MenuinicioPage = /*#__PURE__*/function () {
        function MenuinicioPage(callNumber, emailComposer) {
          _classCallCheck(this, MenuinicioPage);

          this.callNumber = callNumber;
          this.emailComposer = emailComposer;
          this.options = {
            centeredSlides: true,
            loop: true,
            spaceBetween: -100
          };
        }

        _createClass(MenuinicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
        }, {
          key: "llamada",
          value: function llamada() {
            this.callNumber.callNumber("3521531486", true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          }
        }]);

        return MenuinicioPage;
      }();

      MenuinicioPage.ctorParameters = function () {
        return [{
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]
        }];
      };

      MenuinicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menuinicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menuinicio.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menuinicio/menuinicio.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menuinicio.page.scss */
        "./src/app/paginas/menuinicio/menuinicio.page.scss"))["default"]]
      })], MenuinicioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-menuinicio-menuinicio-module-es5.js.map