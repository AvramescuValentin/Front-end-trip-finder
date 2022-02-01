import React, { useState, useLayoutEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import "./../../style/images.css"




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
                <Grid item xs={8}>
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
                                Sign up
                            </Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Container>
    )
}

export default Profile;