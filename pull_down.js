$(function(){
    pulldown_tr = '.section_info table tbody tr'
    console.log(pulldown_tr + ' .pulldown_content')
    $(pulldown_tr + ' .pulldown_content').hide();     //ロード初期の詳細は非表示

    $(pulldown_tr).click(show_content);
});

function show_content(){
    if($(this).find('.icon').attr('id') == 'selected'){
        $(this).find('.icon').attr('id','').animate(
            {
                opacity: 1
            },
            {
                duration: 1000,
                step: function (now){
                    $(this).css({transform: 'rotate(0deg)'});
                }
            }
        );
        $(this).find('.pulldown_content').hide(600);
    }else{
        $(this).find('.icon').attr('id','selected').animate(
            {
                opacity: 1
            },
            {
                duration: 1000,
                step: function (now){
                    $(this).css({transform: 'rotate(90deg)'});
                }
            }
        );
        $(this).find('.pulldown_content').show(600);
    }
}