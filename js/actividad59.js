var pr1 = 0,
    pr2 = 0,
    pr3 = 0,
    pr4 = 0,
    pr5 = 0;

function calicar() {

    if ($("#opr1").is(":checked") == true) {
        pr1 = 2;

    } else if ($("#opr2").is(":checked") == true)  {
        pr1 = 1.5;

    }else{
        pr1 = 1;
    }

    if ($("#opra1").is(":checked") == true) {
        pr2 = 2;

    } else if ($("#opra2").is(":checked") == true)  {
        pr2 = 1.5;

    }else{
        pr2 = 1;
    }

     if ($("#oprad1").is(":checked") == true) {
        pr3 = 2;

    } else if ($("#oprad2").is(":checked") == true)  {
        pr3 = 1.5;

    }else{
        pr3 = 1;
    }

      if ($("#opradi1").is(":checked") == true) {
        pr4 = 2;

    } else if ($("#opradi2").is(":checked") == true)  {
        pr4 = 1.5;

    }else{
        pr4 = 1;
    }
     if ($("#opradio1").is(":checked") == true) {
        pr5 = 2;

    } else if ($("#opradio2").is(":checked") == true)  {
        pr5 = 1.5;

    }else{
        pr5 = 1;
    }
    var total = parseFloat(pr1)+parseFloat(pr2)+parseFloat(pr3)+parseFloat(pr4)+parseFloat(pr5);
    $('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
}
