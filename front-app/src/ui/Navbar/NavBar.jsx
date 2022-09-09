import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    AppBar, 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem,
    ListItemButton, 
    ListItemText, 
    Toolbar, 
    Typography, 
    Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './style.css';

const drawerWidth = 240;
const navItems = ['Home', 'Search'];

export const NavBar = (props) => {

    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                App
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ background: '#636e72' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        App
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                    listStyle: 'none',
                                }}
                                to="/"
                                className={({ isActive }) => `activeStyle ${isActive ? 'active' : ''}`}
                            >
                                HOME
                            </NavLink>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                    listStyle: 'none',
                                }}
                                to="/search"
                                className={({ isActive }) => `activeStyle ${isActive ? 'active' : ''}`}
                            >
                                SEARCH
                            </NavLink>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}