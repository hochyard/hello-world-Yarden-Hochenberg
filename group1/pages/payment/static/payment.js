function payMesage(){
    var o1 = document.forms["frm"]["full-name"].value;
    var o2 = document.forms["frm"]["email"].value;
    var o3 = document.forms["frm"]["address"].value;
    var o4 = document.forms["frm"]["city"].value;
    var o5 = document.forms["frm"]["cardname"].value;
    var o6 = document.forms["frm"]["cardnumber"].value;
    var o7 = document.forms["frm"]["expmonth"].value;
    var o8 = document.forms["frm"]["expyear"].value;
    var o9 = document.forms["frm"]["cvv"].value;
    if (o1!="" && o2!="" && o3!="" && o4!="" && o5!="" && o6!="" && o7!="" && o8!="" && o9!="") {
        alert("תודה שרכשת אצלנו!") 
    }
}