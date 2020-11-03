(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-menu-menu-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menu/menu.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menu/menu.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n\n\n  <ion-header translucent=\"true\" mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-title slot=\"start\">Servicios</ion-title>\n\n    <ion-button slot=\"end\" routerLink=\"/menuinicio\" color=\"secondary\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-button>\n\n    <ion-button slot=\"end\" routerLink=\"/notificaciones\" color=\"secondary\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n    </ion-button>\n    \n    <ion-button slot=\"end\" (click)=\"mensaje()\" color=\"secondary\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button slot=\"end\" (click)=\"llamada()\" color=\"secondary\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-button>\n\n  </ion-toolbar>\n \n</ion-header>  \n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n\n      <img src=\"../assets/img/movil.jpg\">\n\n      <ion-card-subtitle>Zulasoft</ion-card-subtitle>\n      <ion-card-title>Aplicaciones Móviles</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Tu idea, es nuestra motivación, nuestra cualidad es la transformación de tu idea en algo espectacular.\n    </ion-card-content>\n    <div style=\"text-align: center;\">\n      <ion-button routerLink=\"/appsmoviles\">\n        <ion-icon name=\"log-in-outline\"></ion-icon> más...\n      </ion-button>\n    </div>\n    <br>\n  </ion-card>\n\n  \n  <ion-card>\n    <ion-card-header>\n\n      <img src=\"../assets/img/web.png\">\n\n      <ion-card-subtitle>Zulasoft</ion-card-subtitle>\n      <ion-card-title>Paginas Web</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Te imaginas a tu negocio con un toque del futuro, donde hay un mundo de posibilidades y prosperidad. \n    </ion-card-content>\n    <div style=\"text-align: center;\">\n      <ion-button routerLink=\"/paginasweb\">\n        <ion-icon name=\"log-in-outline\"></ion-icon> más...\n      </ion-button>\n    </div>\n    <br>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n\n      <img src=\"../assets/img/soporte.png\">\n\n      <ion-card-subtitle>Zulasoft</ion-card-subtitle>\n      <ion-card-title>Soporte y Mantenimiento</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Un mantenimiento adecuado para tu equipo de computo es muy importante, ya que extendera la vida de tu equipo por muchos años.\n    </ion-card-content>\n    <div style=\"text-align: center;\">\n      <ion-button routerLink=\"/soporte\">\n        <ion-icon name=\"log-in-outline\"></ion-icon> más...\n      </ion-button>\n    </div>\n    <br>\n  </ion-card>\n \n\n</ion-content>\n\n\n<!-- <img class=\"bg-header animated fadeIn\" src=\"assets/img/bg-header.png\" alt=\"\"> -->";
      /***/
    },

    /***/
    "./src/app/paginas/menu/menu-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/paginas/menu/menu-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MenuPageRoutingModule */

    /***/
    function srcAppPaginasMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
        return MenuPageRoutingModule;
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


      var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/paginas/menu/menu.page.ts");

      var routes = [{
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
      }];

      var MenuPageRoutingModule = function MenuPageRoutingModule() {
        _classCallCheck(this, MenuPageRoutingModule);
      };

      MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/menu/menu.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/paginas/menu/menu.module.ts ***!
      \*********************************************/

    /*! exports provided: MenuPageModule */

    /***/
    function srcAppPaginasMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
        return MenuPageModule;
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


      var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-routing.module */
      "./src/app/paginas/menu/menu-routing.module.ts");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/paginas/menu/menu.page.ts");

      var MenuPageModule = function MenuPageModule() {
        _classCallCheck(this, MenuPageModule);
      };

      MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
      })], MenuPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/menu/menu.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/paginas/menu/menu.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbWVudS9tZW51LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/paginas/menu/menu.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/paginas/menu/menu.page.ts ***!
      \*******************************************/

    /*! exports provided: MenuPage */

    /***/
    function srcAppPaginasMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
        return MenuPage;
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

      var MenuPage = /*#__PURE__*/function () {
        function MenuPage(callNumber, emailComposer) {
          _classCallCheck(this, MenuPage);

          this.callNumber = callNumber;
          this.emailComposer = emailComposer;
        }

        _createClass(MenuPage, [{
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

        return MenuPage;
      }();

      MenuPage.ctorParameters = function () {
        return [{
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]
        }];
      };

      MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/menu/menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu.page.scss */
        "./src/app/paginas/menu/menu.page.scss"))["default"]]
      })], MenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-menu-menu-module-es5.js.map