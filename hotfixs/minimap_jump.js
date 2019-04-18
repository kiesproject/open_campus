$(function(){
    var minimap_link = '.section_info table a:contains("教室：")';
    $(minimap_link).click(link_show);
});

function link_show(){
    var obj_path = $(this).attr('href');
    var obj = $(obj_path);
    show_content(obj);
}