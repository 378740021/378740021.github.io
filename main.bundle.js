webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/doc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doc; });
var Doc = /** @class */ (function () {
    function Doc() {
    }
    return Doc;
}());



/***/ }),

/***/ "./src/app/Models/mock-docs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOCS; });
var DOCS = [
    { id: 11, name: 'Listening 350 Words  1-2', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 1 & 2.MP3', page: 2 },
    { id: 12, name: 'Listening 350 Words  3-4', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 3 & 4.MP3', page: 2 },
    { id: 13, name: 'Listening 350 Words  5-6', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 5 & 6.MP3', page: 3 },
    { id: 14, name: 'Listening 350 Words  7-8', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 7 & 8.MP3', page: 3 },
    { id: 15, name: 'Listening 350 Words  9-10', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 9 & 10.MP3', page: 4 },
    { id: 16, name: 'Listening 350 Words  11-12', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 11 & 12.MP3', page: 4 },
    { id: 17, name: 'Listening 350 Words  13-14', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 13 & 14.MP3', page: 5 },
    { id: 18, name: 'Listening 350 Words  15-16', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 15 & 16.MP3', page: 5 },
    { id: 19, name: 'Listening 350 Words  17-18', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 17 & 18.MP3', page: 6 },
    { id: 20, name: 'Listening 350 Words  19-20', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 19 & 20.MP3', page: 6 },
    { id: 21, name: 'Listening 350 Words  21-22', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 21 & 22.MP3', page: 7 },
    { id: 22, name: 'Listening 350 Words  23-24', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 23 & 24.MP3', page: 7 },
    { id: 23, name: 'Listening 350 Words  25-26', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 25 & 26.MP3', page: 8 },
    { id: 24, name: 'Listening 350 Words  27-28', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 27 & 28.MP3', page: 8 },
    { id: 25, name: 'Listening 350 Words  29-30', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 29 & 30.MP3', page: 9 },
    { id: 26, name: 'Listening 350 Words  31-32', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 31 & 32.MP3', page: 9 },
    { id: 27, name: 'Listening 350 Words  33-34', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 33 & 34.MP3', page: 10 },
    { id: 28, name: 'Listening 350 Words  35', path: './assets/Listening350Words.pdf', voicePath: './assets/Voices/G 35.MP3', page: 10 }
];


/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_mock_docs__ = __webpack_require__("./src/app/Models/mock-docs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.documents = __WEBPACK_IMPORTED_MODULE_1__Models_mock_docs__["a" /* DOCS */];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.selectedDoc = this.documents[0];
    };
    AppComponent.prototype.onSelect = function (doc) {
        this.selectedDoc = doc;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n  <table>\n  <tr>\n    <h3 class=\"text-center\">My Words</h3>\n\n  </tr>\n    <tr>\n        <td  class=\"text-center\">\n        <ul class = \"list-group\">\n         <li *ngFor=\"let doc of documents\" class=\"list-group-item\"  (click)=\"onSelect(doc)\">\n            <a>\n              <span >{{doc.name}}</span>\n            </a>\n         </li>\n        </ul>\n        </td>\n   </tr>\n\n  <tr>\n    <td class=\"text-center\">\n      <DocComponent [mydocument]=\"selectedDoc\"></DocComponent>\n    </td>\n  </tr>\n\n  </table>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doc_component__ = __webpack_require__("./src/app/doc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__doc_component__["a" /* DocComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/doc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_doc__ = __webpack_require__("./src/app/Models/doc.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocComponent = /** @class */ (function () {
    function DocComponent() {
        this.title = 'app';
    }
    DocComponent.prototype.setTile = function () {
        //this.title =this.pdfSrc.replace("/^.*[\\\/]/", '');
        this.title = "this.mydocument.name;";
    };
    DocComponent.prototype.ngOnInit = function () {
        this.setTile();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Models_doc__["a" /* Doc */])
    ], DocComponent.prototype, "mydocument", void 0);
    DocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'DocComponent',
            template: "\n  <Table >\n  <tr  class=\"center-block\">\n    <td class=\"text-center\" >\n     <audio\n      id=\"t-rex-roar\"\n      controls\n      src={{mydocument.voicePath}}>\n       Your browser does not support the <code>audio</code> element.\n      </audio>\n  </td>\n </tr>\n\n    <tr *ngIf=\"mydocument\">\n        <td class=\"text-center\">\n         <h3 >{{mydocument.name}}</h3>\n            <pdf-viewer [src]=\"mydocument.path\" \n                [render-text]=\"true\"\n                style=\"display: block;\"\n                [show-all]=\"false\"\n                [page]=\"mydocument.page\">\n            </pdf-viewer>\n        </td>\n    </tr>\n\n    <Table>\n  "
        })
    ], DocComponent);
    return DocComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map