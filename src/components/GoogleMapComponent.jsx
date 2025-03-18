import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const containerStyle = {
  width: "100%", // Full screen width
  height: "400px",
};

const center = {
  lat: 26.0039,
  lng: 79.4719,
};

const GoogleMapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (isLoaded && mapRef.current && !markerRef.current) {
      if (google.maps?.marker) {
        const { AdvancedMarkerElement } = google.maps.marker;

        markerRef.current = new AdvancedMarkerElement({
          position: center,
          map: mapRef.current,
          title: "My Location",
        });
      }
    }
  }, [isLoaded]);

  return (
    <div className="w-screen">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onLoad={(map) => (mapRef.current = map)}
        />
      )}
    </div>
  );
};

export default GoogleMapComponent;
