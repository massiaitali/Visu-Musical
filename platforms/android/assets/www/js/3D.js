/* Test avec button des update --- Utiliser les fonctions pour la version finale */

// $("#Aigu3D").click(function() {
// 	$("#3D-model").attr('src', 'img/aigu.gif');
// });
// $("#Basse3D").click(function() {
// 	$("#3D-model").attr('src', 'img/basse.gif');
// });


/* Fonction pour version finale */

function update_3D_danse (type) { // inserer une valeur entre 0 et 100 si différent penser a un traitement des données
	if (type == 1) { // Aigu 
		$("#3D-model").attr('src', 'img/aigu.gif');
	}
	if (type == 2) { // Basse
		$("#3D-model").attr('src', 'img/basse.gif');
	}
	if (type == 3) { // Basse
		$('#3D-model').attr('src', 'img/standard.gif');
	}
}