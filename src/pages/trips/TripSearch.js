import * as React from 'react';
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
import TripCards from '../../components/TripCards';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const mockData = [{
    "id": 1,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 2,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 3,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 4,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 5,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 6,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
},
{
    "id": 7,
    "title": "Paris",
    "startDate": "2022-02-10T05:20:52.155Z",
    "endDate": "2022-02-17T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "location": "France, Paris",
    "description": "Aici avem o descriere basic sa vedem cum merg lucrurile idk."
}]

export default function TripSearch() {

    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <Grid container spacing={3}>
                    {mockData.map(card => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                <TripCards
                                    key={card.id}
                                    title={card.title}
                                    startDate={card.startDate}
                                    endDate={card.endDate}
                                    image={card.image}
                                    location={card.location}
                                    description={card.description}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}