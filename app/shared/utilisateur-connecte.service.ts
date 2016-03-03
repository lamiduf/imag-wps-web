import {Utilisateur} from './utilisateur'
import {Injectable} from 'angular2/core';


@Injectable()
export class UtilisateurConnecteService {
    
    getUtilisateurConnecte() : Utilisateur {
        return { nom : "Boufal",
                prenom : "Sofiane"}
    }    
}