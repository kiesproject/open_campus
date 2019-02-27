$(function(){
    var menu_list = $(".menu_list > li");
    var body = $('body');
    $("#side_menu_btn").on('click', function(){
        body.toggleClass('side_open');
        $("#side_menu").slideToggle();
        $("#overlay").on('click', function(){
            body.removeClass('side_open');
            $("#side_menu").hide();
        });

    });
    //menu_listがクリックされた時の処理
    menu_list.click(function(){
        var scroll_point = $(this).innerHeight();
    });
    $("#menu_time, #menu_room, #menu_map").on('click', function(){
        body.removeClass('side_open');
        $("#side_menu").hide();
    });
});