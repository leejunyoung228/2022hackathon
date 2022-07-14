/*global kakao*/
import React, { useEffect } from 'react'
import data from '../constant/data'
function Map(){
    useEffect(()=>{
        if (kakao != null) {
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(35.14243585763422, 128.91433704778765),
              level: 6
            };
            var map = new kakao.maps.Map(container, options);
            data.map(function(locate, i){
              var markerPosition  = new kakao.maps.LatLng(locate.X, locate.Y);
              var marker = new kakao.maps.Marker({
                position: markerPosition
              });
              marker.setMap(map);
              const a = `<h4>${locate.NAME}<h4/>` + `<p>온도 : ${locate.TMP}</p>` + ` 습도 : ${locate.HUD}`
              var iwContent = a, iwRemoveable = true;
              var infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
              });
              kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });
            })
            
            map.setZoomable(false);
        }
      }, [])
      return (
          <div>
              <div id="map" style={{width:"500px", height:"400px"}}></div> 
          </div>
      )
  }
  export default Map;
  