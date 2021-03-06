import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Grid from '@mui/material/Grid';


export default function SearchBar() {
    return (
        <Grid item xs={12} sm={6}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', marginLeft: '-12px', padding: '0' }}
                elevation={6}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search your next trip"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
}
