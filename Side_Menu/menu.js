$(function(){
    var menu_list = $(".menu_list > li");
    var body = $('body');
    $('#js_sideMenuBtn').on('click', function(){
        body.toggleClass('side-open');
        $(".side_menu").slideToggle();
        $('#js_overlay, .side_time').on('click', function(){
            body.removeClass('side-open');
            $('.side_menu').hide();
        });

    });
    //menu_listがクリックされた時の処理
    menu_list.click(function(){
        var menu = $(this).attr("href");
        var scroll_point = $(menu).offset();
        
        body.animate({
            scrollTop: scroll_point
        }, 300);
    });
    
    $('#menu_time, #menu_room, #menu_map').on('click', function(){
        body.removeClass('side-open');
        $('.side_menu').hide();
    });
});