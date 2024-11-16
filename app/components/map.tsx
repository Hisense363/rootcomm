"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-70.9);
  const [lat] = useState(42.35);
  const [zoom] = useState(1.5);

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.on("style.load", () => {
        // Add source for country boundaries
        map.current?.addSource("countries", {
          type: "vector",
          url: "mapbox://mapbox.country-boundaries-v1",
        });

        map.current?.addLayer({
          id: "country-fills",
          type: "fill",
          source: "countries",
          "source-layer": "country_boundaries",
          paint: {
            "fill-color": [
              "match",
              ["get", "iso_3166_1_alpha_3"],
              "USA",
              "#CF6468", // All same color now
              "DEU",
              "#CF6468", // All same color now
              "CHN",
              "#CF6468", // All same color now
              "rgba(0, 0, 0, 0)", // Default color (no members)
            ],
            "fill-opacity": 0.7,
          },
          filter: ["in", "iso_3166_1_alpha_3", "USA", "DEU", "CHN"],
        });

        // Add borders
        map.current?.addLayer({
          id: "country-borders",
          type: "line",
          source: "countries",
          "source-layer": "country_boundaries",
          paint: {
            "line-color": "#fff",
            "line-width": 1,
          },
          filter: ["in", "iso_3166_1", "USA", "DEU", "CHN"],
        });
      });
    }
  }, [lng, lat, zoom]);

  return (
    <div>
      <div ref={mapContainer} className="h-[600px] w-full" />
    </div>
  );
}
