var resp1 =0 , resp2 = 0;
function SignoComas() {

    for (var i = 0; i < 3; i++) {
        var versig = $('#'+[i]+'').val();
        if (versig == ($("#1").val()==",") ) {
            alert("bien");
            /*if ($("#1").val()==",") {
                resp1 = 10;
            }*/
            
        }else{
            alert("mal");
        }
        
    }
    /*if (($("#1").val()==",")||($("#3").val()==",")) {
        resp1 = resp1 +1;


    }else{
        resp2 = resp2 +1;

    }
    alert(resp1);
    alert(resp2);*/
    

}