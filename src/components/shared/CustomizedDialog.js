import React, { useEffect, useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';

import { AuthContext } from './../../util/auth-context';
import { useHttpClient } from './../../util/http-hook';

export default function CustomizedDialog(props) {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState(<div></div>);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const handelChangeDescription = (event) => {
    //     event.preventDefault();
    //     setDescription(event.value);
    // }

    // const handelChangeTitle = (event) => {
    //     event.preventDefault();
    //     setTitle(event.value);
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(title, description);
        const data = new FormData(event.currentTarget);
        const registrationData = {
            title: data.get('title'),
            description: data.get('description')
        }
        try {
            const responseData = await sendRequest(
                `group/post/${props.groupId}`,
                'POST',
                JSON.stringify(registrationData),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
        } catch (err) { }
    }

    useEffect(() => {
        if (props.type === 'readMore') {
            setDialog(
                <div>
                    <Button onClick={handleClickOpen}>
                        Read More
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>{props.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {props.description}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
        if (props.type === 'addPost') {
            setDialog(
                <div>
                    <Button onClick={handleClickOpen}>
                        <Typography color='white'> Add Post </Typography>
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>New Post</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            </DialogContentText>
                            <Box component="form" noValidate onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    id="title"
                                    name="title"
                                    label="Post title"
                                    type="text"
                                    fullWidth
                                    variant="standard"

                                // onChange={handelChangeTitle}
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    name="description"
                                    label="Post description"
                                    type="text"
                                    fullWidth
                                    variant="standard"

                                // onChange={handelChangeDescription}
                                />
                                <DialogActions>
                                    <Button type="submit">Submit</Button>
                                </DialogActions>
                            </Box>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
    }, [open, props.type])


    return (
        <div>
            {dialog}
        </div>
        // <div>
        //     <Button variant="outlined" onClick={handleClickOpen}>
        //         Open form dialog
        //     </Button>
        //     <Dialog open={open} onClose={handleClose}>
        //         <DialogTitle>Subscribe</DialogTitle>
        //         <DialogContent>
        //             <DialogContentText>
        //                 To subscribe to this website, please enter your email address here. We
        //                 will send updates occasionally.
        //             </DialogContentText>
        //             <TextField
        //                 autoFocus
        //                 margin="dense"
        //                 id="name"
        //                 label="Email Address"
        //                 type="email"
        //                 fullWidth
        //                 variant="standard"
        //             />
        //         </DialogContent>
        //         <DialogActions>
        //             <Button onClick={handleClose}>Cancel</Button>
        //             <Button onClick={handleClose}>Subscribe</Button>
        //         </DialogActions>
        //     </Dialog>
        // </div>
    );
}
