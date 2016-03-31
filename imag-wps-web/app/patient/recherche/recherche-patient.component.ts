import {Component} from 'angular2/core';
import {RecherchePatientParTraitsFormCmp} from './recherche-patient-par-traits-form.component';
import {RecherchePatientParIppFormCmp} from './recherche-patient-par-ipp-form.component';
import {RecherchePatientResultatsCmp} from './recherche-patient-resultats.component';

@Component({
  selector: 'recherche-patient-cmp',
  templateUrl: 'app/patient/recherche/recherche-patient.component.html',
  directives: [RecherchePatientParTraitsFormCmp,RecherchePatientParIppFormCmp,RecherchePatientResultatsCmp]
})
export class RecherchePatientCmp {
}