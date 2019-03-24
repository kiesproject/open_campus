window.onload = function () {
    try {
        setInterval(dropBlossom, 700);
    }
    catch (e) {
        console.log(e);
    }
}
function dropBlossom() {
    var fallen_right_dist = document.body.scrollWidth;
    var fallen_down_dist = fallen_right_dist * 3;
    var fallen_duration = (fallen_down_dist / 150) * 1000; //落ちる時間＝150px毎に1000[ms]
    //-fallen_down_dist[px]～document.body.scrollWidht[px]までのランダムな値
    var first_top_offset = Math.random()*(fallen_down_dist + document.body.scrollHeight) - fallen_down_dist;


    $('#blossom_area')
        .prepend("<img class='blossom' " +
            "src='image/blossom100.png' " +
            "style='" +
            "left:-100px;" +
            "top :" + first_top_offset + "px;" +
            "'/>");
    $('.blossom:first')
        .animate(
            {
                left: fallen_right_dist + 'px',
                top: (fallen_down_dist + first_top_offset) + 'px',
            },
            {
                duration: fallen_duration,
                easing: "linear",
                step: function (now) {
                    $(this)
                        .css({transform: 'rotate(' + now + 'deg)'});
                },
                complete: function () {
                    this.remove();
                }
            });
}