(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/router/home/home.component */ "./src/app/components/router/home/home.component.ts");
/* harmony import */ var _components_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/main/main.component */ "./src/app/components/layouts/main/main.component.ts");
/* harmony import */ var _components_common_colors_colors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/colors/colors.module */ "./src/app/components/common/colors/colors.module.ts");
/* harmony import */ var _components_common_contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/contact/contact.module */ "./src/app/components/common/contact/contact.module.ts");
/* harmony import */ var _components_router_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/router/contact-us/contact-us.component */ "./src/app/components/router/contact-us/contact-us.component.ts");
/* harmony import */ var _components_router_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/router/products/products.component */ "./src/app/components/router/products/products.component.ts");









var routes = [
    { path: 'komplektdim', component: _components_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], children: [
            { path: '', pathMatch: 'full', component: _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'products', pathMatch: 'full', component: _components_router_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
            { path: 'contact-us', pathMatch: 'full', component: _components_router_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _components_common_colors_colors_module__WEBPACK_IMPORTED_MODULE_5__["ColorsModule"],
                _components_common_contact_contact_module__WEBPACK_IMPORTED_MODULE_6__["ContactModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'golub';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layouts/main/main.module */ "./src/app/components/layouts/main/main.module.ts");
/* harmony import */ var _components_common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/mobile-menu/mobile-menu.component */ "./src/app/components/common/mobile-menu/mobile-menu.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/colors/colors.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"color-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h3 class=\"title-section\">Разновидность цветовой гаммы RAINGUARD</h3>\n\n        <ul class=\"color-list\">\n          <li *ngFor=\"let item of colors\" [style.background]=\"item.color\" [ngClass]=\"{'white': item.white}\">\n            {{item.title}}\n          </li>\n        </ul>\n\n        <p class=\"text\">Водосточные системы</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/common/colors/colors.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-section {\n  padding: 40px 0; }\n  .color-section .color-list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .color-section .color-list li {\n      height: 95px;\n      padding: 20px;\n      margin-bottom: 10px;\n      color: #fff;\n      font-weight: 600;\n      display: flex;\n      align-items: center; }\n  .color-section .color-list li.white {\n        border: 1px solid #eee;\n        color: #72777d; }\n  .color-section p {\n    font-size: 16px;\n    color: #72777d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY29sb3JzL2NvbG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTtFQURqQjtJQUlJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFOcEI7TUFTTSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtFQWZ6QjtRQWtCUSxzQkFBc0I7UUFDdEIsY0FBYyxFQUFBO0VBbkJ0QjtJQXlCSSxlQUFlO0lBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY29sb3JzL2NvbG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1zZWN0aW9ue1xuICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgLmNvbG9yLWxpc3R7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIGxpe1xuICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJi53aGl0ZXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgY29sb3I6ICM3Mjc3N2Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM3Mjc3N2Q7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/colors/colors.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.ts ***!
  \**************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.colors = [
            {
                title: 'RAL 3005 — красное вино',
                color: '#8a1124'
            },
            {
                title: 'RAL 3009 — красный',
                color: '#952124'
            },
            {
                title: 'RAL 7024 — графит',
                color: '#29363e'
            },
            {
                title: 'RAL 6020 — военный зеленый',
                color: '#4a4e3f'
            },
            {
                title: 'RAL 8004 — кирпичный',
                color: '#b84e38'
            },
            {
                title: 'RAL 8017 — молочный шоколад',
                color: '#442e23'
            },
            {
                title: 'RAL 8019 — темный шоколад',
                color: '#322a27'
            },
            {
                title: 'RAL 9005 — черный (антрацит)',
                color: '#121212'
            },
            {
                title: 'RAL 9010 — чистый белый',
                color: '#fff',
                white: true
            },
        ];
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/components/common/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/components/common/colors/colors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/colors/colors.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/common/colors/colors.module.ts ***!
  \***********************************************************/
/*! exports provided: ColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsModule", function() { return ColorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors.component */ "./src/app/components/common/colors/colors.component.ts");




var ColorsModule = /** @class */ (function () {
    function ColorsModule() {
    }
    ColorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]
            ]
        })
    ], ColorsModule);
    return ColorsModule;
}());



/***/ }),

/***/ "./src/app/components/common/contact/contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h4 class=\"title\">Наши контакты</h4>\n                <h5>Производство</h5>\n                <ul class=\"list\">\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-map-marker-alt\"></i>\n                        </span>\n                        <p>Хмельницкий, ул Курчатова, 118</p>\n                    </li>\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-mobile-alt\"></i>\n                        </span>\n                        <p><b>+38(067)492 3416</b></p>\n                    </li>\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-mobile-alt\"></i>\n                        </span>\n                        <p><b>+38(067)009 9600</b></p>\n                    </li>\n                </ul>\n\n                <div class=\"contact-form\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Ваше имя*\" required>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Email почта\" required>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Телефон*\" required>\n                    <textarea class=\"form-control\" rows=\"4\" placeholder=\"Сообщение*\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <h4 class=\"title\">Наши координаты</h4>\n                <!-- Google map-->\n                <div class=\"map\">\n                    <iframe width=\"100%\" height=\"450\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=48.919363, 24.713279&t=&z=17&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/contact/contact.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n  background: #f4f4f4;\n  padding: 40px 0; }\n  .contact-us .list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .contact-us .list li {\n      display: flex;\n      align-items: center;\n      margin-bottom: 15px; }\n  .contact-us .list li .circle {\n        background: #f75442;\n        width: 36px;\n        height: 36px;\n        border-radius: 50%;\n        display: inline-block;\n        margin-right: 15px;\n        flex: 0 0 auto;\n        text-align: center;\n        color: #fff;\n        line-height: 36px;\n        font-size: 20px; }\n  .contact-us .map {\n    border: 5px solid #f7f7f7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUZqQjtJQUtJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFQcEI7TUFVTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO0VBWnpCO1FBZVEsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQXpCdkI7SUErQkkseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11c3tcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgcGFkZGluZzogNDBweCAwO1xuXG4gIC5saXN0e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgLmNpcmNsZXtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3NTQ0MjtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hcHtcbiAgICBib3JkZXI6NXB4IHNvbGlkICNmN2Y3Zjc7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/common/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/common/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/common/contact/contact.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/common/contact/contact.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/common/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 d-flex justify-content-md-start justify-content-center align-items-center\">\n                <a routerLink=\"/\" class=\"logo\">\n                    <img src=\"../../../../assets/img/logo-white.png\" alt=\"rainguard\">\n                </a>\n            </div>\n            <div class=\"col-lg-8\">\n                <p class=\"copyright\">© 2020 RAINGUARD. Все права защищены.</p>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #1c1c1c;\n  padding: 10px 0; }\n  .footer .copyright {\n    font-size: 12px;\n    line-height: 20px;\n    padding: 10px 0;\n    color: #72777d;\n    text-align: center; }\n  @media screen and (min-width: 768px) {\n    .footer {\n      text-align: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFGakI7SUFLSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFHcEI7SUFaRjtNQWFJLGlCQUFpQixFQUFBLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICAuY29weXJpZ2h0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgY29sb3I6ICM3Mjc3N2Q7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/common/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"row justify-content-between align-items-center\">\n      <div class=\"col-lg-3 col-10\">\n        <a routerLink=\"/\">\n          <img src=\"../../../../assets/img/logo.png\" alt=\"rainguard\">\n        </a>\n      </div>\n      <div class=\"col-lg-6\" *ngIf=\"!isMobile\" >\n        <nav class=\"menu\">\n          <ul>\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">home</a></li>\n            <li><a routerLink=\"/products\" routerLinkActive=\"active\">Products</a></li>\n            <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a></li>\n          </ul>\n        </nav>\n      </div>\n      <div class=\"col-lg-3 col-2\">\n        <div class=\"contact\" *ngIf=\"!isMobile\">\n          <a href=\"tel:+38(067)000000000\">+38(067)0000 000</a>\n          <span class=\"text\">Oтдел продаж!</span>\n        </div>\n        <button *ngIf=\"isMobile\" type=\"button\" mat-icon-button (click)=\"toggleMenu()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/common/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 0;\n  background: #fff;\n  z-index: 100; }\n  .header .menu ul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    list-style: none; }\n  .header .menu ul li {\n      padding: 0 7px; }\n  .header .menu ul li a {\n        font-size: 16px;\n        text-transform: uppercase;\n        text-decoration: none;\n        color: #000;\n        font-weight: 600;\n        line-height: 20px;\n        display: inline-block;\n        padding: 5px 10px;\n        border-radius: 3px; }\n  .header .menu ul li a:hover {\n          background: #eee; }\n  .header .menu ul li a.active {\n          background: #f75442;\n          color: #fff; }\n  .header .contact {\n    text-align: right; }\n  .header .contact a {\n      display: block;\n      color: #000;\n      text-decoration: none;\n      font-size: 18px;\n      line-height: 1;\n      font-weight: 600; }\n  .header .contact .text {\n      color: #f75442;\n      font-size: 14px;\n      display: block; }\n  @media screen and (min-width: 768px) {\n    .header {\n      padding: 30px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQVBkO0lBV00sU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBO0VBZnRCO01Ba0JRLGNBQWMsRUFBQTtFQWxCdEI7UUFxQlUsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtFQTdCNUI7VUErQlksZ0JBQWdCLEVBQUE7RUEvQjVCO1VBbUNZLG1CQUFtQjtVQUNuQixXQUFXLEVBQUE7RUFwQ3ZCO0lBNENJLGlCQUFpQixFQUFBO0VBNUNyQjtNQStDTSxjQUFjO01BQ2QsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBcER0QjtNQXdETSxjQUFjO01BQ2QsZUFBZTtNQUNmLGNBQWMsRUFBQTtFQUlsQjtJQTlERjtNQStESSxlQUFlLEVBQUEsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDtcblxuICAubWVudXtcbiAgICB1bHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICBsaXtcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG5cbiAgICAgICAgYXtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3NTQ0MjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250YWN0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgYXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLnRleHR7XG4gICAgICBjb2xvcjogI2Y3NTQ0MjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMobile = window.innerWidth < 768;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.toggle.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('toggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/common/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");







var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mobile-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
    };
    MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__(/*! ./mobile-menu.component.html */ "./src/app/components/common/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/components/common/mobile-menu/mobile-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/main/main.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"example-container\" autosize [hasBackdrop]=\"true\">\n    <mat-sidenav #drawer class=\"mobile-munu\" mode=\"over\" [fixedInViewport]=\"true\">\n        <ul class=\"nav-menu\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">home</a></li>\n            <li><a routerLink=\"/products\" routerLinkActive=\"active\">Products</a></li>\n            <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a></li>\n        </ul>\n        <div class=\"contact\">\n            <a href=\"tel:+38(067)000000000\">+38(067)0000 000</a>\n            <span class=\"text\">Oтдел продаж!</span>\n        </div>\n    </mat-sidenav>\n\n    <main class=\"page\">\n        <app-header (toggle)=\"drawer.toggle()\"></app-header>\n\n        <router-outlet></router-outlet>\n\n        <app-footer></app-footer>\n    </main>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/layouts/main/main.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  margin-top: 70px; }\n  @media screen and (min-width: 768px) {\n    .page {\n      margin-top: 100px; } }\n  .mobile-munu {\n  background: #fff;\n  width: 300px;\n  padding: 20px; }\n  .mobile-munu .nav-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .mobile-munu .nav-menu li a {\n      line-height: 30px;\n      font-size: 16px;\n      text-transform: uppercase;\n      border-bottom: 1px solid #eee;\n      color: #000;\n      display: block;\n      padding: 10px; }\n  .mobile-munu .contact {\n    text-align: right;\n    margin-top: 50px; }\n  .mobile-munu .contact a {\n      display: block;\n      color: #000;\n      text-decoration: none;\n      font-size: 18px;\n      line-height: 1;\n      font-weight: 600; }\n  .mobile-munu .contact .text {\n      color: #f75442;\n      font-size: 14px;\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRWhCO0lBSEY7TUFJSSxpQkFBaUIsRUFBQSxFQUVwQjtFQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFIZjtJQUtJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBUGQ7TUFXUSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHlCQUF5QjtNQUN6Qiw2QkFBNkI7TUFDN0IsV0FBVztNQUNYLGNBQWM7TUFDZCxhQUFhLEVBQUE7RUFqQnJCO0lBMkJJLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQTVCcEI7TUErQk0sY0FBYztNQUNkLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQXBDdEI7TUF3Q00sY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG59XG5cbi5tb2JpbGUtbXVudXtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICAubmF2LW1lbnV7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGxpe1xuICAgICAgYXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmOmFjdGl2ZXtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhY3R7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgIGF7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC50ZXh0e1xuICAgICAgY29sb3I6ICNmNzU0NDI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/layouts/main/main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.ts ***!
  \***********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/layouts/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/layouts/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/main/main.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/layouts/main/main.module.ts ***!
  \********************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/components/layouts/main/main.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/components/common/footer/footer.component.ts");
/* harmony import */ var _common_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/header/header.module */ "./src/app/components/common/header/header.module.ts");
/* harmony import */ var _router_products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../router/products/products.module */ "./src/app/components/router/products/products.module.ts");
/* harmony import */ var _router_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../router/contact-us/contact-us.module */ "./src/app/components/router/contact-us/contact-us.module.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _common_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _router_products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
                _router_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_8__["ContactUsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/router/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/components/router/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/components/router/contact-us/contact-us.component.ts");
/* harmony import */ var _common_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/contact/contact.module */ "./src/app/components/common/contact/contact.module.ts");





var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"]
            ],
            exports: [
                _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
            ],
        })
    ], ContactUsModule);
    return ContactUsModule;
}());



/***/ }),

/***/ "./src/app/components/router/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/router/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1>Металлическая водосточная система </h1>\n\n                <h2>RAINGUARD</h2>\n\n                <ul class=\"list\">\n                    <li>\n                        <i class=\"fas fa-check\"></i>\n                        Долговечность продукции\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Огнестойкость\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Гарантия 50 лет\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Устойчивость к серьезным нагрузкам\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"products\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 d-flex align-items-center justify-content-center\">\n                <img src=\"../../../../assets/img/product-350x350.png\" alt=\"\">\n            </div>\n            <div class=\"col-md-6\">\n                <h3 class=\"title-section\">Продукция RAINGUARD</h3>\n                <p>\n                    <b>Металл USS Cosice (Словакия)</b> — это высококачественный металл в котором используется\n                    толстослойный полиэстер с очень мелкой зернистой структурой, обеспечивающей оптимальное\n                    соотношение эластичности и твердости и отличается хорошей устойчивостью к атмосферным воздействиям\n                    и поверхностного износа);\n                    <br><br>\n                    Имеет двустороннее покрытие с толщиной 35 мкм. Слой цинкового покрытия 275 гр / м2, толщина\n                    0,6 мм. 9 цветов USS (3005, 3009, 6020, 7024, 8004, 8017, 8019, 9005, 9010), и 5 цветов SSAB ().\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"benefits\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"title-section\">Преимущества RAINGUARD</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"far fa-hospital\"></i>\n                    </div>\n                    <p>Современное оборудование из Финляндии</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-shield-alt\"></i>\n                    </div>\n                    <p>Гарантия 50 лет</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-home\"></i>\n                    </div>\n                    <p>Простота монтажа</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-truck\"></i>\n                    </div>\n                    <p>Доставка по всей Украине</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-colors></app-colors>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/components/router/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/router/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro {\n  background: url('intro.png');\n  background-position: 50% 50%;\n  background-size: cover;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  min-height: 600px; }\n  .intro h1 {\n    color: #ff3a2d;\n    font-size: 50px; }\n  .intro h2 {\n    font-size: 50px;\n    color: #fff;\n    font-weight: 300;\n    margin: 20px 0; }\n  .intro .list {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .intro .list li {\n      color: #fff;\n      font-size: 18px;\n      margin-bottom: 10px; }\n  .intro .list li svg {\n        margin-right: 10px;\n        vertical-align: middle; }\n  .intro .list li svg ::ng-deep path {\n          fill: #ff3a2d; }\n  .products {\n  padding: 40px 0 65px; }\n  .benefits {\n  background: #f4f4f4;\n  padding: 30px 0 50px; }\n  .benefits .item {\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px; }\n  .benefits .item .icon {\n      background: #ffffff;\n      border-color: #333333;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      display: inline-block;\n      margin-right: 15px;\n      flex: 0 0 auto;\n      text-align: center;\n      color: #f75442;\n      line-height: 50px;\n      font-size: 30px; }\n  .benefits .item .icon .fa-truck {\n        font-size: 25px;\n        margin-left: 5px; }\n  .benefits .item p {\n      font-size: 18px;\n      line-height: 24px;\n      color: #3c3e45;\n      font-weight: 600; }\n  @media screen and (min-width: 768px) {\n    .benefits .item {\n      align-items: flex-start;\n      margin-bottom: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQW1EO0VBQ25ELDRCQUE0QjtFQUU1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTtFQVBuQjtJQVVJLGNBQXVCO0lBQ3ZCLGVBQWUsRUFBQTtFQVhuQjtJQWVJLGVBQWU7SUFDZixXQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQWxCbEI7SUFzQkksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTLEVBQUE7RUF4QmI7TUEyQk0sV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQTdCekI7UUFnQ1Esa0JBQWtCO1FBQ2xCLHNCQUFzQixFQUFBO0VBakM5QjtVQW9DVSxhQUFzQixFQUFBO0VBUWhDO0VBQ0Usb0JBQW9CLEVBQUE7RUFHdEI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7RUFGdEI7SUFLSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBUHZCO01BVU0sbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7RUFyQnJCO1FBd0JRLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQXpCeEI7TUE4Qk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUFJcEI7SUFyQ0Y7TUF1Q00sdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJve1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ludHJvLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuXG4gIGgxe1xuICAgIGNvbG9yOiByZ2IoMjU1LCA1OCwgNDUpO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cblxuICAubGlzdHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgbGl7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIHN2Z3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIDo6bmctZGVlcCBwYXRoe1xuICAgICAgICAgIGZpbGw6IHJnYigyNTUsIDU4LCA0NSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4ucHJvZHVjdHN7XG4gIHBhZGRpbmc6IDQwcHggMCA2NXB4O1xufVxuXG4uYmVuZWZpdHN7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDMwcHggMCA1MHB4O1xuXG4gIC5pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmljb257XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZjc1NDQyO1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG5cbiAgICAgIC5mYS10cnVja3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjM2MzZTQ1O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5pdGVte1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/router/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/router/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/router/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/router/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/router/products/products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/router/products/products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <section class=\"specification row\">\n        <div class=\"col-lg-12\">\n            <div class=\"bg-products-image\"></div>\n            <div class=\"content\">\n                <h2 class=\"title-section\">Металлическая водосточная система RAINGUARD</h2>\n\n                <p>это новейшие финские технологии в сочетании с металлами мировых брендов.</p>\n\n                <h3>Характеристики:</h3>\n\n                <ul>\n                    <li>✔ Современное оборудование из Финляндии;</li>\n                    <li>✔ Металл USS Cosice (Словакия) - это высококачественный металл в котором используется толстослойный полиэстер с очень мелкой зернистой структурой, обеспечивающей оптимальное соотношение эластичности и твердости и отличается хорошей устойчивостью к атмосферным воздействиям и поверхностного износа);</li>\n                    <li>✔ Двустороннее покрытие с толщиной 35 мкм. Слой цинкового покрытия 275 гр / м2, толщина 0,6 мм;</li>\n                    <li>✔ Размер 125/87;</li>\n                    <li>✔ 50 лет гарантии;</li>\n                    <li>✔ 9 цветов USS (3005, 3009, 6020, 7024, 8004, 8017, 8019, 9005, 9010);</li>\n                    <li>✔ Тест на удар (J): ≥ 20</li>\n                    <li>✔ 5 цветов SSAB ();</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"products row\">\n        <div class=\"col-lg-12\">\n            <div class=\"list\">\n                <div class=\"item\" *ngFor=\"let product of products\">\n                    <div class=\"photo\">\n                        <img [src]=\"product.img\" [alt]=\"product.title\">\n                    </div>\n                    <div class=\"desctiption\">\n                        <p class=\"name\">{{product.title}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n\n<app-colors></app-colors>\n"

/***/ }),

/***/ "./src/app/components/router/products/products.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/router/products/products.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".specification .bg-products-image {\n  background: url('ral.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 900px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%; }\n\n.specification .content {\n  padding-top: 230px;\n  max-width: 700px; }\n\n.specification .content .title-section {\n    text-align: left;\n    margin-bottom: 30px; }\n\n.specification .content h3 {\n    font-size: 26px;\n    margin: 20px 0; }\n\n.specification .content p {\n    font-size: 16px;\n    line-height: 1.3; }\n\n.specification .content ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n\n.specification .content ul li {\n      font-size: 16px;\n      margin: 5px 0; }\n\n.products {\n  margin-top: 60px;\n  margin-bottom: 60px; }\n\n.products .list {\n    display: flex;\n    flex-wrap: wrap; }\n\n.products .list .item {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 15px;\n      width: calc(50% - 30px);\n      margin: 0 15px; }\n\n.products .list .item .photo {\n        flex: 0 0 auto;\n        width: 100px;\n        height: 100px;\n        margin-right: 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n\n.products .list .item .photo img {\n          max-width: 100px;\n          max-height: 100px;\n          margin-right: 20px; }\n\n.products .list .desctiption .name {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2tvbXBsZWt0ZGltL3NyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXIvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwwQkFBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBWGY7RUFlSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBaEJwQjtJQW1CTSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBcEJ6QjtJQXdCTSxlQUFlO0lBQ2YsY0FBYyxFQUFBOztBQXpCcEI7SUE2Qk0sZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQTlCdEI7SUFrQ00sZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVLEVBQUE7O0FBcENoQjtNQXVDUSxlQUFlO01BQ2YsYUFBYSxFQUFBOztBQU1yQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFGckI7SUFLSSxhQUFhO0lBQ2IsZUFBZSxFQUFBOztBQU5uQjtNQVNNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsY0FBYyxFQUFBOztBQWRwQjtRQWlCUSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTs7QUF2QjNCO1VBMEJVLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsa0JBQWtCLEVBQUE7O0FBNUI1QjtNQW1DUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvdXRlci9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWZpY2F0aW9ue1xuICAuYmctcHJvZHVjdHMtaW1hZ2V7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yYWwucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG5cbiAgICAudGl0bGUtc2VjdGlvbntcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIGgze1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuXG4gICAgdWx7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgbGl7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2R1Y3Rze1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuXG4gIC5saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLml0ZW17XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDMwcHgpO1xuICAgICAgbWFyZ2luOiAwIDE1cHg7XG5cbiAgICAgIC5waG90b3tcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWd7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzY3RpcHRpb257XG4gICAgICAubmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/router/products/products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/router/products/products.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.products = [
            {
                title: 'Заглушка желоба универсальная',
                img: '../../../../assets/img/products/11-768x767.jpg'
            },
            {
                title: 'Соединитель желоба',
                img: '../../../../assets/img/products/soedinital_zheloba-300x244.png'
            },
            {
                title: 'Лейка',
                img: '../../../../assets/img/products/leika.jpg'
            },
            {
                title: 'Колено',
                img: '../../../../assets/img/products/koleno.jpg'
            },
            {
                title: 'Труба 1м',
                img: '../../../../assets/img/products/truba-300x173.png'
            },
            {
                title: 'Труба 3м',
                img: '../../../../assets/img/products/truba-300x173.png'
            },
            {
                title: 'Желоб 1 м',
                img: '../../../../assets/img/products/rinva-300x122.png'
            },
            {
                title: 'Желоб 4 м',
                img: '../../../../assets/img/products/rinva-300x122.png'
            },
            {
                title: 'Внутренний угол желоба 90°',
                img: '../../../../assets/img/products/ugol_vnutri-300x158.png'
            },
            {
                title: 'Внешний угол желоба 90°',
                img: '../../../../assets/img/products/vnesh_ugol-300x158.png'
            },
            {
                title: 'Крюк торцевой',
                img: '../../../../assets/img/products/torcevoi.jpg'
            },
            {
                title: 'Крюк длинный',
                img: '../../../../assets/img/products/dlinnyi-177x300.jpg'
            },
            {
                title: 'Держатель трубы под камень',
                img: '../../../../assets/img/products/derzh_kamin.jpg'
            },
            {
                title: 'Держатель трубы под дерево',
                img: '../../../../assets/img/products/derzh_derevo.jpg'
            },
            {
                title: 'Сливное колено',
                img: '../../../../assets/img/products/sliv.jpg'
            }
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/router/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/router/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/router/products/products.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/router/products/products.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/router/products/products.component.ts");
/* harmony import */ var _common_colors_colors_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/colors/colors.module */ "./src/app/components/common/colors/colors.module.ts");





var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_colors_colors_module__WEBPACK_IMPORTED_MODULE_4__["ColorsModule"]
            ],
            exports: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergiy/Documents/projects/komplektdim/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map