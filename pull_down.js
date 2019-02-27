$(function(){
    pulldouwn_tr = '#times .section_info table tbody tr'
    pulldouwn_img = '#class_room .section_info table tbody tr'

    $(pulldouwn_tr + ' p').hide();     //ロード初期の詳細は非表示
    //$(pulldouwn_img + ' img').hide();     //ロード初期の詳細は非表示

    $(pulldouwn_tr).click(pulldouwn_content);
});

function pulldouwn_content(){
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
        $(this).find('p').hide(600);
        // $(this).find('img').hide(600);
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
        $(this).find('p').show(600);
        // $(this).find('img').hide(600);
    }
}