$(function (){
    $("#burger-menu").click(function(){
        $("#navbar-link-wrapper").toggleClass("visible");
        $("#dimbg").toggleClass("show");
    });

    $("#dimbg").click(function(){
        $("#burger-menu").click();
    });
})