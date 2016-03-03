import {Component,  OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {AccueilCmp} from './accueil/accueil.component';
import {RecherchePatientCmp} from './patient/recherche-patient.component';
import {CreationPatientCmp} from './patient/creation-patient.component';
import {RapprochementPatientCmp} from './patient/rapprochement-patient.component';
import {TodoCmp} from './todo/todo.component';
import {UtilisateurConnecteService} from './shared/utilisateur-connecte.service';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'wps-app',
    templateUrl: 'app/wps.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        UtilisateurConnecteService
    ]
})
@RouteConfig([
  {
    path: '/accueil',
    name: 'Accueil',
    component: AccueilCmp,
    useAsDefault: true
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoCmp
  },
  {
    path: '/recherche-patient',
    name: 'RecherchePatient',
    component: RecherchePatientCmp
  },  
  {
    path: '/creation-patient',
    name: 'CreationPatient',
    component: CreationPatientCmp
  },  
  {
    path: '/rapprochement-patient',
    name: 'RapprochementPatient',
    component: RapprochementPatientCmp
  }
])  
export class WpsApp implements OnInit{
    
    utilisateur : any;
    
    constructor (
        private _utilisateurConnecteService: UtilisateurConnecteService) {}
    
    ngOnInit() {
        this.utilisateur = this._utilisateurConnecteService.getUtilisateurConnecte();
    }    
}