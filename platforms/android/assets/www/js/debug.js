function debug(){
    count = $("#debug_count").val();
    if (count == 0) {
    $('#dev_dia').show();
    $('#dev_3D').show();
    $("#debug_count").val(1);
    }
    else {
    $('#dev_dia').hide();
    $('#dev_3D').hide();
    $("#debug_count").val(0);
    }
}
function test_dia(){
    choix = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if(choix <= 50) // aigu
    {
        update_data(Math.floor(Math.random() * (100 - 1 + 1)) + 1, 1);
    }
    else // basse 
    {
        update_data(Math.floor(Math.random() * (100 - 1 + 1)) + 1, 2);
    }
    setTimeout('test_dia()',500);
}
function test_3D(){
    choix = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if(choix <= 50) // aigu
    {
        update_3D_danse(1);
    }
    else // basse 
    {
        update_3D_danse(2);
    }
    setTimeout('test_3D()',500);
}
