System.register(['angular2/core', '/app/weather/weather.service.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_ts_1;
    var Weather, weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_ts_1_1) {
                weather_service_ts_1 = weather_service_ts_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(_weatherService) {
                    this._weatherService = _weatherService;
                    this.title = 'Weather';
                    this.weatherData = weather;
                }
                Weather = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        templateUrl: '/app/weather/weatherTemplate.html',
                        styleUrl: ['/app/weather/weather.css'],
                        providers: [weather_service_ts_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof weather_service_ts_1.WeatherService !== 'undefined' && weather_service_ts_1.WeatherService) === 'function' && _a) || Object])
                ], Weather);
                return Weather;
                var _a;
            })();
            exports_1("Weather", Weather);
            weather = {
                'current': 'test'
            };
            console.log(this.items);
        }
    }
});
//# sourceMappingURL=weather.js.map