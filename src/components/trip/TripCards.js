import React, { useContext, useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import BasicModal from '../shared/Modal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import './../../style/TripCards.css'
import { useHttpClient } from './../../util/http-hook';
import { AuthContext } from "./../../util/auth-context";


const TripCards = (props) => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [cardButtons, setCardButtons] = useState((<Button></Button>));

    useEffect(() => {
        if (props.type === 'search') {
            setCardButtons(
                <div className='card_button_container'>
                    <Button size="small" color="success" variant="contained" onClick={handleSubmit}>
                        Apply
                    </Button>


                    <BasicModal
                        title={props.title}
                        description={props.description}
                    />
                </div>
            )
        }
        else if (props.type === 'groupMember') {
            setCardButtons(
                <div className='card_button_container'>
                    <NavLink to={`/groupPage/${props.id}`}>
                        <Button size="small" color="success" variant="outlined">
                            Enter
                        </Button>
                    </NavLink>
                    <Button size="small" color="error" variant="outlined" onClick={handleLeave}>
                        Leave
                    </Button>
                    {props.creator === auth.userId && <Button size="small" color="error" variant="outlined" onClick={handleDelete}>
                        Delete
                    </Button>}

                </div>
            )
        }
    });


    const handleLeave = async (event) => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                `group/leave/${props.id}`,
                'POST',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );
            // history.push('/profile');
            history.go(0);
            // history.reload();
        } catch (err) { }
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                `group/${props.id}`,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );
            // history.push('/profile');
            history.go(0);
            // history.reload();
        } catch (err) { }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                `group/join/${props.id}`,
                'POST',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );
            console.log("a intrat")
        } catch (err) { }
    };

    const startDate = new Date(props.startDate).toDateString();
    const endDate = new Date(props.endDate).toDateString();
    return <div>
        <Card xs={{ minWidth: 345 }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {(startDate)} - {endDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.location}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {cardButtons}
            </CardActions>
        </Card>
    </div >;
};

export default TripCards;
