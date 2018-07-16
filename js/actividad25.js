var respr1 = 0,
    respr2 = 0;
function letras() {
    for (var i = 1; i <6; i++) {
        
        
        if ($('#' + [i] + ':checked').prop('checked') == true) {

          respr1 = respr1 + 1;

               
            } else{ 

            respr2 = respr2 + 1;

        }



    }
    var totales = respr1*2;
    $("#nt1_2").val(totales);
    
     /*var buenas = (1*10)/9;
    var resbuenas = buenas*respr1;
    var malas = (1*10)/20;
    var resmalas = malas * respr2;
    var total = resbuenas - resmalas;
    $('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;*/

    

}

function resolverN25() {
    letras();

    var nota1 = document.getElementById("nt1_1").value;
    var nota2 = document.getElementById("nt1_2").value;
    var nota3 = document.getElementById("nt1_3").value;
 if ((nota1 == "") || (nota2 == "") || (nota3 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt1_1").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)) {
            var total = (parseInt(nota1) + parseInt(nota2)+ parseInt(nota3))/3;
            document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_3").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt1_1').disabled = true;
            document.getElementById('nt1_2').disabled = true;
            document.getElementById('nt1_3').disabled = true;
        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt1_1").style.backgroundColor = "#F95858";
            document.getElementById("nt1_2").style.backgroundColor = "#F95858";
            document.getElementById("nt1_3").style.backgroundColor = "#F95858";
            document.getElementById("nt1_1").focus();
        }
    }
  

}