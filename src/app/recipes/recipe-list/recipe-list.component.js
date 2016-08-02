"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recipe_1 = require("../recipe");
var recipe_item_component_1 = require("./recipe-item.component");
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.recipes = [];
        this.recipeSelected = new core_1.EventEmitter();
        this.recipe = new recipe_1.Recipe('Dummy', 'Dummy', 'http://previewcf.turbosquid.com/Preview/2014/07/04__08_44_44/shop%20dummy1.jpgd52a5608-9179-4c76-87dc-195bcdfe5f4bLarge.jpg');
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    __decorate([
        core_1.Output()
    ], RecipeListComponent.prototype, "recipeSelected");
    RecipeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-list',
            templateUrl: 'recipe-list.component.html',
            directives: [recipe_item_component_1.RecipeItemComponent]
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map