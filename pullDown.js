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
        if($(this).attr('class') == 'selected'){
            $(this).removeClass('selected');
            $(this).next('ul').hide(600);
        }else{
            $(this).addClass('selected');
            $(this).next('ul').show(600);
        }
    });
});