import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TripCards from '../../components/trip/TripCards';
import SearchBar from '../../components/trip/SearchBar';
import './../../style/Style.css'
import Copyright from '../../components/shared/Copyright';
import FloatingButton from '../../components/shared/FloatingButton';
import { ClassNames } from '@emotion/react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useHttpClient } from './../../util/http-hook';
import { AuthContext } from "../../util/auth-context";

const theme = createTheme();

export default function TripSearch() {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [groups, setGroups] = useState([]);

    React.useEffect(() => {
        const fetchGroups = async () => {
            try {
                const responseData = await sendRequest(
                    `group/newsFeed`,
                    'GET',
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setGroups(responseData.groups);
            } catch (err) { }
        };
        fetchGroups();
    }, [sendRequest]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}

                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid container spacing={3}>
                    {groups.map(card => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                <TripCards
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    startDate={card.tripDateStart}
                                    endDate={card.tripDateEnd}
                                    image={card.imageUrl}
                                    location={card.location}
                                    description={card.description}
                                    creator={card.creator}
                                    type={"search"}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                <FloatingButton
                    className='floating__button'
                    key={1}
                    type={"addTrip"}
                    path={"/newTrip"}
                />
            </Container>
        </ThemeProvider >
    );
}