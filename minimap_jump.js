$(function(){
    var minimap_link = '.section_info table a:contains("教室：")';
    $(minimap_link).click(link_show);
});

function link_show(){
    var obj = $(this).attr('href');
    show_content(obj);
}