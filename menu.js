$(function(){
    var menu_list = $(".menu_list > li");
    var $body = $('body');
    $('#js_sideMenuBtn').on('click', function(){
        $body.toggleClass('side-open');
        $(".side_menu").slideToggle();
        $('#js_overlay').on('click', function(){
            $body.removeClass('side-open');
            //$(".side_menu").slideToggle();
            $('.side_menu').hide();
        });
    });
    $(".side").mouseover();
    //menu_listがクリックされた時の処理
    menu_list.click(function(){
        var menu = $(li).attr("href");
        var scroll_point = $(menu).offset().top;
        
        body.animate({
            scrollTop: scroll_point
        }, 300);
    });
});