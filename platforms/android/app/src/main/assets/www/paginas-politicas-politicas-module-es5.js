(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-politicas-politicas-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/politicas/politicas.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/politicas/politicas.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasPoliticasPoliticasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n   \n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\" slot=\"start\">Politicas</ion-title>\n\n\t\t<!-- <ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"llamada()\" class=\"bordered\" fill=\"solid\" color=\"secondary\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n \n<ion-content fullscreen>\n\n  <div style=\"text-align: center;\">\n    <img src=\"../assets/img/zulasoft2.png\" style=\"width:35%;\">\n  </div> \n\n<ion-card class=\"ion-padding card1\">\n  <ion-card-content>\n\n    <h2><ion-icon name=\"information-outline\"></ion-icon> Uso de la información recogida</h2>\n\n    <p style=\"text-align: justify;\">\n      Nuestro sitio web Zulasoft emplea la información con el fin de proporcionar el mejor servicio posible, \n      particularmente para mantener y mejorar nuestros productos y servicios. Es posible que se envíen correos \n      electrónicos periódicamente a través de nuestro sitio web Zulasoft, con ofertas especiales, nuevas \n      aplicaciones y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún \n      beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados \n      en cualquier momento.\n    </p>\n\n    <br>\n\n    <h2><ion-icon name=\"lock-closed-outline\"></ion-icon> Protección de datos</h2>\n\n    <p style=\"text-align: justify;\">\n      Zulasoft esta altamente comprometido para cumplir con el compromiso de mantener su información segura. \n      Usamos los sistemas y la tecnología mas avanzada y las actualizamos constantemente para asegurarnos que \n      no exista ningún saboteo en contra de sus datos.\n    </p>\n\n    <br>\n\n  </ion-card-content>\n</ion-card>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/paginas/politicas/politicas-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/paginas/politicas/politicas-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PoliticasPageRoutingModule */

    /***/
    function srcAppPaginasPoliticasPoliticasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PoliticasPageRoutingModule", function () {
        return PoliticasPageRoutingModule;
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


      var _politicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./politicas.page */
      "./src/app/paginas/politicas/politicas.page.ts");

      var routes = [{
        path: '',
        component: _politicas_page__WEBPACK_IMPORTED_MODULE_3__["PoliticasPage"]
      }];

      var PoliticasPageRoutingModule = function PoliticasPageRoutingModule() {
        _classCallCheck(this, PoliticasPageRoutingModule);
      };

      PoliticasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PoliticasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginas/politicas/politicas.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/politicas/politicas.module.ts ***!
      \*******************************************************/

    /*! exports provided: PoliticasPageModule */

    /***/
    function srcAppPaginasPoliticasPoliticasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PoliticasPageModule", function () {
        return PoliticasPageModule;
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


      var _politicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./politicas-routing.module */
      "./src/app/paginas/politicas/politicas-routing.module.ts");
      /* harmony import */


      var _politicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./politicas.page */
      "./src/app/paginas/politicas/politicas.page.ts");

      var PoliticasPageModule = function PoliticasPageModule() {
        _classCallCheck(this, PoliticasPageModule);
      };

      PoliticasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _politicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PoliticasPageRoutingModule"]],
        declarations: [_politicas_page__WEBPACK_IMPORTED_MODULE_6__["PoliticasPage"]]
      })], PoliticasPageModule);
      /***/
    },

    /***/
    "./src/app/paginas/politicas/politicas.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/politicas/politicas.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasPoliticasPoliticasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-card {\n  border-radius: 28;\n  text-align: left;\n  --color: #fff;\n}\nion-content ion-card ion-card-content h2 {\n  font-size: 24;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.card1 {\n  background: linear-gradient(160deg, #00d4ff 0%, #009dae 35%, #020024 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wb2xpdGljYXMvcG9saXRpY2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQVI7QUFHWTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRGhCO0FBU0E7RUFDSSwwRUFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9wb2xpdGljYXMvcG9saXRpY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyODtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIC0tY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZDEge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgwLDIxMiwyNTUsMSkgMCUsIHJnYmEoMCwxNTcsMTc0LDEpIDM1JSwgcmdiYSgyLDAsMzYsMSkgMTAwJSk7XHJcbiAgICBcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/paginas/politicas/politicas.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/paginas/politicas/politicas.page.ts ***!
      \*****************************************************/

    /*! exports provided: PoliticasPage */

    /***/
    function srcAppPaginasPoliticasPoliticasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PoliticasPage", function () {
        return PoliticasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PoliticasPage = /*#__PURE__*/function () {
        function PoliticasPage() {
          _classCallCheck(this, PoliticasPage);
        }

        _createClass(PoliticasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PoliticasPage;
      }();

      PoliticasPage.ctorParameters = function () {
        return [];
      };

      PoliticasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politicas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./politicas.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/politicas/politicas.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./politicas.page.scss */
        "./src/app/paginas/politicas/politicas.page.scss"))["default"]]
      })], PoliticasPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-politicas-politicas-module-es5.js.map