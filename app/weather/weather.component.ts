import {Component} from 'angular2/core';
//import {Http, Response, Headers} from 'angular2/http';
//import {Observable} from 'rxjs/Observable';
//import {Subject } from 'rxjs/Subject';

@Component({
    selector: 'weather',
    templateUrl: '/app/weather/weatherTemplate.html',
    styleUrl: ['/app/weather/weather.css'],
})

export class WeatherComponent {
    public title = 'Weather';
    public data = weatherData;
    //http: Http;

    //constructor(http: Http) {
    //    this.http = http;

        //this.getWeather();
    //}

    //getWeather() {
    //    this.weather = {};
    //    this.http.get('http://httpbin.org/ip')
    //        .map((res: Response) => res.json())
    //        .subscribe(res => this.weather = res);
    //}
}
console.log('weather initialized');

var weatherData = {
    'current': 'test'
};