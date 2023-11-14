import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LoadingScreen from '../Loading/LoadingScreen.js';
import './MapboxMap.css';
import Navbar from '../SideBar/Navbar';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap() {
    const mapContainer = useRef(null); // Container for the map
    const map = useRef(null); // Reference to the Mapbox map instance
    const geolocateControlRef = useRef(null); // Reference to the GeolocateControl
    const [isMapLoading, setMapLoading] = useState(true); // State to track map loading

    useEffect(() => {
        if (map.current || !mapContainer.current) return; // Initialize map only once and if container is available

        map.current = new mapboxgl.Map({
            container: mapContainer.current, // Use the container reference
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-79.3871, 43.6426], // Default center
            zoom: 13 // Default zoom
        });

        geolocateControlRef.current = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });

        map.current.addControl(geolocateControlRef.current);

        map.current.on('load', () => {
            setMapLoading(false); // Set loading state to false when map is loaded
            geolocateControlRef.current.trigger();
        });

    }, []);

    return (
        <div>
            {/* Always render the container, but conditionally render its content */}
            <div className="map-container" ref={mapContainer} style={{ 
                width: '100vw',
                height: '100vh',
                }}
            />
            {isMapLoading && <LoadingScreen />}
            <Navbar />
        </div>
    );
}

export default MapboxMap;