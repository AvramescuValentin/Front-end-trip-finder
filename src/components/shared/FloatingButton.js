import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './../../style/Style.css'
import CustomizedDialog from './CustomizedDialog';

export default function FloatingButton(props) {
    const [floatingButton, setFloatingButton] = useState((<Box></Box>));

    useEffect(() => {
        switch (props.type) {
            case 'addTrip': {
                setFloatingButton(
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <NavLink to={props.path}>
                            <Fab id='floating__button' variant="extended" size="large" color="success" aria-label="add">
                                <AddIcon sx={{ mr: 1 }} />
                                New Trip
                            </Fab>
                        </NavLink>
                    </Box >)
                break;
            }
            case 'addPost': {
                setFloatingButton(
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab id='floating__button' variant="extended" size="large" color="success" aria-label="add">
                            <AddIcon sx={{ mr: 1 }} />
                            <CustomizedDialog type={'addPost'} />
                        </Fab>
                    </Box >)
                break;
            }
            default: {
                setFloatingButton(<Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab id='floating__button' variant="extended" size="large" color="success" aria-label="add">
                        <AddIcon sx={{ mr: 1 }} />
                        FloatingButton
                    </Fab>
                </Box >);
            }
        }
    })





    return (
        <div>
            {floatingButton}
        </div>
    );
}
