window.onload = function () {
    try {
        setInterval(dropBlossom, 777);
    }
    catch (e) {
        console.log(e);
    }
}
function dropBlossom() {
    var fallenLeftDist = document.body.scrollWidth;
    var fallenDownDist = fallenLeftDist * 3;
    var fallenDuration = (fallenDownDist / 150) * 1000; //200[px]落下 毎に 1[s]

    //-fallenDownDist[px] ～ document.body.scrollWidth[px]までのランダムな値
    var firstTopOffset = Math.random()*(fallenDownDist + document.body.scrollHeight) - fallenDownDist;

    $('#blossom_area')
        .prepend(
            "<img class=\'blossom\' " +
            "src=\'image/blossom100.png\' " +
            "style=\'left:-50px\; top:" + firstTopOffset + "px\;\'/>");
    $('.blossom:first')
        .animate(
            {
                left: fallenLeftDist + 'px',
                top: (fallenDownDist + firstTopOffset) + 'px'
            },
            {
                duration: fallenDuration,
                easing: "linear",
                step: function (now) {
                    $(this).css({transform: 'rotate(' + (now) + 'deg)'});
                },
                complete: function () {
                    this.remove();
                }
            });
}