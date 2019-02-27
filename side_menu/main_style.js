window.onload = function () {
    try {
        setInterval(dropBlossom, 1000);
    }
    catch (e) {
        console.log(e);
    }
}
function dropBlossom() {
    var browsWidth = window.innerWidth;
    var browsHeight = window.innerHeight;
    var blosFirstLeft = Math.random() * browsWidth - 100;
    var blosFallDist = Math.random() * browsHeight + 400;
    $('body')
        .prepend("<img class='blossom' " +
            "src='image/blossom100.png' " +
            "style='left:" + blosFirstLeft + "px;" +
            "top:-100px;'/>");
    $('.blossom:first')
        .animate(
            {
                left: blosFirstLeft + blosFallDist / 3 + 'px',
                top: blosFallDist + 'px',
                opacity: '0'
            },
            {
                duration: 10000,
                step: function (now) {
                    $(this)
                        .css({transform: 'rotate(' + (now * 360) + 'deg)'});
                },
                complete: function () {
                    this.remove();
                }
            });
}