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
const yenipage = document.querySelector(".yeni-page");
const acilanhisse = document.querySelector(".acilanhisse");
const qapananhisse = document.querySelector(".qapananhisse");
yenipage.addEventListener("click", function() {
    acilanhisse.classList.add("show");
    acilanhisse.style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
});

acilanhisse.addEventListener("click", function(event) {
    let target = event.target;

    if (
        target.classList.contains("acilanhisse") ||
        target.classList.contains("qapananhisse")
    ) {
        acilanhisse.classList.remove("show");
        acilanhisse.style.display = "none";
        document.querySelector("body").style.overflowY = "";
    }
});