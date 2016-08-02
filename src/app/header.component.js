"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-header',
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">Recipe Book</a>\n        </div>\n    \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a href=\"#\">Recipes</a></li>\n            <li><a href=\"#\">Shopping Lists</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Login</a></li>\n                <li><a href=\"#\">Other</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">Log Out</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n  ",
            styles: []
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map