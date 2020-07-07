$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {        // If page is scrolled more than 100px
            $('.scrollup').fadeIn();    // Fade in the arrow
        } else {
            $('.scrollup').fadeOut();   // Else fade out the arrow
        }
    });

    $('.scrollup').click(function() {      // When arrow is clicked
        $('html, body').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1000);
        return false;
    });

}); // ready() END