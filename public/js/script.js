toggleSideNav = function(){
    if($("#small_screen_nav").height() === 0) {
        $("#small_screen_nav").height("15em");
    } else {
        $("#small_screen_nav").height(0);
    }
}