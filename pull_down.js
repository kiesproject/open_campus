$(function () {
    pulldown_tr = '#times .section_info table tbody tr'
    $(pulldown_tr + ' p').hide();     //ロード初期の詳細は非表示

    $(pulldown_tr).click(pulldown_content);
});

function pulldown_content() {
    if ($(this).find('.icon').attr('id') == 'selected') {
        $(this).find('.icon').attr('id', '').animate(
            {
                opacity: 1
            },
            {
                duration: 1000,
                step: function (now) {
                    $(this).css({transform: 'rotate(0deg)'});
                    console.log(now);
                }
             });
        $(this).find('p').hide(600);
    } else {
        $(this).find('.icon').attr('id', 'selected').animate(
            {
                opacity: 1
            },
            {
                duration: 1000,
                step: function (now) {
                    $(this).css({transform: 'rotate(90deg)'});
                    console.log(now);
                }
             });
        $(this).find('p').show(600);
    }
}