$(function(){
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
});