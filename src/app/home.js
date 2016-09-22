"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomePage = (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        core_1.Component({
            selector: 'ons-page[home]',
            template: "\n    <ons-toolbar>\n      <div class=\"center\">Home</div>\n    </ons-toolbar>\n\n    <div class=\"content\">\n      <p>This is the home component. Swipe right to see the sliding menu.</p>\n    </div>\n  "
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
