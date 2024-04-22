// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AddressAutofill } from '@mapbox/search-js-react';
import {useState} from "react";

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
            <TextField id="standard-basic" label="Choose starting point..." variant="standard" />
            <AddressAutofill accessToken={mapboxAccessToken}>
                <TextField
                    id="starting-point"
                    label="Choose starting point..."
                    variant="standard"
                    value={startingPoint}
                    onChange={(e) => setStartingPoint(e.target.value)}
                    autoComplete="shipping address-line1"
                />
            </AddressAutofill>
            <AddressAutofill accessToken={mapboxAccessToken}>
                <TextField
                    id="destination"
                    label="Choose destination"
                    variant="standard"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    autoComplete="shipping address-line1"
                />
            </AddressAutofill>
        </Box>
    );
}