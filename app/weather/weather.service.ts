import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class WeatherService {

    getItems() {
        //return this.items;
    }

    getWeather() {
        var apiKey = 'cc280c6ea8d1156eea264d547070843c';
        var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q=5133268';

        //http.get(weatherUrl)
        //    .observe(function(response) {
        //   console.log(response);
        //});
        return Promise.resolve('it works!');
    }

}