"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var FloatingActionButtonComponent = (function () {
    function FloatingActionButtonComponent() {
    }
    FloatingActionButtonComponent.prototype.buttonClick = function () {
        this.button.onClick();
        return false;
    };
    FloatingActionButtonComponent.prototype.ngOnInit = function () {
    };
    return FloatingActionButtonComponent;
}());
__decorate([
    core_1.Input()
], FloatingActionButtonComponent.prototype, "button");
FloatingActionButtonComponent = __decorate([
    core_1.Component({
        selector: 'ng2-floating-action-button',
        templateUrl: './floating-action-button.component.html',
        styleUrls: ['./floating-action-button.component.sass']
    })
], FloatingActionButtonComponent);
exports.FloatingActionButtonComponent = FloatingActionButtonComponent;
