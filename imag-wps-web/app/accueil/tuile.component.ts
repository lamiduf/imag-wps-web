import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Input} from 'angular2/core';
import {Tuile} from './tuile';

@Component({
  selector: 'tuile-cmp',
  templateUrl: 'app/accueil/tuile.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class TuileCmp {
   
    @Input() tuile : Tuile;
}