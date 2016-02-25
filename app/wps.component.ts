import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {AccueilCmp} from './accueil/accueil.component';

@Component({
    selector: 'wps-app',
    templateUrl: 'app/wps.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/accueil',
    name: 'Accueil',
    component: AccueilCmp,
    useAsDefault: true
  }
])  
export class WpsApp {
}