import React, { useState, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

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
import { Divider } from '@mui/material';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';

import { AuthContext } from './../../util/auth-context';
import { useHttpClient } from './../../util/http-hook';
import { makeRequest } from '../../util/requests';
import UploadImage from '../../components/UploadImage';
import { reduce_image_file_size } from "./../../util/compressImage";
import Copyright from '../../components/Copyright';


const theme = createTheme();

const NewTrip = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    let history = useHistory();

    const [valueTimeStart, setValueTimeStart] = React.useState(new Date('2014-08-18T21:11:54'));
    const [valueTimeEnd, setValueTimeEnd] = React.useState(new Date('2014-08-25T21:11:54'));
    const [privateTrip, setPrivateTrip] = React.useState('no');
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

    const handleChangeTimeStart = (newValue) => {
        setValueTimeStart(newValue);
    };

    const handleChangeTimeEnd = (newValue) => {
        setValueTimeEnd(newValue);
    };

    const handleChangePrivateTrip = (event) => {
        setPrivateTrip(event.target.value);
    };

    const createArrayOfTags = tags => {
        const arrayOfTags = tags.replace(/ /g, '').split('#');
        arrayOfTags.shift();
        return arrayOfTags;
    }

    const addImage = (registrationData) => {
        if (!selectedFile) {
            registerGroup(registrationData);
        }
        else {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                registrationData.image = reader.result;
                registerGroup(registrationData);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };
        }
    }

    const registerGroup = async (registrationData) => {
        let resizedImage;
        if (registrationData.image)
            resizedImage = await reduce_image_file_size(registrationData.image);
        registrationData.image = resizedImage;
        console.log(registrationData.image)
        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/group/',
                'POST',
                JSON.stringify(registrationData),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            history.push('/myTrips');
        } catch (err) { }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        const data = new FormData(event.currentTarget);
        const tags = createArrayOfTags(data.get('tags'));
        const registrationData = {
            title: data.get('tripTitle'),
            description: data.get('description'),
            isPrivate: privateTrip,
            password: data.get('password'),
            location: {
                location: data.get('location'),
                country: data.get('country')
            },
            startDate: valueTimeStart.toISOString(),
            endDate: valueTimeEnd.toISOString(),
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

                    <Typography component="h1" variant="h3">
                        Create a new trip
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Trip title"
                                    name="tripTitle"
                                    required
                                    fullWidth
                                    id="tripTitle"
                                    label="Trip title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="Description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="tags"
                                    label="Tags"
                                    name="tags"
                                    autoComplete="Tags"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Is this trip private?</InputLabel>
                                    <Select
                                        name="PrivateTrip"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={privateTrip}
                                        label="Is this trip private?"
                                        onChange={handleChangePrivateTrip}
                                    >
                                        <MenuItem value={'yes'}>Yes</MenuItem>
                                        <MenuItem value={'no'}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {privateTrip === 'yes' &&
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        label="Group password"
                                        name="password"
                                        autoComplete="Group password"
                                    />
                                </Grid>}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name="location"
                                    autoComplete="Location"
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
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={DateAdapter}>
                                    <MobileDatePicker
                                        name="startDate"
                                        label="Start date"
                                        inputFormat="DD/MM/yyyy"
                                        value={valueTimeStart}
                                        onChange={handleChangeTimeStart}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={DateAdapter}>
                                    <MobileDatePicker
                                        name="endDate"
                                        label="End date"
                                        inputFormat="DD/MM/yyyy"
                                        value={valueTimeEnd}
                                        onChange={handleChangeTimeEnd}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item sm={12}>
                                <Button
                                    variant="contained"
                                    component="label"
                                >
                                    Upload Image
                                    <input
                                        id="fileInput"
                                        type="file"
                                        name="image"
                                        onChange={handleFileInputChange}
                                        value={fileInputState}
                                        className="form-input"
                                        hidden
                                    />
                                </Button>
                                {previewSource && (
                                    <div>
                                        <Box
                                            sx={{ margin: 1 }}
                                        >
                                            <img
                                                src={previewSource}
                                                alt="chosen"
                                                style={{ height: '300px' }}
                                            />
                                        </Box>
                                    </div>
                                )}
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            color="success"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Group
                        </Button>
                    </Box>

                </Box>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}

export default NewTrip;