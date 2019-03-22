$(function(){
    var menu_list = $("#menu_list > li");
    var body = $('body');
    $("#side_menu_btn").on('click', function(){
        body.toggleClass('side_open');
        $("#side_menu").slideToggle();
        $("#overlay").on('click', function(){
            body.removeClass('side_open');
            $('span').removeClass('menu_child');
            $("#side_menu").hide();
            $('.child').hide();
        });

    });
    //pull_down処理
    $('span').click(function(){
        if($(this).attr('class') == 'menu_child'){
            //メニュー非表示
            $(this).removeClass('menu_child').next('ul').slideUp('fast');
        } else {
            //メニュー表示
            $(this).addClass('menu_child').next('ul').slideDown('fast');
        }
    });
    $(".js_menu").on('click', function(){
        body.removeClass('side_open');
        $('span').removeClass('menu_child');
        $("#side_menu").hide();
        $('.child').hide();
    });
});