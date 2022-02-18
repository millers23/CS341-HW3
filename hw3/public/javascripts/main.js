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

//https://stackoverflow.com/questions/692196/post-request-javascript
function getMonth( url, params, method ){

    params = params || {};
    method = method || "post";

    // function to remove the iframe
    var removeIframe = function( iframe ){
        iframe.parentElement.removeChild(iframe);
    };

    // make a iframe...
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';

    iframe.onload = function(){
        var iframeDoc = this.contentWindow.document;

        // Make a invisible form
        var form = iframeDoc.createElement('form');
        form.method = method;
        form.action = url;
        iframeDoc.body.appendChild(form);

        // pass the parameters
        for( var name in params ){
            var input = iframeDoc.createElement('input');
            input.type = 'hidden';
            input.numCherry = params[cherry];
            input.numChocolate = params[plain];
            input.numPlain = params[plain];
            form.appendChild(input);
        }

        form.submit();
        // remove the iframe
        setTimeout( function(){ 
            removeIframe(iframe);
        }, 500);
    };

    document.body.appendChild(iframe);
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