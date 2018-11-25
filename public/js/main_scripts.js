$(function (){
    $(".burger-menu").click(function(){
        $(".navbar-link-wrapper").toggleClass("visible");
    });

    $(".navbar-link").click(function(){
        $(".burger-menu").click();
    });
})