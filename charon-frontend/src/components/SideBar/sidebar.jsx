import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BasicTextFields from "./basictextfields";
import Slider from '@mui/material/Slider';
import RideSelection from "./cards";
import CharonLogo from '../../assets/logo.png'
import {Button} from "@mui/material";
import {useState} from "react";

const drawerWidth = 310;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function PersistentDrawerLeft({initialCoordinates, setSliderValue}) {
    const [startingPointFlag, setStartingPointFlag] = useState(false);
    const [destinationFlag, setDestinationFlag] = useState(false);
    const [selectedRide, setSelectedRide] = useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const isButtonEnabled = startingPointFlag && destinationFlag && selectedRide != null;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box sx={{ position: 'absolute', top: 0, left: 20, zIndex: 1200 }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <ChevronRightIcon fontSize="large" style={{ color: 'Black', boxShadow: 'rgba(0, 0, 255, 0.2)' }} />
                </IconButton>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(100px)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <img src={CharonLogo} alt="Charon" style={{ width: '50%', height: 'auto' }} />
                    </Typography>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize="Large" /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider/>
                <BasicTextFields
                    initialCoordinates={initialCoordinates}
                    startingPointFlag={startingPointFlag}
                    setStartingPointFlag={setStartingPointFlag}
                    destinationFlag={destinationFlag}
                    setDestinationFlag={setDestinationFlag}
                />

                <Divider />
                <Box sx={{ p:2, mt: 2 ,
                    width: '30ch',
                    display: 'flex', // Use flexbox for layout
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'center', // Center-align items horizontally
                    justifyContent: 'center', // Center-align items vertically
                }}>
                    <Typography gutterBottom>Walking Distance (Km)</Typography>
                    <Slider
                        aria-label="Distance"
                        defaultValue={0.5}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        step={0.250}
                        marks
                        min={0.250}
                        max={2.5}
                    />
                </Box>

                <Divider />
                <RideSelection
                    selectedRide={selectedRide}
                    setSelectedRide={setSelectedRide}
                />

                <Button
                    className={!isButtonEnabled ? 'disabledCursor' : ''}
                    disabled={!isButtonEnabled}
                    variant="contained"
                >
                    Search
                </Button>


            </Drawer>
        </Box>
    );
}