import Box from '@mui/material/Box';
import {SearchBox} from '@mapbox/search-js-react';
import React, {useEffect, useState} from "react";
import '../../style/sidebar.css'
import { reverseLookup } from '../../services/mapService.js';

export default function BasicTextFields({initialCoordinates}) {
    const [startingAddress, setStartingAddress] = useState('');
    const [startingPointFlag, setStartingPointFlag] = useState(false);
    const [destination, setDestination] = useState('');
    const [destinationFlag, setDestinationFlag] = useState(false);
    const [startingCoordinates, setStartingCoordinates] = useState({longitude: null, latitude: null});

    const mapboxAccessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    useEffect( () => {
        const fetchStartingPoint = async () => {
            const result = await reverseLookup(initialCoordinates.longitude, initialCoordinates.latitude, mapboxAccessToken);
            setStartingAddress(result);
            setStartingCoordinates({ longitude: initialCoordinates.longitude, latitude: initialCoordinates.latitude });
            setStartingPointFlag(true);
        };

        fetchStartingPoint();
    }, []);

    const getOptions = () => {
        const options = {};
        if (startingPointFlag) {
            options.proximity = {
                lng: startingCoordinates.longitude,
                lat: startingCoordinates.latitude
            }
        }

        return options;
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
        >
            <SearchBox
                accessToken={mapboxAccessToken}
                placeholder="Starting Point"
                value={startingAddress}
                onChange={() => {
                    setStartingPointFlag(false);
                }}
                onRetrieve={(res) => {
                    const coords = res.features[0].properties.coordinates;
                    setStartingCoordinates({ longitude: coords.longitude, latitude: coords.latitude});
                    setStartingPointFlag(true);
                }}
            />

            <SearchBox
                accessToken={mapboxAccessToken}
                placeholder='Destination'
                value=''
                onChange={() => {
                    setDestinationFlag(false);
                }}
                onRetrieve={(res) => {
                    setDestinationFlag(true);
                    //TODO: Grab long and latitude or address from res depending how we plan to process
                }}
                options={getOptions()}
            />
        </Box>
    );
}