import {Component,  OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {AccueilCmp} from './accueil/accueil.component';
import {RecherchePatientCmp} from './patient/recherche/recherche-patient.component';
import {CreationPatientCmp} from './patient/creation/creation-patient.component';
import {RapprochementPatientCmp} from './patient/rapprochement/rapprochement-patient.component';
import {TodoCmp} from './todo/todo.component';
import {UtilisateurConnecteService} from './shared/utilisateur-connecte.service';
import {MenuService} from './shared/menu.service';
import {Utilisateur} from './shared/utilisateur';
import {HTTP_PROVIDERS}    from 'angular2/http';



@Component({
    selector: 'wps-app',
    templateUrl: 'app/wps.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        UtilisateurConnecteService,
        MenuService
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
    
    utilisateur : Utilisateur;
    anneeCopyright : number;
    menu : any;
    
    constructor (
        private _utilisateurConnecteService: UtilisateurConnecteService,
        private _menuService: MenuService) {}
    
    ngOnInit() {
        this.anneeCopyright = new Date().getFullYear();
        this.menu = this._menuService.getCurrentMenu();
        this.getUtilisateurConnecte();
    } 
    
    getUtilisateurConnecte() {
        this._utilisateurConnecteService.getUtilisateurConnecte().subscribe(utilisateur => this.utilisateur=utilisateur);
    }   
}