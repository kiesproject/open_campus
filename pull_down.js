$(function () {
    pulldown_tr = '#times .section_info table tbody tr'
    $(pulldown_tr + ' p').hide();     //ロード初期の詳細は非表示

    //アイコン横の<p>要素のクリックで詳細を表示・非表示の切り替え
    $(pulldown_tr + ' span').click(pulldown_content_by_header);

    //アイコンクリックでも、詳細を表示・非表示の切り替え
    $(pulldown_tr + ' .icon').click(pulldown_content_by_icon);
});

function pulldown_content_by_header() {
    $
    if ($(this).prev().attr('id') == 'selected') {
        $(this).prev('.icon').attr('id', '').animate({opacity: 1}, {
            duration: 1000,
            step: function (now) {
                $(this).css({transform: 'rotate(' + now * 0 + 'deg)'})
            }
        });
        $(this).next('p').hide(600);
    } else {
        $(this).prev('.icon').attr('id', 'selected').animate({opacity: 1}, {
            duration: 1000,
            step: function (now) {
                $(this).css({transform: 'rotate(' + now * 90 + 'deg)'})
            }
        });
        $(this).next('p').show(600);
    }
}

function pulldown_content_by_icon() {
    if ($(this).attr('id') == 'selected') {
        $(this).attr('id', '').animate({opacity: 1}, {
            duration: 1000,
            step: function (now) {
                $(this).css({transform: 'rotate(' + now * 0 + 'deg)'})
            }
        });
        $(this).next().next('p').hide(600);
    } else {
        $(this).attr('id', 'selected').animate({opacity: 1}, {
            duration: 1000,
            step: function (now) {
                $(this).css({transform: 'rotate(' + now * 90 + 'deg)'})
            }
        });
        $(this).next().next('p').show(600);
    }
}