function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(document).ready(function() {

    $(window).scroll(function() {
        var navbar = $('header nav '),
            navHeight = navbar.height(),
            scrollPos = $(this).scrollTop();

        if (scrollPos > navHeight) {
            navbar.addClass('fixed');
            $('header').css('padding-top', navHeight + 'px')
        } else {
            navbar.removeClass('fixed');
            $('header').css('padding-top', '0')
        }

    })



})