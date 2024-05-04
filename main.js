"use strict";
(self["webpackChunkrecipe_app"] = self["webpackChunkrecipe_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe/recipe.component */ 4174);
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/recipes.component */ 5735);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ 1224);
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-article/create-article.component */ 2255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: '', title: 'Home | Recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__.RecipesComponent
    },
    {
        path: 'recipes', title: 'Home | Recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__.RecipesComponent,
    },
    {
        path: 'new', title: 'New recipe | Recipes', component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_4__.CreateArticleComponent,
    },
    {
        path: 'categories', title: 'Categories | Recipes', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesComponent
    },
    {
        path: 'recipes',
        children: [
            { path: ':id', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__.RecipeComponent }
        ]
    },
    {
        path: 'coz/admin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(module => module.adminModule)
    },
    { path: '**', title: 'Page not found | Recipes', component: _error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'Recipes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/recipes.component */ 5735);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe/recipe.component */ 4174);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ 1224);
/* harmony import */ var _create_article_create_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-article/create-recipe/create-recipe.component */ 3921);
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-article/create-article.component */ 2255);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review-form/review-form.component */ 5096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.NoopAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__.RecipesComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__.RecipeComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent,
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__.CategoriesComponent,
        _create_article_create_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_8__.CreateRecipeComponent,
        _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_9__.CreateArticleComponent,
        _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_10__.ReviewFormComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.NoopAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] }); })();


/***/ }),

/***/ 1224:
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/post.service */ 9166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function CategoriesComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.searchParam);
} }
function CategoriesComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 17)(3, "div", 17)(4, "div", 17)(5, "div", 17)(6, "div", 17)(7, "div", 17)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { category: a0 }; };
function CategoriesComponent_ng_template_15_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "button", 21)(3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, category_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r8);
} }
function CategoriesComponent_ng_template_15_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 19)(2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoriesComponent_ng_template_15_ng_container_0_ng_container_3_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.categoriesList);
} }
function CategoriesComponent_ng_template_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sorry, couldn't find anything");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function CategoriesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoriesComponent_ng_template_15_ng_container_0_Template, 4, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoriesComponent_ng_template_15_ng_template_1_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.categoriesList.length > 0)("ngIfElse", _r5);
} }
class CategoriesComponent {
    constructor(activatedRoute, postService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.categoriesList = [];
        this.loading = true;
        this.searchParam = '';
    }
    ngOnInit() {
        this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search') === null ? '' : this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase();
        this.categorySub = this.postService.getCategories(this.searchParam).subscribe({
            next: (data) => {
                for (let category of data) {
                    this.categoriesList.push(category.title);
                }
                this.loading = false;
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            }
        });
    }
    ngOnDestroy() {
        this.categorySub.unsubscribe();
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 17, vars: 3, consts: [[1, "container", "main-container", "categories-container"], [1, "main-container__header"], [1, "text-h1_bold"], [1, "header-desc"], [1, "search"], ["action", "", 1, "form-button", "search-form"], ["placeholder", "Enter category", "type", "text", "name", "search"], ["type", "submit", 1, "icon-button", "button-search"], ["src", "assets/icons/search.svg", "alt", "search", 1, "icon"], [4, "ngIf"], [1, "main-container__body"], [4, "ngIf", "ngIfElse"], ["done", ""], ["action", "", 1, "reset-form"], ["for", "search"], ["src", "assets/icons/close.svg", "alt", "reset", 1, "icon"], [1, "category-skeleton"], [1, "category-skeleton__placeholder"], ["cantFind", ""], [1, "category-nav"], [4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "button", "button_positive-outline", "button-category", 3, "queryParams"], [1, "text-s_l", "text_prim-color"], [1, "empty-card"], [1, "text-h2_bold"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoriesComponent_ng_container_12_Template, 7, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CategoriesComponent_ng_container_14_Template, 9, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CategoriesComponent_ng_template_15_Template, 3, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchParam !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: [".category-nav[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1 1 140px;\n  height: 60px;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .button-category[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  width: 100%;\n  height: 100%;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .button-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .button-category[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.category-skeleton[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-skeleton__placeholder[_ngcontent-%COMP%] {\n  flex: 1 1 140px;\n  height: 60px;\n  width: 100%;\n  background-color: #c6c6c6;\n  border-radius: 5px;\n}\n.search[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n}\n.search-form[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 30px;\n  justify-content: space-between;\n  border-radius: 5px;\n}\n.search-form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reset-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgb(246, 223, 152);\n  border-radius: 5px;\n}\n.reset-form[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.button-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.empty-card[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRVo7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRVo7QUFEWTtFQUNRLGdCQUFBO0VBQ0EsMEJBQUE7QUFHcEI7QUFDZ0I7RUFDSSxjQUFBO0FBQ3BCO0FBTUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFISjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFKSjtBQU1BO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUNJLE9BQUE7QUFGUjtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBR0k7RUFDSSxlQUFBO0FBRFI7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1uYXYge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICYgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJiBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBjYWxjKDE1MHB4IC0gMTBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiAuYnV0dG9uLWNhdGVnb3J5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICYgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktc2tlbGV0b24ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICZfX3BsYWNlaG9sZGVyIHtcclxuICAgICAgICBmbGV4OiAxIDEgY2FsYygxNTBweCAtIDEwcHgpO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuLnNlYXJjaC1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmID4gaW5wdXQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuLnJlc2V0LWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDIyMyAxNTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgJiA+IGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG59XHJcbi5idXR0b24tc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5lbXB0eS1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 2255:
/*!************************************************************!*\
  !*** ./src/app/create-article/create-article.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateArticleComponent": () => (/* binding */ CreateArticleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-recipe/create-recipe.component */ 3921);



class CreateArticleComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) { return new (t || CreateArticleComponent)(); };
CreateArticleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateArticleComponent, selectors: [["app-create-article"]], decls: 2, vars: 0, template: function CreateArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-create-recipe")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _create_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_0__.CreateRecipeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3921:
/*!*************************************************************************!*\
  !*** ./src/app/create-article/create-recipe/create-recipe.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRecipeComponent": () => (/* binding */ CreateRecipeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _assets_base_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/base/categories.json */ 9408);
/* harmony import */ var _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/base/recipes.json */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_preview_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/preview-article.service */ 32);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recipe/recipe.component */ 4174);













function CreateRecipeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "form", 34)(4, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Create new recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Profile image: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateRecipeComponent_ng_container_0_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.imageReader(_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Description of recipe: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 45)(20, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.setFirstStep(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.firstForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.firstForm.touched ? "as" : "");
} }
function CreateRecipeComponent_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", category_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r24);
} }
function CreateRecipeComponent_ng_container_1_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_ng_container_12_ng_container_6_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.setValue(_r25, _r19, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-value", category_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r27);
} }
function CreateRecipeComponent_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_ng_container_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.getValues()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreateRecipeComponent_ng_container_1_ng_container_12_ng_container_6_Template, 3, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_ng_container_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.addCategory(_r19.value, _r25, _r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r21.onAttempt ? "ng-invalid" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-value", ctx_r21.categoryList[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.categoryList[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r21.categoryList);
} }
function CreateRecipeComponent_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 68)(5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_ng_container_14_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.removeCategory(i_r34)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r33);
} }
function CreateRecipeComponent_ng_container_1_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 68)(9, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_ng_container_29_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const i_r38 = restoredCtx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.removeIngredients(i_r38)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r37.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r37.suffix);
} }
function CreateRecipeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "form", 34)(4, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add some extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Categories: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 49)(9, "select", null, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateRecipeComponent_ng_container_1_ng_container_11_Template, 3, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreateRecipeComponent_ng_container_1_ng_container_12_Template, 9, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CreateRecipeComponent_ng_container_1_ng_container_14_Template, 7, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Ingredient:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Amout:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.addIngredients()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, CreateRecipeComponent_ng_container_1_ng_container_29_Template, 11, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Portions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Required time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 45)(37, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.stepBack()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.setSecondStep(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.secondForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.onAttempt ? "ng-invalid" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.categoryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.categoryList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.secondForm.value.categories.data.length > 0 ? "table_offset-top" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.secondForm.value.categories.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.nameIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.amountIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.suffixIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.secondForm.value.ingredients.data.length > 0 ? "table_offset-top" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.secondForm.value.ingredients.data);
} }
function CreateRecipeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDragStarted", function CreateRecipeComponent_div_15_Template_div_cdkDragStarted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r4.classList.add("drop-area")); })("cdkDragEnded", function CreateRecipeComponent_div_15_Template_div_cdkDragEnded_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r4.classList.remove("drop-area")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Drag me");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r45 === "instruction" || item_r45 === "galery" ? "important" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Add ", item_r45, "");
} }
function CreateRecipeComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r50);
} }
function CreateRecipeComponent_ng_container_57_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingredient_r51.amount);
} }
function CreateRecipeComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateRecipeComponent_ng_container_57_span_5_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ingredient_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingredient_r51.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ingredient_r51.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ingredient_r51.suffix, "");
} }
function CreateRecipeComponent_ng_container_58_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function CreateRecipeComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateRecipeComponent_ng_container_58_ng_container_1_Template, 1, 0, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, item_r54));
} }
function CreateRecipeComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32, 76)(3, "div", 77)(4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_59_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r57.hidePreviewOfPage(_r56)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 80)(7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function CreateRecipeComponent_ng_container_60_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_60_ng_container_7_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62); const category_r60 = restoredCtx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r61.addCategory(category_r60)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r60);
} }
function CreateRecipeComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "div", 82)(4, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreateRecipeComponent_ng_container_60_ng_container_7_Template, 3, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_60_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r63.showCategoriesForm(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.categoryList);
} }
function CreateRecipeComponent_ng_container_61_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 68)(9, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_61_ng_container_18_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69); const i_r67 = restoredCtx.index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r68.removeIngredients(i_r67)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r66.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r66.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r66.suffix);
} }
function CreateRecipeComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "form", 82)(4, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add ingredients:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Ingredient:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Amout:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_61_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r70.addIngredients()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CreateRecipeComponent_ng_container_61_ng_container_18_Template, 11, 3, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_container_61_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r72.showIngredientsForm(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r11.invalidIngredients ? "invalid" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r11.nameIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r11.amountIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r11.suffixIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r11.secondForm.value.ingredients.data.length > 0 ? "table_offset-top" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.secondForm.value.ingredients.data);
} }
function CreateRecipeComponent_ng_template_62_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const img_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r82, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function CreateRecipeComponent_ng_template_62_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div")(2, "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "source", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r81.galery.video, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function CreateRecipeComponent_ng_template_62_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 88)(1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Galery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 89)(4, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Images: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateRecipeComponent_ng_template_62_div_2_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r83.galeryImagesReader(_r78)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateRecipeComponent_ng_template_62_div_2_ng_container_9_Template, 3, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 89)(11, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Video: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateRecipeComponent_ng_template_62_div_2_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84); const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r85.galeryVideoReader(_r80)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreateRecipeComponent_ng_template_62_div_2_div_15_Template, 4, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r74.galeryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r74.galery.imgs.length > 0 ? "uploaded-galery" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r74.galery.imgs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r74.galeryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r74.galery.video !== "");
} }
function CreateRecipeComponent_ng_template_62_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nutrition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 100)(4, "table")(5, "tr")(6, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Protein");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0421arbohydrate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr")(15, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r75.nutritionForm);
} }
function CreateRecipeComponent_ng_template_62_div_4_ng_container_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r90.instructionImgsArray[i_r88], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function CreateRecipeComponent_ng_template_62_div_4_ng_container_5_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_template_62_div_4_ng_container_5_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r95); const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r93.deleteInstruction(i_r88)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateRecipeComponent_ng_template_62_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 109)(2, "h3", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 110)(5, "div", 111)(6, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Image: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 112, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateRecipeComponent_ng_template_62_div_4_ng_container_5_Template_input_change_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97); const i_r88 = restoredCtx.index; const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r96.imageInstructionReader(_r89, i_r88)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CreateRecipeComponent_ng_template_62_div_4_ng_container_5_div_10_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 114)(12, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "textarea", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreateRecipeComponent_ng_template_62_div_4_ng_container_5_button_15_Template, 2, 0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r87 = ctx.$implicit;
    const i_r88 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", step_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Step ", i_r88 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", step_r87.value.imageSrc !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r88 > 0);
} }
function CreateRecipeComponent_ng_template_62_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Instruction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateRecipeComponent_ng_template_62_div_4_ng_container_5_Template, 16, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_ng_template_62_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r98.addInstruction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Add new step");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r76.instructionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r76.instructionArray.controls);
} }
function CreateRecipeComponent_ng_template_62_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Advise:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r77.adviseForm);
} }
function CreateRecipeComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreateRecipeComponent_ng_template_62_div_2_Template, 16, 6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CreateRecipeComponent_ng_template_62_div_3_Template, 23, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreateRecipeComponent_ng_template_62_div_4_Template, 8, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateRecipeComponent_ng_template_62_div_5_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", item_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "galery");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "nutrition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "advise");
} }
class CreateRecipeComponent {
    constructor(activatedRoute, router, titleService, previewArticle) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.previewArticle = previewArticle;
        this.firstCompleted = false;
        this.secondCompleted = false;
        this.addNewCategory = false;
        this.addNewIngredient = false;
        this.invalidIngredients = false;
        this.list = [];
        this.actionList = ['galery', 'nutrition', 'instruction', 'advise'];
        this.adviseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
        this.adviseCompleted = false;
        this.galeryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            imagesForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            videoForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
        this.profileImg = '';
        this.galery = { imgs: [], video: '' };
        this.nutritionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            energy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            protein: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            fat: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            carbohydrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
        this.instructionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            instructionArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                    text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]),
                    imageSrc: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
                })
            ])
        });
        this.instructionImgsArray = [];
        this.instructionCompleted = false;
        this.galeryCompleted = false;
        this.nutritionCompleted = false;
        this.onAttempt = false;
        this.preview = false;
        this.firstStep = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(this.firstCompleted);
        this.secondStep = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(this.secondCompleted);
        this.categoryList = [];
        this.firstForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            authorImg: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
        this.secondForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({ data: [] }),
            ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({ data: [] }),
            portions: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]),
            timeToDo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
        this.nameIngredient = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.amountIngredient = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.suffixIngredient = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    }
    get instructionArray() {
        return this.instructionForm.controls['instructionArray'];
    }
    getValues() {
        if (document.querySelector(".custom-options")?.classList.contains('opened'))
            document.querySelector(".custom-options")?.classList.remove('opened');
        else
            document.querySelector(".custom-options")?.classList.add('opened');
    }
    setValue(customSelect, select, event) {
        const value = event.target.dataset["value"];
        if (value) {
            customSelect.dataset["value"] = value;
            customSelect.children[0].innerHTML = value;
            select.value = value;
        }
    }
    addInstruction() {
        if (!this.instructionArray.valid) {
            this.instructionArray.markAllAsTouched();
            return;
        }
        const stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]),
            imageSrc: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
        this.instructionArray.push(stepForm);
    }
    deleteInstruction(stepIndex) {
        this.instructionArray.removeAt(stepIndex);
    }
    getFirstStep() {
        return this.firstStep.asObservable();
    }
    setFirstStep(value) {
        if (this.firstForm.valid)
            this.firstStep.next(value);
        else
            this.firstForm.markAllAsTouched();
    }
    getSecondStep() {
        return this.secondStep.asObservable();
    }
    setSecondStep(value) {
        let error = false;
        if (this.secondForm.controls.categories.value.data.length === 0) {
            this.onAttempt = true;
            if (this.secondForm.controls.ingredients.value.data.length === 0) {
                this.nameIngredient.markAsTouched();
                this.amountIngredient.markAsTouched();
                this.suffixIngredient.markAsTouched();
            }
            this.secondForm.markAllAsTouched();
            error = true;
        }
        if (this.secondForm.controls.ingredients.value.data.length === 0) {
            this.nameIngredient.markAsTouched();
            this.amountIngredient.markAsTouched();
            this.suffixIngredient.markAsTouched();
            this.secondForm.markAllAsTouched();
            error = true;
        }
        if (this.secondForm.valid && !error)
            this.secondStep.next(value);
        else {
            this.secondForm.markAllAsTouched();
        }
    }
    cancel() {
        this.changeBodyOverflow(false);
        const url = String(this.activatedRoute.snapshot.queryParamMap.get('returnURL')) === 'null' ? '/' : String(this.activatedRoute.snapshot.queryParamMap.get('returnURL'));
        this.router.navigateByUrl(url);
    }
    stepBack() {
        this.setFirstStep(false);
    }
    ngOnInit() {
        document.body.addEventListener('click', function (event) {
            const target = event.target, parent = target.parentElement;
            if (target && !target.classList.contains('custom-select') && parent && !parent.classList.contains('custom-select'))
                document.querySelector('.custom-options')?.classList.remove('opened');
        });
        this.nutritionForm.disable();
        this.getCategories();
        this.changeBodyOverflow(true);
        this.sub = this.getFirstStep().subscribe((res) => {
            this.firstCompleted = res;
            console.log(this.firstForm);
        });
        this.sub = this.getSecondStep().subscribe((res) => {
            this.secondCompleted = res;
            this.changeBodyOverflow(!res);
        });
    }
    getCategories() {
        for (let category of _assets_base_categories_json__WEBPACK_IMPORTED_MODULE_0__) {
            this.categoryList.push(category);
        }
    }
    // drop handler, activate adding data to recipe
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        if (event.container.data.includes('nutrition')) {
            this.nutritionForm.enable();
            Object.values(this.nutritionForm.controls).forEach((e) => {
                e.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)]);
            });
        }
        if (event.container.data.includes('advise'))
            this.adviseForm.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(20)]);
    }
    // add new
    addCategory(value, customSelect, select) {
        const spliceKey = this.categoryList.indexOf(value);
        if (spliceKey !== -1)
            this.categoryList.splice(spliceKey, 1);
        this.secondForm.value.categories?.data.push(value);
        if (customSelect) {
            const val = typeof this.categoryList[0] === 'string'
                ? this.categoryList[0]
                : this.categoryList[0].title;
            customSelect.dataset["value"] = val;
            customSelect.children[0].innerHTML = val;
        }
        this.onAttempt = false;
        if (this.categoryList.length === 0) {
            this.addNewCategory = false;
        }
    }
    removeCategory(index) {
        this.categoryList.push(this.secondForm.value.categories.data[index]);
        this.secondForm.value.categories.data.splice(index, 1);
    }
    addIngredients() {
        if (!this.nameIngredient.valid || !this.amountIngredient.valid || !this.suffixIngredient.valid)
            return;
        const value = { name: this.nameIngredient.value, amount: this.amountIngredient.value, suffix: this.suffixIngredient.value };
        this.secondForm.value.ingredients?.data.push(value);
        this.nameIngredient.setValue('');
        this.amountIngredient.setValue(null);
        this.suffixIngredient.setValue('');
        this.nameIngredient.markAsUntouched();
        this.amountIngredient.markAsUntouched();
        this.suffixIngredient.markAsUntouched();
    }
    removeIngredients(index) {
        this.secondForm.value.ingredients.data.splice(index, 1);
    }
    // forms below are displaying while editing
    showCategoriesForm(bool) {
        this.addNewCategory = bool;
        this.changeBodyOverflow(bool);
    }
    showIngredientsForm(bool) {
        if (this.secondForm.value.ingredients.data.length === 0 && !bool) {
            this.invalidIngredients = true;
            return;
        }
        this.addNewIngredient = bool;
        this.changeBodyOverflow(bool);
    }
    showPreviewOfPage() {
        const item = this.defineItem();
        this.previewArticle.setPreviewItem(item);
        document.body.style.setProperty('overflow', 'hidden');
        this.titleService.setTitle('Preview | Recipes');
        this.preview = true;
    }
    hidePreviewOfPage(wrapper) {
        document.body.style.setProperty('overflow', 'auto');
        this.titleService.setTitle('New recipe | Recipes');
        wrapper.style.animation = 'fade-out .3s forwards';
        setTimeout(() => { this.preview = false; }, 300);
    }
    saveRecipe() {
        const importantEl = document.querySelectorAll('#important');
        const forms = [
            this.firstForm,
            this.secondForm,
            this.galeryForm,
            this.adviseForm,
            this.instructionArray
        ];
        if (this.nutritionForm.enabled)
            forms.push(this.nutritionForm);
        var result = this.defineItem();
        var err = false;
        if (importantEl.length > 0 || !this.isAllvalid(forms)) {
            err = true;
        }
        if (err) {
            importantEl.forEach((e) => {
                e.classList.add('invalid');
            });
            forms.forEach((e) => {
                e.markAllAsTouched();
            });
            return;
        }
        console.log(result);
    }
    isAllvalid(forms) {
        var valid = true;
        forms.forEach((e) => {
            if (!e.valid) {
                valid = false;
                return;
            }
        });
        return valid;
    }
    imageReader(element, displayingElement) {
        if (!element.files)
            return;
        let uploadedFile;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedFile = reader.result;
            if (displayingElement === undefined)
                this.profileImg = uploadedFile;
            else
                displayingElement = uploadedFile;
        });
        reader.readAsDataURL(element.files[0]);
    }
    imageInstructionReader(element, index) {
        if (!element.files)
            return;
        let uploadedFile;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedFile = reader.result;
            this.instructionImgsArray[index] = uploadedFile;
        });
        reader.readAsDataURL(element.files[0]);
    }
    galeryImagesReader(element) {
        if (!element.files)
            return;
        const length = this.galery.imgs.length + element.files.length;
        if (length > 8) {
            alert('Only 8 images or less allowed');
            return;
        }
        for (var i = 0; i < element.files.length; i++) {
            let uploadedFile;
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                uploadedFile = reader.result;
                this.galery.imgs.push(uploadedFile);
            });
            reader.readAsDataURL(element.files[i]);
        }
    }
    galeryVideoReader(element) {
        if (!element.files)
            return;
        let uploadedFile;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedFile = reader.result;
            this.galery.video = uploadedFile;
        });
        reader.readAsDataURL(element.files[0]);
    }
    changeBodyOverflow(value) {
        if (value) {
            document.body.style.setProperty('overflow', 'hidden');
        }
        else {
            document.body.style.setProperty('overflow', 'auto');
        }
    }
    defineItem() {
        const instruction = [];
        let nutritionsObj = {};
        Object.values(this.instructionArray.controls).forEach((e, i) => {
            instruction.push({ text: e.value.text, imageSrc: this.instructionImgsArray[i] === undefined ? '' : this.instructionImgsArray[i] });
        });
        if (this.nutritionForm.enabled && this.nutritionForm.value)
            nutritionsObj = {
                energy: this.nutritionForm.value.energy,
                protein: this.nutritionForm.value.protein,
                fat: this.nutritionForm.value.fat,
                carbohydrate: this.nutritionForm.value.carbohydrate
            };
        const item = {
            header: {
                title: this.firstForm.value.title,
                author: {
                    name: this.firstForm.value.author,
                    img: this.profileImg
                },
                id: _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__.length + 1,
                likes: 0,
                dislikes: 0,
                saved: 0,
                imgSrc: this.galery.imgs[0],
                categories: this.secondForm.value.categories.data,
                difficulty: 1,
                ingredients: this.secondForm.value.ingredients.data,
                portions: this.secondForm.value.portions,
                portionsDefault: this.secondForm.value.portions,
                timeToDo: {
                    hours: Number(this.secondForm.value.timeToDo?.slice(0, 2)),
                    minutes: Number(this.secondForm.value.timeToDo?.slice(3, 5)),
                },
                desc: this.firstForm.value.desc,
                ref: `article-${_assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__.length}`
            },
            id: 1,
            title: this.firstForm.value.title,
            ref: '1',
            body: {
                galery: {
                    videoSrc: this.galery.video,
                    imagesSrc: this.galery.imgs
                },
                nutritions: nutritionsObj,
                instructions: instruction,
                desc: this.firstForm.value.desc,
                advice: this.adviseForm?.value
            }
        };
        return item;
    }
}
CreateRecipeComponent.ɵfac = function CreateRecipeComponent_Factory(t) { return new (t || CreateRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_preview_article_service__WEBPACK_IMPORTED_MODULE_2__.PreviewArticleService)); };
CreateRecipeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateRecipeComponent, selectors: [["app-create-recipe"]], decls: 64, vars: 24, consts: [[4, "ngIf"], [1, "container", "main-container", 3, "id"], [1, "main-container__aside"], [1, "widget-panel"], [1, "elements-panel"], [1, "group-element"], [1, "button", "button_positive-outline", "button-add", "button_icon", 3, "click"], ["src", "assets/icons/plus.svg", "alt", "add", 1, "icon_m"], ["cdkDropList", "", 1, "draggable-group", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["mainActionList", "cdkDropList"], ["class", "draggable-card", "cdkDrag", "", 3, "id", "class", "cdkDragStarted", "cdkDragEnded", 4, "ngFor", "ngForOf"], [1, "widget-panel__control-panel"], [1, "button", 3, "click"], [1, "button", "button_positive", 3, "click"], ["cdkDropList", "", 1, "create-content", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["dropArea", "", "mainList", "cdkDropList"], [1, "main-container__header"], [1, "text-h1_bold"], [1, "profile"], [1, "profile-image"], ["alt", "profile photo", 1, "image-wrapper", 3, "src"], [1, "text-h3"], [1, "group-container", "group-container_center"], [1, "text-h4"], [1, "text-h4", "text-h4_light"], [1, "group-container", "group-container_vertical", "group-container_center"], [1, "group-categories"], [4, "ngFor", "ngForOf"], [1, "main-container__body", "form-container"], [1, "group-container", "group-container_vertical"], [1, "ingredients-list"], ["templateItem", ""], [1, "page-wrapper"], [1, "form-wrapper"], [1, "form", 3, "formGroup"], [1, "text-h2"], ["for", "title", 1, "text-m_m"], ["type", "text", "formControlName", "title", "placeholder", "Enter title of recipe", 1, "text-s"], ["for", "author", 1, "text-m_m"], ["type", "text", "formControlName", "author", "placeholder", "Enter your name", 1, "text-s"], ["for", "authorImg", 1, "text-m_m"], ["type", "file", "formControlName", "authorImg", "accept", "image/png, image/jpeg", 1, "text-s", 3, "change"], ["inputProfileImg", ""], ["for", "desc", 1, "text-m_m"], ["cols", "40", "type", "text", "formControlName", "desc", "placeholder", "Enter description of recipe", 1, "text-s"], [1, "control-panel"], ["type", "button", 1, "button", 3, "click"], ["type", "button", 1, "button", "button_positive", 3, "click"], ["id", "categories", "for", "categories", 1, "text-m_m"], [1, "container-select"], ["select", ""], ["id", "table-categories"], ["for", "ingredients", 1, "text-m_m"], ["id", "sub-label", 1, "text-m"], ["type", "text", "placeholder", "Ingredient", 1, "text-s", 3, "formControl"], ["type", "number", "placeholder", "Amount", 1, "text-s", 3, "formControl"], ["type", "text", "placeholder", "Suffix", 1, "text-s", 3, "formControl"], [1, "button", "button_positive-outline", 3, "click"], ["id", "table-ingredients"], ["for", "portions", 1, "text-m_m"], ["type", "number", "formControlName", "portions", "placeholder", "Amount", 1, "text-s"], ["for", "timeToDo", 1, "text-m_m"], ["type", "time", "formControlName", "timeToDo", "placeholder", "Enter title of recipe", 1, "text-s"], ["hidden", "", 3, "value"], [1, "custom-select", 3, "click"], ["customSelect", ""], [1, "custom-options"], [1, "custom-option", 3, "click"], [1, "td_right"], [1, "icon-button", 3, "click"], ["src", "assets/icons/close.svg", "alt", "delete", 1, "icon_m"], ["src", "assets/icons/close.svg", "alt", "delete", 1, "icon"], ["cdkDrag", "", 1, "draggable-card", 3, "id", "cdkDragStarted", "cdkDragEnded"], ["item", ""], [1, "text-m", "text-grey"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["previewWrapper", ""], [1, "preview-control"], [1, "icon-button", "button-absolute", 3, "click"], ["src", "assets/icons/close.svg", "alt", "close"], [1, "preview-container"], [1, "preview-content"], [1, "form"], [1, "categories-list"], [1, "button", "button_positive", 2, "margin-top", "40px", 3, "click"], [3, "ngSwitch"], ["class", "group-container group-container_vertical galery", 4, "ngSwitchCase"], ["class", "group-container group-container_vertical", 4, "ngSwitchCase"], [1, "group-container", "group-container_vertical", "galery"], [1, "form", "edit-form", 3, "formGroup"], [1, "text-m_m"], ["type", "file", "formControlName", "imagesForm", "accept", "image/png, image/jpeg", "multiple", "", 1, "text-s", 3, "change"], ["inputGaleryImgs", ""], [1, "galery-group", "galery-group_2h"], ["type", "file", "formControlName", "videoForm", "accept", "video/mp4", 1, "text-s", 3, "change"], ["inputGaleryVideo", ""], ["class", "uploaded-galery", 4, "ngIf"], ["alt", "galery image", 1, "image-wrapper", 3, "src"], [1, "uploaded-galery"], ["type", "video/mp4", 3, "src"], ["action", "", 1, "form", "edit-form", 3, "formGroup"], [1, "kcal"], ["type", "number", "formControlName", "energy"], [1, "g"], ["type", "number", "formControlName", "protein"], ["type", "number", "formControlName", "fat"], ["type", "number", "formControlName", "carbohydrate"], [1, "instruction-group", 3, "formGroup"], ["formArrayName", "instructionArray"], [3, "formGroup"], [1, "step-body"], [1, "image"], ["formControlName", "imageSrc", "type", "file", "accept", "image/png, image/jpeg", 3, "change"], ["stepImage", ""], [1, "desc"], ["formControlName", "text", "cols", "30", "rows", "5", "placeholder", "Minimum 10 characters"], ["class", "icon-button", 3, "click", 4, "ngIf"], ["alt", "image", 1, "image-wrapper", 3, "src"], [1, "form", "edit-form"], ["placeholder", "Minimum 20 characters", "cols", "50", "rows", "5", 3, "formControl"]], template: function CreateRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CreateRecipeComponent_ng_container_0_Template, 24, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateRecipeComponent_ng_container_1_Template, 41, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_Template_button_click_7_listener() { return ctx.showCategoriesForm(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_Template_button_click_10_listener() { return ctx.showIngredientsForm(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Add Ingredient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreateRecipeComponent_div_15_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_Template_button_click_17_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_Template_button_click_19_listener() { return ctx.showPreviewOfPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateRecipeComponent_Template_button_click_21_listener() { return ctx.saveRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListDropped", function CreateRecipeComponent_Template_div_cdkDropListDropped_23_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 22)(35, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Portions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Required time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 25)(48, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Categories:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, CreateRecipeComponent_ng_container_51_Template, 3, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 28)(53, "div", 29)(54, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Ingredients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, CreateRecipeComponent_ng_container_57_Template, 8, 3, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, CreateRecipeComponent_ng_container_58_Template, 2, 4, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, CreateRecipeComponent_ng_container_59_Template, 9, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CreateRecipeComponent_ng_container_60_Template, 10, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, CreateRecipeComponent_ng_container_61_Template, 21, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, CreateRecipeComponent_ng_template_62_Template, 6, 7, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.firstCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.firstCompleted && !ctx.secondCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.secondCompleted ? "" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.secondCompleted ? "create-page-container" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.secondCompleted ? "" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkDropListData", ctx.actionList)("cdkDropListConnectedTo", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.actionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkDropListData", ctx.list)("cdkDropListConnectedTo", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.firstForm.value.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Author: ", ctx.firstForm.value.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.firstForm.value.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.secondForm.value.portions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.secondForm.value.timeToDo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.secondForm.value.categories.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.secondForm.value.ingredients.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addNewCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addNewIngredient);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag, _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__.RecipeComponent], styles: [".form-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 40px;\n}\n\n.drop-area[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.drop-area[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url('add.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 50px;\n  background-color: rgba(0, 0, 0, 0.05);\n  display: grid;\n  color: #fff;\n  text-shadow: 0px 0px 7px black;\n  font-size: 24px;\n  font-weight: 600;\n  place-items: center;\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  bottom: -10px;\n  right: -10px;\n  border-radius: 10px;\n  outline: 5px dashed #141414;\n  outline-offset: 10px;\n}\n\n.create-content[_ngcontent-%COMP%] {\n  margin-bottom: -40px;\n}\n\n.create-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 5;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  overflow-y: auto;\n}\n\n.profile-wrapper[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.group-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.group-container_vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.group-container_center[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.uploaded-galery[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #c2c2c2;\n  max-height: 320px;\n  border-radius: 5px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.uploaded-galery[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid #c2c2c2;\n  border-radius: 5px;\n}\n\n.uploaded-galery[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  border: 1px solid #c2c2c2;\n  border-radius: 5px;\n  max-height: 300px;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #c2c2c2;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  flex: 1 1 350px;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border: none;\n  border-radius: 5px;\n  outline: 1px solid;\n  outline-offset: -1px;\n  padding: 8px 10px;\n  resize: none;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n\n.instruction-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .step-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.form[_ngcontent-%COMP%]:is(.invalid) {\n  border: 1px solid rgb(169, 23, 23);\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]:is(.invalid)::after {\n  content: \"At least 1 ingredient is required\";\n  position: absolute;\n  top: -60px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  border-radius: 5px;\n  background: #ffe5e5;\n  animation: fade-in 0.5s ease;\n  width: 100%;\n}\n\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n#create-page-container[_ngcontent-%COMP%] {\n  padding-right: 440px;\n  position: relative;\n  max-width: 1400px;\n  transition: all 0.5s 0.5s ease;\n}\n\n.main-container__aside[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: calc(100% - 80px);\n  margin: 40px 0;\n  width: 400px;\n  box-sizing: border-box;\n  border-left: 1px solid #c2c2c2;\n  transition: transform 0.5s 0.5s ease;\n  transform-origin: right;\n  transform: scaleX(1);\n}\n\n.widget-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  height: 100%;\n  max-height: 100vh;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  overflow: auto;\n}\n\n.widget-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  height: 100%;\n  background: #c2c2c2;\n}\n\n.widget-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #141414;\n}\n\n.elements-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  margin-bottom: 40px;\n}\n\n.elements-panel[_ngcontent-%COMP%]   .draggable-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n\n.elements-panel[_ngcontent-%COMP%]   .draggable-group[_ngcontent-%COMP%]   .draggable-card[_ngcontent-%COMP%]:is(.invalid) {\n  border-color: rgb(169, 23, 23);\n  animation: shaking 0.5s ease;\n}\n\n.elements-panel[_ngcontent-%COMP%]   .draggable-group[_ngcontent-%COMP%]   .draggable-card[_ngcontent-%COMP%]:is(.invalid)::after {\n  content: \"You have to add this option\";\n  position: absolute;\n  z-index: 5;\n  top: -60px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  border-radius: 5px;\n  background: #ffe5e5;\n  animation: fade-in 0.5s ease;\n  width: 100%;\n  animation: fade-out 0.5s 5s ease forwards;\n}\n\n.elements-panel[_ngcontent-%COMP%]   .group-element[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #141414;\n  cursor: pointer;\n  box-sizing: border-box;\n  padding: 20px 10px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  background: #fff;\n}\n\n.draggable-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  border: 1px solid #141414;\n  cursor: pointer;\n  box-sizing: border-box;\n  padding: 20px 10px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  background: #fff;\n}\n\n.group-element[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.group-element[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex: 1;\n}\n\n.categories-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 500px;\n  gap: 20px 10px;\n  margin-bottom: 40px;\n  max-height: 400px;\n  overflow: auto;\n  padding: 5px;\n  box-sizing: border-box;\n}\n\n.categories-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  height: 100%;\n  background: #c2c2c2;\n}\n\n.categories-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #141414;\n}\n\n.widget-panel__control-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(3, 60px);\n  gap: 20px;\n}\n\n@keyframes shaking {\n  25% {\n    transform: translateX(-2px);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 7px 10px;\n  outline-width: 1px;\n  outline-offset: -1px;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 40px 40px 20px 40px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n}\n\n.form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:is(#sub-label) {\n  margin-bottom: 10px;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:is(#categories) {\n  margin-bottom: 0;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border: none;\n  border-radius: 5px;\n  outline: 1px solid;\n  outline-offset: -1px;\n  padding: 8px 10px;\n}\n\n.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border: none;\n  border-radius: 5px;\n  outline: 1px solid;\n  outline-offset: -1px;\n  padding: 8px 10px;\n  resize: none;\n  height: 100px;\n}\n\n.edit-form[_ngcontent-%COMP%] {\n  box-shadow: none;\n  display: grid;\n  padding: 0;\n  gap: 20px;\n}\n\ninput[_ngcontent-%COMP%]:is(.ng-invalid):is(.ng-touched), textarea[_ngcontent-%COMP%]:is(.ng-invalid):is(.ng-touched) {\n  outline: 2px solid rgb(169, 23, 23) !important;\n}\n\n.container-select[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  align-items: stretch;\n  position: relative;\n}\n\n.container-select[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: 5px;\n  border: none;\n  outline: 1px solid;\n  outline-offset: -1px;\n  height: 36px;\n  width: 150px;\n  max-width: 150px;\n  cursor: pointer;\n}\n\n.custom-select[_ngcontent-%COMP%]:is(.ng-invalid) {\n  outline: 2px solid rgb(169, 23, 23);\n}\n\n.custom-select[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCA3LjMzbDIuODI5LTIuODMgOS4xNzUgOS4zMzkgOS4xNjctOS4zMzkgMi44MjkgMi44My0xMS45OTYgMTIuMTd6Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: flex;\n  align-items: center;\n  height: 16px;\n  width: 16px;\n  transition: 0.2s ease;\n}\n\nselect[_ngcontent-%COMP%] {\n  display: none;\n}\n\nselect[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-select[_ngcontent-%COMP%]:has(.custom-options.opened) {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.custom-select[_ngcontent-%COMP%]:has(.custom-options.opened)::after {\n  transform: rotate(180deg);\n}\n\n.custom-options[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #fff;\n  font-weight: 400;\n  top: 35px;\n  opacity: 0;\n  width: 148px;\n  border: 1px solid;\n  border-radius: 5px;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  left: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s ease, opacity 0s 0.2s ease;\n  transform-origin: top;\n  z-index: 1;\n}\n\n.custom-options.opened[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scaleY(1);\n  transition: transform 0.2s ease;\n}\n\n.custom-options[_ngcontent-%COMP%]    > .custom-option[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  box-sizing: border-box;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n\n.custom-options[_ngcontent-%COMP%]    > .custom-option[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.custom-options[_ngcontent-%COMP%]    > .custom-option[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin-bottom: 30px;\n}\n\ntable[_ngcontent-%COMP%]:is(.table_offset-top) {\n  margin-top: 10px;\n}\n\ntable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\ntr[_ngcontent-%COMP%] {\n  border: 1px solid #141414;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n\ntd.td_right[_ngcontent-%COMP%], th.td_right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntd[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], th[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 2.5em !important;\n}\n\ntd[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ntd[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n}\n\ntd[_ngcontent-%COMP%]:is(.g)::after {\n  content: \"g\";\n}\n\ntd[_ngcontent-%COMP%]:is(.kcal)::after {\n  content: \"kcal\";\n}\n\n.control-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.control-panel[_ngcontent-%COMP%]    > .button[_ngcontent-%COMP%] {\n  flex: 0 0 100px;\n}\n\n.preview-control[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n  z-index: 6;\n}\n\n.preview-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  display: grid;\n  place-items: center;\n}\n\n.preview-content[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  max-width: 768px;\n  pointer-events: none;\n}\n\n@media screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%] {\n    padding: 40px 20px 20px 20px;\n  }\n  .preview-content[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media screen and (max-width: 365px) {\n  .form[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    padding: 20px 10px;\n    height: 100%;\n    width: 100%;\n  }\n}\n\n.group-categories[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.group-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #34742E;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yZWNpcGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBQ1I7O0FBSUE7RUFDSSxvQkFBQTtBQURKOztBQUdJO0VBQ0ksbUJBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7RUFBQSxrQkFBQTtBQUhKOztBQUtJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUhSOztBQU1JO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSlI7O0FBU0k7RUFDSSxlQUFBO0FBTlI7O0FBUVE7RUFDSSxnQ0FBQTtBQU5aOztBQVNRO0VBQ0ksbUJBQUE7QUFQWjs7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBUlo7O0FBVVk7O0VBRUksYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBUmhCOztBQVVnQjs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVBwQjs7QUFZWTtFQUNJLGVBQUE7QUFWaEI7O0FBYVk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBWGhCOztBQWtCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUFmSjs7QUFpQkk7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBZlI7O0FBbUJBO0VBQ0k7SUFDSSxVQUFBO0VBaEJOO0VBbUJFO0lBQ0ksVUFBQTtFQWpCTjtBQUNGOztBQW9CQTtFQUNJO0lBQ0ksVUFBQTtFQWxCTjtFQXFCRTtJQUNJLFVBQUE7RUFuQk47QUFDRjs7QUFzQkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFwQko7O0FBdUJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBcEJKOztBQXNCSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwQlI7O0FBd0JJO0VBRUksbUJBQUE7QUF2QlI7O0FBMkJBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXhCSjs7QUEwQkk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQXhCUjs7QUE0Qlk7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0FBMUJoQjs7QUE0QmdCO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQTFCcEI7O0FBZ0NJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE5QlI7O0FBa0NBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQS9CSjs7QUFtQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFoQ0o7O0FBa0NJO0VBQ0ksWUFBQTtFQUNBLE9BQUE7QUFoQ1I7O0FBb0NBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWpDSjs7QUFtQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBakNSOztBQXFDSTtFQUVJLG1CQUFBO0FBcENSOztBQXlDQTtFQUNJLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7QUF0Q0o7O0FBeUNBO0VBQ0k7SUFDSSwyQkFBQTtFQXRDTjtFQXlDRTtJQUNJLDJCQUFBO0VBdkNOO0VBMENFO0lBQ0ksMEJBQUE7RUF4Q047RUEyQ0U7SUFDSSwyQkFBQTtFQXpDTjtFQTRDRTtJQUNJLDBCQUFBO0VBMUNOO0FBQ0Y7O0FBNkNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUE1Q0o7O0FBZ0RBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQTdDSjs7QUErQ0k7RUFDSSxtQkFBQTtBQTdDUjs7QUFnREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUE5Q1I7O0FBZ0RRO0VBQ0ksbUJBQUE7QUE5Q1o7O0FBaURRO0VBQ0ksZ0JBQUE7QUEvQ1o7O0FBa0RRO0VBQ0ksY0FBQTtBQWhEWjs7QUFvREk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBbERSOztBQW9ESTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWxEUjs7QUF1REE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXBESjs7QUF5REk7O0VBQ0ksOENBQUE7QUFyRFI7O0FBeURBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUF0REo7O0FBdURJO0VBQ0ksT0FBQTtBQXJEUjs7QUF3REE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFyREo7O0FBc0RJO0VBQ0ksbUNBQUE7QUFwRFI7O0FBc0RJO0VBQ0ksV0FBQTtFQUNBLGlSQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBcERSOztBQXdEQTtFQUNJLGFBQUE7QUFyREo7O0FBc0RJO0VBQ0ksYUFBQTtBQXBEUjs7QUF1REE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FBcERKOztBQXFESTtFQUNJLHlCQUFBO0FBbkRSOztBQXNEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFuREo7O0FBb0RJO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFsRFI7O0FBb0RJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFsRFI7O0FBbURRO0VBQ0ksOEJBQUE7QUFqRFo7O0FBb0RJO0VBQ0ksd0JBQUE7QUFsRFI7O0FBcURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQWxESjs7QUFvREk7RUFDSSxnQkFBQTtBQWxEUjs7QUFvREk7RUFDSSxvQkFBQTtBQWxEUjs7QUF1REE7RUFDSSx5QkFBQTtBQXBESjs7QUF1REE7O0VBRUksaUJBQUE7QUFwREo7O0FBc0RJOztFQUNJLGlCQUFBO0FBbkRSOztBQXNESTs7RUFFSSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSwrQkFBQTtBQXJEUjs7QUEyREE7RUFDSSxrQkFBQTtBQXhESjs7QUEwREk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBeERSOztBQTRESTtFQUNJLFlBQUE7QUExRFI7O0FBNkRJO0VBQ0ksZUFBQTtBQTNEUjs7QUErREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQTVESjs7QUE4REk7RUFDSSxlQUFBO0FBNURSOztBQWdFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBN0RKOztBQWdFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBN0RKOztBQWdFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBN0RKOztBQWdFQTtFQUNJO0lBQ0ksNEJBQUE7RUE3RE47RUFnRUU7SUFDSSxTQUFBO0VBOUROO0FBQ0Y7O0FBaUVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUEvRE47QUFDRjs7QUFrRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWhFSjs7QUFrRUk7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFoRVIiLCJmaWxlIjoiY3JlYXRlLXJlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uZHJvcC1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hZGQuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3cHggYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IDVweCBkYXNoZWQgIzE0MTQxNDtcclxuICAgICAgICBvdXRsaW5lLW9mZnNldDogMTBweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jcmVhdGUtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuXHJcbiAgICA+ZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZWRpdC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ncm91cC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmdyb3VwLWNvbnRhaW5lcl92ZXJ0aWNhbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZ3JvdXAtY29udGFpbmVyX2NlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51cGxvYWRlZC1nYWxlcnkge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MyYzJjMjtcclxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAmPmRpdiBpbWcge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMmMyYzI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+ZGl2IHZpZGVvIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RydWN0aW9uLWdyb3VwIHtcclxuICAgICY+bGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMmMyYzI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RlcC1ib2R5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZSxcclxuICAgICAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDM1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICYgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtOmlzKC5pbnZhbGlkKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY5LCAyMywgMjMpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIkF0IGxlYXN0IDEgaW5ncmVkaWVudCBpcyByZXF1aXJlZFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZTVlNTtcclxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMC41cyBlYXNlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLW91dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY3JlYXRlLXBhZ2UtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIC41cyBlYXNlO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJfX2FzaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2MyYzJjMjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgLjVzIGVhc2U7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4ud2lkZ2V0LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjMmMyYzI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcclxuICAgIH1cclxufVxyXG5cclxuLmVsZW1lbnRzLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICYgLmRyYWdnYWJsZS1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgICAgICYgLmRyYWdnYWJsZS1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgICY6aXMoLmludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDE2OSwgMjMsIDIzKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hha2luZyAuNXMgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJZb3UgaGF2ZSB0byBhZGQgdGhpcyBvcHRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTVlNTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgLjVzIDVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiAuZ3JvdXAtZWxlbWVudCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNDE0MTQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZ2dhYmxlLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE0MTQxNDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG59XHJcblxyXG4uZ3JvdXAtZWxlbWVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAmPmJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBnYXA6IDIwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MyYzJjMjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLndpZGdldC1wYW5lbF9fY29udHJvbC1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNjBweCk7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2luZyB7XHJcbiAgICAyNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG5cclxuICAgIG91dGxpbmUtd2lkdGg6IDFweDtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDIwcHggNDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiAgICAmIGgxIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICAmOmlzKCNzdWItbGFiZWwpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aXMoI2NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+KiB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmIGlucHV0IHtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZDtcclxuICAgICAgICBvdXRsaW5lLW9mZnNldDogLTFweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIH1cclxuICAgICYgdGV4dGFyZWEge1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmVkaXQtZm9ybSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICAmOmlzKC5uZy1pbnZhbGlkKTppcygubmctdG91Y2hlZCkge1xyXG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTY5LCAyMywgMjMpIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJj5zZWxlY3Qge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjppcygubmctaW52YWxpZCkge1xyXG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTY5LCAyMywgMjMpO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk1DQTNMak16YkRJdU9ESTVMVEl1T0RNZ09TNHhOelVnT1M0ek16a2dPUzR4TmpjdE9TNHpNemtnTWk0NE1qa2dNaTQ0TXkweE1TNDVPVFlnTVRJdU1UZDZJaTgrUEM5emRtYyspO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgICY+b3B0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5jdXN0b20tc2VsZWN0OmhhcyguY3VzdG9tLW9wdGlvbnMub3BlbmVkKSB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuLmN1c3RvbS1vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAxNDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZSwgb3BhY2l0eSAwcyAuMnMgZWFzZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAmLm9wZW5lZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAmPi5jdXN0b20tb3B0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJj4uY3VzdG9tLW9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICB9XHJcbn1cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgJjppcygudGFibGVfb2Zmc2V0LXRvcCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG50ciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTQxNDE0O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcblxyXG4gICAgJi50ZF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJj5pbnB1dCB7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxudGQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxZW07XHJcbiAgICAgICAgcmlnaHQ6IDFlbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJjppcyguZyk6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnZyc7XHJcbiAgICB9XHJcblxyXG4gICAgJjppcygua2NhbCk6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAna2NhbCdcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgPi5idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByZXZpZXctY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1jb250ZW50IHtcclxuICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByZXZpZXctY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ3JvdXAtY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAmIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ3NDJFO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 5, vars: 0, consts: [[1, "error-container"], [1, "text-h1_bold", "error-text"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".error-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  text-align: center;\n  place-items: center;\n  padding-bottom: 50px;\n  box-sizing: border-box;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #fff;\n  text-shadow: 5px 7px rgba(0, 0, 0, 0.5), -7px -2px 8px rgba(255, 255, 255, 0.82);\n  animation: changeColor 3s infinite ease, impulse 3s 1.5s infinite ease-in-out;\n}\n\n@keyframes changeColor {\n  50% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 5px 7px rgba(0, 0, 0, 0.5);\n  }\n}\n\n@keyframes impulse {\n  50% {\n    scale: 1.05;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0ZBQUE7RUFDQSw2RUFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLHVDQUFBO0VBRU47QUFDRjs7QUFBQTtFQUVJO0lBQ0ksV0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmVycm9yLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDdweCByZ2JhKDAsMCwwLC41KSwgLTdweCAtMnB4IDhweCByZ2JhKDI1NSwyNTUsMjU1LC44Mik7XHJcbiAgICBhbmltYXRpb246IGNoYW5nZUNvbG9yIDNzIGluZmluaXRlIGVhc2UsIGltcHVsc2UgM3MgMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGFuZ2VDb2xvciB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggN3B4IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW1wdWxzZSB7XHJcbiAgICBcclxuICAgIDUwJSB7XHJcbiAgICAgICAgc2NhbGU6IDEuMDU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_assets_js_lazyload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/js/lazyload.js */ 6493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let lazyloadModule = new src_assets_js_lazyload_js__WEBPACK_IMPORTED_MODULE_0__.lazyload();
        lazyloadModule.init();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [[1, "container", "footer-container"], [1, "footer-group", "vert", "subscribe"], [1, "text-h2"], [1, "text-m"], ["action", "", 1, "form-button", "subscribe-form"], ["placeholder", "Enter your email", "type", "email", "name", "email"], ["type", "submit", 1, "button", "button_positive"], [1, "footer-group", "social"], [1, "nav-group", "footer__social-group"], ["routerLink", ""], ["src", "assets/icons/twitter.svg", "alt", "twitter"], ["src", "assets/icons/facebook.svg#img", "alt", "facebook"], ["href", "mailto:mrhuk06@gmail.com"], ["src", "assets/icons/gmail.svg", "alt", "gmail"], [1, "footer-group", "logo"], ["routerLink", "/", 1, "logo-container"], ["src", "assets/icons/logo.svg", "alt", "recipes logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ready to cook?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Subscribe for our weekly newsletters!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "ul", 8)(12, "li")(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: [".footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  box-shadow: 0 -4px 26px rgba(0, 0, 0, 0.12);\n  position: relative;\n}\n\n.footer-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n\n.footer-group.vert[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 20px;\n}\n\n.footer-group[_ngcontent-%COMP%]:is(.social) {\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.footer-group[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: -30px;\n}\n\n.footer-group[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-bottom: 30px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n  .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .footer-group[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n    margin-bottom: 0;\n  }\n  .footer-group[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    margin-bottom: 0;\n  }\n  .footer-group[_ngcontent-%COMP%]:is(.logo) {\n    order: 1;\n  }\n  .footer-group[_ngcontent-%COMP%]:is(.subscribe) {\n    order: 2;\n  }\n  .footer-group[_ngcontent-%COMP%]:is(.social) {\n    order: 3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFESjs7QUFHSTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtBQURSOztBQUlBO0VBQ0ksT0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLGtCQUFBO0VBRE47RUFLRTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUFITjtFQU1FO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtFQUpOO0VBT0U7SUFDSSxRQUFBO0VBTE47RUFRRTtJQUNJLFFBQUE7RUFOTjtFQVNFO0lBQ0ksUUFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgLTRweCAyNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvb3Rlci1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0MHB4O1xyXG5cclxuICAgICYudmVydCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLmZvb3Rlci1ncm91cDppcyguc29jaWFsKSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uZm9vdGVyLWdyb3VwPi5uYXYtZ3JvdXAge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWdyb3VwPi5uYXYtZ3JvdXA+bGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmZvb3Rlci1ncm91cD4ubmF2LWdyb3VwIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1ncm91cD4ubmF2LWdyb3VwPmxpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWdyb3VwOmlzKC5sb2dvKSB7XHJcbiAgICAgICAgb3JkZXI6IDFcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWdyb3VwOmlzKC5zdWJzY3JpYmUpIHtcclxuICAgICAgICBvcmRlcjogMlxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItZ3JvdXA6aXMoLnNvY2lhbCkge1xyXG4gICAgICAgIG9yZGVyOiAzXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function (a0) { return { returnURL: a0 }; };
class HeaderComponent {
    constructor(cdr, breakpointObserver, router, acti) {
        this.cdr = cdr;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.acti = acti;
        this.buttonIcon = 'assets/icons/menu.svg';
        this.openMenu = false;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 768px)'])
            .subscribe((state) => {
            if (state.matches && this.openMenu) {
                this.openCloseMenu();
            }
            this.cdr.detectChanges();
        });
    }
    openCloseMenu() {
        this.openMenu = !this.openMenu;
        if (!this.openMenu) {
            this.buttonIcon = 'assets/icons/menu.svg';
            document.body.style.setProperty('overflow', 'auto');
        }
        else {
            document.body.style.setProperty('overflow', 'hidden');
            this.buttonIcon = 'assets/icons/close.svg';
        }
    }
    goHomePage() {
        this.router.navigateByUrl('/').then(() => {
            this.router.navigate(['/']);
        });
    }
    getUrl() {
        return this.router.url;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 5, consts: [[1, "container", "header-container"], [1, "header-group"], [1, "header-group__sub-group"], [1, "logo-container", 3, "click"], ["src", "assets/icons/logo.svg", "alt", "recipes logo", 1, "image-wrapper"], [1, "nav-group"], ["routerLink", "categories"], ["routerLink", "/new", 1, "button", "button_positive-outline", "button-add", 3, "queryParams"], [1, "icon-button", "header-menu", 3, "click"], ["alt", "menu button", 3, "src"], [1, "main-container", "menu-container", 3, "ngClass"], ["routerLink", "categories", 1, "text-h2", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.goHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav")(6, "ul", 5)(7, "li")(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.openCloseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "nav")(17, "ul", 5)(18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() { return ctx.openCloseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.getUrl()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.buttonIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.openMenu ? "" : "hiddenY");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".header-container[_ngcontent-%COMP%] {\n  height: 80px;\n  box-shadow: 0 4px 26px rgba(0, 0, 0, 0.12);\n}\n\n.header-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n\n.header-group__sub-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: 40px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .header-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .nav-group[_ngcontent-%COMP%], .button-add[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 80px;\n  left: 0;\n  right: 0;\n  background: #fff;\n  box-shadow: 0px 26px 26px -22px rgba(0, 0, 0, 0.09);\n  width: 100%;\n  transform-origin: top;\n  box-sizing: border-box;\n  opacity: 1;\n  transform: scaleY(1);\n  transition: all 0.3s;\n}\n\n.menu-container.hiddenY[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: all 0.3s, opacity 0s 0.3s;\n}\n\n.menu-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s 0.3s;\n}\n\n.menu-container[_ngcontent-%COMP%]:is(.hiddenY)    > nav[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.menu-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > .nav-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsMENBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSxjQUFBO0VBRU47RUFDRTs7SUFFSSxhQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQ3BDWTtFRHFDWixtREFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHSTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFHQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcyc7XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyNnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4uaGVhZGVyLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5oZWFkZXItZ3JvdXBfX3N1Yi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdhcDogNDBweDtcclxufVxyXG4ubG9nby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhlYWRlci1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWdyb3VwLFxyXG4gICAgLmJ1dHRvbi1hZGQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogJGJhc2UtY29sb3ItMDE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMjZweCAyNnB4IC0yMnB4IHJnYmEoMCwgMCwgMCwgLjA5KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgXHJcbiAgICAmLmhpZGRlblkge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcywgb3BhY2l0eSAwcyAuM3M7XHJcbn1cclxufVxyXG4ubWVudS1jb250YWluZXIgPiAqIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyAuM3M7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyOmlzKC5oaWRkZW5ZKSA+IG5hdiAge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG5cclxuLm1lbnUtY29udGFpbmVyPiBuYXY+IC5uYXYtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZW51LWNvbnRhaW5lcj4gbmF2Pi5uYXYtZ3JvdXAgPiBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMzQ3NDJFO1xyXG4kcHJpbWFyeS1jb2xvci1vdXRsaW5lLWhvdmVyOiAjMWZhNjFmMWY7XHJcbiRwcmltYXJ5LWNvbG9yLW91dGxpbmUtYWN0aXZlOiAjNDU5NTNlO1xyXG4kcHJpbWFyeS1jb2xvci1ob3ZlcjogIzFkNGUxZDtcclxuJHByaW1hcnktY29sb3ItYWN0aXZlOiAjMjQ3NDI0O1xyXG4kdGV4dC1jb2xvcjogIzE0MTQxNDtcclxuJHRleHQtY29sb3ItZ3JleTogIzljOWM5YztcclxuJG5hdi10ZXh0LWhvdmVyOiAjM2QzZDNkO1xyXG4kbmF2LXRleHQtYWN0aXZlOiAjNzA3MDcwO1xyXG4kYmFzZS1jb2xvci0wMTogI2ZmZjtcclxuJGJhc2UtY29sb3ItMDI6ICMyODI4Mjg7XHJcbiRiYXNlLWNvbG9yLTAzOiAjZWRlZGVkO1xyXG4kYmFzZS1jb2xvci0wNDogI2MyYzJjMjtcclxuJGJhc2UtY29sb3ItMDU6ICM2YzZiNmI7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 32:
/*!********************************************!*\
  !*** ./src/app/preview-article.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewArticleService": () => (/* binding */ PreviewArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PreviewArticleService {
    constructor() {
        this.previewItem = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    getPreviewItem() {
        return this.previewItem.asObservable();
    }
    setPreviewItem(value) {
        this.previewItem.next(value);
    }
}
PreviewArticleService.ɵfac = function PreviewArticleService_Factory(t) { return new (t || PreviewArticleService)(); };
PreviewArticleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PreviewArticleService, factory: PreviewArticleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4174:
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeComponent": () => (/* binding */ RecipeComponent)
/* harmony export */ });
/* harmony import */ var _assets_base_articles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/base/articles.json */ 160);
/* harmony import */ var _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/base/recipes.json */ 2962);
/* harmony import */ var _assets_base_reviews_reviews_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/base/reviews/reviews.json */ 1812);
/* harmony import */ var src_assets_js_lazyload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/js/lazyload.js */ 6493);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ 4177);
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake.js */ 1660);
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ 786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _preview_article_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../preview-article.service */ 32);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ 9983);
/* harmony import */ var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../review-form/review-form.component */ 5096);
















const _c0 = ["bodyEl"];
const _c1 = function (a0) { return { category: a0 }; };
function RecipeComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li")(2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c1, category_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](category_r19);
} }
function RecipeComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r5.displayingItem.header.portionsDefault, " portions");
} }
function RecipeComponent_ng_container_0_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r7.displayingItem.header.portionsDefault, " portion");
} }
function RecipeComponent_ng_container_0_span_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RecipeComponent_ng_container_0_span_19_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "hour");
} }
function RecipeComponent_ng_container_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_span_19_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RecipeComponent_ng_container_0_span_19_ng_template_3_Template, 1, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r8.displayingItem.header.timeToDo.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.displayingItem.header.timeToDo.hours > 1)("ngIfElse", _r21);
} }
function RecipeComponent_ng_container_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r9.displayingItem.header.timeToDo.minutes, " minutes");
} }
function RecipeComponent_ng_container_0_div_38_ng_container_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RecipeComponent_ng_container_0_div_38_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 87);
} }
function RecipeComponent_ng_container_0_div_38_ng_container_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RecipeComponent_ng_container_0_div_38_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 89);
} }
function RecipeComponent_ng_container_0_div_38_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 66)(2, "video", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("timeupdate", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_video_timeupdate_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.calcTime(_r27, _r36)); })("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_video_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.toggleVideo(_r27)); })("dblclick", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_video_dblclick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.toggleFullScreen(_r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "source", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Your browser doesn't support video.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 70)(8, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.toggleVideo(_r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, RecipeComponent_ng_container_0_div_38_ng_container_2_ng_container_9_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, RecipeComponent_ng_container_0_div_38_ng_container_2_ng_template_10_Template, 1, 0, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.toggleMute(_r27, _r37)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, RecipeComponent_ng_container_0_div_38_ng_container_2_ng_container_13_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, RecipeComponent_ng_container_0_div_38_ng_container_2_ng_template_14_Template, 1, 0, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_div_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.setCustomBar(_r34, $event, "volume", _r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_div_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](20); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.setCustomBar(_r35, $event, "video", _r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r46.toggleFullScreen(_r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.setTime(_r27, _r36)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "input", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function RecipeComponent_ng_container_0_div_38_ng_container_2_Template_input_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.volumeOnChange(_r27, _r37)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-srcset", ctx_r23.displayingItem.body.galery.videoSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r27.paused)("ngIfElse", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_r27.muted)("ngIfElse", _r32);
} }
function RecipeComponent_ng_container_0_div_38_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r25.displayingItem.body.galery.imagesSrc[0], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const media_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx_r56.pathUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-src", media_r50);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 95);
} if (rf & 2) {
    const media_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-src", media_r50);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_ng_template_2_Template, 1, 1, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const indexOfMedia_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r55.displayingItem.body.galery.imagesSrc.length > 4 && indexOfMedia_r51 === 3)("ngIfElse", _r57);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_div_1_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const indexOfMedia_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", indexOfMedia_r51 < 4);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const media_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", media_r50, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 90);
} if (rf & 2) {
    const media_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", media_r50, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_ng_template_2_Template, 1, 1, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const indexOfMedia_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r63.displayingItem.body.galery.imagesSrc.length > 5 && indexOfMedia_r51 === 4)("ngIfElse", _r65);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_div_0_Template, 4, 2, "div", 14);
} if (rf & 2) {
    const indexOfMedia_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", indexOfMedia_r51 > 0 && indexOfMedia_r51 < 5);
} }
function RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.displayingItem.body.galery.videoSrc !== "")("ngIfElse", _r53);
} }
function RecipeComponent_ng_container_0_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_div_38_div_5_ng_container_1_Template, 4, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r26.displayingItem.body.galery.imagesSrc);
} }
function RecipeComponent_ng_container_0_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_div_38_ng_container_2_Template, 28, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RecipeComponent_ng_container_0_div_38_ng_template_3_Template, 1, 1, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, RecipeComponent_ng_container_0_div_38_div_5_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.displayingItem.body.galery.videoSrc !== "")("ngIfElse", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.displayingItem.body.galery.imagesSrc.length > (ctx_r10.displayingItem.body.galery.videoSrc !== "" ? 0 : 1));
} }
function RecipeComponent_ng_container_0_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 97)(1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Nutritional value per portion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "table")(4, "tr")(5, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Protein");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\u0421arbohydrate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "tr")(14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "tr")(23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "kcal");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.body.nutritions.energy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.body.nutritions.protein);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.body.nutritions.fat);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.body.nutritions.carbohydrate);
} }
function RecipeComponent_ng_container_0_ng_container_64_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r72.Round(ingredient_r71.amount * ctx_r72.displayingItem.header.portions / ctx_r72.displayingItem.header.portionsDefault));
} }
function RecipeComponent_ng_container_0_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, RecipeComponent_ng_container_0_ng_container_64_span_5_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ingredient_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ingredient_r71.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ingredient_r71.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ingredient_r71.suffix, "");
} }
function RecipeComponent_ng_container_0_span_72_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RecipeComponent_ng_container_0_span_72_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "hour");
} }
function RecipeComponent_ng_container_0_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_span_72_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RecipeComponent_ng_container_0_span_72_ng_template_3_Template, 1, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r13.displayingItem.header.timeToDo.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r13.displayingItem.header.timeToDo.hours > 1)("ngIfElse", _r75);
} }
function RecipeComponent_ng_container_0_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r14.displayingItem.header.timeToDo.minutes, " minutes");
} }
function RecipeComponent_ng_container_0_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
} }
function RecipeComponent_ng_container_0_ng_container_81_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 103);
} if (rf & 2) {
    const step_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-src", step_r78.imageSrc);
} }
function RecipeComponent_ng_container_0_ng_container_81_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_ng_container_81_div_2_img_1_Template, 1, 1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", step_r78.imageSrc !== "");
} }
function RecipeComponent_ng_container_0_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RecipeComponent_ng_container_0_ng_container_81_div_2_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r78 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r16.noImagesAtAll ? "indent" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r16.noImagesAtAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](step_r78.text);
} }
function RecipeComponent_ng_container_0_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r17.body.advice);
} }
function RecipeComponent_ng_container_0_ng_container_105_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_ng_container_105_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.getAllReviews()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const review_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", review_r90.author.img, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", review_r90.author.name.charAt(0), " ");
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 123);
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 113)(1, "div", 114)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_template_4_Template, 2, 1, "ng-template", null, 115, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_container_13_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_ng_template_14_Template, 1, 0, "ng-template", null, 117, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 118)(17, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const review_r90 = ctx.$implicit;
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", review_r90.author.img !== "")("ngIfElse", _r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](review_r90.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](review_r90.pubDatePrint);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", review_r90.rating === 1)("ngIfElse", _r95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](review_r90.text);
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_div_1_Template, 19, 7, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r84.reviewsList);
} }
function RecipeComponent_ng_container_0_ng_container_105_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "There's no reviews yet. You could be the first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RecipeComponent_ng_container_0_ng_container_105_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 105)(2, "div", 106)(3, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, RecipeComponent_ng_container_0_ng_container_105_button_5_Template, 2, 0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, RecipeComponent_ng_container_0_ng_container_105_ng_container_7_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, RecipeComponent_ng_container_0_ng_container_105_ng_template_8_Template, 2, 0, "ng-template", null, 109, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 110)(11, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_ng_container_105_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r99.showReview(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Write a review");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.showButtonReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.reviewsList.length > 0)("ngIfElse", _r85);
} }
function RecipeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "nav")(4, "ul", 5)(5, "li")(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, RecipeComponent_ng_container_0_ng_container_8_Template, 4, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 9)(12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, RecipeComponent_ng_container_0_ng_container_15_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, RecipeComponent_ng_container_0_ng_template_16_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, RecipeComponent_ng_container_0_span_19_Template, 5, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, RecipeComponent_ng_container_0_span_20_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 10)(22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Save this recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ul", 17)(26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 21)(36, "div", 22)(37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, RecipeComponent_ng_container_0_div_38_Template, 6, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 27)(42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 31)(47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, RecipeComponent_ng_container_0_div_49_Template, 31, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 33)(51, "div", 34)(52, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 36)(55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "portions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r101.changeAmount(-1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r103.changeAmount(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, RecipeComponent_ng_container_0_ng_container_64_Template, 8, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 41)(66, "div", 42)(67, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "ul")(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, RecipeComponent_ng_container_0_span_72_Template, 5, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, RecipeComponent_ng_container_0_span_73_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_Template_li_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r102); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r104.saveAsPDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, RecipeComponent_ng_container_0_ng_container_79_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "ol", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, RecipeComponent_ng_container_0_ng_container_81_Template, 5, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, RecipeComponent_ng_container_0_div_82_Template, 4, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 48)(84, "div", 49)(85, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "nav", 50)(88, "ul", 51)(89, "li")(90, "button", 52)(91, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "li")(94, "button", 52)(95, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](96, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "li")(98, "button", 52)(99, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "li")(102, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_ng_container_0_Template_button_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r102); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r105.copyUrlToClipboard()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, RecipeComponent_ng_container_0_ng_container_105_Template, 13, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.displayingItem.header.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.displayingItem.header.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.header.portionsDefault > 1)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.header.timeToDo.hours !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.header.timeToDo.minutes !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.displayingItem.header.saved, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.liked, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.disliked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.body.galery.videoSrc || ctx_r0.displayingItem.body.galery.imagesSrc.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-src", ctx_r0.displayingItem.header.author.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.displayingItem.header.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.body.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.keysOfNutritions > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.displayingItem.header.portions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.displayingItem.header.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.header.timeToDo.hours !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.displayingItem.header.timeToDo.minutes !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.body.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.body.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.body.advice !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", "https://www.facebook.com/share.php?u=" + ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", "https://twitter.com/intent/tweet?via=SmartRecruiters&url=" + ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", "https://telegram.me/share/url?url=" + ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.reviews);
} }
function RecipeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-error");
} }
function RecipeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125, 126)(2, "div", 127)(3, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RecipeComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r108); const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r107.showReview(false, _r106)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-review-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
(pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_5___default().vfs) = pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_6__.pdfMake.vfs;
class RecipeComponent {
    constructor(activatedRoute, router, titleService, metaService, previewArticle) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.metaService = metaService;
        this.previewArticle = previewArticle;
        this.dataArticles = _assets_base_articles_json__WEBPACK_IMPORTED_MODULE_0__;
        this.dataRecipes = _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__;
        this.dataReviews = _assets_base_reviews_reviews_json__WEBPACK_IMPORTED_MODULE_2__;
        this.body = {};
        this.displayingItem = null;
        this.foundItem = false;
        this.url = '';
        this.noImagesAtAll = true;
        this.pathUrl = '';
        this.reviews = true;
        this.reviewsList = [];
        this.showButtonReviews = true;
        this.liked = 0;
        this.disliked = 0;
        this.keysOfNutritions = 0;
        this.showReviewForm = false;
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.url[0].path === 'new') {
            this.reviews = false;
            this.previewArticle.getPreviewItem().subscribe((res) => {
                this.displayingItem = res;
                this.body = this.displayingItem.body;
                this.keysOfNutritions = Object.keys(this.body.nutritions).length;
                this.foundItem = true;
            });
            for (let stepOfInstructions of this.body.instructions) {
                if (stepOfInstructions.imageSrc !== '')
                    this.noImagesAtAll = false;
                if (!this.noImagesAtAll)
                    break;
            }
        }
        else {
            const ref = this.activatedRoute.snapshot.paramMap.get('id');
            this.titleService.setTitle('Page not found | Recipes');
            for (let item of this.dataArticles) {
                if (ref === item.ref) {
                    this.displayingItem = item;
                    this.body = this.displayingItem.body;
                    this.keysOfNutritions = Object.keys(this.body.nutritions).length;
                }
            }
            if (this.displayingItem === null)
                return;
            for (let stepOfInstructions of this.body.instructions) {
                if (stepOfInstructions.imageSrc !== '')
                    this.noImagesAtAll = false;
                if (!this.noImagesAtAll)
                    break;
            }
            this.titleService.setTitle(`${this.displayingItem.title} | Recipes`);
            this.foundItem = true;
            for (let item of this.dataRecipes) {
                if (item.id === this.displayingItem.id) {
                    item.portionsDefault = item.portions;
                    this.displayingItem.header = item;
                }
            }
            for (let item of this.dataReviews) {
                if (item.articleId === this.displayingItem.id)
                    for (let [index, review] of Object(item.reviews).entries()) {
                        if (index < 3) {
                            this.reviewsList.push(review);
                            this.reviewsList[this.reviewsList.length - 1].pubDatePrint = this.parseDate(review.pubDate);
                            if (index === item.reviews.length - 1)
                                this.showButtonReviews = false;
                        }
                        if (review.rating === 1)
                            this.liked++;
                        else
                            this.disliked++;
                    }
            }
            this.pathUrl = window.location.pathname;
            this.url = window.location.href;
            const baseUrl = window.location.protocol + '//' + window.location.hostname + '/angular-recipes/';
            const imageUrl = baseUrl + this.displayingItem.header.imgSrc;
            const desc = this.body.desc;
            this.metaService.updateTag({ property: 'og:image', content: imageUrl });
            this.metaService.updateTag({ property: 'og:title', content: this.titleService.getTitle() });
            this.metaService.updateTag({ property: 'og:url', content: window.location.href });
        }
    }
    ngAfterViewInit() {
        console.log('loaded');
        let lazyloadModule = new src_assets_js_lazyload_js__WEBPACK_IMPORTED_MODULE_3__.lazyload();
        lazyloadModule.onDOMchange();
    }
    Round(value) {
        return Math.round(value * 100) / 100;
    }
    changeAmount(value) {
        if (this.displayingItem.header.portions > 1 || value > 0)
            this.displayingItem.header.portions += value;
    }
    toggleVideo(video) {
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    }
    setCustomBar(el, event, type, video) {
        video.muted = false;
        let diffXPerc = (event.offsetX) / (el.offsetWidth) * 100;
        if (type === "volume")
            if (diffXPerc >= 95)
                diffXPerc = 100;
            else if (diffXPerc <= 5) {
                video.muted = true;
                diffXPerc = 0;
            }
        el.children[0].style.width = `${diffXPerc}%`;
        const inputVolume = document.getElementById("volume-bar");
        const inputVideo = document.getElementById("seek-bar");
        if (type === "volume") {
            inputVolume.value = String(diffXPerc / 100);
            this.volumeOnChange(video, inputVolume);
        }
        else {
            inputVideo.value = String(diffXPerc);
            this.setTime(video, inputVideo);
            //this.seekOnChange(videoDiv, inputVideo);
        }
    }
    toggleMute(video, bar) {
        video.muted = !video.muted;
        const el = document.querySelectorAll(".input-volume-bar")[0];
        if (video.muted) {
            bar.value = 0;
            el.children[0].style.width = `0%`;
        }
        else {
            if (video.volume === 0)
                video.volume = 0.05;
            bar.value = video.volume;
            el.children[0].style.width = `${video.volume * 100}%`;
        }
    }
    toggleFullScreen(video) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        }
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    }
    setTime(video, bar) {
        var time = video.duration * (bar.value / 100);
        // Update the video time
        video.currentTime = time;
    }
    calcTime(video, bar) {
        var value = (100 / video.duration) * video.currentTime;
        const el = document.querySelectorAll(".input-video-bar")[0];
        el.children[0].style.width = `${value}%`;
        bar.value = value;
    }
    volumeOnChange(video, bar) {
        console.log(bar.value);
        video.volume = bar.value;
    }
    getAllReviews() {
        const maxIndex = 100;
        for (let item of this.dataReviews) {
            if (item.articleId === this.displayingItem.id)
                for (let index = 3; index < item.reviews.length; index++) {
                    this.reviewsList.push(item.reviews[index]);
                    this.reviewsList[this.reviewsList.length - 1].pubDatePrint = this.parseDate(item.reviews[index].pubDate);
                    if (maxIndex === index)
                        break;
                }
        }
        this.showButtonReviews = false;
        this.reviewsList = this.reviewsList.sort((a, b) => (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime() ? -1 : 1));
        console.log(this.reviewsList);
    }
    saveAsPDF() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
        const documentDefinition = {
            pageMargins: [20, 20, 20, 20],
            footer: (currentPage, pageCount) => { return { text: currentPage.toString() + '/' + pageCount, alignment: 'right', width: 'auto', fontSize: 8, margin: [0, 0, 20, 0] }; },
            content: [
                {
                    image: this.createImage('assets/icons/logo.svg'),
                    width: 50,
                    height: 50,
                    cover: [50, 50],
                    absolutePosition: {
                        x: 525,
                        y: 20
                    },
                    link: window.location.protocol + '//' + window.location.hostname + '/angular-recipes/'
                },
                {
                    columns: [
                        {
                            image: this.createImage(this.displayingItem.header.imgSrc),
                            width: 170,
                            height: 250,
                            cover: [170, 250]
                        },
                        [
                            this.createRow(this.displayingItem.header.categories, 'categories', 'auto', 'center', 10),
                            {
                                text: this.displayingItem.header.title,
                                style: 'header',
                            },
                            {
                                text: 'Author: ' + this.displayingItem.header.author.name,
                                style: 'author'
                            },
                            {
                                columns: [
                                    {
                                        width: 'auto',
                                        text: 'Portions: ' + this.displayingItem.header.portionsDefault,
                                        bold: true,
                                        fontSize: 10,
                                    }, {
                                        width: 'auto',
                                        bold: true,
                                        fontSize: 10,
                                        text: 'Time: ' + (this.displayingItem.header.timeToDo.hours > 0 ? +this.displayingItem.header.timeToDo.hours + ' hours ' : '') + (this.displayingItem.header.timeToDo.minutes > 0 ? +this.displayingItem.header.timeToDo.minutes + ' minutes' : '')
                                    }
                                ]
                            }
                        ],
                    ],
                    margin: [0, 0, 0, 20]
                },
                {
                    text: this.body.desc,
                    fontSize: 10,
                    margin: [0, 0, 0, 20],
                    lineHeight: 2
                },
                {
                    text: 'Ingredients',
                    fontSize: 10,
                    margin: [0, 0, 0, 10],
                    lineHeight: 2,
                    bold: true
                },
                this.createIngredientsTable(),
                {
                    text: 'Instructions',
                    fontSize: 10,
                    margin: [0, 0, 0, 20],
                    lineHeight: 2,
                    bold: true,
                    pageBreak: 'before'
                },
                this.createInstructionList(this.body.instructions, 'list')
            ],
            styles: {
                header: {
                    fontSize: 28,
                    bold: true,
                    margin: [0, 0, 0, 20],
                    alignment: 'center'
                },
                categories: {
                    fontSize: 8,
                    bold: true,
                    margin: [0, 30, 0, 20],
                    color: '#34742E'
                },
                author: {
                    fontSize: 10,
                    margin: [0, 0, 0, 20]
                },
                list: {
                    fontSize: 10,
                    lineHeight: 2
                }
            },
            defaultStyle: {
                columnGap: 20
            }
        };
        pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_5___default().createPdf(documentDefinition).print();
    }
    createRow(data, style, width, alignment, gap) {
        var body = { columns: [], alignment: alignment, columnGap: gap };
        body.columns.push({ width: '*', text: '' });
        for (let item of data)
            body.columns.push({ text: item.toUpperCase(), link: window.location.protocol + '//' + window.location.hostname + '/angular-recipes/?category=' + item, style: style, width: width });
        body.columns.push({ width: '*', text: '' });
        return body;
    }
    createImage(imageSrc) {
        var canvasOfRecipe = document.createElement('canvas');
        var ctx = canvasOfRecipe.getContext('2d');
        var img = new Image();
        img.src = imageSrc;
        canvasOfRecipe.height = img.height;
        canvasOfRecipe.width = img.width;
        ctx?.drawImage(img, 0, 0);
        return canvasOfRecipe.toDataURL();
    }
    createInstructionList(data, style) {
        var body = { ol: [], style: style };
        var column = {};
        for (let item of data) {
            column = {};
            if (item.imageSrc !== '')
                column = { columns: [{ image: this.createImage(item.imageSrc), width: 150, height: 100, cover: [150, 100], margin: [-10, 0, 0, 0] }, { text: item.text }], margin: [0, 0, 0, 20] };
            else
                column = { columns: [{ text: item.text }], margin: [0, 0, 0, 10] };
            body.ol.push(column);
        }
        return body;
    }
    createIngredientsTable() {
        var res = { table: { heights: 20, widths: ['auto', '*', 'auto'], body: [] }, layout: 'noBorders', fontSize: 10 };
        for (let ingredient of this.displayingItem.header.ingredients) {
            res.table.body.push([{ alignment: 'left', text: ingredient.name }, { text: '' }, { alignment: 'right', text: (ingredient.amount > 0 ? ingredient.amount : '') + ' ' + ingredient.suffix }]);
        }
        return res;
    }
    copyUrlToClipboard() {
        navigator.clipboard.writeText(this.url);
    }
    parseDate(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${Number(date.split("-")[2])} ${monthNames[Number(date.split("-")[1]) - 1]} ${date.split("-")[0]}`;
    }
    showReview(bool, wrapper) {
        if (bool) {
            document.body.style.overflow = 'hidden';
            this.showReviewForm = bool;
        }
        else {
            document.body.style.overflow = 'auto';
            wrapper.style.animation = 'fade-out .3s forwards';
            setTimeout(() => { this.showReviewForm = bool; }, 300);
        }
    }
}
RecipeComponent.ɵfac = function RecipeComponent_Factory(t) { return new (t || RecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_preview_article_service__WEBPACK_IMPORTED_MODULE_7__.PreviewArticleService)); };
RecipeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: RecipeComponent, selectors: [["app-recipe"]], viewQuery: function RecipeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.pdfBody = _t.first);
    } }, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["notFound", ""], ["class", "page-wrapper", 4, "ngIf"], ["id", "container", 1, "container", "main-container"], [1, "main-container__header", "recipe__header"], [1, "category"], ["routerLink", "/", 1, "text-s_l", "text_prim-color"], [4, "ngFor", "ngForOf"], [1, "text-h1_bold"], [1, "recipe-header__info"], [1, "recipe-header__info-group"], ["src", "assets/icons/dish.svg", "alt", "portions", 1, "icon"], ["portion", ""], ["src", "assets/icons/time.svg", "alt", "time", 1, "icon"], [4, "ngIf"], [1, "button", "button_s", "button_icon"], ["src", "assets/icons/save.svg", "alt", "save", 1, "icon"], [1, "recipe-stats"], ["src", "assets/icons/saved.svg", "alt", "saved", 1, "icon"], ["src", "assets/icons/like.svg", "alt", "likes", 1, "icon"], ["src", "assets/icons/dislike.svg", "alt", "dislikes", 1, "icon"], [1, "main-container__body"], [1, "recipe-article", "recipe"], [1, "recipe__media-gallery"], ["class", "galery", 4, "ngIf"], [1, "recipe__author"], [1, "label"], [1, "profile"], [1, "profile-image"], ["alt", "profile photo", 1, "lazyload", "image-wrapper"], [1, "text-h2"], [1, "desc"], ["class", "recipe__nutritions", 4, "ngIf"], ["id", "bodyEl", 1, "recipe__ingredients"], [1, "ingredients-header"], [1, "text-h4"], [1, "control-field"], [1, "icon-button", 3, "click"], ["src", "assets/icons/minus.svg", "alt", "minus", 1, "icon_s"], ["src", "assets/icons/plus.svg", "alt", "plus", 1, "icon_s"], [1, "ingredients-list"], [1, "recipe__instructions"], [1, "instructions__header"], ["id", "print-button", 3, "click"], ["src", "assets/icons/print.svg", "alt", "print", 1, "icon"], [1, "instructions__body"], [1, "instructions-list"], ["class", "recipe__advice", 4, "ngIf"], [1, "main-container__upper-footer"], [1, "footer__header"], [1, "footer__body"], [1, "share-links-list"], [1, "icon-button", "icon-button_bordered"], ["target", "_blank", 3, "href"], ["src", "assets/icons/facebook-rev.svg", "alt", "facebook", 1, "icon"], ["src", "assets/icons/twitter-rev.svg", "alt", "twitter", 1, "icon"], ["src", "assets/icons/telegram.svg", "alt", "telegram", 1, "icon"], [1, "icon-button", "icon-button_bordered", 3, "click"], ["src", "assets/icons/chain.svg", "alt", "link", 1, "icon"], [1, "main-container__lower-footer"], ["routerLink", "/", 1, "text-s_l", "text_prim-color", 3, "queryParams"], ["hour", ""], [1, "galery"], [1, "galery-active"], ["image", ""], ["class", "galery-group", 4, "ngIf"], [1, "video-container"], ["id", "video", 1, "lazyload", "image-wrapper", 3, "timeupdate", "click", "dblclick"], ["video", ""], ["type", "video/mp4"], [1, "video-controls"], ["id", "play-pause", 1, "icon-button", 3, "click"], ["pause", ""], ["id", "mute", 1, "icon-button", 3, "click"], ["muted", ""], [1, "input-volume-bar", 3, "click"], ["customVolumeBar", ""], [1, "progress-bar"], [1, "input-video-bar", 3, "click"], ["customVideoBar", ""], ["id", "full-screen", 1, "icon-button", 3, "click"], ["src", "assets/icons/fullscreen.svg", "alt", "full-screen"], ["type", "range", "id", "seek-bar", "value", "0", 1, "slider-progress", 3, "change"], ["seekBar", ""], ["type", "range", "id", "volume-bar", "min", "0", "max", "1", "step", "0.05", "value", "1", 3, "change"], ["volumeBar", ""], ["src", "assets/icons/play.svg", "alt", "play", 1, "icon_l"], ["src", "assets/icons/pause.svg", "alt", "pause", 1, "icon_l"], ["src", "assets/icons/sound.svg", "alt", "sound", 1, "icon_l"], ["src", "assets/icons/muted.svg", "alt", "muted", 1, "icon_l"], ["alt", "galery", 1, "image-wrapper", 3, "src"], [1, "galery-group"], ["exceptFirst", ""], ["imageOnly", ""], [1, "route-to-galery-link", 3, "routerLink"], ["alt", "galery", 1, "lazyload", "image-wrapper"], ["href", "", 1, "route-to-galery-link"], [1, "recipe__nutritions"], [1, "text-m_m"], [1, "group", 3, "ngClass"], ["class", "image-div", 4, "ngIf"], [1, "image-div"], ["class", "lazyload image-wrapper", "alt", "recipe", 4, "ngIf"], ["alt", "recipe", 1, "lazyload", "image-wrapper"], [1, "recipe__advice"], [1, "reviews-container"], [1, "reviews-container__header"], ["class", "button", 3, "click", 4, "ngIf"], [1, "reviews-container__body"], ["emptyList", ""], [1, "reviews-container__footer"], [1, "button", 3, "click"], ["class", "review-card", 4, "ngFor", "ngForOf"], [1, "review-card"], [1, "review-card__header"], ["noImg", ""], [1, "review-card__header-rating"], ["dislike", ""], [1, "review-card__body"], [1, "review-text"], ["alt", "avatar", 3, "src"], [1, "review-card__img-profile"], ["src", "assets/icons/like.svg", "alt", "like"], ["src", "assets/icons/dislike.svg", "alt", "dislike"], [1, "empty-container"], [1, "page-wrapper"], ["wrapper", ""], [1, "review-form-control"], [1, "icon-button", "button-absolute", 3, "click"], ["src", "assets/icons/close.svg", "alt", "close"]], template: function RecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RecipeComponent_ng_container_0_Template, 106, 25, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RecipeComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RecipeComponent_div_3_Template, 6, 0, "div", 2);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.foundItem)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showReviewForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent, _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_9__.ReviewFormComponent], styles: [".recipe__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.recipe-header__info[_ngcontent-%COMP%], .recipe-header__info-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.recipe-header__info[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.recipe-article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin-bottom: 60px;\n}\n\n.recipe-article[_ngcontent-%COMP%]    > div.recipe__instructions[_ngcontent-%COMP%], .recipe-article[_ngcontent-%COMP%]    > div.recipe__advice[_ngcontent-%COMP%] {\n  max-width: none;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.video-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 25%;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);\n  opacity: 0;\n  transition: 0.3s ease;\n}\n\n.video-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 15%;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);\n  opacity: 0;\n  transition: 0.3s ease;\n}\n\n.video-container[_ngcontent-%COMP%]:hover    > .video-controls[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.video-container[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n\n.video-container[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n\ninput[type=range][_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n}\n\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  opacity: 0;\n}\n\ninput[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\n  opacity: 0;\n}\n\ninput[type=range][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-thumb {\n  opacity: 0;\n}\n\n.video-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.3s ease;\n  opacity: 0;\n  gap: 1em;\n  padding: 0 0.5em 0.5em 0.5em;\n  box-sizing: border-box;\n}\n\n.video-controls[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-volume-bar[_ngcontent-%COMP%] {\n  transition: transform 0.2s 0.2s, max-width 0.2s 0.2s, opacity 0.2s 0.2s;\n  width: 150px;\n  max-width: 0;\n  transform-origin: left;\n  transform: scaleX(0);\n  opacity: 0;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-volume-bar[_ngcontent-%COMP%]:hover {\n  max-width: 200px;\n  transform: scaleX(1);\n  opacity: 1;\n  transition: transform 0.3s 0.5s, max-width 0.5s 0.5s, opacity 0.2s 0.2s;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-volume-bar[_ngcontent-%COMP%], .video-controls[_ngcontent-%COMP%]    > .input-video-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-volume-bar[_ngcontent-%COMP%]    > .progress-bar[_ngcontent-%COMP%], .video-controls[_ngcontent-%COMP%]    > .input-video-bar[_ngcontent-%COMP%]    > .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #34742e;\n  width: 50%;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-video-bar[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-video-bar[_ngcontent-%COMP%]    > .progress-bar[_ngcontent-%COMP%] {\n  width: 0%;\n}\n\n.video-controls[_ngcontent-%COMP%]    > .input-video-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  transition: opacity 0.3s 0.2s;\n}\n\n.video-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n\n#mute[_ngcontent-%COMP%]:hover    ~ .input-volume-bar[_ngcontent-%COMP%], .input-volume-bar[_ngcontent-%COMP%]:hover {\n  max-width: 200px;\n  transform: scaleX(1);\n  opacity: 1;\n  transition: transform 0.3s 0.5s, max-width 0.5s 0.5s, opacity 0.2s 0.2s;\n}\n\n#mute[_ngcontent-%COMP%]:hover    ~ .input-volume-bar[_ngcontent-%COMP%]    ~ .input-video-bar[_ngcontent-%COMP%], .input-volume-bar[_ngcontent-%COMP%]:hover    ~ .input-video-bar[_ngcontent-%COMP%] {\n  transition: opacity 0.2s 0.3s;\n  opacity: 0;\n}\n\n.recipe__author[_ngcontent-%COMP%] {\n  border: 1px solid #c2c2c2;\n  box-sizing: border-box;\n  padding: 20px;\n  display: flex;\n  gap: 20px;\n  position: relative;\n}\n\n.recipe__author[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1em;\n  width: 100%;\n  left: 0;\n  position: absolute;\n  top: -0.5em;\n  display: flex;\n  justify-content: center;\n}\n\n.recipe__author[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]::before {\n  content: \"Author\";\n  position: absolute;\n  color: #6c6b6b;\n  line-height: 1em;\n  padding: 0 0.5em;\n  background: #fff;\n}\n\n.recipe__author[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  max-height: 250px;\n  overflow: auto;\n}\n\n.recipe__author[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  height: 100%;\n  background: #ededed;\n}\n\n.recipe__author[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #141414;\n}\n\n.recipe__nutritions[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.recipe__nutritions[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.recipe__nutritions[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.recipe__nutritions[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .recipe__nutritions[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 25%;\n  padding-bottom: 10px;\n}\n\n.recipe__ingredients[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.ingredients-header[_ngcontent-%COMP%], .control-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.ingredients-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.control-field[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.control-field[_ngcontent-%COMP%] {\n  margin-right: -10px;\n}\n\n.recipe__advice[_ngcontent-%COMP%] {\n  border: 1px solid #c2c2c2;\n  box-sizing: border-box;\n  padding: 20px;\n  text-align: center;\n  position: relative;\n  font-style: italic;\n}\n\n.recipe__advice[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1em;\n  width: 100%;\n  left: 0;\n  position: absolute;\n  top: -0.5em;\n  display: flex;\n  justify-content: center;\n}\n\n.recipe__advice[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]::before {\n  content: \"Advice\";\n  position: absolute;\n  color: #6c6b6b;\n  line-height: 1em;\n  padding: 0 0.5em;\n  background: #fff;\n}\n\n.instructions__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.instructions__header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: -1em;\n}\n\n.instructions__header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1em;\n}\n\n.instructions__header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li#print-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.instructions__header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n\n.instructions-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  counter-reset: num;\n  position: relative;\n  padding: 15px 0 5px 0;\n  font-size: 16px;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 60px;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]:is(.indent) {\n  margin-left: 60px;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > .image-div[_ngcontent-%COMP%] {\n  flex: 1 1 35%;\n  height: 200px;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 65%;\n  margin: 0;\n  line-height: 1.4em;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  content: counter(num);\n  counter-increment: num;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: -45px;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  background: transparent;\n  color: #141414;\n  text-align: center;\n  font-size: 18px;\n  border-radius: 50%;\n  border: 2px solid #141414;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 30px;\n  bottom: 0px;\n  left: -30px;\n  width: 1px;\n  border-left: 2px solid #141414;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]::after {\n  color: #fff;\n  background-color: #141414;\n}\n\n.instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]:last-child    > li[_ngcontent-%COMP%]::before {\n  content: none;\n}\n\n.footer__header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.share-links-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n}\n\n.share-links-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-container__lower-footer[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.reviews-container[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n\n.reviews-container__header[_ngcontent-%COMP%], .review-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.reviews-container__header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\n\n.review-card[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.review-card__header[_ngcontent-%COMP%] {\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.review-card__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n\n.review-card__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n}\n\n.review-card__header-rating[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  justify-content: end;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.review-card__header-rating[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  -webkit-user-drag: none;\n}\n\n.review-card__img-profile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: #fff;\n  background: rgb(196, 185, 62);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.reviews-container__footer[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.empty-container[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.review-form-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6509803922);\n  transition: 0.3s ease;\n  opacity: 1;\n  z-index: 5;\n  animation: fade-in 0.3s forwards;\n}\n\n.review-form-control[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n  z-index: 6;\n}\n\n@media screen and (max-width: 768px) {\n  .recipe__author[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .recipe__nutritions[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > .image-div[_ngcontent-%COMP%] {\n    flex: 1 1 50%;\n  }\n  .instructions-list[_ngcontent-%COMP%]    > .group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 1 1 50%;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .recipe__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .recipe-header__info[_ngcontent-%COMP%], .recipe-header__info-group[_ngcontent-%COMP%] {\n    gap: 20px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBQTtBQURKOztBQUtBOztFQUVJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBSUk7RUFFSSxlQUFBO0FBSFI7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUpKOztBQU1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBSlI7O0FBT0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0VBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFMUjs7QUFTUTtFQUNJLFVBQUE7QUFQWjs7QUFVUTtFQUNJLFVBQUE7QUFSWjs7QUFXUTtFQUNJLFVBQUE7QUFUWjs7QUFjQTtFQUVJLGVBQUE7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FBU0o7O0FBY0k7RUFDSSxVQUFBO0FBWlI7O0FBZUk7RUFDSSxVQUFBO0FBYlI7O0FBZ0JJO0VBQ0ksVUFBQTtBQWRSOztBQWtCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWdCSTtFQUNJLGFBQUE7QUFkUjs7QUFnQkk7RUFDSSx1RUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUFkUjs7QUFnQlE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVFQUFBO0FBZFo7O0FBa0JJO0VBRUksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFqQlI7O0FBbUJRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWpCWjs7QUFvQkk7RUFFSSxPQUFBO0FBbkJSOztBQW9CUTtFQUNJLFNBQUE7QUFsQlo7O0FBcUJJO0VBQ0ksT0FBQTtFQUNBLDZCQUFBO0FBbkJSOztBQXNCSTtFQUNJLGlCQUFBO0FBcEJSOztBQXdCQTs7RUFFSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVFQUFBO0FBckJKOztBQXVCSTs7RUFDSSw2QkFBQTtFQUNBLFVBQUE7QUFwQlI7O0FBd0JBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBckJKOztBQXVCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBckJSOztBQXVCUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3ZNSTtFRHdNSixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyQlo7O0FBeUJJO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXZCUjs7QUF5QlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ3hOSTtBRGlNaEI7O0FBMkJRO0VBRUksbUJDcE9DO0FEME1iOztBQWdDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBN0JKOztBQStCSTtFQUNJLG1CQUFBO0FBN0JSOztBQWdDSTtFQUNJLFdBQUE7QUE5QlI7O0FBZ0NROztFQUVJLFVBQUE7RUFDQSxvQkFBQTtBQTlCWjs7QUFtQ0E7RUFDSSxtQkFBQTtBQWhDSjs7QUFtQ0E7O0VBRUksYUFBQTtFQUNBLG1CQUFBO0FBaENKOztBQW1DQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQWhDSjs7QUFtQ0E7RUFDSSxrQkFBQTtBQWhDSjs7QUFtQ0E7RUFDSSxtQkFBQTtBQWhDSjs7QUFtQ0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQWpDSjs7QUFtQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWpDUjs7QUFtQ1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NuU0k7RURvU0osZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBakNaOztBQXNDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQW5DSjs7QUFxQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQW5DUjs7QUF1Q0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXJDUjs7QUF1Q1E7RUFDSSxlQUFBO0FBckNaOztBQXdDUTtFQUVJLG1CQUFBO0FBdkNaOztBQTRDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQXpDSjs7QUEyQ0k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQXpDUjs7QUEyQ1E7RUFDSSxpQkFBQTtBQXpDWjs7QUE0Q1E7RUFDSSxtQkFBQTtBQTFDWjs7QUE2Q1E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQTNDWjs7QUE4Q1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUE1Q1o7O0FBOENZO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNDelhIO0VEMFhHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUE1Q2hCOztBQStDWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQTdDaEI7O0FBbURnQjtFQUNJLFdBQUE7RUFDQSx5QkMvWVA7QUQ4VmI7O0FBd0RZO0VBQ0ksYUFBQTtBQXREaEI7O0FBNERBO0VBQ0ksbUJBQUE7QUF6REo7O0FBNERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXpESjs7QUEyREk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBekRSOztBQTZEQTtFQUNJLGdCQUFBO0FBMURKOztBQTZEQTtFQUNJLGdCQUFBO0FBMURKOztBQTZEQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7QUExREo7O0FBNkRBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQTFESjs7QUE2REE7RUFDSSxtQkFBQTtBQTFESjs7QUE2REE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUExREo7O0FBNkRRO0VBQ0ksZUFBQTtBQTNEWjs7QUE4RFE7RUFDSSxlQUFBO0FBNURaOztBQWlFQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBOURKOztBQWdFSTtFQUNJLHVCQUFBO0FBOURSOztBQWtFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBL0RKOztBQW1FSTtFQUNJLFdBQUE7QUFoRVI7O0FBb0VBO0VBQ0ksbUJBQUE7QUFqRUo7O0FBb0VBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxnQ0FBQTtBQWxFSjs7QUFxRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWxFSjs7QUFxRUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFsRU47RUFxRUU7SUFDSSxVQUFBO0VBbkVOO0VBeUVVO0lBQ0ksYUFBQTtFQXZFZDtFQTBFVTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQXhFZDtBQUNGOztBQTZFQTtFQUNJO0lBQ0ksZ0JBQUE7RUEzRU47RUE4RUU7O0lBRUksY0FBQTtFQTVFTjtBQUNGIiwiZmlsZSI6InJlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5yZWNpcGVfX2hlYWRlciBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuXHJcbi5yZWNpcGUtaGVhZGVyX19pbmZvLFxyXG4ucmVjaXBlLWhlYWRlcl9faW5mby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2lwZS1oZWFkZXJfX2luZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlY2lwZS1hcnRpY2xlPmRpdiB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuXHJcbiAgICAmLnJlY2lwZV9faW5zdHJ1Y3Rpb25zLFxyXG4gICAgJi5yZWNpcGVfX2FkdmljZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAuNSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIC4zKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJj4udmlkZW8tY29udHJvbHMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3JhbmdlJ10ge1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAvKlxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzdjN2M3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgJjo6LW1zLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAqL1xyXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmIDo6LW1zLXRodW1iIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8tY29udHJvbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBnYXA6IDFlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW0gMC41ZW0gMC41ZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgJj5pbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY+LmlucHV0LXZvbHVtZS1iYXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgLjJzLCBtYXgtd2lkdGggLjJzIC4ycywgb3BhY2l0eSAuMnMgLjJzO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgLjVzLCBtYXgtd2lkdGggLjVzIC41cywgb3BhY2l0eSAuMnMgLjJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmPi5pbnB1dC12b2x1bWUtYmFyLFxyXG4gICAgJj4uaW5wdXQtdmlkZW8tYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY+LnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ3NDJlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY+LmlucHV0LXZpZGVvLWJhciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICAmPi5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJj4uaW5wdXQtdmlkZW8tYmFyIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmPmJ1dHRvbiB7XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtdXRlOmhvdmVyfi5pbnB1dC12b2x1bWUtYmFyLFxyXG4uaW5wdXQtdm9sdW1lLWJhcjpob3ZlciB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyAuNXMsIG1heC13aWR0aCAuNXMgLjVzLCBvcGFjaXR5IC4ycyAuMnM7XHJcblxyXG4gICAgJn4uaW5wdXQtdmlkZW8tYmFyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyAuM3M7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlY2lwZV9fYXV0aG9yIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLWNvbG9yLTA0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0uNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBdXRob3InO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmFzZS1jb2xvci0wNTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAuNWVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmPmRpdiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYXNlLWNvbG9yLTAzO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5yZWNpcGVfX251dHJpdGlvbnMge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmPmg0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY+dGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmVjaXBlX19pbmdyZWRpZW50cz4qIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1oZWFkZXIsXHJcbi5jb250cm9sLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMtaGVhZGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbnRyb2wtZmllbGQ+KiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWZpZWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn1cclxuXHJcbi5yZWNpcGVfX2FkdmljZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFzZS1jb2xvci0wNDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbiAgICAmIC5sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnQWR2aWNlJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJhc2UtY29sb3ItMDU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnNfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAmPnVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmPnVsPmxpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcblxyXG4gICAgICAgICYjcHJpbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPioge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluc3RydWN0aW9ucy1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGNvdW50ZXItcmVzZXQ6IG51bTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMCA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAmPi5ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDYwcHg7XHJcblxyXG4gICAgICAgICY6aXMoLmluZGVudCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4qIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4uaW1hZ2UtZGl2IHtcclxuICAgICAgICAgICAgZmxleDogMSAxIDM1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+bGkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSA2NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogY291bnRlcihudW0pO1xyXG4gICAgICAgICAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IG51bTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC00NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHRleHQtY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgPmxpOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvb3Rlcl9faGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zaGFyZS1saW5rcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxZW07XHJcblxyXG4gICAgPmxpPmJ1dHRvbj5hIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJfX2xvd2VyLWZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ucmV2aWV3cy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLnJldmlld3MtY29udGFpbmVyX19oZWFkZXIsXHJcbi5yZXZpZXctY2FyZF9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmV2aWV3cy1jb250YWluZXJfX2hlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnJldmlldy1jYXJkX19oZWFkZXIge1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICA+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgPnNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+c3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJldmlldy1jYXJkX19oZWFkZXItcmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICA+aW1nIHtcclxuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnJldmlldy1jYXJkX19pbWctcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NiAxODUgNjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucmV2aWV3cy1jb250YWluZXJfX2Zvb3RlciB7XHJcbiAgICA+YnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWZvcm0td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTY7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAuM3MgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5yZXZpZXctZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5yZWNpcGVfX2F1dGhvciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWNpcGVfX251dHJpdGlvbnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmluc3RydWN0aW9ucy1saXN0IHtcclxuICAgICAgICAmPi5ncm91cCB7XHJcblxyXG4gICAgICAgICAgICA+LmltYWdlLWRpdiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgNTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmPmxpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAucmVjaXBlX19oZWFkZXIgaDEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlY2lwZS1oZWFkZXJfX2luZm8sXHJcbiAgICAucmVjaXBlLWhlYWRlcl9faW5mby1ncm91cCB7XHJcbiAgICAgICAgZ2FwOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzM0NzQyRTtcclxuJHByaW1hcnktY29sb3Itb3V0bGluZS1ob3ZlcjogIzFmYTYxZjFmO1xyXG4kcHJpbWFyeS1jb2xvci1vdXRsaW5lLWFjdGl2ZTogIzQ1OTUzZTtcclxuJHByaW1hcnktY29sb3ItaG92ZXI6ICMxZDRlMWQ7XHJcbiRwcmltYXJ5LWNvbG9yLWFjdGl2ZTogIzI0NzQyNDtcclxuJHRleHQtY29sb3I6ICMxNDE0MTQ7XHJcbiR0ZXh0LWNvbG9yLWdyZXk6ICM5YzljOWM7XHJcbiRuYXYtdGV4dC1ob3ZlcjogIzNkM2QzZDtcclxuJG5hdi10ZXh0LWFjdGl2ZTogIzcwNzA3MDtcclxuJGJhc2UtY29sb3ItMDE6ICNmZmY7XHJcbiRiYXNlLWNvbG9yLTAyOiAjMjgyODI4O1xyXG4kYmFzZS1jb2xvci0wMzogI2VkZWRlZDtcclxuJGJhc2UtY29sb3ItMDQ6ICNjMmMyYzI7XHJcbiRiYXNlLWNvbG9yLTA1OiAjNmM2YjZiO1xyXG4iXX0= */"] });


/***/ }),

/***/ 5735:
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesComponent": () => (/* binding */ RecipesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/post.service */ 9166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








function RecipesComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_container_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.routerNavigateReload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "All recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RecipesComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 20)(2, "li", 20)(3, "li", 20)(4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RecipesComponent_ng_template_5_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_template_5_ng_template_1_ng_container_0_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const category_r16 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.routerNavigateParam(category_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r16);
} }
function RecipesComponent_ng_template_5_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "button", 22)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "View more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RecipesComponent_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecipesComponent_ng_template_5_ng_template_1_ng_container_0_Template, 5, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecipesComponent_ng_template_5_ng_template_1_ng_container_1_Template, 5, 0, "ng-container", 14);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.categoriesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.showMoreCategories);
} }
function RecipesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecipesComponent_ng_template_5_ng_container_0_Template, 5, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecipesComponent_ng_template_5_ng_template_1_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loading || ctx_r2.catLoading)("ngIfElse", _r12);
} }
function RecipesComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_container_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.routerNavigateSearchParam()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.searchParam);
} }
function RecipesComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 30)(6, "div", 31)(7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 30)(12, "div", 31)(13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 30)(18, "div", 31)(19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 30)(24, "div", 31)(25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 30)(30, "div", 31)(31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 30)(36, "div", 31)(37, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 30)(42, "div", 31)(43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 30)(48, "div", 31)(49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 30)(54, "div", 31)(55, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 30)(60, "div", 31)(61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_7_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const category_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.routerNavigateParam(category_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r35);
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.Round(ingredient_r39.amount * item_r26.portions / item_r26.portionsDefault));
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r39.suffix, "");
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_span_5_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_span_6_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ingredient_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingredient_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ingredient_r39.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ingredient_r39.suffix);
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57)(2, "div", 58)(3, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "portions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const indexOfItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.changeAmount(indexOfItem_r27, -1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const indexOfItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.changeAmount(indexOfItem_r27, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_ng_container_15_Template, 7, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.portions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r26.ingredients);
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.portionsDefault, " portions");
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.portionsDefault, " portion");
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "hour");
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_ng_template_3_Template, 1, 0, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.timeToDo.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r26.timeToDo.hours > 1)("ngIfElse", _r54);
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.timeToDo.minutes, " minutes");
} }
function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 38)(5, "nav")(6, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_7_Template, 4, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2")(9, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 42)(14, "div", 43)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_ng_template_21_ng_container_0_ng_container_2_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const indexOfItem_r27 = restoredCtx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r58.openList(indexOfItem_r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_19_Template, 16, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_container_22_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_ng_template_23_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_26_Template, 5, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_span_27_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 49)(29, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Save this recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul", 52)(33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/recipes/", item_r26.ref, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r26.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r26.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/recipes/", item_r26.ref, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Author: ", item_r26.author.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ingredients: ", item_r26.ingredients.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !item_r26.listOpen ? "" : "reverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r26.listOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r26.portionsDefault > 1)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r26.timeToDo.hours !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r26.timeToDo.minutes !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.saved || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r26.likes || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r26.dislikes || 0, " ");
} }
function RecipesComponent_ng_template_21_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecipesComponent_ng_template_21_ng_container_0_ng_container_2_Template, 42, 16, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.displayingList);
} }
function RecipesComponent_ng_template_21_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66)(1, "h1", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sorry, couldn't find ", ctx_r24.category, " recipes");
} }
function RecipesComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecipesComponent_ng_template_21_ng_container_0_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecipesComponent_ng_template_21_ng_template_1_Template, 3, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.displayingList.length > 0)("ngIfElse", _r23);
} }
function RecipesComponent_div_23_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_div_23_ng_container_5_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const indexOfa_r62 = restoredCtx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r63.paginationStep(indexOfa_r62 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const indexOfa_r62 = ctx.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", indexOfa_r62 + 1 === ctx_r60.step ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", indexOfa_r62 + 1, " ");
} }
function RecipesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r65.paginationStep(ctx_r65.step - 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav")(4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecipesComponent_div_23_ng_container_5_Template, 3, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_div_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r67.paginationStep(ctx_r67.step + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.fakeArray);
} }
class RecipesComponent {
    constructor(activatedRoute, router, metaService, postService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.metaService = metaService;
        this.postService = postService;
        this.categorySub = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        this.limitCategoryList = 10;
        this.showMoreCategories = false;
        this.showHomeLink = false;
        this.loading = true;
        this.catLoading = true;
        this.title = '';
        this.category = '';
        this.searchParam = '';
        this.categoriesList = [];
        this.displayingList = [];
        this.listOpen = true;
        this.step = 1;
        this.paginationLength = 0;
        this.fakeArray = [];
    }
    ngOnInit() {
        const baseUrl = window.location.protocol + '//' + window.location.hostname + '/angular-recipes/';
        const imageUrl = baseUrl + 'assets/images/recipes/recipe-ex.jpg';
        const desc = 'Here you can find good recipe';
        this.metaService.addTags([
            { property: 'og:title', content: this.title },
            { property: 'og:type', content: 'article' },
            { property: 'og:url', content: window.location.href },
            { property: 'og:description', content: desc },
            { property: 'og:image', content: imageUrl }
        ]);
        this.searchParam = this.activatedRoute.snapshot.queryParamMap.get('search')?.toLowerCase()
            ?? '';
        this.category = this.activatedRoute.snapshot.queryParamMap.get('category') ?? '';
        if (this.category) {
            this.catLoading = false;
            this.showHomeLink = true;
            this.title = this.category.charAt(0).toLocaleUpperCase() + this.category.slice(1) + ' recepies';
        }
        else {
            this.title = "Recipes";
            this.catLoading = true;
            const categoriesDataArg = {
                searchParam: this.searchParam,
                limit: this.limitCategoryList
            };
            this.categorySub = this.postService.getCategories(categoriesDataArg).subscribe({
                next: (data) => {
                    for (let category of data) {
                        this.categoriesList.push(category.title);
                    }
                    if (this.categoriesList.length === this.limitCategoryList)
                        this.showMoreCategories = true;
                    this.catLoading = false;
                },
                error: (err) => {
                    console.log(err);
                    this.catLoading = false;
                }
            });
        }
        this.updateList();
        document.addEventListener('click', (event) => {
            if (event.target.closest("#button-list") === null && event.target.closest(".ingredients-container") === null) {
                this.openList(99);
            }
        });
    }
    ngOnDestrot() {
        this.categorySub.unsubscribe();
    }
    paginationStep(step) {
        if (step === this.step || step === 0 || step === this.paginationLength + 1)
            return;
        this.step = step;
        this.loading = true;
        this.updateList();
        setTimeout(() => {
            window.scrollTo({
                top: Number(document.getElementById('recipes')?.offsetTop) - 40,
                behavior: 'smooth'
            });
        }, 100);
    }
    updateList() {
        this.displayingList = [];
        this.paginationLength = 0;
        this.fakeArray = [];
        const dataArgs = {
            category: this.category?.toLowerCase() ?? '',
            searchParam: this.searchParam ?? '',
            step: this.step,
        };
        this.postService.getRecipes(dataArgs).subscribe({
            next: (data) => {
                if (data['list']) {
                    for (let item of data.list) {
                        item.listOpen = false;
                        this.displayingList.push(item);
                    }
                    this.paginationLength = data['pagingationLength'] ?? 0;
                    this.fakeArray = new Array(this.paginationLength);
                }
                this.loading = false;
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            }
        });
    }
    openList(index) {
        for (let [indexOfItem, item] of this.displayingList.entries()) {
            if (index === indexOfItem && !item.listOpen) {
                item.listOpen = true;
            }
            else {
                item.listOpen = false;
            }
        }
    }
    changeAmount(index, value) {
        if (this.displayingList[index].portions > 1 || value > 0)
            this.displayingList[index].portions += value;
    }
    Round(value) {
        return Math.round(value * 100) / 100;
    }
    routerNavigateReload() {
        this.router.navigateByUrl('/recipes').then(() => {
            this.router.navigate(['/']);
        });
    }
    routerNavigateSearchParam(searchParam) {
        const queryParam = {};
        if (this.category)
            queryParam.category = this.category;
        queryParam.search = searchParam;
        this.router.navigateByUrl('/recipes').then(() => {
            this.router.navigate([''], { queryParams: queryParam });
        });
    }
    routerNavigateParam(categoryParam) {
        const queryParam = {};
        queryParam.category = categoryParam;
        if (this.searchParam)
            queryParam.search = this.searchParam;
        this.router.navigateByUrl('/recipes').then(() => {
            this.router.navigate([''], { queryParams: queryParam });
        });
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService)); };
RecipesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], decls: 24, vars: 7, consts: [[1, "container", "main-container"], [1, "main-container__header"], [1, "category-nav"], [4, "ngIf", "ngIfElse"], ["categories", ""], [1, "text-h1_bold"], [1, "header-desc"], [1, "control-group"], [1, "search"], ["action", "", 1, "form-button", "search-form"], ["placeholder", "Search by title", "type", "text", "name", "search"], ["search", ""], ["type", "button", 1, "icon-button", "button-search", 3, "click"], ["src", "assets/icons/search.svg", "alt", "search", 1, "icon"], [4, "ngIf"], ["done", ""], ["class", "paggination", 4, "ngIf"], [1, "button", "button_positive-outline", "button-category", 3, "click"], [1, "text-s_l", "text_prim-color"], ["categoriesDone", ""], [1, "category-skeleton__card", "sk-ph"], [4, "ngFor", "ngForOf"], ["routerLink", "categories", 1, "button", "button_positive-outline", "button-category"], ["action", "", 1, "reset-form"], ["for", "search"], ["src", "assets/icons/close.svg", "alt", "reset", 1, "icon"], [1, "recipe-skeleton"], [1, "recipe-skeleton__card"], [1, "recipe-skeleton__card-g-1", "sk-ph"], [1, "recipe-skeleton__card-g-2"], [1, "recipe-skeleton__card-e-1", "sk-ph"], [1, "recipe-skeleton__card-e-2", "sk-ph"], [1, "recipe-skeleton__card-e-3", "sk-ph"], ["cantFind", ""], ["id", "recipes"], [1, "recipe-card"], [1, "recipe-image", 3, "routerLink"], ["alt", "recipe image", 1, "image-wrapper", 3, "src"], [1, "recipe-info"], [1, "category"], [1, "text-h3_bold", 3, "routerLink"], [1, "text-s_l", "text-grey"], [1, "recipe-extra"], [1, "ingredients-label"], ["id", "button-list", 1, "icon-button", 3, "click"], ["src", "assets/icons/chevron.svg", "alt", "chevron", 1, "icon_s", 3, "ngClass"], ["src", "assets/icons/dish.svg", "alt", "portions", 1, "icon"], ["portion", ""], ["src", "assets/icons/time.svg", "alt", "time", 1, "icon"], [1, "recipe-group"], [1, "button", "button_s", "button_icon"], ["src", "assets/icons/save.svg", "alt", "save", 1, "icon"], [1, "recipe-stats"], ["src", "assets/icons/saved.svg", "alt", "saved", 1, "icon"], ["src", "assets/icons/like.svg", "alt", "likes", 1, "icon"], ["src", "assets/icons/dislike.svg", "alt", "dislikes", 1, "icon"], [1, "text-s_l", "text_prim-color", 3, "click"], [1, "ingredients-container"], [1, "ingredients-container__header"], [1, "text-m_m"], [1, "control-field"], [1, "icon-button", 3, "click"], ["src", "assets/icons/minus.svg", "alt", "minus", 1, "icon_s"], ["src", "assets/icons/plus.svg", "alt", "plus", 1, "icon_s"], [1, "ingredients-list"], ["hour", ""], [1, "empty-card"], [1, "text-h2_bold"], [1, "paggination"], ["id", "prev", 1, "icon-button", 3, "click"], ["src", "assets/icons/chevron.svg", "alt", "previous", 1, "icon"], ["id", "next", 1, "icon-button", 3, "click"], ["src", "assets/icons/chevron.svg", "alt", "next", 1, "icon"], [3, "ngClass", "click"]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecipesComponent_ng_container_4_Template, 5, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecipesComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.routerNavigateSearchParam(_r3.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RecipesComponent_ng_container_19_Template, 7, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RecipesComponent_ng_container_20_Template, 62, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RecipesComponent_ng_template_21_Template, 3, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RecipesComponent_div_23_Template, 8, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHomeLink)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading || ctx.catLoading)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paginationLength > 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: [".category-nav[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .button-category[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.category-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .button-category[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.category-skeleton__card[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 34px;\n  background-color: #c6c6c6;\n  border-radius: 5px;\n}\n.header-desc[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 40px;\n}\n.header-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  bottom: 10px;\n  left: calc(50% - 50px);\n  position: absolute;\n  max-width: 100px;\n  border-bottom: 2px solid #141414;\n}\n.header-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  bottom: 0;\n  left: calc(50% - 40px);\n  position: absolute;\n  max-width: 80px;\n  border-bottom: 2px solid #141414;\n}\n.control-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-end;\n}\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.search-form[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 30px;\n  justify-content: space-between;\n  border-radius: 5px;\n}\n.search-form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reset-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgb(246, 223, 152);\n  border-radius: 5px;\n}\n.reset-form[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.button-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#recipes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.recipe-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n.recipe-card[_ngcontent-%COMP%]   .recipe-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.3s ease;\n}\n.recipe-card[_ngcontent-%COMP%]   .recipe-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.recipe-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.recipe-info[_ngcontent-%COMP%] {\n  margin-bottom: -10px;\n}\n.recipe-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.recipe-extra[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: -10px;\n  position: relative;\n}\n.recipe-extra[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.recipe-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.ingredients-label[_ngcontent-%COMP%] {\n  border-right: 1px solid #c2c2c2;\n  cursor: default;\n}\n.ingredients-label[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.ingredients-container[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 20px 15px;\n  width: 100%;\n  z-index: 2;\n  top: 1.5em;\n  border: 1px solid #c2c2c2;\n  background: #fff;\n  padding-bottom: 0;\n}\n.ingredients-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ingredients-container__header[_ngcontent-%COMP%], .control-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ingredients-container__header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.control-field[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.control-field[_ngcontent-%COMP%] {\n  margin-right: -10px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  text-align: center;\n}\n.recipe-skeleton[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.recipe-skeleton__card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n.recipe-skeleton__card-g-1[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.recipe-skeleton__card-g-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.recipe-skeleton__card-e-1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 1.25em;\n  width: 200px;\n}\n.recipe-skeleton__card-e-2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 1.25em;\n  width: 300px;\n}\n.recipe-skeleton__card-e-3[_ngcontent-%COMP%] {\n  width: 400px;\n  flex: 1;\n}\n.recipe-skeleton[_ngcontent-%COMP%]   .sk-ph[_ngcontent-%COMP%] {\n  background-color: #c6c6c6;\n  border-radius: 5px;\n}\n@media screen and (max-width: 768px) {\n  .recipe-card[_ngcontent-%COMP%] {\n    text-align: center;\n    flex-direction: column;\n    align-items: center;\n  }\n  .recipe-card[_ngcontent-%COMP%]   .recipe-info[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .recipe-card[_ngcontent-%COMP%]   .recipe-extra[_ngcontent-%COMP%], .recipe-card[_ngcontent-%COMP%]   .recipe-group[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    row-gap: 10px;\n    justify-content: center;\n  }\n  #recipes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    position: relative;\n    padding-bottom: 40px;\n  }\n  #recipes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    border-bottom: 1px solid #c2c2c2;\n  }\n}\n.icon-button#prev[_ngcontent-%COMP%], .icon-button#next[_ngcontent-%COMP%] {\n  transition: 0.3s ease;\n}\n.icon-button#prev[_ngcontent-%COMP%]:hover, .icon-button#next[_ngcontent-%COMP%]:hover {\n  scale: 1.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUVRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFZ0I7RUFDSSxjQUFBO0FBQXBCO0FBUUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQU5KO0FBVVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVJaO0FBV1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBVFo7QUFhQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVZKO0FBWUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQVRKO0FBV0E7RUFDSSxPQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVNJO0VBQ0ksT0FBQTtBQVBSO0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFRSTtFQUNJLGVBQUE7QUFOUjtBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTko7QUFTQTtFQUNJLG1CQUFBO0FBTko7QUFTQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBTko7QUFRSTtFQUNJLHFCQUFBO0FBTlI7QUFPUTtFQUNJLFlBQUE7QUFMWjtBQVVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFQSjtBQVVBO0VBQ0ksb0JBQUE7QUFQSjtBQVVBO0VBQ0ksbUJBQUE7QUFQSjtBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQVJKO0FBV0E7RUFDSSxrQkFBQTtBQVJKO0FBV0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBUko7QUFXQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQVJKO0FBVUk7RUFDSSxrQkFBQTtBQVJSO0FBWUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkNsSlk7RURtSlosaUJBQUE7QUFUSjtBQVlBO0VBQ0ksbUJBQUE7QUFUSjtBQVlBOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQVRKO0FBWUE7RUFDSSw4QkFBQTtBQVRKO0FBWUE7RUFDSSxrQkFBQTtBQVRKO0FBWUE7RUFDSSxtQkFBQTtBQVRKO0FBWUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFhSTtFQUNJLG1CQUFBO0FBVlI7QUFZSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBVlI7QUFZUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBVlo7QUFhUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFYWjtBQWNRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBWlo7QUFlUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQWJaO0FBZ0JRO0VBQ0ksWUFBQTtFQUNBLE9BQUE7QUFkWjtBQWtCSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFoQlI7QUFtQkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQWhCTjtFQWtCTTtJQUNJLHVCQUFBO0VBaEJWO0VBbUJNOztJQUVJLGVBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUFqQlY7RUFzQk07SUFDSSxrQkFBQTtJQUNBLG9CQUFBO0VBcEJWO0VBcUJVO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtFQW5CZDtBQUNGO0FBd0JJO0VBRUkscUJBQUE7QUF2QlI7QUF5QlE7RUFDSSxVQUFBO0FBdkJaIiwiZmlsZSI6InJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMnO1xyXG5cclxuLmNhdGVnb3J5LW5hdiB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICAgICYgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAmIC5idXR0b24tY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhdGVnb3J5LXNrZWxldG9uIHtcclxuICAgICZfX2NhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M2YzZjNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXItZGVzYyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAmIHNwYW4ge1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY29udHJvbC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuLnNlYXJjaC1mb3JtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmID4gaW5wdXQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuLnJlc2V0LWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDIyMyAxNTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgJiA+IGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG59XHJcbi5idXR0b24tc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jcmVjaXBlcz4qIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5yZWNpcGUtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0MHB4O1xyXG5cclxuICAgIC5yZWNpcGUtaW5mbyBhIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmVjaXBlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5yZWNpcGUtaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuLnJlY2lwZS1pbmZvPioge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlY2lwZS1leHRyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVjaXBlLWV4dHJhPioge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmVjaXBlLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMtbGFiZWwge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJhc2UtY29sb3ItMDQ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgJj4qIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiAxLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLWNvbG9yLTA0O1xyXG4gICAgYmFja2dyb3VuZDogJGJhc2UtY29sb3ItMDE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLWNvbnRhaW5lcj4qIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1jb250YWluZXJfX2hlYWRlcixcclxuLmNvbnRyb2wtZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1jb250YWluZXJfX2hlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb250cm9sLWZpZWxkPioge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZW1wdHktY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2lwZS1za2VsZXRvbiB7XHJcbiAgICA+ICoge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgICAmX19jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNDBweDtcclxuXHJcbiAgICAgICAgJi1nLTEge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWctMiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZS0xIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1lLTIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWUtMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNrLXBoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnJlY2lwZS1jYXJkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmIC5yZWNpcGUtaW5mbz5uYXY+dWwge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgLnJlY2lwZS1leHRyYSxcclxuICAgICAgICAucmVjaXBlLWdyb3VwIHtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjcmVjaXBlcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRiYXNlLWNvbG9yLTA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgICAmI3ByZXYsXHJcbiAgICAmI25leHQge1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgc2NhbGU6IDEuMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzM0NzQyRTtcclxuJHByaW1hcnktY29sb3Itb3V0bGluZS1ob3ZlcjogIzFmYTYxZjFmO1xyXG4kcHJpbWFyeS1jb2xvci1vdXRsaW5lLWFjdGl2ZTogIzQ1OTUzZTtcclxuJHByaW1hcnktY29sb3ItaG92ZXI6ICMxZDRlMWQ7XHJcbiRwcmltYXJ5LWNvbG9yLWFjdGl2ZTogIzI0NzQyNDtcclxuJHRleHQtY29sb3I6ICMxNDE0MTQ7XHJcbiR0ZXh0LWNvbG9yLWdyZXk6ICM5YzljOWM7XHJcbiRuYXYtdGV4dC1ob3ZlcjogIzNkM2QzZDtcclxuJG5hdi10ZXh0LWFjdGl2ZTogIzcwNzA3MDtcclxuJGJhc2UtY29sb3ItMDE6ICNmZmY7XHJcbiRiYXNlLWNvbG9yLTAyOiAjMjgyODI4O1xyXG4kYmFzZS1jb2xvci0wMzogI2VkZWRlZDtcclxuJGJhc2UtY29sb3ItMDQ6ICNjMmMyYzI7XHJcbiRiYXNlLWNvbG9yLTA1OiAjNmM2YjZiO1xyXG4iXX0= */"] });


/***/ }),

/***/ 5096:
/*!******************************************************!*\
  !*** ./src/app/review-form/review-form.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewFormComponent": () => (/* binding */ ReviewFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ReviewFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewFormComponent.ɵfac = function ReviewFormComponent_Factory(t) { return new (t || ReviewFormComponent)(); };
ReviewFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewFormComponent, selectors: [["app-review-form"]], decls: 2, vars: 0, template: function ReviewFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "review-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9166:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var _assets_base_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/base/categories.json */ 9408);
/* harmony import */ var _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/base/recipes.json */ 2962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);







class PostService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/api';
    }
    /**
     * Method returns list of recipes and pagination length
     * @param recipesDataArgs options with query and pagination
     * @return An Observable
     */
    getRecipes(recipesDataArgs) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
            return this.http.post(`${this.baseUrl}/list`, recipesDataArgs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                return res['data'];
            }));
        }
        else {
            const tmpArray = _assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__.slice(((recipesDataArgs.step - 1) * 10), 10 * recipesDataArgs.step);
            let result = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
                list: tmpArray,
                pagingationLength: Math.floor(_assets_base_recipes_json__WEBPACK_IMPORTED_MODULE_1__.length / 10) + 1
            });
            return result.asObservable();
        }
    }
    /**
     * Method returns list of categories
     * @param categoriesDataArgs options with query
     * @return An Observable
     */
    getCategories(categoriesDataArgs) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
            return this.http.post(`${this.baseUrl}/categories`, categoriesDataArgs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                return res['data'];
            }));
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(_assets_base_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((el, key) => { return { id: key, title: el }; })).asObservable();
        }
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
PostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    test: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ }),

/***/ 6493:
/*!***********************************!*\
  !*** ./src/assets/js/lazyload.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazyload": () => (/* binding */ lazyload)
/* harmony export */ });


class lazyload {
  lazyComponent = document.querySelectorAll(".lazyload[data-src], .lazyload[data-srcset]");
  windowHeight = document.documentElement.clientHeight;
  lazyComponentPosition = [];

  constructor() {}

  init() {
    window.addEventListener("scroll", () => {
      this.lazyScroll();
    });

    if (this.lazyComponent.length) {
      this.lazyComponent.forEach(element => {
        if (element.dataset.src || element.dataset.srcset) {
          let lazyWrapper = document.createElement("div");
          lazyWrapper.classList.add("lazyload-wrapper");
          this.insertAfter(element, lazyWrapper);
          this.lazyComponentPosition.push(element.getBoundingClientRect().top + scrollY);
          this.lazyScrollCheck();
        }
      });
    }
  }

  lazyScrollCheck() {
    let componentIndexes = [];
    this.lazyComponentPosition.forEach((item, key) => {
      if (scrollY > item - this.windowHeight) componentIndexes.push(key);
    });

    if (componentIndexes.length) {
      componentIndexes.forEach(componentIndex => {
        if (this.lazyComponent[componentIndex].dataset.src) {
          this.lazyComponent[componentIndex].src = this.lazyComponent[componentIndex].getAttribute("data-src");

          this.lazyComponent[componentIndex].onload = event => {
            let el = event.target;
            el.classList.remove("lazyload");
            el.removeAttribute("data-src");
            el.nextSibling.classList.contains("lazyload-wrapper") ? el.nextSibling.remove() : "";
          };
        } else if (this.lazyComponent[componentIndex].dataset.srcset) {
          if (this.lazyComponent[componentIndex].tagName === "VIDEO") {
            this.lazyComponent[componentIndex].src = this.lazyComponent[componentIndex].getAttribute("data-srcset");

            this.lazyComponent[componentIndex].onloadeddata = event => {
              let el = event.target;
              el.classList.remove("lazyload");
              el.removeAttribute("data-srcset");
              el.nextSibling.classList.contains("lazyload-wrapper") ? el.nextSibling.remove() : "";
            };
          } else {
            this.lazyComponent[componentIndex].srcset = this.lazyComponent[componentIndex].getAttribute("data-srcset");

            this.lazyComponent[componentIndex].onload = event => {
              let el = event.target;
              el.classList.remove("lazyload");
              el.removeAttribute("data-srcset");
              el.nextSibling.classList.contains("lazyload-wrapper") ? el.nextSibling.remove() : "";
            };
          }
        }

        delete this.lazyComponentPosition[componentIndex];
      });
    }
  }

  lazyScroll() {
    if (document.querySelectorAll(".lazyload[data-src]").length || document.querySelectorAll(".lazyload[data-srcset]").length) {
      this.lazyScrollCheck();
    }
  }

  onDOMchange() {
    this.lazyComponent = document.querySelectorAll(".lazyload[data-src], .lazyload[data-srcset]");
    setTimeout(() => this.init(), 4);
  }

  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

}

/***/ }),

/***/ 160:
/*!***************************************!*\
  !*** ./src/assets/base/articles.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","title":"Something_1","ref":"1","body":{"galery":{"videoSrc":"assets/videos/recipes/video.mp4","imagesSrc":["assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex-1.jpg","assets/images/recipes/recipe-ex-2.jpg","assets/images/recipes/recipe-ex-3.jpg","assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg"]},"nutritions":{"energy":521,"protein":12,"fat":32,"carbohydrate":68},"instructions":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex-4.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":""},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex-5.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex-6.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":""}],"desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","advice":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus."}},{"id":"2","title":"Something_2","ref":"2","body":{}},{"id":"3","title":"Something_3","ref":"3","body":{}},{"id":"4","title":"Something_4","ref":"4","body":{}},{"id":"5","title":"Something_5","ref":"5","body":{}},{"id":"6","title":"Something_6","ref":"6","body":{}},{"id":"7","title":"Something_7","ref":"7","body":{"galery":{"videoSrc":"assets/videos/recipes/video.mp4","imagesSrc":["assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg","assets/images/recipes/recipe-ex.jpg"]},"nutritions":{"energy":521,"protein":12,"fat":32,"carbohydrate":68},"instructions":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":""},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":"assets/images/recipes/recipe-ex.jpg"},{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","imageSrc":""}],"desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","advice":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus."}},{"id":"8","title":"Something_8","ref":"8","body":{}},{"id":"9","title":"Something_9","ref":"9","body":{}},{"id":"10","title":"Something_10","ref":"10","body":{}},{"id":"11","title":"Something_11","ref":"11","body":{}}]');

/***/ }),

/***/ 9408:
/*!*****************************************!*\
  !*** ./src/assets/base/categories.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('["breakfast","russian","italian","british","dinner","lunch","french"]');

/***/ }),

/***/ 2962:
/*!**************************************!*\
  !*** ./src/assets/base/recipes.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","title":"Something_1","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":4,"dislikes":1,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"},{"name":"Milk","amount":100,"suffix":"ml"},{"name":"Water","amount":50,"suffix":"ml"},{"name":"Spices","amount":0,"suffix":"to taste"}],"portions":6,"portionsDefault":6,"timeToDo":{"hours":2,"minutes":30},"desc":"text","ref":"1"},{"id":"2","title":"Something_2","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","british"],"difficulty":3,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""}],"portions":3,"portionsDefault":3,"timeToDo":{"hours":0,"minutes":30},"desc":"text","ref":"2"},{"id":"3","title":"Something_3","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["british"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"},{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":2,"portionsDefault":2,"timeToDo":{"hours":0,"minutes":30},"desc":"text","ref":"3"},{"id":"4","title":"Something_4","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["dinner","italian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":1,"minutes":30},"desc":"text","ref":"article-4"},{"id":"5","title":"Something_5","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["dinner","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":1,"minutes":0},"desc":"text","ref":"article-5"},{"id":"6","title":"Something_6","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["dinner","russian"],"difficulty":5,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":10,"portionsDefault":10,"timeToDo":{"hours":0,"minutes":30},"desc":"text","ref":"article-6"},{"id":"7","title":"Something_7","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":0,"minutes":30},"desc":"text","ref":"article-7"},{"id":"8","title":"Something_8","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":1,"minutes":0},"desc":"text","ref":"article-8"},{"id":"9","title":"Something_9","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":0,"minutes":30},"desc":"text","ref":"article-9"},{"id":"10","title":"Something_10","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":0,"minutes":20},"desc":"text","ref":"article-10"},{"id":"11","title":"Something_11","author":{"name":"Nikita","img":"assets/images/profiles/person.jpg"},"saved":0,"likes":0,"dislikes":0,"imgSrc":"assets/images/recipes/recipe-ex.jpg","categories":["breakfast","russian"],"difficulty":1,"ingredients":[{"name":"Meat","amount":2,"suffix":"kg"},{"name":"Egg","amount":5,"suffix":""},{"name":"Flour","amount":150,"suffix":"g"}],"portions":1,"portionsDefault":1,"timeToDo":{"hours":1,"minutes":15},"desc":"text","ref":"11"}]');

/***/ }),

/***/ 1812:
/*!**********************************************!*\
  !*** ./src/assets/base/reviews/reviews.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"articleId":"1","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-06-07","author":{"name":"Mark","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-01","author":{"name":"Tom","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-02-07","author":{"name":"Jack","img":""}},{"rating":0,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-02-03","author":{"name":"Terry","img":""}}]},{"articleId":"2","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-06-07","author":{"name":"Mark","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-01","author":{"name":"Tom","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-02-07","author":{"name":"Jack","img":""}},{"rating":0,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-02-03","author":{"name":"Terry","img":""}}]},{"articleId":"3","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-06-07","author":{"name":"Mark","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-01","author":{"name":"Tom","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-02-07","author":{"name":"Jack","img":""}},{"rating":0,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-02-03","author":{"name":"Terry","img":""}}]},{"articleId":"4","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-06-07","author":{"name":"Mark","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-01","author":{"name":"Tom","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-02-07","author":{"name":"Jack","img":""}},{"rating":0,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-02-03","author":{"name":"Terry","img":""}}]},{"articleId":"5","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}}]},{"articleId":"10","reviews":[{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-07","author":{"name":"Alex","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-06-07","author":{"name":"Mark","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-05-01","author":{"name":"Tom","img":""}},{"rating":1,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2023-02-07","author":{"name":"Jack","img":""}},{"rating":0,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisi nec arcu tristique sagittis at in metus. Vivamus quam nibh, imperdiet eu sem nec, pulvinar finibus turpis. In dolor turpis, aliquam eu ultrices sit amet, porttitor vitae ligula.","pubDate":"2022-02-03","author":{"name":"Terry","img":""}}]}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map