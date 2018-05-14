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

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_component__ = __webpack_require__("./src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form__ = __webpack_require__("./src/app/components/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pdf__ = __webpack_require__("./src/app/components/pdf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// --- Main components


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routes */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_pdf__["a" /* PdfComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'cvbuilder-app',
            template: __webpack_require__("./src/app/templates/layout.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_project__ = __webpack_require__("./src/app/interfaces/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_company__ = __webpack_require__("./src/app/interfaces/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = (function () {
    function FormComponent(router) {
        this.router = router;
        this.data = {
            education: {},
            companies: [],
            skills: {
                left: [{ title: '', level: 1 }],
                right: [{ title: '', level: 1 }]
            }
        };
    }
    FormComponent.prototype.ngOnInit = function () {
        var company = new __WEBPACK_IMPORTED_MODULE_3__interfaces_company__["a" /* Company */]();
        var project = new __WEBPACK_IMPORTED_MODULE_2__interfaces_project__["a" /* Project */]();
        company.projects.push(project);
        this.data['companies'].push(company);
    };
    FormComponent.prototype.render = function () {
        var people = JSON.parse(localStorage.getItem('people') || '[]');
        people.push(this.data);
        localStorage.setItem('people', JSON.stringify(people));
        var index = people.length - 1;
        var url = this.router
            .createUrlTree(['pdf', index])
            .toString();
        this.router.navigateByUrl(url);
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'info-form',
            template: __webpack_require__("./src/app/templates/form.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/pdf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfComponent = (function () {
    function PdfComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.data = {};
    }
    PdfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var index = params['index'];
            var people = JSON.parse(localStorage.getItem('people') || '[]');
            if (!people[index]) {
                _this.router.navigate(['/']);
                return;
            }
            else {
                _this.data = people[index];
            }
        });
    };
    PdfComponent.prototype.generate = function () {
        var element = document.getElementById('pdf-page');
        html2pdf(element, {
            margin: [10, 0, 10, 0],
            filename: this.data.name + '.pdf',
            image: { type: 'png', quality: 1 },
            html2canvas: { dpi: 192, letterRendering: true }
        });
    };
    PdfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'pdf-renderer',
            template: __webpack_require__("./src/app/templates/pdf.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PdfComponent);
    return PdfComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
        this.projects = [];
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/interfaces/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form__ = __webpack_require__("./src/app/components/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pdf__ = __webpack_require__("./src/app/components/pdf.ts");

// --- Main pages


var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_form__["a" /* FormComponent */] },
    { path: 'pdf/:index', component: __WEBPACK_IMPORTED_MODULE_2__components_pdf__["a" /* PdfComponent */] },
    // --- otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routing, {
    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* PreloadAllModules */]
});


/***/ }),

/***/ "./src/app/templates/form.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control section\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"data.name\">\n</div>\n<div class=\"form-control section\">\n    <label>Position</label>\n    <input type=\"text\" [(ngModel)]=\"data.position\">\n</div>\n<h1>Education</h1>\n<div class=\"form-control section\">\n    <label>University</label>\n    <input type=\"text\" [(ngModel)]=\"data.education.university\">\n</div>\n<div class=\"form-control section\">\n    <label>Branch</label>\n    <input type=\"text\" [(ngModel)]=\"data.education.branch\">\n</div>\n<div class=\"form-control section\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"data.education.description\">\n</div>\n<br>\n\n<h1>Work experience</h1>\n<div class=\"companies-list section\">\n    <div class=\"form-control\">\n        <button class=\"add pull-right\" (click)=\"data.companies.push({projects:[{}]});\">Add company</button>\n    </div>\n    <div class=\"company section\" *ngFor=\"let company of data.companies\">\n        <div class=\"delim-text\">{{ company.name || 'Company' }}</div>\n        <div class=\"form-control\">\n            <label>Company name</label>\n            <input type=\"text\" [(ngModel)]=\"company.name\">\n        </div>\n        <div class=\"form-control\">\n            <label>Work period</label>\n            <input type=\"text\" [(ngModel)]=\"company.workTime\">\n        </div>\n        <div class=\"form-control\">\n            <label>Position</label>\n            <input type=\"text\" [(ngModel)]=\"company.position\">\n        </div>\n        <div class=\"projects-list section\">\n            <div class=\"form-control\">\n                <button class=\"add pull-right\" (click)=\"company.projects.push({});\">Add project</button>\n            </div>\n            <div class=\"project section\" *ngFor=\"let project of company.projects\">\n                <div class=\"delim-text\">{{ project.name || 'Project' }}</div>\n                <div class=\"form-control\">\n                    <label>Project Name</label>\n                    <input type=\"text\" [(ngModel)]=\"project.name\">\n                </div>\n                <div class=\"form-control\">\n                    <label>Project description</label>\n                    <textarea [(ngModel)]=\"project.description\"></textarea>\n                </div>\n                <div class=\"form-control\">\n                    <label>Duration (years)</label>\n                    <input type=\"text\"  [(ngModel)]=\"project.duration\">\n                </div>\n                <div class=\"form-control\">\n                    <label>Team size</label>\n                    <input type=\"text\"  [(ngModel)]=\"project.teamSize\">\n                </div>\n                <div class=\"form-control\">\n                    <label>Technologies</label>\n                    <input type=\"text\" [(ngModel)]=\"project.techStack\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<h1>Skills</h1>\n<div class=\"companies-list section\">\n    <div class=\"company section\">\n        <div class=\"delim-text\">{{ data.skills.leftName || 'Skills' }}</div>\n        <div class=\"form-control\">\n            <label>Left column name</label>\n            <input type=\"text\" [(ngModel)]=\"data.skills.leftName\">\n        </div>\n\n        <div class=\"form-control\">\n            <button class=\"add pull-right\" (click)=\"data.skills.left.push({title:'', level: 1});\">Add skill</button>\n        </div>\n        <div class=\"section skill\" *ngFor=\"let skill of data.skills.left\">\n            <div class=\"form-control\">\n                <label>Skill name</label>\n                <input type=\"text\"  [(ngModel)]=\"skill.title\">\n            </div>\n            <div class=\"form-control level\">\n                <label>Level</label>\n                <input type=\"number\" max=\"5\" min=\"1\" step=\"0.5\" [(ngModel)]=\"skill.level\">\n            </div>\n        </div>\n    </div>\n    <div class=\"company section\">\n        <div class=\"delim-text\">{{ data.skills.rightName || 'Skills' }}</div>\n        <div class=\"form-control\">\n            <label>Right column name</label>\n            <input type=\"text\" [(ngModel)]=\"data.skills.rightName\">\n        </div>\n\n        <div class=\"form-control\">\n            <button class=\"add pull-right\" (click)=\"data.skills.right.push({title:'', level: 1});\">Add skill</button>\n        </div>\n        <div class=\"section skill\" *ngFor=\"let skill of data.skills.right\">\n            <div class=\"form-control\">\n                <label>Skill name</label>\n                <input type=\"text\"  [(ngModel)]=\"skill.title\">\n            </div>\n            <div class=\"form-control level\">\n                <label>Level</label>\n                <input type=\"number\" max=\"5\" min=\"1\" step=\"1\" [(ngModel)]=\"skill.level\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"form-control\">\n    <button class=\"add pull-right\" (click)=\"render();\">Render</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/templates/layout.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-global-container\" id=\"page-global-container\">\n    <div class=\"content\" id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/templates/pdf.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pdf-page\" id=\"pdf-page\">\n    <div class=\"head\">\n        <div class=\"logo\"></div>\n        <div class=\"logo-side\">\n            <div class=\"name\">{{data.name}}</div>\n            <div class=\"position\">{{data.position}}</div>\n        </div>\n    </div>\n    <div class=\"section-name\" style=\"margin-top:0px;\">\n        <img src=\"/assets/expirience-icon.svg\">\n        <span>Experience</span>\n    </div>\n    <div class=\"work-item\" *ngFor=\"let company of data.companies\">\n        <div class=\"left\">\n            <div class=\"work-name\">{{company.name}}</div>\n            <div class=\"period\">{{company.workTime}}</div>\n        </div>\n        <div class=\"right\">\n            <div class=\"dot\"></div>\n            <div class=\"position\">Position - {{company.position}}</div>\n            <div class=\"prj\">Projects:</div>\n            <ul class=\"projects\">\n                <li *ngFor=\"let project of company.projects\">\n                    <div class=\"desc\">\n                        <span>{{project.name}}</span>&nbsp;-&nbsp;{{ project.description }}\n                    </div>\n                    <div class=\"details\">\n                        <span>Duration: {{project.duration}}</span>\n                        <span>Team: {{project.teamSize}}</span>\n                    </div>\n                    <div class=\"stack\">{{project.techStack}}</div>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n\n    <div class=\"section-name\">\n        <img src=\"/assets/education-icon.svg\">\n        <span>Education</span>\n    </div>\n    <div class=\"education\">\n        <div class=\"name\">{{data.education.university}}</div>\n        <div class=\"prof\">{{data.education.branch}}</div>\n        <div class=\"desc\">{{data.education.description}}</div>\n    </div>\n\n\n\n    <div class=\"section-name\">\n        <img src=\"/assets/skills-icon.svg\">\n        <span>Professional skills</span>\n    </div>\n    <div class=\"skills\">\n        <div class=\"left\">\n            <div class=\"name\">{{data.skills.leftName}}</div>\n            <ul class=\"skills-list\">\n                <li *ngFor=\"let skill of data.skills.left\">\n                    <div class=\"title\">\n                        {{skill.title}}\n                    </div>\n                    <div class=\"level pull-right {{'c'+skill.level}}\">\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"right\">\n            <div class=\"name\">{{data.skills.rightName}}</div>\n            <ul class=\"skills-list\">\n                <li *ngFor=\"let skill of data.skills.right\">\n                    <div class=\"title\">\n                        {{skill.title}}\n                    </div>\n                    <div class=\"level pull-right {{'c'+skill.level}}\">\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                        <div class=\"circle\"></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n\n<button id=\"float-btn\" (click)=\"generate()\">Download</button>"

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
    production: false,
    BRANDING: 'IncoAlliance',
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map