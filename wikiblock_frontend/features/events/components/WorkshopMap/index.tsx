import { MAP_BOX_ACCESS_TOKEN } from "@config/env";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

const WorkshopMap = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [viewport, setViewport] = useState({
    lat: 10.795393,
    lon: 106.722167,
    zoom: 14,
  });
  mapboxgl.accessToken = MAP_BOX_ACCESS_TOKEN;

  console.log(map.current);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v8",
      center: {
        lat: 10.795393,
        lon: 106.722167,
      }, // center map on Chad
      zoom: 14,
    });

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.on("click", (e) => {
        const {
          lngLat: { lat, lng },
        } = e;

        map.current?.flyTo({
          center: {
            lat,
            lng,
          },
        });
      });

      const marker = new mapboxgl.Marker({
        draggable: false,
        color: "#ff0000",
      })
        .setLngLat({
          lat: viewport.lat,
          lng: viewport.lon,
        })
        .addTo(map.current);
    }
  }, [viewport]);

  return (
    <div className="mt-[40px] w-full md:mt-[25px]">
      <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[39px] text-gray-900">
        Map
      </h3>
      <div
        className="w-full h-full min-w-[600px] min-h-[500px]"
        ref={mapContainer}
      ></div>
    </div>
  );
};

export default WorkshopMap;
