$(function(){
    pulldown_tr = '.section_info table tbody tr';
    $(pulldown_tr + ' .pulldown_content').hide();
    $(pulldown_tr).click(pulldown);
});

function pulldown(){
    var obj = $(this);
    show_content(obj)
}

function show_content(content){
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