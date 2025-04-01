'use client';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Spinner from './Spinner';

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });
  const center = useMemo(
    () => ({ lat: 50.422849791352576, lng: 30.35618054604056 }),
    []
  );
  if (!isLoaded) return <Spinner />;
  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="map-container rounded-md max-h-[50vh]"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
