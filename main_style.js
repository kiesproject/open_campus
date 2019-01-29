window.onload = function () {
    console.log("obj.onload");
    try {
        /*
         var blossoms = $('.blossom').;
         blossoms[0].style.top = '10px';
         blossoms[0].style.left = '100px';

         blossoms[1].style.top   = '50px';
         blossoms[1].style.left  = '10px';

         blossoms[2].style.top   = '40px';
         blossoms[2].style.right = '50px';

         blossoms[3].style.top   = '100px';
         blossoms[3].style.right = '200px';
         */
        setInterval(dropBlossom, 1000);
        dropBlossom();


    }
    catch (e) {
        console.log(e);
    }
}
function dropBlossom() {
    var browsWidth = window.innerWidth;
    var browsHeight = window.innerHeight;
    var blosFirstLeft = Math.random() * browsWidth - 100;
    var blosFallDist = Math.random() * 100 + 200;
    $('body')
        .prepend("<img class='blossom' " +
            "src='image/blossom100.png' " +
            "style='left:" + blosFirstLeft + "px;" +
            "top:-100px;'/>");
    $('.blossom:first')
        .animate({
                left: blosFirstLeft + blosFallDist / 3 + 'px',
                top: blosFallDist + 'px',
                opacity: '0'
            },
            {
                duration: 7500,
                step: function (now) {
                    $(this)
                        .css({transform: 'rotate(' + (now * 360) + 'deg)'});
                },
                complete: function () {
                    this.remove();
                }
            });
}