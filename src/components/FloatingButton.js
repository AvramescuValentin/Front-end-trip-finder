import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import '../style/Style.css'

export default function FloatingButton() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <NavLink to='/newTrip'>
                <Fab id='floating__button' variant="extended" size="large" color="success" aria-label="add">
                    <AddIcon sx={{ mr: 1 }} />
                    New Trip
                </Fab>
            </NavLink>
        </Box >
    );
}
