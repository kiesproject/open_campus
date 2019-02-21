$(function(){
    $('.timetable tr:gt(0) ul').hide();     //ロード初期の詳細は非表示

    //マウスカーソルが重なると背景色をグレーに
    $('.timetable tr:gt(0) p')
        .mouseover(function(){
            $(this).css('background','grey');
        })
        .mouseout(function(){
            $(this).css('background','white');
        });
    
    //アイコン横の<p>要素のクリックで詳細を表示・非表示の切り替え
    $('.timetable tr:gt(0) p').click(function(){
        if($(this).prev().attr('id') == 'selected'){
            $(this).prev('.icon').attr('id','').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 0 + 'deg)' })
                }
            });
            $(this).next('ul').hide(600);
        }else{
            $(this).prev('.icon').attr('id','selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 90 + 'deg)' })
                }
            });
            $(this).next('ul').show(600);
        }
    });

    //アイコンクリックでも、詳細を表示・非表示の切り替え
    $('.timetable .icon').click(function(){
        if($(this).attr('id') == 'selected'){
            $(this).attr('id','').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 0 + 'deg)' })
                }
            });
            $(this).next().next('ul').hide(600);
        }else{
            $(this).attr('id','selected').animate( { opacity: 1 }, {
                duration: 1000,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now * 90 + 'deg)' })
                }
            });
            $(this).next().next('ul').show(600);
        }
    });
});