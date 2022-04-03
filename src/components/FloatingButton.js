import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import '../style/Style.css'

export default function FloatingButton() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab className='floating__button' size="small" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box >
    );
}
