import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
// ICONS 
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './../style/Style.css';


const drawerWidth = 240;

const linkStyle = {
    "text-decoration": "none"
}

const drawerContent = [
    {
        "icon": "AccountCircleOutlinedIcon",
        "text": "PROFILE",
        "link": "/profile"
    },
    {
        "icon": "AccountCircleOutlinedIcon",
        "text": "PROFILE",
        "link": "/profile"
    }
];

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Navbar(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                    <NavLink to="/profile"
                        style={isActive => ({
                            textDecoration: 'none',
                            color: isActive ? "blue" : "grey"
                        })}
                    >
                        <ListItem button key={"item"}>
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Profile"} />
                        </ListItem>
                    </NavLink>

                    <NavLink to="/tripSearch" style={isActive => ({
                        textDecoration: 'none',
                        color: isActive ? "blue" : "grey"
                    })}>
                        <ListItem button key={"item"}>
                            <ListItemIcon>
                                <SearchOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Trip Search"} />
                        </ListItem>
                    </NavLink>

                    <NavLink to="/myTrips" style={isActive => ({
                        textDecoration: 'none',
                        color: isActive ? "blue" : "grey"
                    })}>
                        <ListItem button key={"item"}>
                            <ListItemIcon>
                                <BookmarksOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"My Trips"} />
                        </ListItem>
                    </NavLink>

                    <NavLink to="/newTrip" style={isActive => ({
                        textDecoration: 'none',
                        color: isActive ? "blue" : "grey"
                    })}>
                        <ListItem button key={"item"}>
                            <ListItemIcon>
                                <AddCircleOutlineRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"New Trip"} />
                        </ListItem>
                    </NavLink>

                </List>
            </Drawer >
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {props.children}
            </Box>
        </Box >
    );
}
