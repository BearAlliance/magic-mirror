import {Component, View} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: '/app/app.html',
    styleUrl: ['/css/custom.css'],
})

export class App {

    constructor(public http: Http) {

    }

}