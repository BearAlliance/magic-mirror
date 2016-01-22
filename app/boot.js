System.register(['angular2/platform/browser', './weather/weather.component.ts', '/app/weather/weather.service.ts'], function(exports_1) {
    var browser_1, weather_component_ts_1, weather_service_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (weather_component_ts_1_1) {
                weather_component_ts_1 = weather_component_ts_1_1;
            },
            function (weather_service_ts_1_1) {
                weather_service_ts_1 = weather_service_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(weather_component_ts_1.Weather, [weather_service_ts_1.WeatherService]);
        }
    }
});
//# sourceMappingURL=boot.js.map