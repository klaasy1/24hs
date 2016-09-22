"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angular2_onsenui_1 = require('angular2-onsenui');
var home_1 = require('./home');
var menu_1 = require('./menu');
var about_1 = require('./about');
var map_1 = require('./map');
var MyApp = (function () {
    function MyApp() {
        this.pages = {
            home: home_1.HomePage,
            menu: menu_1.MenuPage,
            about: about_1.AboutPage,
            map: map_1.MapPage
        };
    }
    MyApp.prototype.load = function (name) {
        if (this.pages.hasOwnProperty(name)) {
            this.content.element.load(this.pages[name]);
            this.side.element.close();
        }
        else {
            console.error("page " + name + " not found");
        }
    };
    __decorate([
        core_1.ViewChild(angular2_onsenui_1.OnsSplitterContent)
    ], MyApp.prototype, "content");
    __decorate([
        core_1.ViewChild(angular2_onsenui_1.OnsSplitterSide)
    ], MyApp.prototype, "side");
    MyApp = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('./app.html'),
            styles: [require('./app.css')]
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
