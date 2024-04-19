import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

function RideOption({ serviceName, description,isShared, isComfort, selected, onSelect }) {
    return (
        <Card variant="outlined"     sx={{
            mb: 2,
            maxWidth: 345,
            border: selected ? 2 : 1,
            borderColor: selected ? 'blue' : 'grey.300',
            backgroundColor: selected ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: selected ? 'blur(8px)' : 'blur(100px)',
        }}>
            <CardActionArea onClick={() => onSelect(serviceName)}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isShared && <GroupIcon sx={{ mr: 1 }} />}
                            {isComfort && <StarIcon sx={{ mr: 1 }} />}
                            <Typography variant="h5" component="div">
                                {serviceName}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default function RideSelection() {
    const [selectedRide, setSelectedRide] = useState(null);

    const handleSelectRide = (serviceName) => {
        // If the same card is clicked, deselect it, otherwise select the new one
        setSelectedRide(selectedRide === serviceName ? null : serviceName);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Choose a ride
            </Typography>
            <Typography variant="h6" gutterBottom>
                Recommended
            </Typography>
            <RideOption
                serviceName="UberX"
                timeAway="2"
                description="Affordable, everyday rides"
                price="CA$16.35"
                isComfort={true}
                selected={selectedRide === 'UberX'}
                onSelect={handleSelectRide}
            />
            <RideOption
                serviceName="UberX Share"
                description="Shared ride"
                isShared={true}
                selected={selectedRide === 'UberX Share'}
                onSelect={handleSelectRide}
            />
            <Typography variant="h6" gutterBottom>
                Economy
            </Typography>
            <RideOption
                serviceName="UberXL"
                description="Affordable rides for groups up to 6"
                selected={selectedRide === 'UberXL'}
                onSelect={handleSelectRide}
            />
        </Box>
    );
}
