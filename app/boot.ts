import {Component, View, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from '/node_modules/angular2/http';

import {bootstrap} from 'angular2/platform/browser';

//import {WeatherComponent} from './weather/weather.component.ts';
//import {WeatherService} from '/app/weather/weather.service.ts';
import {AppComponent} from '/app/app.component.ts';

//import {Http} from '/angular2/http';

//bootstrap(AppComponent, [Http]);

bootstrap(AppComponent [HTTP_PROVIDERS]);
//bootstrap(AppComponent);

