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
import CharonLogo from '../assets/logo.png'

const drawerWidth = 310;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
function valuetext(value) {
    return `${value} km`;
}
export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
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
                        <img src={CharonLogo} alt="Charon" style={{ height: 'auto', maxWidth: '80%',  }} />
                    </Typography>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize="Large" /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider/>
                <BasicTextFields/>

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
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={0.250}
                        marks
                        min={0.250}
                        max={2.5}
                    />
                </Box>

                <Divider />
                <RideSelection/>
            </Drawer>
        </Box>
    );
}