function resolverN40() {

    var nota1 = document.getElementById("nt40_1").value;
    var nota2 = document.getElementById("nt40_2").value;
    var nota3 = document.getElementById("nt40_3").value;
    var nota4 = document.getElementById("nt40_4").value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota4 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt40_1").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10) && (nota4 <= 10)) {
            var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
            document.getElementById("nt40_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt40_2").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt40_3").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt40_4").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt40_1').disabled = true;
            document.getElementById('nt40_2').disabled = true;
            document.getElementById('nt40_3').disabled = true;
            document.getElementById('nt40_4').disabled = true;
        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt40_1").style.backgroundColor = "#F95858";
            document.getElementById("nt40_2").style.backgroundColor = "#F95858";
            document.getElementById("nt40_3").style.backgroundColor = "#F95858";
            document.getElementById("nt40_4").style.backgroundColor = "#F95858";
            document.getElementById("nt40_1").focus();
        }
    }
    /*

    if ((nota1 >= 1) && (nota1 <= 10)) {
        document.getElementById("nt4_1").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt4_1").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
        nota1 = 0;
    }

    if ((nota2 >= 1) && (nota2 <= 10)) {
        document.getElementById("nt4_2").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt4_2").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
        nota2 = 0;
    }

    if ((nota3 >= 1) && (nota3 <= 10)) {
        document.getElementById("nt40_3").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt40_3").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
        nota3 = 0;
    }

    if ((nota1 > 10) || (nota2 > 10) || (nota3 > 10)) {
        var total = 0;
        $('#txtNota').html(total.toFixed(2) + ' ');
    } else {
        var resp = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
        var total = resp / 3;
        $('#txtNota').html(total.toFixed(2) + ' ');
        
        document.getElementById('bt_comprobar').disabled = true;
        

    }*/

}