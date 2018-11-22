$(function (){
    $("#burger-menu").click(function(){
        $("#navbar-link-wrapper").toggleClass("visible");
        $("#dimbg").toggleClass("visible");
    });

    $("#dimbg").click(function(){
        $("#burger-menu").click();
    });

    $(".navbar-link").click(function(){
        $("#navbar-link-wrapper").toggleClass("visible");
        $("#dimbg").toggleClass("visible");
    });
})