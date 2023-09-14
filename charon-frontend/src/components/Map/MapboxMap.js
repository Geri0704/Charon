import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxMap.css';
import Navbar from '../SideBar/Navbar';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [lng, lat, zoom]);

    return (
        <div>
            <div className="map-container" ref={mapContainer} />
            {/* Render the Navbar component on top of the map */}
            <Navbar /> 
        </div>
    );
}

export default MapboxMap;
