import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex', // Use flexbox for layout
                flexDirection: 'column', // Stack children vertically
                alignItems: 'center', // Center-align items horizontally
                justifyContent: 'center', // Center-align items vertically
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Choose starting point..." variant="standard" />
            <TextField id="standard-basic" label="Choose destination" variant="standard" />
        </Box>
    );
}