function verificarLetras() {
    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    var resp1 = 0, resp2 = 0, total = 0; 

    if ((txt1 == "") || (txt2 == "")) {
        alert("Debes completar los campos vacios");
        document.getElementById("txt1").focus();
    } else {
        if (txt1 == "El libro comprado en esta librería") {
            document.getElementById("txt1").style.backgroundColor = "#6DFF6F";
            resp1 = 5;

        } else {
            document.getElementById("txt1").style.backgroundColor = "#F95858";

        }
        if (txt2 == "tiene muchas imágenes.") {
            document.getElementById("txt2").style.backgroundColor = "#6DFF6F";
            resp2 = 5;
        } else {
            document.getElementById("txt2").style.backgroundColor = "#F95858";

        }
        total = parseInt(resp1) + parseInt(resp2);
        $("#nt1_1").val(parseInt(total));
    //document.getElementById('nt1_1').disabled = true;
        

    }
}

function resolverN31() {
	verificarLetras();
    var nota1 = document.getElementById("nt1_1").value;
    var nota2 = document.getElementById("nt1_2").value;
    var nota3 = document.getElementById("nt1_3").value;


  
    if ((nota1 == "") || (nota2 == "") || (nota3 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt1_2").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)) {
            var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota2))/3;
            document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
             document.getElementById("nt1_3").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt1_1').disabled = true;
            document.getElementById('nt1_2').disabled = true;
        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt1_2").style.backgroundColor = "#F95858";
            document.getElementById("nt1_3").style.backgroundColor = "#F95858";
            document.getElementById("nt1_2").focus();
            $('#nt1_2').val('');
            $('#nt1_3').val('');
        }
    }


}