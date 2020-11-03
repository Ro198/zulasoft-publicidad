(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-nosotros-nosotros-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nosotros/nosotros.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nosotros/nosotros.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n   \n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\" slot=\"start\">Nosotros</ion-title>\n\n\t\t<!-- <ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"llamada()\" class=\"bordered\" fill=\"solid\" color=\"secondary\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <div style=\"text-align: center;\">\n    <img src=\"../assets/img/zulasoft2.png\" style=\"width:35%;\">\n  </div> \n\n<ion-card class=\"ion-padding card1\">\n  <ion-card-content>\n\n    <h2><ion-icon name=\"earth-outline\"></ion-icon> Nuestro proposito</h2>\n\n    <p style=\"text-align: justify;\">\n      Contribuir al desarrollo de proyectos para su negocio, aplicando tecnología digital de la mas alta calidad, \n      llevándolos a un futuro prospero y moderno.\n    </p>\n\n    <br>\n\n    <h2><ion-icon name=\"rocket-outline\"></ion-icon> Creativos</h2>\n\n    <p style=\"text-align: justify;\">\n      ZulaSoft tiene la solución y la estrategia para mejorar la innovación en todas las áreas empresariales así \n      como también en pequeños negocios. Se impulsaran mediante una mejor comunicación, mejores ideas en el comercio \n      y nuevas vistas en el futuro para nuevos clientes.\n    </p>\n\n    <br>\n\n    <h2><ion-icon name=\"desktop-outline\"></ion-icon> Que hacemos</h2>\n\n    <p style=\"text-align: justify;\">\n      En ZulaSoft nos enfocamos en las necesidades del cliente, aplicando distintos tipos de software, \n      incluyendo investigaciones, servicios y procesos dinámicos.\n      Nuestro marketing digital nos permite en crear estrategias comerciales que se ejecutaran en canales de Internet,\n      así como redes sociales y sitios web.\n    </p>\n\n    <br>\n\n    <h2><ion-icon name=\"document-text-outline\"></ion-icon> Codigo de conducta</h2>\n\n    <p style=\"text-align: justify;\">\n      Nuestro compromiso con cada una de nuestras partes interesadas, incluida la comunicación en la que trabajamos, \n      es nuestra responsabilidad enfrentarnos día a día con problemas de marketing para todo tipo de negocio.\n    </p>\n\n    <br>\n\n\n  </ion-card-content>\n</ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/paginas/nosotros/nosotros-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NosotrosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosPageRoutingModule", function() { return NosotrosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nosotros.page */ "./src/app/paginas/nosotros/nosotros.page.ts");




const routes = [
    {
        path: '',
        component: _nosotros_page__WEBPACK_IMPORTED_MODULE_3__["NosotrosPage"]
    }
];
let NosotrosPageRoutingModule = class NosotrosPageRoutingModule {
};
NosotrosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NosotrosPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/nosotros/nosotros.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.module.ts ***!
  \*****************************************************/
/*! exports provided: NosotrosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosPageModule", function() { return NosotrosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nosotros-routing.module */ "./src/app/paginas/nosotros/nosotros-routing.module.ts");
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nosotros.page */ "./src/app/paginas/nosotros/nosotros.page.ts");







let NosotrosPageModule = class NosotrosPageModule {
};
NosotrosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_5__["NosotrosPageRoutingModule"]
        ],
        declarations: [_nosotros_page__WEBPACK_IMPORTED_MODULE_6__["NosotrosPage"]]
    })
], NosotrosPageModule);



/***/ }),

/***/ "./src/app/paginas/nosotros/nosotros.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-card {\n  border-radius: 28;\n  text-align: left;\n  --color: #fff;\n}\nion-content ion-card ion-card-content h2 {\n  font-size: 24;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.card1 {\n  background: linear-gradient(160deg, #020024 0%, #009dae 35%, #00d4ff 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ub3NvdHJvcy9ub3NvdHJvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFSO0FBR1k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURoQjtBQVNBO0VBQ0ksMEVBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbm9zb3Ryb3Mvbm9zb3Ryb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgwLDE1NywxNzQsMSkgMzUlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/nosotros/nosotros.page.ts":
/*!***************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.page.ts ***!
  \***************************************************/
/*! exports provided: NosotrosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosPage", function() { return NosotrosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NosotrosPage = class NosotrosPage {
    constructor() { }
    ngOnInit() {
    }
};
NosotrosPage.ctorParameters = () => [];
NosotrosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nosotros',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nosotros.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nosotros/nosotros.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nosotros.page.scss */ "./src/app/paginas/nosotros/nosotros.page.scss")).default]
    })
], NosotrosPage);



/***/ })

}]);
//# sourceMappingURL=paginas-nosotros-nosotros-module-es2015.js.map