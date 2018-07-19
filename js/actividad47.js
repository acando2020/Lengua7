function resolverN47() {

    var nota1 = document.getElementById("nt47_1").value;
    var nota2 = document.getElementById("nt47_2").value;
    var nota3 = document.getElementById("nt47_3").value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt47_1").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)) {
            var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
            document.getElementById("nt47_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt47_2").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt47_3").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt47_1').disabled = true;
            document.getElementById('nt47_2').disabled = true;
            document.getElementById('nt47_3').disabled = true;

        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt47_1").style.backgroundColor = "#F95858";
            document.getElementById("nt47_2").style.backgroundColor = "#F95858";
            document.getElementById("nt47_3").style.backgroundColor = "#F95858";
            document.getElementById("nt47_1").focus();
        }
    }
}
