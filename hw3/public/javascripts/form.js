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

//https://stackoverflow.com/questions/37189306/javascript-bootstrap-dropdown-on-hover-open-all-menu-levels-of-submenu
$(document).ready(function() {
    $(".dropdown, .dropdown-active").hover(function() {
      $(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
});

/*eventHandler = function( event ) {
     do stuff 
}

$(function() {
    $(".foo").click(eventHandler);
});*/