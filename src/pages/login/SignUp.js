import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DateAdapter from '@mui/lab/AdapterMoment';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeRequest } from '../../util/requests';

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

export default function SignUp() {

    const [valueTime, setValueTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [valueGender, setValueGender] = React.useState(0);

    const handleChangeTime = (newValue) => {
        setValueTime(newValue);
    };

    const handleChangeGender = (event) => {
        setValueGender(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const registrationData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            username: data.get('username'),
            email: data.get('email'),
            phone: data.get('phone'),
            location: {
                location: data.get('city'),
                country: data.get('country')
            },
            password: data.get('password'),
            gender: data.get('gender'),
            dateOfBirth: valueTime
        }
        const result = await makeRequest('POST', 'http://localhost:5000/api/user/signup', registrationData);
        console.log(result);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    name="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="city"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    name="country"
                                    autoComplete="country"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={valueGender}
                                        label="Gender"
                                        onChange={handleChangeGender}
                                    >
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                        <MenuItem value={'not specified'}>Not specify</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={DateAdapter}>
                                    <MobileDatePicker
                                        name="dateOfBirth"
                                        label="Birthday date"
                                        inputFormat="DD/MM/yyyy"
                                        value={valueTime}
                                        onChange={handleChangeTime}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/signIn" variant="body2">
                                    Already have an account? Sign in
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}