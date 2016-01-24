System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var WeatherComponent, weatherData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Http, HTTP_PROVIDERS} from 'angular2/http';
            //import {WeatherService} from '/app/weather/weather.service.ts'
            //import {OnInit} from 'angular2/core';
            WeatherComponent = (function () {
                function WeatherComponent() {
                    this.title = 'Weather';
                    this.data = weatherData;
                }
                //public getWeather = getWeather();
                //
                //constructor(http: Http) {
                //    //var apiKey = 'cc280c6ea8d1156eea264d547070843c';
                //    var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q=5133268';
                //    // our http call here
                //    // make the call
                //    http.get('api.openweathermap.org/data/2.5/weather?q=5133268')
                //        // initial transform - result to json
                //        //.map( (responseData) => {
                //        //    console.log(responseData);
                //        //})
                //        // subscribe to output from this observable and bind
                //        // the output to the component when received
                //        .subscribe( res => {
                //            console.log(res);
                //        });
                //
                //}
                WeatherComponent.prototype.getWeather = function () {
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        templateUrl: '/app/weather/weatherTemplate.html',
                        styleUrl: ['/app/weather/weather.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherComponent);
                return WeatherComponent;
            })();
            exports_1("WeatherComponent", WeatherComponent);
            console.log('weather initialized');
            weatherData = {
                'current': 'test'
            };
        }
    }
});
//# sourceMappingURL=weather.component.js.map