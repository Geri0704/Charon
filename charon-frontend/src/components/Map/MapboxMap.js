import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './MapboxMap.css';
import Navbar from '../SideBar/Navbar';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const geolocateControlRef = useRef(null); // Ref for the GeolocateControl

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [ -79.3871, 43.6426 ], // Default center
            zoom: 13                // Default zoom
        });

        geolocateControlRef.current = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });

        map.current.addControl(geolocateControlRef.current);

        // Trigger the GeolocateControl to get the user's location once the map has loaded
        map.current.on('load', () => {
            geolocateControlRef.current.trigger();
        });

    }, []);

    return (
        <div>
            <div className="map-container" ref={mapContainer} />
            <Navbar />
        </div>
    );
}

export default MapboxMap;
