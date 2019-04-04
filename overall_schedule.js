$(function(){
    var overall_title = '#overall .section_title';
    var overall = '.overall_schedule .pulldown_content'
    $(overall_title).click(overall_pulldown);
    $(overall).hide();
});

function overall_pulldown(){
    //$(this).css('color','red');
    var overall_path = '.overall_schedule';
    var obj = $(overall_path);
    show_content(obj);
}