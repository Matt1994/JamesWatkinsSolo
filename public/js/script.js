toggleSideNav = function(){
    if($("#small_screen_nav").height() === 0) {
        $("#small_screen_nav").height(window.innerHeight - $("#navbar").height());
    } else {
        $("#small_screen_nav").height(0);
    }
}