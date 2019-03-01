var my_size = 17;//拡大サイズ
var my_latlng; //現在位置用の変数
var marker;

function initMap(){
    //geolocaion APIに対応している場合
    if(navigator.geolocation){
            //位置情報が取得できる場合
            //getXCurrentPosition 一度のみ現在位置を取得 watchPositionの場合は連続的に取得
            //navigator.geolocation.getCurrentPosition(
            navigator.geolocation.watchPosition(
                //true
                function(position){
                    //現在地の緯度経度
                    my_latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                    var mapOptions = {
                        zoom:my_size,
                        center:my_latlng
                    };
                    //mapに地図を埋め込む
                    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
                    //自分の位置のマーカーウィンドウ
                    var my_infowin = new google.maps.InfoWindow({content:"あなたの位置"});
                    //自分の位置のマーカー
                    var my_marker = new google.maps.Marker({
                        map:map,
                        position:my_latlng,
                        icon:"http://maps.google.com/mapfiles/ms/micons/man.png"
                    });
                    //mouseoverイベントを取得するListenerを追加
                    google.maps.event.addListener(my_marker,'mouseover',function(){
                        my_infowin.open(map,my_marker);    
                    });
                    //mouseoutイベントを取得するListenerを追加
                    google.maps.event.addListener(my_marker,'mouseout',function(){
                        my_infowin.close();    
                    })
                },
                //false
                function(error){
                    switch(error.code){
                        case 1:// PERMISSION_DENIED
                            alert("位置情報の利用が許可されていません");
                            break;
                        case 2: // POSITION_UNAVAILABLE
                            alert("現在位置が取得できませんでした");
                            break;
                        case 3: // TIMEOUT
                            alert("タイムアウトになりました");
                            break;
                        default:
                            alert("その他のエラー(エラーコード:"+error.code+")");
                        break;
                    }
                }
            );    
        }
        //APIが対応していない場合
        else{
            alert("この端末では位置情報が取得できません");   
        }
    }
    //selectが変更された場合の処理
    function selectchanged(){
        //号館の座標を登録しておくリスト
        var latlng = new Array(10);
        latlng[0] = new google.maps.LatLng(36.531498, 136.627418);//LC（デバッグ用）
        latlng[1] = new google.maps.LatLng(36.530042, 136.626846);//2号館
        latlng[2] = new google.maps.LatLng(36.530042, 136.626846);//3号館
        latlng[3] = new google.maps.LatLng(36.531802, 136.628244);//7号館
        latlng[4] = new google.maps.LatLng(36.530442, 136.629382);//8号館
        latlng[5] = new google.maps.LatLng(36.529946, 136.629155);//21号館
        latlng[6] = new google.maps.LatLng(36.531240, 136.629425);//23号館
        latlng[7] = new google.maps.LatLng(36.531603, 136.629389);//24号館
        latlng[8] = new google.maps.LatLng(36.530900, 136.629489);//チャレンジラボ
        latlng[9] = new google.maps.LatLng(36.532259, 136.631178);//夢工房
        //デバッグ用
        console.log("selectchanged");
        //selの値を取得
        var sl = document.getElementById("sel");
        //selの選択された番号を取得
        var value = document.map_selection.sel.selectedIndex;
        //mapに書き込み
        var map = new google.maps.Map(document.getElementById("map"),{
            zoom:my_size,
            center:latlng[value]
        });
        //マーカーの位置の設定
        marker = new google.maps.Marker({
            position:latlng[value],
            map:map
        });
        //現在地のマーカの表示
        marker = new google.maps.Marker({
            position:my_latlng,
            map:map,
            icon:"http://maps.google.com/mapfiles/ms/micons/man.png"
        });
    }
