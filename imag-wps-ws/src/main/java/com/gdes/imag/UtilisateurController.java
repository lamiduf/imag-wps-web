package com.gdes.imag;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UtilisateurController {

	@CrossOrigin
	@RequestMapping("/utilisateurconnecte")
	public Utilisateur getUtilisateurConnecte() {
		return new Utilisateur("Enyama","Vincent");
	}
	
}
