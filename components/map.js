import React, { useEffect, useState } from "react";
import data from "../constant/data";
import axios from "axios";
function Map() {
  const [tdata, setData] = useState({});
  const fatchData = async () => {
    const result = await axios.get("/api/database");
    setData(result.data);
  };
  useEffect(() => {
    fatchData().then(() => {
      if (kakao != null) {
        var container = document.getElementById("map");
        var options = {
          center: new kakao.maps.LatLng(35.14243585763422, 128.91433704778765),
          level: 6,
        };
        var map = new kakao.maps.Map(container, options);
        data.map(function (locate, i) {
          var markerPosition = new kakao.maps.LatLng(locate.X, locate.Y);
          var marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
          const a =
            `<h5>${locate.NAME}<h5/>` +
            `<p>온도 : ${JSON.stringify(tdata["temperature"])}</p>` +
            `<p>습도 :  ${JSON.stringify(tdata["humidity"])}%</p>` +
            `<p>${
              Number(tdata["rain"]) > 2400
                ? "비가 오지 않습니다."
                : "비가 옵니다."
            }</p>`;
          var iwContent = a,
            iwRemoveable = true;
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });
          kakao.maps.event.addListener(marker, "click", function () {
            fatchData().then(() => {
              infowindow.open(map, marker);
            });
          });
        });

        map.setZoomable(false);
      }
    });
  }, []);
  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
export default Map;
