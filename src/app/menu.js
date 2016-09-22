"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var app_1 = require('./app');
var MenuPage = (function () {
    function MenuPage(app) {
        this.app = app;
    }
    MenuPage = __decorate([
        core_1.Component({
            selector: 'ons-page[menu]',
            template: "\n    <ons-toolbar>\n      <div class=\"center\">Menu</div>\n    </ons-toolbar>\n\n    <div class=\"content\">\n      <ons-list>\n        <ons-list-item (click)=\"app.load('home')\">Home</ons-list-item>\n        <ons-list-item (click)=\"app.load('about')\">About</ons-list-item>\n        <ons-list-item (click)=\"app.load('map')\">Map</ons-list-item>\n      </ons-list>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return app_1.MyApp; })))
    ], MenuPage);
    return MenuPage;
}());
exports.MenuPage = MenuPage;