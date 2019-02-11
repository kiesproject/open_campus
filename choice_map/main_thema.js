var  map;
var marke;
var center
var center = {
    lat: 36.530442,
    lat: 136.629382
};
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center:center,
        zoom:19
    });
    marker = new google.maps.Marker({
        position:center,
        map:map
    });
}


$('#area').change(function(){
        var buildings = $('option:selected').val();
    })
