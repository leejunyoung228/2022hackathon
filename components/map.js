import React, { useEffect, useState } from "react";
import data from "../constant/data";
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";
function MapPage() {
  const [opened, setOpened] = useState(false);
  const [tdata, setData] = useState(undefined);
  const fetchData = async () => {
    const result = await axios.get("/api/database");
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    let interval = setInterval(() => fetchData(), 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.14243585763422,
          lng: 128.91433704778765,
        }}
        style={{
          // 지도의 크기
          top: "40px",
          width: "90%",
          height: "600px",
          left: "5%",
        }}
        level={3} // 지도의 확대 레벨
      >
        {data.map((item, index) => {
          return (
            <MapMarker
              position={{ lat: item.X, lng: item.Y }}
              onClick={() => setOpened(true)}
              key={index}
            />
          );
        })}
      </Map>
      {tdata && opened && (
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 100,
            width: 300,
            height: 300,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 0 10px #000",
            zIndex: 9999,
            borderRadius: 15,
            padding: 30,
          }}
        >
          <button
            onClick={() => {
              setOpened(false);
            }}
            style={{
              float: "right",
            }}
          >
            X
          </button>
          <p>온도 : {tdata["temperature"]}C</p>
          <p>습도 : {tdata["humidity"]}%</p>
          <p>
            {Number(tdata["rain"]) > 2400
              ? "비가 오지 않습니다"
              : "비가 옵니다."}
          </p>
        </div>
      )}
    </div>
  );
}
export default MapPage;
