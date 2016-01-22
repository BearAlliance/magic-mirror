import {Component} from 'angular2/core';
import {WeatherService} from '/app/weather/weather.service.ts'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'weather',
    templateUrl: '/app/weather/weatherTemplate.html',
    styleUrl: ['/app/weather/weather.css'],
    providers: [WeatherService]
})
export class Weather implements OnInit {
    public title = 'Weather';
    public weatherData = weather;

    constructor(private _weatherService: WeatherService) { }

    ngOnInit() {
        this._weatherService.getWeather()
            .then(function(result) {
                console.log(result);
            });
    }


}
var weather = {
    'current': 'test'
};