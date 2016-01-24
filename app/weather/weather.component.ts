import {Component} from 'angular2/core';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import {WeatherService} from '/app/weather/weather.service.ts'
//import {OnInit} from 'angular2/core';

@Component({
    selector: 'weather',
    templateUrl: '/app/weather/weatherTemplate.html',
    styleUrl: ['/app/weather/weather.css'],
    //providers: [WeatherService]
})
export class WeatherComponent {
    public title = 'Weather';
    public data = weatherData;
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

    getWeather() {
        
    }
}
console.log('weather initialized');

var weatherData = {
    'current': 'test'
};