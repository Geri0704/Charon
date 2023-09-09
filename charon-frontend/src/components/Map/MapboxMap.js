import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxMap.css'

// Set your Mapbox API Token here
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap() {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState({
        latitude: 43.6426, // Default to CN Tower, Toronto
        longitude: -79.3871
    });

    useEffect(() => {
        // Fetch user's geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, error => {
                console.error("Error fetching geolocation:", error);
            });
        } else {
            console.warn("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        const initializeMap = ({ setMap, mapContainerRef }) => {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11', // This can be adjusted based on the data you have
                center: [userLocation.longitude, userLocation.latitude],
                zoom: 12
            });

            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainerRef });

        // Clean up on component unmount
        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [map, userLocation]);

    return <div ref={mapContainerRef} className="map-container" />;
}

export default MapboxMap;