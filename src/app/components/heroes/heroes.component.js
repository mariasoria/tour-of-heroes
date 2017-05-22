"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("../../core/services/hero.service");
var HeroesComponent = (function () {
    // saves in heroService whatever is coming from HeroService
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    // gets the list of heroes provided from mock-heroes through hero.service
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // synchronous signature
        // this.heroes = this.heroService.getHeroes();
        // when the info comes from a remote server, do it asyncronous
        // To coordinate the view with the response, you can use Promises
        this.heroService.getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    // calls getHeroes in this file at the begining
    // because it is not recommended to do it in the constructor
    // constructor should not contain complex logic
    // it is just for simple initializations, like wiring constructor parameters to properties. 
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.scss'],
        providers: [hero_service_1.HeroService],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map