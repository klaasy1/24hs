"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');
// Application code starts here
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_onsenui_1 = require('angular2-onsenui');
var app_1 = require('./app/app');
var home_1 = require('./app/home');
var menu_1 = require('./app/menu');
var about_1 = require('./app/about');
var map_1 = require('./app/map');
var core_2 = require('angular2-google-maps/core');
// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_onsenui_1.OnsenModule,
                http_1.HttpModule,
                router_1.RouterModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCat2oJWJuITxaTL6fl5Qs-cVBCBBLroKg'
                }),
            ],
            declarations: [
                app_1.MyApp,
                home_1.HomePage,
                menu_1.MenuPage,
                about_1.AboutPage,
                map_1.MapPage,
            ],
            entryComponents: [
                home_1.HomePage,
                menu_1.MenuPage,
                about_1.AboutPage,
                map_1.MapPage,
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [
                app_1.MyApp,
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA,
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(function (err) { return console.error(err); });
