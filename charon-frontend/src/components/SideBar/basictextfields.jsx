import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {AddressAutofill, SearchBox} from '@mapbox/search-js-react';
import React, {useState} from "react";
import '../../style/sidebar.css'

export default function BasicTextFields() {
    const [startingPoint, setStartingPoint] = useState('');
    const [destination, setDestination] = useState('');

    const mapboxAccessToken = process.env.REACT_APP_MAPBOX_API_KEY;

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
        >
            <SearchBox accessToken={mapboxAccessToken}> </SearchBox>

            <SearchBox accessToken={mapboxAccessToken}> </SearchBox>
        </Box>
    );
}