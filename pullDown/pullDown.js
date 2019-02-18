$(function(){
    $('.timetable tr:gt(0) ul').hide();     //ロード初期の詳細は非表示

    //マウスカーソルが重なると背景色をグレーに
    $('.timeTable tr:gt(0) p')
        .mouseover(function(){
            $(this).css('background','grey');
        })
        .mouseout(function(){
            $(this).css('background','white');
        });
    
    //アイコン横の<p>要素のクリックで詳細を表示・非表示の切り替え
    $('.timetable tr:gt(0) p').click(function(){
        if($(this).prev().attr('class') == 'selected'){
            $(this).prev('#icon').removeClass('selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 0 + 'deg)' })
                }
            });
            $(this).next('ul').hide(600);
        }else{
            $(this).prev('#icon').addClass('selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 90 + 'deg)' })
                }
            });
            $(this).next('ul').show(600);
        }
    });

    //アイコンクリックでも、詳細を表示・非表示の切り替え
    $('.timetable #icon').click(function(){
        if($(this).attr('class') == 'selected'){
            $(this).removeClass('selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 0 + 'deg)' })
                }
            });
            $(this).next().next('ul').hide(600);
        }else{
            $(this).addClass('selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 90 + 'deg)' })
                }
            });
            $(this).next().next('ul').show(600);
        }
    });
});