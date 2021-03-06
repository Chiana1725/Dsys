var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};var u=undefined;function plural(n){var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_notFound$$SRC_APP_404_PAGE_NOT_FOUND_COMPONENT_TS_1 = goog.getMsg("\u9875\u9762\u6CA1\u6709\u627E\u5230");
    I18N_0 = MSG_EXTERNAL_notFound$$SRC_APP_404_PAGE_NOT_FOUND_COMPONENT_TS_1;
}
else {
    I18N_0 = "Page Not Found !";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_back$$SRC_APP_404_PAGE_NOT_FOUND_COMPONENT_TS_3 = goog.getMsg("\u8FD4\u56DE\u5230\u9996\u9875");
    I18N_2 = MSG_EXTERNAL_back$$SRC_APP_404_PAGE_NOT_FOUND_COMPONENT_TS_3;
}
else {
    I18N_2 = "Home";
}
var _c4 = function () { return ["/"]; };
var _c5 = function () { return { "font-size": "14px" }; };
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageHeight = window.innerHeight;
        this.pageWidth = window.innerWidth;
        console.log({
            DATA: this.pageHeight,
            SDGS: this.pageWidth
        });
        window.onresize = function (event) {
            _this.pageHeight = window.innerHeight;
            _this.pageWidth = window.innerWidth;
        };
    };
    PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 8, vars: 4, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "font-size", "40px", "height", "100%"], [1, ""], [2, "font-size", "200%"], [3, "routerLink", "ngStyle"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "404");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](5, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](7, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c4))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c5));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
    return PageNotFoundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/page-not-found.component */ "./src/app/404/page-not-found.component.ts");









var routes = [
    { path: 'auth', loadChildren: function () { return __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (mod) { return mod.AuthModule; }); } },
    { path: 'client', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], data: { title: 'Client' } },
    { path: 'server', component: _server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"], data: { title: 'Server' } },
    { path: 'manage', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"], data: { title: 'Manager' } },
    { path: '', redirectTo: '/client', pathMatch: 'full' },
    { path: '**', component: _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.com.previewOption.isShowMask = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.com.previewOption.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(com, cdr) {
        this.com = com;
        this.cdr = cdr;
        this.show = false;
        this.msg = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.com.setTitle();
        this.com.alert.subscribe(function (alert) {
            console.log('alert: ', alert);
            _this.show = alert.show;
            console.log('this.show: ', _this.show);
            _this.msg = alert.msg;
            _this.cdr.detectChanges();
        });
    };
    AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[1, "alert", 3, "ngClass"], ["class", "mask ie-scroll other-scroll", 3, "click", 4, "ngIf"], [1, "mask", "ie-scroll", "other-scroll", 3, "click"], ["onerror", "this.src='/assets/images/error.jpg'", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AppComponent_div_3_Template, 2, 1, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.show ? "show" : "hide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.msg);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.com.previewOption.isShowMask);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".mask[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    background: rgba(0,0,0,.5);\r\n    z-index: 999;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    overflow: auto;\r\n}\r\n.mask[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    cursor: pointer;\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n}\r\n.hide[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHNCQUFtQjtRQUFuQixtQkFBbUI7SUFDbkIscUJBQXVCO1FBQXZCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm1hc2sgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaG93e1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4uaGlkZXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn0iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./404/page-not-found.component */ "./src/app/404/page-not-found.component.ts");
/* harmony import */ var _shared_chat_dailog_components_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/chat-dailog/components/send-area/send-area.component */ "./src/app/shared/chat-dailog/components/send-area/send-area.component.ts");
/* harmony import */ var _shared_chat_dailog_components_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/chat-dailog/components/chat-content/chat-content.component */ "./src/app/shared/chat-dailog/components/chat-content/chat-content.component.ts");
/* harmony import */ var _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/to-safe.pipe */ "./src/app/core/to-safe.pipe.ts");
/* harmony import */ var _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/chat-dailog/chat-dailog.component */ "./src/app/shared/chat-dailog/chat-dailog.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
        _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
        _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
        _shared_chat_dailog_components_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__["SendAreaComponent"],
        _shared_chat_dailog_components_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_12__["ChatContentComponent"],
        _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_13__["ToSafePipe"],
        _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_14__["ChatDailogComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                    _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
                    _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
                    _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                    _shared_chat_dailog_components_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__["SendAreaComponent"],
                    _shared_chat_dailog_components_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_12__["ChatContentComponent"],
                    _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_13__["ToSafePipe"],
                    _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_14__["ChatDailogComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/chat-dailog/chat-dailog.component */ "./src/app/shared/chat-dailog/chat-dailog.component.ts");




var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent.??fac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
    ClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 3, vars: 3, consts: [["id", "main", 1, "container", "clearfix"], [3, "show", "isServer"], [3, "isServer"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "chat-dailog", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("show", true)("isServer", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("isServer", false);
        } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDailogComponent"]], styles: [".blink[_ngcontent-%COMP%]{\r\n    margin-right: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5re1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59Il19 */"] });
    return ClientComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/com.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/com.service.ts ***!
  \*************************************/
/*! exports provided: ComService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComService", function() { return ComService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");









var ComService = /** @class */ (function () {
    function ComService(http, router, titleService, localId) {
        this.http = http;
        this.router = router;
        this.titleService = titleService;
        this.localId = localId;
        // ??????????????????
        // alert: { msg: string; show: boolean } = { msg: '', show: false };
        this.alert = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.data = {};
        this.previewOption = {
            isShowMask: false,
        };
        this.subscriber = null; // polling??????
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.api = {
            login: '/api/auth/login',
            register: '/api/auth/register',
            message: '/api/message/',
            polling: '/api/message/polling',
            history: '/api/message/record',
            userList: '/api/user/list',
            logout: '/api/auth/logout',
            userInfo: '/api/user/',
            files: '/file/',
        };
        this.who = null; // ?????????????????????????????????
        this.isLogin = true;
        // ???????????????
        this.reconnect = false;
        this.ISend = [];
        this.IReceived = [];
    }
    ComService.prototype.setTitle = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.router; }))
            .subscribe(function (event) {
            var titles = _this.getTitle(_this.router.routerState, _this.router.routerState.root);
            var title = titles[titles.length - 1];
            // console.log(title);f
            if (title) {
                _this.titleService.setTitle('Chat System for ' + title);
            }
        });
    };
    ComService.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }
        if (state && parent) {
            var tmp = this.getTitle(state, state.firstChild(parent));
            tmp.forEach(function (el) {
                data.push(el);
            });
        }
        return data;
    };
    // ???????????????
    ComService.prototype.formatTime = function (date /* ??????????????????????????? */, fmt /*?????????????????????YYYY-MM-DD hh:mm:ss */) {
        if (date === void 0) { date = ''; }
        if (fmt === void 0) { fmt = 'YYYY-MM-DD'; }
        //??????ios
        if (typeof date === 'string') {
            date = date.replace(/-/g, '/');
        }
        date = date ? new Date(date) : new Date();
        var o = {
            'Y+': date.getFullYear(),
            'M+': date.getMonth() + 1,
            'D+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds(),
        };
        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (o['Y+'] + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    };
    ComService.prototype.timeFromNow = function (time) {
        //????????????
        var timestamp = Date.now();
        var createTime = new Date(time);
        time = createTime.getTime();
        var diff = timestamp - time;
        if (diff < 60 * 1000) {
            return '';
        }
        else if (diff < 60 * 60 * 1000) {
            return (Math.floor(diff / (60 * 1000)) +
                { en: ' minutes ago', zh: '?????????' }[this.localId]);
        }
        else if (diff < 24 * 60 * 60 * 1000) {
            return (Math.floor(diff / (60 * 60 * 1000)) +
                { en: ' hours ago', zh: '?????????' }[this.localId]);
        }
        else {
            return this.formatTime(time, 'YYYY-MM-DD hh:mm');
        }
    };
    ComService.prototype.showAlert = function (msg, duration) {
        var _this = this;
        console.log('??????showAlert');
        this.alert.next({ show: true, msg: msg });
        setTimeout(function () {
            _this.alert.next({ show: false, msg: msg });
        }, duration !== null && duration !== void 0 ? duration : 2000);
    };
    ComService.prototype.clearCookie = function () {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie =
                    keys[i] + '=0; expire=' + date.toDateString() + '; path=/';
        }
    };
    ComService.prototype.doHttpResponse = function (res, success, fail, isServer) {
        var _this = this;
        var code = res.code;
        if (code) {
            if (code === 3 || code === 6) {
                // ?????????3 ?????????6
                this.subscriber.unsubscribe();
                // ????????????????????????????????????-????????????cookie-????????????
                if (isServer) {
                    this.showAlert(this.localId === 'en'
                        ? 'Login invalid, please login again'
                        : '??????????????????????????????');
                    // ??????????????????????????????-?????????????????????-??????????????????
                    setTimeout(function () {
                        _this.router.navigate(['/auth/login']);
                    }, 2000);
                }
                else {
                    this.clearCookie();
                }
            }
            else {
                fail ? fail(res) : this.showAlert(res.msg);
            }
        }
        else {
            // ??????
            success && success(res.data);
        }
    };
    // ????????????
    ComService.prototype.sendMsg = function (msg, success, fail, isServer) {
        var _this = this;
        console.log('sendMsg isServer==: ', msg, isServer);
        this.http
            .post(this.api.message, msg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('sendMsg', function () {
            fail && fail();
        })))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function (data) {
                success && success(data);
            }, fail, isServer);
        });
    };
    ComService.prototype.handleError = function (uri, failCallback) {
        var _this = this;
        return function (error) {
            console.log('uri error:== ', error);
            _this.reconnect = true;
            if (failCallback) {
                console.log('??????fail()');
                failCallback();
            }
            else {
                _this.showAlert('http request ' + uri + ' error ');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ code: -1, msg: '???????????????', data: null });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
                en: 'Something bad happened; please try again later.',
                zh: '??????????????????',
            }[_this.localId]); /**/
        };
    };
    // ????????????
    ComService.prototype.pollingStart = function (random, domain, isServer) {
        var _this = this;
        var options = {
            observe: 'response',
        };
        return this.http
            .get(this.api.polling +
            '?random=' +
            random +
            (domain ? '&' + domain : '') +
            (isServer ? '&role=1' : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return (_this.reconnect = false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('polling', function () {
            _this.pollingStart(random, domain, isServer);
        })));
    };
    // ????????????
    ComService.prototype.preview = function (file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            callback(e.target.result);
        };
    };
    // ????????????
    ComService.prototype.videoPreview = function (file, callback) {
        var url = null;
        try {
            if (window.URL != undefined) {
                // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            }
            else if (window.webkitURL != undefined) {
                // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            callback(url);
        }
        catch (e) {
            // ????????????
        }
    };
    // ????????????
    ComService.prototype.uploadFile = function (fileObj, callback, progressCallback) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', fileObj.file);
        var api = 'https://io.imdraw.com:444';
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', api, formData, {
            reportProgress: true,
        });
        this.http
            .request(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('uploadFile', function () {
            callback(fileObj, true);
            _this.showAlert({ en: 'File Server Error', zh: '?????????????????????!' }[_this.localId]);
        })))
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                fileObj.uploadProgress = Math.round((100 * event.loaded) / event.total);
                progressCallback && progressCallback(fileObj);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                var body = event.body;
                fileObj.src = api + '/' + body.key;
                fileObj.type === 'file' && (fileObj.src += '?operation=download');
                callback(fileObj);
            }
        });
    };
    ComService.prototype.notifyAndUnreadPlus = function (d, chatUnread, cuUser) {
        cuUser && (cuUser.state = true);
        var name = this.setName(d, cuUser, !!cuUser);
        console.log('???????????????', cuUser);
        this.deskNotify(name, d.data);
        this.setUnreadPlus(chatUnread, d, cuUser);
    };
    ComService.prototype.setName = function (d, user, isServer) {
        return isServer
            ? user.name
                ? user.name
                : { en: 'User', zh: '??????' }[this.localId] + d.fid
            : { en: 'Server Reply', zh: '????????????' }[this.localId];
    };
    ComService.prototype.setUnreadPlus = function (chatUnread, msg, cuUser) {
        var _a;
        chatUnread = chatUnread || {
            unread: 0,
            chatID: '',
            id: [],
        };
        chatUnread.unread++;
        !chatUnread.chatID && (chatUnread.chatID = 'chatList' + msg.id);
        (_a = chatUnread.id) === null || _a === void 0 ? void 0 : _a.push(msg.id);
        cuUser &&
            (cuUser.unreadOption = chatUnread) &&
            this.updateUnreadStorage(cuUser.id, chatUnread);
    };
    ComService.prototype.updateUnreadStorage = function (id, unreadOption) {
        var storage = window.localStorage.unread;
        try {
            storage = (storage && JSON.parse(storage)) || {};
        }
        catch (e) {
            storage = {};
        }
        storage[id] = unreadOption;
        window.localStorage.unread = JSON.stringify(storage);
    };
    // ??????????????????
    ComService.prototype.getUserList = function (success) {
        var _this = this;
        this.http
            .get(this.api.userList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUserList')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, success, null, true);
        });
    };
    ComService.prototype.getUserInfo = function (id, cb) {
        var _this = this;
        this.http
            .get(this.api.userInfo + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUserInfo')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, cb, null, true);
        });
    };
    ComService.prototype.login = function (data) {
        var _this = this;
        this.http
            .post(this.api.login, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert({ en: 'login Successful!', zh: '????????????' }[_this.localId]);
                _this.isLogin = true;
                // ??????????????????????????????
                setTimeout(function () {
                    _this.router.navigate(['/server']);
                }, 2000);
            }, null, true);
        });
    };
    ComService.prototype.register = function (data) {
        var _this = this;
        this.http
            .post(this.api.register, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('register')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert({
                    en: 'Register successfully, jump to login immediately',
                    zh: '?????????????????????????????????',
                }[_this.localId]);
                setTimeout(function () {
                    _this.router.navigate(['/auth/login']);
                }, 2000);
            });
        });
    };
    ComService.prototype.logout = function () {
        var _this = this;
        this.http
            .post(this.api.logout, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('logout')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert({ en: 'Log out success !', zh: '????????????!' }[_this.localId]);
                setTimeout(function () {
                    _this.router.navigate(['/auth/login']);
                }, 2000);
            }, null, true);
        });
    };
    ComService.prototype.getHistory = function (id) {
        var options = {
            observe: 'response',
        };
        return this.http
            .get(this.api.history + (id ? '?id=' + id : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHistory')));
    };
    ComService.prototype.notifyInstanceEvent = function (content, title) {
        var instance = new Notification(title, {
            body: content,
            icon: '/assets/images/desk-logo.png',
            tag: '1212212',
            // sound:'/assets/sounds/msg.wav',
            renotify: true,
        });
        instance.onclick = function (e) {
            window.focus();
            instance.close();
            // ?????? ?????????????????????????????????????????????
        };
        instance.onerror = function () { };
        instance.onshow = function () {
            try {
                var msg = new Audio();
                msg.src = '/assets/sounds/msg.wav';
                msg.play();
                console.log('????????????');
            }
            catch (e) {
                console.log('????????????');
            }
        };
        instance.onclose = function () { };
    };
    ComService.prototype.deskNotify = function (title, msg) {
        var _this = this;
        var Notification = window.Notification;
        var div = document.createElement('div');
        div.innerHTML = msg;
        var content = '';
        Array.from(div.childNodes).forEach(function (el) {
            var nodeType = el.nodeType;
            if (nodeType === 1) {
                // ????????????
                var id = el.id;
                if (id.substring(0, 3) === 'img') {
                    content += { en: '[Image]', zh: '[??????]' }[_this.localId];
                }
                else if (id.substring(0, 4) === 'file') {
                    content +=
                        { en: '[File]', zh: '[??????]' }[_this.localId] + el.innerText;
                }
                else if (id.substring(0, 5) === 'video') {
                    content += { en: '[Video]', zh: '[??????]' }[_this.localId];
                }
                else {
                    content += el.innerText;
                }
            }
            else if (nodeType === 3) {
                // ????????????
                content += el.textContent;
            }
        });
        content = content.substring(0, 100) + (content.length > 100 ? '...' : '');
        console.log('????????????: ', content);
        if (Notification) {
            //??????????????????
            if (Notification.permission == 'granted') {
                //??????????????????
                console.log('??????2');
                this.notifyInstanceEvent(content, title);
            }
            else {
                //????????????????????????????????????(????????????????????????????????????????????????????????????????????????????????????????????????Notification.requestPermission()????????????)
                Notification.requestPermission(function (status) {
                    if (status === 'granted') {
                        console.log('??????1');
                        _this.notifyInstanceEvent(content, title);
                    }
                    else {
                        //????????????
                        console.log('??????????????????');
                        _this.showAlert('????????????????????????????????????????????????????????????');
                        return false;
                    }
                });
            }
        }
        else {
            console.log('???????????????');
            //?????????(IE???)
            var index = 0;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                var titleElem = document.getElementsByName('title')[0];
                if (index % 2) {
                    titleElem.innerText = '???????????????' + title; //??????????????????????????????????????????
                }
                else {
                    titleElem.innerText =
                        { en: '[new message]', zh: '???????????????' }[this.localId] + title;
                }
                index++;
                if (index > 20) {
                    clearInterval(this.timer);
                }
            }, 500);
        }
    };
    ComService.??fac = function ComService_Factory(t) { return new (t || ComService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
    ComService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ComService, factory: ComService.??fac, providedIn: 'root' });
    return ComService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ComService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/to-safe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/core/to-safe.pipe.ts ***!
  \**************************************/
/*! exports provided: ToSafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToSafePipe", function() { return ToSafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



var ToSafePipe = /** @class */ (function () {
    function ToSafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    // args={url,html,style,resourceUrl}
    ToSafePipe.prototype.transform = function (value, args) {
        args = args || 'url';
        return this._sanitizer['bypassSecurityTrust' + args[0].toUpperCase() + args.slice(1)](value);
    };
    ToSafePipe.??fac = function ToSafePipe_Factory(t) { return new (t || ToSafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    ToSafePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "toSafe", type: ToSafePipe, pure: true });
    return ToSafePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToSafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toSafe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_onlineServer$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_1 = goog.getMsg("\u5728\u7EBF\u5BA2\u670D");
    I18N_0 = MSG_EXTERNAL_onlineServer$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_1;
}
else {
    I18N_0 = "Questions? Chat with us !";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_6577390842016419471$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_3 = goog.getMsg("\u7BA1\u7406\u5458");
    I18N_2 = MSG_EXTERNAL_6577390842016419471$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_3;
}
else {
    I18N_2 = "Manager";
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_online$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_5 = goog.getMsg("\u5728\u7EBF");
    I18N_4 = MSG_EXTERNAL_online$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_5;
}
else {
    I18N_4 = "Online";
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_4173006231278306592$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_7 = goog.getMsg("\u5BA2\u6237\u7BA1\u7406");
    I18N_6 = MSG_EXTERNAL_4173006231278306592$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_7;
}
else {
    I18N_6 = "User Manage";
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_2002430328266516000$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_9 = goog.getMsg("\u5BA2\u670D\u7BA1\u7406");
    I18N_8 = MSG_EXTERNAL_2002430328266516000$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_9;
}
else {
    I18N_8 = "Server Manage";
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_8856208759563046099$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_11 = goog.getMsg("\u804A\u5929\u7A97\u53E3");
    I18N_10 = MSG_EXTERNAL_8856208759563046099$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_11;
}
else {
    I18N_10 = "Chat Window";
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_messages$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_13 = goog.getMsg("\u6D88\u606F\u8BB0\u5F55");
    I18N_12 = MSG_EXTERNAL_messages$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_13;
}
else {
    I18N_12 = "History";
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_3213948570903263906$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_15 = goog.getMsg("\u8BBF\u5BA2\u59D3\u540D");
    I18N_14 = MSG_EXTERNAL_3213948570903263906$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_15;
}
else {
    I18N_14 = "User Name";
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_8757438049968660540$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_17 = goog.getMsg("\u8BBF\u95EE\u6B21\u6570");
    I18N_16 = MSG_EXTERNAL_8757438049968660540$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_17;
}
else {
    I18N_16 = "Visit Times";
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_8316501287182793316$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_19 = goog.getMsg("\u5730\u533A");
    I18N_18 = MSG_EXTERNAL_8316501287182793316$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_19;
}
else {
    I18N_18 = "Area";
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_7836516837938043992$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_21 = goog.getMsg("\u505C\u7559\u65F6\u95F4");
    I18N_20 = MSG_EXTERNAL_7836516837938043992$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_21;
}
else {
    I18N_20 = "Stay Time";
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_2233040798532809820$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_23 = goog.getMsg("\u6700\u540E\u6D3B\u52A8");
    I18N_22 = MSG_EXTERNAL_2233040798532809820$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_23;
}
else {
    I18N_22 = "Last Activated";
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_2829568379711602958$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_25 = goog.getMsg("IP\u5730\u5740");
    I18N_24 = MSG_EXTERNAL_2829568379711602958$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_25;
}
else {
    I18N_24 = "IP Address";
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_3784810557825456682$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_27 = goog.getMsg("\u5F53\u524D\u63A5\u5F85");
    I18N_26 = MSG_EXTERNAL_3784810557825456682$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_27;
}
else {
    I18N_26 = "Current Reception";
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_2261171107170127222$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_29 = goog.getMsg("\u64CD\u4F5C");
    I18N_28 = MSG_EXTERNAL_2261171107170127222$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_29;
}
else {
    I18N_28 = "operate";
}
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_3502695666089310298$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_31 = goog.getMsg("\u6240\u6709\u5BA2\u670D");
    I18N_30 = MSG_EXTERNAL_3502695666089310298$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_31;
}
else {
    I18N_30 = "All Servers";
}
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_server$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_33 = goog.getMsg("\u5BA2\u670D");
    I18N_32 = MSG_EXTERNAL_server$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_33;
}
else {
    I18N_32 = "Server";
}
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_online$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_35 = goog.getMsg("\u5728\u7EBF");
    I18N_34 = MSG_EXTERNAL_online$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_35;
}
else {
    I18N_34 = "Online";
}
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_cuDialog$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_37 = goog.getMsg("\u5F53\u524D\u5BF9\u8BDD");
    I18N_36 = MSG_EXTERNAL_cuDialog$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_37;
}
else {
    I18N_36 = "Current Dialogue";
}
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_totayDialog$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_39 = goog.getMsg("\u4ECA\u65E5\u5BF9\u8BDD");
    I18N_38 = MSG_EXTERNAL_totayDialog$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_39;
}
else {
    I18N_38 = "Today's dialogue";
}
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_7659348535891980245$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_41 = goog.getMsg("\u5BF9\u8BDD\u8BB0\u5F55");
    I18N_40 = MSG_EXTERNAL_7659348535891980245$$SRC_APP_MANAGE_MANAGE_COMPONENT_TS_41;
}
else {
    I18N_40 = "Conversation Record";
}
var ManageComponent = /** @class */ (function () {
    function ManageComponent() {
        this.tabIndex = 0;
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent.prototype.changeTab = function (e) {
        console.dir(e.target);
        var i = Number(e.target.dataset.index);
        !isNaN(i) && (this.tabIndex = i);
    };
    ManageComponent.??fac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(); };
    ManageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 198, vars: 12, consts: [[1, "container", "clearfix"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], [1, "iconfont", "icon-true", "online"], [1, "state-txt"], ["id", "contentBox", 1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll"], [1, "menu"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", 3, "click"], ["data-index", "0"], ["data-index", "1"], ["data-index", "2"], ["id", "history", 1, "fr", "right", "pos-r"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr"], [1, "history-content", "ie-scroll", "other-scroll"], ["id", "calendar", 1, "d-none", "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], [1, "history-op", "fr", "mr-1"], ["title", "\u7B2C\u4E00\u9875", 1, "iconfont", "icon-left-stop", "bold"], ["title", "\u4E0A\u4E00\u9875", 1, "iconfont", "icon-less-than"], ["title", "\u4E0B\u4E00\u9875", 1, "iconfont", "icon-great-than"], ["title", "\u6700\u540E\u4E00\u9875", 1, "iconfont", "icon-right-stop", "bold"], ["id", "center", 1, "center"], [1, "customer-list", "ie-scroll", "other-scroll"], [1, "th-tag"], [1, "d-sm-none"], ["id", "tbContent"], [1, "icon", "new"], [1, "pos-r"], [1, "iconfont", "icon-search"], [1, "pos-a", "search-menu"], [1, "active"], ["id", "pagenation", 1, "page"], [1, "customer-list", "server-manage", "ie-scrollother-scroll"], [1, "name-online"], [1, "d-inline-block"], [1, "icon-container", "d-inline-block"], [1, "iconfont", "icon-server"], [1, "online-info", "fr"], [1, "circle"], [1, "dialog-info", "d-inline-block"], [1, "text-right"], [1, "fl", "mr-1"], [1, "dialog-txt"], ["data-id", "1", 1, "fr", "btn-dialog"], ["data-id", "2", 1, "fr", "btn-dialog"], ["data-id", "3", 1, "fr", "btn-dialog"], ["frameborder", "0", "src", "http://localhost:4200/server?frame=1", 2, "width", "100%", "height", "100%"], ["id", "alert", 1, "alert", "d-none"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](4, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](8, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](12, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ManageComponent_Template_ul_click_17_listener($event) { return ctx.changeTab($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](19, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](21, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](23, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h2", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](27, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2012-5-1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "th", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](51, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](53, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](55, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](57, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](59, I18N_22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](61, I18N_24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](63, I18N_26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](65, I18N_28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tbody", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\u65B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\u79E6\u67D0\u67D0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "03");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\u6CB3\u5317\u7701");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "127.0.0.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "\u5BA2\u670D01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "ul", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "\u804A\u5929\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\u5386\u53F2\u8F68\u8FF9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\u65B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\u79E6\u67D0\u67D0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "03");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "\u6CB3\u5317\u7701");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "127.0.0.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "\u5BA2\u670D01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "ul", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](115, I18N_30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](124, I18N_32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](129, I18N_34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](134, I18N_36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](139, I18N_38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](143, I18N_40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "\u5BA2\u670D001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "\u5F53\u524D\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\u4ECA\u65E5\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "\u5BF9\u8BDD\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "\u5BA2\u670D001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "\u5F53\u524D\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "\u4ECA\u65E5\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "button", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "\u5BF9\u8BDD\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "iframe", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "\u9519\u8BEF\u63D0\u793A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 0 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 1 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 2 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 0 ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 1 ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.tabIndex === 2 ? "" : "d-none");
        } }, styles: [".customers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.customers[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\r\n    background-color: #4585FF;\r\n    color:#FFF;\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    text-align: center;\r\n    padding:6px 0;\r\n    \r\n}\r\n.menu[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    font-size:1rem;\r\n}\r\n.center[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    background-color: #F4F9FF;\r\n    padding:10px 0;\r\n}\r\n.center[_ngcontent-%COMP%]   .th-tag[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding:0;\r\n    width:40px;\r\n}\r\n.center[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    font-size:1rem;\r\n}\r\n.search-menu[_ngcontent-%COMP%]{\r\n    right:0;\r\n    background-color: #fff;\r\n    border-radius:5px;\r\n    border:1px solid #D5E5FA;\r\n    box-shadow: 1px 2px  #D5E5FA;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding:10px 15px;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background-color: #92B4F4;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    background-color: #D5E5FA;\r\n}\r\n.customer-list[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    width:100%;\r\n    height: 100%;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    line-height: 33px;\r\n    margin-left:20px;\r\n    font-weight: 400;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    padding:20px;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{    \r\n    margin-right: 20px;\r\n    padding:10px;\r\n    border-radius: 4px;\r\n    border:1px solid #D5E5FA;\r\n    box-shadow: 2px 2px #D5E5FA ;\r\n    width: 250px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{\r\n    margin-right: 0;\r\n}\r\n.name-online[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n.name-online[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n    background-color: #F4F9FF;\r\n    border-radius: 50%;\r\n}\r\n.name-online[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    color:#9DCCFF;\r\n    font-size:24px;   \r\n}\r\n.online-info[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n.circle[_ngcontent-%COMP%]{\r\n    background-color: #2BDE73;\r\n    width:10px;\r\n    height:10px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n.dialog-info[_ngcontent-%COMP%]{\r\n    line-height: 2em;\r\n}\r\n.btn-dialog[_ngcontent-%COMP%]{\r\n    background-color: #92B4F4;\r\n    color:#fff;\r\n    padding:10px 15px;\r\n    border-radius: 4px;\r\n    border:none;\r\n    cursor: pointer;\r\n    font-size:16px;\r\n    margin-top: 15px;    \r\n}\r\n.dialog-txt[_ngcontent-%COMP%]{\r\n    color:#4585FF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFHQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXJzIGxpe1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jdXN0b21lcnMgbGkuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1ODVGRjtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NnB4IDA7XHJcbiAgICBcclxufVxyXG4ubWVudSAuaWNvbmZvbnR7XHJcbiAgICBmb250LXNpemU6MXJlbTtcclxufVxyXG4uY2VudGVyIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGRjtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG59XHJcbi5jZW50ZXIgLnRoLXRhZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHdpZHRoOjQwcHg7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIC5pY29uZm9udHtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLW1lbnV7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRDVFNUZBO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAgI0Q1RTVGQTtcclxufVxyXG4uc2VhcmNoLW1lbnUgbGl7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxufVxyXG5cclxuLnNlYXJjaC1tZW51IGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCNEY0O1xyXG59XHJcbi5zZWFyY2gtbWVudSBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENUU1RkE7XHJcbn1cclxuLmN1c3RvbWVyLWxpc3R7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgaDN7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgdWx7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgbGl7ICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRDVFNUZBO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjRDVFNUZBIDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4ubmFtZS1vbmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubmFtZS1vbmxpbmUgLmljb24tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gXHJcbi5uYW1lLW9ubGluZSAuaWNvbmZvbnR7XHJcbiAgICBjb2xvcjojOURDQ0ZGO1xyXG4gICAgZm9udC1zaXplOjI0cHg7ICAgXHJcbn1cclxuLm9ubGluZS1pbmZve1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uY2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCREU3MztcclxuICAgIHdpZHRoOjEwcHg7XHJcbiAgICBoZWlnaHQ6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZGlhbG9nLWluZm97XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbi5idG4tZGlhbG9ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjRGNDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyAgICBcclxufVxyXG4uZGlhbG9nLXR4dHtcclxuICAgIGNvbG9yOiM0NTg1RkY7XHJcbn0iXX0= */"] });
    return ManageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage',
                templateUrl: './manage.component.html',
                styleUrls: ['./manage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/calendar */ "./src/assets/js/calendar.js");
/* harmony import */ var _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_com_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/chat-dailog/chat-dailog.component */ "./src/app/shared/chat-dailog/chat-dailog.component.ts");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_messages$$SRC_APP_SERVER_SERVER_COMPONENT_TS_1 = goog.getMsg("\u6D88\u606F\u8BB0\u5F55");
    I18N_0 = MSG_EXTERNAL_messages$$SRC_APP_SERVER_SERVER_COMPONENT_TS_1;
}
else {
    I18N_0 = "History";
}
function ServerComponent_tr_8_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var u_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](u_r6.unreadOption == null ? null : u_r6.unreadOption.unread);
} }
var _c2 = function () { return { en: "online", zh: "\u5728\u7EBF" }; };
var _c3 = function () { return { en: "offline", zh: "\u79BB\u7EBF" }; };
var _c4 = function () { return { en: "on", zh: "\u5728" }; };
var _c5 = function () { return { en: "off", zh: "\u79BB" }; };
var _c6 = function () { return { en: "User ", zh: "\u6E38\u5BA2" }; };
var _c7 = function () { return { en: "Unknow", zh: "\u672A\u77E5\u6765\u6E90" }; };
function ServerComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_tr_8_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); var i_r7 = ctx.index; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.changeUser(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ServerComponent_tr_8_span_8_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var u_r6 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r0.user.id === u_r6.id ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](u_r6.state ? "new" : "old");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", u_r6.state ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c2)[ctx_r0.com.localId] : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c3)[ctx_r0.com.localId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](u_r6.state ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c4)[ctx_r0.com.localId] : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c5)[ctx_r0.com.localId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](u_r6.name || _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c6)[ctx_r0.com.localId] + u_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](u_r6.mall || _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c7)[ctx_r0.com.localId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", u_r6.unreadOption == null ? null : u_r6.unreadOption.unread);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_noUser$$SRC_APP_SERVER_SERVER_COMPONENT_TS__9 = goog.getMsg("\u6CA1\u6709\u5BA2\u6237\u8BBF\u95EE");
    I18N_8 = MSG_EXTERNAL_noUser$$SRC_APP_SERVER_SERVER_COMPONENT_TS__9;
}
else {
    I18N_8 = "No Users";
}
function ServerComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var _c10 = function () { return { en: "Server", zh: "\u5BA2\u670D" }; };
var _c11 = function () { return { en: "User", zh: "\u6E38\u5BA2" }; };
function ServerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_div_16_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var h_r12 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](h_r12.isServer ? "online" : "text-base");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](h_r12.isServer ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c10)[ctx_r2.com.localId] + h_r12.fid : h_r12.name || _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c11)[ctx_r2.com.localId] + h_r12.fid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](h_r12.timeFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", h_r12.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_noHistory$$SRC_APP_SERVER_SERVER_COMPONENT_TS__13 = goog.getMsg("\u6CA1\u6709\u5386\u53F2\u8BB0\u5F55");
    I18N_12 = MSG_EXTERNAL_noHistory$$SRC_APP_SERVER_SERVER_COMPONENT_TS__13;
}
else {
    I18N_12 = "There's no Data";
}
function ServerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](1, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_3584848316067137417$$SRC_APP_SERVER_SERVER_COMPONENT_TS__15 = goog.getMsg(" \u786E\u5B9A ");
    I18N_14 = MSG_EXTERNAL_3584848316067137417$$SRC_APP_SERVER_SERVER_COMPONENT_TS__15;
}
else {
    I18N_14 = " Confirm\n          ";
}
function ServerComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.getSpecialHistory(ctx_r15.historyDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](1, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ServerComponent_div_29_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r17.user.email);
} }
function ServerComponent_div_29_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r18.user.ip);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_6840361998442374495$$SRC_APP_SERVER_SERVER_COMPONENT_TS___17 = goog.getMsg("\u8BBF\u95EE\u9875\u9762");
    I18N_16 = MSG_EXTERNAL_6840361998442374495$$SRC_APP_SERVER_SERVER_COMPONENT_TS___17;
}
else {
    I18N_16 = "Visit";
}
function ServerComponent_div_29_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](3, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r19.user.domain);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_6510882072574425287$$SRC_APP_SERVER_SERVER_COMPONENT_TS___19 = goog.getMsg("\u6765\u6E90");
    I18N_18 = MSG_EXTERNAL_6510882072574425287$$SRC_APP_SERVER_SERVER_COMPONENT_TS___19;
}
else {
    I18N_18 = "From";
}
function ServerComponent_div_29_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](3, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", ctx_r20.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r20.user.mall);
} }
function ServerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ServerComponent_div_29_li_6_Template, 4, 1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ServerComponent_div_29_li_7_Template, 4, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ServerComponent_div_29_li_8_Template, 7, 1, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ServerComponent_div_29_li_9_Template, 7, 2, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u00A0", ctx_r5.user.name || _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c11)[ctx_r5.com.localId] + ctx_r5.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.user.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.user.mall);
} }
var _c20 = function (a0) { return { height: a0 }; };
var ServerComponent = /** @class */ (function () {
    function ServerComponent(com, route) {
        this.com = com;
        this.route = route;
        this.chatList = [];
        this.isServer = true;
        this.rid = 0;
        // ????????????
        this.userList = [];
        this.isShowRight = false;
        this.rightShow = '';
        this.stateMenuShow = false;
        this.allHistory = [];
        this.rightHistory = [];
        // ????????????
        this.files = [];
        // ?????????????????????/??????
        // ????????????????????????
        this.isShowUserList = false;
        // ????????????????????????
        this.historyDate = '';
        // isFrame ??????????????????
        this.isFrame = false;
        // ?????????????????????
        this.isShowMonthCalendar = false;
        this.keepEnd = false;
        this.historyData = { data: [] };
        this.imgSrc = '';
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyDate = this.com.formatTime('', 'YYYY-MM-DD');
        this.initCalendar();
        window.location.search.indexOf('frame=1') > -1 && (this.isFrame = true);
        this.com.getUserList(function (data) {
            if (data && data.length) {
                // ??????????????????
                var storage_1 = window.localStorage.unread;
                try {
                    storage_1 = JSON.parse(storage_1) || {};
                }
                catch (e) {
                    storage_1 = {};
                }
                data.forEach(function (d) {
                    // 5s????????????????????????
                    storage_1[d.id] && (d.unreadOption = storage_1[d.id]);
                    d.state = Date.now() - d.note_at / 1000000 < 5000;
                });
                _this.userList = data;
                _this.changeUser(0);
            }
        });
    };
    ServerComponent.prototype.userListChange = function (receiveData) {
        var _this = this;
        var data = receiveData.data, chatUnread = receiveData.chatUnread, state = receiveData.state;
        var fid = data.fid;
        var userIndex = this.userList.findIndex(function (u) { return u.id === fid; });
        if (state === 0) {
            var isInUserList = userIndex > -1;
            if (!isInUserList) {
                this.com.getUserInfo(fid, function (userInfo) {
                    _this.com.notifyAndUnreadPlus(data, chatUnread, userInfo);
                    _this.userList.unshift(userInfo);
                    // this.userList = [userInfo ,...this.userList]
                    if (!_this.user) {
                        _this.changeUser(0);
                    }
                });
            }
            else {
                this.com.notifyAndUnreadPlus(data, chatUnread, this.userList[userIndex]);
            }
        }
        else if (state === 3) {
            userIndex > -1 && (this.userList[userIndex].state = data.data === 'online');
        }
    };
    ServerComponent.prototype.clickImg = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            this.com.previewOption.isShowMask = true;
            this.com.previewOption.src = e.target.src;
        }
    };
    ServerComponent.prototype.initCalendar = function () {
        var _this = this;
        var callback = function (y, m, d) {
            _this.historyDate = _this.com.formatTime(y + '-' + m + '-' + d, 'YYYY-MM-DD');
        };
        new _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__({
            el: '#schedule-box',
            clickCb: callback,
            nextMonthCb: callback,
            nextYeayCb: callback,
            prevMonthCb: callback,
            prevYearCb: callback,
            lang: this.com.localId,
        });
    };
    ServerComponent.prototype.fileEmiter = function (e) {
        this.keepEnd = !this.keepEnd;
    };
    // ???????????????????????????
    ServerComponent.prototype.getSpecialHistory = function (date) {
        if (this.allHistory.length) {
            this.rightHistory = this.allHistory.filter(function (el) {
                return el.timeFormat.indexOf(date) > -1;
            });
            this.isShowMonthCalendar = false;
        }
    };
    ServerComponent.prototype.showUserList = function (e) {
        e.stopPropagation();
        this.isShowUserList = !this.isShowUserList;
    };
    // ??????????????????
    ServerComponent.prototype.changeUser = function (i) {
        this.user = this.userList[i];
        this.getHistory();
    };
    ServerComponent.prototype.containerClick = function (e) {
        var id = e.target.id;
        if (id === 'historyIcon') {
            this.isShowRight = true;
            this.getHistory();
        }
        this.isShowUserList = false;
    };
    ServerComponent.prototype.showRightHistory = function (data) {
        // ??????????????????
        this.rightShow = 'right-show';
        this.rightHistory = data;
        this.allHistory = data;
    };
    ServerComponent.prototype.getHistory = function () {
        var _this = this;
        this.com.getHistory(this.user.id)
            .subscribe(function (res) {
            if (!_this.myID) {
                _this.myID = Number(res.headers.get('Uid'));
            }
            var ret = res.body;
            _this.com.doHttpResponse(ret, function (data) {
                // this.com.doHistory(data );
                _this.historyData = { uid: _this.myID, data: data };
                _this.isShowRight && _this.showRightHistory(data);
            }, null, true);
        });
    };
    ServerComponent.prototype.catchTab = function (e, callback) {
        callback && callback();
        e.stopPropagation();
    };
    ServerComponent.prototype.hideShowing = function () {
        this.stateMenuShow = false;
        this.isShowUserList = false;
        this.isShowMonthCalendar = false;
    };
    ServerComponent.prototype.rightHitoryShow = function (toggle) {
        if (!toggle) {
            this.getHistory();
        }
        else {
            this.closeHistory();
        }
    };
    ServerComponent.prototype.closeHistory = function () {
        this.rightHistory = [];
        this.rightShow = '';
    };
    ServerComponent.prototype.showMonthCalendar = function () {
        this.isShowMonthCalendar = !this.isShowMonthCalendar;
    };
    ServerComponent.prototype.chooseDateConfirm = function () {
        this.getSpecialHistory(this.historyDate);
    };
    ServerComponent.??fac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_2__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    ServerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServerComponent, selectors: [["app-server"]], decls: 31, vars: 26, consts: [[1, "container", "clearfix", 3, "click"], [3, "show", "isServer", "myID"], [1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll", "text-center"], [1, "menu", 3, "click"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", "w-100", "h-100", "ie-scroll", "other-scroll"], [1, "user-list"], [3, "class", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "history", 1, "fr", "right"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr", 3, "click"], [1, "history-content", "ie-scroll", "other-scroll"], ["class", "dialog-r", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dialog-r", 4, "ngIf"], [1, "pos-r"], [1, "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr", 3, "click"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], ["class", "confirm-btn fr", 3, "click", 4, "ngIf"], ["id", "center", 1, "center", "pos-r"], ["class", "user-info pos-a", 4, "ngIf"], [3, "isServer", "historyData", "noUser", "cuUser", "userListChange"], [3, "click"], [1, "icon", 3, "title"], ["class", "unread-label pos-a", 4, "ngIf"], [1, "unread-label", "pos-a"], ["colspan", "3"], [1, "dialog-r", 3, "click"], [1, "ml-1"], [1, "ml-1", 3, "innerHTML"], [1, "dialog-r"], [1, "confirm-btn", "fr", 3, "click"], [1, "user-info", "pos-a"], [1, "box"], [1, "item"], ["id", "userIcon", 1, "ml-1", "iconfont", "icon-user", "text-lighter-base", "vm"], ["id", "userName"], ["class", "item", 4, "ngIf"], ["class", "d-480-none item", 4, "ngIf"], ["class", "d-768-none item", 4, "ngIf"], [1, "d-480-none", "item"], [1, "d-768-none", "item"], [1, "mr-1", 3, "title"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_Template_div_click_0_listener($event) { return ctx.containerClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_Template_div_click_4_listener($event) { return ctx.showUserList($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ServerComponent_tr_8_Template, 9, 15, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ServerComponent_tr_9_Template, 3, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](13, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_Template_i_click_14_listener() { return ctx.closeHistory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ServerComponent_div_16_Template, 7, 7, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ServerComponent_div_17_Template, 2, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServerComponent_Template_span_click_23_listener() { return ctx.showMonthCalendar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ServerComponent_button_27_Template, 2, 0, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ServerComponent_div_29_Template, 10, 6, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "chat-dailog", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("userListChange", function ServerComponent_Template_chat_dailog_userListChange_30_listener($event) { return ctx.userListChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("show", !ctx.isFrame)("isServer", true)("myID", ctx.myID);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c20, ctx.isFrame ? "100%" : "calc(100% - 53px)"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.rightShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.isShowUserList ? "pos-r" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.isShowUserList ? "show-list" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.userList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.userList.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.rightHistory);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.rightHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.isShowMonthCalendar ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.historyDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowMonthCalendar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("isServer", true)("historyData", ctx.historyData)("noUser", !ctx.userList.length)("cuUser", ctx.user);
        } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_chat_dailog_chat_dailog_component__WEBPACK_IMPORTED_MODULE_6__["ChatDailogComponent"]], styles: [".right-show[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.user-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #ecf0f1;\r\n  z-index: 5;\r\n}\r\n.user-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-right: 1rem;\r\n}\r\n.user-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 5px 0;\r\n}\r\n.user-info[_ngcontent-%COMP%]   .attach-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: 4px 0;\r\n  \r\n}\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n  white-space: nowrap;\r\n}\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n}\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n  width: 100%;\r\n}\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n}\r\n.user-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  color: #4585ff;\r\n}\r\n.icon-calendar[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n}\r\n.menu[_ngcontent-%COMP%] {\r\n  width: 5rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n.menu[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n.customers.show-list[_ngcontent-%COMP%] {\r\n  display: block;\r\n  left: 100%;\r\n  z-index: 9;\r\n  width: 12rem;\r\n  top: 0;\r\n  border-right: 1px solid #ddd;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  box-shadow: 0px 1px 0.5rem #d5e5fa;\r\n  position: absolute;\r\n}\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color: #f9ce00;\r\n}\r\n.show-list[_ngcontent-%COMP%]   .pos-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffcd06;\r\n}\r\n.user-info[_ngcontent-%COMP%]    > .pos-user[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  left: 0;\r\n  top: 100%;\r\n  box-sizing: border-box;\r\n  box-shadow: 1px 0px 0.5rem #d5e5fa;\r\n  z-index: 33;\r\n  background: white;\r\n}\r\n\r\n.right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.customers[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n.confirm-btn[_ngcontent-%COMP%] {\r\n  background-color: #d5e5fa;\r\n  border: none;\r\n  padding: 5px 20px;\r\n  margin-top: 12px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 1px #4585ff;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n.user-list[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.unread-label[_ngcontent-%COMP%] {\r\n  right: 5px;\r\n  font-size: 12px;\r\n  top: 8px;\r\n  border-radius: 4px;\r\n  padding: 2px;\r\n  color: #fff;\r\n  background-color: #f00;\r\n  min-width: 20px;\r\n  border-radius: 20px;;\r\n}\r\n\r\n@media screen and (max-width: 1200.1px) and (min-width: 1024.1px) {\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1024.1px) and (min-width: 768.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 768.1px) and (min-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n    width: auto;\r\n    border-left: 0;\r\n    float: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 2rem;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    display: block;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBbUI7TUFBbkIsbUJBQW1CO0VBQ25CLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixNQUFNO0VBQ04sNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLE9BQU87RUFDUCxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0EsNkJBQTZCO0FBQzdCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yaWdodC1zaG93IC51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udXNlci1pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLnVzZXItaW5mbyB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi51c2VyLWluZm8gbGkge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcbi51c2VyLWluZm8gLmF0dGFjaC1pbmZvIHNwYW4ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgLyogZm9udC1zaXplOjAuNzVyZW07ICovXHJcbn1cclxuLnVzZXItaW5mbyA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udXNlci1pbmZvID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1pbmZvID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VyLWluZm8gPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IHNwYW4ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51c2VyLWluZm8gYiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjb2xvcjogIzQ1ODVmZjtcclxufVxyXG5cclxuLmljb24tY2FsZW5kYXIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWVudSAuaWNvbmZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4uY3VzdG9tZXJzLnNob3ctbGlzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMTAwJTtcclxuICB6LWluZGV4OiA5O1xyXG4gIHdpZHRoOiAxMnJlbTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwLjVyZW0gI2Q1ZTVmYTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnRyLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2UwMDtcclxufVxyXG4uc2hvdy1saXN0IC5wb3MtbGlzdCB0YWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2QwNjtcclxufVxyXG4udXNlci1pbmZvID4gLnBvcy11c2VyIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMXB4IDBweCAwLjVyZW0gI2Q1ZTVmYTtcclxuICB6LWluZGV4OiAzMztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4vKuWPs+S+p+aYvuekuuaXtuWPmOabtCovXHJcbi5yaWdodC1zaG93IC5yaWdodCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmN1c3RvbWVycyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb25maXJtLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZTVmYTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggIzQ1ODVmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci1saXN0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnVucmVhZC1sYWJlbCB7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdG9wOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4OztcclxufVxyXG4vKiAgIDEwMjQuMSB+IDEyMDAuMSAgIDEyMDAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMC4xcHgpIGFuZCAobWluLXdpZHRoOiAxMDI0LjFweCkge1xyXG4gIC5yaWdodC1zaG93IC5sZWZ0IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAuY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXNob3cgLmN1c3RvbWVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLyogNzY4LjEgIC0gMTAyNCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0LjFweCkgYW5kIChtaW4td2lkdGg6IDc2OC4xcHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICB9XHJcbiAgLmN1c3RvbWVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJpZ2h0LXNob3cgLnNtLWhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4LjFweCkgYW5kIChtaW4td2lkdGg6IDQ4MC4xcHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICB9XHJcbiAgLmN1c3RvbWVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnVzZXItaW5mbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC51c2VyLWluZm8gLnNtLWhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnJpZ2h0LXNob3cgLnJpZ2h0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXItbGVmdDogMDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODAuMXB4KSB7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jdXN0b21lcnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnVzZXItaW5mbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC51c2VyLWluZm8gLnNtLWhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5yaWdodC1zaG93IC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnJpZ2h0LXNob3cgLmxlZnQsXHJcbiAgLnJpZ2h0LXNob3cgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return ServerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server',
                templateUrl: './server.component.html',
                styleUrls: ['./server.component.css'],
            }]
    }], function () { return [{ type: _core_com_service__WEBPACK_IMPORTED_MODULE_2__["ComService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/chat-dailog/chat-dailog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/chat-dailog/chat-dailog.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatDailogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDailogComponent", function() { return ChatDailogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _components_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat-content/chat-content.component */ "./src/app/shared/chat-dailog/components/chat-content/chat-content.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/send-area/send-area.component */ "./src/app/shared/chat-dailog/components/send-area/send-area.component.ts");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");







function ChatDailogComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u5360\u4F4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", "/client#" + ctx_r0.chatUnread.chatID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_5431761461978382345$$SRC_APP_SHARED_CHAT_DAILOG_CHAT_DAILOG_COMPONENT_TS__1 = goog.getMsg("\u672A\u8BFB");
    I18N_0 = MSG_EXTERNAL_5431761461978382345$$SRC_APP_SHARED_CHAT_DAILOG_CHAT_DAILOG_COMPONENT_TS__1;
}
else {
    I18N_0 = "Unread:";
}
function ChatDailogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatDailogComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.readIt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](2, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.chatUnread == null ? null : ctx_r1.chatUnread.unread);
} }
var _c2 = function (a0) { return { height: a0 }; };
var ChatDailogComponent = /** @class */ (function () {
    function ChatDailogComponent(com) {
        this.com = com;
        this.unreadChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chatList = [];
        this.history = [];
        this.chatUnread = {};
        this.isWindowActive = false;
        this.retryTimes = 0;
        this.tmpTime = '';
        // ???????????????????????????-????????????-????????????
        this.scrollTop = 0;
    }
    ChatDailogComponent.prototype.ngOnInit = function () {
        var search = window.location.search.substring(1);
        var random = Date.now().toString();
        this.chatElem = document.getElementById('chat');
        this.pollingStart(random, search);
        this.windowActive();
    };
    ChatDailogComponent.prototype.ngOnChanges = function (changes) {
        var history = changes.historyData;
        if (history && history.currentValue !== history.previousValue) {
            this.chatUnread = { id: [], unread: 0 };
            this.doHistory(history.currentValue.data, history.currentValue.uid);
        }
    };
    ChatDailogComponent.prototype.windowActive = function () {
        var _this = this;
        window.onblur = function () {
            _this.isWindowActive = false;
        };
        window.onfocus = function () {
            // ????????????- ??????????????????-??????????????????
            _this.isWindowActive = true;
            _this.changeUnread();
            // this.setISendReaded();      
        };
    };
    // ??????????????????
    ChatDailogComponent.prototype.changeUnread = function () {
        for (var i = 0; i < this.com.IReceived.length; i++) {
            var el = this.com.IReceived[i];
            var msg = { id: el.id, type: 1 };
            this.isServer && (msg.rid = this.cuUser.id);
            if (this.isInView('chatList' + el.id)) {
                this.com.IReceived.splice(i, 1);
                this.com.sendMsg(msg, null, null, this.isServer);
                i--;
            }
            else {
                break;
            }
        }
        this.chatUnread.unread = this.com.IReceived.length;
    };
    ChatDailogComponent.prototype.pollingStart = function (random, search) {
        var _this = this;
        var t = null;
        this.com.subscriber = this.com
            .pollingStart(random, search, this.isServer)
            .subscribe(function (res) {
            try {
                if (!_this.myID) {
                    _this.myID = Number(res.headers.get('Uid'));
                }
                // ??????????????????????????????????????????
                var isNewConnect_1 = res.headers.get('Request-Times') === '1';
                var ret = res.body;
                _this.com.doHttpResponse(ret, function (data) {
                    if (isNewConnect_1) {
                        if (!_this.isServer) {
                            // ???????????????????????????
                            data && data.length && _this.doHistory(data);
                        }
                    }
                    else {
                        // ???????????????????????????
                        data && data.length && _this.doPolling(data);
                    }
                }, null, _this.isServer);
                // ???????????????-????????????      
                _this.pollingStart(random, search);
            }
            catch (e) {
                clearTimeout(t);
                if (res === null || res === void 0 ? void 0 : res.msg) {
                    _this.com.showAlert(res.msg);
                }
                t = setTimeout(function () {
                    _this.pollingStart(random, search);
                }, 2000);
            }
            // this.com.isLogin && this.pollingStart(random, search);
            // this.retryTimes ++;
        });
    };
    ChatDailogComponent.prototype.doHistory = function (data, uid) {
        uid && (this.myID = uid);
        this.com.IReceived = [];
        this.com.ISend = [];
        this.attachSPTWidthArr(data);
        this.chatList = data;
        this.jumpToChatBottom();
        this.history = data;
        this.setReadInfo(data);
        this.clearUnreadMsg();
    };
    ChatDailogComponent.prototype.attachSPT = function (d) {
        var isServer = this.isServer;
        var isIsend = d.fid === this.myID;
        var isSysMsg = d.fid === 0;
        d.isServer = isSysMsg ? true : isServer ? isIsend : !isIsend;
        d.position = isServer ? (isSysMsg ? false : !isIsend) : !isIsend;
        var fromNowTime = this.com.timeFromNow(d.time / 1000000);
        d.timeStr = this.tmpTime === fromNowTime ? '' : fromNowTime;
        this.tmpTime !== fromNowTime && (this.tmpTime = fromNowTime);
        d.timeFormat = this.com.formatTime(d.time / 1000000, 'YYYY-MM-DD hh:mm:ss');
    };
    ChatDailogComponent.prototype.attachSPTWidthArr = function (data) {
        var _this = this;
        data.forEach(function (d) {
            _this.attachSPT(d);
        });
    };
    ChatDailogComponent.prototype.scrollToBottom = function (e) {
        var _this = this;
        setTimeout(function () {
            var chatWin = e.target;
            if (_this.scrollTop < chatWin.scrollTop) {
                // ??????????????????????????????
                _this.changeUnread();
                if (chatWin.scrollTop + chatWin.offsetHeight + 10 >=
                    chatWin.scrollHeight) {
                    // ????????????-??????unread
                    _this.clearUnreadMsg();
                }
            }
            _this.scrollTop = chatWin.scrollTop;
        }, 1000);
    };
    // ?????????????????????????????????
    ChatDailogComponent.prototype.setReadInfo = function (data) {
        var len = data.length;
        this.chatUnread = { unread: 0, id: [] };
        var rightMsgReaded = false;
        var rightStopIndex = -1;
        var leftMsgReaded = false;
        var leftStopIndex = -1;
        for (var i = len; i--;) {
            var d = data[i];
            var isDbReaders = d.readers.split(',').length > 1;
            var isIsend = d.fid === this.myID;
            var isSysMsg = d.fid === 0;
            // ???????????????????????????== ?????????????????????????????????
            this.isServer && (isIsend = isSysMsg || isIsend);
            if (isIsend) {
                leftMsgReaded = true;
                leftStopIndex = i;
                if (isDbReaders) {
                    // ???????????????????????????????????????
                    rightMsgReaded = true;
                    // ????????????
                    rightStopIndex = i;
                    break;
                }
                else {
                    // ?????????????????????????????????????????????
                    d.readed = rightMsgReaded;
                    // ???????????????
                }
            }
            else {
                // ????????????????????????-??????????????????????????????
                rightMsgReaded = true;
                rightStopIndex = i;
                if (isDbReaders) {
                    // ????????????
                    leftMsgReaded = true;
                    leftStopIndex = i;
                    break;
                }
                else {
                    // ??????????????????????????????????????????
                    if (!leftMsgReaded) {
                        this.chatUnread.unread++;
                        this.chatUnread.id.push(d.id);
                    }
                    !this.chatUnread.chatID &&
                        (this.chatUnread.chatID = 'chatList' + d.id);
                }
            }
            if (rightMsgReaded && leftMsgReaded)
                break;
        }
        // ??????????????????????????????
        if (rightMsgReaded && rightStopIndex > -1) {
            for (var i = rightStopIndex + 1; i--;) {
                data[i].readed = true;
            }
            for (var i = rightStopIndex + 1; i < data.length; i++) {
                data[i].fid === this.myID &&
                    (this.com.ISend[this.com.ISend.length] = i);
            }
        }
        if (leftMsgReaded && leftStopIndex > -1) {
            for (var i = leftStopIndex + 1; i < data.length; i++) {
                data[i].fid !== this.myID &&
                    (this.com.IReceived[this.com.IReceived.length] = data[i]);
            }
        }
    };
    // ??????????????????
    ChatDailogComponent.prototype.isInView = function (id) {
        var nowAt = document.getElementById(id);
        if (nowAt) {
            var f = nowAt.offsetTop;
            var h = nowAt.offsetHeight;
            var h1 = this.chatElem.clientHeight;
            var t = this.chatElem.scrollTop;
            return f > t && f + h < t + h1;
        }
        return false;
    };
    // ????????????
    ChatDailogComponent.prototype.clearUnreadMsg = function () {
        // ???0??????
        this.chatUnread = { unread: 0, id: [], chatID: '' };
        if (this.isServer) {
            this.cuUser &&
                this.cuUser.id &&
                (this.cuUser.unreadOption = { unread: 0, id: [], chatID: '' }) &&
                this.com.updateUnreadStorage(this.cuUser.id, {
                    unread: 0,
                    id: [],
                    chatID: '',
                });
        }
    };
    // ?????????????????????????????????????????????
    ChatDailogComponent.prototype.readIt = function () {
        this.jumpToChatBottom();
        this.chatUnread = { unread: 0, id: [] };
        this.isServer &&
            this.com.updateUnreadStorage(this.cuUser.id, this.chatUnread);
        this.setIReceivedReaded();
        this.setISendReaded();
    };
    ChatDailogComponent.prototype.doPolling = function (data) {
        var _this = this;
        data.forEach(function (d) {
            var fid = d.fid;
            var isISend = fid === _this.myID;
            var type = d.type;
            switch (type) {
                // ????????????
                case 0:
                    _this.doType0(isISend, d);
                    break;
                // ??????????????????
                case 1:
                    _this.doType1(d, isISend);
                    break;
                case 2:
                    _this.doType2(d, isISend);
                    break;
                // ???????????????
                case 3:
                    _this.doType3(isISend, d);
                    break;
            }
        });
    };
    // ????????????????????????
    ChatDailogComponent.prototype.doType1 = function (d, isISend) {
        // ??????????????????
        if (!isISend) {
            if (this.isServer) {
                // ?????????
                // ?????????????????????-????????????????????????-??????????????????
                if (!isISend) {
                    // ?????????????????????????????????
                    var isCuUserSend = this.cuUser.id === d.fid;
                    if (isCuUserSend) {
                        // ?????????????????????????????????
                        var i = this.chatList.findIndex(function (x) { return x.id === d.id; });
                        // i > -1 && (this.chatList[i].readed = true)
                        if (i > -1) {
                            for (var j = i; j >= 0; j--) {
                                this.chatList[j].readed = true;
                            }
                        }
                    }
                }
            }
            else {
                // ?????????
                var i = this.chatList.findIndex(function (x) { return x.id === d.id; });
                // i > -1 && (this.chatList[i].readed = true);
                if (i > -1) {
                    for (var j = i; j >= 0; j--) {
                        this.chatList[j].readed = true;
                    }
                }
            }
        }
    };
    //  ??????????????????
    ChatDailogComponent.prototype.doType2 = function (d, isISend) {
        // ????????????
        if (!isISend) {
            if (d.data === 'offline') {
                var who = this.com.setName(d, this.isServer ? this.cuUser : null, this.isServer);
                this.com.showAlert(who + { en: 'offline', zh: '??????' }[this.com.localId]);
                if (this.isServer) {
                    var i = this.chatList.findIndex(function (x) { return x.id === d.fid; });
                    i > -1 && (this.chatList[i].state = false);
                }
            }
        }
    };
    // ?????????????????????
    ChatDailogComponent.prototype.doType3 = function (isISend, d) {
        isISend &&
            this.com.showAlert({
                en: 'User ' + d.fid + 'is ' + d.data,
                zh: '??????' + d.fid + (d.data === 'online' ? '???' : '???') + '???',
            }[this.com.localId]);
        // ????????? ?????????????????????????????????????????????
        if (this.isServer) {
            this.userListChange.emit({ state: 3, data: d });
        }
    };
    ChatDailogComponent.prototype.doType0 = function (isISend, d) {
        var fid = d.fid;
        var isServer = this.isServer;
        // ??????this.cuUser?????????????????????true???????????????????????????
        var isCuUserSend = isServer ? this.cuUser && this.cuUser.id === fid : !isISend;
        // ???????????????????????????
        this.attachSPT(d);
        if (isISend) {
            this.msgAssgin(d);
            if (this.isWindowActive) {
                this.setIReceivedReaded();
            }
        }
        else {
            if (isCuUserSend) {
                this.com.IReceived.push(d);
                this.chatList.push(d);
                if (this.isWindowActive) {
                    this.jumpToChatBottom();
                    this.setIReceivedReaded();
                    this.setISendReaded();
                }
                else {
                    this.com.notifyAndUnreadPlus(d, this.chatUnread, this.cuUser);
                }
            }
            else {
                var unread = window.localStorage.unread;
                unread = unread ? JSON.parse(unread) : {};
                this.chatUnread = { id: [], unread: 0 };
                this.userListChange.emit({
                    state: 0,
                    chatUnread: unread[d.fid] || { id: [], unread: 0 },
                    data: d,
                });
            }
        }
    };
    ChatDailogComponent.prototype.setIReceivedReaded = function () {
        var _this = this;
        this.com.IReceived.forEach(function (el) {
            var msg = { id: el.id, type: 1 };
            _this.isServer && (msg.rid = _this.cuUser.id);
            _this.com.sendMsg(msg, null, null, _this.isServer);
        });
    };
    // ???????????????????????????????????????????????????
    ChatDailogComponent.prototype.msgAssgin = function (d) {
        var i = this.chatList.findIndex(function (x) { return x.mark === d.mark; });
        i === -1 ? this.chatList.push(d) : Object.assign(this.chatList[i], d);
        this.com.ISend.push(i === -1 ? this.chatList.length : i);
    };
    // ?????????????????????????????????
    ChatDailogComponent.prototype.setISendReaded = function () {
        var _this = this;
        this.com.ISend.forEach(function (el) {
            _this.chatList[el].readed = true;
        });
        this.com.ISend = [];
    };
    ChatDailogComponent.prototype.sendListen = function (content) {
        content.isServer = this.isServer;
        content.position = false;
        this.chatList.push(content);
    };
    ChatDailogComponent.prototype.chatListChange = function (msg) {
        var send = msg.send, content = msg.content;
        if (send === 0) {
            //??????????????????push?????????
            this.chatList.push(content);
            this.isServer && (content.rid = this.cuUser.id);
        }
        else {
            // ????????????
            var i = this.chatList.findIndex(function (x) { return x.mark === content.mark; });
            i > -1 && (this.chatList[i].isUploaded = send);
        }
        this.jumpToChatBottom();
    };
    ChatDailogComponent.prototype.jumpToChatBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatElem.scrollTop = _this.chatElem.scrollHeight;
        }, 1000);
    };
    ChatDailogComponent.??fac = function ChatDailogComponent_Factory(t) { return new (t || ChatDailogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    ChatDailogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChatDailogComponent, selectors: [["chat-dailog"]], inputs: { isServer: "isServer", noUser: "noUser", cuUser: "cuUser", historyData: "historyData" }, outputs: { unreadChange: "unreadChange", userListChange: "userListChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]], decls: 8, vars: 9, consts: [[1, "content", "pos-r"], ["id", "chat", 1, "chat", "ie-scroll", "other-scroll", 3, "scroll"], [1, "chat-details"], [3, "chatList", "sendListen"], ["id", "linkToChatID", 3, "href", 4, "ngIf"], ["class", "chat-unread pos-a", 3, "click", 4, "ngIf"], ["id", "edit", 1, "edit-area"], [3, "isServer", "noUser", "chatListChange"], ["id", "linkToChatID", 3, "href"], [1, "chat-unread", "pos-a", 3, "click"]], template: function ChatDailogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function ChatDailogComponent_Template_div_scroll_1_listener($event) { return ctx.scrollToBottom($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "chat-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sendListen", function ChatDailogComponent_Template_chat_content_sendListen_3_listener($event) { return ctx.sendListen($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChatDailogComponent_a_4_Template, 2, 1, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatDailogComponent_div_5_Template, 4, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "send-area", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("chatListChange", function ChatDailogComponent_Template_send_area_chatListChange_7_listener($event) { return ctx.chatListChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c2, ctx.isServer ? "100%" : "calc(100% - 53px)"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chatList", ctx.chatList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.chatUnread == null ? null : ctx.chatUnread.chatID);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.chatUnread.unread);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("isServer", ctx.isServer)("noUser", ctx.noUser);
        } }, directives: [_components_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_2__["ChatContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_4__["SendAreaComponent"]], styles: [".chat-unread[_ngcontent-%COMP%]{\r\n    background: rgba(0,0,0,.8);\r\n    font-size: 12px;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    bottom: 43%;\r\n    right: 10px;\r\n    z-index:99;\r\n    cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtZGFpbG9nL2NoYXQtZGFpbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2hhdC1kYWlsb2cvY2hhdC1kYWlsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXVucmVhZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvdHRvbTogNDMlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB6LWluZGV4Ojk5O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn0iXX0= */"] });
    return ChatDailogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatDailogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-dailog',
                templateUrl: './chat-dailog.component.html',
                styleUrls: ['./chat-dailog.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { isServer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cuUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], historyData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unreadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], userListChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/chat-dailog/components/chat-content/chat-content.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/chat-dailog/components/chat-content/chat-content.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChatContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentComponent", function() { return ChatContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/to-safe.pipe */ "./src/app/core/to-safe.pipe.ts");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






function ChatContentComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r1.timeStr);
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_sendFail$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_CHAT_CONTENT_CHAT_CONTENT_COMPONENT_TS___1 = goog.getMsg("\u53D1\u9001\u5931\u8D25!");
    I18N_0 = MSG_EXTERNAL_sendFail$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_CHAT_CONTENT_CHAT_CONTENT_COMPONENT_TS___1;
}
else {
    I18N_0 = "Send Failed!";
}
var _c2 = ["title", I18N_0];
function ChatContentComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18nAttributes"](1, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatContentComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", c_r1.readed ? "\u5BF9\u65B9\u5DF2\u8BFB" : "\u5BF9\u65B9\u672A\u8BFB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.readed ? "readed" : "unread");
} }
function ChatContentComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 16);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_span_7_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 21);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", c_r1.webSrc || c_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ChatContentComponent_div_0_span_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 22);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"]("icon-" + c_r1.fileType);
} }
function ChatContentComponent_div_0_span_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", c_r1.webSrc || "javascript:;", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r1.name);
} }
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_8517068188667277449$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_CHAT_CONTENT_CHAT_CONTENT_COMPONENT_TS____4 = goog.getMsg("\u4E0A\u4F20\u4E2D");
    I18N_3 = MSG_EXTERNAL_8517068188667277449$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_CHAT_CONTENT_CHAT_CONTENT_COMPONENT_TS____4;
}
else {
    I18N_3 = "Uploading";
}
function ChatContentComponent_div_0_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](2, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\uFF1A", c_r1.uploadProgress, "% ");
} }
function ChatContentComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatContentComponent_div_0_span_7_img_1_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ChatContentComponent_div_0_span_7_i_2_Template, 1, 2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ChatContentComponent_div_0_span_7_a_3_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChatContentComponent_div_0_span_7_span_4_Template, 4, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.position ? "chat-content-txt text-left client-content" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.msgType === "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.msgType === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.msgType === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.uploadProgress > 0 && c_r1.uploadProgress < 100);
} }
function ChatContentComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatContentComponent_div_0_span_8_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r21.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "toSafe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, c_r1.data, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function ChatContentComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 25);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatContentComponent_div_0_p_1_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ChatContentComponent_div_0_span_3_Template, 3, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChatContentComponent_div_0_span_4_Template, 2, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatContentComponent_div_0_span_5_Template, 1, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ChatContentComponent_div_0_span_7_Template, 5, 6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ChatContentComponent_div_0_span_8_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ChatContentComponent_div_0_span_9_Template, 1, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "chatList" + c_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.timeStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.position ? "" : "text-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !c_r1.position && c_r1.isUploaded === 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !c_r1.position && c_r1.isUploaded !== 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](c_r1.position ? "tleft" : "tright  mr-1 text-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", c_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !c_r1.msgType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !c_r1.position);
} }
var ChatContentComponent = /** @class */ (function () {
    function ChatContentComponent(com) {
        this.com = com;
    }
    ChatContentComponent.prototype.ngOnInit = function () {
    };
    ChatContentComponent.prototype.clickImg = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            // ???????????????????????????
            this.com.previewOption.src = e.target.src;
            this.com.previewOption.isShowMask = true;
        }
    };
    ChatContentComponent.??fac = function ChatContentComponent_Factory(t) { return new (t || ChatContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    ChatContentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChatContentComponent, selectors: [["chat-content"]], inputs: { chatList: "chatList" }, decls: 1, vars: 1, consts: [[3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["class", "time", 4, "ngIf"], [1, "dialog"], ["class", "uploaded error mr-10", 4, "ngIf", 6, "title"], ["class", "uploaded success mr-10", 3, "title", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before mr-1", 3, "class", 4, "ngIf"], [1, "chat-content", "bg-light-base", "pos-r"], [3, "class", 4, "ngIf"], ["class", "chat-content-txt text-left client-content ", 3, "innerHTML", "click", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before ", 3, "class", 4, "ngIf"], [1, "time"], [1, "uploaded", "error", "mr-10", 6, "title"], [1, "iconfont", "icon-error"], [1, "uploaded", "success", "mr-10", 3, "title"], [1, "read-circle"], [1, "iconfont", "text-lighter-base", "vb-before", "mr-1"], [3, "src", 4, "ngIf"], ["class", "iconfont ", 3, "class", 4, "ngIf"], ["class", "file-name", 3, "href", 4, "ngIf"], [4, "ngIf"], [3, "src"], [1, "iconfont"], [1, "file-name", 3, "href"], [1, "chat-content-txt", "text-left", "client-content", 3, "innerHTML", "click"], [1, "iconfont", "text-lighter-base", "vb-before"]], template: function ChatContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ChatContentComponent_div_0_Template, 10, 12, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.chatList);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["ToSafePipe"]], styles: [".uploaded[_ngcontent-%COMP%]{\r\n    font-size: 12px;    \r\n}\r\n.ml-10[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n.mr-10[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\r\n.success[_ngcontent-%COMP%]{\r\n    color: green;\r\n    vertical-align: top;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    color:red;\r\n    vertical-align: top;\r\n}\r\n.read-circle[_ngcontent-%COMP%]{\r\n    border-radius:50%;\r\n    \r\n    display:inline-block;\r\n    width:12px;\r\n    height:12px;\r\n    vertical-align: top;\r\n}\r\n.unread[_ngcontent-%COMP%]{\r\n    background-color: #d7d2d2;\r\n}\r\n.readed[_ngcontent-%COMP%]{\r\n    background-color: rgb(0, 255, 55);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtZGFpbG9nL2NvbXBvbmVudHMvY2hhdC1jb250ZW50L2NoYXQtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjs7SUFFakIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGF0LWRhaWxvZy9jb21wb25lbnRzL2NoYXQtY29udGVudC9jaGF0LWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRlZHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbn1cclxuLm1sLTEwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1yLTEwe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zdWNjZXNze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5yZWFkLWNpcmNsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjEycHg7XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnVucmVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2QyZDI7XHJcbn1cclxuLnJlYWRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDU1KTtcclxufSJdfQ== */"] });
    return ChatContentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-content',
                templateUrl: './chat-content.component.html',
                styleUrls: ['./chat-content.component.css']
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { chatList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/chat-dailog/components/send-area/send-area.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/chat-dailog/components/send-area/send-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: SendAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAreaComponent", function() { return SendAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_2337662432568257051$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_SEND_AREA_SEND_AREA_COMPONENT_TS_1 = goog.getMsg("\u4E0A\u4F20\u56FE\u7247/\u89C6\u9891/\u6587\u4EF6");
    I18N_0 = MSG_EXTERNAL_2337662432568257051$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_SEND_AREA_SEND_AREA_COMPONENT_TS_1;
}
else {
    I18N_0 = "Upload File/Video/Image";
}
var _c2 = ["title", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc send
     */ 
    var MSG_EXTERNAL_6083837080827780743$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_SEND_AREA_SEND_AREA_COMPONENT_TS_4 = goog.getMsg("\u53D1\u9001");
    I18N_3 = MSG_EXTERNAL_6083837080827780743$$SRC_APP_SHARED_CHAT_DAILOG_COMPONENTS_SEND_AREA_SEND_AREA_COMPONENT_TS_4;
}
else {
    I18N_3 = "Send";
}
var SendAreaComponent = /** @class */ (function () {
    function SendAreaComponent(com, _sanitizer) {
        this.com = com;
        this._sanitizer = _sanitizer;
        this.chatListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.target = null;
        this.showPlaceHolder = true;
        this.editText = '';
        this.files = [];
    }
    SendAreaComponent.prototype.ngOnInit = function () {
        this.target = document.getElementById('editDiv');
        this.setEditDivUsable();
    };
    SendAreaComponent.prototype.ngOnChanges = function (changes) {
        this.target && changes.noUser.currentValue !== changes.noUser.previousValue &&
            this.setEditDivUsable();
    };
    SendAreaComponent.prototype.getFileObj = function (file) {
        /* ===region== ?????????????????????
        .doc application/msword
        .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document
        .xls application/vnd.ms-excel
        .xlsx  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        .ppt application/vnd.ms-powerpoint
        .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation
        .pdf application/pdf
        .zip application/zip, application/octet-stream, application/x-zip-compressed, multipart/x-zip
        .rar application/x-rar-compressed, application/octet-stream
        .gz application/x-gzip
        .txt 'text/plain'
        ??????.avi 	video/x-msvideo
        .wav audio/x-wav
        .mp4 video/mp4*/
        var permitFileType = [
            'application/zip',
            'application/octet-stream',
            'application/x-zip-compressed',
            'multipart/x-zip',
            'application/x-rar-compressed',
            'application/x-gzip',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/pdf',
            'text/plain',
        ];
        var videoType = ['video/x-msvideo', 'video/mp4', 'video/quicktime'];
        var type = file.type;
        var obj = null;
        var i = permitFileType.indexOf(type);
        if (i > -1) {
            obj = { type: 'file', fid: 'file' + Date.now(), name: file.name, file: file, fileType: i < 5 ? 'zip' : i < 8 ? 'doc' : i < 10 ? 'xls' : i < 12 ? 'ppt' : i === 12 ? 'pdf' : 'txt' };
        }
        else if (videoType.indexOf(type) > -1) {
            obj = { type: 'video', fid: 'video' + Date.now(), file: file };
        }
        return obj;
    };
    SendAreaComponent.prototype.getFile = function (e) {
        var _this = this;
        var file = e.target.files[0];
        // ??????????????????
        var size = file.size;
        var obj = null;
        if (size > 10485760) {
            // ????????????10M
            this.com.showAlert({ en: 'Picture / video / file size cannot exceed 10MB', zh: '??????/??????/????????????????????????10MB' }[this.com.localId]);
            return;
        }
        // ????????????
        if (file.type.indexOf('image') > -1) {
            // ?????????
            this.com.preview(file, function (src) {
                obj = { type: 'img', fid: 'img' + Date.now(), src: src, file: file };
                _this.files.push(obj);
                _this.newFileNode(obj);
            });
        }
        else if (obj = this.getFileObj(file)) {
            this.files.push(obj);
            this.newFileNode(obj);
        }
        else {
            this.com.showAlert({
                en: 'This picture / video / file format is not supported',
                zh: '??????????????????/??????/????????????',
            }[this.com.localId]);
        }
        e.target.value = '';
    };
    SendAreaComponent.prototype.newFileNode = function (file) {
        if (file) {
            var fileType = file.type;
            var span = document.createElement('span');
            span.id = file.fid;
            span.contentEditable = false;
            span.className = 'd-inline-block';
            fileType === 'file' && (span.className += ' file-box');
            if (fileType === 'img') {
                var img = document.createElement('img');
                img.src = file.src;
                img.onerror = "this.src='/assets/images/error.jpg'";
                span.appendChild(img);
            }
            else if (fileType === 'file') {
                var icon = document.createElement('i');
                icon.className = 'iconfont icon-' + file.fileType;
                span.appendChild(icon);
                var link = document.createElement('a');
                link.href = file.src;
                link.textContent = file.name;
                link.className = 'file-name';
                span.appendChild(link);
            }
            else if (fileType === 'video') {
                var video_1 = document.createElement('video');
                video_1.setAttribute('controls', 'controls');
                video_1.style = "width:250px;height:250px;";
                this.com.videoPreview(file.file, function (url) {
                    video_1.src = url;
                });
                span.appendChild(video_1);
            }
            this.target.appendChild(span);
            this.keepLastIndex(this.target);
        }
    };
    SendAreaComponent.prototype.setBorder = function (d, e) {
        d.border = !d.border;
        var range = document.createRange();
        range.selectNodeContents(e.target); // document.getElementById('test')
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        this.editFocus();
    };
    // ????????????????????????????????????????????????????????????
    SendAreaComponent.prototype.editPaste = function (e) {
        var _this = this;
        var cbd = e.clipboardData;
        var ua = window.navigator.userAgent;
        // ????????? Safari ?????? return
        if (!(e.clipboardData && e.clipboardData.items)) {
            return;
        }
        // Mac?????????Chrome49???????????? ??????Finder???????????????Bug Hack???
        if (cbd.items &&
            cbd.items.length === 2 &&
            cbd.items[0].kind === 'string' &&
            cbd.items[1].kind === 'file' &&
            cbd.types &&
            cbd.types.length === 2 &&
            cbd.types[0] === 'text/plain' &&
            cbd.types[1] === 'Files' &&
            ua.match(/Macintosh/i) &&
            Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49) {
            return;
        }
        !cbd.items.length &&
            this.com.showAlert({ en: 'Only screenshots can be pasted', zh: '??????????????????' }[this.com.localId]);
        for (var i = 0; i < cbd.items.length; i++) {
            var item = cbd.items[i];
            if (item.kind == 'file') {
                // blob ????????????????????????????????? ?????????????????????????????????
                var blob = item.getAsFile();
                if (blob.size === 0) {
                    return;
                }
            }
            // ??????????????? -???????????????,?????????????????????blob
            if (item.type.indexOf('image') > -1) {
                e.preventDefault();
                this.com.preview(blob, function (src) {
                    // ?????????????????????img????????????data??????
                    var file = {
                        type: 'img',
                        src: src,
                        file: blob,
                        fid: 'img' + Date.now(),
                    };
                    _this.files.push(file);
                    _this.newFileNode(file);
                    _this.keepLastIndex(_this.target);
                });
            }
        }
    };
    // ?????????????????????
    SendAreaComponent.prototype.keepLastIndex = function (obj) {
        if (window.getSelection) {
            //ie11 10 9 ff safari
            obj.focus(); //??????ff?????????????????????????????????
            var range = window.getSelection(); //??????range
            range.selectAllChildren(obj);
            range.collapseToEnd();
        }
    };
    SendAreaComponent.prototype.setEditDivUsable = function () {
        if (!this.isServer || (this.isServer && !this.noUser))
            this.target.setAttribute('contenteditable', 'true');
    };
    SendAreaComponent.prototype.editFocus = function () {
        this.showPlaceHolder = false;
    };
    SendAreaComponent.prototype.editBlur = function (e) {
        this.editText = e.target.innerHTML;
        this.showPlaceHolder = !this.editText;
    };
    SendAreaComponent.prototype.editInput = function (e) {
        //
    };
    SendAreaComponent.prototype.editKeyUp = function (e) {
        if (e.keyCode === 13) {
            // ????????????
            this.send();
        }
    };
    SendAreaComponent.prototype.clickImg = function (e) {
        this.com.previewOption.isShowMask = true;
        this.com.previewOption.src = e.target.src;
    };
    SendAreaComponent.prototype.send = function () {
        var _this = this;
        var html = this.target.innerHTML.trim().replace(/<br>/g, '');
        var div = document.createElement('div');
        div.innerHTML = html;
        if (html) {
            // ??????editText
            var content_1 = { data: html, mark: Date.now().toString() };
            // ????????????????????????
            content_1.isServer = this.isServer;
            content_1.position = false;
            this.chatListChange.emit({ send: 0, content: content_1 });
            var count_1 = 0;
            this.files.forEach(function (file, i) {
                html.indexOf(file.fid) === -1 && _this.files.splice(i, 1);
            });
            if (this.files.length) {
                // ??????files ??????????????????
                this.files.forEach(function (el) {
                    _this.com.uploadFile(el, function (file, err) {
                        if (err) {
                            // ????????????
                            _this.chatListChange.emit({ send: -1, content: content_1 });
                        }
                        else {
                            count_1++;
                            var span_1 = null;
                            Array.from(div.childNodes).forEach(function (el) {
                                el.id === file.fid && (span_1 = el);
                            });
                            try {
                                if (file.type === 'img' || file.type === 'video') {
                                    span_1.children[0].setAttribute('src', file.src);
                                }
                                else if (file.type === 'file') {
                                    span_1.children[1].setAttribute('href', file.src);
                                    span_1.children[1].setAttribute('download', file.name);
                                }
                            }
                            catch (e) { }
                            if (count_1 === _this.files.length) {
                                content_1.data = div.innerHTML;
                                _this.sendMsg(content_1);
                            }
                        }
                    }, function (file) {
                        // chatList ???????????????              
                        content_1.uploadProgress = file.uploadProgress;
                    });
                });
            }
            else {
                // ???????????????
                this.sendMsg(content_1);
            }
        }
        else {
            this.com.showAlert({ en: 'Please fill in the message', zh: '???????????????' }[this.com.localId]);
        }
        this.target.innerHTML = '';
    };
    SendAreaComponent.prototype.sendMsg = function (content) {
        var _this = this;
        this.com.sendMsg(content, function (data) {
            _this.files = [];
            _this.chatListChange.emit({ send: 1, content: content });
        }, function (res) {
            // ??????-?????????????????????????????????????????????
            if (res && res.msg === '???????????????') {
                var offline = {
                    data: {
                        en: 'Customer service is not online, please visit again in a few minutes',
                        zh: '???????????????,???????????????????????????',
                    }[_this.com.localId],
                    mark: Date.now().toString(),
                };
                offline.isServer = true;
                offline.position = true;
                _this.chatListChange.emit({ send: 0, content: offline });
            }
            else {
                _this.chatListChange.emit({ send: -1, content: content });
                _this.com.showAlert({ en: 'Send failed !', zh: '????????????' }[_this.com.localId]);
            }
        }, this.isServer);
    };
    SendAreaComponent.??fac = function SendAreaComponent_Factory(t) { return new (t || SendAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    SendAreaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SendAreaComponent, selectors: [["send-area"]], inputs: { isServer: "isServer", noUser: "noUser" }, outputs: { chatListChange: "chatListChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]], decls: 11, vars: 6, consts: [[1, "op", "pos-r"], [1, "pos-r"], [1, "iconfont", "icon-photo", "vm", "ml-1", "csr"], ["type", "file", 1, "pos-a", "file", "csr", 3, "disabled", "change", 6, "title"], ["id", "showHistoryIcon", 1, "pos-a", "history-clock"], ["id", "historyIcon", 1, "iconfont", "icon-clock", "mr-1", "csr"], [1, "send-area", "clearfix"], ["name", "editText", "id", "editDiv", 1, "textarea", "pos-r", "vm", "ie-scroll", "other-scroll", 3, "focus", "blur", "input", "keyup", "paste"], [1, "bg-light-base", "fr", "vm", "csr", 3, "disabled", "click"]], template: function SendAreaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18nAttributes"](4, _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function SendAreaComponent_Template_input_change_3_listener($event) { return ctx.getFile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function SendAreaComponent_Template_div_focus_8_listener() { return ctx.editFocus(); })("blur", function SendAreaComponent_Template_div_blur_8_listener($event) { return ctx.editBlur($event); })("input", function SendAreaComponent_Template_div_input_8_listener($event) { return ctx.editInput($event); })("keyup", function SendAreaComponent_Template_div_keyup_8_listener($event) { return ctx.editKeyUp($event); })("paste", function SendAreaComponent_Template_div_paste_8_listener($event) { return ctx.editPaste($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SendAreaComponent_Template_button_click_9_listener() { return ctx.send(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](10, I18N_3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.isServer && ctx.noUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.isServer ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.showPlaceHolder ? (ctx.isServer && ctx.noUser ? "placeholder-disabled-" : "placeholder-") + ctx.com.localId : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.isServer && ctx.noUser);
        } }, styles: [".border[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n} \r\n.history-clock[_ngcontent-%COMP%]{\r\n  right:0;\r\n  top:0;\r\n} \r\n.file[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  z-index:3;\r\n} \r\n.cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtZGFpbG9nL2NvbXBvbmVudHMvc2VuZC1hcmVhL3NlbmQtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLE9BQU87RUFDUCxLQUFLO0FBQ1A7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2hhdC1kYWlsb2cvY29tcG9uZW50cy9zZW5kLWFyZWEvc2VuZC1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59IFxyXG4uaGlzdG9yeS1jbG9ja3tcclxuICByaWdodDowO1xyXG4gIHRvcDowO1xyXG59XHJcblxyXG4uZmlsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDozO1xyXG59XHJcbi5jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
    return SendAreaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SendAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'send-area',
                templateUrl: './send-area.component.html',
                styleUrls: ['./send-area.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { isServer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chatListChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_onlineServer$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS__1 = goog.getMsg("\u5728\u7EBF\u5BA2\u670D");
    I18N_0 = MSG_EXTERNAL_onlineServer$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS__1;
}
else {
    I18N_0 = "Questions? Chat with us !";
}
function HeaderComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 8);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"]("blink-" + ctx_r1.com.localId);
} }
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_server$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___3 = goog.getMsg("\u5BA2\u670D");
    I18N_2 = MSG_EXTERNAL_server$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___3;
}
else {
    I18N_2 = "Server";
}
function HeaderComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](2, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.myID);
} }
function HeaderComponent_div_0_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 15);
} }
function HeaderComponent_div_0_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 16);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_online$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS____5 = goog.getMsg("\u5728\u7EBF");
    I18N_4 = MSG_EXTERNAL_online$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS____5;
}
else {
    I18N_4 = "Online";
}
function HeaderComponent_div_0_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](1, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_offline$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS____7 = goog.getMsg("\u6389\u7EBF");
    I18N_6 = MSG_EXTERNAL_offline$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS____7;
}
else {
    I18N_6 = "Offline";
}
function HeaderComponent_div_0_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_div_0_div_7_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 18);
} }
function HeaderComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_0_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.showStateMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HeaderComponent_div_0_div_7_span_1_Template, 1, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HeaderComponent_div_0_div_7_span_2_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HeaderComponent_div_0_div_7_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HeaderComponent_div_0_div_7_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HeaderComponent_div_0_div_7_i_5_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.com.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.com.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.com.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.com.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.com.reconnect);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_online$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___9 = goog.getMsg("\u5728\u7EBF");
    I18N_8 = MSG_EXTERNAL_online$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___9;
}
else {
    I18N_8 = "Online";
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    var MSG_EXTERNAL_logout$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___11 = goog.getMsg("\u767B\u51FA");
    I18N_10 = MSG_EXTERNAL_logout$$SRC_APP_SHARED_HEADER_HEADER_COMPONENT_TS___11;
}
else {
    I18N_10 = "Login out";
}
function HeaderComponent_div_0_ul_8_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_0_ul_8_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](4, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r4.stateMenuShow ? "show" : "");
} }
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????i18n"](3, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HeaderComponent_div_0_span_5_Template, 1, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HeaderComponent_div_0_span_6_Template, 4, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HeaderComponent_div_0_div_7_Template, 6, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HeaderComponent_div_0_ul_8_Template, 5, 2, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.com.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isServer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isServer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isServer);
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(com) {
        this.com = com;
        this.stateMenuShow = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.showStateMenu = function () {
        if (!this.com.reconnect) {
            this.stateMenuShow = !this.stateMenuShow;
        }
    };
    HeaderComponent.prototype.logout = function () {
        // ??????
        this.com.logout();
        this.com.isLogin = false;
    };
    HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { show: "show", isServer: "isServer", myID: "myID" }, decls: 1, vars: 1, consts: [["class", "title bg-base noselect pos-r", "ondragstart", "return false", "id", "nameTitle", 4, "ngIf"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect", "pos-r"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], ["class", "mr-1 blink text-red", 3, "class", 4, "ngIf"], ["class", "mr-1", 4, "ngIf"], ["class", "d-inline-block", 3, "click", 4, "ngIf"], ["class", "state-menu pos-a", 3, "class", 4, "ngIf"], [1, "mr-1", "blink", "text-red"], [1, "mr-1"], [1, "d-inline-block", 3, "click"], ["class", "iconfont icon-true online", 4, "ngIf"], ["class", "iconfont icon-error error", 4, "ngIf"], ["class", "state-txt", 4, "ngIf"], ["class", "iconfont icon-dropdown", 4, "ngIf"], [1, "iconfont", "icon-true", "online"], [1, "iconfont", "icon-error", "error"], [1, "state-txt"], [1, "iconfont", "icon-dropdown"], [1, "state-menu", "pos-a"], [1, "active"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HeaderComponent_div_0_Template, 9, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.show);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".icon-dropdown[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n.icon-error[_ngcontent-%COMP%]{\r\n  font-size:1rem;\r\n  margin-right:0.5rem;\r\n  color:red;\r\n}\r\n.state-menu[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    border: 1px solid #d5e5fa;\r\n    top: 100%;\r\n    color: #36404a;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px #d5e5fa;\r\n    font-weight: 400;\r\n    font-size: 1rem;\r\n    background-color: #fff;\r\n    overflow: hidden;\r\n    transition: all 2s;\r\n    opacity: 0;\r\n    z-index: -1;\r\n  }\r\n.state-menu.show[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    z-index: 6;\r\n  }\r\n.state-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 5px 25px;\r\n    cursor: pointer;\r\n  }\r\n.state-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background-color: #92b4f4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBRUE7SUFDSSxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tZHJvcGRvd24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5pY29uLWVycm9ye1xyXG4gIGZvbnQtc2l6ZToxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDowLjVyZW07XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbiAgXHJcbi5zdGF0ZS1tZW51IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZTVmYTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGNvbG9yOiAjMzY0MDRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjZDVlNWZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuc3RhdGUtbWVudS5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gIH1cclxuICAuc3RhdGUtbWVudSBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnN0YXRlLW1lbnUgbGkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MmI0ZjQ7XHJcbn0iXX0= */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isServer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/assets/js/calendar.js":
/*!***********************************!*\
  !*** ./src/assets/js/calendar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;

(function (undefined) {
  var _global; //????????????
  //????????????


  function extend(def, opt, override) {
    for (var k in opt) {
      if (opt.hasOwnProperty(k) && (!def.hasOwnProperty(k) || override)) {
        def[k] = opt[k];
      }
    }

    return def;
  } //???????????????


  function formartDate(y, m, d, symbol) {
    symbol = symbol || '-';
    m = m.toString()[1] ? m : '0' + m;
    d = d.toString()[1] ? d : '0' + d;
    return y + symbol + m + symbol + d;
  }

  function Schedule(opt) {
    var def = {},
        opt = extend(def, opt, true),
        curDate = opt.date ? new Date(opt.date) : new Date(),
        year = curDate.getFullYear(),
        month = curDate.getMonth(),
        day = curDate.getDate(),
        currentYear = curDate.getFullYear(),
        currentMonth = curDate.getMonth(),
        currentDay = curDate.getDate(),
        selectedDate = '',
        el = document.querySelector(opt.el) || document.querySelector('body'),
        _this = this;

    var bindEvent = function bindEvent() {
      el.addEventListener('click', function (e) {
        switch (e.target.id) {
          case 'nextMonth':
            _this.nextMonthFun();

            break;

          case 'nextYear':
            _this.nextYearFun();

            break;

          case 'prevMonth':
            _this.prevMonthFun();

            break;

          case 'prevYear':
            _this.prevYearFun();

            break;

          default:
            break;
        }

        ;

        if (e.target.className.indexOf('currentDate') > -1) {
          opt.clickCb && opt.clickCb(year, month + 1, e.target.innerHTML);
          selectedDate = e.target.title;
          day = e.target.innerHTML;
          render();
        }
      }, false);
    };

    var init = function init() {
      var translate = {
        lastYear: {
          en: 'Last Year',
          zh: '?????????'
        },
        lastMonth: {
          en: 'Last Month',
          zh: '?????????'
        },
        nextMonth: {
          en: 'Next Month',
          zh: '?????????'
        },
        nextYear: {
          en: 'Next Year',
          zh: '?????????'
        },
        Mo: {
          en: 'Mo',
          zh: '???'
        },
        Tu: {
          en: 'Tu',
          zh: '???'
        },
        Wed: {
          en: 'Wed',
          zh: '???'
        },
        Thr: {
          en: 'Thr',
          zh: '???'
        },
        Fr: {
          en: 'Fr',
          zh: '???'
        },
        Sa: {
          en: 'Sa',
          zh: '???'
        },
        Sun: {
          en: 'Sun',
          zh: '???'
        }
      };
      var scheduleHd = '<div class="schedule-hd">' + '<div>' + '<span class="icon iconfont icon-double-less-than" id="prevYear" title="' + translate.lastYear[opt.lang] + '"></span>' + '<span class="arrow icon iconfont icon-less-than" id="prevMonth" title="' + translate.lastMonth[opt.lang] + '"></span>' + '</div>' + '<div class="today">' + formartDate(year, month + 1, day, '-') + '</div>' + '<div>' + '<span class="arrow icon iconfont icon-great-than" id="nextMonth" title="' + translate.nextMonth[opt.lang] + '"></span>' + '<span class="arrow icon iconfont icon-double-great-than" id="nextYear" title="' + translate.nextYear[opt.lang] + '"></span>' + '</div>' + '</div>';
      var scheduleWeek = '<ul class="week-ul ul-box">' + '<li class="text-red">' + translate.Sun[opt.lang] + '</li>' + '<li>' + translate.Mo[opt.lang] + '</li>' + '<li>' + translate.Tu[opt.lang] + '</li>' + '<li>' + translate.Wed[opt.lang] + '</li>' + '<li>' + translate.Thr[opt.lang] + '</li>' + '<li>' + translate.Fr[opt.lang] + '</li>' + '<li class="text-red">' + translate.Sa[opt.lang] + '</li>' + '</ul>';
      var scheduleBd = '<ul class="schedule-bd ul-box bg-white" ></ul>';
      el.innerHTML = scheduleHd + scheduleWeek + scheduleBd;
      bindEvent();
      render();
    };

    var render = function render() {
      var fullDay = new Date(year, month + 1, 0).getDate(),
          //???????????????
      startWeek = new Date(year, month, 1).getDay(),
          //????????????????????????
      total = (fullDay + startWeek) % 7 == 0 ? fullDay + startWeek : fullDay + startWeek + (7 - (fullDay + startWeek) % 7),
          //???????????????
      lastMonthDay = new Date(year, month, 0).getDate(),
          //??????????????????
      eleTemp = [];

      if (day > fullDay) {
        day = fullDay;
      }

      for (var i = 0; i < total; i++) {
        if (i < startWeek) {
          eleTemp.push('<li class="other-month"><span class="dayStyle">' + (lastMonthDay - startWeek + 1 + i) + '</span></li>');
        } else if (i < startWeek + fullDay) {
          var nowDate = formartDate(year, month + 1, i + 1 - startWeek, '-');
          var addClass = '';
          selectedDate == nowDate && (addClass = 'selected-style');
          formartDate(currentYear, currentMonth + 1, currentDay, '-') == nowDate && (addClass = 'today-flag');
          eleTemp.push('<li class="current-month" ><span title=' + nowDate + ' class="currentDate dayStyle ' + addClass + '">' + (i + 1 - startWeek) + '</span></li>');
        } else {
          eleTemp.push('<li class="other-month"><span class="dayStyle">' + (i + 1 - (startWeek + fullDay)) + '</span></li>');
        }
      }

      el.querySelector('.schedule-bd').innerHTML = eleTemp.join('');
      el.querySelector('.today').innerHTML = formartDate(year, month + 1, day, '-');
    };

    this.nextMonthFun = function () {
      if (month + 1 > 11) {
        year += 1;
        month = 0;
      } else {
        month += 1;
      }

      render();
      opt.nextMonthCb && opt.nextMonthCb(year, month + 1, day);
    }, this.nextYearFun = function () {
      year += 1;
      render();
      opt.nextYeayCb && opt.nextYeayCb(year, month + 1, day);
    }, this.prevMonthFun = function () {
      if (month - 1 < 0) {
        year -= 1;
        month = 11;
      } else {
        month -= 1;
      }

      render();
      opt.prevMonthCb && opt.prevMonthCb(year, month + 1, day);
    }, this.prevYearFun = function () {
      year -= 1;
      render();
      opt.prevYearCb && opt.prevYearCb(year, month + 1, day);
    };
    init();
  } //??????????????????????????????


  _global = function () {
    return this || (0, eval)('this');
  }();

  if ( true && module.exports) {
    module.exports = Schedule;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Schedule;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\programs\by-project\DSystem\angularDsys\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map