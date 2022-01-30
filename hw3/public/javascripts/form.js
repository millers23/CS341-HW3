function validateForm() {
    let x = document.forms["form"]["notes"].value;
    if (x.includes("vegan")) {
        alert("Cheesecake cannot be made vegan.");
        return false;
    }
    else {
        document.getElementById("form").style.display = none;
        document.getElementById("success").style.display = inline-block; 
    }
}

/*eventHandler = function( event ) {
     do stuff 
}

$(function() {
    $(".foo").click(eventHandler);
});*/