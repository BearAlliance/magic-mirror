import {bootstrap}    from 'angular2/platform/browser'
import {Weather} from './weather/weather.component.ts'
import {WeatherService} from '/app/weather/weather.service.ts'

bootstrap(
    App,
    Weather, [WeatherService]);

