"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var FloatingActionMenuComponent = (function () {
    function FloatingActionMenuComponent() {
        this.isOpen = false;
        this.state = 'closed';
        this.toggle = 'click';
    }
    FloatingActionMenuComponent.prototype.clicked = function () {
        if (this.toggle !== 'click') {
            return false;
        }
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.state = 'open';
        }
        else {
            this.state = 'closed';
        }
    };
    FloatingActionMenuComponent.prototype.entered = function () {
        if (this.toggle !== 'hover') {
            return false;
        }
        this.state = 'open';
    };
    FloatingActionMenuComponent.prototype.leaved = function () {
        if (this.toggle !== 'hover') {
            return false;
        }
        this.state = 'closed';
    };
    FloatingActionMenuComponent.prototype.ngOnInit = function () {
    };
    return FloatingActionMenuComponent;
}());
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "placement");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "effect");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "label");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "iconClass");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "activeIconClass");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "toggle");
__decorate([
    core_1.Input()
], FloatingActionMenuComponent.prototype, "buttons");
FloatingActionMenuComponent = __decorate([
    core_1.Component({
        selector: 'ng2-floating-action-menu',
        templateUrl: './floating-action-menu.component.html',
        styleUrls: ['./floating-action-menu.component.scss']
    })
], FloatingActionMenuComponent);
exports.FloatingActionMenuComponent = FloatingActionMenuComponent;
