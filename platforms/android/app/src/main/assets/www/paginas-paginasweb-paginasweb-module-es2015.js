(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-paginasweb-paginasweb-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/paginasweb/paginasweb.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/paginasweb/paginasweb.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n   \n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"primary\" slot=\"start\">Paginas web</ion-title>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"llamada()\" class=\"bordered\" fill=\"solid\" color=\"secondary\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"slides ion-margin-bottom\">\n    <ion-slides [options]=\"slidesOptions\">\n      <ion-slide>\n        <div>\n          <img src=\"../assets/img/p1.png\">\n          <p style=\"font-size: 10px;\">Un sitio Web, una oportunidad de hacer crecer tu negocio</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n            <div >\n              <img src=\"../assets/img/p4.png\">\n              <p style=\"font-size: 10px;\">Te imaginas cambiar tu negocio y poder expandirlo a un mundo lleno de posibilidades y de tener un futuro mejor</p>\n            </div>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  <div class=\"container\">\n\n  <h2 style=\"text-align: center;\">¿Quieres entrar al mundo digital?</h2>\n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"../assets/img/p2.png\" style=\"width:80%;\">\n        </ion-col>\n        <ion-col>\n          <img src=\"../assets/img/p3.png\" style=\"width:80%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p>Más clientes, más ventas, más posibilidades</p>\n    <p>100% Seguro</p>\n  </div>\n\n  <br>\n\n    <h2>¿Como lo hago?</h2>\n\n    <ion-slides [options]=\"slidesOptions\" style=\"width: 350px;\">\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/p5.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>1. Contactanos</p>\n            <p>2. Cuéntanos tu idea</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/p6.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>3. Te creamos una propuesta</p>\n            <p>4. Desarrollamos tu idea</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"main\">\n              <img src=\"../assets/img/p7.png\">\n            </div>\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-left\">\n            <p>5. Probamos tu proyecto</p>\n            <p>6. Aplicación Terminada</p>\n          </ion-card-content> \n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n\n    <br>\n\n    <div style=\"text-align: center;\">\n      <ion-button (click)=\"mensaje()\" class=\"bordered\" color=\"secondary\">\n        <p style=\"text-transform: capitalize;\">Envianos un mensaje</p>\n      </ion-button>\n    </div>\n\n    <br>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/paginas/paginasweb/paginasweb-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/paginasweb/paginasweb-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaginaswebPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaswebPageRoutingModule", function() { return PaginaswebPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paginasweb_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginasweb.page */ "./src/app/paginas/paginasweb/paginasweb.page.ts");




const routes = [
    {
        path: '',
        component: _paginasweb_page__WEBPACK_IMPORTED_MODULE_3__["PaginaswebPage"]
    }
];
let PaginaswebPageRoutingModule = class PaginaswebPageRoutingModule {
};
PaginaswebPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaginaswebPageRoutingModule);



/***/ }),

/***/ "./src/app/paginas/paginasweb/paginasweb.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/paginas/paginasweb/paginasweb.module.ts ***!
  \*********************************************************/
/*! exports provided: PaginaswebPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaswebPageModule", function() { return PaginaswebPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _paginasweb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginasweb-routing.module */ "./src/app/paginas/paginasweb/paginasweb-routing.module.ts");
/* harmony import */ var _paginasweb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginasweb.page */ "./src/app/paginas/paginasweb/paginasweb.page.ts");







let PaginaswebPageModule = class PaginaswebPageModule {
};
PaginaswebPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paginasweb_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaginaswebPageRoutingModule"]
        ],
        declarations: [_paginasweb_page__WEBPACK_IMPORTED_MODULE_6__["PaginaswebPage"]]
    })
], PaginaswebPageModule);



/***/ }),

/***/ "./src/app/paginas/paginasweb/paginasweb.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/paginas/paginasweb/paginasweb.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-content {\n  --background: linear-gradient(90deg, rgba(1,135,138,1) 0%, rgba(0,156,173,1) 35%, rgba(125,188,213,1) 100%);\n}\nion-content .slides {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  text-align: -webkit-center;\n  box-shadow: none;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\nion-content ion-card .main {\n  width: 100px;\n  height: 100px;\n  /*         border-radius: 50px;\n          background: #FFFFFF;\n          box-shadow:  7px 7px 20px #dbdfe2, \n                 -7px -7px 20px #ffffff; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-card .main img {\n  width: 100px;\n}\nion-content ion-card .files {\n  padding-top: 14px;\n}\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 14px;\n}\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\nion-content .container h2 {\n  padding-bottom: 8px;\n}\nion-content .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wYWdpbmFzd2ViL3BhZ2luYXN3ZWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBQ0UscUJBQUE7RUFDQSwwREFBQTtBQUhSO0FBUU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVlFO0VBQ0UsMkdBQUE7QUFUSjtBQVdJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBVE47QUFZSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQVZOO0FBV007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNSOzs7MENBQUE7RUFLUSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZSO0FBWVE7RUFDRSxZQUFBO0FBVlY7QUFlTTtFQUNJLGlCQUFBO0FBYlY7QUFrQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFoQk47QUFrQk07RUFDRSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7QUFrQlE7RUFDRSxjQUFBO0FBaEJWO0FBa0JVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBaEJaO0FBa0JVO0VBQ0UsZ0NBQUE7QUFoQlo7QUFzQk07RUFDRSxtQkFBQTtBQXBCUjtBQXlCSTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUF2Qk4iLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3BhZ2luYXN3ZWIvcGFnaW5hc3dlYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHJcbiAgXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEsMTM1LDEzOCwxKSAwJSwgcmdiYSgwLDE1NiwxNzMsMSkgMzUlLCByZ2JhKDEyNSwxODgsMjEzLDEpIDEwMCUpO1xyXG4gIFxyXG4gICAgLnNsaWRlcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4OyBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgIC5tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLyogICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIDdweCA3cHggMjBweCAjZGJkZmUyLCBcclxuICAgICAgICAgICAgICAgLTdweCAtN3B4IDIwcHggI2ZmZmZmZjsgKi9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcbiAgICAgIC5maWxlcyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjY2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyZWQge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/paginas/paginasweb/paginasweb.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/paginasweb/paginasweb.page.ts ***!
  \*******************************************************/
/*! exports provided: PaginaswebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaswebPage", function() { return PaginaswebPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");




let PaginaswebPage = class PaginaswebPage {
    constructor(callNumber, emailComposer) {
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.slidesOptions = {
            slidesPerView: 1.5
        };
    }
    ngOnInit() {
    }
    llamada() {
        this.callNumber.callNumber("3521531486", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    mensaje() {
        this.emailComposer.addAlias("gmail", "com.google.android.gm");
        this.emailComposer.isAvailable().then((available) => {
            if (available) {
                //Now we know we can send
            }
        });
        let email = {
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
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }
};
PaginaswebPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
];
PaginaswebPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginasweb',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paginasweb.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/paginasweb/paginasweb.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paginasweb.page.scss */ "./src/app/paginas/paginasweb/paginasweb.page.scss")).default]
    })
], PaginaswebPage);



/***/ })

}]);
//# sourceMappingURL=paginas-paginasweb-paginasweb-module-es2015.js.map