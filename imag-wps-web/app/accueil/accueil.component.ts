import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TuileCmp} from './tuile.component';
import {Tuile} from './tuile';

@Component({
  selector: 'accueil-cmp',
  templateUrl: 'app/accueil/accueil.component.html',
  directives: [ROUTER_DIRECTIVES,TuileCmp]
})
export class AccueilCmp {
    
    tuileEditerPatient : Tuile = {id:'accueilEditerPatientLink', texte:'Editer un patient', linkForRouter:['RecherchePatient'], icon:'fa-user'};
    tuileGererConsentement : Tuile = {id:'accueilConsentementPatientLink', texte:'Gérer le consentement d\'un patient', linkForRouter:['RecherchePatient'], icon:'fa-check-square-o'};
    tuileRapprocherPatient : Tuile = {id:'accueilRapprochemebtIdentitesLink', texte:'Rapprocher des identités patient', linkForRouter:['RapprochementPatient'], icon:'fa-link'};
    tuileListerExamens : Tuile = {id:'accueilListerExamensLink', texte:'Lister les examens d\'un patient', linkForRouter:['RecherchePatient'], icon:'fa-file-text'};
 
}