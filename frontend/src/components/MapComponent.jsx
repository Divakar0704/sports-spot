// components/MapComponent.jsx
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '12px',
};

const center = {
  lat: 17.640257, // Example: my village
  lng:  83.120990,
};

export default function MapComponent({ location }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Store in .env
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location || center}
      zoom={14}
    >
      <Marker position={location || center} />
    </GoogleMap>
  );
}
