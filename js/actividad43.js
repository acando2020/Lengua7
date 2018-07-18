var correctas ={
    0: ['A','B','O','F','E','T','E','A','R'],
}
var respcorrec = 0;


function VerificarC() {
  for (var i = 0; i <= 8; i++) {

        if ((correctas[0][i]) == ($('#A' + [i] + '').val())) {
            respcorrec = respcorrec + 1;
            $('#A' + [i] + '').css("backgroundColor", "#58FA58");
            $('#A' + [i] + '').prop( "disabled", true );
        }else{
             $('#A' + [i] + '').css("backgroundColor", "#FA5858");
             $('#A' + [i] + '').prop( "disabled", true );
        }

    }
    alert(respcorrec);
}