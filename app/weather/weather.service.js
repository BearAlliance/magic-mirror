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
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherService = (function () {
                function WeatherService() {
                }
                WeatherService.prototype.getItems = function () {
                    //return this.items;
                };
                WeatherService.prototype.getWeather = function () {
                    var apiKey = 'cc280c6ea8d1156eea264d547070843c';
                    var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q=5133268';
                    //http.get(weatherUrl)
                    //    .observe(function(response) {
                    //   console.log(response);
                    //});
                    return Promise.resolve('it works!');
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WeatherService);
                return WeatherService;
            })();
            exports_1("WeatherService", WeatherService);
        }
    }
});
//# sourceMappingURL=weather.service.js.map