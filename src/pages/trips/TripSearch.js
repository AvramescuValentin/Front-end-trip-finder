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
    "date": "2022-02-10T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
},
{
    "id": 1,
    "title": "Paris",
    "date": "2022-02-10T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
},
{
    "id": 1,
    "title": "Paris",
    "date": "2022-02-10T05:20:52.155Z",
    "image": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTkl/MkYwNCUyRjA4JTJGMTA2MTYxOF8xMDYx/NjE4X3NodXR0ZXJzdG9ja183NzI3Njky/NjMuanBnJnc9NzgwJmg9NDQwJmhhc2g9/Y2ZkNzVlOTMzNGYwMTIyMGZlZGMxMjAzNDkzZGEwM2E=.thumb.jpg",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
}]

export default function TripSearch() {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <Grid container>
                    {mockData.map(item => {
                        return (
                            <h1>asda</h1>
                        )
                    })}
                </Grid>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}