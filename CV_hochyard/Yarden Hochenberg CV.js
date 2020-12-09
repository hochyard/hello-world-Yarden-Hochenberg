
function openningFunction() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// form thank you
function thankyouFunction(){
    var o = document.forms["frm"]["Phone Number"].value;
    if (o!="") {
       alert("Thank you for trying to contact me! I will get back to you soon. Yarden") 
       closeForm()
    }
       
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
document.getElementById("myForm").style.display = "none";
}

