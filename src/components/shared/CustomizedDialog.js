import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function CustomizedDialog(props) {
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState(<div></div>);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Post title"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="description"
                                label="Post description"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }
    })


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
