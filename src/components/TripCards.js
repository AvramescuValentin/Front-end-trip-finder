import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import BasicModal from './Modal';

import './../style/TripCards.css'

const TripCards = (props) => {
    const startDate = new Date(props.startDate).toDateString();
    const endDate = new Date(props.endDate).toDateString();
    return <div>
        <Card xs={{ minWidth: 345 }}>
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
                <div className='card_button_container'>
                    <Button size="small" color="success" variant="contained">
                        Apply
                    </Button>
                    <BasicModal
                        title={props.title}
                        description={props.description}
                    />
                </div>
            </CardActions>
        </Card>
    </div >;
};

export default TripCards;
