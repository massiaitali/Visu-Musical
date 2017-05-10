/* Test avec button des update --- Utiliser les fonctions pour la version finale */

// $("#Aigu").click(function() {
//  	value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//  	$('#aigu-data').removeClass().addClass('p'+value);
// });
// $("#Basse").click(function() {
//  	value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//  	$('#basse-data').removeClass().addClass('type2 p'+value);
// });


/* Fonction pour version finale */

function update_data (valeur, type) { // inserer une valeur entre 0 et 100 si différent penser a un traitement des données
	if (type == 1) { // Aigu 
		$('#aigu-data').removeClass().addClass('p'+valeur);
	}
	if (type == 2) { // Basse
		$('#basse-data').removeClass().addClass('type2 p'+valeur);
	}
}