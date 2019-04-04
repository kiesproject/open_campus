$(function(){
    var overall_title = '#overall .section_title';
    var overall = '.overall_schedule .pulldown_content'
    $(overall_title).click(overall_pulldown);
    // $(overall).hide();
});

function overall_pulldown(){
    var obj_path = '.overall_schdule';
    var obj = $(obj_path);
    show_content(obj);
}