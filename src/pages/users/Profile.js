import React, { useState, useLayoutEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


import "./../../style/images.css";


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




    const image = "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg";
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item xs={2}></Grid>
                <Grid item container xs={8} spacing={4}>
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
                                    src={image} />
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
                            name="firstName"
                            defaultValue="Prenume"
                            label='First Name'
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="lastName"
                            defaultValue="Nume Familie"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="phone"
                            defaultValue="0737014595"
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="email"
                            defaultValue="test@gmail.com"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="username"
                            defaultValue="Arknous@196"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            disabled
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={1}
                                label="Gender"
                            // onChange={handleChange}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
                                <MenuItem value={4}>Not specify</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Container>
    )
}

export default Profile;