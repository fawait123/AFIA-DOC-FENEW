import PropTypes from 'prop-types'
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material'
import LogoSection from 'layout/MainLayout/LogoSection'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = ({ pages, open, drawerToggle }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            variant="persistent"
            sx={{
                width: 300,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <LogoSection />
                <IconButton onClick={drawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <List sx={{ paddingX: 3, paddingY: 5 }}>
                {pages.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Link
                            to={item.path}
                            style={{
                                width: '100%',
                                display: 'flex',
                                textDecoration: 'none',
                                color: '#000000',
                            }}
                        >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

Sidebar.propTypes = {
    pages: PropTypes.array,
    open: PropTypes.bool,
    drawerToggle: PropTypes.func,
}

export default Sidebar
