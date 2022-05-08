import React, { useState, useLayoutEffect, useContext } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useHttpClient } from './../../util/http-hook';
import { AuthContext } from "../../util/auth-context";


import "./../../style/images.css";
import { reduce_image_file_size } from "./../../util/compressImage";
import Copyright from "../../components/Copyright";


const GetProfilePictureSize = () => {
    // const w = window.innerWidth;
    // console.log(w);
    // return 200;
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    if (size[0] > 1024) {
        return size[1] / 3;
    }
    else return size[0] / 3;
}

const Profile = () => {
    const auth = useContext(AuthContext);
    const [valueGender, setValueGender] = React.useState('male');
    const [accountInfo, setAccountInfo] = React.useState({});
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    'user/profile',
                    'GET',
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setAccountInfo(responseData.user);
                setValueGender(accountInfo.gender);
                console.log(accountInfo.location);
            } catch (err) { }
        };
        fetchUsers();
    }, [sendRequest]);

    const handleChangeGender = (event) => {
        setValueGender(event.target.value);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setAccountInfo(accountInfo => ({
            ...accountInfo,
            [name]: value
        }));
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const addImage = (registrationData) => {
        if (!selectedFile)
            updateUser(registrationData);
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            registrationData.image = reader.result;
            updateUser(registrationData);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    }

    const updateUser = async (registrationData) => {
        if (registrationData.image) {
            const resizedImage = await reduce_image_file_size(registrationData.image);
            registrationData.image = resizedImage;
        }
        try {
            const responseData = await sendRequest(
                'user/profile',
                'PATCH',
                JSON.stringify(registrationData),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            setAccountInfo(responseData.user);
            setValueGender(accountInfo.gender);
            window.location.reload(false);

        } catch (err) { }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        const data = new FormData(event.currentTarget);
        const registrationData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            phone: data.get('phone'),
            location: {
                location: data.get('city'),
                country: data.get('country')
            },
            gender: data.get('gender'),
            image: ''
        }
        addImage(registrationData);
    };


    return (
        <Container>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container spacing={2}>

                <Grid item xs={2}></Grid>
                <Grid item container xs={8} spacing={4} component="form" noValidate onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div >
                                <Avatar
                                    sx={{ width: GetProfilePictureSize(), height: GetProfilePictureSize() }}
                                    alt="Remy Sharp"
                                    src={accountInfo.image} />
                            </div>
                            <div>
                                <Typography component="h1" variant="h5">
                                    Rating
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            name="firstName"
                            value={accountInfo.firstName}
                            label='First Name'
                            required
                            fullWidth
                            id="firstName"
                            InputLabelProps={{
                                shrink: true
                            }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            name="lastName"
                            value={accountInfo.lastName}
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            name="phone"
                            value={accountInfo.phone}
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            name="email"
                            value={accountInfo.email}
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            name="username"
                            value={accountInfo.username}
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            disabled
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                name="gender"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={valueGender || accountInfo.gender}
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
                        <TextField
                            onChange={handleFormChange}
                            required
                            fullWidth
                            value={accountInfo.location}
                            id="city"
                            label="City"
                            name="city"
                            autoComplete="city"
                            InputLabelProps={{
                                shrink: true
                            }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={handleFormChange}
                            required
                            fullWidth
                            value={accountInfo.country}
                            id="country"
                            label="Country"
                            name="country"
                            autoComplete="country"
                            InputLabelProps={{
                                shrink: true
                            }}

                        />
                    </Grid>
                    <Grid item container spacing={4} xs={12}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                component="label"
                                fullWidth
                            // sx={{ margin: 2 }}
                            >
                                Change picture
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
                        <Grid item xs={12} sm={6}>
                            <Button
                                color="success"
                                type="submit"
                                fullWidth
                                variant="contained"
                            // sx={{ margin: 2 }}
                            // sx={{ mt: 3, mb: 2 }}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Copyright />
        </Container>
    )
}

export default Profile;