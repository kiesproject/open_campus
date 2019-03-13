$(function(){
    var minimap_link = '.section_info table a:contains("教室：")';
    $(minimap_link).click(link_pulldown);
});

function link_pulldown(){   //プルダウン処理
    var content = $(this).attr('href');
    
    if($(content).find('.icon').attr('id') == 'selected'){
        $(content).find('.icon').attr('id','').animate(
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
        $(content).find('.pulldown_content').hide(600);
    }else{
        $(content).find('.icon').attr('id','selected').animate(
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
        $(content).find('.pulldown_content').show(600);
    }
}