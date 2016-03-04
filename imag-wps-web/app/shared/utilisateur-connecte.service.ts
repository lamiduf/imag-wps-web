import {Utilisateur} from './utilisateur'
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UtilisateurConnecteService {
    constructor (private http: Http) {}
    
    // private _url = 'test/user.json';
    private _url ='http://localhost:9000/utilisateurconnecte';
    
      getUtilisateurConnecte() {
        return this.http.get(this._url)
                    .map(res => <Utilisateur> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
    }
  
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
}