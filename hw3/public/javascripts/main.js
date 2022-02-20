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

let cherry = 11
let chocolate = 17
let plain = 31
//https://stackoverflow.com/questions/692196/post-request-javascript
function getMonth(month){
    if (month == 0) {

    }
    if (month == 1) {
        
    }
    if (month == 2) {
        
    }
    if (month == 3) {
        
    }
    if (month == 4) {
        
    }
    if (month == 5) {
        
    }
    if (month == 6) {
        
    }
    if (month == 7) {
        
    }
    if (month == 8) {
        
    }
    if (month == 9) {
        
    }
    if (month == 10) {
        
    }
    if (month == 11) {
        
    }
}
function getCherry(){
    return "Cherry: "+cherry;
}
function getChocolate(){
    return "Chocolate: "+chocolate;
}
function getPlain(){
    return "Plain: "+plain;
}

//https://metabox.io/send-get-post-request-with-javascript-fetch-api/
const params = {
    param1: cherryParam,
    param2: chocolateParam,
    param3: plain
};
const options = {
    method: 'POST',
    body: JSON.stringify( params )  
};
const response = post( url, params );
fetch( 'https://domain.com/path/', options )
    .then( response => response.json() )
    .then( response => {
        const temp = JSON.parse(params)
        cherry = temp[0]
        chocolate = temp[1]
        plain = temp[2]
} );
const request = ( url, params = {}, method = 'GET' ) => {
    let options = {
        method
    };
    
    options.body = JSON.stringify( params );
    return fetch( url, options ).then( response => response.json() );
};

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