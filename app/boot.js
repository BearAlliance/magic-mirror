System.register(['/node_modules/angular2/http', 'angular2/platform/browser', '/app/app.component.ts'], function(exports_1) {
    var http_1, browser_1, app_component_ts_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            //import {Http} from '/angular2/http';
            //bootstrap(AppComponent, [Http]);
            browser_1.bootstrap(app_component_ts_1.AppComponent[http_1.HTTP_PROVIDERS]);
        }
    }
});
//bootstrap(AppComponent);
//# sourceMappingURL=boot.js.map