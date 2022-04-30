import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';

import { AuthContext } from './../../util/auth-context';
import { useHttpClient } from './../../util/http-hook';
import { makeRequest } from '../../util/requests';
import UploadImage from '../../components/UploadImage';





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
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [valueTime, setValueTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [valueGender, setValueGender] = React.useState(0);
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleChangeTime = (newValue) => {
        setValueTime(newValue);
    };

    const handleChangeGender = (event) => {
        setValueGender(event.target.value);
    };

    const createArrayOfTags = tags => {
        const arrayOfTags = tags.replace(/ /g, '').split('#');
        arrayOfTags.shift();
        return arrayOfTags;
    }

    const getImage = async () => {
        if (!selectedFile) return null;
        else {
            const reader = new FileReader();
            await reader.readAsDataURL(selectedFile);
            reader.onloadend = async () => {
                console.log(reader.result)
                // JSON.stringify(reader.result);
                console.log("return");
                const image = await JSON.stringify({ data: reader.result })
                return image;
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };
        }
    }

    const addImage = (registrationData) => {
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            registrationData.image = reader.result;
            registerUser(registrationData);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    }

    const registerUser = async (registrationData) => {
        console.log(registrationData.image)
        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/user/signup',
                'POST',
                JSON.stringify(registrationData),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.token);
        } catch (err) { }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        const data = new FormData(event.currentTarget);
        const tags = createArrayOfTags(data.get('tags'));
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
            dateOfBirth: valueTime.toISOString(),
            tags: tags,
            image: ''
        }
        addImage(registrationData);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}

                >
                    <CircularProgress color="inherit" />
                </Backdrop>
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
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="tags"
                                    name="tags"
                                    fullWidth
                                    id="tags"
                                    label="Tags"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                            <input
                                id="fileInput"
                                type="file"
                                name="image"
                                onChange={handleFileInputChange}
                                value={fileInputState}
                                className="form-input"
                            />
                            {previewSource && (
                                <img
                                    src={previewSource}
                                    alt="chosen"
                                    style={{ height: '300px' }}
                                />
                            )}
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/signIn" variant="body2">
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>

                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}