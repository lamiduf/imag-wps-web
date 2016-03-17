import {Injectable} from 'angular2/core';

@Injectable()
export class MenuService {

    menu : any = { items : [ 
        { id : "menuPatient" , type : "menu" , texte: "Patient", items : [
            { id : "linkRechercherPatient" , isLink : true, texte: "Rechercher un patient", routeurLink : "RecherchePatient" },
            { id : "linkCreationPatient" , isLink : true, texte: "Créer un patient", routeurLink : "CreationPatient" },
            { id : "sousMenuPatientConsentement" , isLink : false , texte:"Recueillir le consentement du patient", items : [
                 { id : "linkConsentement" , isLink : true, texte: "Consentement", routeurLink : "RecherchePatient" },
                 { id : "linkAccesBloques" , isLink : true, texte: "Accès bloqués", routeurLink : "RecherchePatient" }
            ]},
            { id : "linkRapprochementPatient" , isLink : true, texte: "Rapprochement d'identités patient", routeurLink : "RapprochementPatient" }
        ]},
        { id : "menuPartage" , type : "menu" , texte: "Partage", items : [
            { id : "linkConsulterDemandesSecondAvis" , isLink : true, texte: "Consulter les demandes de second avis", routeurLink : "Todo" },
            { id : "linkConsulterDemandesTransfert" , isLink : true, texte: "Consulter mes demandes de transfert", routeurLink : "Todo" },
            { id : "linkRechercherExamensPatient" , isLink : true, texte: "Rechercher les examens d'un patient", routeurLink : "Todo" },
            { id : "linkRechercherExamenParIdentifiant" , isLink : true, texte: "Rechercher un examen par identifiant", routeurLink : "Todo" },
            { id : "linkSoumettreDemandeSecondAvis" , isLink : true, texte: "Soumettre une demande de second avis", routeurLink : "Todo" }
        ]},
        { id : "menuAnnuaire" , type : "menu" , texte: "Annuaire", items : [
            { id : "sousMenuAnnuaireEtablissement" , isLink : false , texte:"Etablissements", items : [
                 { id : "linkConsulterEtablissement" , isLink : true, texte: "Consulter un établissement", routeurLink : "Todo" },
                 { id : "linkAccordsEtablissement" , isLink : true, texte: "Définir les accords d'un établissement", routeurLink : "Todo" }
            ]},
            { id : "sousMenuAnnuaireUtilisateurs" , isLink : false , texte:"Utilisateurs", items : [
                 { id : "linkRechercherUtilisateur" , isLink : true, texte: "Rechercher un utilisateur", routeurLink : "Todo" },
                 { id : "linkCréerUtilisateur" , isLink : true, texte: "Créer un utilisateur", routeurLink : "Todo" }
            ]},
            { id : "sousMenuAnnuaireHabilitations" , isLink : false , texte:"Habilitations", items : [
                 { id : "linkConsulterProfil" , isLink : true, texte: "Consulter un profil", routeurLink : "Todo" },
            ]}
        ]}        

    ]     
    };
    
    getCurrentMenu() {
        return this.menu;
    }
}