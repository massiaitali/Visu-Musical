// Gerer les animation diagramme et 3D ici avec les deux 
//fonctions update_data (valeur, type) pour le diagramme avec valeur du son et type = 1 si aigu et type = 2 si basse
// update_3D_danse (type) pour le model 3D avec type == 1 pour aigu et type == 2 pour basse

function debugblu(){
    count = $("#blu_count").val();
    if (count == 0) {
    $('#bluetooth-connect').show();
    $("#blu_count").val(1);
    }
    else {
    $('#bluetooth-connect').hide();
    $("#blu_count").val(0);
    }
}

function connect() {
id = $("#bluetooth-idendity").val();
bluetoothSerial.connectInsecure(id, connectSuccess, connectFailure);
}

bluetoothSerial.read(function (data) {
    alert(data);
    if (data == 255) { // Lancement de la recéption
        $("#bluetooth-mem").val(0);
    }

    valeur = $("#bluetooth-mem").val();
    
    if(valeur == 0) // basse
    {
    data = data / 255 * 100 ; 
    update_data(data, 2);
    update_3D_danse(2);
    $("#bluetooth-mem").val(1);
    }
    
    else if(valeur == 1) // aigu
    {
    data = ( data / 255 ) * 100 ; // On met une echelle de 0 a 100 donc il faut passer la valeur dans cette interval
    update_data(data, 1);
    update_3D_danse(1);
    }

}, failure);
