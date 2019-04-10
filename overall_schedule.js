$(function(){
    var overall_title = '#overall .section_title';
    var overall = overall_title + ' .pulldown_content';
    
    $(overall).hide();
    $(overall_title).click(overall_pulldown);
});

function overall_pulldown(){
    var obj = $(this);
    show_content(obj);
}