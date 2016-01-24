import {Component, View} from 'angular2/core';
import {WeatherComponent} from '/app/weather/weather.component.ts';
//import {Http, Headers} from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    styleUrl: ['/css/app.css'],
    directives: [WeatherComponent]
})

export class AppComponent {
    public title = 'app'
}